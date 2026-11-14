# AC MOTION STUDIO — INSTRUÇÃO FINAL DE REVISÃO V3.2
**Franciele Fotografias | Reserva Programada | prévia de ~18,5 segundos**

**STATUS:** direção criativa V3.1 aprovada com três correções específicas pendentes. **Esta instrução V3.2 complementa e, somente nestes três pontos, prevalece sobre o prompt V3 e as instruções V3.1.** Não refazer cenas aprovadas nem gerar o vídeo completo.

## 0. Missão e materiais
Você é o Claude Code responsável pelo projeto audiovisual Franciele Fotografias — Reserva Programada. Abra o repositório `acmarketingcomercial-coder/HD`, branch `main`. Leia:
- `PROMPT_CLAUDE_CODE.md` (direção-base V3);
- `docs/DIRECAO_APROVADA_V3.md`, `docs/PLANO_DECUPAGEM_V3.md`, `docs/AUDIO_EDICAO_V3.md`, `docs/QA_CHECKLIST_V3.md`;
- este documento `docs/REVISAO_FINAL_V3_2.md`.

**Fonte de trabalho:** use o projeto/código/timeline que produziu `previa_franciele_reserva_programada_V3_1_0-18s.mp4` no ambiente atual do Claude Code. Essa prévia foi enviada ao ChatGPT e examinada, mas **não assuma que o arquivo MP4 ou o código-fonte estejam versionados no repositório HD**. Se estiverem no workspace, reutilize; se não estiverem, identifique a ausência explicitamente e não finja ter feito a comparação. Os originais em `assets/` permanecem inalterados.

**Objetivo:** refinar apenas três aspectos pendentes e entregar uma V3.2 de cerca de 18,5 segundos para aprovação final da prévia: (1) curvatura e geometria das páginas de boleto, (2) sound design novo e efetivamente audível/sincronizado no folhear, (3) leve clareamento LOCALIZADO da modelo de roupa branca. A abertura, o estúdio 3D, a rolagem do Instagram, o texto motion aprovado, a capa 3D e a sequência narrativa NÃO devem sofrer mudanças estruturais.

## 1. Preservar o que já foi aprovado
- 0–3,5s: enquadramentos e ritmo com ensaios reais; não trocar o gancho.
- ~5–9s: ambiente de estúdio 3D já melhorado; não reconstruir.
- ~9–12s: smartphone com gravação real de rolagem do Instagram, tela em boa escala; não substituir gravação real ou refazer layout aprovado.
- A aparição do carnê continua sincronizada com a fala “e vai pagando aos poucos, ao longo dos meses”, NÃO no início. Capa frontal é metade DIREITA da arte desdobrada; a logo oficial deve permanecer intacta.
- Interior do carnê contém APENAS BOLETOS de pagamento ilustrativos, sem dados bancários funcionais, sem valores, números de parcelas ou fotografias. Carnê NÃO é álbum.
- Retorno ao ensaio real ~15,5–18,5s: preservar direção e montagem.
- Motion typography pontual e editorial permanece aprovada, sem transformar em legendagem integral.
- Voz REAL original tratada/corrigida, sem clonagem IA, mantendo a montagem editorial de ~30,2s; prévia utiliza somente o trecho inicial correspondente. Não regravar nem deslocar palavras.
- Não usar GitHub Actions. Não produzir vídeo completo antes de aprovação da V3.2.

Os tempos são referências aproximadas da prévia V3.1; inspecionar a timeline real para definir frames exatos.

## 2. Correção PRIORITÁRIA — páginas de boletos (~12,5–15,5s)
O problema observado foi a aparência de **triângulos rígidos, quase placas**, nas páginas que viram, e a pequena presença física do carnê em parte da cena.

Solução esperada:
1. Manter capa e objeto já aprovados, oferecendo um instante legível da capa inteira antes da abertura; não dar zoom que corte “Reserva Programada”.
2. Refazer SOMENTE o mecanismo de folhear: cada folha deve ter borda/lombada ancoradas, curvatura contínua no espaço (bend/mesh ou simulação paramétrica de folha), movimento encadeado, leve defasagem entre folhas, espessura fina e suave queda por gravidade. A sombra de cada folha acompanha seu movimento e oclusão sobre as outras folhas.
3. Reduzir amplitude extrema que faz as folhas parecerem planos triangulares gigantes; construir uma sequência de viradas fisicamente verossímil e visualmente legível. Não aumentar exageradamente a quantidade de folhas nem sugerir quantidade contratual fixa de parcelas.
4. Ajustar enquadramento/escala do objeto e dos boletos para preencher melhor a área útil do vídeo sem perder margens para a interface do Instagram; não recortar a capa nem criar área vazia desnecessária.
5. A textura dos boletos deve comunicar documento de pagamento simples, sem dados operacionais nem códigos válidos.
6. Cada virada deve ter momentos claros de início, arco e assentamento; evitar movimento contínuo uniforme e repetitivo.

