# CEMESC — Motion Design | Palpitações e prevenção das arritmias

Pacote de produção audiovisual para Claude Code, desenvolvido a partir de roteiro, locução e logo fornecidos/aprovados no projeto CEMESC em 12/11/2026.

## Executar

1. Leia integralmente [`PROMPT_CLAUDE_CODE.md`](./PROMPT_CLAUDE_CODE.md).
2. Confira os SHA-256 e a duração dos ativos no [`MANIFEST.json`](./MANIFEST.json).
3. Use exclusivamente a locução [`assets/CEMESC_Narracao_Palpitacoes_20261112_Leni.mp3`](./assets/CEMESC_Narracao_Palpitacoes_20261112_Leni.mp3) como timeline mestra, sem cortes.
4. Insira a [`assets/CEMESC_Logo_Oficial_20261112.png`](./assets/CEMESC_Logo_Oficial_20261112.png) como imagem inteira. Não a redesenhe.
5. Gere **apenas a prévia com som dos primeiros ~12 segundos** e solicite aprovação antes de renderizar o master.

**Comando curto para Claude Code:**

> Leia integralmente `PROMPT_CLAUDE_CODE.md` e `MANIFEST.json`. Verifique por SHA-256 a narração e a logo da pasta `assets/`. Produza o projeto editável e **somente** a prévia audiovisual 0–12s, com direção editorial, motion e sound design, sem alterar copy, locução e logo. Faça QA, identifique materiais não licenciados e aguarde minha aprovação antes do filme completo.

## Organização

- `PROMPT_CLAUDE_CODE.md`: briefing integral, copy bloqueada, storyboard e direção técnica.
- `MANIFEST.json`: inventário e integridade dos arquivos oficiais.
- `assets/`: arquivos originais enviados nesta campanha.

## Cautelas

A CEMESC é uma clínica real. Não criar rostos da equipe, CRM, dados de pacientes, serviços ou disponibilidade sem fontes verificadas. Não reutilizar materiais da Internet JVX da campanha anterior. Este repositório atualmente é **público**; verificar permissões e licenças antes de qualquer divulgação.

## Histórico preservado

O conteúdo antigo da Internet JVX permanece na branch `backup-jvx-antes-cemesc-20261112`, criada antes da substituição. A `main` foi dedicada ao novo pacote CEMESC.
