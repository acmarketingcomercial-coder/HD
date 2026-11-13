# AC MOTION STUDIO — PROMPT TÉCNICO DE PRODUÇÃO
## FRANCIELE FOTOGRAFIAS | RESERVA PROGRAMADA | O CARNÊ QUE VIRA FOTOGRAFIA
Versão 1.0 — 13/11/2026 — Documento autossuficiente para Claude Code.

### 0. MISSÃO E ORDEM DE EXECUÇÃO
Você é o diretor técnico de Motion Design, compositor, animador e supervisor de pós-produção deste vídeo vertical. Produza um anúncio original em Motion Design com narração da própria Franciele, animação de um carnê físico, continuidade visual, fotografia real e sound design de alta qualidade. Leia integralmente este documento, MANIFEST.json e os arquivos em docs/. Não presuma acesso a conversas do ChatGPT.

ETAPA DE ENTREGA OBRIGATÓRIA:
1. Verificar os assets e hashes, analisar tecnicamente a voz e comparar a locução com o roteiro bloqueado.
2. Preparar storyboard operacional com marcações baseadas NO ÁUDIO REAL.
3. Construir prova de conceito audiovisual de 0 a 12 segundos (com voz, animação e SFX), renderizando prévia MP4.
4. Inspecionar a prévia com screenshots de frames, corrigir problemas e solicitar aprovação humana. Não apresentar 12 segundos de cartões estáticos.
5. Somente após aprovação da prévia, executar o vídeo completo, validar visual e sonoramente e entregar render final com relatório de QA.
6. Se faltar uma fotografia real autorizada, pode criar a prévia 0–12s, mas NÃO fabricar retrato, NÃO publicar render final como concluído e NÃO substituir por pessoa sintética. Registrar a pendência.

### 1. IDENTIDADE E BRIEFING
Cliente: Franciele Fotografias. Atuação em fotografia e videomaker; ensaios individuais, retratos, ensaios femininos e corporativos e fotografia de eventos. Região de Coluna, Minas Gerais, Brasil.
Campanha: lançamento da modalidade Reserva Programada, prioritariamente para ensaios.
Oferta comprovada: a cliente escolhe seu ensaio antecipadamente, organiza pagamentos ao longo dos meses e o realiza após a quitação, sujeito às condições contratuais e à definição posterior de data/horário. Não apresentar modalidade como assinatura ou desconto, não dar a entender que qualquer pagamento mínimo reserva uma data fixa de evento.
Público: pessoas que desejam fazer um ensaio e procuram se planejar com antecedência.
Objetivo principal: despertar interesse e gerar contato espontâneo pelo WhatsApp; secundário: explicar o conceito sem transformar o anúncio em vídeo financeiro.
Tom: pessoal, acolhedor, sofisticado e humano. A voz deve soar como conversa genuína da Franciele, nunca como anúncio agressivo.
Canal/entrega: Meta Ads, Reels e Stories; vertical 9:16, 1080 x 1920 px, 30 fps, H.264 yuv420p, áudio AAC 48 kHz, MP4 faststart, sem marca-d'água.
Duração de referência da locução: 35,6465 segundos (OGG Opus mono). Duração do master sugerida: 36,20 segundos / 1086 frames a 30 fps, reservando cerca de 0,55s para cauda de áudio. É proibido cortar ou acelerar artificialmente a voz para forçar timing.
Identidade visual: seguir imagens de capa e logo originais. Cores observadas na arte: creme/areia, castanho escuro, tons quentes de foto e nuances suaves. Não tratar códigos estimados como identidade institucional oficial. Textura elegante de papel, luz lateral quente, sombras naturais; fotografia sem filtros agressivos.
NÃO usar preto chapado como fundo dominante; não transportar identidade de outra marca.

