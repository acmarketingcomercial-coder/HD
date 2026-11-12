# AC MOTION STUDIO — BRIEFING TÉCNICO AUTOSSUFICIENTE PARA CLAUDE CODE
## Internet JVX | Filme: “O perigo que você não vê.” | V1 — 12/11/2026

> **MISSÃO:** produzir, em uma nova pasta/projeto editável, um filme vertical completo para Instagram Reels da Internet JVX. Crie o projeto, organize assets e licenças, sincronize a imagem com a narração enviada, faça Motion Design cinematográfico com chuva realista e sound design narrativo, renderize o MP4 e execute QA. **Não transforme a história em slides animados.** Este documento é autossuficiente. Não dependa de conversas anteriores. Não reutilize o código ou a composição visual de filmes anteriores sem justificativa.

## 0. Entrada e regras de precedência

**Arquivos obrigatórios fornecidos junto a este prompt:**
- `assets/Narracao_JVX_Chuva_Roberta_Oficial.mp3` — arquivo ElevenLabs fornecido pelo cliente. **Áudio definitivo, imutável.** Duração verificada com ffprobe: **44,826063 s**, mono, 44.100 Hz, MP3 ~128 kb/s. SHA-256: `5e39cd6b2dbdc8a600fcdc64a2a07c7173b708da72fe39ccab2220a7655fc552`. Arquivo original recebido com nome `ElevenLabs_2026-11-12T04_02_36_Roberta - Casual, Engaging and Clear_pvc_s50_sim75_v4.mp3` (cópia byte a byte).
- `assets/A-003_JVX_Logo_Oficial.png` — assinatura original oficial **RGBA, 1080×1080**, SHA-256: `0bf80ac3f39c929e5026c93e9f011468203c53bd162b1da72ef35da4cf3b1d9f`. **Aplicar como camada real, sem reconstrução.**

Se os caminhos forem outros no ambiente, localize os arquivos **pelo nome e hash**, reorganize cópias sem alterar os originais e registre o caminho final. Se algum asset estiver ausente, NÃO invente um substituto. Sinalize a pendência. Não confunda a locução deste filme (44,83 s) com a locução de 60,92 s de qualquer outro projeto JVX.

**Hierarquia:** (1) áudio definitivo e narração literal aprovada; (2) logotipo A-003 original; (3) diretrizes deste documento; (4) verificações técnicas e legais; (5) decisões de implementação. Este filme é uma peça **institucional educativa**, não uma oferta comercial.

## 1. Objetivo, público e efeito narrativo

**Objetivo:** conscientizar moradores e clientes sobre os riscos que podem tornar determinadas intervenções externas em postes inseguras durante temporais, mostrando que a avaliação das condições e a proteção de quem trabalha na infraestrutura são parte de uma atuação responsável.

**Público:** moradores e clientes de Coluna/MG e região, que valorizam uma conexão confiável e atendimento próximo. Não alegar cobertura em nenhuma localidade específica além da identificação institucional de Coluna/MG.

**Tese:** parece apenas um poste molhado, mas há infraestrutura elétrica e riscos de trabalho em altura que não são óbvios à primeira vista. A mensagem começa intrigante, revela os fatores concretos, reconhece o transtorno para o cliente e termina com respeito aos profissionais.

**Emoção:** curiosidade → atenção → compreensão → empatia → confiança. **Nunca** medo gratuito, terrorismo visual ou culpabilização do cliente.

**Posicionamento:** “Internet que não te deixa na mão.” É assinatura de marca, **não** garantia técnica de 100% de disponibilidade.

**Formato:** 1080×1920, vertical 9:16, 30 fps, áudio brasileiro, linguagem publicitária editorial. **Duração governada pelo MP3 de 44,826063 s.** Diretriz: aproximadamente **47–49 s**, com 1,5–3 s de sustentação visual/sonora após a última palavra, se necessário. A antiga estimativa de 50–55 s não é meta fixa. Não desacelerar voz, acrescentar intervalos arbitrários nem cortar palavras para bater uma duração.

