# AC MOTION STUDIO — FINALIZAÇÃO V3.3 APROVADA
## Franciele Fotografias | Reserva Programada
Data de decisão: 14/11/2026. Documento autossuficiente para Claude Code.

### 0. Estado criativo e autorização
A usuária APROVOU VISUALMENTE a prévia **V3.2** de cerca de 18,5 segundos e autorizou prosseguir com **a segunda metade e o render do vídeo completo**. A versão V3.2 não foi aprovada como mixagem sonora definitiva: o sound design dos boletos deve ser refinado na **MIXAGEM FINAL INTEGRADA**, não por mais uma renderização isolada da prévia.

Esta instrução V3.3 substitui, apenas quanto ao estágio de produção, as mensagens antigas de "não renderizar o vídeo completo" nos documentos V3/V3.2. Tais mensagens eram válidas nas fases anteriores e NÃO devem impedir a execução final agora autorizada. Não altera a hierarquia de proteção dos assets, voz, direitos de imagem, marca e identidade.

**A autorização é para PRODUZIR e ENTREGAR o master para revisão. Não equivale a autorização de PUBLICAÇÃO comercial**, que depende de consentimento adequado para uso das imagens das clientes e materiais empregados e licenças musicais.

### 1. Origem e limitações dos arquivos
GitHub: `https://github.com/acmarketingcomercial-coder/HD`, branch `main`.
Leia `PROMPT_CLAUDE_CODE.md`, `MANIFEST.json`, `docs/DIRECAO_APROVADA_V3.md`, `docs/PLANO_DECUPAGEM_V3.md`, `docs/AUDIO_EDICAO_V3.md`, `docs/REVISAO_FINAL_V3_2.md`, e este documento.

O GitHub HD contém os arquivos de entrada em `assets/`, mas, na última verificação, **NÃO continha o código-fonte da composição Remotion, a timeline de edição nem os MPs das prévias V3.1/V3.2**. Claude Code deve usar o próprio workspace/projeto que gerou V3.2, se persistente. Primeiro localizar fonte/código e preview V3.2; NÃO declarar reuso ou preservação integral se esses arquivos não existirem. Se o projeto estiver apenas em outro workspace, identificar a localização real ou recuperar a partir do ambiente apropriado, sem fingir que os assets brutos são a prévia aprovada. Não sobrescrever assets originais.

Arquivos existentes:
- `assets/narracao_franciele_reserva_programada_original.ogg` — original 35,6465s, contém falso começo no final.
- `assets/narracao_franciele_reserva_programada_master.wav` — master pré-correção, NÃO usar como voz da final.
- `scripts/preparar_locucao_v3.sh` — gerar `assets/narracao_franciele_corrigida_v3.wav`, cerca de 30,2s; verificar manualmente a emenda próximo de t=22,9s.
- `assets/IMG_2040.mp4` a `assets/IMG_2044.mp4` — ensaios reais.
- `assets/IMG_6810.qt` — captura real do perfil Instagram, source in/out de referência 3,7–6,3s.
- `assets/logo_franciele_fotografias_original.png`, `assets/capa_carne_aberta_original.png`, `assets/mockup_carne_3d_aprovado.png`.
- `assets/Fotografia impressa.jpeg` — verificar origem, qualidade e direitos antes de usar.

### 2. Manter INTACTA a primeira metade aprovada (0–18,5s)
A V3.2 já está APROVADA VISUALMENTE:
- Abertura com ensaios reais, criando desejo/suspense, sem carnê.
- Modelo de roupa branca com correção localizada de luminosidade; preservar cor de pele e fisionomia.
- Estúdio 3D editorial e rolagem REAL do Instagram, dentro de smartphone.
- Motion typography editorial pontual.
- Carnê 3D entra na fala "e vai pagando aos poucos" e abre para **BOLETOS** folheando. NÃO colocar fotografias dentro.
- A volta para ensaio real é preservada.

NÃO reconstruir nem redesenhar essas cenas; apenas corrigir erros realmente verificados, pequenos pontos de áudio/efeitos e consistência do corte ao continuar a timeline. É proibido alterar o gancho ou redesenhar a capa/logo. Se o código da V3.2 não estiver disponível, tratar recuperação da composição aprovada como pré-requisito e documentar fielmente o que não pôde ser reutilizado.

