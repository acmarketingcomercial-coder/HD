# PROMPT MESTRE DE PRODUÇÃO — AC MOTION STUDIO / INTERNET JVX
## Filme: “Travou. Mas onde está o problema?” | V1.1 | 11/11/2026

> **LOCALIZAÇÃO DOS ASSETS NO GITHUB:** Os arquivos originais `Narracao_JVX_Roberta.mp3` e `Logo_JVX_Oficial.png` foram enviados à **raiz do repositório HD**, não à pasta `assets/`. Use os caminhos de entrada da raiz e, se a implementação precisar, copie-os sem alteração para `public/assets/` do projeto. Não solicite arquivos que já estão na raiz.

> **INSTRUÇÃO PARA O CLAUDE CODE:** Você é o diretor técnico de Motion Design, editor audiovisual e responsável pela implementação do vídeo. **Produza uma peça audiovisual real**, com composição, animação, sincronização da narração e planejamento/implementação sonora, seguindo rigorosamente este documento. Este briefing é integral e autossuficiente: não presuma acesso a conversas anteriores, arquivos ou memórias do ChatGPT. A direção conceitual, o texto da locução e as regras institucionais estão definidos aqui. NÃO alterar texto aprovado, alegações, identidade ou intenção criativa para “facilitar” a implementação. Não apresente sequências de slides com textos apenas entrando e saindo. **Primeiro crie uma prévia audiovisual com movimento e som para aprovação.** Depois da validação, finalize o filme.

## 0. ARRANQUE OPERACIONAL E FONTES DE VERDADE

1. Abra esta pasta como raiz do projeto ou copie os arquivos preservando os caminhos relativos:
   - `Narracao_JVX_Roberta.mp3` — **locução final fornecida**, voz feminina Roberta / ElevenLabs, pt-BR; MP3 mono, 44.100 Hz, duração medida **60,9175 s**. NÃO substituir por TTS, regravar, alterar timbre, pitch, velocidade ou cortar palavras sem autorização.
   - `Logo_JVX_Oficial.png` — **logotipo oficial original** fornecido; PNG RGBA 1080×1080 transparente. A área alfa visível ocupa aproximadamente x=179–880 e y=284–814; preserve o arquivo pixel a pixel, incluindo elipse violeta, lettering laranja, a palavra INTERNET, relevo e alpha. O arquivo enviado é visualmente idêntico ao A-003 oficial. NÃO redesenhar, vetorizar automaticamente, criar uma versão “parecida”, trocar cores, aplicar filtro sobre a logo ou usar ícone alternativo.
2. Verifique se ambos os arquivos estão disponíveis e decodificáveis antes de desenvolver cenas. Se não estiverem, **pare e indique o que falta**, sem gerar outro logo ou outra narração.
3. Inspecione as skills realmente disponíveis no seu ambiente relacionadas a **Remotion, Motion Design, áudio e Sound Effects**. Use a(s) que melhor atender(em) à tarefa. Não assuma que todas existem; não imponha todos os frameworks simultaneamente. Prefira um fluxo reproduzível, editável, com renderização via Remotion + React/TypeScript quando instalado e funcional; complemente com FFmpeg para inspeção, áudio e transcodificação. Use Blender, After Effects ou outro editor somente se a produção efetivamente exigir e houver acesso. Não faça da ausência de ferramenta uma justificativa para substituir o conceito por slideware.
4. Trate a **locução em MP3 como autoridade para duração e sincronização**, e este roteiro como texto editorial aprovado. Compare o que foi falado com o roteiro abaixo. Se encontrar diferença, **não invente transcrição nem regrave**: reporte exatamente a divergência e mantenha a gravação intacta. Extraia alinhamento real de frases e palavras por escuta, forma de onda e/ou ferramenta de alinhamento efetivamente disponível. Os pontos de silêncio indicados adiante são **candidatos**, não carimbos semânticos comprovados.
5. Prioridade: (1) locução e texto aprovados; (2) logo oficial e identidade; (3) roteiro/narrativa visual; (4) ritmo, sound design e refinamento; (5) preferências de implementação. Em conflito, sinalize e proponha correção localizada, sem mudanças silenciosas.

## A. BRIEFING E OBJETIVO

**Cliente:** Internet JVX, provedor regional de internet por fibra óptica com referência em Coluna/MG, Brasil.

**Posicionamento da marca:** “Internet que não te deixa na mão.” A frase representa proximidade, estabilidade desejada em momentos importantes e orientação humana; **não constitui garantia de conectividade ininterrupta, resolução imediata ou desempenho de rede mensurado**.

