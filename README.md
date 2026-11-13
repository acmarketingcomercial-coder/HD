# HD — Produção AC Motion Studio
## Campanha atual: Franciele Fotografias — Reserva Programada

Este repositório é um espaço operacional reutilizado para a próxima produção audiovisual. A campanha anterior foi preservada em:
backup-hd-antes-franciele-20261113

**Leia primeiro:** PROMPT_CLAUDE_CODE.md e MANIFEST.json.

### Status dos materiais
O pacote técnico textual está neste branch; arquivos de mídia binária de Franciele precisam ser importados em assets/ a partir do ZIP que acompanha a entrega do ChatGPT. Este repositório NÃO contém, nesta atualização, a locução OGG, a capa PNG, a logo PNG, nem o mockup PNG. Não use assets de outras campanhas: a árvore principal foi renovada para evitar confusão.

Arquivos esperados:
- assets/narracao_franciele_reserva_programada_original.ogg
- assets/narracao_franciele_reserva_programada_master.wav (derivado opcional)
- assets/logo_franciele_fotografias_original.png
- assets/capa_carne_aberta_original.png
- assets/mockup_carne_3d_aprovado.png
- assets/foto_ensaio_real_autorizada.ext (foto de portfólio real ainda a receber; bloqueia render final)

### Início no Claude Code
1. Abrir/clonar acmarketingcomercial-coder/HD no branch main.
2. Importar os binários do ZIP entregue ao cliente, preservando nomes e paths.
3. Ler PROMPT_CLAUDE_CODE.md, MANIFEST.json e docs/.
4. Verificar hashes, codec, narração real e dimensões.
5. Produzir apenas prévia audiovisual 0–12s para aprovação.
6. Receber foto real autorizada para a revelação antes da versão final.

### Atenção
35,6465s é a duração real medida do áudio original; as cenas do prompt usam janelas provisórias, não timings de palavras verificados. Roteiro aprovado não pode ser alterado. Sem sobreposição de textos no vídeo.
Sem GitHub Actions. Revisões, renders e deploy/push devem ser locais/manuais.

Contato do projeto: Franciele Fotografias, Coluna/MG.