## 2. COPY APROVADA — BLOQUEADA — INTEGRAL

**Não reescrever, resumir, corrigir, traduzir, rearranjar, substituir, acrescentar CTA ou inventar outras frases na locução.** O MP3 é a mídia de produção; o texto abaixo é a referência para comparação e legendagem opcional. Se o áudio real divergir deste texto, relatar a divergência e **não gerar nova locução**.

> Parece só um poste na chuva.
>
> Mas o perigo nem sempre aparece na primeira olhada.
>
> Em muitos lugares, os cabos de internet compartilham o poste com a rede elétrica.
>
> E, durante um temporal, vento, superfícies molhadas e risco de descargas atmosféricas podem tornar uma intervenção em altura perigosa.
>
> Por isso, antes de realizar o serviço, é preciso avaliar as condições.
>
> Se não houver segurança, o atendimento externo pode precisar esperar.
>
> A gente sabe o quanto ficar sem conexão atrapalha a rotina.
>
> Mas cuidar de quem trabalha para restabelecê-la também faz parte de um atendimento responsável.
>
> Internet JVX.
>
> Internet que não te deixa na mão.

**Texto de tela já previsto no storyboard e autorizado:**
- Cena 01: `Parece só chuva?`
- Cena 02: `Rede elétrica` e `Cabos de internet` como **rótulos técnicos** discretos, ligados às estruturas corretas.
- Cena 03: `Vento`, `Umidade`, `Descargas atmosféricas` — um por vez, exatamente quando a narração abordar as respectivas condições; se a leitura exigir, use dois elementos em vez de três simultaneamente.
- Cena 04: `Segurança em primeiro lugar.`
- Cena 06: `Internet que não te deixa na mão.` juntamente com a logo original.

**Não existe CTA comercial aprovado para este filme.** Não inserir botão WhatsApp, número de telefone, chamada de contratação, mascote, preços, dados ou slogans extras. O título “O perigo que você não vê.” nomeia a campanha e **não precisa virar uma headline adicional na tela**. Não adicionar legendas completas por padrão; se criar legendas acessíveis, oferecer SRT separado e opção de ativação.

## 3. Planejamento de tempo — âncoras provisórias, áudio manda

A onda sonora foi examinada previamente; as seguintes **pausas maiores são detectadas automaticamente**, não constituem transcrição ou alinhamento fonético validado: 2,02–2,48; 5,46–5,91; 10,87–11,32; 20,46–20,92; 25,56–25,95; 30,07–30,57; 34,18–34,62; 39,96–40,40; 42,15–42,56 s. Há também pausas curtas internas. **Não assuma que cada silêncio equivale necessariamente a uma mudança de cena.**

Planejamento inicial de seis blocos (ajuste após alinhamento do áudio):

| Cena | Janela inicial aproximada | Conteúdo narrativo | Regra de sincronização |
|---|---:|---|---|
| 01 | 0,00–5,91 s | “Parece só um poste…” + “Mas o perigo…” | Gancho e primeira descoberta; começar visual e som de chuva desde o quadro 0. |
| 02 | 5,91–11,32 s | Cabos de internet e rede elétrica | Revelar e rotular a infraestrutura ao pronunciar cada conceito. |
| 03 | 11,32–aprox. 21,7 s | Temporal, vento, superfícies molhadas e risco de descargas | Cada condição aparece na respectiva palavra/frase, não todas de uma vez. |
| 04 | aprox. 21,7–30,57 s | Avaliar condições; serviço pode esperar se inseguro | Momento da pausa visual e da frase de segurança. |
| 05 | 30,57–40,40 s | Rotina do cliente + proteção do profissional | Passagem gradual de chuva exterior para ambiente doméstico. |
| 06 | 40,40–44,83 s + respiro final | “Internet JVX” + slogan | Logo entra no nome; slogan visual acompanha a fala; segurar marca por ~1,5–3 s depois. |