**Público-alvo:** moradores, famílias e pequenos negócios da região atendida pela empresa, usuários cotidianos de smartphone, notebook e Wi-Fi. Não supor disponibilidade em uma cidade, bairro ou endereço específico.

**Objetivo do vídeo:** educação técnica acessível, percepção de competência e confiança, com convite a contato quando o usuário precisar de orientação. O resultado deve ser interessante mesmo para quem ainda não conhece a JVX.

**Tema:** o sintoma “travou” não define automaticamente a causa. A investigação percorre quatro hipóteses: (1) aplicativo; (2) dispositivo/conexão desse dispositivo; (3) condições de Wi-Fi; (4) cabo, roteador, configurações e possibilidade de problema na conexão.

**Formato:** Reels/Ads vertical **1080 × 1920, 9:16**, 30 fps, pt-BR, com trilha, locução e efeitos. Entrega H.264 MP4 com áudio AAC, `yuv420p`, `+faststart`. Mantenha projeto fonte editável. Adaptar cortes/áreas seguras ao preview da plataforma.

**Duração corrigida:** narração real = **60,9175 s**. **Não use os 75 s do storyboard antigo como duração fixa.** Pré-proposta: duração final por volta de **62–64 s**, com 1–3 s adicionais apenas para respiro visual de marca, conforme a última frase e a mixagem. Determinar o número final de frames a partir do áudio alinhado; não acelerar, cortar ou preencher com cenas imóveis arbitrariamente.

**CTA final:** “Precisou de ajuda?” e número **(33) 98869-7531**. Assinatura: “Internet que não te deixa na mão.” Não inventar planos, preços, velocidades, ofertas, garantia, horário de atendimento, SLA, cobertura, depoimentos, equipe ou números. Instagram institucional `@internetjvx` pode ser incluído **somente se não prejudicar a legibilidade**; o CTA prioritário é WhatsApp.

**Tom:** seguro, direto, cotidiano, próximo e informativo. Nada futurista genérico, promessas absolutas, humor depreciativo, tecnicismos desnecessários ou cenário atribuído falsamente a instalações reais da JVX.

## B. CONTEÚDO EDITORIAL APROVADO — LOCUÇÃO INTEGRAL

**Este texto é referência editorial de comparação com o áudio enviado. NÃO reescrever, corrigir estilo, condensar, acrescentar slogans nem substituir a gravação.**

> Travou. Mas onde está o problema?
>
> Antes de colocar a culpa na internet, vale seguir algumas pistas.
>
> Primeira: só um aplicativo parou? Se os outros funcionam normalmente, a dificuldade pode estar nele.
>
> Segunda: acontece só em um aparelho? Vale investigar o dispositivo e como ele está conectado.
>
> Agora, se vários aparelhos apresentam dificuldade no Wi-Fi, distância, paredes e interferências podem influenciar.
>
> E se o problema aparece também em um teste com cabo? É hora de considerar outras possibilidades: cabo, roteador, configurações e até a conexão.
>
> Percebeu? O sintoma pode ser igual. A causa, não.
>
> Por isso, antes de sair tentando qualquer solução, o primeiro passo é observar onde o problema aparece.
>
> E, quando precisar de orientação, a Internet JVX está perto de você.
>
> Internet JVX. Internet que não te deixa na mão.

**Textos de tela — curtos, literais, com grafia exata:**
1. `TRAVOU?`
2. `Vamos investigar.`
3. `Só um aplicativo?`
4. `Só neste aparelho?`
5. `Distância · Paredes · Interferências`
6. `Até no cabo?`
7. `Mesmo sintoma. Causas diferentes.`
8. `Entenda antes de tentar resolver.`
9. `Precisou de ajuda?`
10. `Internet que não te deixa na mão.`
11. `(33) 98869-7531`

A expressão `TRAVOU` pode reaparecer no clímax como parte da transformação gráfica, sem inventar novo conteúdo. Números nas cenas técnicas ou títulos diagnósticos extras **não são necessários**. Não exibir legenda automática completa por padrão; se for criar legendas acessíveis, torná-las uma trilha separada opcional, sem competir com os títulos e com o texto fiel ao áudio.

## C. IDENTIDADE VISUAL, LAYOUT E PRINCÍPIOS

### C1. Paleta
- Navy institucional predominante: `#02132D`.
- Azul JVX estrutural/apoio: `#004AAD`.
- Laranja para ênfase pontual: `#FF8404`.
- Branco e off-white neutros, por exemplo `#F7F6F2`, **não** nova cor institucional.
- O violeta **pertence exclusivamente à logo oficial**; jamais usá-lo como cor de layout nem editar sua aparência.

