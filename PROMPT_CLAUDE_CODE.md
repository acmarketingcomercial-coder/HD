# AC MOTION STUDIO | CEMESC — PALPITAÇÕES E PREVENÇÃO DAS ARRITMIAS

**Documento técnico autossuficiente para Claude Code**  
**Projeto:** `CEMESC-MOTION-20261112-PALPITACOES-v01`  
**Situação:** direção criativa e texto aprovados pelo cliente; vídeo ainda não produzido nem aprovado.  
**Produção-alvo:** Reels/Stories vertical, 1080 × 1920, 9:16, 30 fps, H.264 + AAC, áudio estéreo, 39–40 s (ajustar ao áudio original e à leitura da cartela final).

## 0. Instrução ao executor

Você está executando a produção audiovisual de uma campanha para uma clínica real. Este documento tem TODAS as informações de projeto necessárias. Não presuma acesso ao histórico do ChatGPT. **Leia primeiro este documento e o `MANIFEST.json`; valide os arquivos reais de `assets/`; produza inicialmente apenas um preview curto com som. Não renderize o master completo antes do aceite do responsável.**

Use as skills efetivamente instaladas no seu ambiente, quando pertinentes (Remotion, Motion Design, Sound Effects, FFmpeg). Procure e leia suas instruções antes de implementar. Escolha o conjunto mínimo apropriado: Remotion/React para composição determinística é recomendável; FFmpeg/ffprobe para inspeção de áudio e encode; uma ferramenta de edição de áudio para mixagem e QA. **Não é obrigatório usar todas as tecnologias mencionadas.**

O resultado precisa parecer um filme editorial de saúde concebido para movimento, não uma apresentação de slides, um template de clínica ou um carrossel animado. O sound design integra a narrativa desde o primeiro storyboard.

## A. Briefing e posicionamento

- **Marca:** CEMESC, Centro Médico Especializado de Coluna, clínica multiprofissional em Coluna, Minas Gerais, Brasil.
- **Tema:** palpitações e informações úteis para avaliação cardiológica.
- **Peça de conscientização:** 12 de novembro — Dia Nacional de Prevenção das Arritmias Cardíacas e Morte Súbita.
- **Público:** público adulto não especializado, especialmente quem já percebeu episódios transitórios de coração acelerado.
- **Objetivo:** identificação imediata, educação prática sobre o que observar e associação da CEMESC a orientação em Cardiologia, sem transformar o filme em anúncio alarmista.
- **Tom de voz:** humano, calmo, tecnicamente responsável, próximo e profissional.
- **Mensagem que deve permanecer:** três informações observáveis ajudam na avaliação: duração, contexto do início e sintomas associados. Episódios recorrentes merecem investigação; não presumir arritmia.
- **CTA:** orientação especializada, sem induzir urgência artificial nem prometer diagnóstico, tratamento ou cura.
- **Canais:** Instagram Reels e Stories, visualização mobile, também adequado a mídia paga após revisão publicitária.
- **Relação com feed:** não repetir automaticamente curva verde, faixa inferior, foto genérica com médico frontal, logo fixa no mesmo canto ou tratamento idêntico em todas as cenas.

### Identidade e limites imutáveis