**Obrigatório:** usar reconhecimento de voz/alinhamento por palavra quando disponível, ou escuta e análise detalhada com FFmpeg/espectrograma; comparar com a transcrição aprovada. Registrar `timeline_alinhada.csv` com tempo de entrada/fim da fala, palavra-chave, cena, cue de movimento, cue sonoro, confiança do alinhamento. NUNCA declarar alinhamento palavra a palavra verificado se só estimou pelos silêncios.

## 4. Direção de arte — identidade JVX e realismo

- Marca: **Internet JVX**, provedor de fibra óptica sediado em Coluna/MG.
- Navy predominante `#02132D`; azul secundário `#004AAD`; laranja de ênfase pontual `#FF8404`; branco/off-white neutros. O violeta só existe dentro da logo oficial e **não** integra a paleta do layout.
- **Poppins obrigatória:** Bold/SemiBold para títulos, Medium em rótulos, Regular em apoios. Carregar fonte efetiva localmente (p. ex. `@fontsource/poppins`), sem fallback renderizado silenciosamente.
- Design profissional para leitura mobile; margem lateral recomendada 90–110 px em 1080 de largura. Evitar conteúdos essenciais próximos das interfaces do Instagram — reservar referência ~220 px no topo e ~350 px na base, validar no Reel real.
- **Uma ideia e um protagonista de cada vez.** Protagonista predominante: poste e infraestrutura sob tempestade. Evitar muitos widgets/ícones, excesso de labels e telas de texto.
- Atmosfera de cidade brasileira plausível, **não** reconstrução documental da Coluna real, não inventar sede, cliente, técnicos, uniforme JVX ou instalações reais. Se usar cena sintetizada, tratá-la internamente como ilustração.
- Visual: exterior com materiais e comportamento de chuva convincentes, luz natural de céu fechado, concreto molhado, cabos fisicamente plausíveis, sem fogos artificiais ou “energia correndo pelos fios”. A comunicação técnica pode usar discretos overlays 2.5D, linhas **informativas** e rótulos, sem enfeites repetitivos.
- **Proibição:** pequenas barrinhas horizontais decorativas; arcos/ondas, sublinhados ornamentais, partículas neon, halos, fios elétricos brilhantes, faíscas fictícias, choque em trabalhador, drama de acidente. Não usar mascote.
- Logotipo: usar somente o A-003 original no encerramento, nítido e íntegro. Sem refazer em CSS/SVG/IA, sem mudar cores, sem deformar ou recortar elementos. Se desejar presença secundária da marca no filme, **não** introduzir sem aprovação adicional: este storyboard só aprova assinatura final.

### Estratégia visual de implementação

Priorizar **filmagem/stock legitimamente licenciado ou bases visuais realistas por camadas** para chuva e poste; se houver ferramenta de imagem comercialmente autorizada, criar somente *imagens-base sem texto e sem logo*, depois compor a marca real no Remotion. Só criar cenários em 3D/código quando o resultado for visualmente competitivo com uma produção profissional. Evitar repetir a maquete 3D geométrica de produções anteriores. Uma composição técnica esquemática limpa é preferível a 3D pseudo-realista ruim. Não roubar frames de referência, não usar a referência anterior como ativo e não inventar licença de foto/vídeo.

Se não houver fotos, acesso a gerador ou biblioteca licenciada, construir uma versão visualmente consistente usando planos estilizados de acabamento editorial, camadas realistas de atmosfera e diagramas informativos. **Não declarar o resultado fotográfico se continuar ilustrativo.** Registrar as limitações e continuar a produção quando for possível entregar uma versão coerente.

## 5. Storyboard, animação, movimento e som por cena

### CENA 01 — Gancho: “Parece só chuva?” | aprox. 0–5,91 s

