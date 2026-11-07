# Japanese text-to-speech for the lesson videos and "Hear it" buttons, using Voice Studio (OmniVoice engine).
# Drop-in replacement for tts.py (VOICEVOX): reads a JSON list [{key, text, voice, speed}] on stdin, writes
# <outdir>/<key>.wav (mono 16-bit, cached) and prints {key: seconds} as JSON on stdout.
# Voices: "mika" and "alex" are cloned from video-tools/voices/<name>.wav (+ <name>.txt, its transcript).
# Those two samples are created once by the "Voice test" workflow (voice_test.py) and committed after you pick them.
# Quality guard: every clip is listened to by a speech-recognition pass (Whisper). A clip that does not say what it
# should is re-made with another random seed; anything still doubtful is listed in <outdir>/tts-report.json.
import sys, os, json, wave, re, difflib
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
VOICE_DIR = os.environ.get("TJ_VOICE_DIR", os.path.join(HERE, "voices"))
STEPS = int(os.environ.get("TJ_STEPS", "32"))
REF_LINE_JA = "こんにちは。タイニー・ジャパニーズへようこそ。いっしょに、ゆっくり日本語を勉強しましょう。"
REF_LINE_EN = "Hello! Welcome to Tiny Japanese. Let's learn some Japanese together, nice and slowly."
DESIGN = {"mika": "female, young adult, moderate pitch", "alex": "male, young adult, moderate pitch"}
KANA = re.compile(r"[ぁ-ゖァ-ヺー]+")
_state = {}


def model():
    if "m" not in _state:
        import torch
        from omnivoice import OmniVoice
        torch.set_num_threads(os.cpu_count() or 2)
        print("loading the Voice Studio model...", file=sys.stderr, flush=True)
        _state["m"] = OmniVoice.from_pretrained("k2-fsa/OmniVoice", device_map="cpu", dtype=torch.float32)
    return _state["m"]


def sample_rate():
    return int(getattr(model(), "sampling_rate", 24000))


def seeded(seed):
    import random, torch
    random.seed(seed); np.random.seed(seed); torch.manual_seed(seed)


def to_np(wav):
    return wav.detach().cpu().float().numpy().reshape(-1)


def trim(x, thr=0.012, lead=0.08, tail=0.12):
    sr = sample_rate()
    idx = np.where(np.abs(x) > thr)[0]
    if len(idx) == 0:
        return x
    return x[max(0, idx[0] - int(lead * sr)): idx[-1] + int(tail * sr)]


def first_segment(x, thr=0.012, gap=0.15, lead=0.08, tail=0.12):
    """Keep only the first spoken chunk (used when a syllable was said twice, 'ゲ、ゲ')."""
    sr = sample_rate()
    idx = np.where(np.abs(x) > thr)[0]
    if len(idx) == 0:
        return x
    breaks = np.where(np.diff(idx) > int(gap * sr))[0]
    end = idx[breaks[0]] if len(breaks) else idx[-1]
    return x[max(0, idx[0] - int(lead * sr)): end + int(tail * sr)]