- O verde extraído visualmente da marca, branco e neutros formam o universo cromático. Não declarar HEX como especificações oficiais. Uma **paleta operacional de produção (não canônica)** pode partir de: verde-amostra `#006F66` (estimativa), verde de leitura `#064F49`, branco `#FFFFFF`, off-white `#F5F6F2`, cinza `#697674`, carvão suave `#1E2F2C`. Validar contraste na composição real; nenhuma dessas amostras altera a identidade oficial.
- Fonte operacional sugerida: **Inter** em pesos regulares, médios e semibold, se disponível/licenciada. Não declarar que Inter é a fonte institucional definitiva. Evitar serifas decorativas e lettering clínico genérico.
- **Logo:** `assets/CEMESC_Logo_Oficial_20261112.png`, PNG original RGBA 1080 × 1080, com transparência, arquivo integral. A assinatura inferior “CENTRO MÉDICO ESPECIALIZADO DE COLUNA” faz parte da imagem. Nunca recriar, redesenhar, recortar o símbolo, retirar a assinatura, recolorir, distorcer ou gerar logotipo por IA. Não substituir por texto “CEMESC”. É permitido posicionar/redimensionar proporcionalmente **a imagem inteira**, com respiro e fundo de alto contraste. Não processar a marca para “melhorar” seu desenho.
- Fotos reais autorizadas de profissionais e da clínica são preferenciais; **nenhuma foto de equipe, paciente ou consultório real foi entregue neste pacote**. Não fingir que pessoas sintéticas ou vídeos de banco são profissionais/pacientes da CEMESC. Pode usar imagens ilustrativas genéricas, pessoas não identificadas e gestos cotidianos, desde que direitos comerciais sejam verificados e não impliquem atendimento real.
- Não inventar nomes, CRMs, credenciais, equipamentos, locais, horários, telefones, dados clínicos, depoimentos, exames ou resultados. Não usar anatomia imprecisa ou um eletrocardiograma decorativo com traçado enganoso. Não representar arritmia como diagnóstico imediato e não tratar palpitação como equivalente de parada cardíaca.
- Copy aprovada é **BLOQUEADA**. Não mudar acentos, grafia, pontuação ou “No CEMESC” para “Na CEMESC”. Não inserir travessão na copy pública.

## B. Assets obrigatórios e status

1. **Locução aprovada e fornecida:** `assets/CEMESC_Narracao_Palpitacoes_20261112_Leni.mp3`. MP3 original, sem cortes, 35,474 s (ffprobe), 584.525 bytes, SHA-256 `d870641c933f7e0f48c03daa4c8b99f8cdedf69cbab37163209bd79b0a9e72e6`. É a **timeline mestra**. Não regenerar voz e não aplicar time-stretch, alterações de pitch, denoise agressivo ou cortes arbitrários.
2. **Logo original fornecida:** `assets/CEMESC_Logo_Oficial_20261112.png`. PNG RGBA com transparência, 1080 × 1080, 366.218 bytes, SHA-256 `e7c368b86d98527970cf5c06a7cd1781914b5480e826a14809ffb8b04e591b2e`. Não reconstruir.
3. **Texto de narração e cartela:** também reproduzidos abaixo, fonte de verdade textual do briefing, sujeito à conferência com áudio.
4. **Não fornecidos:** fotografias reais autorizadas da equipe/atendimento, B-roll de cotidiano, música licenciada, efeitos sonoros licenciados, licenças comerciais das fontes/sons, versão vetorial da logo e especificações cromáticas oficiais. Os arquivos ausentes não devem ser simulados como se existissem. Registrar no QA a origem e a licença de quaisquer assets adicionados pelo executor.

**Checks obrigatórios antes de produzir:** verificar SHA-256, duração e inteligibilidade da locução; conferir alpha e integridade da marca, existência dos arquivos e dimensões. Se os hashes não coincidirem, PARAR e informar a divergência; não prosseguir usando aproximações.

### Copy exata — locução

> Seu coração já disparou de repente e, pouco depois, voltou ao normal?
>
> Se isso acontecer, três informações podem ajudar na avaliação médica.
>
> Primeiro: quanto tempo durou?
>
> Segundo: o que você estava fazendo quando começou?
>
> Terceiro: sentiu tontura, falta de ar ou algum outro sintoma?
>
> Nem toda palpitação significa arritmia, mas episódios recorrentes merecem investigação.
>
> No CEMESC, você conta com atendimento em Cardiologia para cuidar da saúde do seu coração.
>
> Cuide-se com orientação especializada.

**IMPORTANTE:** transcrever e confrontar o MP3 antes da montagem. Se a gravação divergir do roteiro textual, reportar **com a marcação temporal exata** para decisão, sem editar a fala por conta própria. O MP3 já existe e prevalece como duração; o texto acima é a copy aprovada para leitura/validação. Não gravar uma nova locução.

### Copy exata — cartela final de conscientização

12 de novembro

Dia Nacional de Prevenção das Arritmias Cardíacas e Morte Súbita