### C2. Fonte
- **Poppins obrigatória**, títulos Bold/SemiBold, apoios Medium e corpo Regular. Confirmar o carregamento da fonte no ambiente e na renderização; instalar de fonte legítima se necessário. **Nunca entregar uma fonte substituta como arte final**.
- Parâmetros iniciais para 1080 px: título 64–82 px; perguntas 42–54 px; apoio 32–40 px. São sugestões, não tamanhos cegos. Ajustar por layout e smartphone real.
- Mantê-la legível em 1× no celular, sem sombra espessa, contorno neon, texto cortado ou quebra desequilibrada. Evitar palavras isoladas em linhas órfãs.

### C3. Linguagem
- Filme de **investigação audiovisual com objetos e motion editorial**, não apresentação de slides animados.
- Protagonista: celular realista que abre a investigação e volta na conclusão. Notebook, roteador e cabo são pistas que entram organicamente na história.
- Combinar fotos/footage realistas, recortes precisos, perspectivas 2.5D, planos de profundidade, máscaras, parallax contido e elementos informativos pequenos quando necessários.
- Objetos plausíveis e sombras físicas suaves; sem sensação de render plástico, sem neon, halos, feixes luminosos nem “redes digitais” decorativas.
- Alternar navy/azul e **off-white** na comparação, sem obrigar fundo azul em todas as cenas. Fotografia de pessoa real só com direitos/consentimento adequados; o filme pode funcionar sem pessoas visíveis.
- Não inserir mascote A-002: **não foi solicitado**.
- É PROIBIDO usar barrinhas horizontais decorativas laranja/brancas, sublinhados artificiais, curvas, arcos, ondas Wi-Fi decorativas, ícones genéricos de preenchimento ou tarjas laranja grandes. Indicadores, setas e linhas só se explicarem literalmente a relação técnica.
- Não fabricar logos de aplicativos, prints de medição, dashboards numéricos ou depoimentos.
- Logo original: compor em camada separada, sem alteração pixel a pixel; pode animar **posição, escala uniforme e opacidade do asset inteiro**, mas não alterar cores, geometria ou efeitos internos. Evitar cortar a área visível do PNG. Para contraste, alterar o **fundo**, não a marca.

### C4. Área segura
- Canvas 1080 × 1920. Iniciar com margens laterais de 90–110 px para títulos. Proteger texto, marca e telefone das sobreposições típicas do Instagram; como aproximação conservadora, testar zona superior de ~250 px e inferior de ~350 px sem conteúdo essencial, sempre validando o preview real de Reels/Ads. Dispositivos decorativos podem sair do quadro; textos e marca, não.
- O telefone deve permanecer legível por tempo suficiente no encerramento. Enquadramento de produtos, rosto ou detalhe técnico não pode ser obstruído pela copy.

## D. NARRATIVA, CONTINUIDADE E ENCADEAMENTO

A estrutura dramática é: **mistério → pistas → descoberta → orientação → JVX**. A câmera deve **atravessar** as situações sempre que houver relação visual clara:

`celular com conteúdo travado` → `câmera entra na tela` → `camadas do app` → `recompõe o celular` → `comparação com notebook` → `zoom out revela o ambiente e o roteador` → `câmera se aproxima da LAN` → `segue um cabo Ethernet` → `abre quatro possibilidades técnicas` → `reúne todas as pistas` → `retorna ao celular original` → `desaparece no fundo institucional` → `logo oficial + WhatsApp`.

**Física do movimento:** easing natural, antecipação curta, desaceleração e movimento de escala coerente. Sem tremores, transições aleatórias, zooms agressivos recorrentes ou bounce artificial. Uma grande transformação por cena; ações secundárias só quando explicam o raciocínio. Cada corte deve preservar continuidade de objeto, geometria, direção, cor ou ação.

## E. STORYBOARD AUDIOSSINCRONIZADO — 10 CENAS

**ATENÇÃO: os tempos abaixo são uma proposta inicial ancorada em pausas detectáveis na gravação, NÃO transcrição/alinhamento de palavra verificado.** Faça a confirmação ouvindo o MP3 e marcando os termos. Mantenha a locução integral. Se houver variação, reacomode o corte e a animação à voz.

