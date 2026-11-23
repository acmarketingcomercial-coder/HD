# ÁUDIO, DIÁLOGO E LIP-SYNC

## Fontes efetivamente recebidas na conversa
| Nome | Duração verificada | Codec | Amostragem | Canais |
|---|---:|---|---|---:|
| MENINA_COMPLETO.mp3 | 17,084063 s | MP3 | 44.100 Hz | mono |
| MAE_COMPLETO.mp3 | 9,560813 s | MP3 | 44.100 Hz | mono |
**Somadas:** 26,645s incluindo pausas, **não** 26,645s de fala contínua.

Fontes originais disponíveis no repositório:
- `assets/audio/originais/MENINA_COMPLETO.mp3`
- `assets/audio/originais/MAE_COMPLETO.mp3`

## Intercalação obrigatória
| ID | Personagem | Texto literal | Cena |
|---|---|---|---|
| 01 | Menina | Mãe… cadê você nas fotos de Natal? | 01 |
| 02 | Mãe | Ah, meu amor… é que eu tirava as fotos. | 02 |
| 03 | Menina | Em todas? | 02 |
| 04 | Mãe | Quase todas. | 02 |
| 05 | Mãe | O que você tá fazendo, filha? | 04 |
| 06 | Menina | Tô colocando você aqui. | 04 |
| 07 | Menina | Você também tava lá, mãe. | 04 |
| 08 | Menina | Esse ano você fica do meu lado na foto? | 05 |
| 09 | Mãe | Mas eu nunca sei como ficar nas fotos… | 05 |
| 10 | Menina | Não precisa. É só ficar comigo. | 05 |

## Instruções ao Claude
1. **Auditar conteúdo real**: escutar todas as faixas e confirmar se correspondem às frases; não confiar apenas em algoritmo de silêncio.
2. Detectar pausas e gerar `output/validation/audio-cue-sheet.csv` com onset, offset e transcrição conferidos para cada fala.
3. Cortar os 6+4 trechos sem eliminar sílabas iniciais/finais; deixar handles e fades curtos, nunca cortar respirações relevantes.
4. Salvar `output/audio/dialogue/*_MENINA.wav` / `*_MAE.wav` e as originais intactas.
5. Posicionar falas na timeline por ordem, nas cenas e sob as ações; timing pontual ajustável sem trocar a ordem.
6. Harmonizar loudness por **escuta e medição**, evitar compressão exagerada, distorção e ruído artificial.
7. Aplicar lip-sync apenas nos shots visíveis com fala; boca e olhar sincronizados. Não criar bocas mecanicamente abertas em todas as sílabas.
8. Música original/licenciada muito discreta no começo; abrir espaço às falas “Você também tava lá, mãe” e “Não precisa. É só ficar comigo”.
9. SFX: papel, lápis, estrela, leves risos/contexto dos flashbacks, **cliques recorrentes**. Último clique distinto e conclusivo.
10. Validar audibilidade em smartphone, fones e caixas pequenas.

## Proibições
- Não regenerar vozes sem necessidade; não alterar timbre/idade/performance automaticamente.
- Não assumir como válidos os intervalos numéricos aproximados ditos em mensagens anteriores: derivar timing da waveform e audição.
- Não adicionar diálogo na cena das lembranças, nem narração final.
- Sem música comercial sem licença.
