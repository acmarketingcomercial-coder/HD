# CENÁRIOS E PROPS

## A. Sala da família no presente — APROVADA
- Casa familiar realista, acolhedora, sem excesso de luxo.
- Árvore de Natal com luzes quentes, sofá neutro, tapete claro, mesa pequena, caixa de enfeites, alguns presentes.
- Posição relativa dos móveis deve permanecer estável entre cenas 01, 02, 07, 08, 09 e 10.
- Iluminação de fim de tarde/noite com fill suave; árvore adiciona pontos de luz, sem estourar brancos.
- Referência: `assets/referencias_aprovadas/sala_principal.png`.
- Produzir mapa do ambiente / layout de câmera, com layers separados: fundo, sofá, árvore, tapete, mesa, props, highlights.

## B. Três Natais anteriores — APROVADOS como prancha
- Mesma casa com decorações discretamente diferentes; não construir uma mansão nova.
- 1: bebê com pai, Clara atrás da câmera, gorro ajustado depois do clique.
- 2: Lia ~3 anos, pai levanta até estrela, Clara fotografa.
- 3: Lia ~4 anos, tropeça, Clara abandona câmera e dá abraço acolhedor.
- Tratamento sutil de memória (pequeno bloom / bordas suaves), **sem filtro pesado**.
- Referência: `assets/referencias_aprovadas/tres_lembrancas.png`.

## C. Cenário fotográfico final — DIREÇÃO APROVADA
- Ambiente distinto da sala doméstica: estúdio/sets de ensaio, composição mais limpa, luz fotográfica suave.
- Família completa em retrato, mãe do lado da filha, pai junto, mesma identidade dos personagens.
- Referência: `assets/referencias_aprovadas/direcao_cenario_final.png` contém contexto editorial, **não fundo plano definitivo**.
- Fazer fundo isolado próprio, respeitando a direção visual e, se receber fotografias reais autorizadas do cenário da Franciele, usá-las como referência mais específica. Não inventar correspondência exata com cenário real.
- Sem câmera de selfie ou temporizador em quadro; clique profissional pode ser apenas efeito sonoro fora de cena.

## D. Props — REFAZER INDIVIDUALMENTE, PENDENTES DE APROVAÇÃO
Cada item deve ser **UM arquivo isolado**, sem título, tabela, personagem, quadros múltiplos ou outros objetos misturados:
- `album_capa.png` — capa vinho, bordas discretas, aspecto afetivo.
- `album_aberto.png` — mesma capa e espessura, páginas sem incoerências.
- `foto_antiga_01.png`, `02.png`, `03.png` — mesmas pessoas e anos, Clara não aparece na foto impressa.
- `camera_mae.png` — câmera de uso comum, silhueta legível.
- `folha_branca.png`, `desenho_lia_final.png` — desenho de pai, mãe, filha **feito como criança de 6 anos**, simples, imperfeito.
- `lapis_vermelho.png` (e demais se necessário).
- `caixa_enfeites.png`, `estrela_arvore.png` e gorro do bebê se necessário.

### Propriedade narrativa dos props
O desenho é **a chave dramática**. A câmera é símbolo do ponto de vista da mãe. O álbum articula passado/presente. Não ornamentar demais.

### Regra de isolamento
Gerar cada objeto com fundo transparente real (RGBA) ou fundo uniforme removível validado; conferir bordas, alfa e ausência de sombra artificial cortada. Se a ferramenta insistir em gerar infográficos, não aceitar: mudar pipeline para recorte manual, ilustração vetorial ou composição de um único objeto.

### Erros anteriores — PROIBIDOS
- Geração de “prancha de objetos” virou storyboard com casa, personagens e captions.
- Pedido “um objeto” voltou a produzir painéis, famílias e textos.
- Imagens rejeitadas não são fontes oficiais. Ver `docs/10_DECISOES_E_ERROS.md`.