| Cena | Janela aproximada no MP3 | Locução de referência | Título na tela |
|---|---|---|---|
| 01 | 00:00.00–00:03.27 | “Travou. Mas onde está o problema?” | `TRAVOU?` |
| 02 | 00:03.27–00:08.31 | “Antes de colocar a culpa na internet, vale seguir algumas pistas.” | `Vamos investigar.` |
| 03 | 00:08.31–00:14.64 | “Primeira: só um aplicativo parou? Se os outros funcionam normalmente, a dificuldade pode estar nele.” | `Só um aplicativo?` |
| 04 | 00:14.64–00:21.55 | “Segunda: acontece só em um aparelho? Vale investigar o dispositivo e como ele está conectado.” | `Só neste aparelho?` |
| 05 | 00:21.55–00:29.63 | “Agora, se vários aparelhos apresentam dificuldade no Wi-Fi, distância, paredes e interferências podem influenciar.” | `Distância · Paredes · Interferências` |
| 06 | 00:29.63–00:40.13 | “E se o problema aparece também em um teste com cabo? É hora de considerar outras possibilidades: cabo, roteador, configurações e até a conexão.” | `Até no cabo?` |
| 07 | 00:40.13–00:44.74 | “Percebeu? O sintoma pode ser igual. A causa, não.” | `Mesmo sintoma. Causas diferentes.` |
| 08 | 00:44.74–00:51.45 | “Por isso, antes de sair tentando qualquer solução, o primeiro passo é observar onde o problema aparece.” | `Entenda antes de tentar resolver.` |
| 09 | 00:51.45–00:56.75 | “E, quando precisar de orientação, a Internet JVX está perto de você.” | `Precisou de ajuda?` |
| 10 | 00:56.75–00:60.92 | “Internet JVX. Internet que não te deixa na mão.” | Slogan + número |
| Hold | 00:60.92–~00:62.5 | **sem nova locução** | Logo original e número legíveis |

### Cena 01 — Gancho / TRAVOU
- **Composição:** close cinematográfico em celular realista, sobre uma superfície escura e plausível. Na tela, vídeo ilustrativo genérico (sem ator identificável, conteúdo protegido ou marca). Celular no terço inferior-central, ângulo 3/4, profundidade de campo moderada.
- **Ação:** o vídeo interno congela e a interface externa continua respondendo. Não congelar o arquivo inteiro nem colocar uma roda de carregamento ou mensagem de erro. Assim, a falha é do conteúdo exemplificado e NÃO prova ausência de internet.
- **Animação:** aproximação rápida e controlada da câmera em direção ao display; texto `TRAVOU?` aparece num golpe tipográfico curto com desaceleração.
- **Som:** interromper apenas o áudio diegético ilustrativo; microglitch curto (~0,12–0,18 s), pausa de contraste. Nunca distorcer a voz da narradora.
- **Saída:** o conteúdo da tela ocupa o quadro e transforma-se num espaço gráfico navegável.

### Cena 02 — Entrar na investigação
- **Composição:** interior abstrato da interface com base navy; 2–3 camadas funcionais do aplicativo, com bordas/cantos realistas. Fundo azul profundo, texto curto em Poppins.
- **Ação:** interface se separa em profundidade, uma camada avança e prepara a primeira pista. Laranja apenas para o item analisado.
- **Movimento:** `push in` + leve parallax 2.5D; reveal por máscara, nenhuma animação genérica de cartão ao acaso.
- **Som:** whoosh suave de profundidade, snap tátil no posicionamento.
- **Saída:** painel central de aplicativo torna-se protagonista da cena 03.

### Cena 03 — Possibilidade: aplicativo
- **Composição:** três painéis genéricos funcionais sem marcas oficiais, em volumes discretos; um não responde, os outros seguem ativos.
- **Ação:** a comparação comunica **possibilidade** de dificuldade limitada a um aplicativo, nunca diagnóstico definitivo. Exibir `Só um aplicativo?`.
- **Movimento:** 1 painel para enquanto 2 permanecem ativos; foco de câmera no painel. Recolhimento orgânico das camadas para o smartphone físico.
- **Som:** cliques de interface pouco intensos; único pequeno encaixe quando camadas retornam.
- **Saída:** celular recupera forma realista e desliza lateralmente, abrindo quadro para notebook.

### Cena 04 — Possibilidade: dispositivo
- **Composição:** alternância para off-white. Celular à esquerda e notebook à direita, com sombras naturais e escala plausível; o smartphone tem dificuldade e o notebook funciona de modo ilustrativo.
- **Ação:** mostrar `Só neste aparelho?`. O contraste evidencia diferença entre dispositivos na mesma rede, sem alegar defeito físico.
- **Movimento:** celular abre espaço via translação suave; laptop entra com parallax contido. O enquadramento se afasta e revela o contexto espacial da próxima cena.
- **Som:** swish curto lateral, clique de assentamento natural.
- **Saída:** zoom out para vista esquemática do ambiente com roteador.

