# AC MOTION STUDIO — REVISÃO DO MASTER V3.4
## FRANCIELE FOTOGRAFIAS | RESERVA PROGRAMADA
**Decisão aprovada em 14/11/2026. Documento de produção autossuficiente para Claude Code.**

### 0. CONTEXTO, PRIORIDADE E CRITÉRIO CRIATIVO
O master audiovisual V3.3 de aproximadamente 30,8 segundos foi analisado. A usuária considerou que a abertura ficou com movimentos rápidos/exagerados e que as sugestões de posição das imagens foram interpretadas rigidamente, prejudicando o ritmo natural do vídeo. Também percebeu pequenos travamentos ou sons estranhos no áudio. **Foi aprovada uma revisão V3.4 focada SOMENTE em cadência audiovisual, naturalidade de montagem e investigação/reparo pontual de áudio.**

Este documento V3.4 **prevalece sobre os prompts V3/V3.1/V3.2/V3.3 somente quanto ao estágio de produção e aos ajustes aqui definidos**. O roteiro, a identidade, os assets oficiais, o conceito da Reserva Programada e a lógica do carnê continuam valendo. **A produção de um master revisado para análise está autorizada; a publicação comercial NÃO está autorizada automaticamente.**

Direção de tom: anúncio sofisticado, acolhedor, humano e cinematográfico; a locução calma da Franciele deve guiar o ritmo. Preferir movimento significativo a movimento constante. O objetivo não é aumentar a retenção mediante cortes frenéticos, e sim abrir com um motivo visual interessante e deixar o olhar apreciar o ensaio.