**Imagem:** abertura em quadro fechado de água atingindo concreto ou cabo, fundo escuro realista; revelar gradualmente o poste em uma rua brasileira genérica durante um temporal, em 3/4 e ângulo baixo. Movimento de câmera suave de aproximação e início de subida. Gotas aderem, deslizam e respingam com gravidade e escala compatíveis. O poste precisa dominar a cena; não gastar segundos com fundo totalmente vazio.

**Texto:** `Parece só chuva?` após a primeira frase, com leitura breve, Poppins branca. Não cobrir o ponto de descoberta. A pergunta é tensão visual, não “card de título” sobre fundo estático.

**Som:** chuva começa imediatamente, com gotas próximas e ambiência distante; um trovão distante, curto e discreto se justificar o espaço. A música começa rarefeita. Nada de trovão alto cobrindo a voz.

**Transição:** deslocamento da câmera pelo concreto até revelar alturas da infraestrutura; transição contínua, não corte para slide.

### CENA 02 — O que há no poste | aprox. 5,91–11,32 s

**Imagem:** câmera sobe e acompanha conjuntos de cabos. Mostrar com clareza **rede de distribuição elétrica no arranjo superior** e **cabos de telecomunicações na faixa inferior**, com separação espacial coerente. Uma sobreposição técnica discreta destaca ambos, mantendo concreto, céu e chuva no mundo real. Etiquetas `Rede elétrica` / `Cabos de internet` devem apontar para conjuntos corretos. Evitar interseções ou contatos físicos inventados entre redes.

**Movimento:** parallax de camadas, microajuste de foco e recuo breve para contextualizar. Não mostrar imagens documentais falsas de empresa ou equipamentos específicos.

**Som:** um deslocamento espacial curtíssimo da chuva ao acompanhar a câmera; textura musical sutil de descoberta; sem choque, chiado elétrico ou zumbidos que façam parecer uma falha ativa inexistente.

### CENA 03 — Riscos: o que a câmera revela | aprox. 11,32–21,7 s

**Imagem:** continuidade do poste. Vento atua sobre chuva, galhos distantes e cabos com movimentos fisicamente plausíveis, sem oscilação extrema caricata. Macro breve de superfície molhada; céu de tempestade com possibilidade de clarão **distante na nuvem**, nunca descarga conectada ao poste. Criar três descobertas sequenciais sincronizadas às palavras correspondentes: `Vento`, `Umidade`, `Descargas atmosféricas`. São fatores de risco, não afirmações de causa específica de falha da internet.

**Movimento:** travelling e pequenas mudanças de perspectiva; evitar três telas diferentes. Priorizar a continuidade do mesmo ambiente. A câmera investiga; os overlays aparecem apenas quando necessários.

**Som:** vento cresce controladamente, chuva ganha largura, trovão distante e espaçado. Um whoosh leve para transição de foco, sem pacote de impactos cinematográficos. Manter a voz inteligível.

### CENA 04 — Decisão: segurança primeiro | aprox. 21,7–30,57 s

**Imagem:** a câmera desacelera e deixa de se aproximar. As informações técnicas se recolhem e a infraestrutura volta a aparecer como um conjunto, ainda sob chuva. Sugerir decisão responsável sem mostrar técnico real fazendo atividade insegura, sem encenar acidente. Uma pequena transformação gráfica funcional transmite pausa de intervenção; nada de grande selo de “proibido” ou promessa de prazo. Mostrar texto aprovado `Segurança em primeiro lugar.` com dimensão adequada, sem gritar visualmente.

**Mensagem:** a análise de risco determina se uma intervenção externa pode ocorrer; não existe regra universal de que qualquer chuva proíbe todo trabalho. Não formular conclusão mais absoluta que o áudio.

**Som:** reduzir a tensão musical e a proximidade da chuva na frase principal, criando silêncio **relativo**, não corte artificial da ambiência, e sem cortar a voz. Preservar som distante de chuva ao fundo.

### CENA 05 — Do outro lado da chuva | aprox. 30,57–40,40 s

