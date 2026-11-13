#!/usr/bin/env bash
set -euo pipefail

# Exemplo: bash importar_no_HD.sh /caminho/para/HD
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="${1:-}"
if [[ -z "$REPO" || ! -d "$REPO/.git" ]]; then
  echo 'Informe o caminho de um clone local do repositório HD: bash importar_no_HD.sh /caminho/para/HD' >&2
  exit 2
fi
cd "$REPO"
remote="$(git remote get-url origin 2>/dev/null || true)"
if [[ "$remote" != *"acmarketingcomercial-coder/HD"* ]]; then
  echo "Repositório diferente de acmarketingcomercial-coder/HD (origin: $remote)" >&2
  exit 3
fi
if [[ "$(git branch --show-current)" != "main" ]]; then
  echo 'Troque para o branch main antes de importar.' >&2
  exit 4
fi
if [[ -n "$(git status --porcelain)" ]]; then
  echo 'Há mudanças locais. Faça commit/stash antes da importação para evitar conflitos.' >&2
  exit 5
fi
mkdir -p assets
cp -v "$ROOT"/assets/* assets/
python3 - <<'PY'
import hashlib, pathlib
D={
 'narracao_franciele_reserva_programada_original.ogg':'17c09e3c53d1e8e69ead4809be1c5541669f7a04e0f8d8aea1a723d1589aee09',
 'narracao_franciele_reserva_programada_master.wav':'abe9323e17628ca958cee9198e0dedeb66ccf0cb2e2a0e42808d05cfe9bb07f7',
 'logo_franciele_fotografias_original.png':'50f35b71ff00e6d050f0d215b47ee712bbac5a5c7cca28beca7763f2ea4bfc06',
 'capa_carne_aberta_original.png':'2a0b4b6a530a110e31cdc899e622b314c635909fd3d47e95fe6243ae3aed5369',
 'mockup_carne_3d_aprovado.png':'cb686e387427c9778772a2b720b745003854eeaabca372f612455ab7e515b933',
}
for name,expected in D.items():
 actual=hashlib.sha256((pathlib.Path('assets')/name).read_bytes()).hexdigest()
 assert actual==expected, f'Falha de hash: {name}'
print('Hashes OK: 5/5 assets')
PY
# O manifesto declara importação pendente. Marcar presença nos arquivos esperados.
python3 - <<'PY'
import pathlib,json
p=pathlib.Path('MANIFEST.json')
if p.exists():
 d=json.loads(p.read_text(encoding='utf-8'))
 for f in d.get('files',[]):
  path=pathlib.Path(f.get('path',''))
  if path.is_file():f['present_in_repo']=True
 if all(pathlib.Path(f['path']).is_file() for f in d.get('files',[]) if f.get('required',False)):
  d['repository_binary_assets_status']='BASE_IMPORTADA'
  d['note']='Assets base importados e hashes conferidos; foto real autorizada ainda pendente para render final.'
 p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
PY
git add assets MANIFEST.json
git commit -m 'assets: importar midias originais Franciele Reserva Programada'
echo 'Arquivos conferidos e commitados. Para publicar: git push origin main'
