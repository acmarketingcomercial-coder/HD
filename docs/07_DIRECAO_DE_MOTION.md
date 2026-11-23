# DIREÇÃO DE MOTION E PIPELINE

## Linguagem
Cinematografia 2D com personagens ilustrados e rigs em camadas, profundidade discreta de cenários, escala humana e acabamento artesanal. Reels 9:16, 1080×1920; considerar 30fps como padrão técnico inicial.

## Escolha de motor (decisão técnica do Claude)
Remotion + React/TypeScript + SVG/canvas ou equivalente que permita render reprodutível, frames exatos, layout vertical e sincronização de áudio; FFmpeg para transcodificação, mixagem e inspeção. Verificar versões instaladas; não introduzir bibliotecas abandonadas sem justificativa. Priorizar ferramenta que permita **QA de frames e re-render de shots**.

## Ordem e critérios
### 1. Setup
- Auditar pasta e fontes presentes, metadados, integridade, dimensões, canais de áudio.
- Montar layout de projeto: `src/`, `public/assets/` ou convenção equivalente, `output/animatic/`, `output/shots/`, `output/final/`, `output/validation/`.
- Registrar versão de motor, comandos e dependências.

### 2. Animatic
- Compor 12 shots com referências e movimentos básicos, integrando os áudios.
- Sem fingir animação completa: mostrar placeholder identificado quando faltar prop.
- Checar 60s e pausas emocionalmente legíveis **antes** do investimento em rigs.

### 3. Assets e rigs
- Reconstruir personagens conforme fichas e pranchas; assets em camadas: cabelo, cabeça, pálpebras, pupilas, boca/visemas, tronco, braços, mãos e roupa.
- Criar e reutilizar rigs em planos e idades coerentes.
- Se usar recortes de imagens, conferir costuras, dedos, silhuetas, anti-alias e braços atrás/à frente na ordem correta.

### 4. Composição
- Master 1080×1920; enquadramentos que deixem olhos e mãos visíveis nos diálogos relevantes.
- Parallax sutil, zoom sem “efeito slideshow IA”.
- Lembranças: fotografias imersivas e reversíveis, antes/depois do clique.
- Cena do desenho: mostrar o lápis e revelar apenas no tempo dramático.
- Cena final: mesma família completa, congelamento e assinatura.

### 5. Áudio
- Clip por fala após validação; bed musical original/licenciado; ducking discreto; SFX coerentes.
- Fazer cue sheet com timestamps absolutos. Não acelerar voz para caber.

### 6. Entrega
- Master H.264 `1080x1920`, 30fps, áudio AAC, duração 60s (pequeno ajuste para preservar pausas deve ser documentado, não arbitrário).
- Stills de frame e shot montages; master sem trilha e versão com guia de sincronização se útil.
- Projetos reproduzíveis por script, sem assets externos voláteis.

## Falhas que eliminam a aprovação
Mudança de rosto, objetos a mais, cenas compostas como catálogo de IA, braços/mãos impossíveis, salto de perspectiva, desenhar a mãe *na foto antiga real* ao invés de em folha separada, mãe visível nas fotos antigas, lip-sync atrasado, áudio truncado, imagem final com família diferente, texto promocional no curta.

## Regras de som
Nenhum efeito ou trilha deve forçar emoção artificial. Sutileza, silêncio e ruído de papel são parte do drama.
