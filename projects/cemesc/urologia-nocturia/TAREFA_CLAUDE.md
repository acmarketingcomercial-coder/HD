# Claude Code — Ordem de produção | CEMESC Urologia

**Leia primeiro** [BRIEFING_CODEX_v01.md](BRIEFING_CODEX_v01.md) e [MANIFESTO_ASSETS.md](MANIFESTO_ASSETS.md). A copy v04, o conceito e a integração da CEMESC foram aprovados. A produção técnica é sua responsabilidade; a publicação não está autorizada.

## Objetivo
Produzir Reels vertical 1080×1920, 9:16, 30 fps sugeridos, guiado pela locução ElevenLabs original de duração aproximada 73,51 segundos. Vídeo de valor sobre noctúria com b-roll humanizado, diferenciação entre o motivo de acordar e a vontade de urinar, relação possível com inchaço das pernas, ressalvas e fechamento com atendimento em Urologia na CEMESC. Sem aparência de card estático animado.

## Passos
1. Localize os assets originais recebidos separadamente do GitHub (logo atual `e.png` e MP3 ElevenLabs). Verifique seus SHA-256 no manifesto. Não invente paths. Não use a logo de backup como master.
2. Decupe a locução real por trechos e timecodes, conferindo palavra por palavra com a copy bloqueada no briefing. **Não reescreva, não use TTS substituto e não altere sentido com cortes.** Divergências devem ser relatadas antes de render definitivo.
3. Crie `shotlist.md`, `voice_cue_sheet.csv`, `assets_manifest.json`, storyboard e plano de Foley/trilha sincronizados.
4. Busque imagens de banco com uso permitido ou gere cenas IA *ilustrativas*. Nunca apresente pessoas, salas ou atendimentos sintéticos como integrantes ou instalações reais da CEMESC. Preserve anatomia, naturalidade, continuidade e direitos.
5. Faça animatic e primeiro corte de revisão com ritmo humano, gancho claro nos primeiros dois segundos, loop aberto específico e payoff memorável, sem preencher a tela de efeitos.
6. Inclua Motion Design apenas para compreensão: legendas/expressões curtas e explicação fisiológica esquemática a validar. Use foto e b-roll como protagonista; evite efeitos a cada palavra.
7. Mixe voz nítida, ambiências e Foley, trilha licenciada e silencios intencionais. Não use música comercial sem licença.
8. Verifique contraste, legibilidade mobile, safe zones, cor e integridade de logo, copy, disclaimers, direitos, adequação clínica e identificação médica aplicável.
9. Entregue prévia + fontes editáveis + QA; **NÃO publique, não faça deploy nem acione automações**. Aguarde aprovação da pessoa responsável.

## Bloqueadores
- MP3 original ausente: sem corte final sincronizado ou mix definitiva.
- Logo atual ausente/não conferida: sem assinatura definitiva; não refazer tipografia ou símbolo.
- Revisão médica/regulatória, serviços disponíveis e licenças não confirmados: sem publicação.
- Não editar outros projetos. `main` existe somente para CEMESC; branch de backup pode conter conteúdo legado.

## Saídas esperadas no workspace
`video_review_v01.mp4`, `project_source/`, `shotlist.md`, `assets_manifest.json`, `voice_cue_sheet.csv`, `captions.srt`, `qa_report.md`. Render final somente após liberações.
