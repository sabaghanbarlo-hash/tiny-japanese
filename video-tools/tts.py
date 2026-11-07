# Japanese text-to-speech for the lesson videos and "Hear it" buttons: the same neural voices as the Mika and Alex
# videos (Microsoft Edge voices via edge-tts). Mika = ja-JP-NanamiNeural, Alex = ja-JP-KeitaNeural.
# Reads a JSON list [{key, text, voice, speed}] on stdin, writes <outdir>/<key>.wav (mono 16-bit, cached)
# and prints {key: seconds} as JSON. Needs: pip install edge-tts numpy, and ffmpeg. Needs internet access.
import sys, os, json, wave, asyncio, subprocess, re
import numpy as np
import edge_tts

VOICES = {"mika": "ja-JP-NanamiNeural", "alex": "ja-JP-KeitaNeural"}
KANA = re.compile(r"^[\u3041-\u3096\u30a1-\u30fa\u30fc]{1,2}$")
sys.stdin.reconfigure(encoding="utf-8")  # the CI runner defaults to ASCII
sys.stdout.reconfigure(encoding="utf-8")
outdir = sys.argv[1]
os.makedirs(outdir, exist_ok=True)
jobs = json.load(sys.stdin)

def rate(speed):
    return "%+d%%" % round((speed - 1.0) * 100)

async def one(j, sem):
    wav = os.path.join(outdir, j["key"] + ".wav")
    if os.path.exists(wav):
        return
    text = j["text"].strip()
    if KANA.match(text):
        text = text + "\u3002"  # a full stop makes the voice say the sound as a clean, complete syllable
    mp3 = wav + ".mp3"
    last = None
    async with sem:
        for attempt in range(1, 7):
            try:
                await edge_tts.Communicate(text, VOICES[j["voice"]], rate=rate(j.get("speed", 1.0))).save(mp3)
                if os.path.getsize(mp3) < 800:
                    raise RuntimeError("empty audio")
                break
            except Exception as e:
                last = e
                await asyncio.sleep(2 * attempt)
        else:
            sys.exit("ERROR: voice service failed for %r: %s" % (text, last))
    tmp = wav + ".tmp.wav"
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", mp3, "-ac", "1", "-ar", "24000", "-sample_fmt", "s16", tmp], check=True)
    os.remove(mp3)
    with wave.open(tmp, "rb") as w:
        sr = w.getframerate()
        x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)
    os.remove(tmp)
    loud = np.where(np.abs(x) > 300)[0]
    if len(loud) == 0:
        sys.exit("ERROR: silent audio for %r" % text)
    # keep a short lead-in and tail so soft consonants are never clipped
    x = x[max(0, loud[0] - int(0.08 * sr)): loud[-1] + int(0.15 * sr)]
    with wave.open(wav, "wb") as o:
        o.setnchannels(1); o.setsampwidth(2); o.setframerate(sr); o.writeframes(x.tobytes())

async def main():
    sem = asyncio.Semaphore(4)
    await asyncio.gather(*[one(j, sem) for j in jobs])

asyncio.run(main())
durs = {}
for j in jobs:
    with wave.open(os.path.join(outdir, j["key"] + ".wav"), "rb") as w:
        durs[j["key"]] = w.getnframes() / w.getframerate()
print(json.dumps(durs))
