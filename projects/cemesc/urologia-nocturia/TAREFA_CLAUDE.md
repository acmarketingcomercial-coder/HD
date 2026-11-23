# Ordem de trabalho para Claude Code — CEMESC Urologia

## Papel e prioridade
Você é o executor técnico do AC Motion Studio para este job. A direção criativa foi aprovada; sua responsabilidade é produzir os assets permitidos, montagem, animação, mixagem, export, evidências e QA.

O documento [BRIEFING_CODEX_v01.md](./BRIEFING_CODEX_v01.md) é a fonte completa de roteiro e storyboard. A referência a “Codex” no título/texto é a designação original do executor técnico, agora **Claude Code**. Essa troca de executor NÃO autoriza modificar copy, conceito ou marca.

## Procedimento obrigatório

1. Trabalhe exclusivamente nesta pasta ou num workspace isolado, preservando o projeto Franciele Fotografias em `HD`. Não alterar `main`, README raiz, scripts ou assets de outros clientes.
2. Audite as entradas. O MP3 ElevenLabs original (73,508563 s, mono, 44,1 kHz), a logo **e.png** enviada no turno atual e a logo histórica **Logo_Cemesc.png** NÃO foram incluídos como arquivos binários novos nesta branch. Confira [MANIFESTO_ASSETS.md](./MANIFESTO_ASSETS.md) e não infira caminhos locais.
3. Se o MP3 e a logo não estiverem acessíveis no workspace, produza planejamento, storyboard, shotlist e animatic **sem voz definitiva/assinatura final** e registre bloqueio. Nunca gere uma voz substituta nem redesenhe a marca.
4. Valide o texto falado do MP3 com a copy bloqueada, frase a frase. Reporte qualquer diferença com timecodes. Nada de cortes que alterem sentido, speed-up para caber, novos slogans, textos médicos ou CTAs.
5. Selecione b-rolls licenciados ou gere cenas ilustrativas coerentes com o plano, sem simular pacientes, profissionais ou instalações reais da CEMESC. Um personagem adulto deve manter continuidade visual e fisiologia plausível. Não usar material de Franciele Fotografias em CEMESC.
6. Monte para 1080×1920 9:16, 30fps sugeridos. Sincronize b-roll, motion e sound design à voz, conforme o briefing.
7. Entregue prévia e relatório QA, com pendências abertas destacadas no relatório, não em render apresentado como final. Não publique, não efetue merge ou deploy.
8. Conteúdo clínico, identificação de publicidade médica, disponibilidade real de Urologia e versão da logo requerem verificação antes de publicação. Não assuma aprovação regulatória por conta deste prompt.

## Arquivos esperados no workspace
- MP3 ElevenLabs conforme manifesto, checksum SHA-256 exato.
- Logo nova `e.png` (RGBA 1080×1080) enviada pelo usuário, checksum exato.
- `BRIEFING_CODEX_v01.md` é o roteiro e direção aprovados.
- Eventual logo histórica é apenas referência de comparação, nunca uma autorização para uso no master.

## Entregas
- `video_review_v01.mp4` (somente após entradas suficientes).
- `project_source/` e comandos reproduzíveis do motor escolhido.
- `shotlist.md`, `assets_manifest.json`, `voice_cue_sheet.csv`, `captions.srt`, `qa_report.md`.
- `video_final_v01.mp4` somente quando todos os bloqueadores forem resolvidos e a liberação final for expressa.

## Contrato de governança
**Aprovado:** texto v04, conceito humanizado e integração da CEMESC ao fechamento. **Pendente:** QA clínico, identificação legal/regulatória, serviço atualmente disponível, logo mestre correto, autorizações/licenças de mídia, conferência da locução. Status de publicação: NÃO AUTORIZADO.