CEMESC [representado pela imagem da logo oficial, não digitado]

### Textos de apoio em tela — direção gráfica, não substituem a locução

- Cena inicial: `Palpitação repentina?`
- Introdução: `3 informações podem ajudar`
- Ponto 1: `01` + `Quanto tempo durou?`
- Ponto 2: `02` + `O que você estava fazendo?`
- Ponto 3: `03` + `Houve outros sintomas?`
- Apoios opcionais no ponto 3: `Tontura` / `Falta de ar` / `Outros sintomas`
- Reflexão clínica: `Nem toda palpitação é arritmia.` [é condensação tipográfica, **não** alteração da narração; se a revisão clínica exigir literalidade na tela, substitua pelo trecho exato da locução]
- Atendimento: `Cardiologia` e `Orientação especializada`
- Encerramento: cartela exata acima.

Não adicionar novos enunciados médicos ou afirmações não revisadas. A hierarquia é uma mensagem principal de cada vez; não legendar a narração inteira simultaneamente com títulos grandes. Se produzir legendas acessíveis, renderize em faixa própria sem duplicações, com revisão literal da fala.

## C. Conceito visual — “Da sensação à orientação”

**Frase-direção:** uma sensação repentina interrompe o cotidiano; três fragmentos de memória tornam-se informação útil; a atenção se converte em conversa médica e orientação, terminando na data de conscientização.

A estética é **motion editorial misturado a fotografia documental e micrográficos explicativos**. O fio condutor é um **marcador de observação**: um traço curto, um círculo e uma pequena marca de anotação. Ele começa como a reação sutil a uma percepção corporal, torna-se indicador de tempo, ancora as três perguntas e fecha como um ponto de informação ao lado da marca. Não imitar o traçado de ECG; trata-se de um motivo editorial, sem significado clínico.

Fotografia: luz natural suave de janela, ambiente cotidiano plausível, tons neutros, profundidade fotográfica sutil. Evitar hospital azul, imagens dramáticas com mão apertando peito, cardiograma vermelho, partículas digitais genéricas e monitoramento médico fictício. Não representar a pessoa desmaiando, com dor torácica intensa ou em emergência, porque a copy não trata desse quadro.

Tipografia: forte e legível nas perguntas; delicada e espaçada nas cenas de transição; números `01 / 02 / 03` como elemento de orientação, não mero bullet. Uso restrito de motion blur, máscaras, easing refinado, parallax leve e transições por correspondência. A tela deve permanecer respirável.

**Movimentos com propósito**: quando a pessoa interrompe o gesto, a câmera desacelera; quando surge uma pergunta, o marcador vira um novo elemento; quando as três informações são reunidas, o layout deixa de ser fragmentado; no final, a animação descansa e entrega silêncio visual. Não usar animações de entrada aleatórias ou mudanças de tela abruptas a cada frase.

## D. Storyboard audiovisual — macrotempos medidos e ajustes obrigatórios

A duração do MP3 é **35,474 s**, sem time-stretch. Os limites abaixo são **marcos de edição provisórios inferidos do envelope de atividade da voz**; não são word-level timestamps validados. Sincronize os cortes após escuta/inspeção e, se houver alinhador confiável, confirme palavra a palavra. O silêncio final e a cartela devem ser acrescentados **após** o término da voz. Prevê-se master em torno de **39,5 s**.

