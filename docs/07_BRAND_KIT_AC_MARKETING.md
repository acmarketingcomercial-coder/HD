# BRAND KIT — AC MARKETING DIGITAL
**Status: DIREÇÃO INICIAL, não manual oficial homologado.**
**Fonte:** PNG da logomarca original fornecida na conversa em 2026-11-23. O binário ainda precisa ser colocado em `assets/brand/logo/ac-marketing-oficial.png` sem alterações.

## Fonte da verdade
- A arte original é uma assinatura horizontal de marca: símbolo de foguete/traços dinâmicos vermelhos, monograma AC e texto MARKETING DIGITAL branco.
- Formato do arquivo recebido: PNG RGBA com transparência, 500×200 px.
- NÃO redesenhar, reescrever lettering, rotacionar, distorcer, separar símbolo do nome, criar um lettering novo ou aplicar recolorações à logo enviada.
- Com a tipografia branca, a logo precisa de fundos escuros ou contrastantes. Não a coloque sobre branco sem uma superfície de contraste.
- A logo não deve aparecer o tempo todo; priorizar assinatura discreta no encerramento e raros detalhes quando fizer sentido.
- Exigir arquivo oficial original no repositório ANTES da homologação de qualquer filme da marca. A referência enviada no ChatGPT não se transfere automaticamente ao Claude Code.

## Cores AMOSTRADAS do PNG — não equivalem a uma paleta oficial documentada
| Papel | Cor | Status |
| --- | --- | --- |
| Vermelho predominante do símbolo | `#BD0D2B` | Amostrado da imagem |
| Vermelho complementar presente na imagem | `#ED1C24` | Amostrado da imagem |
| Letra/elementos claros | `#FFFFFF` | Presente na imagem |
| Preto quase puro para fundos, texto e contraste | `#171717` | Proposta, não validado como oficial |
| Off-white editorial para cenas claras | `#F5F3EF` | Proposta, não validado como oficial |

Amostragem digital identifica cores presentes no arquivo, mas não valida HEX institucionais, CMYK, Pantone nem fonte original. Quando houver manual de identidade, ele prevalece sobre os valores aqui.

## Tipografia
- Nome da família tipográfica **não foi confirmado**. Não inferir a fonte a partir da aparência da logo.
- Para pilotos, usar tipografia sem serifa profissional licenciada ou do sistema, claramente PROVISÓRIA.
- Não distribuir arquivos de fontes sem licença e não alegar que se trata de fonte institucional.

## Aplicação no AC Motion Studio
- Estilo preferido: 2D editorial sofisticado + storytelling com personagens adultos + motion narrativo + sound design intencional.
- Personagens, roupas e ambientes não precisam ser vermelhos; identidade deve orientar composição, grafismos e detalhes, sem sacrificar naturalidade.
- Preservar hierarquia, legibilidade e áreas seguras para Reels 1080×1920.
- Evitar cartoon infantil, interfaces genéricas, mímica exagerada e animações de elementos sem propósito narrativo.
- Preparar sound branding discreto para avaliação, sem declarar assinatura sonora final aprovada.
- Não usar cases/depoimentos/métricas reais de clientes sem autorização.

## Checklist de importação do arquivo
1. Importar PNG ORIGINAL em `assets/brand/logo/ac-marketing-oficial.png` (nome recomendado).
2. Validar dimensões, alfa, hash SHA-256, pixelização e contraste em fundo escuro. Não converter em vetor como se fosse arte oficial.
3. Preencher `assets/brand/MANIFESTO.md` com origem, formato e status de aprovação.
4. Atualizar qualquer `src/theme.ts` provisório com tokens de design *propostos* para prévias, aguardando aprovação humana.
5. Somente depois habilitar logo no episódio/encerramento aprovado. Não gerar logo por IA.
