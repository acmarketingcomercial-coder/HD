# AC MOTION STUDIO — FRANCIELE FOTOGRAFIAS — PROMPT TÉCNICO V3 (BASE)

**FASE ATIVA V3.5 — TESTE DE RESTAURAÇÃO E COLOR GRADING:** A V3.4 está aprovada VISUALMENTE em ritmo/montagem, mas o reparo sonoro ainda exige escuta humana. Leia PRIMEIRO `docs/TRATAMENTO_IMAGEM_COLOR_V3_5.md`. Produza SOMENTE comparativos A/B de três cenas em cima do master V3.4, sem reabrir a montagem nem reprocessar o áudio. **Não renderize o master V3.5 completo antes de aprovarmos o look.**
Versão: 13/11/2026. Autossuficiente. **V3 SUBSTITUI as direções V1/V2.** Campanha: Reserva Programada. Cliente: Franciele Fotografias, Coluna/MG. Produzir anúncio vertical profissional com vídeos reais, motion design de alto padrão e sound design criativo. Não usar GitHub Actions. Não renderizar peça completa antes da aprovação da prévia.

## 1. Narrativa e objetivos
Objetivo: despertar desejo de fazer um ensaio e depois mostrar o planejamento possível pela Reserva Programada, sem tratar como desconto, assinatura, álbum ou reserva automática de data de evento. O ensaio é realizado após quitação conforme contratação e disponibilidade.
Ordem V3 APROVADA: **ensaios reais (suspense) -> breve estúdio 3D editorial -> rolagem REAL do Instagram quando disser “você escolhe seu ensaio” -> primeira aparição do carnê 3D quando disser “e vai pagando aos poucos” -> ABERTURA COM BOLETOS FOLHEANDO -> preparação/resultado do ensaio -> convite natural.**
**NUNCA mostrar o carnê na abertura e NUNCA colocar fotografias dentro do carnê. O carnê NÃO é álbum.** Interior deve simular boletos de pagamento em papel, como um livro de folhas/canhotos que viram; não inventar boletos operacionais, códigos pagáveis, valores, bancos, contas, documentos pessoais ou número fixo de parcelas. A capa fechada é obtida dobrando a arte: metade DIREITA da capa aberta é a FRENTE, metade ESQUERDA é contracapa. O mockup aprovado é raster (não mesh 3D).
Motion typography foi expressamente permitida nesta V3, superando a proibição absoluta anterior. Usar poucas intervenções de texto, elegantes, só com fragmentos da fala — “com mais calma”, “Reserva Programada”, “aos poucos” — sem legendas inteiras, ofertas, preços ou CTA escrito agressivo.

## 2. Materiais reais da branch main — não pedir ZIP
Todos na pasta assets/ (não em assets/ensaios_originais):
- assets/narracao_franciele_reserva_programada_original.ogg: voz original Opus mono, 35,6465s; preservar.
- assets/narracao_franciele_reserva_programada_master.wav: derivado antigo SEM correção, não usar como narração final V3.
- assets/logo_franciele_fotografias_original.png: logo oficial, nunca redesenhar.
- assets/capa_carne_aberta_original.png: capa original aberta, metade direita = frente do carnê fechado.
- assets/mockup_carne_3d_aprovado.png: mockup 3D raster aprovado 1448x1086.
- assets/Fotografia impressa.jpeg: existe; não presumir autorização comercial, verificar o conteúdo antes do final.
- assets/IMG_2040.mp4 (8,44s, 720x1280), IMG_2041.mp4 (15,24s, 360x640), IMG_2042.mp4 (6,50s, 360x640), IMG_2043.mp4 (60,14s, 360x640), IMG_2044.mp4 (21,08s, 360x640): ensaios reais. O final de IMG_2044 contém assinatura ANTIGA Estúdio Digital — jamais mostrar.
- **assets/IMG_6810.qt: gravação REAL do Instagram da Franciele, verificada e analisada: QuickTime HEVC 886x1920, 7,475s, média variável ~55,9fps, AAC 44,1kHz, 16.787.228 bytes.** Mostra perfil próprio, destaques e rolagem do feed com ensaios femininos, infantis, corporativos e familiares. **Trecho de origem recomendado: ~3,7s a 6,3s.** Verificar quadro a quadro o in/out no ambiente; privilegiar somente grid em rolagem, evitar cabeçalho/painel administrativo e indicador vermelho da gravação iPhone. Colocar em tela de smartphone 3D, manter interface VERDADEIRA, não inventar posts/métricas.
IMPORTANTE: o HD é PÚBLICO e contém vídeos de clientes; conferir autorizações de imagem e privacidade antes de veicular ou reproduzir externamente. Não editar rostos, não gerar pessoas IA ou alterar identidade.

