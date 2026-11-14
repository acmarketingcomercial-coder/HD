# AC MOTION STUDIO — ETAPA V3.5 | RESTAURAÇÃO DE IMAGEM E COLOR GRADING
## Franciele Fotografias — Reserva Programada
**Data:** 14/11/2026.
**Status:** piloto técnico de qualidade e cor AUTORIZADO para preparação; LOOK e aplicação ao master completo AINDA NÃO aprovados. V3.4 segue como master de referência.

### 0. MISSÃO, ESCOPO E HIERARQUIA
Atue como colorista, supervisor de restauração digital e especialista de acabamento de imagem para vídeo publicitário vertical. O master **V3.4 de 30,8 segundos** foi entregue e visualmente avaliado; a montagem ficou mais calma e foi considerada aprovada visualmente. A mixagem/reparo da fala foi medido tecnicamente, porém **ainda exige escuta humana**, sobretudo a entrada "Se você" em ~22,9s. NÃO considerar aprovação comercial da publicação.

A próxima tarefa **NÃO** é inventar nova narrativa nem refazer 3D/carnê. É preparar um **teste A/B de restauração seletiva, melhoria de definição e Color Correction + Cinematic Color Grading** dos vídeos reais e submeter a aprovação visual antes de modificar o master inteiro. A diretriz é **Cinematic Editorial Natural**: sofisticado, luminoso, suave, natural, valorizando qualidade fotográfica real, sem pele plástica, contraste excessivo, LUT genérico escuro, oversharpen ou alterações de fisionomia.

Este documento prevalece sobre a orientação de render novo master V3.4 somente no que se refere à etapa de tratamento de imagem V3.5. A V3.4 continua aprovada em montagem; NÃO reabrir cortes, voz, músicas, timecodes, tipografias ou movimentos aprovados nesta etapa.