### Cena 05 — Possibilidade: Wi-Fi
- **Composição:** corte esquemático visualmente limpo de dois cômodos brasileiros, roteador num cômodo, dispositivo no outro, com parede entre eles. Evitar cenografia excessiva. O diagrama de alcance é **qualitativo**, não uma medição nem garantia física universal.
- **Ação:** destacar sequencialmente `Distância`, `Paredes`, `Interferências`, acompanhando as palavras reais do MP3. Não representar interferências como raios de energia ou ondas decorativas; use, se necessário, legenda/foco na localização de obstáculos e equipamentos.
- **Movimento:** travelling lateral 2.5D atravessando a parede parcialmente transparente, depois travelling para o roteador e sua porta LAN.
- **Som:** ambiente e movimento de ar leve; um acento de revelação quando a parede se interpõe. Não fazer três beeps iguais.
- **Saída:** aproximação macro realista da porta Ethernet do roteador.

### Cena 06 — Possibilidade: cabo/roteador/configuração/conexão
- **Composição:** macro fotográfico de conector RJ45 real e porta LAN plausível. Um cabo liga roteador a notebook que possui porta compatível (ou adaptador correto). A câmera acompanha fisicamente o cabo, que funciona como guia compositivo e NÃO como curva decorativa.
- **Ação:** o teste cabeado também apresenta problema na ilustração, sem provar falha da provedora. Criar uma segunda composição editorial com quatro possibilidades: cabo, roteador, configurações e conexão. Não inventar resultados de speedtest, indicadores de sinal ou valores medidos.
- **Movimento:** encaixe RJ45 → câmera corre no mesmo sentido do cabo → afastamento para quatro possibilidades organizadas. Preferir uma transição contínua entre macro e diagrama.
- **Som:** **clique físico de RJ45** no instante exato; abafamento sutil da trilha na pergunta; pequenos acentos de revelação espaçados e não idênticos.
- **Saída:** quatro possibilidades entram no mapa conclusivo.

### Cena 07 — Descoberta: causas diferentes
- **Composição:** aplicativo, celular/notebook, Wi-Fi/roteador e cabo/conexão surgem como quatro camadas distintas de um mesmo quadro. Centro com `TRAVOU`, que evolui para `Mesmo sintoma. Causas diferentes.`
- **Ação:** explicar que os quatro percursos são hipóteses alternativas, não uma linha causal única.
- **Movimento:** trajetórias curtas que se aproximam do centro, com transformações de máscara e tipos. Evitar diagrama poluído.
- **Som:** encaixes variados e resolução curta; criar silêncio relativo na locução `A causa, não.`
- **Saída:** os elementos se recolhem e revelam o celular da abertura.

### Cena 08 — Orientação: observe o comportamento
- **Composição:** smartphone original retoma o protagonismo; pequenos indicativos visuais de observação (aplicativo, dispositivo, Wi-Fi/cabo) aparecem apenas se necessários. Sem simular telas de suporte oficiais ou diagnósticos automáticos.
- **Ação:** reforçar `Entenda antes de tentar resolver.`. Não prescrever reset de roteador como solução universal nem alterar configurações avançadas.
- **Movimento:** câmera volta ao mundo real e desacelera; interface se organiza com poucos elementos.
- **Som:** efeitos de movimento ficam mais baixos, entra melodia levemente mais acolhedora.
- **Saída:** fundo realista dá lugar ao navy institucional.

### Cena 09 — Contato JVX
- **Composição:** celular em primeiro plano à direita ou esquerda conforme leitura do quadro; fundo navy→azul sutil. Texto `Precisou de ajuda?` em Poppins; revelar número `(33) 98869-7531` sem simular conversas reais com atendentes nem exibir prints falsos.
- **Ação:** o caminho de orientação culmina num canal real de contato.
- **Movimento:** aproximação controlada; revelação do telefone por máscara tipográfica simples.
- **Som:** toque discreto e resolução harmônica parcial. Sem som de notificação repetida.
- **Saída:** celular se desloca parcialmente, deixando espaço físico para logo oficial.

### Cena 10 — Assinatura e hold
- **Composição:** fundo navy com gradiente azul muito suave, **logo PNG original** inteiro em área central de leitura, slogan `Internet que não te deixa na mão.` e telefone `(33) 98869-7531` em Poppins. Não reconstruir a logo com texto ou formas, não usar crachá do mascote.
- **Animação:** entrada curta por opacidade e translação/escala uniforme leve; depois estabilidade para leitura. Evitar bounce, glow, flare ou giro 3D da logo. Slogan aparece no momento da frase final.
- **Som:** pequeno acento tonal autoral na entrada da marca, encerramento suave de trilha. O som não deve competir com a fala final. Manter ~1–2 s de hold visual depois da voz, se necessário e esteticamente adequado.
- **Saída:** vídeo encerra limpo, sem chamada adicional inventada.

## F. SOUND DESIGN — INTEGRADO À NARRATIVA

