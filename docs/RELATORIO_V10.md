# REAL POLAR — adendo V10: abertura final e retirada de "Imprimir ou salvar"

Data: 03/11/2026. Branch `refinamento/proposta-v8` (PR #5, aberto). Base: `1bd8c50` (V9). Escopo: cabeçalho, primeira seção (`#inicio`) e o botão "Imprimir ou salvar PDF" do fechamento. O restante da V7 + V8 foi preservado.

## Antes × depois

| | Antes (V9) | Depois (V10) |
| --- | --- | --- |
| Cabeçalho | Logo + "REAL POLAR" + navegação | Só a navegação: links no computador, botão "Seções" no celular; barra de 52 px em vez de 60 px |
| Rótulo | "Proposta de gestão de marketing" | Removido |
| Título | "A Real Polar está crescendo. O marketing precisa acompanhar." (até 52 px, 4 linhas no celular) | "A Real Polar cresce. *O marketing precisa acompanhar.*" (até 40 px; 3 linhas no celular, 1 no computador) |
| Apoio | Parágrafo de 3 frases | "Campanhas, conteúdo, anúncios e produção precisam de uma equipe coordenando as entregas. Assim, a direção da Real Polar cuida do que só ela pode decidir." |
| Explicação visual | — | Transição em duas colunas no computador e em sequência no celular: **Sem equipe dedicada** (4 tarefas operacionais do dono) → **Com a equipe de marketing** (a equipe executa o marketing do plano, a direção aprova, o dono se dedica a clientes, operação e crescimento) |
| Continuação | "Ver os planos" + "Conhecer os serviços" | "Conhecer os planos" |
| Preços | Três linhas empilhadas no celular | Três colunas compactas no celular, que viram uma coluna com fonte ampliada; valores e âncoras iguais |
| Fechamento | "Copiar resumo" + "Imprimir ou salvar PDF" | Só "Copiar resumo" |

Em 390×844, título, apoio, transição, preços e "Conhecer os planos" cabem na primeira tela (preços terminam em 741 px). Em 320×568, a tese e o início da transição aparecem na primeira tela. Capturas: `capturas/v10/antes-inicio-*`, `depois-inicio-*` e `animacao-meio/fim-1280`.

## Animação

- Só CSS, usando o mecanismo de revelação já existente (`.motion` e `[data-reveal].in`); nenhuma biblioteca nova.
- Sequência:
  1. as tarefas "sem equipe" esmaecem (0,4 s);
  2. a seta se desenha (0,35 s);
  3. os três itens "com a equipe" entram em sequência (0,3 s cada).
- Sem repetição, parallax ou texto palavra por palavra.
- Com movimento reduzido ou sem JavaScript, o bloco já aparece no estado final, legível sem movimento.

## Impacto no cabeçalho

- Saíram a logo e o nome.
- A navegação continua igual:
  - mesmos 6 links;
  - realce da seção atual;
  - botão "Seções" com Esc e foco;
  - âncoras com `scroll-padding-top` de 72 px, que continua cobrindo a barra.
- No computador, os links ficam alinhados à esquerda, para não deixar o espaço vazio da marca.
- Os arquivos da logo continuam em `assets/`, sem uso na página.

## Imprimir ou salvar

- Foram removidos o botão e o seu handler exclusivo (`window.print`).
- A impressão nativa do navegador continua funcionando:
  - as regras `@media print` foram mantidas;
  - o evento `beforeprint` que abre o FAQ foi mantido;
  - a verificação de impressão da suíte V8 continua aprovada.

## Testes

- **`testes/v10-hero.cjs`** (antigo `v9-hero.cjs`, atualizado para os critérios da V10): 121/121.
  - Nas 9 larguras:
    - título curto, com fonte de até 40 px;
    - sem marca, sem logo e sem rótulo;
    - transição com 4 tarefas → 3 itens;
    - sem botão de imprimir;
    - preços intactos e dentro dos quadros;
    - âncoras e alvos de 44 px;
    - menu "Seções";
    - sem rolagem lateral e sem erros.
  - Também cobre: fonte a 125% e 200%, paisagem, página sem JavaScript, impressão, movimento normal (a animação termina no estado completo) e movimento reduzido.
- **`testes/v8.cjs`:** 366/366, mais as 648 combinações do simulador. Uma única expectativa mudou: a linha que exigia a logo carregada no cabeçalho agora exige ausência de marca e a presença dos 6 links de navegação, pela decisão da V10.
- **Não testado:** Safari/iOS, Android físico, Firefox e leitor de tela real.

## Não alterado

Planos, valores, matriz `#cmp`, cartões, filtro, Meta Ads e Google, R$ 180, simulador, pop-ups, resumo, FAQ, "Copiar resumo", audiovisual, 90 dias, acompanhamento, metadados, noindex, `.vercelignore` e Vercel. Sem merge e sem deploy de produção.