**Imagem:** a câmera se afasta do poste, cruza o exterior molhado e chega à vista de uma janela residencial. Transição para um interior simples e acolhedor, sem pessoas identificáveis, sem cenário publicitário artificial. A chuva vista através do vidro comunica a espera do cliente; a lembrança do poste comunica a segurança do profissional. Não inserir personagens gerados com uniformes JVX nem fotografias que se passem por equipe real.

**Movimento:** continuidade espacial plausível: enquadramento da rua → janela → interior; reduzir a velocidade e deixar respirar. O tom muda de tenso para acolhedor.

**Som:** transição acústica exterior/interior: chuva alta e aberta fica abafada pelo vidro, grave do vento desaparece aos poucos; trilha muda para harmonia quente sem triunfalismo. Sem som falso de conexão “voltando” ou prazo implícito de resolução.

### CENA 06 — Assinatura institucional | aprox. 40,40 s → final (~47–49 s)

**Imagem:** a chuva da janela e a iluminação ambiente se integram em um degradê **navy → azul** sutil. Entrar o **A-003_JVX_Logo_Oficial.png original** quando a voz disser “Internet JVX.”; manter anel, cores, efeitos e proporções reais. Em seguida, slogan literal `Internet que não te deixa na mão.` em Poppins com boa hierarquia e contraste. **Não colocar número de WhatsApp nem botão**: não aprovados para esta campanha. Não usar o símbolo de escudo como logo alternativa.

**Movimento:** pequenos movimentos de posição/escala uniforme e fade bem controlados; sem deformar a logo, sem giros, halos e pulsação. Final de marca legível após a última palavra por 1,5–3 s, com trilha resolvendo naturalmente.

**Som:** assinatura tonal original curta e discreta, com finalização quente. A chuva decai de forma natural; não usar um grande impacto de trailer. Sem silêncio abrupto no corte final.

## 6. Sound Design — papel central da narrativa

**Objetivo:** a chuva é personagem sonora. Ela muda de distância, material, ambiente e intensidade conforme a câmera se move. O resultado deve soar profissional e natural, mais próximo de um filme editorial do que de um pacote de efeitos aleatórios.

**Camadas sugeridas:**
1. Chuva externa ambiente (estéreo coerente) e água no concreto, com textura sem repetição perceptível.
2. Pingos próximos pontuais apenas quando há close concreto/vidro.
3. Vento com variação gradual, sem mascarar a voz.
4. Trovão distante 1–2 ocorrências justificadas; nunca representar descargas atingindo a estrutura.
5. Deslocamentos sonoros sutis da câmera e dos overlays técnicos.
6. Trilha musical **original ou comprovadamente licenciada para uso comercial**: início investigativo, tensão moderada, pequena redução na frase “Segurança em primeiro lugar.”, resolução acolhedora. Preferir poucos elementos acústicos com dinâmica, não bateria/drum loop dominante.
7. Assinatura tonal breve no nome JVX e fechamento com reverb/tail suave.

**Mixagem:** voz central e sempre prioritária; usar sidechain ou automação manual de níveis da música/ambiente sob a voz. Evitar competições na faixa de inteligibilidade vocal. Mixar em WAV (48 kHz recomendado), preservando o MP3 original intacto. Estéreo pode ser construído ao redor da voz mono sem duplicações com delays audíveis. Meta inicial para master social: cerca de **−16 LUFS integrados** e **true peak até −2 dBTP**; ajustar após escuta e medições, sem sacrificar naturalidade ou esmagar a dinâmica. Registrar resultados reais, não supor.

### Earshot — usar se estiver disponível, sem bloquear a produção

Fonte e documentação: `https://github.com/Leonxlnx/earshot` (biblioteca CLI/MCP; checar README atual antes de executar). Verifique `uv`, FFmpeg e permissões de instalação. **Não instalar pacotes não verificados silenciosamente.** Preferir efeitos da biblioteca/preset quando adequados; `forge` apenas para um efeito que realmente precise de síntese específica. Para chuva e trovão naturalmente convincentes, gravações ambiente com licença comercial verificada são preferíveis a efeitos digitais artificiais.

