#!/usr/bin/env bash
# One-time setup for the narration voices (VOICEVOX core + two voice models, about 130 MB, Linux x64).
# Installs into ~/.cache/tj-voicevox (override with VOICEVOX_HOME). Other platforms: use the matching
# files from https://github.com/VOICEVOX/voicevox_core/releases and https://github.com/VOICEVOX/onnxruntime-builder/releases.
set -euo pipefail
H="${VOICEVOX_HOME:-$HOME/.cache/tj-voicevox}"
V=0.16.3
B=https://github.com/VOICEVOX
mkdir -p "$H" && cd "$H"
pip install --break-system-packages pyopenjtalk   # only used for its Open JTalk dictionary
W=voicevox_core-$V-cp310-abi3-manylinux_2_34_x86_64.whl
[ -f "$W" ] || curl -fL -o "$W" "$B/voicevox_core/releases/download/$V/$W"
pip install --break-system-packages "./$W"
[ -d voicevox_onnxruntime-linux-x64-1.17.3 ] || { curl -fL -o ort.tgz "$B/onnxruntime-builder/releases/download/voicevox_onnxruntime-1.17.3/voicevox_onnxruntime-linux-x64-1.17.3.tgz" && tar xzf ort.tgz && rm ort.tgz; }
for n in 0 4; do [ -f $n.vvm ] || curl -fL -o $n.vvm "$B/voicevox_vvm/releases/download/$V/$n.vvm"; done
echo "Done. Voices: 0.vvm (Kasukabe Tsumugi), 4.vvm (Kurono Takehiro)."
