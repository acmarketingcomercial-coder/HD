# AC MOTION STUDIO — Animated Business Stories

Repositório de produção audiovisual da **AC Marketing Digital**, dedicado a Reels com storytelling 2D, personagens ilustrados, Motion Design editorial e sound design narrativo.

**ESTADO:** infraestrutura inicial configurada; **roteiro final, identidade gráfica e mídias oficiais ainda NÃO aprovados/importados**. A composição StoryPilot é somente um teste de linguagem e pipeline — **não é o vídeo final**.

## Direção
- A AC vende estratégia, comunicação e marketing integrado para empresas estruturadas e compradores de maior valor.
- O conteúdo deve ensinar decisões úteis e gerar vontade real de salvar ou compartilhar.
- Cada Reel terá quebra de padrão nos primeiros 2s, um loop aberto específico, aplicação prática e pergunta genuína ao final.
- Visual: personagens 2D com atuação, ambientes profissionais, continuidade entre cenas, motion editorial e sound design integrado.
- A narrativa deve parecer uma descoberta, não propaganda tradicional ou aula previsível.

## Estado do episódio inicial
**Título/conceito:** O erro começa antes do post.
**Hipótese narrativa ainda não aprovada:** uma construtora de alto padrão publica uma bela casa, mas não responde perguntas decisivas do comprador. Uma objeção comercial recorrente vira conteúdo útil.
**Não há texto final bloqueado, nem narração, logo oficial ou personagens master neste repositório.**

## Pré-requisitos
Node.js LTS, npm, browser compatível para Remotion; ferramentas locais FFmpeg/ffprobe recomendadas para inspeção de mídia. Confirme versão/licença e instalação das dependências antes de renderizar. Não publicar vídeos sem checar direitos de trilha/efeitos.

## Comandos
```bash
npm install
npm run check:inputs
npm run typecheck
npm run compositions
npm run dev
npm run render:pilot
```

Composição: `StoryPilot` (5s, 1080x1920, 30 fps). A prévia é apenas uma prova técnica ilustrativa, com cores e tipografia provisórias.

## Fonte de verdade
Leia `CLAUDE.md` e `docs/00_STATUS_E_APROVACOES.md` antes de desenvolver. Depois siga `docs/06_TAREFA_CLAUDE.md`. NÃO use textos antigos de outros projetos nem trate hipóteses como aprovadas.

## Segurança e histórico
O projeto anterior da branch `main` foi preservado integralmente em `backup/hd-before-ac-motion-studio-20261123` (commit `4b99714511db408080ecb7eebce512263d6b6b05`). Outros backups históricos permanecem nas branches do repositório. Esta substituição não apaga o histórico Git.

Este repositório não tem relação de deploy com o AC Marketing OS, CEMESC ou projetos anteriores.

## Identidade visual e pesquisa de referências
- [Brand Kit da AC](docs/07_BRAND_KIT_AC_MARKETING.md): uso correto da logomarca, amostra de cores e pendências.
- [Pesquisa visual e styleframes](docs/08_REFERENCIAS_E_STYLEFRAMES.md): três abordagens de 2D editorial para a AC.
- [Mensagem ao Claude Code](docs/09_MENSAGEM_CLAUDE_BRANDING.md): próximo handoff.
- A logo original recebida no ChatGPT **ainda não foi importada como binário para este repositório**.
