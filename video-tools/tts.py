# Japanese text-to-speech for the lesson videos. Reads a JSON list [{key, text, voice, speed}] on stdin,
# writes <outdir>/<key>.wav (48 kHz mono 16-bit, cached) and prints {key: seconds} as JSON.
# Needs: pip install pyopenjtalk   (first run downloads the Open JTalk dictionary)
# Voices: see voices/README.md (Tohoku-F01 for "mika", Mei for "alex"; both CC BY, credit required).
import sys, os, json, wave
import numpy as np
import pyopenjtalk
from pyopenjtalk import HTSEngine

here = os.path.dirname(os.path.abspath(__file__))
outdir = sys.argv[1]
os.makedirs(outdir, exist_ok=True)
engines = {
    "mika": HTSEngine(os.path.join(here, "voices", "tohoku-f01-neutral.htsvoice").encode()),
    "alex": HTSEngine(pyopenjtalk.DEFAULT_HTS_VOICE),
}
jobs = json.load(sys.stdin)
durs = {}
for j in jobs:
    path = os.path.join(outdir, j["key"] + ".wav")
    if not os.path.exists(path):
        eng = engines[j["voice"]]
        eng.set_speed(j.get("speed", 1.0))
        x = eng.synthesize(pyopenjtalk.extract_fullcontext(j["text"]))
        x = np.clip(x, -32768, 32767).astype(np.int16)
        # The synthesiser pads each clip with silence; trim it, keeping a short natural lead-in and tail.
        loud = np.where(np.abs(x) > 600)[0]
        if len(loud):
            sr = eng.get_sampling_frequency()
            x = x[max(0, loud[0] - int(0.06 * sr)): loud[-1] + int(0.12 * sr)]
        with wave.open(path, "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(eng.get_sampling_frequency())
            w.writeframes(x.tobytes())
    with wave.open(path, "rb") as w:
        durs[j["key"]] = w.getnframes() / w.getframerate()
print(json.dumps(durs))
