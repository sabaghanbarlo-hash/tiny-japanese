# Reads KanjiVG SVG files (kana only) from a folder and writes strokes.json: { "あ": ["M..", "M..", ".."], ... }
# KanjiVG: (c) Ulrich Apel, CC BY-SA 3.0, http://kanjivg.tagaini.net
import re, sys, json, glob, os
src, out = sys.argv[1], sys.argv[2]
data = {}
for f in sorted(glob.glob(os.path.join(src, "*.svg"))):
    cp = int(os.path.basename(f)[:-4], 16)
    s = open(f, encoding="utf-8").read()
    paths = re.findall(r'<path id="kvg:[0-9a-f]+-s(\d+)"[^>]*? d="([^"]+)"', s)
    paths.sort(key=lambda p: int(p[0]))
    data[chr(cp)] = [d for _, d in paths]
json.dump(data, open(out, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
print(len(data), "characters;", sum(len(v) for v in data.values()), "strokes")
