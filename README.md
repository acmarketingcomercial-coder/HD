# Internet JVX — O perigo que você não vê.

Novo projeto de Motion Design com **narração aprovada de 44,826063 segundos** e seis cenas.

## Começar

Leia integralmente [PROMPT_CLAUDE_CODE.md](./PROMPT_CLAUDE_CODE.md). O arquivo inclui roteiro e copy bloqueada, storyboard, direção cinematográfica, sound design, especificação Remotion/FFmpeg e QA.

## Assets existentes

- ✅ [assets/Narracao_JVX_Chuva_Roberta_Oficial.mp3](./assets/Narracao_JVX_Chuva_Roberta_Oficial.mp3) — **presente e íntegro**. É a gravação desta campanha, preservada byte a byte a partir de `ElevenLabs_2026-11-12T04_02_36_Roberta - Casual, Engaging and Clear_pvc_s50_sim75_v4.mp3`. SHA-256 `5e39cd6b2dbdc8a600fcdc64a2a07c7173b708da72fe39ccab2220a7655fc552`.
- ⚠️ [assets/A-003_JVX_Logo_Oficial.png](./assets/A-003_JVX_Logo_Oficial.png) — **presente**, mas é uma versão PNG da campanha anterior de **282.537 bytes**, não exatamente os bytes do A-003 contido no pacote novo (**282.544 bytes; SHA-256 `0bf80ac3f39c929e5026c93e9f011468203c53bd162b1da72ef35da4cf3b1d9f`**). Substitua pela logo do pacote novo para cumprir o requisito de arquivo oficial idêntico. Não recriar.

O MP3 não precisa ser reenviado.

## Privacidade

**Atenção: o repositório está PÚBLICO.** A narração fica acessível a qualquer pessoa. Recomenda-se tornar **Private** em Settings → General → Danger Zone → Change repository visibility.

## Projeto anterior

O filme “Travou. Mas onde está o problema?” foi preservado na branch [backup-travou-jvx-antes-da-substituicao](../tree/backup-travou-jvx-antes-da-substituicao). A branch `main` contém apenas o novo briefing e assets desta campanha.

## Instrução para Claude Code

> Leia e execute integralmente o `PROMPT_CLAUDE_CODE.md` desta branch. Utilize `assets/Narracao_JVX_Chuva_Roberta_Oficial.mp3` como timeline mestra e `assets/A-003_JVX_Logo_Oficial.png` como marca oficial, após conferir/substituir o PNG pela cópia exata. Não reutilize arquivos nem código do filme anterior. Produza seis cenas em Remotion, com chuva realista e sound design narrativo, faça QA, renderize o MP4 e entregue o projeto editável. Registre as verificações de licença comercial antes da publicação.