| Cena / janela inicial | Trecho da locução (exato) | Composição e narrativa visual | Movimento / conexão | Sound design |
|---|---|---|---|---|
| **01 · 00:00–00:04.90** | “Seu coração já disparou de repente e, pouco depois, voltou ao normal?” | Vertical cinematográfico; pessoa adulta genérica em tarefa simples, vista de lado ou mãos/torso, não retrato falso de paciente. A atividade pausa; close no gesto, não em sofrimento. Em uma área limpa aparece `Palpitação repentina?`. | Começo quase documental; pequeno push-in de 2–3%; um marcador circular discreto acompanha a percepção e repousa. Abrir espaço negativo por máscara suave, não borrão que esconda a cena. | Ambiência doméstica muito baixa; **um** impulso orgânico abafado (não batimento alarmista) no instante da pausa; leve redução da ambiência para dar foco à pergunta. |
| **02 · 00:04.90–00:09.65** | “Se isso acontecer, três informações podem ajudar na avaliação médica.” | Mesmo marcador migra para um caderno de notas conceitual ou interface abstrata sem dados pessoais. O número `3` é protagonista; três áreas vazias surgem por recortes. Texto: `3 informações podem ajudar`. | Match cut do círculo para ponto de uma anotação; três módulos deslizam em profundidade suave, sem entrar e sair como slides. | Textura de papel/interface suave; swell curto de clareza, não impacto grave. Trilha deixa mais espaço na fala. |
| **03 · 00:09.65–00:12.05** | “Primeiro: quanto tempo durou?” | Cartão editorial integrado à cena: `01` e `Quanto tempo durou?`, com ponteiro/anel temporal minimalista, sem cronometragem fictícia. | Marcador torna-se círculo de duração; arco simples percorre parte do círculo sem sugerir segundos reais. Enquadramento de detalhe. | Tick analógico suave, **um só** no encaixe do `01`; sem beep de monitor. |
| **04 · 00:12.05–00:15.70** | “Segundo: o que você estava fazendo quando começou?” | A câmera recua do círculo e revela contexto cotidiano/gesto anterior. `02` e `O que você estava fazendo?`. Pode ser a mesma pessoa retomada visualmente, com montagem de 1–2 planos coerentes (repouso/trabalho), não uma coleção de imagens contraditórias. | Reenquadramento com máscara de continuidade; o círculo vira um pequeno marcador no quadro; movimento horizontal leve conduz à próxima pergunta. | Transição direcional curta e macia; microtextura ambiente, sem vinheta de aplicativo. |
| **05 · 00:15.70–00:20.70** | “Terceiro: sentiu tontura, falta de ar ou algum outro sintoma?” | `03` e `Houve outros sintomas?` em escala alta; aparecem como anotações `Tontura`, `Falta de ar`, `Outros sintomas`, legíveis uma por vez. Nenhuma imagem simulando gravidade extrema. | Palavras entram por revelação ligada à anotação, não como balas saltando; uma nota por trecho da voz. Os três módulos permanecem visualmente associados. | Dois ou três microcliques suaves de anotação, com intervalos naturais; a última etiqueta **não** precisa de som. |
| **06 · 00:20.70–00:26.85** | “Nem toda palpitação significa arritmia, mas episódios recorrentes merecem investigação.” | As três anotações ocupam uma página ou superfície única, que se desloca para uma conversa médica ilustrativa. Texto breve `Nem toda palpitação é arritmia.` e, após uma pausa, a ideia de observação/avaliação. Evitar ECG decorativo. | Cartões se alinham e se tornam um resumo; dissolução por match de objeto (caderno/mãos) para consultório genérico de luz natural. Diminuir velocidade, aumentar respiro. | Pequeno som de alinhamento/papel; ambiência de consultório neutra e quase inaudível; trilha estabiliza e perde tensão. |
| **07 · 00:26.85–00:32.55** | “No CEMESC, você conta com atendimento em Cardiologia para cuidar da saúde do seu coração.” | Atendimento genérico ilustrativo: escuta e orientação sem rosto identificável de profissional real, e sem placa ou jaleco atribuído à CEMESC. Palavra `Cardiologia` aparece com tipografia editorial, seguida de `Orientação especializada` apenas quando adequada ao trecho da fala. Se houver fotos oficiais autorizadas fornecidas posteriormente, preferi-las. | Push-in de câmera mais lento; elemento de anotação torna-se uma linha de base discreta para o texto; a composição se simplifica. | Trilha ganha leve calor harmônico; **nenhum** som clínico artificial nem batimento. |
| **08 · 00:32.55–00:35.48** | “Cuide-se com orientação especializada.” | Plano final humano ou fundo claro com o marcador repousando. Breve transição editorial para identidade institucional. Não sobrepor a logo pequena sobre cena carregada. | Movimento desacelera; fade/corte por brilho natural ou máscara de forma; garantir que a palavra final termine antes da cartela. | Pequena resolução musical, sem clímax publicitário; room tone desaparece gradualmente. |
| **09 · 00:35.48–~00:39.50** | **Sem narração.** | Cartela final limpa em fundo branco/off-white, com `12 de novembro`, o título literal `Dia Nacional de Prevenção das Arritmias Cardíacas e Morte Súbita` e, abaixo, a **logo PNG íntegra** em tamanho que permita ler a assinatura. Sem CTA inventado. | Aparecimento coordenado por máscara suave (data → título), logo como imagem integral por fade/scale proporcional mínimo; manter ao menos 2,5 s de leitura estável. Respeitar área segura de Reels. | Trilha assenta em acorde calmo; um micro-swell discreto se necessário; cauda de 0,5–1 s, sem locução. |

