# HISTÓRICO DE DECISÕES E ANTI-PADRÕES

## Escolhas criativas confirmadas
- A campanha de Natal do estúdio tem três pacotes comerciais, mas **o curta é conteúdo narrativo, não peça de venda**.
- O usuário pediu inicialmente história > 90s; decidiu depois reduzir para **1 minuto**.
- O roteiro V3.0 e a conclusão “Não precisa. É só ficar comigo” foram adotados.
- Prefere emoção construída por gestos e silêncio, não palavras grandiosas.
- Escolheu personagens 2D com aspecto cinematográfico/ilustrado e aprovou a família.
- Aprovou a sala principal, o painel dos 3 flashbacks e a direção visual do retrato final.
- Áudios completos por personagem são a base; devem ser **recortados após escuta**.

## Incidentes anteriores
| Problema | Consequência | Correção exigida |
|---|---|---|
| Pedido de props retornava pranchas editoriais com texto/personagens | Não eram assets animáveis | Gerar **um único objeto por imagem**, isolado e validado |
| Ferramenta repetiu cenário final quando se pedia props | Contexto visual contaminou output | Prompt isolado e depois conferência de imagem; descartar falhas |
| Tentativas de fundo neutro ainda retornaram storyboard em painéis | Risco de reaproveitar erro como oficial | Registrar rascunho como rejeitado |
| Sugestão inicial de final com câmera caseira/temporizador | Menor associação com ensaio profissional | Último clique de câmera profissional fora do enquadramento |
| Risco de final real com pessoas diferentes das animadas | Quebra de identificação | Preferir retrato final ilustrado com mesma família |
| Estimativas automáticas de intervalo de fala | Podem cortar início/fim de palavras | Escutar, transcrever e recortar por waveform antes de travar timing |

## Evitar
- Animações parecendo carrossel de imagens estáticas.
- Pessoas que mudam de face entre tomadas.
- Legendas de comercial, botão de WhatsApp, preços ou contadores no Reels.
- Vozes aceleradas, pausas emocionais eliminadas.
- Fazer a mãe parecer ausente da vida; ela está presente em todas as memórias.
- Transição final para retrato com família inconsistente.
- Confundir layout aprovado com documento final renderizável.

## Separação marca/projeto
As informações comerciais da Franciele Fotografias não autorizam alterar visual, preço ou CTA dentro do curta. O vídeo será apresentado como conteúdo de storytelling da marca, com assinatura discreta.
