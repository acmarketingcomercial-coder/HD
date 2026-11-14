# AC MOTION STUDIO — FINALIZAÇÃO V3.5 | RESTAURAÇÃO E COR
## Franciele Fotografias — Reserva Programada
**Data:** 14/11/2026
**Status:** PILOTO DE IMAGEM/COR APROVADO CRIATIVAMENTE, com ressalva técnica na cena C (IMG_2043). **Render do master completo V3.5 AUTORIZADO PARA REVISÃO**. **Veiculação NÃO autorizada automaticamente.**

## 0. Decisão e escopo
O piloto de Color Correction, restauração leve e Cinematic Color Grading “Cinematic Editorial Natural” foi revisado com comparativos lado a lado V3.4 × V3.5 e crops em 100%. A direção está aprovada para ser aplicada aos takes reais restantes do master, preservando integralmente a timeline, os 30,8 segundos, a locução editada, trilha, sound design, movimento de câmeras, 3D, Instagram, carnê, boletos, tipografias e logo da V3.4.

**Três decisões sobre os planos piloto:**
- **A — IMG_2040 (1,40–3,50s): APROVADO.** Fundo com menos blocos e pretos com detalhes; tratamento leve, sem nitidez ou contraste exagerados.
- **B — IMG_2042 (3,83–5,00s): APROVADO.** Melhor ganho perceptível de clareza/temperatura no fundo, com a luminância do rosto preservada; respeitar correção localizada da modelo de branco aplicada uma única vez.
- **C — IMG_2043 (26,47–29,30s): APROVADO COM CUIDADO.** Redução de manchas de compressão foi positiva, mas em partes do rosto há um leve amaciamento de detalhes e pequena perda de luminosidade. Ajustar força da etapa de suavização/deblocking/primárias por plano para não deixar pele excessivamente lisa nem escurecer o encerramento. Se em A/B o rosto original V3.4 estiver melhor em algum close, preservar aquele detalhe, reduzindo a força seletiva ou mantendo o original naquele plano. **Não tentar compensar com oversharpen, face restoration nem IA generativa.**

Os comparativos enviados mostram ganhos **modestos e adequados**. A baixa resolução de IMG_2042/2043 (360 × 640) e compressão de IMG_2043 (0,2 Mbit/s) limitam detalhamento real. Não prometer nitidez de uma fonte 4K ou traços/fios que não foram registrados.