**Nota de sincronização:** os pontos 00:09.65, 00:12.05, 00:15.70, 00:20.70, 00:26.85 e 00:32.55 resultam de pausas perceptíveis no envelope de voz e **precisam de revisão ouvindo a palavra real**. A janela do final deve iniciar só após o término real do MP3 (35,474 s), não aos 35,0 s se a palavra ainda estiver soando. Não cortar a última sílaba. Se a leitura da cartela exigir 4,5–5 s, estender a duração total; nunca acelerar narração para caber no tempo.

## E. Direção sonora detalhada

- **Locução:** protagonismo absoluto e inteligibilidade. Preservar o arquivo aprovado como fonte sem edição destrutiva. Medir loudness integrado e true peak; normalizar no estágio de mixagem por ganho global transparente e limitar picos, sem comprimir de maneira agressiva. Trabalhar com voz central.
- **Trilha original ou licenciada:** ambient cinematográfico/orgânico contemporâneo, minimalista, sensação de atenção → clareza → cuidado. Pulsação leve em **~70–88 BPM** é um ponto de partida criativo, não uma regra fisiológica nem imitação de frequência cardíaca. Texturas: piano filtrado/esparso, pad orgânico morno, elemento percussivo seco e raro; sem cordas melodramáticas, sem suspense, sem arpejos tecnológicos genéricos. Energia baixa, progressão perceptível, conclusão resolvida. Sem uso de música comercial sem prova de licença.
- **SFX 1 (00:01–00:02 aprox.):** um impulso surdo e curto, físico, com ataque leve e cauda curta (100–260 ms), para destacar a pausa da atividade. **Não** empregar sequência acelerada de batimentos ou som de monitor hospitalar.
- **SFX 2 (00:05–00:09):** fricção de papel/interface analógica, textura macia, em sintonia com as 3 anotações. Nunca soar como notificações falsas de prontuário.
- **SFX 3, 4, 5 (00:10, ~00:13, ~00:17–19):** ticks/snaps discretos nos encaixes de 01/02/03, com pequenas diferenças de timbre, não uma repetição mecânica do mesmo efeito.
- **SFX 6 (~00:21):** um leve `fold`/deslize de papel que unifica as notas e conduz ao atendimento.
- **SFX 7 (encerramento):** swell ou respiração musical de resolução ao mostrar a data; evitar impacto grave ou logo stinger excessivo.
- **Ambiência:** em cena cotidiana e atendimento, manter baixa, plausível e contínua; crossfades em vez de cortes duros. Se usar footage mudo, pode construir camada própria de room tone licenciado.
- **Mixagem:** voz sobre trilha/sfx com ducking dinâmico, controle de masking na faixa média e picos. Meta preliminar de streaming: true peak final ≤ -1 dBTP, loudness integrado aproximadamente -16 a -14 LUFS (ajustar à voz e à plataforma; verificar com medição, não no ouvido apenas). Conferir mono-compatibilidade, transientes e se a última sílaba continua intacta.
- **Se criar sons via ElevenLabs Sound Effects:** gerar assets separados, revisar licença e registrar prompt, versão e arquivo. Exemplos de prompts: `single muted organic tactile pulse, soft low-mid thump, understated, no medical monitor beep, isolated dry sound, 0.2 seconds`; `gentle realistic paper note slide, minimal airy swish, no UI beep, isolated, 0.4 seconds`; `soft editorial kinetic type lock-in, tiny warm paper click, subtle, 0.15 seconds`; `warm minimal airy transition swell resolving softly, 0.7 seconds, no dramatic riser`.