```bash
# Executar apenas se instalação e política do ambiente permitirem
uv tool install "earshot[mcp] @ git+https://github.com/Leonxlnx/earshot"
earshot doctor

# Kit curto e discreto para filme guiado por narração
earshot kit init --preset calm -o audio/kit.json
earshot kit render audio/kit.json --out audio/kit

# Descoberta/medição — selecionar IDs reais da versão instalada
earshot sfx list
earshot measure audio/mix_preliminar.wav
# earshot timeline audio/mix_preliminar.wav --video previews/preview_total.mp4
# earshot critique previews/preview_total.mp4
```

**Atenção:** `earshot critique` compara com um perfil de vídeos de lançamento; interpretar observações como diagnóstico auxiliar, não impor estética de trailer/publicidade de produto. `forge` pode ser usado após ler a sintaxe da versão instalada, por exemplo `earshot forge whoosh --target "a subtle soft camera pass-through whoosh" --dir audio/forge/whoosh`, mas **não** é necessário se um whoosh da biblioteca funcionar. Não depender de downloads de modelos se o ambiente for restrito; `sfx`, `kit` e medidas via FFmpeg são suficientes para um pipeline básico.

**Mídia licenciada:** nenhum SFX, música, chuva ou referência de outro vídeo pode ser usado automaticamente sem rastrear fonte, autor e licença. Não confundir licença MIT do código Earshot com licença de terceiros ou modelos. Criar `ASSET_MANIFEST.md` com licença, URL, atribuição requerida, data de conferência e limitações. Nenhuma publicação comercial final enquanto houver recurso externo sem licença confirmada. Áudio ElevenLabs fornecido: verificar com o cliente o direito comercial conforme plano/termos da conta; não presumir autorização só porque o arquivo existe.

## 7. Precisão técnica, segurança e não ficção documental

O filme é educativo. **Não ensinar operações em postes ou procedimentos elétricos**. As referências de segurança são a NR-10 (riscos elétricos) e NR-35 (trabalho em altura), mas não transformar o filme em instrução normativa ou fazer citações jurídicas em tela. Em novembro/2026, tomar cuidado com a versão temporal das normas: nova redação de NR-10 publicada em 2026 tem vigência indicada para 01/06/2027; consultar texto **vigente** ao verificar regras. A legislação e procedimentos do empregador não devem ser inferidos de modo simplista.

Referências públicas para checagem editorial, **não** para uso visual automático:
- NR-10: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-10-nr-10
- NR-35: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-35-nr-35

**Proibido alegar:** “toda chuva paralisa o serviço”; “a fibra para de funcionar porque molhou”; “todo poste representa risco de choque em chuva”; “a JVX sempre suspende ou retoma em X minutos”; “a JVX utiliza este procedimento operacional”; “temos técnicos/instalações como mostrado no vídeo”; qualquer promessa de serviço ininterrupto. Não dramatizar choque, raio atingindo cabo, acidente, corpo em queda ou salvamento inventado.

## 8. Implementação e estrutura de código

**Pipeline preferencial:** Remotion 4/React/TypeScript, fontes Poppins locais, animações com curvas controladas, FFmpeg/ffprobe para inspeção e finalização de áudio; Earshot opcional para efeitos e análise. Use ferramentas adicionais apenas se realmente disponíveis e úteis. Respeite a licença de Remotion aplicável à organização antes de publicação comercial (conferir `https://www.remotion.dev/docs/license/pricing`).

**Estrutura sugerida (adaptável):**

