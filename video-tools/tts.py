# Japanese text-to-speech for the lesson videos and "Hear it" buttons, using VOICEVOX (neural voices).
# Reads a JSON list [{key, text, voice, speed}] on stdin, writes <outdir>/<key>.wav (mono 16-bit, cached)
# and prints {key: seconds} as JSON. First run `video-tools/setup-tts.sh`.
# Voices: "mika" = 春日部つむぎ (Kasukabe Tsumugi), "alex" = 玄野武宏 (Kurono Takehiro).
# Credit required when published:  VOICEVOX:春日部つむぎ / VOICEVOX:玄野武宏   (https://voicevox.hiroshiba.jp)
import sys, os, io, glob, json, wave
import numpy as np
import pyopenjtalk
from voicevox_core.blocking import Onnxruntime, OpenJtalk, Synthesizer, VoiceModelFile

home = os.environ.get("VOICEVOX_HOME", os.path.expanduser("~/.cache/tj-voicevox"))
outdir = sys.argv[1]
os.makedirs(outdir, exist_ok=True)
VOICES = {"mika": ("0.vvm", 8), "alex": ("4.vvm", 11)}

jobs = json.load(sys.stdin)
durs = {}
todo = [j for j in jobs if not os.path.exists(os.path.join(outdir, j["key"] + ".wav"))]
if todo:
    lib = glob.glob(os.path.join(home, "voicevox_onnxruntime-*", "lib", "libvoicevox_onnxruntime.so.*"))[0]
    dic = pyopenjtalk.OPEN_JTALK_DICT_DIR
    dic = dic.decode() if isinstance(dic, bytes) else dic
    synth = Synthesizer(Onnxruntime.load_once(filename=lib), OpenJtalk(dic))
    for name in sorted({VOICES[j["voice"]][0] for j in todo}):
        with VoiceModelFile.open(os.path.join(home, name)) as m:
            synth.load_voice_model(m)
    for j in todo:
        sid = VOICES[j["voice"]][1]
        q = synth.create_audio_query(j["text"], sid)
        q.speed_scale = j.get("speed", 1.0)
        q.pre_phoneme_length = 0.0
        q.post_phoneme_length = 0.05
        w = wave.open(io.BytesIO(synth.synthesis(q, sid)))
        sr = w.getframerate()
        x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)
        # Trim silence, but keep a lead-in so quiet consonant bursts (k, t, p) are never cut off.
        loud = np.where(np.abs(x) > 80)[0]
        if len(loud):
            x = x[max(0, loud[0] - int(0.08 * sr)): loud[-1] + int(0.12 * sr)]
        with wave.open(os.path.join(outdir, j["key"] + ".wav"), "wb") as o:
            o.setnchannels(1); o.setsampwidth(2); o.setframerate(sr); o.writeframes(x.tobytes())
for j in jobs:
    with wave.open(os.path.join(outdir, j["key"] + ".wav"), "rb") as w:
        durs[j["key"]] = w.getnframes() / w.getframerate()
print(json.dumps(durs))
