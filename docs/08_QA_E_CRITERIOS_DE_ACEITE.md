# CONTROLE DE QUALIDADE E CRITÉRIOS DE ACEITE

O QA deve ser **independente da etapa de geração**. Um render que concluiu sem erro não é um vídeo aprovado.

## Portões de qualidade
### QA-0 — Entrada
- [ ] Fontes de imagem aprovadas e originais de voz presentes.
- [ ] Áudios inspecionados; 6 falas da menina + 4 da mãe.
- [ ] Pranchas aprovadas diferenciadas de tentativas rejeitadas.
- [ ] Nenhuma marca/logotipo de terceiros no projeto atual.

### QA-1 — Direção de arte
- [ ] Lia, Clara e Daniel reconhecíveis entre frames.
- [ ] Idades coerentes; roupas e proporções preservadas por época.
- [ ] Sala principal com topologia de móveis constante.
- [ ] Flashbacks no mesmo universo visual, com evolução temporal plausível.
- [ ] Props individualizados, sem tabelas, etiquetas e colagens.
- [ ] Desenho imperfeito como de criança de seis anos.

### QA-2 — Animatic e narrativa
- [ ] A premissa é entendida sem legendas explicativas.
- [ ] O público percebe por que Clara não aparece nas fotos antigas.
- [ ] A sequência mãe ajusta gorro / fotografa estrela / acolhe criança é legível.
- [ ] Pausa após “Você também tava lá, mãe”.
- [ ] Abraço emocional sem choro teatral.
- [ ] Resolução pelo último clique com Clara na foto.

### QA-3 — Sincronia e áudio
- [ ] Texto literal das 10 falas preservado.
- [ ] Sem clip, clicks artificiais ou corte de sílabas.
- [ ] Lip-sync alinhado em planos falados.
- [ ] Mix inteligível em celular e em fones.
- [ ] Música e efeitos legalmente utilizáveis.
- [ ] No momento do desenho a trilha não atropela a fala.

### QA-4 — Técnico e entrega
- [ ] MP4 H.264, 1080×1920, 30fps e proporção 9:16.
- [ ] Duração-alvo 60s; qualquer desvio sinalizado.
- [ ] Sem frames pretos acidentais, clipping, glitches, objeto flutuando.
- [ ] Margens seguras para elementos textuais da assinatura.
- [ ] Filme reproduzido do começo ao fim em player independente.
- [ ] Arte, efeitos, vozes e versões finais organizados e rastreáveis.

## Evidências mínimas
- `output/validation/input-audit.md`
- `output/validation/audio-cue-sheet.csv`
- `output/validation/qa-report.md`
- `output/validation/frame-contact-sheet.jpg`
- `output/animatic/ep01_animatic.mp4`
- `output/final/EP01_A_PESSOA_QUE_FALTAVA_NA_FOTO_v1.mp4`
- `CHANGELOG.md` com mudanças e pendências

## Severidades
**Bloqueante:** troca de personagem/identidade, fala faltante ou incorreta, mãe aparecendo nas fotos antigas, música sem autorização, produto final fora do formato.  
**Alta:** mãos defeituosas, prop que muda, lip-sync notavelmente fora, tempo emocional cortado.  
**Média:** pequenas oscilações de luz/paleta, microgestos artificiais.  
**Baixa:** ajustes de textura e microtiming.

Não afirmar “aprovado pelo cliente” sem sua aprovação explícita. Os materiais já aprovados são **referências**, não render final.