```text
jvx-perigo-chuva/
  README.md
  package.json
  src/
    index.ts
    Root.tsx
    Film.tsx
    design/tokens.ts
    timeline/cues.ts
    scenes/Scene01_RainHook.tsx
    scenes/Scene02_Infrastructure.tsx
    scenes/Scene03_WeatherRisks.tsx
    scenes/Scene04_SafetyPause.tsx
    scenes/Scene05_HumanSide.tsx
    scenes/Scene06_Brand.tsx
    components/
  public/assets/
    Narracao_JVX_Chuva_Roberta_Oficial.mp3
    A-003_JVX_Logo_Oficial.png
  audio/
    music/
    ambience/
    sfx/
    kit.json
    stems/
  production_notes/
    timeline_alinhada.csv
    ASSET_MANIFEST.md
    QA.md
    qa_measurements.json
  previews/
  output/
    JVX_O_Perigo_Que_Voce_Nao_Ve_V1.mp4
    storyboard_contact_sheet.png
```

- Usar componentes separados por cena, coordenados por uma timeline mestre **baseada nos tempos reais** do áudio. Preferir durações em frames arredondadas consistentemente; 30 fps. Picos de som sincronizados à ação visível, medidos em frames.
- Preservar original de voz/logo e todos os assets; nunca substituir os arquivos mestres.
- Renderização reprodutível com scripts npm claros (`dev`, `render`, `qa`) e instruções de instalação.
- Separar `voice`, `rain`, `wind/thunder`, `music`, `sfx` em stems, para permitir revisões cirúrgicas. O master contém **uma única** instância de voz.
- Não usar o repositório `acmarketingcomercial-coder/HD` ou o código de “Travou” como destino por padrão; são projetos diferentes. Se o ambiente apontar para um repositório antigo, crie nova pasta ou branch específica e preserve tudo existente.
- Não subir voz, logo, assets de terceiros ou materiais internos para repositório **público** sem autorização explícita. Preferir privado, remover tokens/segredos e ignorar caches e dependências no Git.

## 9. Plano operacional — executar integralmente

**A. Preflight:** inventariar assets, calcular hashes, checar instalação de Node, Remotion, FFmpeg, fontes, ferramentas auxiliares e condições de licença. Abrir o áudio real e detectar duração. **Não pedir novos assets já fornecidos.**

**B. Alinhamento:** inspecionar a narração por escuta ou ASR/alinhamento, comparar o texto com a referência aprovada e criar `timeline_alinhada.csv` com confiança e marcações de início/fim. **Nenhum outro TTS.**

**C. Design de ambientes:** selecionar/produzir imagens-base realistas legitimamente utilizáveis. Validar coerência de poste, níveis de cabos, chuva, iluminação, interior e composição. Não começar pelo texto sobre fundo azul.

**D. Motion Design:** implementar seis cenas com continuidade espacial de câmera, cada uma com ações específicas; sem composições desconectadas ou cards repetidos. Gerar storyboard contact sheet e renderizar pequenos trechos de teste para inspecionar o primeiro gancho, a revelação dos cabos, riscos e a assinatura. Não é necessário solicitar aprovação intermediária: conclua a V1 no mesmo trabalho, salvo bloqueio real de asset/segurança.

**E. Som:** organizar trilha, chuva, vento, trovão, transições e assinatura; automatizar níveis sob a voz; usar Earshot se disponível; escutar/verificar os resultados, não apenas ler um score. Documentar fontes/licenças e sincronização.

**F. Render:** gerar master final 1080×1920, 30 fps, H.264 (perfil compatível), `yuv420p`, BT.709, AAC estéreo, `+faststart`. Preferir boa qualidade visual (por exemplo CRF 18–20 com libx264, se apropriado ao pipeline), evitando banding nas áreas navy e degradação em chuva/textos. Uma cópia de distribuição pode ser mais compacta, mas não substitui o master de qualidade.

**G. QA:** analisar o MP4 **real** pós-render e reportar dados medidos, não resultados presumidos. Inspecionar frames nos 6 segmentos e nas transições. Testar legibilidade em escala de smartphone, áudio com e sem fones se houver possibilidade, contraste, assets, estrutura técnica, duração real e segurança das alegações. Produzir versão final e pacote editável.