### 2. REGRAS NÃO NEGOCIÁVEIS
- Texto de locução BLOQUEADO: não reescrever, resumir ou inserir frases. O ÁUDIO ORIGINAL PREVALECE sobre qualquer transcrição.
- Não gerar nova voz, clonar, dublar ou substituir o áudio recebido.
- SEM textos criados na tela: nenhuma headline, legenda, CTA, numeração de parcelas, valor monetário, data, preço, tipografia cinética, subtítulo automático, símbolo de moeda ou botão fictício. A escrita já impressa na capa e o logotipo original são partes dos assets gráficos, não overlays de texto.
- Preservar rigorosamente o arquivo de logo, capa aberta e imagem 3D aprovada. Não inventar logomarca, não reescrever pequenos textos impressos, não redesenhar como se fosse a original.
- Não usar rostos gerados artificialmente, pessoas sintéticas, banco de imagens representado como cliente real, nem alterar fisionomias.
- Os quatro cartões de animação são linguagem visual ilustrativa e NÃO significam que todos os planos terão quatro parcelas.
- Não criar promessa de reserva garantida de data mediante pagamento pequeno. O ensaio é realizado após quitação e data definida mais perto do ensaio.
- Não criar trilha ou SFX protegidos sem licença comercial de uso. Preferir efeitos originais ou licenciados com documentação.
- Não usar GitHub Actions, deploy ou automação de CI remota. QA, builds e renders locais, aprovação humana antes de publicar.

### 3. ARQUIVOS E PROVENIÊNCIA
Assets binários devem estar na pasta assets/ antes de renderizar; conferir MANIFEST.json:
A) assets/narracao_franciele_reserva_programada_original.ogg — fonte imutável, voz real de Franciele; codec Opus/OGG; mono; duração reportada 35,6465s.
B) assets/narracao_franciele_reserva_programada_master.wav — derivado PCM 16-bit mono 48 kHz; pode ser recriado localmente a partir do OGG por ffmpeg; não é nova locução.
C) assets/logo_franciele_fotografias_original.png — oficial; 500x150 RGBA/transparente; uso sem alteração do desenho.
D) assets/capa_carne_aberta_original.png — arquivo original da capa DESDOBRADA; 500x150 RGB. A metade ESQUERDA contém fotografia e marca, e a metade DIREITA contém título Reserva Programada e contatos. O produto físico é essa peça DOBRADA ao meio, portanto capa frontal e contracapa NÃO são duas metades simultâneas da mesma face física.
E) assets/mockup_carne_3d_aprovado.png — peça 3D visual aprovada, 1448x1086 RGB, com fundo neutro. Usar como referência/asset hero. É um raster 2D renderizado com aspecto 3D, NÃO é modelo GLB/FBX ou geometria editável.
F) assets/foto_ensaio_real_autorizada.* — fotografia real do portfólio, AUTORIZADA; ainda não fornecida. Obrigatória para a revelação final. Opcional: b-roll autorizado do estúdio e making-of.
Regra de priorização: preservar exatamente os arquivos originais, incluindo cores e textos; criar camadas derivadas e máscaras sem sobrescrever originais. Se arquivos binários não estiverem no GitHub, consultar assets/README_IMPORTAR_ASSETS.md e solicitar a importação antes da produção. Nunca usar os arquivos de outro cliente como fallback.

### 4. TEXTO DA LOCUÇÃO — APROVADO E BLOQUEADO
Sabe aquele ensaio que você tem vontade de fazer, mas sempre acaba deixando pra depois?

Eu pensei numa forma de você conseguir se organizar com mais calma.

Com a Reserva Programada, você escolhe seu ensaio e vai pagando aos poucos, ao longo dos meses.

Quando terminar de pagar, a gente combina o melhor dia pra fazer suas fotos.

Assim, você consegue se planejar sem precisar pagar tudo de uma vez.

Se você tem vontade de fazer um ensaio, me chama. Eu te explico direitinho como funciona e a gente vê o que fica melhor pra você.

Atenção: este é o roteiro aprovado como texto, não uma transcrição verificada automaticamente do áudio. Antes de sincronizar, escute/transcreva o arquivo original e registre qualquer discrepância; NUNCA alterar a faixa de voz para fazer corresponder ao texto.