### F1. Direção de trilha
- **Estilo:** eletrônica minimalista/editorial, moderna, curiosa e acessível; nada de suspense policial, música corporativa genérica, EDM agressivo ou videogame.
- **Faixa de andamento sugerida:** ~105–115 BPM, referência central 108 BPM, sem obrigação de alinhar cortes sempre à batida.
- **Instrumentação:** textura eletrônica leve, baixo macio, percussão seca precisa e poucas notas melódicas quentes. Progressão: corte inicial e curiosidade → descobertas e energia → pequena pausa no clímax → conclusão acolhedora.
- **Licença:** usar música original gerada/licenciada ou biblioteca com uso comercial validado. Não inserir música protegida como “referência sonora”. Se não puder verificar licença, usar cama sonora original/sintetizada ou reportar a pendência; jamais alegar licença sem evidência.
- **Mix:** locução inteligível como prioridade absoluta; ducking responsivo durante frases (ponto de partida ~4–6 dB), ajustado de ouvido. Pausas podem receber respiro de música/SFX, sem preencher tudo. Exportar master com sonoridade consistente para redes, alvo operacional inicial em torno de -14 a -16 LUFS integrado e true peak abaixo de -1 dBTP (ajustar após ouvir e medir). O MP3 de origem foi observado com loudness aproximado de -23,3 LUFS integrado e true peak -4,2 dBFS; **não normalizar a voz isoladamente até clipe**, mixar o conjunto com headroom.

### F2. Mapa de efeitos (pontos = eventos visuais, não apenas relógio)
| SFX | Cena / gatilho | Textura e intenção | Duração de referência |
|---|---|---|---|
| 01 | 01: conteúdo interno congela | microglitch seco, corte curto, quase silêncio depois | 0,12–0,20 s |
| 02 | 02: câmera atravessa tela | deslocamento de ar com corpo médio e final leve | 0,5–0,8 s |
| 03 | 02–03: camadas alinham | snap fino material, 1 a 2 eventos | 0,10–0,20 s |
| 04 | 03→04: aparelhos se recompõem | swish lateral contido e um encaixe suave | 0,35–0,65 s |
| 05 | 05: parede é revelada | movimento espacial com um único acento | 0,5–0,9 s |
| 06 | 06: RJ45 encaixa | som Foley de plástico/trava realista | 0,15–0,40 s |
| 07 | 06: hipóteses aparecem | microcliques variados, NÃO quatro beeps idênticos | 0,10–0,25 s |
| 08 | 07: conclusão reúne pistas | encaixe coletivo com resolução discreta | 0,4–0,7 s |
| 09 | 08: informações se organizam | deslocamento sutil de camada e queda de intensidade | 0,4–0,8 s |
| 10 | 09: telefone aparece | toque tátil neutro, sem notificação caricata | 0,10–0,20 s |
| 11 | 10: logo aparece | assinatura tonal original curta, harmônica, com decaimento | 1,0–2,5 s |

**Regra:** nem todo movimento precisa de SFX. Som deve nascer de ação, física ou significado, não da vontade de preencher a timeline. Cortar SFX se competirem com a voz ou se o conjunto soar artificial. Usar sons originais/gerados ou licenciados.

### F3. Prompts para criar efeitos originais, se uma ferramenta de Sound Effects estiver disponível

1. **Glitch de interrupção:** `A very short, dry digital playback interruption with a tiny glitch and abrupt cutoff. Clean, restrained, modern technology sound. No voice, no music, no alarm, no arcade beeps.`
2. **Travessia da tela:** `A smooth, controlled cinematic air displacement moving forward into depth, subtle low-mid texture, soft ending, premium editorial motion design transition. No explosive impact, no sci-fi laser.`
3. **Encaixe de interface:** `A small tactile interface snap, precise and soft, short transient, subtle material weight, minimal resonance. No keyboard typing, no notification beep, no music.`
4. **Ethernet RJ45:** `Realistic close-up sound of an RJ45 Ethernet connector firmly clicking into a network port, detailed plastic latch, clean and dry studio Foley. Single action, no voice, no background music.`
5. **Resolução das pistas:** `A restrained collection of soft mechanical alignment clicks resolving into one cohesive subtle snap, premium modern commercial sound design. No arcade, no heavy bass impact.`
6. **Assinatura final:** `A short warm and clean tonal resolution for an original technology brand end card, understated modern harmonic texture with gentle decay. No resemblance to an existing brand sonic logo, no voice, no cinematic boom.`

## G. ASSETS, PRODUÇÃO VISUAL E RESTRIÇÕES DE ORIGEM

### Assets já fornecidos no pacote
- `Narracao_JVX_Roberta.mp3`
- `Logo_JVX_Oficial.png`