### 3. Criar conclusão da narrativa (aprox. 18,5–30,2s)
**ALINHAR AO ÁUDIO CORRIGIDO REAL; TEMPOS ABAIXO SÃO APROXIMADOS.**
- **18,5–22,5s:** "Assim, você consegue se planejar sem precisar pagar tudo de uma vez." Mostrar o RESULTADO do planejamento com filmagens reais de ensaio: preparação, direção da cliente, câmera em ação ou retratos reais de boa qualidade. O fim do papel/boletos conduz ao ambiente fotográfico com um match cut por luz, textura ou movimento; não criar uma fotografia surgindo DENTRO DO BOLETO, porque isso faz o carnê parecer álbum. Priorizar fotografias/retratos autênticos, preservando rosto, pele e proporções; não fabricar novas clientes.
- **22,5–30,2s:** convite final, usando somente o trecho correto e completo do OGG corrigido: "Se você tem vontade de fazer um ensaio, me chame, eu te explico direitinho como funciona e a gente vê o que fica melhor pra você." Preferir material real do `IMG_2043.mp4`, especialmente source ~53,5–58s mostrando pessoas conferindo fotografias na câmera, se estiver autorizado e tecnicamente adequado. Complementar com planos reais elegantes de outros arquivos, sem esticar takes de baixa resolução nem fazer repetição mecânica. Seleção por gesto/expressão e naturalidade de montagem. Na conclusão, usar **logo oficial** com entrada discreta se não prejudicar a cena; não acrescentar número de telefone, preços, promessa ou botão de WhatsApp fictício.
- **Cauda final:** aproximadamente 0,4–0,8s de resolução musical após a última palavra, sem tela preta longa. Duração master estimada ~30,6–31,0s; verificar o WAV corrigido e se a última palavra está íntegra.

**Lógica emocional:** desejo de fotografar → possibilidade de planejar → escolha do ensaio → carnê com boletos → experiência no estúdio → convite humano. Não voltar a explicar condições financeiras longamente no final.

### 4. Direção de fotografia e transições (segunda metade)
- Priorizar `IMG_2043` para encerramento com clientes vendo fotos na tela da câmera; inspecionar precisamente source in/out e não usar thumbnails como substituto.
- Escolher 2–4 enquadramentos que representem a experiência real do ensaio (não desfile de cenas desconectadas), com boa continuidade de cor, orientação de movimento e ritmo.
- Os vídeos 360×640 requerem upscale conservador, sem AI face-enhancement; se perder nitidez, preferir planos curtos, baixa ampliação ou o arquivo 720×1280.
- Não mostrar vinheta/logomarca antiga "Estúdio Digital" do fim de IMG_2044.
- Se usar retrato estático final de alta resolução, verificar que o arquivo é **fotografia real autorizada**; não assumir que `Fotografia impressa.jpeg` esteja aprovada apenas por estar no HD.
- Estúdio 3D só se reaparecer como ponte funcional; não alongar o final com animação decorativa.
- A comunicação é premium, acolhedora e natural. Sem overuse de fades brancos, flash digital, whooshes ou escalas abruptas.