## 3. Locução corrigida — obrigatória
Áudio original: 35,6465s. Há falso começo e repetição do convite final entre ~23,3–28,4s. Transcrição de trabalho:
0,72–5,18: “Sabe aquele ensaio que você tem vontade de fazer, mas sempre acaba deixando pra depois?”
5,70–8,84: “Eu pensei numa forma de você conseguir se organizar com mais calma.”
9,34–14,56: “Com a Reserva Programada, você escolhe o seu ensaio e vai pagando aos poucos ao longo dos meses.”
15,02–18,70: “Quando terminar de pagar, a gente combina o melhor dia pra fazer as suas fotos.”
19,18–22,90: “Assim, você consegue se planejar sem precisar pagar tudo de uma vez.”
23,34–~28,4: DOIS falsos começos/interrupções de “Se você tem vontade... me chame, eu...”
~28,4–35,24: última tomada COMPLETA do convite; preservar.
**Usar a voz real da Franciele sem TTS/voice clone.** Gerar assets/narracao_franciele_corrigida_v3.wav do OGG original executando **scripts/preparar_locucao_v3.sh**, que retira silêncio de abertura ~0,40s e os falsos começos 23,30–28,32s, faz crossfade curto e tratamento leve (EQ, ruído, compressor, limiter). Versão de teste tem ~30,1985s, 48kHz mono PCM. É obrigatório ESCUTAR a emenda no novo áudio ~22,9s, especialmente o “Se” e respiração; ajustar alguns milissegundos se necessário. Não corrigir diferenças naturais da fala como “o seu”, “as suas”, “me chame” apenas para se adequar ao texto; manter o áudio real. Trilha e timing devem usar o NOVO WAV, não a antiga duração 35–36s.

## 4. Storyboard V3 — janelas de sincronismo INICIAIS
Timing definitivo deve resultar da escuta/edição da voz nova, principalmente as entradas exatas “você escolhe” e “vai pagando”. Não tratar janelas aproximadas como alinhamento confirmado.
- 0–~5,3s: ensaios reais de IMG_2040 (câmera/cliente) e alternância com IMG_2042/2041. **Sem carnê, sem tela vazia.** Close de câmera + poses expressivas; transições por gesto, não slideshow. Sound: um click shutter quando motivado.
- ~5,3–8,9s: “Eu pensei numa forma...”; transição por lente/luz a ambiente 3D editorial de estúdio, com softbox, fundo infinito e luz quente, sem alegar ser o estúdio físico real. Motion text pontual “com mais calma”, se útil. Som de atmosfera/luz suave.
- ~8,9–11,5s: fala “Com a Reserva Programada, você escolhe o seu ensaio”. Tipografia editorial breve “Reserva Programada”, SEM revelar carnê. Usar a rolagem REAL de IMG_6810.qt (candidato source 3,7–6,3s) dentro de smartphone 3D; scroll sincronizado à escolha, sem fabricar interface ou postagens. Sound scroll sutil.
- ~11,5–14,2s: fala “e vai pagando aos poucos, ao longo dos meses”. **REVELAR AQUI o carnê físico 3D**, capa correta e título reconhecível. Abrir e folhear boletos internos (não fotos). Papel com curvatura/espessura/sombra; 2–4 efeitos orgânicos de páginas em perfeita sincronia. Não sugerir número fixo de parcelas.
- ~14,2–18,3s: “Quando terminar de pagar...”; sequência de folhear desacelera, carnê se fecha/transita à preparação do ensaio. Não prometer bloqueio de data.
- ~18,3–22,5s: “Assim, você consegue se planejar...”; mostrar experiência fotográfica REAL/resultado, sem fotografia sair de dentro de boleto como se fosse álbum.
- ~22,5–30,20s: convite único final corrigido, com cliente real em ensaio/bastidores; considerar IMG_2043 source 53,5–58s vendo fotos. Assinatura original discreta se apropriado, não CTA gráfico.
Som: piano/texturas com licença comercial, cama baixa, SFX motivados (câmera, ambiente 3D, scroll, papel/viradas), evitar excessos. Master com voz inteligível em celular, true peak <= -1 dBTP, loudness final alvo -14 a -16 LUFS quando apropriado, sem clipping, sem voz robótica.

## 5. Execução técnica
Verificar ffprobe do IMG_6810.qt e decupar o recorte real. Para Remotion, se necessário converter para MP4 H.264 CFR 30 em cópia TEMPORÁRIA, preservando original e proporção; esconder barra de gravação/painel. Para ensaios 360x640, upscale moderado sem reconstrução facial. Preferir Remotion/React/TS e ffmpeg; Three.js/mesh para dobra real de papel apenas quando tecnicamente útil. Não animar capa plana como uma única face e não distorcer logo/título.
Antes de implementar, anotar cue exato de voz, origem e in/out de cada take, plano de transições e SFX. Checar a descrição do arquivo real e não inventar dados.

## 6. Entrega e QA
**PRIMEIRA ENTREGA É APENAS PRÉVIA V3 DE 0–18s**, porque precisamos VER o carnê abrindo e BOLETOS sendo folheados. Arquivo:
output/previa_franciele_reserva_programada_V3_0-18s.mp4
1080x1920, 30fps, H.264/yuv420p AAC 48k, voz corrigida original e sound design real.
Fornecer screenshots 0,1,3,5,7,9,10.5,11.5,12.5,13.5,15.5,17.5s e relatório de QA, decupagem Instagram (tempo source), cue exato do áudio, origem/licença de som e eventual blocker de autorização.
**NÃO renderizar vídeo completo sem aprovação explícita.**
Bloquear entrega se carnê aparecer antes de “vai pagando”, se houver FOTO DENTRO DO CARNÊ, se captação Instagram for fictícia, se falsos começos da voz permanecerem, se voz for sintética, se transições cortarem a capa ou se composição parecer slideshow.
**Comece pela leitura integral de docs/DIRECAO_APROVADA_V3.md, docs/AUDIO_EDICAO_V3.md e docs/PLANO_DECUPAGEM_V3.md, depois gerar voz corrigida e prévia 18s.**