## F. Implementação e montagem

1. **Auditoria:** `ffprobe` da locução; hashes SHA-256; inspeção da imagem logo RGBA. Criar `reports/assets-audit.json` com nomes, dimensões, hashes, durações e origem/licença. Guardar MP3 original intocado.
2. **Timing:** gerar forma de onda e mapa de pausas em intervalos de 10–30 ms, escutar cada fronteira e fazer alinhamento por frase. Criar `src/timing.ts` ou `data/timing.json` com `start`, `end`, `text`, `confidence`, `verifiedByListening`; não afirmar sincronização perfeita com base apenas no texto.
3. **Estrutura modular:** composições com cada cena como módulo isolado e parametrizável; design tokens, safe-area, `Audio`, animações com `spring`/`interpolate` (Remotion se disponível). Separar `BrandLogo` como **imagem externa íntegra**, `Typography`, `NoteMarker`, `Narration`, `SoundCue`, `EndCard`. Toda copy em UTF-8 e preferencialmente em objeto de dados para revisão literal.
4. **Fotografia/B-roll:** se encontrar footage com licença comercial comprovada, usar em cenas 01, 04, 06/07. Priorizar consistência de personagem, luz e espaço. Se não encontrar footage apropriado/licenciado, construir cenas visuais originais com mãos/objetos abstratos/3D minimalista e grafismos, sem fingir representar atendimento real. Geradores de imagem podem apoiar fundos/objetos, **nunca** redesenhar a logo ou inventar equipe real. Registrar origem e direitos. Não copiar referências de outras marcas.
5. **Movimento:** trabalhar em planos de câmera e grupos de elementos com suavidade, overshoot mínimo, easing orgânico. Evitar wipe de catálogo, glitch, bounce exagerado, ícones 3D genéricos, 3D anatômico enganoso ou card após card. Nos cortes, usar correspondência entre marcador/círculo/nota para garantir progressão.
6. **Layout:** considerar que Instagram cobre porções da área superior/inferior. Zona funcional inicial: centro útil aproximadamente y = 250–1560 px em 1080×1920 para títulos críticos, ajustável após teste na interface; cartela final sem conteúdo essencial grudado ao rodapé. Testar em preview mobile em tamanho real e na miniatura. Fundo final claro para logo verde; conservar alpha.
7. **Exportação:** vídeo master `output/CEMESC_Palpitacoes_12Nov_1080x1920_v01.mp4`, 30 fps, H.264 High Profile, yuv420p, bitrate VBR adequado ao detalhe (~12–20 Mb/s), audio AAC 48 kHz 256–320 kb/s, faststart; duração final determinada pela cartela. Prévia inicial `output/CEMESC_Palpitacoes_preview_00-12s_v01.mp4` com **áudio real + SFX + trilha provisória licenciada ou original**, e vídeo storyboard. Produzir projeto editável e um pequeno quadro/EDL dos cortes.
8. **Projeto:** salvar código, arquivo(s) de configuração, lista de dependências, licenças e `README_PRODUCAO.md` com comandos exatos para prévia, master e QA. Não substituir o MP3 original. Não versionar renders finais pesados no repositório por padrão.

### Estado atual do pacote

Este repositório `acmarketingcomercial-coder/HD` foi reutilizado com autorização do cliente, substituindo briefing e assets da campanha anterior. **Não reutilizar logo JVX, narração JVX, paleta JVX, mascote ou código de cliente anterior.** O backup da versão anterior está na branch `backup-jvx-antes-cemesc-20261112`. Os dois arquivos reais listados na seção B devem estar presentes na pasta `assets/` da branch principal; se não estiverem, reportar imediatamente. O repositório está **público**: avaliar privacidade de arquivos e licenças antes de compartilhar links publicamente.

## G. QA e conformidade — critérios de aceite

