# Manifesto de entrada — CEMESC / Noctúria

Esta relação registra os arquivos recebidos no ChatGPT e o status de transporte para o GitHub. **Não inventar paths de trabalho.** No repositório público, manter recursos de clientes apenas com direitos de hospedagem confirmados.

| ID | Nome na origem | Tamanho | SHA-256 | Estado no GitHub | Papel |
|---|---|---:|---|---|---|
| AUD-VO-01 | `ElevenLabs_2026-11-18T22_05_48_Will - Deep, Smooth and Affectionate_pvc_sp100_s38_sb75_se16_m2.mp3` | 1.193.074 bytes | `3ecd0636b7f07b2fa6770cb860c84373df01f26f68cd66ce45c10a86e8ba62d9` | **A transferir por canal autorizado** | Narração de referência; 73,508563 s, mono, 44,1 kHz |
| LOGO-ATUAL-01 | `e.png` | 313.262 bytes | `83c7c683af79be208efae674b7142c566f3c7e93b46cebc867a457774048cdc9` | **A transferir por canal autorizado** | Imagem de logo mais recente apresentada pelo usuário, 1080×1080 RGBA |
| LOGO-HIST-01 | `Logo_Cemesc.png` | 40.208 bytes | `9ce02a33963cb2676a7d5d81aa713f5c922cecf9350fbace6ce5e101fac061e4` | **A transferir se necessário, não master** | Arquivo anterior do projeto, 1092×1092 RGB |
| BRIEFING-01 | `CEMESC_Urologia_AC_Motion_Studio_Codex_v01.md` | 32.919 bytes na origem | `abe798f32c7eb253bb7f3225a0a0b0afaaf836948adeabf2871187e13be8c6e0` | **Presente como texto extraído em BRIEFING_CODEX_v01.md** | Instrução de produção/autossuficiente |
| BRAND-ARCHIVE-01 | `CEMESC_Logo_Oficial_20261112.png` | 366.218 bytes | SHA-256 não conferido | Incluído em `references/CEMESC_Logo_Oficial_20261112_ARCHIVE.png`, copiado do backup histórico | Referência histórica apenas, não substituir LOGO-ATUAL-01 sem comparação |

## Tratamento de ativos

- Não usar marca antiga como solução de conveniência. Confirmar relação entre LOGO-ATUAL-01 e as referências históricas.
- Não substituir AUD-VO-01 por texto gerado em TTS; sua locução e duração são dados de montagem.
- Não incluir em GitHub público arquivos restritos ou cenas de bancos com licença que vede redistribuição; manter origem e licença em `assets_manifest.json`.
- Sem áudio original, a sincronia e a mixagem definitivas ficam **bloqueadas**.
- Sem logo aprovada, a assinatura final fica **bloqueada**.
- A cópia exata do briefing original é o artefato anexado; o Git contém o texto legível da versão de produção. Se houver necessidade de comprovação byte a byte, recuperar o original pelo canal autorizado.

## Checksum local (quando arquivos forem entregues ao Claude)

```bash
shasum -a 256 "ElevenLabs_2026-11-18T22_05_48_Will - Deep, Smooth and Affectionate_pvc_sp100_s38_sb75_se16_m2.mp3"
shasum -a 256 e.png
```

Compare os resultados com a tabela. Qualquer divergência exige inspeção de proveniência, não substituição silenciosa.

## Notas médicas
O briefing inclui fontes e pendências de validação. Não apresentar ilustrações sintéticas de pessoas como pacientes ou profissionais reais; não usar alegações além da copy.