def write_wav(path, x):
    x = np.clip(x, -1, 1)
    with wave.open(path, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(sample_rate())
        w.writeframes((x * 32767).astype(np.int16).tobytes())


# ---- voices -------------------------------------------------------------------------------------
def design_ref(voice, seed, lang="ja"):
    """Make a brand-new voice from a text description (Voice Design). Returns (audio, transcript)."""
    text = REF_LINE_JA if lang == "ja" else REF_LINE_EN
    seeded(seed)
    wav = model().generate(text=text, language=lang, instruct=DESIGN[voice], num_step=STEPS)[0]
    return trim(to_np(wav)), text


def prompt_from(wav_path, text):
    return model().create_voice_clone_prompt(ref_audio=wav_path, ref_text=text)


def synth(text, prompt, speed, seed):
    seeded(seed)
    wav = model().generate(text=text, language="ja", voice_clone_prompt=prompt, num_step=STEPS, speed=speed)[0]
    return to_np(wav)


# ---- listening check ----------------------------------------------------------------------------
def hear(x):
    import torch, torchaudio
    if "asr" not in _state:
        from transformers import pipeline
        _state["asr"] = pipeline("automatic-speech-recognition", model="openai/whisper-small", device=-1)
    t = torchaudio.functional.resample(torch.from_numpy(x.astype(np.float32)), sample_rate(), 16000).numpy()
    out = _state["asr"]({"raw": t, "sampling_rate": 16000}, generate_kwargs={"language": "japanese", "task": "transcribe"})
    return out["text"]


def hira(t):
    import pykakasi
    if "kks" not in _state:
        _state["kks"] = pykakasi.kakasi()
    s = "".join(p["hira"] for p in _state["kks"].convert(t))
    return re.sub(r"[^ぁ-ゖー]", "", s)


def score(expected, heard):
    a, b = hira(expected), hira(heard)
    if not a:
        return 1.0
    if len(a) == 1:
        return 1.0 if a in b else 0.0
    return difflib.SequenceMatcher(None, a, b).ratio()


def render(job, prompt):
    """Say job['text'] and check it. Single kana are the hard case, so they get extra tries with a short carrier."""
    text, speed = job["text"], job.get("speed", 1.0)
    kana = len(text) <= 2 and KANA.fullmatch(text) is not None
    if kana:
        attempts = [(v, s) for s in (0, 1) for v in (text + "。", text + "、" + text)]
        need = 1.0
    else:
        attempts = [(text, s) for s in range(3)]
        need = 0.8
    best = None
    for v, seed in attempts:
        x = synth(v, prompt, speed, seed)
        x = first_segment(x) if "、" in v and kana else trim(x)
        h = hear(x)
        s = score(text, h)
        info = {"said": v, "seed": seed, "heard": h, "score": round(s, 2)}
        if best is None or s > best[1]["score"]:
            best = (x, info)
        if s >= need:
            break
    x, info = best
    peak = float(np.abs(x).max()) or 1.0
    info["ok"] = info["score"] >= need
    return x / peak * 0.9, info


def main():
    outdir = sys.argv[1]
    os.makedirs(outdir, exist_ok=True)
    jobs = json.load(sys.stdin)
    path = lambda j: os.path.join(outdir, j["key"] + ".wav")
    todo = [j for j in jobs if not os.path.exists(path(j))]
    real_stdout, sys.stdout = sys.stdout, sys.stderr  # keep stdout clean for the JSON answer
    if todo:
        prompts = {}
        for v in sorted({j["voice"] for j in todo}):
            wav, txt = os.path.join(VOICE_DIR, v + ".wav"), os.path.join(VOICE_DIR, v + ".txt")
            if not (os.path.exists(wav) and os.path.exists(txt)):
                sys.exit(f"Missing voice sample {wav} (+ .txt). Run the 'Voice test' workflow and pick a voice first.")
            prompts[v] = prompt_from(wav, open(txt, encoding="utf-8").read().strip())
        rep_path = os.path.join(outdir, "tts-report.json")
        report = json.load(open(rep_path)) if os.path.exists(rep_path) else {}
        for n, j in enumerate(todo, 1):
            x, info = render(j, prompts[j["voice"]])
            write_wav(path(j), x)
            report[j["key"]] = {"text": j["text"], "voice": j["voice"], **info}
            print(f"[{n}/{len(todo)}] {j['text'][:24]}  heard={info['heard'][:24]}  ok={info['ok']}", file=sys.stderr, flush=True)
            json.dump(report, open(rep_path, "w"), ensure_ascii=False, indent=1)
    sys.stdout = real_stdout
    durs = {}
    for j in jobs:
        with wave.open(path(j), "rb") as w:
            durs[j["key"]] = w.getnframes() / w.getframerate()
    print(json.dumps(durs))


if __name__ == "__main__":
    main()