### 1. REPOSITÓRIO E FONTE DE VERDADE
GitHub: \`https://github.com/acmarketingcomercial-coder/HD\`, branch \`main\`.
Leia este documento, \`PROMPT_CLAUDE_CODE.md\`, \`MANIFEST.json\`, \`docs/DIRECAO_APROVADA_V3.md\`, \`docs/AUDIO_EDICAO_V3.md\` e \`docs/FINALIZACAO_V3_3.md\`.

**IMPORTANTÍSSIMO:** o GitHub contém os arquivos originais em \`assets/\` e os documentos, mas, no último inventário, NÃO continha o código-fonte de Remotion, a timeline ou o MP4 completo V3.3. O Claude Code deve localizar no próprio workspace o código/timeline utilizado na geração de \`franciele_reserva_programada_V3_3_FINAL_REVISAO.mp4\` e os stems de áudio. Não alegar que o master ou sua timeline estão no GitHub se não estão. Caso não estejam no workspace, registrar isso e localizar/recuperar de onde o vídeo foi gerado; não reconstruir toda a campanha a partir de assets brutos como se fosse uma simples revisão.

Entradas originais preservadas:
- \`assets/narracao_franciele_reserva_programada_original.ogg\` — voz verdadeira (original com repetições finais), ~35,6465 s.
- \`scripts/preparar_locucao_v3.sh\` — gera versão editorial corrigida, ~30,20 s. **NÃO reutilizar o WAV master antigo de ~35,65s como voz final.**
- \`assets/logo_franciele_fotografias_original.png\`, \`assets/capa_carne_aberta_original.png\`, \`assets/mockup_carne_3d_aprovado.png\`.
- \`assets/IMG_2040.mp4\` a \`assets/IMG_2044.mp4\` — vídeos reais.
- \`assets/IMG_6810.qt\` — rolagem real do feed Instagram. Não substituir por interface inventada.
- \`assets/Fotografia impressa.jpeg\` — só usar após verificar procedência, qualidade e autorização.

A premissa comercial é escolher e organizar o ensaio para realização após quitação, conforme condições; não prometer data fixa imediata, desconto, assinatura ou número fixo de parcelas.

### 2. DIAGNÓSTICO V3.3 — O QUE ALTERAR
**Constatação editorial:** na abertura existem sucessões de enquadramentos e deslocamentos de câmera que competem com a fala. Os cortes e animações foram excessivamente associados aos blocos sugeridos na direção anterior, em vez de seguir o ritmo orgânico da voz.

**NÃO tratar os timecodes antigos e a lista de takes como obrigatórios**: eles eram sugestões, não uma decupagem a ser cumprida literalmente. O editor tem liberdade técnica para recombinar os takes reais, mantendo a narrativa e a fisionomia das pessoas.

Faixas de revisão:
- **0–2,7s: câmera e primeira cliente.** Manter o gancho real, mas reduzir a velocidade/intensidade do dolly/zoom/pan e permitir reconhecer o retrato. Se necessário, segurar um enquadramento 0,5–1s a mais em vez de adicionar novo zoom.
- **2,7–5,0s: retratos em blazer e roupa branca.** Preferir 1–2 takes visualmente fortes e uma passagem orgânica entre eles. Os cortes podem ser reordenados, um deles pode ser removido, e a divisão por segundos pode ser alterada; evitar empilhar transições e efeitos sobre cada corte.
- **5,0–9,0s: transição para o estúdio 3D e tipografia.** Este é o trecho mais sujeito a excesso de movimento. Manter ambiente/editorial já aprovado, mas privilegiar UM gesto de câmera mais contínuo (por exemplo dolly com revelação de iluminação) em vez de movimentos simultâneos e entradas concorrentes de vários equipamentos/textos. A frase “conseguir se organizar com mais calma” deve ser visualmente calma. Tipografia entra/saí com elegância, sem ocupar o centro da atenção por longo tempo.
- **9,0–15,5s: Instagram e carnê.** A rolagem real e o momento do carnê estão conceitualmente corretos e devem ser preservados. Ajustar somente o que for indispensável para continuidade de montagem. O carnê aparece na expressão “vai pagando aos poucos”; a capa oficial representa um objeto DOBRADO (metade DIREITA da arte aberta é a frente), e o interior tem somente **BOLETOS**, nunca fotografias.
- **15,5–22,5s: passagem para ensaio real.** Preservar a lógica já existente e evitar animações/cortes acrescentados apenas para preencher tempo.
- **22,5–30,8s: convite humano.** A montagem das clientes observando fotografias funciona; preservar seu caráter natural, sem cortes que distraiam da fala e sem vinheta antiga Estúdio Digital.

Direção de edição: duração por plano é orientativa, não regra fixa; quando a voz introduzir uma ideia, evitar trocar o plano antes de o espectador reconhecer a imagem. Cortes por gesto/olhar/ação e correspondência de luz/posição, não por obrigação de cumprir lista de cenas. Evitar tempos mortos excessivos. O ritmo deve poder respirar sem ficar lento.

### 3. ÁUDIO — AUDITORIA ANTES DE ALTERAR
A inspeção anterior do master V3.3 confirmou 30 fps sem quadros faltantes e não identificou lacunas de PTS nos pacotes de áudio. Logo, **não existe evidência de travamento da exportação**; a sensação de “travamento” pode vir de corte sonoro, transientes, mudança de timbre, SFX abrupto ou edição de voz.

**Ponto de revisão PRIORITÁRIO:** aproximadamente **22,92–23,10s** do master, na entrada da frase final “Se você...”. Foram observados transientes muito próximos entre ~22,92 e 23,00s; existe aspereza semelhante no OGG original próximo de 28,34–28,40s, de onde a retomada final foi extraída. Isso NÃO prova que o defeito seja apenas da emenda: verifique ouvindo e com comparação de formas de onda/espectrograma.

Procedimento:
1. Exportar/identificar stems separados (locução original, locução corrigida, música e SFX, se existentes) e comparar com mix V3.3. **Não aplicar filtro indiscriminado no master inteiro.**
2. Reproduzir com fones trechos 0–3, 5–9, 11,5–15,5, 18,5–20,5, 22,2–24,2 e 24–30,8s. Anotar os pontos dos ruídos/travamentos efetivamente percebidos e suas causas mais prováveis. Não inventar novas falhas se nada for ouvido.
3. Na emenda ~22,9–23,1s, comparar a faixa corrigida com o OGG original. Confirmar integridade da consoante inicial “Se”. Fazer microfade/de-click/reparo espectral **apenas se necessário**, sem suprimir o /s/ ou deixar a voz robótica. Ajustar crossfade de ordem de ~5–30ms com audição A/B se houver necessidade, sem remover sílabas, repetir o falso começo ou introduzir voz IA.
4. Se o ruído for de origem gravada e não puder ser reparado sem afetar o fonema, registrar limitação; **não gerar voice clone, TTS ou substituição artificial**. Regravação humana apenas caso realmente indispensável, e somente da frase afetada.
5. Nas mudanças entre cenas, eliminar SFX abruptos/descolados do movimento (particularmente 5–9s e 19–27s). Usar fades curtos e variação natural de ambiência, sem achatar toda a mix.
6. **Papel/boletos 12–15,5s:** preservar os sons adequados e equilibrar os que estiverem altos, fracos ou abruptos; não adicionar mais ruído apenas para a cena parecer mais “motion”. A sequência deve soar física e coerente com as viradas. Comparar com a V3.3.
7. Não usar trilha sem licença comercial e não mascarar a voz. Observar loudness geral em torno de -14 a -16 LUFS e true peak <= -1 dBTP como referências, mas priorizar inteligibilidade e dinâmica natural. Escuta obrigatória em fones e alto-falante de celular.
8. Depois da edição, comparar **A/B** faixas de áudio V3.3 × V3.4, especialmente o convite final. Documentar cortes/reparos e o que mudou de fato.

O transcrito de V3.3 já confirma que a repetição final foi removida. Não reabrir a locução inteira se não houver defeito adicional.

### 4. MOTION E TEXTO — LIMITES
A V3 permite Motion Typography editorial pontual. Não adicionar novos textos ou frases para compensar ritmo. Preservar as palavras aprovadas sem sobrecarregar o estúdio 3D.
Não usar zoom extremo, movimento em cada plano, cortes rápidos sem função ou transições de template.
Manter cor/iluminação da modelo de branco já ajustada, sem alterar rosto ou pele; não recorrer a IA para inventar detalhes.
Sem fotos dentro do carnê; representar boletos de pagamento genéricos e não pagáveis. Sem dados bancários inventados, preço, prazo fixo ou parcela numérica obrigatória.
Não mudar narração original nem acelerá-la. O áudio corrigido guia todos os cuts.

### 5. ORDEM DE PRODUÇÃO
1. Localizar timeline/código e master V3.3 real no workspace. Confirmar origem e integridade; criar backup local antes de modificar.
2. Produzir uma **proposta de decupagem revisada 0–9s** com as tomadas que realmente melhor funcionem; mostrar internamente screenshots e tempo de cada take, sem perder o gancho.
3. Reduzir/alinhar movimentos e estabilizar a abertura; ajustar a transição 5–9s a um fluxo cinematográfico mais contínuo.
4. Auditar e reparar somente pontos sonoros verificáveis, com especial atenção à emenda ~22,9s e às transições. Preservar original OGG.
5. Fazer mix A/B, conferir o filme completo. Não alterar o que já está funcionando em Instagram, carnê, ensaio ou encerramento.
6. Renderizar **master V3.4 completo** para revisão da usuária, não publicar automaticamente. Não usar GitHub Actions.

### 6. ENTREGÁVEIS E QA
- \`output/franciele_reserva_programada_V3_4_RITMO_AUDIO.mp4\`: 1080×1920, 9:16, 30 fps, H.264 yuv420p, AAC 48k, faststart, cerca de 30,8s (adequar à duração real da voz, nunca cortar palavra).
- \`output/qa_v3_4/relatorio.md\`: timecodes reais dos planos 0–9s antes/depois; explicação das reduções de movimento; mapa dos trechos de áudio analisados, intervenções realizadas e causa provável de cada problema (quando constatado); A/B de áudio e resultados técnicos.
- \`output/qa_v3_4/frames/\`: frames da abertura, 3D e transições críticas, mais comparação visual com V3.3.
- Código-fonte/timeline da nova edição preservados para reprodutibilidade no workspace, sem sobrescrever os assets base.
- Se houver ruído irremovível sem distorcer fala, informar precisamente e entregar o melhor resultado técnico possível sem alegar limpeza perfeita.

**Critérios de aceite:**
[ ] A abertura tem menos movimento gratuito e permite reconhecer cada modelo.
[ ] O estúdio 3D parece uma evolução natural e calma da fala.
[ ] Instagram/carnê/boletos e parte final permanecem coerentes.
[ ] A emenda da locução está natural e inteligível, sem novo falso começo.
[ ] Não há SFX destoantes, pausas bruscas artificiais ou estalos desnecessários após reparo.
[ ] Nenhuma alteração de fisionomia, capa oficial ou identidade.
[ ] Qualidade técnica correta e MP4 completo revisável.
[ ] Não veicular automaticamente; direitos de imagem e licença musical devem estar regularizados antes da publicação.

**AÇÃO IMEDIATA NO CLAUDE CODE:** Leia este documento, abra o workspace real da V3.3, execute revisão de montagem nos primeiros 9s e de áudio pontualmente no master inteiro, renderize V3.4 completa e entregue MP4 + QA para aprovação.