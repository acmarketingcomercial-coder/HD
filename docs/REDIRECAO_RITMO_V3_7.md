# AC MOTION STUDIO — REDIREÇÃO DE RITMO V3.7
## Franciele Fotografias | Reserva Programada | 14/11/2026
**Status:** direção V3.7 aprovada para TESTE de montagem focalizada, sem publicação e sem render do master completo por enquanto.

## 0. Decisão editorial — A PROPORÇÃO DE TEMPO ESTAVA INVERTIDA
Após análise visual do master **V3.6_AUDIO_ESTEREO.mp4** (30,8s, 1080x1920 a 30fps), as cenas mostram esta distribuição aproximada:
- ~0–5s: abertura real com câmera, cliente e modelo de branco; narrativa funciona, preservar.
- ~5,03–9,0s: quase 4s de estúdio 3D, com equipamentos e pouco conteúdo novo em parte da passagem.
- ~9,0–10,3s: título "Reserva Programada" em cena relativamente separada.
- ~10,3–11,8s: smartphone/rolagem Instagram real, somente ~1,5s de destaque.
- ~12,0–12,8s: capa do carnê rapidamente vista.
- ~13–15,6s: viradas dos BOLETOS.
- ~15,6–30,8s: retorno à fotografia real e convite final.

**Conclusão:** não é preciso desacelerar o filme inteiro; devemos dar menos tempo a uma passagem decorativa pelo estúdio e mais tempo às imagens que fazem a pessoa entender a escolha do ensaio e o funcionamento do carnê. As sugestões de timecode antigas eram exemplos, não ordens rígidas. A voz humana, os gestos e a compreensão do objeto guiam os cortes.

## 1. Escopo e prioridade
Redesenhar o trecho de aproximadamente **5,03–15,7s**. Preservar a abertura 0–5,03s e a parte real do ensaio/convite a partir de ~15,7s, salvo 1–3 frames de transição necessários.

**Não redesenhar** o look/color grading V3.5 aprovado, nem reprocessar/degradar rosto, nem trocar cliente, nem alterar geometria real da capa, nem inserir fotografias dentro do carnê. O carnê contém BOLETOS ilustrativos (não operacionais) folheando; não é álbum.

