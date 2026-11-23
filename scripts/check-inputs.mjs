import fs from 'node:fs';
import path from 'node:path';

const files = [
  'CLAUDE.md',
  'docs/00_STATUS_E_APROVACOES.md',
  'docs/06_TAREFA_CLAUDE.md',
  'src/Root.tsx',
  'src/compositions/StoryPilot.tsx',
];

let errors = 0;
for (const name of files) {
  const exists = fs.existsSync(path.join(process.cwd(), name));
  process.stdout.write((exists ? 'OK  ' : 'FAIL') + ' ' + name + '\n');
  if (!exists) errors++;
}
const assetRoot = path.join(process.cwd(), 'assets');
const entries = fs.existsSync(assetRoot) ? fs.readdirSync(assetRoot) : [];
console.log('Assets da marca oficialmente disponíveis:', entries.filter(x => x !== 'README.md').length);
console.log('ATENÇÃO: assets oficiais/voz/roteiro final ainda não aprovados. Piloto é técnico.');
process.exit(errors ? 1 : 0);
