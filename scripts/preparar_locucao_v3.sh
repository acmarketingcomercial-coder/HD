#!/usr/bin/env bash
set -euo pipefail
IN="assets/narracao_franciele_reserva_programada_original.ogg"
OUT="assets/narracao_franciele_corrigida_v3.wav"
test -f "$IN" || { echo "Ausente: $IN"; exit 1; }
ffmpeg -hide_banner -loglevel error -y -i "$IN" -filter_complex \
"[0:a]highpass=f=78,lowpass=f=13000,afftdn=nr=7:nf=-45,equalizer=f=280:t=q:w=1.1:g=-1,equalizer=f=3200:t=q:w=1:g=1.2,acompressor=threshold=0.16:ratio=1.5:attack=12:release=140:makeup=1,alimiter=limit=0.84:level=0,asplit=2[a][b];[a]atrim=start=0.40:end=23.30,asetpts=PTS-STARTPTS[a1];[b]atrim=start=28.32:end=35.6335,asetpts=PTS-STARTPTS[a2];[a1][a2]acrossfade=d=0.015:c1=tri:c2=tri[out]" \
-map "[out]" -ar 48000 -ac 1 -c:a pcm_s24le "$OUT"
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1 "$OUT"
echo "OUVIR a emenda em t~22,9s antes de usar no vídeo. Preservar o OGG original."