### 5. CONCEITO E DISPOSITIVO VISUAL
Título interno: O carnê que vira fotografia.
Objeto narrativo: um carnê elegante, inicialmente físico e fechado. A câmera se aproxima, uma folha desdobra-se, pequenos cartões/páginas saem em sequência e se organizam, ganhando marcas discretas de progresso como relevo no papel. Os cartões convergem e se transformam em moldura de uma fotografia REAL do estúdio. O último clique do encaixe se funde ao disparo da câmera.
A produção deve parecer um fluxo contínuo de objetos e não slides contendo imagens que entram e saem. Velocidade, escala e materialidade explicam o processo. Cada movimento expressivo justifica um som. Empregar variação real de escala (macro papel -> objeto -> abertura/ambiente -> foto), oclusões, luz e parallax sem movimentos artificiais em excesso.
O mockup 3D aprovado deve aparecer nos momentos de apresentação do carnê; para animação de dobra e página, construir geometria/camadas derivadas da capa ABERTA de maneira coerente com a dobra física. Evitar esticar uma imagem plana como se fosse uma face 3D completa; respeitar frente/verso na dobra e perspectivar UV/textura corretamente.
Não simular a capa com tipografia redesenhada quando a textura original pode ser projetada.

### 6. STORYBOARD BASEADO NO ÁUDIO — TEMPOS PROVISÓRIOS
Os tempos abaixo são apenas JANELAS DE PRODUÇÃO, baseadas em pausas detectadas na faixa OGG; não representam transcrição ou forced alignment. Fazer primeiro transcrição e alinhamento por palavra/frase. Reposicionar limites de cena conforme a voz, preservando roteiro e duração.

Cena 01, 00:00.00–00:05.70 — O desejo adiado.
Imagem inicial: tela quase vazia creme, carnê 3D aprovado entra com profundidade e sombra suave, close de papel e movimento de câmera aproximando; folha central revela que é um objeto dobrado. Não criar texto extra. Gancho auditivo da voz desde o início, ambiência sutil e dobra de papel. Manter atenção com objeto em ação nos primeiros 1–2s.
Cena 02, 00:05.70–00:09.24 — Uma nova possibilidade.
A dobra se abre com lógica de papel real; conjunto de páginas ou cartões começa a se soltar. A câmera acompanha a trajetória; elementos continuam na cena, sem hard cut desnecessário. Swish de papel dirigido à posição e velocidade de cada cartão.
Cena 03, 00:09.24–00:15.00 — Como funciona.
Cartões de papel em perspectiva se distribuem com espaçamento elegante. Um de cada vez recebe pequena marca em baixo-relevo, sem algarismos, cifras, check gigantes ou palavras. Ritmo construído por cliques e microvariações físicas. Não usar quatro cartões como quantidade fixa prometida.
Cena 04, 00:15.00–00:24.82 — O planejamento vira experiência.
A cadeia de cartões se desloca e se reúne. Folhas empilham-se na sequência e formam moldura, com transição que conserva geometria e direção do movimento. A câmera atravessa a moldura e antecipa o ambiente fotográfico. Crescimento musical discreto e fricções leves. Dividir internamente esta janela caso a fala exija.
Cena 05, 00:24.82–00:28.32 — A fotografia aparece.
Revelar um retrato REAL autorizado; transição do último papel à fotografia por máscara/virada física ou match cut. Um único som de disparo de câmera bem escolhido, precedido por micro-pausa. Não fazer simulação de cliente sem foto aprovada.
Cena 06, 00:28.32–00:35.65 — Convite natural.
Fotografia como hero; movimento de câmera suave e close delicado de acabamento de papel. Se fizer sentido, logo original isolada de forma discreta na conclusão, sem CTA escrito. Música desce para deixar a voz clara. Não exibir captura falsa de WhatsApp nem telefone animado.
Tail 00:35.65–00:36.20 — finalização.
Áudio da locução encerra integralmente; cauda musical/fade breve, sem corte seco.

Pausas detectadas por análise automática de silêncio (threshold -32 dB, duração mínima 0,25s; são aproximações, NÃO alignment):
0.000–0.399; 5.406–5.698; 8.854–9.236; 14.447–15.001; 24.296–24.816; 27.741–28.324; 32.923–33.183; 35.259–35.634.
Use esses pontos como âncoras iniciais, confirmando ouvindo a faixa.