### 5. MIXAGEM FINAL — prioridade pendente
A V3.2 teve melhora visual aprovada, mas a mixagem quase não mudou em relação à V3.1. **Nesta etapa é obrigatório criar uma nova paisagem sonora no master completo**:
1. Ouvir todas as faixas de voz, trilha e efeitos separadamente; identificar eventuais efeitos já existentes antes de somar outros.
2. **Folhear boletos ~12–15,5s:** criar/corrigir microefeitos para o ataque, arco e assentamento de cada folha, com variações de textura de papel, swish curto, fricção e pequeno contato físico. Cada som deve coincidir com a virada REAL, sem layers genéricos descolados da imagem.
3. Construir transição sonora entre a última folha e o retorno ao ensaio, com um detalhe de câmera ou ambiente real somente quando houver motivação visual.
4. No trecho de ensaio ~18,5–22,5s, trabalhar ambiência real suave e, quando necessário, um disparo de câmera natural; evitar muitos disparos sobre a voz.
5. No convite ~22,5–30,2s, reduzir a trilha sob as frases e produzir resolução musical natural no fim. A voz deve permanecer inteligível, sem respirações comprimidas ou sensação robótica.
6. Usar trilha e SFX originais ou licenciados para publicação comercial; documentar fontes/licenças. Não colocar música conhecida não licenciada.
7. Visar aproximadamente -14 a -16 LUFS integrados e true peak <= -1 dBTP no master completo, após escuta em fones e alto-falante de celular. Métricas não substituem julgamento auditivo.
8. Comparar trecho 12–15,5s V3.2 × master final; a melhoria sonora deve ser PERCEPTÍVEL e sincronizada, não apenas nível geral de volume alterado. Arquivo de evidência e times dos SFX no relatório QA.

### 6. Tratamento da locução
Preservar a voz real. O script de correção da V3 remove tentativas repetidas na fala final do áudio original e entrega ~30,2s. Conferir por escuta t~22,9s no novo WAV, onde a frase final é emendada; corrigir milissegundos se o "Se você..." tiver fonema cortado, clique ou respiração artificial. Não alterar conteúdo da locução, não gerar TTS/voice clone, não regravar artificialmente nem retemporizar palavras apenas para caber nas cenas.
Alinhar o tempo das imagens com o áudio DEFINITIVO, sem reutilizar tempos da V2 original de 35,65s.

### 7. QA antes da entrega
- [ ] Cenas 0–18,5s da V3.2 preservadas visualmente.
- [ ] Carnê começa somente na fala "vai pagando"; dentro há **BOLETOS**, não fotografias, e capa frontal é metade DIREITA da arte aberta.
- [ ] Modelo de branco permanece clareada naturalmente, sem artefatos.
- [ ] Rolagem Instagram é captura real, sem informações privadas exibidas.
- [ ] Conclusão 18,5–30,2s utiliza filmagens reais de ensaio, sem rostos sintéticos nem marca antiga.
- [ ] Narração corrigida única, sem falso começo e sem corte de sílaba.
- [ ] Sound design de folhear foi efetivamente modificado e sincronizado, confirmado por escuta e comparação.
- [ ] Música/SFX têm licença de uso; voz inteligível em celular e fones.
- [ ] Sem frames pretos, máscaras defeituosas, cortes abruptos, barras/UI sobre pessoas ou jitter no final.
- [ ] 1080x1920 30fps H.264/yuv420p AAC 48k faststart; ffprobe registra duração, FPS, codecs, trilhas.
- [ ] Screenshots ao menos em t=0,4,8,12,13.5,15,18,19.5,21.5,23.5,26.5,29.5,final.
- [ ] Não utilizar GitHub Actions nem publicar anúncio.

### 8. ENTREGÁVEIS — AGORA AUTORIZADOS PARA PRODUÇÃO
1. **Master completo** `output/franciele_reserva_programada_V3_3_FINAL_REVISAO.mp4` com aproximadamente 30,6–31s, e com áudio trabalhado.
2. `output/qa_v3_3/relatorio.md` incluindo timeline real da locução e origem de cada take, mudanças 18,5s em diante, sound design de boletos, licenças e limitações.
3. `output/qa_v3_3/frames/` com frames críticos, e checagem de transição em 18,5s.
4. Código-fonte e composição reprodutíveis no workspace da produção. Não fazer push/deploy para publicar sem aprovação.

**Entregar MP4 completo para revisão da usuária. A autorização para PRODUZIR o master já foi dada; a aprovação final para VEICULAR o anúncio ainda não.**

### 9. INSTRUÇÃO IMEDIATA AO CLAUDE CODE
Abra o workspace que gerou a V3.2, localize sua timeline/código-fonte; preserve seus primeiros 18,5 segundos VISUAIS, construa a conclusão com filmagem real na voz corrigida até ~30,2s, faça a mixagem sonora integrada do filme inteiro com folhear de boletos perceptível, renderize MP4 completo e QA, apresente para revisão antes de qualquer veiculação.