A **V3.6 é a base de áudio vigente**, diferente da trilha da V3.5 (não reutilizar AAC antigo por engano). A fonte do master V3.6 foi enviada pela usuária como \`franciele_reserva_programada_V3_6_AUDIO_ESTEREO.mp4\`; se não estiver no workspace do Claude, importar a versão fornecida. O GitHub HD na auditoria ainda tinha apenas assets/docs até a V3.5, não o código-fonte local da V3.6. Localizar também o projeto Remotion/React original no workspace ou no ZIP de projeto e criar backup antes de alterar.

O usuário expressamente autorizou mudar **a duração dos elementos, a ordem e as posições na cena**, desde que o arco narrativo siga a locução, sem trocar a ordem conceitual de **desejo → organização → escolha do ensaio → pagamento aos poucos → realização → convite**.

## 2. Reorganização recomendada (JANELAS FLEXÍVEIS, NÃO CORTES OBRIGATÓRIOS)
**0,00–5,03s — ENSAIOS REAIS (preservar):** câmera real e modelo de branco; montagem e color grade V3.6 aprovados. Nenhum carnê aqui.

**~5,03–7,35s — ESTÚDIO 3D CONCISO (~2,3s):** o ambiente editorial creme se revela em um único movimento curto e suave de câmera. Reduzir o passeio por softboxes, banqueta/tripé. Depois da revelação, criar microassentamento do enquadramento (hold ~0,3–0,5s sem ser congelamento). Evitar várias entradas de objetos que parecem apresentação de catálogo. A frase "Eu pensei numa forma de você conseguir se organizar com mais calma" deve ter ritmo visual sereno.

**~7,35–8,85s — PONTE POR TELA/LUZ (~1,5s):** usar lente/câmera já no estúdio como continuidade de forma; movimento suave para revelar ou reenquadrar um smartphone. Fazer um match cut limpo entre telas/quadros alinhados, NÃO inventar Instagram dentro do LCD da câmera real. O celular pode aparecer antes da palavra "escolhe": é antecipação narrativa natural. Não fazer morph plástico excessivo entre objetos.

**~8,85–11,75s — INSTAGRAM REAL (~2,9s de presença):** aparelho maior e quase estável no centro útil; tela com gravação REAL de \`assets/IMG_6810.qt\`, decupagem source in/out validada do conteúdo. Preferir início de rolagem perto de 9,30s e mantê-la suave por ~2,3–2,5s, com mais tempo para reconhecer fotos. O título **"Reserva Programada"** entra discretamente na MESMA composição do celular, entre ~9,0–10,0s, sem cartela própria nem disputar o centro do feed. Evitar números/curtidas inventadas e painel de conta/status bar. Em telas 30fps, evitar interpolação óptica de texto/UI que crie distorções; fazer retime do vídeo real com playbackRate/segurança de frames ou pequenos holds intencionais. Não fabricar posts. O gatilho "você escolhe o seu ensaio" deve encontrar o feed visível e em movimento, não um telefone minúsculo.

**~11,75–12,95s — CARNÊ COMO HERÓI (~1,2s):** primeira aparição apenas em/ao redor da frase **"e vai pagando aos poucos"** (confirmar onset na V3.6). Na transição do celular para o papel, revelar o carnê INTEIRO e fisicamente dobrado, com frente certa (metade DIREITA da arte desdobrada), capa legível, peso, sombra e escala maior que o objeto atual sem cortar bordas. Pequeno hold legível ~0,7–1,0s. Não fazer a capa aparecer por zoom macro que a torne ilegível.

**~12,95–15,70s — BOLETOS FOLHEANDO (~2,75s):** abrir a capa e mostrar somente **2 ou 3 viradas importantes e distintas** de folhas internas (pode haver mais páginas visíveis, sem sugerir número fixo de parcelas), com gestos mais lentos e legíveis, leve curvatura, desaceleração e assentamento. Uma virada não pode atravessar o quadro inteiro em uma fração de segundo. Papel com profundidade, canhotos, sombra de contato e dados genéricos não pagáveis. Não mostrar fotos, dados bancários reais, códigos válidos ou datas/valores de parcelas inventados. A ação pode continuar durante o início de "Quando terminar de pagar" para concluir o gesto, desde que o sentido seja natural. Esvaziar o efeito de "páginas disparando".

**~15,70–18,50s — RETORNO AO ENSAIO (preservar e casar borda):** o último movimento do papel faz transição motivada para a iluminação e a realidade do ensaio. Evitar fade branco longo; manter o trecho real e os cortes da V3.6.

**~18,5–30,8s — SEGUNDA METADE (preservar):** fotografias reais, convite final, logo, som e cor V3.6; sem reformular.

Nota de áudio: fala corrigida de ~30,2s e master 30,8s. Janelas são MARGENS DE PLANEJAMENTO; o diretor deve verificar onset real de "Com a Reserva Programada", "você escolhe", "e vai pagando" e "Quando terminar de pagar". Não deslocar, acelerar, interpolar nem regravar a voz. Redistribuir animação ao redor da voz e manter duração total idêntica, a menos que seja demonstrado que isso é impossível.

## 3. DIREÇÃO DE MOVIMENTO
Prioridade: **clareza e elegância**, não quantidade de keyframes.
- UM movimento principal de câmera por bloco, pequeno e curvo, com ease-in/ease-out suave e breve estabilização antes da ação seguinte.
- Reduzir movimentos simultâneos concorrentes (camera + objeto + tipografia + escala).
- Ações com início, ápice e assentamento. Não mostrar uma nova informação até a anterior poder ser compreendida em celular.
- Em vez de aumentar simplesmente a duração do clipe, remover gestos redundantes.
- Estúdio é ponte: não manter 4 segundos de cenário quase vazio.
- Instagram tem maior duração e atenção visual que o título isolado; **o título sobreposto não compete com feed**.
- Carnê tem um instante de reconhecimento da capa ANTES do folhear.
- Boletos folheiam com pausas orgânicas; evitar efeito livro de páginas rígidas disparando.

## 4. SOUND DESIGN: CUIDADOS COM V3.6
**Preservar a voz e a cama estéreo da V3.6 como referências, sem reprocessamento geral.** O AAC da V3.6 difere do V3.5; nunca usar por acidente o AAC antigo V3.5. Para casar novos tempos de rolagem e folhas, será necessário retemporizar SOMENTE SFX específicos de movimento (scroll, transição de cena, abertura de capa, cada virada, assentamento). Essa troca de efeitos implica novo mux/mix final; **não prometer cópia bit a bit do AAC completo V3.6** se o folhear foi deslocado. Conferir onset/peak/settle de cada efeito com seus frames, transições sem cliques nem efeitos artificiais, voz limpa. No master final não aumentar SFX apenas para "ter mais motion".

## 5. ENTREGÁVEL DE APROVAÇÃO PRIMEIRO
**Não renderizar master V3.7 completo ainda.** Faça uma prévia audiovisual do início até ~18s (com voz/som) para avaliar a nova passagem entre estúdio, Instagram e carnê no contexto. Saída:
- \`output/previa_franciele_reserva_programada_V3_7_0-18s.mp4\`: 1080x1920, 30 fps, H.264 yuv420p Rec.709, AAC 48k estéreo.
- \`output/qa_v3_7/AB_V36_V37_5-16s.mp4\`: A/B com mesmas janelas do master V3.6 e da prévia V3.7; rótulos SÓ em QA, não no anúncio.
- \`output/qa_v3_7/decupagem_tempo.md\`: onset da voz, source in/out da gravação Instagram, duração de cada movimento, decisões de substituição e origem dos SFX.
- \`output/qa_v3_7/frames/\` com amostras em ~5, 6.5, 7.5, 8.7, 9.5, 10.5, 11.5, 12.2, 12.9, 13.7, 14.5, 15.5, 16.5 e 17.8s.
- Relatório curto de QA, verificando ausência de artefatos em rostos/interface, não aparecimento prematuro do carnê, legibilidade dos boletos, sincronia voz-movimento-SFX e preservação de look e cenas reais.

**Gatilho para master final:** só após revisão e aprovação da prévia V3.7. A V3.6 e a V3.5 permanecem como backups; nunca sobrescrever as fontes antigas. Não usar GitHub Actions ou fazer publicação comercial; autorizações de imagem e trilha ainda precisam ser verificadas.

## 6. AÇÃO IMEDIATA AO CLAUDE CODE
Recuperar projeto e master V3.6 no workspace. Fazer backup. Ler a voz real, alinhar eventos por palavras. Redesenhar com liberdade criativa o tempo e posição dos objetos em **5–16s**, mantendo a montagem fora desse trecho. Entregar APENAS prévia V3.7 0–18s com A/B da V3.6 e QA para avaliação, **sem render do master completo nem deploy**.