### 7. DIREÇÃO VISUAL E DE ANIMAÇÃO
Arte: editorial fotográfica premium, materiais reais, marfim/creme e marrom quente observados na capa, contraste suficiente para reconhecer o produto. Não inventar novo brandbook. Mais foco em textura, luz e sombra que em efeitos.
Câmera: dolly-in inicial, leve orbit/parallax sobre objeto, tracking dos cartões, macro detalhes e avanço através da moldura na revelação. Usar smooth easing, stagger com variação orgânica, cinemática crível. Evitar wiggle gratuito, bounce de aplicativo, zooms rápidos de slides.
Papel: espessura convincente (camadas finas), dobra ao longo do eixo correto, oclusão, desfoque de movimento sutil, sombra de contato, specular baixo e textura de papel. A capa original é desdobrada; dobrada, a metade direita é capa frontal com título e a metade esquerda é contracapa com foto/logo. Não inventar impressão nas superfícies não fornecidas.
Logo: respeitar transparente e bordas, não redigitar, não distorcer nem substituir por efeito metálico.
Mockup 3D: usar asset aprovado sem deformação ou alteração de conteúdo; é raster com background, portanto recorte/rotoscopia com cuidado ou enquadramento que integre fundo naturalmente. Se a exigência de rotacionar volume real superar 2.5D, gerar geometria de papel a partir da capa aberta; usar 3D apenas quando agregar precisão.
Fotografia: usar imagem real com autorização de portfólio; preserve rosto/cor sem filtros pesados.
Espaço seguro: manter interesse visual principal longe dos elementos de interface de Reels/Stories (margens superiores/inferiores conservadoras), sempre sem texto gráfico.

### 8. DIREÇÃO SONORA E TRILHA
Concepção: som orgânico, próximo, elegante, não tecnológico ou lúdico.
Paleta SFX:
- cena 01: ruído ambiental de papel/tecido muito discreto, primeira dobra de papel real; sem whoosh forte.
- cena 02: 2–3 swishes curtos com nuances de papel; panorama e intensidade seguem o movimento.
- cena 03: cliques de papel seco, pequena presença de textura 'snap', evitando beeps e caixa registradora.
- cena 04: papel deslizando e empilhando, camada leve de ar; leve resolução tonal ao se formar moldura.
- cena 05: UM clique de câmera realista, sincronizado ao aparecimento da fotografia; silêncio/microqueda anterior para contraste.
- cena 06: ambiência suave e cauda da trilha, sem efeito aleatório no CTA.
Trilha: piano contemporâneo minimalista + pad/textura orgânica ou cordas muito discretas; energia baixa a média; faixa rítmica aproximada 85–95 BPM caso ajuste à locução. Não mascarar respiração e intenção da voz. Crescimento progressivo muito sutil, pico emocional no retrato e resolução quente na última fala.
Sugerir/generar SFX via ferramentas disponíveis (incluindo ElevenLabs Sound Effects, se houver acesso e licença), com prompts de sons isolados caso necessário. Guardar licença/proveniência. Não copiar trecho de música conhecida sem licença.
Mix: preservar timbre e pausas da voz, evitar denoise agressivo, compressão excessiva ou pitch-shift. Mix estéreo 48k; voz perfeitamente inteligível, música e SFX abaixo da voz. Medir loudness e true peak, ajustar ao material, sugerido alvo final em torno de -14 a -16 LUFS integrated e true peak <= -1 dBTP para social. Conferir com fones e alto-falante de celular. Fazer crossfade natural, sem glitches.

