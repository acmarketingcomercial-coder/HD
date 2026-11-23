# MANIFESTO DE MÍDIAS E PROVENIÊNCIA

## Fontes do projeto na conversa
Os seis arquivos abaixo estão **presentes no GitHub nos caminhos definitivos**. Foram comparados ao ZIP complementar por hash Git SHA-1 de blob e tamanho, com correspondência integral. O ZIP é backup/handoff opcional, não requisito para clonar e começar a etapa de auditoria. Há hashes SHA-256 em `assets/MANIFESTO_SHA256.json` para verificação independente.

| Caminho previsto no repo | Origem no handoff | Status | Uso |
|---|---|---|---|
| `assets/referencias_aprovadas/personagens_master.png` | `a_detailed_polished_character_design_and_visual_s.png` | APROVADO | Visual Lia, Clara, Daniel |
| `assets/referencias_aprovadas/sala_principal.png` | `prancha_visual_da_sala_de_natal.png` | APROVADO | Sala do presente |
| `assets/referencias_aprovadas/tres_lembrancas.png` | `a_warm_detailed_illustrated_storyboard_style_scen.png` | APROVADO | Flashbacks e faixa etária |
| `assets/referencias_aprovadas/direcao_cenario_final.png` | `a_detailed_cinematic_storyboard_style_illustratio.png` | APROVADO como direção | Referência editorial, não fundo isolado |
| `assets/audio/originais/MENINA_COMPLETO.mp3` | `MENINA_COMPLETO.mp3` | RECEBIDO | 6 falas da Lia |
| `assets/audio/originais/MAE_COMPLETO.mp3` | `MAE_COMPLETO.mp3` | RECEBIDO | 4 falas da Clara |

## Rascunho opcional a NÃO confundir com aprovação
- `a_detailed_warm_illustrative_close_up_scene_of_a.png`: álbum único isolado em tentativa, **não recebeu aprovação**. Guardar apenas na pasta `assets/rascunhos_nao_aprovados/` se precisar comparar — nunca usar automaticamente.

## Não usar
Todas as pranchas geradas indevidamente quando se pediram **objetos separados**, incluindo arquivos com painéis, colagens, textos editoriais, cenário final repetido ou capas de storyboard. Esses resultados **não** foram aprovados.

## Fotos reais e logos
Não há logo oficial em arquivo nem fotografia de família autorizada garantida dentro deste repositório. Usar apenas assinatura tipográfica de “Franciele Fotografias” e retrato final ilustrado consistente; não inventar um logo oficial.

## Falhas de acesso
Se um PNG/MP3 estiver ausente na pasta esperada, registrar **MISSING** no relatório e parar a etapa dependente desse asset. Nunca preencher automaticamente com um arquivo genérico sem aviso.

## Licenças
Verificar direito de uso e distribuição de fotos de clientes, vozes, música e outros materiais. Elementos gerados para o projeto devem seguir as regras da ferramenta de origem.

## Entrega de assets novos pelo Claude
Cada asset validado deve entrar em `assets/producao/`, nomeando personagem/idade/cena/camada. Nunca substituir o arquivo de referência aprovado ao exportar um sprite ou render.