### 1. FONTE TÉCNICA E REPRODUTIBILIDADE
Repositório HD: \`https://github.com/acmarketingcomercial-coder/HD\`, branch \`main\`. Na última auditoria, a branch contém os **arquivos originais** em \`assets/\` e os briefs, mas NÃO contém a árvore completa de código Remotion da V3.4.

O usuário anexou o pacote de código-fonte:
\`franciele_reserva_projeto_master_V3_4.zip\`
Esse ZIP contém, entre outros:
- \`src/v34/PreviaV34.tsx\` e \`src/v34/MasterV34.tsx\`;
- \`src/data/timeline_v34.json\`, \`src/data/master_v34.json\`;
- \`tools/grade_2042_v32.py\`: ajuste localizado JÁ aplicado à modelo de branco;
- \`tools/prep_footage_v3.sh\`, \`tools/prep_footage_v33.sh\`: preparação com Lanczos 1080x1920, unsharp e temperatura já aplicada, antes do grade;
- \`tools/sound_v34.py\`, \`tools/reparo_voz_v34.py\`;
- \`public/audio/mix_master_v34.wav\`;
- \`output/franciele_reserva_programada_V3_4_RITMO_AUDIO.mp4\`;
- relatórios/comparativos/frames.
O ZIP **não contém os originais completos em assets/ nem todos os derivados \`public/footage/\`**. Esses materiais devem vir do repositório HD e ser regenerados por scripts quando necessários. **Não presumir que uma cópia de código/ZIP esteja automaticamente no workspace do Claude Code**. Localizar workspace anterior; se ausente, solicitar/importar esse ZIP e sincronizar os assets do HD, sem sobrescrever o master original.

Registrar um backup local da V3.4 e de scripts de pré-processamento. Cuidar para que nenhum novo material com rostos de clientes seja publicado em repositório público sem autorização explícita.

### 2. ESTADO REAL DA IMAGEM (NÃO EMPILHAR FILTROS)
Originais (informações confirmadas no histórico de arquivos):
- \`assets/IMG_2040.mp4\`: 720x1280 — tem mais detalhe; tratar com moderação.
- \`assets/IMG_2041.mp4\`, \`assets/IMG_2042.mp4\`, \`assets/IMG_2043.mp4\`, \`assets/IMG_2044.mp4\`: 360x640 — risco maior de macroblocos, baixa definição, bordas irregulares e artefatos.
- \`assets/IMG_6810.qt\`: gravação real do Instagram, 886x1920 HEVC — é captura de interface; **não aplicar o look nos pixels do feed e interface como se fosse um retrato real**.
- Fotos, marca e interior do carnê são elementos institucionais/3D — **não alterar a cor da capa, boletos, logo, tipografia ou interface**.

A V3.4 já contém tratamentos: conversão de 30 fps, ampliação Lanczos, \`unsharp\`, ajuste de temperatura, vinheta sutil de cena, e o take \`IMG_2042\` passou por GrabCut/máscara com ganho localizado de luminância. NÃO aplicar novamente correções equivalentes por cima do master final. Tratar **a partir dos arquivos originais**, substituindo a cadeia de pré-processamento quando houver benefício e respeitando o ajuste da modelo existente sem duplicar exposição.

### 3. CORREÇÃO TÉCNICA: ORDEM DOS PROCESSOS
Trabalhar por take e com consistência temporal; em cada etapa validar que ficou MELHOR do que o original, não apenas diferente.
1. Interpretar corretamente FPS, proporção 9:16, faixa de cor, matriz, nível de vídeo e orientação via ffprobe. Projetar todos os vídeos em SDR/Rec.709 com nível consistente, sem HDR inventado.
2. Inspecionar frames consecutivos de pele, mãos, cabelos, tecido, fundo e elementos finos para classificar artefatos reais: blocos de codec, ringing, aliasing, banding, ruído, imagem apenas desfocada (nem tudo é "pixelado").
3. **Deblocking/debanding seletivo** somente onde comprovadamente necessário. Não suavizar irreversivelmente olhos, boca, fios e roupas.
4. **Denoise temporal leve e estável** antes do upscale, visando ruído de compressão. Evitar ghosting, manchas em movimento, flicker, halos e blur de pele.
5. **Upscale conservador** com pipeline de alta qualidade, testando resampling Lanczos/EWA ou equivalente; reduzir artefatos sem afirmar recuperação de detalhe inexistente. Para material de 360x640, aumento geométrico 3x é necessário ao output 1080x1920, mas isso NÃO cria 3x mais resolução real. Testar modelo de super-resolução apenas como variante opcional se não fizer reconstrução facial, e rejeitar imediatamente alterações de traços/olhar/pele. **NÃO usar face restore, face enhancement, beautify ou IA generativa de rostos**.
6. Aplicar nitidez/microcontraste **pós-upscale**, seletiva e discreta, apenas até antes de surgirem halos. Evitar combinar o \`unsharp\` atual com outra camada de sharpen.
7. Normalizar cor do take: exposição, balanço de branco, sombras e altas luzes. Reduzir diferenças de temperatura ao cortar entre ensaios.
8. Aplicar **Cinematic Editorial Natural**: contraste suave com detalhe nos pretos, altas luzes com roll-off delicado, tons levemente quentes em ambiente e sombra neutra, saturação moderada, pele natural. Sem teal-orange, vinheta dramática, filtro instagram, grão adicionado por padrão, pele laranja ou brancos amarelados.
9. Render intermediários de alta qualidade para evitar nova compressão antes do master. Corrigir flicker e consistência entre frames e nas emendas.
10. Não modificar a estrutura da edição; substituir apenas os clips gerados da cadeia de pré-processamento no master da V3.4.

### 4. DIREÇÃO POR CENA — CANDIDATOS AO TESTE
**A (0–3,83s, IMG_2040 câmera/cliente preta):**
Qualidade base 720x1280. Preservar detalhes do preto (vestido e câmera), textura da pele e altas luzes. Ajustar WB/contraste com discrição e evitar sharpening pesado nos detalhes da câmera. Pode servir como referência de qualidade dos demais takes.

**B (3,83–5,03s, IMG_2042 modelo de branco):**
Origem 360x640. Na V3.4 o sujeito já está CLAREADO com máscara e tratamento de pele. NÃO aplicar novamente o script de grade em resultado já gradeado. Trabalhar do original ou intermediário ANTERIOR à correção, preservando luminância atual aprovada. Foco em reduzir blocos, suavizar serrilhado, preservar bordas do cabelo, olhos, bracelete e textura branca, manter fundo frio claro e roupa branca sem clipping. Testar 3 frames mais vídeo; verificar máscara sem halo/flicker.

**C (15,5–18,5s e ~22,5–30s, IMG_2043 retratos/bastidores e conferência da câmera):**
Origem 360x640. Trechos mais perceptíveis de baixa definição no master; prioridade para deblocking e harmonização de pele e temperatura, com cuidado especial para rosto e telas de câmera (evitar "upscale" que invente olhos, letras ou detalhes no LCD). Avaliar ruído temporal ao mover mãos/câmera. Encerramento deve continuar caloroso e humano; não escurecer.

**D (5–15,5s 3D/Instagram/carnê):**
Estúdio 3D: preservar render puro e seus tons creme/marrom institucionais. No máximo ajustar temperatura da transição *entre* vídeo real e 3D, sem grade global destrutivo.
Instagram: conteúdo real, cores do feed e UI não devem ser recriadas ou passar por filtros de pele/saturação.
Carnê: texto e cores oficiais da capa são intocáveis, boletos sempre BOLETOS.
Logo: cor/contorno original sem filtros.

### 5. TESTE A/B PRIMEIRO — NÃO RENDER MASTER V3.5 COMPLETO AGORA
Produzir um teste de referência com 3 trechos representativos da timeline da V3.4:
- IMG_2040 (entre ~1,5–3s): corpo, roupa preta e câmera;
- IMG_2042 (entre ~4–5s): modelo branca e fundo claro;
- IMG_2043 (entre ~23–29s): fechamento com cliente/fotógrafa e câmera.
Cada exemplo deve mostrar **original como aparece na V3.4** versus **versão tecnicamente tratada e gradeada**, no MESMO instante e MESMO crop/zoom. Comparar a V3.4 master versus o novo pipeline; NÃO comparar apenas original 360p com um intermediário e anunciar melhoria se o master já tinha tratamento.

Entregar:
1. \`output/qa_v3_5/teste_A_B_color_qualidade.mp4\`, comparativos de 2–3s por cena, sincronizados frame a frame, com rótulos fora da imagem de anúncio ou legenda clara apenas nos arquivos QA (não no anúncio).
2. \`output/qa_v3_5/stills/\`: pares de frames antes/depois em 100% de escala, inclusive recortes de rosto/cabelo/roupa e imagens em movimento.
3. \`output/qa_v3_5/relatorio.md\`: por take, qual problema visual existia, filtro e parâmetros REALMENTE usados, limitações da fonte, cenas que melhoraram e as que não precisam de tratamento. Anotar qualquer artefato de temporal processing.
4. \`output/qa_v3_5/pipeline/\`: scripts reprodutíveis e configurações por take. Não gerar arquivos sintéticos de pessoas.
5. Proposta de look referencial da marca e três testes curtos para aprovação visual, SEM aplicar ao master inteiro antes da autorização.

### 6. QA E CRITÉRIOS DE ACEITE
- [ ] Nenhum rosto, sorriso, formato de olhos/nariz/corpo ou característica facial modificada.
- [ ] Pele com poros/textura naturais, sem aspecto pintado ou plastificado.
- [ ] Compressão e ruído visual perceptivelmente reduzidos onde possível, sem trocar por blur.
- [ ] Nitidez sem halo, flicker, ghosting ou perda de textura em cabelo/acessórios.
- [ ] Camisa branca, sombras do vestido preto e pele preservadas; fundo sem estourar.
- [ ] Grade estável temporalmente; sem "pulsação" de exposição ou mudança abrupta de WB entre cenas.
- [ ] Cor SDR Rec.709 em saída e gamma consistente; sem esmagar pretos/brancos.
- [ ] Comparação com V3.4 é justa: mesmo frame, escala, recorte e tempo de exposição.
- [ ] Nenhum ajuste em voz, trilha, SFX, timing ou composição aprovada.
- [ ] Direitos de imagem das clientes e licença musical seguem pendentes para PUBLICAÇÃO.
- [ ] Não usar GitHub Actions; fazer builds/renders e QA localmente.
- [ ] Mostrar as alternativas para aprovação antes de renderizar o master final.

### 7. APÓS APROVAÇÃO DO LOOK (ETAPA FUTURA, NÃO ESTA)
Quando aprovada a aparência no teste, integrar os clips tratados **na MESMA timeline da V3.4** e exportar master visual V3.5 completo.
**Preservar bit a bit o áudio AAC do MP4 V3.4** quando possível: renderizar nova imagem e muxar a trilha original sem reencodar (por exemplo usando FFmpeg com \`-c:a copy\`), respeitando duração/PTS. Conferir que o áudio final é exatamente o master corrigido V3.4 e não perdeu as intervenções já realizadas.
Fazer QA A/B completo e revisão auditiva humana antes de publicar. Não criar uma V3.5 com novos cortes, tempos ou texto.

### 8. INSTRUÇÃO IMEDIATA AO CLAUDE CODE
1. Sincronizar HD main e localizar workspace V3.4. Se ausente, importar o ZIP do projeto fornecido pela usuária e regenerar \`public/footage/\` a partir de \`assets/\` com os scripts versionados.
2. Auditar a cadeia atual de tratamento para não acumular unsharp, temperatura e grade. Especial atenção a \`tools/grade_2042_v32.py\`.
3. Testar 3 cenas com restauração suave + color matching + look Cinematic Editorial Natural.
4. Entregar vídeo A/B e stills para aprovação. **NÃO renderizar master completo nem publicar ainda.**