**Bloqueadores / REPROVADO:** logo reconstituída/recolorida/cortada; texto com erro; “Na CEMESC” em vez de “No CEMESC”; locução trocada/cortada; imagem de pessoa sintética apresentada como profissional da CEMESC; data/título final incorretos; claims médicos inventados; vídeo incompleto; artefatos anatômicos graves; asset sem direito de uso comercial publicado como se licenciado; duração que elimine fala.

**Ajustar:** texto minúsculo ou sob UI; animações com velocidade sem relação com voz; recortes/máscaras vazando; cards repetidos; transições que não se conectam; trilha cobrindo a fala; impacto sonoro excessivo; cartela ilegível; falta de diferenciação entre cenas; fundo que reduz contraste do logo.

**Aprovável para revisão humana, nunca aprovado automaticamente:** todos os textos literalmente conferidos; hash de voz/logo verificados; visual distinto e consistente; cartela legível; mixagem equilibrada; ausência de diagnósticos implícitos; direitos de uso documentados; sincronização conferida com áudio final. Publicidade médica e conteúdo clínico exigem revisão aplicável do responsável antes da publicação.

### Testes objetivos obrigatórios

- Comparar linha a linha locução textual e gravação, sinalizar divergência com timestamp.
- Verificar enquadramento 1080×1920, 30 fps, ausência de barras/crop inesperados.
- Extrair frames em 1 s, 3 s, 7 s, 11 s, 14 s, 18 s, 22 s, 29 s, 34 s, 36 s e 38 s; verificar texto e hierarquia visual.
- Checar legibilidade das três perguntas em tela mobile e da cartela do Dia Nacional.
- Conferir a logo inteira, incluindo slogan, na cena final (tamanho que permita leitura).
- Observar face/mãos/objetos quadro a quadro; nenhum morphing estranho ou equipamento fabricado.
- Revisar cortes e áudio de 0 a 1 s, fronteiras de cena e 34 a 40 s, sem cliques nem sílabas truncadas.
- Medir `ebur128`/loudnorm, true peak e coerência da mixagem; checar trilha sob fala, e a cauda.
- Guardar `reports/qa_report.md` com classificação APROVÁVEL/AJUSTAR/REPROVADO, motivos observáveis, timestamps e instruções de correção.

## H. Fluxo de aprovação obrigatório

**Fase 1 — Validação do pacote e storyboard operacional:** auditar materiais, confirmar/corrigir alinhamento temporal por escuta e listar B-roll/trilha/SFX adicionais e suas licenças. Nenhum conteúdo médico adicional sem revisão.

**Fase 2 — Prévia audiovisual curta:** produzir SOMENTE os primeiros ~12 segundos (gancho, `3 informações` e início do ponto 1) em 1080×1920 **com áudio**, tipografia, movimentos e som suficientes para validar a linguagem. Entregar vídeo, 3 frames-chave e nota de escolhas criativas/limitações. **Aguardar a aprovação explícita do responsável.**

**Fase 3 — Master condicionado ao aceite:** somente após aceite, compor todo o filme usando o áudio original, revisar timing, aplicar revisão clínica/publicitária, mixar, renderizar e fazer QA. Não chamar um vídeo de aprovado sem confirmação humana.

**Fase 4 — Correções locais:** preservar partes aprovadas; registrar timestamp, região, mudança e invariantes; corrigir layer/component, não regenerar filme inteiro. Reinspecionar antes/depois.

## Entregáveis esperados

1. Projeto editável e instruções de execução.
2. `output/CEMESC_Palpitacoes_preview_00-12s_v01.mp4` para aprovação inicial.
3. Storyboard/timing validados e relatório de ativos/licenças.
4. Após aprovação explícita: MP4 master vertical, report QA, EDL de cenas e thumbnails de referência.
5. Não publicar em rede social nem declarar aprovação final sem comando do responsável.

**Ordem imediata ao Claude Code:** leia tudo, valide MP3 e logo por hash, monte o projeto e gere a prévia audiovisual 0–12 s. Mostre os resultados verificáveis e as pendências. Interrompa antes da renderização completa até receber aprovação.