### Assets ainda necessários (NÃO alegar que estão anexados)
- Smartphone fotográfico realista em plano 3/4, com tela manipulável em composição.
- Notebook realista, com tela genérica e porta Ethernet coerente ou adaptador de rede fisicamente correto.
- Roteador Wi-Fi doméstico realista e porta LAN plausível. Não atribuir um modelo ao provedor.
- Cabo Ethernet com conector RJ45 correto.
- Ambiente doméstico/mesa simples para abertura e representação esquemática de dois cômodos para a parte de Wi-Fi.
- UI genérica ilustrativa criada do zero, sem semelhança indevida com marcas de terceiros.
- Fonte Poppins legítima, trilha original/licenciada e efeitos originais/licenciados.

### Estratégia de obtenção
1. Checar se há assets de vídeo/imagem com permissão comercial no ambiente. Se houver, catalogar origem e licença.
2. Se houver mecanismo apropriado de geração, criar fotos/recortes **sem textos e sem logos**, com instrução de luz, ângulo e área negativa; conferir cabos, portas e anatomia. Usar composições por camadas, não montar o vídeo final como uma sequência de vídeos gerados com títulos embutidos.
3. Se não houver ferramenta de geração visual, construir elementos 2.5D/3D estilizados **com acabamento convincente** via ferramentas disponíveis. Se houver limitação que impeça qualidade suficiente, **entregar protótipo tecnicamente honesto e lista específica dos assets faltantes**, não chamar formas esquemáticas provisórias de vídeo publicitário final.
4. Não usar foto gerada como prova documental de sede, equipe, clientes, instalações ou cobertura da JVX.
5. Registrar os assets empregados em `ASSET_MANIFEST.md` com origem, status de licença e escopo de uso.

## H. IMPLEMENTAÇÃO SUGERIDA — REMOTION QUANDO DISPONÍVEL

- Inicializar um projeto com composição única `JVX_Travou_9x16`, `width=1080`, `height=1920`, `fps=30`, duração em frames calculada com `Math.ceil((audioDuration + endingHold)*fps)`. Medir duração real pelo arquivo. Evitar valores hardcoded de 75 s.
- Organização sugerida (adaptável):
  ```text
  src/
    Root.tsx
    JVXTravou.tsx
    scenes/Scene01Freeze.tsx ... Scene10EndCard.tsx
    components/BrandText.tsx
    components/Device*.tsx
    animation/transforms.ts
    audio/timing.ts
    data/sceneTimeline.ts
  public/assets/
    Narracao_JVX_Roberta.mp3
    Logo_JVX_Oficial.png
    [assets de composição aprovados]
  output/
    preview_15s.mp4
    storyboard_contact_sheet.png
    JVX_Travou_Final_1080x1920.mp4
  ```
- O código deve separar parâmetros de duração, mídia, movimento, textos e eventos de SFX. Preferir transformações frame-based e curvas de easing revisáveis; evitar operações aleatórias que variem entre renders.
- Se usar a API atual de Remotion, consultar a skill/documentação instalada para os nomes reais das funções. Não inventar APIs. Assegurar que a trilha visual e a narração nunca sejam involuntariamente duplicadas durante transições com overlap.
- Sincronizar títulos com **palavras/trechos efetivamente pronunciados**. Construir tabela real de `audio_start`, `audio_end`, `visual_enter`, `visual_exit` após o alinhamento; substituir as janelas estimadas do storyboard e registrar o ajuste.
- Gerar **storyboard em frames** e preview com áudio real; ouvir o resultado. Verificar que o texto de tela permanece legível pelo tempo adequado, sem sobreposição com gestos críticos do produto.
- Se produzir variantes de preview 540×960, manter proporções; master final em 1080×1920.
- Som: preservar áudio original; converter cópia temporária para PCM/WAV se ajudar análise/mixagem, mas a trilha final deve conter **uma única instância** da voz. Analisar espaços vazios, clipping, crossfade e true peak. Cortar trilha antes da queda final, não a voz.
- Exportação final sugerida: MP4 H.264, 1080×1920, 30fps, perfil de compatibilidade amplo, áudio AAC estéreo (voz mono centralizada), pixel format yuv420p, faststart. Não aumentar a resolução de fotos insuficientes sem QA. Salvar projeto editável e assets.

## I. PROCESSO DE APROVAÇÃO — OBRIGATÓRIO

### Etapa I-1: auditoria de entrada
- Confirmar arquivos, ffprobe, duração MP3 60,9175 s, logo pixel intacta, fonte Poppins e métodos de produção disponíveis.
- Validar texto versus áudio por escuta/alinhamento; registrar tempos por cena reais.
- Levantar dependências visuais e sonoras faltantes sem inventar arquivos ou caminhos.

