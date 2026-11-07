# Voice audition: makes a few candidate voices for Mika and Alex and says the hard kana (ga gi gu ge go),
# two words and one line with each, then checks every clip with speech recognition.
# Output goes to voice-test/<voice>-<style>/*.mp3 and voice-test/report.json.
#   -ja : the voice is designed while speaking Japanese
#   -en : the voice is designed speaking English, then reused to speak Japanese
import os, sys, json, subprocess
import numpy as np
import tts_omnivoice as T

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
OUT = os.path.join(ROOT, "voice-test")
SEED = {"mika": 11, "alex": 23}
LINE = {"mika": "はじめまして。わたしはミカです。", "alex": "はじめまして。ぼくはアレックスです。"}
TESTS = [("ga", "ガ"), ("gi", "ギ"), ("gu", "グ"), ("ge", "ゲ"), ("go", "ゴ"),
         ("word-arigatou", "ありがとう"), ("word-konnichiwa", "こんにちは")]


def mp3(x, path):
    tmp = path[:-4] + ".tmp.wav"  # never the same name as ref.wav
    T.write_wav(tmp, x)
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", tmp, "-ac", "1", "-c:a", "libmp3lame", "-q:a", "3", path], check=True)
    os.remove(tmp)


report = []
for voice in ("mika", "alex"):
    for style in ("ja", "en"):
        d = os.path.join(OUT, f"{voice}-{style}")
        os.makedirs(d, exist_ok=True)
        ref, ref_text = T.design_ref(voice, SEED[voice], style)
        ref_wav = os.path.join(d, "ref.wav")  # kept: this is the file to copy to video-tools/voices/<voice>.wav
        T.write_wav(ref_wav, ref)
        open(os.path.join(d, "ref.txt"), "w", encoding="utf-8").write(ref_text)
        mp3(ref, os.path.join(d, "ref.mp3"))
        prompt = T.prompt_from(ref_wav, ref_text)
        for name, text in TESTS + [("line", LINE[voice])]:
            x, info = T.render({"text": text, "speed": 0.85 if len(text) <= 2 else 0.9}, prompt)
            mp3(x, os.path.join(d, name + ".mp3"))
            report.append({"candidate": f"{voice}-{style}", "clip": name, "text": text, **info})
            print(f"{voice}-{style}/{name}: said={info['said']} heard={info['heard']} score={info['score']}", flush=True)
        json.dump(report, open(os.path.join(OUT, "report.json"), "w"), ensure_ascii=False, indent=1)
print("done")