## 3. Correção sonora — efeitos específicos de folha (principal)
A V3.1 manteve essencialmente a mesma mixagem da V3, apesar do pedido anterior de refinamento sonoro. **É obrigatório acrescentar ou substituir camadas de SFX que produzam diferença perceptível e contribuam para a animação, não apenas fazer ganho global no áudio.**

- Sincronize manualmente os efeitos com o onset/ápice/contato de cada virada, com base nos frames reais da timeline.
- Use pelo menos algumas variações orgânicas de: atrito inicial do papel, passagem de ar curta, flexão/curvatura, toque seco de folha assentando, movimento de encadernação/canhoto. Sem efeitos iguais repetidos em loop, beeps, caixa registradora ou impacto de trailer.
- Crie uma microprogressão (primeira folha mais delicada; viradas seguintes com variação de timbre e intervalo; última folha com pequena resolução sonora). Evite adicionar efeitos em todos os momentos apenas para “ter mais som”.
- Preserve a voz como primeiro plano inteligível. Música abaixo da voz e sem mascarar consoantes. Use sidechain/automação de volume discreta se útil.
- Teste em alto-falante de celular e fones. Medir loudness/true peak do master; alvo aproximado -14 a -16 LUFS integrado e true peak até -1 dBTP, sem forçar valores quando prejudicarem a voz.
- Documente quais SFX foram criados/licenciados, em que timecodes entraram e como foram sincronizados. Não usar música/efeitos sem direito comercial.

## 4. Correção localizada — modelo de roupa branca (~3,5–5s)
Trecho: modelo de cabelo curto em regata/roupa branca, acessórios dourados, fundo cinza-claro. Ela segue um pouco subexposta em rosto/pescoço/braço em comparação com o fundo.

- Preserve o take, pose e fisionomia; NÃO trocar a modelo automaticamente.
- Aplicar máscara suave, com tracking ou segmentação de sujeito, e correção moderada somente na personagem; abrir médios/sombras e exposição o suficiente para harmonizar com o fundo, sem “lavar” a pele nem estourar a roupa branca.
- Evitar halo nas bordas, vazamento da máscara para o fundo, flicker entre frames, alteração de cor/pele ou redução de nitidez.
- Conferir frames no começo/meio/fim do take, especialmente rosto e braço; revisar em movimento, não apenas em still.
- Se a fonte realmente não suportar ajuste natural (ruído/compressão ou artefatos), documentar e propor um take real já disponível para aprovação antes de substituir — não introduzir novo rosto gerado.

## 5. O que NÃO fazer
- Não mexer novamente na abertura, cenário 3D ou Instagram, salvo correção de bug técnico.
- Não introduzir novos letreiros, ofertas, CTA, preços, parcelas ou informação comercial.
- Não colocar fotografias dentro do carnê, nem transformar páginas de boleto em fotos.
- Não substituir locução por IA, alterar seu conteúdo ou acelerar fala.
- Não fabricar dados financeiros em boletos; não adicionar barcodes pagáveis.
- Não fazer upscale com reconstrução artificial de fisionomia.
- Não reenquadrar tudo ou recriar todo o vídeo por conta de três ajustes localizados.
- Não renderizar vídeo completo, não fazer deploy, não usar GitHub Actions.

## 6. QA e entregáveis
Entregar:
- **`output/previa_franciele_reserva_programada_V3_2_0-18s.mp4`**, vertical 1080x1920, 30fps, H.264 yuv420p + AAC 48k, com áudio, mantendo a duração efetiva natural da montagem (~18,5s).
- Screenshots comparativos V3.1 × V3.2 (ou de frames de entrada/saída de correções quando a V3.1 não estiver acessível): modelo em 3,7/4,5s e boletos em 12,5/13,5/14,5/15s, mais checks rápidos da abertura, estúdio e Instagram.
- `output/qa_v3_2/relatorio.md`: breve descrição objetiva do que foi mudado, parâmetros efetivos de correção de cor, notas de geometria/escala das páginas, lista de SFX/tempos, métricas básicas de áudio/vídeo e limitações, incluindo autorizações pendentes de veiculação.
- Pequeno A/B somente do trecho 12–15,5s, quando tecnicamente viável, para verificar que a nova sonorização realmente difere da anterior e acompanha as viradas.

Critérios de aceite:
[ ] Modelo mais iluminada com pele natural, sem flicker/halo;
[ ] Boletos reconhecíveis, folhas flexíveis com curvatura e assentamento críveis;
[ ] Carnê corretamente orientado, capa íntegra, sem fotos internas;
[ ] Sons das viradas novos, motivados e audíveis sem mascarar voz;
[ ] Abertura, 3D e Instagram preservados;
[ ] Vídeo com áudio, dimensão/fps corretos e sem falhas de render;
[ ] Usuário recebeu V3.2 para APROVAÇÃO, sem render completo.

**INSTRUÇÃO IMEDIATA:** abra o workspace do projeto V3.1, mantenha toda a timeline já aprovada e aplique apenas esses três ajustes. Renderize e faça QA da V3.2; apresente a prévia para avaliação antes de qualquer etapa final.