## 10. Checklist de aprovação (APROVÁVEL / AJUSTAR / REPROVADO)

1. **Narração:** arquivo certo 44,826063 s, uma instância, sem fala cortada, sem mudança de velocidade/pitch/timbre; alinhamento evidenciado por dados e, idealmente, escuta.
2. **Copy:** cada palavra da locução preservada; textos de tela apenas os autorizados, sem CTA/invenções.
3. **Identidade:** Poppins real; cores corretas; logo A-003 original como camada real (hash verificado); nenhum mascote.
4. **Técnica:** poste, rede elétrica e cabos de internet com disposição plausível; chuva e descargas sem fenômenos inventados; trabalho externo retratado como sujeito a avaliação de risco, sem regra universal falsa.
5. **Realismo e ritmo:** poste e ambiente profissionais; chuva fluida e convincente; seis etapas narrativas reconhecíveis; uma câmera que investiga e depois recua, sem maquete infantil ou slides estáticos.
6. **Texto:** áreas seguras; tamanho adequado no celular; nenhum rótulo ligado ao cabo errado; contraste suficiente sobre chuva.
7. **Sound design:** chuva espacial coerente, vento e trovão naturais, música sem mascarar voz; efeitos com função, sem excessos; fechamento acolhedor; nenhum recurso de licença duvidosa liberado para veiculação.
8. **Export:** 1080×1920, 30fps, H.264, AAC, `yuv420p`, `+faststart`, sem frames vazios e sem falhas de render; qualidade de compressão adequada.
9. **Documentação:** manifestos de direitos, tempo das falas/cues, relatórios, versões, projeto fonte reprodutível e arquivos disponibilizados efetivamente.

**REPROVAR** se houver logo falsa/alterada, frase omitida ou alterada, narração substituída, cenas com risco elétrico tecnicamente enganoso, fonte substituída, defeito de corte/legibilidade, ou publicação comercial com mídia sem autorização. **AJUSTAR** para problemas de estética, sincronismo pontual ou timbre que não invalidem a estrutura, documentando precisamente tempos/cenas. Nunca afirmar “aprovado” sem inspecionar o arquivo renderizado.

## 11. Entregáveis obrigatórios

1. `output/JVX_O_Perigo_Que_Voce_Nao_Ve_V1.mp4` — vídeo completo com narração, trilha e SFX.
2. `output/storyboard_contact_sheet.png` — frames representativos das seis cenas, inclusive encerramento.
3. `production_notes/timeline_alinhada.csv` — alinhamento com método e confiança.
4. `production_notes/ASSET_MANIFEST.md` — origem, autor, licença e permissão comercial de cada recurso (incluindo voz).
5. `production_notes/QA.md` e `qa_measurements.json` — avaliação visual/sonora/técnica com o que realmente foi medido e pendências de escuta/licenças.
6. Código Remotion/TypeScript editável, configs, arquivos de projeto, stems de áudio e instrução reprodutível de render.
7. Pacote ZIP para transferência, **sem omitir assets essenciais**, ou commit em repositório privado autorizado, com links e nomes efetivamente verificados. O ambiente de execução pode ser temporário: não prometer permanência de arquivos remotos.

**Entrega sem exageros:** se faltar ferramenta/licença, registrar exatamente a limitação, produzir a melhor V1 possível e não rotular pendência como resolvida. Não interromper a execução por ajustes estéticos desnecessários; completar as seis cenas e avaliar o master.

## 12. Comando final de execução

**Execute integralmente este briefing em um projeto novo e editável. Use a narração oficial de 44,826063 segundos como timeline mestra, a logo A-003 original como asset real e a copy bloqueada. Produza as seis cenas e a mixagem com chuva narrativa, finalize o MP4, rode o QA e entregue o código e os arquivos. Priorize uma produção cinematográfica realista e humana, tecnicamente responsável, sem slides genéricos, acidentes fictícios, áudio não licenciado ou promessas comerciais.**