### Etapa I-2: prova audiovisual curta
- **Antes de renderizar 60+ segundos**, gerar uma **prévia real de aproximadamente 12–18 segundos** com voz da gravação, os movimentos principais e SFX: inclua a abertura 0–~14,6 s (travamento → câmera entrando na tela → primeira pista) ou outro trecho de extensão semelhante que permita julgar a linguagem. A prévia precisa incluir **movimento real + transição real + som real**, não slide estático com uma música por cima.
- Renderizar frames-chave/contato visual, indicar quais assets são provisórios e apresentar riscos objetivos.
- Solicitar aprovação do estilo visual, ritmo, física de movimento, tipografia e som. **Não renderizar a versão definitiva inteira antes dessa aprovação**, salvo instrução posterior expressa.

### Etapa I-3: versão completa
- Após aprovação, expandir as dez cenas preservando o que foi validado. Revisar interfaces e efeitos não aprovados cirurgicamente.
- Produzir primeiro um `draft_full.mp4` e depois o master final após QA.
- Entregar projeto fonte, os assets/licenças, tabela de sincronização, preview e master.

## J. CONTROLE DE QUALIDADE — CHECKLIST E GATES

### Erros eliminatórios (REPROVADO)
- Narração regravada, texto omitido ou alterado sem autorização, voz acelerada/comprimida temporalmente para caber.
- Logotipo falsificado, cores alteradas, anel distorcido ou PNG original ausente.
- Fonte Poppins substituída silenciosamente.
- Vídeo fora de 9:16 ou diferente de 1080×1920 no master, fala ou slogans cortados.
- Telefone errado: número correto é **(33) 98869-7531**.
- Alegação absoluta de conectividade, falha automaticamente atribuída à operadora ou diagnóstico técnico falso.
- Informações comerciais, equipe, sede, rostos, métricas, prints e ofertas inventadas.
- Movimento com falhas de máscara, jitter, object clipping, falha de alpha, transição que salta sem intenção, letras com layout quebrado ou sobreposição crítica.
- Mídia de terceiro sem direitos adequados ou fonte falsa.
- Falta de sincronismo óbvio entre voz, cena e efeitos; áudio cortado, com distorção, SFX mascarando o locutor ou trilha sem licença.

### Revisões técnicas obrigatórias
1. Conferir a duração final e início/fim da fala usando FFprobe e inspeção auditiva; vídeo >= duração total da voz.
2. Confirmar os dez segmentos de áudio, sincronização de `TRAVOU?`, `Só um aplicativo?`, `Até no cabo?`, `A causa, não.` e da assinatura.
3. Inspecionar frames nos limites de cenas e em movimento, inclusive cada máscara e transformação de objeto.
4. Conferir contraste, fonte Poppins real, margens, safe-area, telefone e logo no celular, inclusive miniatura e interface do Instagram.
5. Verificar fisicamente conexões, portas LAN, cabo RJ45, interface dos apps e ambientes; nenhum dado técnico inventado.
6. Revisar mix integral com fones e alto-falante de celular; medir loudness e true peak do master; checar picos, silêncios e transientes.
7. Confirmar licenças, `ASSET_MANIFEST.md`, composição editável e render reprodutível.
8. Avaliar se o vídeo tem profundidade e uma narrativa visual coesa; se virar uma apresentação de dez quadros, reprovar e reestruturar a animação antes de prosseguir.

### Entregas nomeadas
- `preview_15s.mp4` (ou duração real do trecho selecionado, claramente marcada);
- `storyboard_contact_sheet.png` com frames-chave;
- `timeline_alinhada.csv` com timecodes reais das frases e eventos de câmera/SFX;
- `ASSET_MANIFEST.md` incluindo licenças e pendências;
- `source/` ou projeto de edição executável;
- **depois da aprovação da prévia:** `JVX_Travou_Final_1080x1920.mp4` e relatório curto de QA.

## K. INSTRUÇÕES DE COMUNICAÇÃO DO AGENTE

Se faltar asset, licença, ferramenta ou alinhamento verificável, seja preciso sobre o problema e apresente a solução com o menor desvio da proposta; **não invente disponibilidade**. Não pedir novamente informações que este pacote já contém. Executar e mostrar os arquivos criados, não apenas descrever que poderiam ser criados. Após a prévia, reportar de maneira breve: o que já ficou pronto, o que é provisório, eventuais desvios e o que precisa de aprovação. Corrigir pontualmente os elementos questionados, sem refazer o filme inteiro silenciosamente.

**Critério central:** faça um vídeo que use o movimento para INVESTIGAR o problema, e não apenas para ANIMAR as palavras do roteiro.