### 9. REQUISITOS DE IMPLEMENTAÇÃO
Stack sugerida: Remotion + React + TypeScript + CSS/SVG/canvas/Three.js somente conforme necessidade; ffmpeg/ffprobe para análise e QA. Aproveitar skills de Remotion, Motion Design e Sound Effects presentes no ambiente Claude Code, caso existam. NÃO assumir que todas estão instaladas nem forçar todos os frameworks juntos.
Criar código organizado e reprodutível; separar componentes de CarnetBook, FoldingPage, PaymentCards, PhotoReveal, CameraMove, AudioMix, e utilitários de timeline; evitar lógica monolítica.
Manter áudio master como trilha autoritativa desde frame 0. Sincronizar movimentos por cues derivados de transcrição real/escuta e não por contagem de palavras arbitrária. Exportar frame no beat/voz e validar amostras.
Render final em output/franciele_reserva_programada_1080x1920_v01.mp4 e 0–12s em output/previa_franciele_reserva_programada_0-12s.mp4, com screenshots de frames relevantes em output/qa/.
Entregar projeto-fonte completo, comandos de instalação/render, README técnico, mapa real de tempos, fontes/licenças de efeitos/trilha e relatório de QA.
Se faltar asset, escrever claramente em relatório e não inventar caminho, link ou material.
Renderização sem marca-d'água, sem texto adicional na tela, sem logotipos falsos. Não extrapolar área do frame.

### 10. GARANTIA DE QUALIDADE E APROVAÇÃO
Antes da prévia: validar hash de OGG, logo, capa e mockup; conferir que arquivo de áudio foi realmente decodificado; verificar dimensões e orientação; inspecionar se o papel dobra no eixo correto.
Prévia (0–12 s): renderizar visual E som; revisar frames 0, 2, 5, 7, 10 e 12s; checar contraste, origem do objeto, legibilidade do material impresso, naturalidade do easing, iluminação coerente e se o som sincroniza aos movimentos.
Ponto de aprovação: mostrar prévia curta antes de render completo. Não enviar apenas imagens estáticas como 'prévia audiovisual'.
Render completo: validar quadro a quadro transições e máscaras, nenhuma frase escrita adicionada, legibilidade sem recorte, íntegra da narração, nenhum retrato sintético, fotografia autorizada, cartões não parecem cobrança específica, preservação dos assets, SFX distintos e úteis, música com licença; ffprobe confirmar codec/resolução/fps/duração/áudio; ouvir início, meio e fim e inspecionar frames em pontos críticos, corrigir clipping, quadros pretos e cortes.
Resultado final deve ser sofisticado e claro, nunca um slideshow com páginas movendo-se.
Guardar mudanças em arquivos do projeto local e instruir deploy/push manual conforme aprovação; não criar GitHub Actions.

### 11. CRITÉRIOS DE BLOQUEIO
Se os quatro assets base não estiverem presentes em assets/: parar antes de qualquer render e indicar os nomes que faltam, sem usar material antigo deste repositório HD de outras campanhas.
Se não existir retrato real autorizado: somente prévia curta; indicar a ausência como impeditivo da cena final.
Se o texto do OGG diferir do roteiro: manter voz original, registrar diferença e solicitar decisão editorial antes de mudar texto escrito; não tentar corrigir gravando uma voz IA.
Se o asset 3D visual estiver difícil de animar como objeto físico: preservar imagem aprovada na apresentação e criar animação 2.5D/3D física a partir da capa aberta; não adulterar a arte.

### 12. ENTREGÁVEIS
1. Storyboard técnico final ancorado no áudio e tabela de cues reais.
2. Projeto Remotion executável + README do ambiente e comandos.
3. Prévia audiovisual 0–12 s em MP4 e frames de QA.
4. Após aprovação e inclusão de foto autorizada: vídeo vertical completo com SFX, música licenciada e voz original em MP4.
5. QA audiovisual com medições e limitações conhecidas.
6. Lista de origem/licenciamento de áudio e imagens e lista de todos os arquivos finais.

### 13. INSTRUÇÃO IMEDIATA AO CLAUDE CODE
Comece auditando MANIFEST.json e a pasta assets/. Compare os hashes. Informe pendências concretas. Leia o áudio e identifique eventos temporais sem assumir timings do texto. Crie primeiro uma prévia criativa e audível de 0 a 12 segundos com o carnê fechado/desdobrando e o início dos cartões. Não avance ao render final sem aprovação e sem foto real autorizada.