## 1. Fonte de verdade e materiais de produção
GitHub HD: \`https://github.com/acmarketingcomercial-coder/HD\`, branch \`main\`.
Leia:
- este \`docs/FINALIZACAO_IMAGEM_V3_5.md\`;
- \`docs/TRATAMENTO_IMAGEM_COLOR_V3_5.md\`;
- \`PROMPT_CLAUDE_CODE.md\` e \`MANIFEST.json\`;
- documentação e relatório V3.4, em especial \`docs/REVISAO_RITMO_AUDIO_V3_4.md\`.

O GitHub contém as **fontes originais** em \`assets/\`, mas não contém necessariamente o projeto completo Remotion, renders locais ou o pipeline piloto V3.5. O usuário anexou:
- \`franciele_reserva_projeto_master_V3_4.zip\`, projeto Remotion da V3.4 que pode ser usado para recuperar workspace quando necessário;
- \`franciele_V3_5_piloto_stills_pipeline.zip\`, que inclui \`qa_v3_5/pipeline/\` (scripts de tratamento, LUT .cube, parâmetros por take, métricas e comparativos);
- arquivos de vídeo QA A/B V3.5, análise e relatório.

**Não presumir que esses ZIPs estejam automaticamente no workspace Claude Code ou no GitHub.** Localizar primeiro o workspace que produziu o piloto V3.5; se ele não existir, importar os ZIPs fornecidos pelo usuário e sincronizar os arquivos originais de \`assets/\`. Não criar novos dados, não sobrescrever os arquivos originais. Não enviar brutos de clientes nem frames identificáveis a repositório GitHub público sem autorização específica.

## 2. Aplicar o look no restante do filme
**Objetivo:** substituir apenas os intermediários dos TAKES REAIS que aparecem no master. Não aplicar uma LUT global sobre o MP4 final.

A V3.4 continha Lanczos, unsharp, temperatura e ajuste localizado na modelo de branco. A V3.5 substitui essa cadeia a partir dos ORIGINAIS, não empilha denoise, sharpen nem color grade sobre o master renderizado. Usar o pipeline piloto e LUT \`franciele_v35_cinematic_editorial_natural.cube\` como base; correções PRIMÁRIAS adaptadas a cada take em função da luz real, sem alterar looks fotográficos por força.

**Planos já testados e aprovados:** IMG_2040 abertura, IMG_2042 modelo de branco e IMG_2043 encerramento, com a ressalva da cena C.

**Planos ainda não tratados:**
- demais planos do IMG_2043 entre aproximadamente 16,0 e 26,4s (bastidores, clientes e câmera);
- IMG_2040 aproximadamente 18,7–20,7s;
- quaisquer takes REAIS efetivamente presentes na timeline V3.4 que ainda usem os intermediários antigos. Identificar por referências reais de arquivo/timeline; não presumir que todos os cinco clipes apareçam.

**Aplicar com controle por cena:**
1. Correção técnica (nível, WB, exposição) do original, denoise temporal leve apenas se necessário, deblock/deband seletivo, upscale Lanczos-4 anti-ringing, nitidez limitada e grade editorial. Preservar gradações e estabilidade em movimento.
2. Tons de pele com textura natural, brancos neutros, pretos com detalhe, realce quente contido. Evitar que o rosto perca textura ou fique escuro quando o pipeline reduzir saturação/exposição. Em especial na cena C, comparar close facial e fundo em mesma escala.
3. Rosto/expressão/corpo/fisionomia intocados, inclusive nos closes de modelo e fotógrafa. Não usar super-resolução IA que redesenhe traços, face enhancement ou embelezamento.
4. Não criar aumento artificial de microdetalhe. Para IMG_2043, priorizar compressão visual mais limpa sobre a fantasia de nitidez.
5. 3D, interface Instagram, capa oficial do carnê, boletos e logo **ficam exatamente como na V3.4**, sem LUT global, sem color grade em cima deles e sem alteração de composição.
6. Conferir cada clip intermediário novo com mesmo source in/out, frame count, orientação, zoom, crop e FPS da V3.4, e validar ausência de frame shift.
7. Qualquer tratamento que piore o plano original V3.4 deve ser reduzido ou descartado naquele plano; **fidelidade e naturalidade têm precedência sobre uniformidade mecânica do pipeline**.

## 3. Preservação integral do áudio
O áudio da V3.4 já contém reparos de transientes, folhear de papel e emenda da frase final. A V3.5 é uma etapa APENAS DE IMAGEM.

- NÃO executar novamente \`scripts/preparar_locucao_v3.sh\` para montar o áudio final.
- NÃO equalizar, comprimir, normalizar, remezclar, restaurar nem reencodar o AAC da V3.4.
- Exportar a imagem revisada com a mesma duração/quadro inicial; ao final, mapear a faixa AAC da **V3.4** com **stream copy** (\`-c:a copy\`) para o novo master. Preservar sync e a última palavra.
- Verificar integridade por comparação do AAC demuxado ou de pacotes/bytes equivalentes; se contêiner/PTS provocar diferença, explicar tecnicamente e verificar ausência de delay e coincidência do áudio decodificado; NÃO alegar bit a bit sem evidência.
- A escuta humana em fones e no alto-falante de celular continua obrigatória antes de publicar, sobretudo a entrada "Se você" em ~22,9s. A autorização para renderizar não autoriza publicação.

## 4. QA obrigatório
- [ ] Mesmos 924 quadros (30,8s a 30fps) da V3.4, salvo diferença de contêiner estritamente explicada; nenhuma palavra cortada.
- [ ] Abertura/3D/Instagram/carnê/boletos/motion logo permanecem no mesmo quadro e geometria.
- [ ] Comparação V3.4 × V3.5 usa o MESMO frame, crop, zoom, resolução e fps.
- [ ] Imagens melhoraram onde havia compressão sem pele plástica ou suavização excessiva de olhos/cabelo.
- [ ] Cena C conserva luminosidade natural; verificar que rosto e mãos não ficaram mais lisos/escuros que na V3.4 sem necessidade.
- [ ] Máscara da modelo de branco não cria halo, vazamento, flicker ou segunda correção de exposição.
- [ ] Ausência de ghosting, halos, serrilhado, banding novo e contornos de nitidez em movimento.
- [ ] Master Rec.709 SDR 1080x1920 H.264 yuv420p, 30fps, AAC 48k, faststart.
- [ ] Áudio AAC copiado da V3.4 sem reprocessamento; equivalência verificada e documentada.
- [ ] Projeto/timeline/código e intermediários com nomes/versionamento V3.5, preservando V3.4 de backup.
- [ ] Direitos comerciais de imagem e trilha ainda pendentes; NÃO publicar o vídeo.
- [ ] Sem GitHub Actions.

## 5. Entregáveis autorizados agora
1. **Master V3.5 COMPLETO PARA REVISÃO**: \`output/franciele_reserva_programada_V3_5_COLOR_QUALIDADE.mp4\`, de 30,8 segundos, com áudio V3.4 preservado.
2. \`output/qa_v3_5_full/relatorio.md\`: mapa dos takes tratados, parâmetros reais de cada um, comparativos de rostos/cabelo/pele, resultado do AAC stream copy, métricas e limitações.
3. \`output/qa_v3_5_full/comparativo_V34_V35.mp4\` ou A/B de abertura + encerramento, com rótulos somente no arquivo de QA.
4. Quadros de QA em movimento, incluindo 0–5s, 16–26s e 26–30,8s. Incluir checagem de cenas institucionais imutáveis.
5. Projeto Remotion/source/pipeline reprodutível para preservação e export futuro. Recomenda-se exportar ZIP de projeto, pois o workspace pode ser temporário.

## 6. Instrução imediata ao Claude Code
Localize o workspace V3.5 piloto e a timeline V3.4; **não refaça cenas e não reconstrua o áudio**. Aplique tratamento seletivo e look editorial aos demais takes reais, reduzindo a suavização/perda de luminosidade quando ocorrer em faces no IMG_2043. Renderize o master completo em Rec.709, copie o AAC da V3.4 intacto, faça A/B e QA, e apresente o MP4 para revisão. **Não publique automaticamente.**
