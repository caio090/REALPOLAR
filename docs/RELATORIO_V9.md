# REAL POLAR — adendo V9: abertura da apresentação

Data: 03/11/2026. Branch `refinamento/proposta-v8` (PR #5, aberto). Base desta revisão: `55b22ab`. Escopo: somente a primeira seção (`#inicio`) de `index.html`; o restante da V7 + V8 foi preservado.

## Decisão editorial

- **Título adotado:** "A Real Polar está crescendo. *O marketing precisa acompanhar.*"
  - É a opção prioritária do briefing.
  - A segunda frase usa o tratamento editorial que já existia (Georgia itálico, cor glacial) e ocupa uma linha própria. Assim o título lê como duas ideias: crescimento + gestão.
  - O "crescendo" vem do briefing; nenhum número foi acrescentado.
- **Explicação única:** "O empresário não precisa planejar conteúdos, gerir anúncios e coordenar fornecedores sozinho. Nossa equipe organiza essas frentes, conforme o plano. A direção aprova o necessário e mantém o foco na operação e nas decisões da empresa."
  - Responde "por que uma equipe hoje e o que muda".
  - Não promete resultado e não assume o atendimento comercial nem a operação da Real Polar.
  - Não inclui audiovisual na mensalidade.
- **Capa de proposta, não página de site:**
  - rótulo "Proposta de gestão de marketing";
  - legenda "Mensalidade da gestão, por plano" antes dos três preços;
  - os dois botões viraram links discretos ("Ver os planos" e "Conhecer os serviços"), com as mesmas âncoras;
  - menos altura;
  - nenhum asset novo e nenhum logo na abertura.

## Comparação das composições (local, no navegador)

| | A: título + explicação + preços | B: título + frase + divisão "equipe / Real Polar" |
| --- | --- | --- |
| Palavras na abertura | 75 | 88 |
| Fim dos preços em 390 px | 717 px | 835 px |
| Fim dos preços em 320 px | 810 px | 900 px |

Adotada a **A**, com ajustes de texto e de espaçamento no celular. Ela tem menor tempo de leitura e leva mais rápido aos planos, sem rolagem extra no celular. A divisão de responsabilidades da B ficou resumida na frase "a direção aprova o necessário". Capturas: `capturas/v9/compA-*` e `capturas/v9/compB-*`.

## Antes × depois (medido)

| Largura | Fim dos preços antes → depois | Altura da abertura antes → depois |
| --- | --- | --- |
| 375×667 | 611 → 660 (cabe na tela) | 724 → 739 |
| 390×844 | 588 → 666 | 701 → 697 |
| 1280×900 | 575 → 573 | 686 → 650 |

A explicação ficou mais longa do que a pergunta anterior. Para compensar, o espaçamento da abertura foi reduzido só no celular. Os três preços seguem na primeira tela a partir de 360 px; em 320×568 aparecem com uma rolagem curta. Capturas: `capturas/v9/antes-inicio-*` e `capturas/v9/depois-inicio-*`.

## Testes

- **Abertura (`testes/v9-hero.cjs`):** 100/100 verificações, cobrindo:
  - AC01 a AC18 nas 9 larguras;
  - lista de expressões proibidas;
  - foco visível e âncora para os planos;
  - fonte a 125% e 200%;
  - paisagem 568×320 e 844×390;
  - página sem JavaScript;
  - impressão;
  - movimento normal e reduzido.
- **Regressão V8 (`testes/v8.cjs`, sem alteração):** 366/366 verificações e 648 combinações do simulador. Nenhum teste precisou ser mudado.
- **Higiene do PR (capítulo 18):** a nota antiga do X01 sobre Meta Ads "a confirmar" e o token `--silver-500` já estavam corrigidos em `55b22ab`. Os testes dessa correção continuam aprovados.
- **Não testado:** Safari/iOS, Android físico, Firefox, leitor de tela real e leitura por decisor.

## Não alterado

Preços, `calc()`, edição avulsa, matriz `#cmp`, cartões, mapa, pop-ups, audiovisual, 90 dias, acompanhamento, simulador, FAQ, fechamento, navegação, `.vercelignore`, noindex e Vercel. Sem merge e sem deploy de produção.

## Pendências

As mesmas da V8: contrato, frequência dos relatórios do Ampliado, volumes, limites de edição e revisões, painel, bônus e dados de contato.
