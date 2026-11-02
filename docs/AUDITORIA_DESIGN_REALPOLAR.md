# REAL POLAR | Auditoria do HTML, direção de UX e briefing de execução no Claude

**Data:** 01/11/2026  
**Alvo auditado:** `index.html` na `main`, conforme consulta ao GitHub (blob `7f5d3c157d0f38ef1701b86e98b14aebbfe26395`), e documentos comerciais do Canva.  
> **Atualização 02/11/2026 (Claude Code):** auditoria visual em navegador, sistema de design e protótipo isolado registrados nas seções I a L; **segunda rodada de refinamento (roteiros em SVG, movimento e textos) na seção M**, ao final. O protótipo está em `prototipo/index.html`, na branch `design/prototipo-esclarecimento`. **O `index.html` principal e a produção não foram alterados.**

**Limite da auditoria:** inspeção **estática do código e da proposta**. A visualização remota da URL de produção não foi capturada nesta rodada; **não afirmar que houve teste visual, responsivo real, performance, teclado ou click-through no navegador**. Esses testes são tarefas do Claude com acesso ao ambiente de preview.

## A. Finalidade do redesign

A Real Polar já está interessada na contratação. O material existente confundiu a leitura. O novo HTML deve ser um **esclarecedor comercial**: explica por que a gestão de marketing é necessária quando o cliente está ocupado com a operação técnica, quais ações serão tomadas, como serão avaliadas e o que está ou não incluído.

Não é um formulário para capturar lead, não é chatbot, não é novo site corporativo e não é uma página de venda que começa cobrando a mensalidade. O decisor deve entender **o papel da operação de marketing mesmo sem conhecer o vocabulário da área**.

**Principal mensagem:** “A Real Polar cuida da operação e do fechamento. Nós estruturamos a presença, testamos abordagens, atraímos oportunidades e medimos o que pode ser melhorado.”

## B. O que já existe e funciona em termos de código

| Evidência no `index.html` | Estado confirmado por leitura estática |
| --- | --- |
| Seções `inicio`, `ganho`, `planos`, `anuncios`, `duvidas`, `simulador` e fechamento | **Codadas** |
| Cards para três planos e preços | **Codados**, com valores **divergentes do Canva** |
| Processo com 5 passos | **Codado**, mas não é cronograma interativo de 90 dias |
| FAQ com 15 perguntas e busca/filtros | **Codado**, mas respostas longas e independentes, sem encadeamento visual |
| Simulador de custos e resumo copiável | **Codados**; exige revisão total das referências comerciais |
| Estilos para desktop/mobile, estado de foco e `prefers-reduced-motion` | **Presentes no CSS**; não testados visualmente nesta auditoria |
| `beforeprint` / `afterprint` para FAQ | **Codados**; impressão não validada nesta auditoria |
| Mapa de dúvidas com nós conectados e transição para ação/responsável/métrica | **Não encontrado no código** |
| Cronograma com marcos de 30/60/90 dias e estados clicáveis | **Não encontrado no código** |
| Logo gráfica RP | **Não encontrada como imagem no `index.html`**; cabeçalho exibe marca em texto |
| Animações de percurso/evento | Nenhum `@keyframes` encontrado; efeitos pontuais CSS não constituem mapa animado |

Esses achados não provam que a publicação atual da Vercel corresponda exatamente ao arquivo. Verificar deployment/commit antes de qualquer afirmação sobre produção.

## C. Problemas encontrados, prioridade e direção

**P0 | Antes de mostrar ao cliente novamente:**

1. **Números contraditórios.** Código: Econômico R$ 1.100, Essencial R$ 1.800, Ampliado R$ 3.200 e uma referência de captação de R$ 1.000. Canva (pág. 9): Econômico R$ 1.280, Essencial R$ 2.100, Presença Ampliada R$ 3.200, referência de captação R$ 1.200/diária, sujeita a cotação, com mídia paga à parte. **Não alterar apenas um card**; revisar FAQ, simulador, microcopy e resumo copiável. Conferir contrato antes de finalizar.
2. **Escopo potencialmente divergente.** Canva: no Essencial, revisão básica de Google Meu Negócio; no Ampliado, rebranding, gestão do Google Meu Negócio, SEO e painel central interno. O HTML atual simplifica a distinção, inclui SEO nos dois principais e dá quantidades 7 artes/2 ou 6 vídeos cuja confirmação no contrato ainda falta. **Não inventar nem prometer a entrega técnica do painel.**
3. **A página começa com benefício e logo vai para preços.** Isso reduz o espaço dado à dúvida central: para que contratar uma operação de marketing e como serão medidos os resultados. Reorganizar a sequência narrativa.

**P1 | Necessário para experiência aprovada no briefing:**

4. **FAQ fragmentado:** buscar/abrir perguntas ajuda, mas não conduz a pessoa por um processo. Criar perguntas-vetores e ações conectadas.
5. **Falta história dos três primeiros meses:** mostrar 30/60/90 dias, diagnóstico, validação, modelagem de público e só então possibilidade de metas progressivas. Não garantir 50 leads no primeiro mês nem direito de rescisão não previsto no contrato.
6. **Métricas sem caminho didático visual:** distinguir entrega de marketing, contato gerado, qualidade do contato e negociação comercial.
7. **Audiovisual precisa ficar explícito:** filmagem/fotografia, Storymaker, drone/piloto e apresentador são **terceirizados e contratados à parte**; marketing coordena o briefing, roteiro e trabalho previsto no plano, após aprovação da Real Polar.

**P2 | Refinamentos visuais e de acessibilidade:**

8. **Marca oficial não aplicada:** arquivo recebido nesta conversa mostra monograma RP prateado com acento azul-claro sobre azul-marinho profundo. Usá-lo sem redesenhar quando asset original estiver disponível no ambiente de desenvolvimento.
9. **Apresentação com “cara de FAQ”:** substituir o excesso de grids e caixas de texto por tipografia clara, progressão editorial, ilustração de processo, ritmo e respiros. Nada de ícones genéricos ou visual de chat.
10. **Interação precisa ser inclusiva:** teclado, foco, reduzido movimento, indicação de estado aberto, textos acessíveis, feedback ao toque, contraste e resposta em telas pequenas.

## D. Nova arquitetura narrativa proposta

### 01. A pergunta principal

**Headline curta:** “Quem cuida de encontrar o próximo projeto enquanto vocês executam o atual?”

Subtexto: “Nossa equipe organiza a comunicação e a aquisição de oportunidades. A Real Polar continua com o atendimento técnico, os orçamentos e o fechamento.”

Interação: alternar dois polos *Operação Real Polar* ↔ *Operação de Marketing*, com uma conexão visível “informações do projeto / retorno de contatos”. Evitar atribuir vendas à agência.

### 02. Selecione uma dúvida e veja o caminho

Quatro perguntas principais em rótulos clicáveis:

- “Por que precisamos de marketing?” → clareza de posicionamento → conteúdo técnico → confiança → novas oportunidades.
- “De onde vêm os interessados?” → hipótese de público → anúncio e conteúdo → site/WhatsApp → atendimento da Real Polar.
- “Como saber se está funcionando?” → alcance e cliques → contatos → qualidade → proposta → projeto fechado (últimos passos exigem dados comerciais fornecidos).
- “O que acontece primeiro?” → diagnóstico LKT → testes → ajustes → decisão sobre metas e continuidade.

Ao clicar em pergunta: destaque o percurso correspondente em **um mapa conectado**, mostre no máximo uma ou duas frases por nó e, sob o nó ativo, **Ação / Responsável / Indicador**. Um botão “Ver próximo passo” deve avançar sem exigir scroll arbitrário. Interação progressiva, nunca interação obrigatória para compreender o conteúdo.

### 03. Linha do tempo dos primeiros 90 dias

- **Dias 1–30 | Diagnosticar e estruturar:** conhecer serviços, oferta, canais, públicos hipotéticos, material disponível, rastreamento possível, WhatsApp/site, aprovações e primeira rodada de mensagens/conteúdos.
- **Dias 31–60 | Testar e validar:** campanhas autorizadas, criativos, públicos/regiões, custos e qualidade de contatos, ajustes com base nos primeiros sinais. Nenhuma meta rígida de leads sem histórico.
- **Dias 61–90 | Avaliar e decidir:** consolidar dados, comparar hipóteses, apontar melhor direção, estimar metas proporcionais à verba e ao ciclo comercial e avaliar próximos 90 dias.

**Cláusula de cuidado:** Canva informa **prazo mínimo de três meses**. Não anunciar que o cliente “pode cancelar livremente após 90 dias” sem confirmar contrato. Explicar o mês três como **marco recomendado de avaliação**.

Interação: timeline acionada por abas mês 1, mês 2, mês 3; a cada toque aparecem “entregamos / aprendemos / próxima decisão”, com linhas e transição discreta.

### 04. Métricas, sem números fictícios

Funil com seis pontos: **Alcance útil → Visita/clique → Contato → Contato qualificado → Reunião/proposta → Projeto fechado**.

- **Sob gestão da equipe:** estratégia, criação e programação, campanhas, investimento executado, alcance, cliques e contatos mensuráveis, revisões e relatórios.
- **Sob responsabilidade comercial da Real Polar:** velocidade de resposta, entendimento do projeto, orçamento, visita técnica, negociação e venda.
- **Dependente de dados compartilhados:** taxa de qualificação, reunião, propostas, fechamento e receita atribuível.
- Não prometer leads, ROI, CAC ou faturamento que os dados atuais não permitem estimar.

Interação: clicar em métrica abre “O que significa / Por que importa / Quem informa”. Não usar gráficos com dados inventados.

### 05. Como a verba muda os testes, não a promessa

Comparar “orçamento menor” versus “orçamento maior” com um exemplo **ilustrativo de ritmo e volume de aprendizado**, sem estimar número de leads ou retorno. O anúncio na Meta participa de um leilão. Orçamento maior pode permitir mais testes e coleta de dados mais rápida; não garante vendas.

### 06. Audiovisual e responsabilidades

Ilustração de uma linha de produção, da esquerda para a direita:

`Real Polar aprova necessidade + orçamento` → `Equipe de marketing define pauta e roteiro` → `Profissional de São Paulo capta` → `Equipe recebe e edita material conforme plano` → `Peça é aprovada e publicada`.

Abas opcionais: **Videomaker/foto**, **Storymaker**, **Drone**, **Apresentador**. Todas com legenda “serviço externo, cotação e aprovação separadas”; drone condicionado à viabilidade e autorizações. Os quantitativos de vídeos editados dependem de escopo final e material utilizável.

### 07. Investimento e planos, depois das respostas

Apresentar os três níveis de gestão com valores do Canva e separar em linhas: **gestão**, **verba de mídia**, **captação eventual**. Evitar o uso de “total mensal” para soma de mensalidade + uma diária esporádica. Expor serviços **somente com redação validada na proposta/contrato**. O Ampliado menciona painel e rebranding, mas não tratá-los como sistemas já entregues ou com prazo implícito.

### 08. Próximo passo

Concluir com alinhamento de escopo, aprovação da produção externa, escolha da verba de mídia, acervo/autorizações e definição dos responsáveis pelo retorno de dados comerciais. CTA neutro para conversa de alinhamento, sem contato inventado.

## E. Direção de design e motion

**Referência visual:** imagem enviada pelo responsável: monograma RP metálico prateado, curva azul fria, fundo azul-marinho. Isso é **observação visual**, não um brand book com hex oficiais. Não recolorir, vetorizar arbitrariamente nem “melhorar” o símbolo.

- **Tom:** técnico, premium, sóbrio, contemporâneo, sem clichês de agência e sem excesso de brilhos. A credibilidade vem do funcionamento e da simplicidade.
- **Cores:** azul-marinho profundo como base, branco e cinzas prateados, azul glacial como acento controlado. Extrair valores precisos de uma identidade aprovada caso ela exista; não presumir que os hex do HTML antigo sejam definitivos.
- **Hierarquia:** pergunta em título curto, resposta em verbo de ação, indicação do que medimos. Textos em camadas: 1 linha visível, detalhes sob interação.
- **Ilustrações:** SVGs/linhas e nós coerentes com conteúdo real. Não usar imagens de obras fictícias, depoimentos, estatísticas falsas, ícones de chatbot ou fotografias de bancos genéricos.
- **Motion:** linha revela conexão após clique; destaque muda de nó; painel de informação troca sem animação agressiva; duração curta; respeitar `prefers-reduced-motion`.
- **Tecnologia:** manter HTML/CSS/JS nativos e Codespaces na porta 5500; não adotar framework ou dependência sem justificativa e aprovação.
- **Responsivo:** no celular, mapas viram fluxo vertical com passos numerados e navegação fácil; o conteúdo essencial deve permanecer legível sem animações.

## F. Brief de execução para o Claude

> Trabalhe no repositório `caio090/REALPOLAR`, sem criar outro projeto e **sem publicar no domínio do cliente**.
>
> **1. Primeiro, audite e entenda:** leia `CLAUDE.md`, `AGENTS.md`, `docs/ESTADO_DO_PROJETO.md`, este arquivo, `README.md` e `index.html`. Confira o PR #2 e seu diff, as versões recentes e a proposta original `https://canva.link/konuf40jjeznfjb`. Se o contrato for anexado, use-o para conferir entregáveis e condições. Não use preços antigos do HTML como verdade comercial.
>
> **2. Skill inventory real:** liste quais skills, plugins e agentes de design/frontend/a11y/motion/teste estão disponíveis **nesta sessão do Claude Code**. Leia seus `SKILL.md` ou instruções correspondentes. Use as pertinentes na auditoria, arquitetura, implementação e QA. Se não estiverem instaladas, sinalize em vez de inventar uma execução ou instalar sem pedir.
>
> **3. Auditoria visual:** abra a versão atual em navegador/preview. Faça capturas de desktop e celular (ex.: 1440×900 e 390×844), registre problemas de clareza, hierarquia, contraste, mobile, fluxo e interações. Compare capturas com os achados estáticos acima. Registre quais páginas/estados foram testados.
>
> **4. Proponha componentes interativos:** sequência editorial de perguntas, mapa de ações conectadas, timeline de 90 dias, funil de métricas, trilha do audiovisual e investidor separado. Apresente wireframe e um sistema de design coerente com a logo original, com textos curtos em português brasileiro.
>
> **5. Separe decisões da implementação:** trate o redesign como **protótipo em branch própria**, sem sobrescrever produção antes de aprovação. Confirme preço/escopo contra Canva e contrato; deixe hipóteses não confirmadas como pendências. Não crie APIs, login, painel de gestão ou automações. Se criar assets, identifique sua origem e autorização.
>
> **6. Verifique:** navegação por teclado, celular sem rolagem horizontal, contraste, redução de movimento, cliques dos nós, progressão do mapa, abas, FAQ, simulador, impressão/PDF, console, Codespaces porta 5500, textos e números. Faça screenshots comparáveis antes/depois quando possível. Nada de “testado” sem evidência.
>
> **7. Handoff:** atualize `docs/ESTADO_DO_PROJETO.md` após cada etapa, acrescente resultados efetivos à auditoria, abra PR com prévia se possível e entregue links, diffs, testes, pendências e riscos. **Aguardar autorização de merge/deploy.**

## G. Critérios de aceite da futura versão

- [ ] Ao chegar, a pessoa entende quem faz marketing e quem fecha vendas em menos de uma tela.
- [ ] Cada dúvida principal tem um caminho clicável com **ação, responsável e indicador**, inclusive no celular.
- [ ] Timeline 30/60/90 traz atividades e decisões, sem promessa de leads no primeiro mês.
- [ ] Métricas separadas entre marketing, operação comercial e dados dependentes do cliente.
- [ ] Meta Ads e leilão explicados sem assegurar retorno proporcional à verba.
- [ ] Audiovisual terceirizado com aprovação/cotação separada e fluxo de execução claro.
- [ ] Preços e escopo batem **com contrato e Canva verificados**, inclusive FAQ, simulador e texto copiado.
- [ ] Logo oficial incorporada apenas com asset autorizado, sem redesenho.
- [ ] Todas as interações funcionam por toque/teclado; sem excesso de movimento e sem rolagem horizontal.
- [ ] Reprodução de impressão/PDF e preview Codespaces verificadas; produção preservada até aprovação.
- [ ] Markdown compartilhado e PR contêm histórico, divergências e evidências de teste.

## H. Pendente antes de declarar concluído

1. **Contrato** mencionado pelo responsável, ainda não inspecionado aqui.
2. Arquivo original de logo disponibilizado ao **ambiente do Claude**, além da imagem vista nesta conversa. **Em 02/11/2026 continua ausente** do repositório e do Codespace.
3. Confirmação comercial das quantidades exatas de peças/vídeos, bônus e responsabilidades de painel/rebranding.
4. ~~Screenshots e inspeção visual do site ao vivo.~~ **Feito em 02/11/2026** (seção I).
5. Aprovação do protótipo e da versão final para merge/publicação.
6. **Gestão de Meta Ads na Presença Ampliada:** o texto do Canva registrado na seção 3 do estado do projeto não lista "Meta Ads" entre os itens da Presença Ampliada, embora o Econômico e o Essencial listem. O protótipo reproduz a lista como registrada; confirmar se é omissão do texto extraído.
7. **Prazo de 48 horas úteis do bônus:** consta no `AGENTS.md`, mas não na conferência do Canva. O protótipo não o cita até confirmação.

## I. Auditoria visual do HTML atual (02/11/2026, Claude Code)

**Alvo:** `index.html` da branch `docs/alinhamento-chatgpt-claude-20261101` (igual ao da `main` após o merge do PR #1), servido localmente e aberto no Chromium headless em **1440×900** e **390×844**. Capturas: `docs/capturas/antes-1440x900.jpg` e `docs/capturas/antes-390x844.jpg`.

**Skills usadas nesta sessão** (instaladas no ambiente e lidas antes do trabalho): `design:design-critique`, `design:accessibility-review`, `design:ux-copy` e `design:design-system`. **Não há skill específica de animação ou de testes de frontend instalada.** Os testes foram feitos com Playwright 1.49.1 + Chromium, instalados só na pasta temporária da sessão, **sem dependência adicionada ao repositório**.

| Achado | Evidência | Severidade |
| --- | --- | --- |
| Primeira informação concreta é um preço divergente do Canva | Cartão do hero: "A partir de R$ 1.100" | 🔴 Crítico |
| A primeira tela não diz quem faz o marketing e quem fecha as vendas | Hero com pergunta genérica "O que a Real Polar ganha" | 🔴 Crítico |
| Conteúdo longo e linear | ~1.350 palavras; 6,4 telas no desktop e 12,9 no celular; no celular, processo começa na tela 6,6 e dúvidas na 9,2 | 🟡 Moderado |
| Navegação some no celular | Em 390px restam a marca e o botão "Imprimir / PDF" | 🟡 Moderado |
| Alvos de toque menores que 44px | 12 no desktop e 7 no celular (links do menu, filtros do FAQ) | 🟡 Moderado |
| Sem mapa de caminhos, cronograma de 90 dias, funil de métricas e fluxo do audiovisual | Nenhum componente equivalente; 0 `@keyframes` | 🟡 Moderado |
| Funcionando | Sem erros de console; sem rolagem horizontal; FAQ, busca, filtros, simulador, copiar e impressão funcionais (testes do PR #1) | ✅ |

**Confirmação dos achados estáticos (seção B):** todos confirmados no navegador. Adicionados: a navegação ausente no celular e os alvos de toque pequenos.

## J. Sistema de design do protótipo

Tokens derivados do CSS existente e da direção da seção E. **Não são hex oficiais da marca**; substituir quando houver identidade aprovada.

| Grupo | Tokens |
| --- | --- |
| Azul-marinho | `--navy-950 #08192a`, `--navy-900 #0c2235`, `--navy-800 #123049`, `--navy-700 #1b4260` |
| Prata e cinzas | `--silver-50 #f5f7f9` a `--silver-700 #4a5a66` |
| Azul frio (destaque) | `--glacial-300 #9fe0ea`, `--glacial-400 #6fcbdb` (sobre fundo escuro), `--glacial-600 #14708a` (sobre fundo claro) |
| Responsabilidade | Marketing = azul frio (`--mkt`); Real Polar = azul-marinho (`--rp`); compartilhado = os dois |
| Tipografia | Fonte do sistema; títulos 28 a 56px com `clamp`; corpo 15 a 18px; rótulos em caixa alta 12px |
| Movimento | `--dur .32s`, `--dur-fast .16s`, curva `cubic-bezier(.2,.7,.2,1)`; tudo desligado com `prefers-reduced-motion` |
| Alvos | Mínimo de 44px em links, botões, abas e campos |

| Componente | Uso | Acessibilidade |
| --- | --- | --- |
| Dois polos | Hero: Equipe de marketing ↔ Real Polar, com conexão animada nos dois sentidos | Texto alternativo descrevendo a troca de informações |
| Mapa de caminhos | Perguntas (`aria-pressed`) → etapas numeradas ligadas por linha que acende até a etapa ativa → painel com O que fazemos / Por que / Responsável / O que medimos | `aria-current="step"`, setas do teclado, painel `aria-live`, botão "Ver próximo passo". No celular o painel aparece logo abaixo da etapa ativa |
| Cronograma 90 dias | Abas Mês 1/2/3 com barra de progresso; Entregamos / Aprendemos / Próxima decisão | `role="tablist"`, setas, Home/End |
| Funil de métricas | 6 etapas clicáveis, cores separando indicador de marketing e resultado comercial | Botões `aria-pressed`, painel `aria-live` |
| Comparador de verba | Orçamento menor ↔ maior: quantidade de testes simultâneos (ilustrativo, sem números) | Botões `aria-pressed`, texto lido por leitor de tela |
| Trilha do audiovisual | 5 passos com responsável + abas dos 4 serviços externos | Abas verticais acessíveis |
| Planos e simulador | Valores do Canva; gestão, verba e captação em linhas separadas | Rótulos em todos os campos |

**Wireframe da ordem implementada** (desktop; no celular tudo vira uma coluna):

```
[faixa: protótipo para revisão interna]
[REAL POLAR]                  Dúvidas · 90 dias · Métricas · Anúncios · Audiovisual · Planos
01 HERO       Pergunta principal
              [Equipe de marketing] ⇄ [Real Polar]
02 CAMINHOS   (pergunta)(pergunta)(pergunta)
              ① ─ ② ─ ③ … ⑧          | Etapa n de N · responsável
              linha acende até a ativa | O que fazemos / Por quê / Quem / Medimos
                                       | [Etapa anterior] [Ver próximo passo]
03 90 DIAS    [Mês 1][Mês 2][Mês 3]  ▬▬▬▬▬▬▬░░░
              Entregamos | Aprendemos | Próxima decisão
04 MÉTRICAS   funil (marketing ▸ fronteira ▸ Real Polar) | painel da métrica
05 VERBA      leilão em 2 parágrafos | [menor|maior] → barras de testes
06 AUDIOVIS.  5 passos com responsável → abas dos 4 serviços externos
07 PLANOS     3 cartões (gestão / verba / captação) → simulador → 4 perguntas
08 PRÓXIMO    5 decisões de alinhamento → [Copiar resumo] [Imprimir]
```

## K. Protótipo implementado

- **Arquivo:** `prototipo/index.html`, HTML/CSS/JS nativos, sem dependências externas, com `noindex`. Faixa no topo identifica a página como protótipo.
- **Conteúdo comercial:** somente o registrado na seção 3 de `docs/ESTADO_DO_PROJETO.md`: Econômico R$ 1.280, Essencial R$ 2.100, Presença Ampliada R$ 3.200, captação de referência R$ 1.200/diária sujeita a cotação, Meta Ads à parte (referência a partir de R$ 15/dia) e período mínimo de três meses. Google Meu Negócio, SEO, rebranding e painel interno aparecem nos planos em que o Canva os cita; painel, rebranding e bônus estão marcados como "a definir em contrato". **Não aparecem** quantidades de artes/vídeos, o prazo de 48 horas do bônus nem valores antigos do HTML.
- **Canva:** não acessível nesta sessão (o link redireciona para uma página do Canva que responde 403; o conector do Canva exige autorização). O conteúdo depende da conferência registrada no estado do projeto em 01/11/2026.
- **Logo:** não há arquivo da logo no repositório nem no Codespace. O protótipo usa a marca em texto "REAL POLAR", sem símbolo substituto.

## L. Testes do protótipo (02/11/2026)

Playwright + Chromium em 1440×900 e 390×844, servidor local e porta 5500 do Codespaces. **48 verificações automáticas, todas aprovadas na última execução:**

- Sem rolagem horizontal e sem erros de console nas duas larguras.
- Mapa: as 18 etapas dos 3 caminhos clicadas, cada uma com os 4 campos preenchidos; "Ver próximo passo" percorre até o fim e volta; linhas acendem até a etapa ativa; setas do teclado navegam; no celular o painel abre sob a etapa ativa.
- Abas de 90 dias (clique, setas, End) e 4 abas do audiovisual; funil com 6 etapas; comparador de verba (2 × 4 testes).
- Simulador: 1.280 + 31 × 20 + 1 × 1.200 = R$ 3.100,00 com dias limitados a 31; vazio e negativo contam como zero; 3.200 + 30 × 15 = R$ 3.650,00.
- Copiar resumo, FAQ, impressão/PDF (lista as 18 etapas e mostra todos os meses e serviços).
- `prefers-reduced-motion`: sem transições nem animações, conteúdo visível, painel troca imediatamente.
- Contraste ≥ 4,5:1 (≥ 3:1 em texto grande) e alvos de toque ≥ 44px.
- Conferência textual: valores do Canva presentes; nenhum valor antigo; nenhuma quantidade ou prazo não confirmado; sem promessa de resultado nem condição contratual inventada.

**Defeitos encontrados e corrigidos durante os testes:** botão "Imprimir" do fechamento com fundo cinza padrão do navegador (texto branco ilegível); menu do celular com os primeiros itens cortados e sem rolagem; esmaecimento escondendo "Planos" no desktop; observações dos planos quebrando em coluna separada; área de toque da marca com 24px.

**Não testado:** leitores de tela reais (VoiceOver/NVDA), zoom de 200% e navegadores além do Chromium.

## M. Segunda rodada: refinamento do protótipo (02/11/2026)

**Pedido:** deixar a apresentação mais visual, curta e guiada pela navegação; animações que acompanhem a rolagem; mapas conectados em vez de listas; sem "Esclarecimentos da proposta", sem Canva e sem "Diagnóstico LKT" na interface. Branch `design/prototipo-esclarecimento`, PR #3. **`index.html` principal e produção não foram alterados.**

**Briefing incompleto:** o texto colado chegou cortado na seção 11 (em "Pode variar conforme: - Des…") e a versão resumida termina em "Serviço…". As seções seguintes, se existiam (provavelmente investimentos/planos e entrega), **não foram lidas**. Os planos foram mantidos como estavam, só com o texto ajustado. A lista de variação da diária usa "deslocamento, profissionais envolvidos e equipamentos", termos já registrados no briefing anterior; **confirmar**.

### M.1 Diagnóstico da primeira versão do protótipo

| Problema | Onde | Mudança |
| --- | --- | --- |
| O "mapa" era uma lista numerada com painel lateral | Seção de dúvidas | Roteiro com caminhos SVG reais entre as etapas |
| Quatro rótulos repetidos em toda etapa (O que fazemos / Por quê / Quem / Medimos) | Painel do mapa | Uma frase contextual + responsável + indicador |
| Página estática | Todas | Revelação progressiva, barra de progresso, menu com seção ativa, conexões animadas |
| Termos internos e de ferramenta na interface | Hero, planos, 90 dias | Removidos "Esclarecimentos da proposta", "Canva" e "Diagnóstico LKT" |
| Três cartões grandes no cronograma | 90 dias | Linha do tempo com 3 marcos e um painel curto por mês |
| Funil único para qualquer objetivo | Métricas | Seletor de objetivo: Posicionamento, Contatos, Projetos |
| Verba sem dizer que é tráfego pago | Anúncios | Título e frase dizem Instagram/Facebook e separação da mensalidade |
| "Profissional em São Paulo capta"; edição podia parecer cobrada à parte | Audiovisual | Fluxo de 6 etapas com responsáveis; edição do plano × produção adicional × terceiros |

### M.2 O que foi implementado

- **Motor de roteiro (`Roadmap`)**, usado nos 4 mapas e no audiovisual. As etapas ficam num grid; os caminhos SVG são calculados a partir da linha e coluna de cada etapa e redesenhados quando a largura muda.
  - Desktop: percurso em "serpentina" (5 ou 6 por linha). O mapa de duas trilhas mostra marketing em cima e Real Polar embaixo, com ligações tracejadas entre elas.
  - Celular: uma coluna com a explicação **logo abaixo da etapa tocada**; o mapa de duas trilhas vira duas colunas, com ligações laterais.
  - Ao clicar: a etapa fica azul-marinho, o caminho de chegada acende, o caminho até a próxima etapa é **desenhado** (traço animado) e a próxima etapa recebe contorno. As etapas anteriores ficam marcadas.
  - Etapa ativa com `aria-current="step"`, setas do teclado, botões "Etapa anterior" e "Próxima etapa".
- **Mapas:** 1) atrair clientes (9 etapas, com aviso de que o Econômico tem foco mais restrito e de que Meta Ads entra "quando previsto no plano"); 2) por que marketing (duas trilhas de 5 etapas + 3 ligações reais: projetos viram conteúdo; oportunidades chegam ao atendimento; negociação retorna ao acompanhamento); 3) por que 90 dias (5 decisões, com o mês de cada uma); 4) como medir (6 etapas, com link para a seção de indicadores).
- **90 dias:** pergunta como título, resposta curta em destaque, linha do tempo com 3 marcos que avança e marca os meses anteriores; por mês, objetivo + ações em etiquetas + aprendizado esperado.
- **Indicadores:** seletor de 3 objetivos; a cadeia Exposição → Resultado comercial acende só as etapas pertinentes, em sequência; marcação de onde começam os dados da Real Polar; exemplos do briefing (WhatsApp, site, projeto de maior valor) sem números.
- **Anúncios:** comparação menor × maior investimento com 6 públicos ilustrativos (2 × 5 em teste simultâneo); três pontos por cenário; frase "Investir mais pode ampliar os testes, mas não garante mais vendas"; leilão em uma frase.
- **Audiovisual:** roteiro de 6 etapas (definição, planejamento, orçamento e aprovação, captação por profissional terceirizado, pós-produção, aprovação e publicação); três faixas que distinguem edição prevista no plano, produções adicionais e serviços de terceiros; 4 profissionais externos opcionais; referência de R$ 1.200 por diária.
- **Movimento:** revelação progressiva com `IntersectionObserver` (opacidade + 14px, 0,5s, atraso em sequência); barra de progresso de 3px no topo; menu destaca a seção atual; microinterações (pressionar botões, etapas, abas e escolha de plano; total do simulador pulsa quando muda). Sem bloqueio de rolagem, sem bibliotecas.
- **Movimento reduzido:** sem a classe `motion`, todo o conteúdo aparece já visível; transições e a animação contínua do hero ficam desligadas; os mapas respondem na hora, com a conexão já desenhada.
- **Planos:** botão "Simular este plano" seleciona o cartão e o simulador; trocar o plano no simulador destaca o cartão. Nova pergunta: "A edição dos vídeos é cobrada à parte?".
- **Aviso de ambiente de teste:** mantido no topo, marcado com `data-internal`. **Remover ao promover para a página do cliente.**

### M.3 Testes da segunda rodada

Playwright + Chromium, em **1440×900, 768×1024 e 390×844**, mais um contexto com movimento reduzido. **111 verificações automáticas, todas aprovadas na última execução local.** Destaques:

- Geometria: em cada largura, o início e o fim de **todos os caminhos SVG** (4 mapas + audiovisual) encostam nas etapas que eles ligam.
- As 30 etapas dos 4 mapas clicadas em cada largura: destaque, conexão de saída desenhada e explicação correta; no celular, painel a menos de 40px da etapa tocada.
- Exemplo do briefing: "Distribuir o conteúdo" desenha a conexão até "Site ou WhatsApp".
- Barra de progresso (meio da página = 0,50), menu com a seção atual, revelação ao entrar na tela e nenhum conteúdo oculto depois de rolar.
- 90 dias (clique e teclado, linha em 50% e 100%), indicadores (etapas certas por objetivo), anúncios (2 × 5), planos ↔ simulador, cálculos, copiar, perguntas, impressão (30 etapas + 3 objetivos no PDF).
- Sem rolagem horizontal, sem erros de console, alvos ≥ 44px, contraste ≥ 4,5:1.
- Conferência textual: sem Canva, sem "Esclarecimentos da proposta", sem LKT, sem "capta"; valores 1.280 / 2.100 / 3.200 / 1.200 / 15 mantidos; nenhum valor antigo, quantidade não confirmada, promessa ou número fictício.

**Defeitos encontrados e corrigidos nesta rodada:** setas inclinadas e pontas soltas quando etapas da mesma linha tinham alturas diferentes (o motor passou a decidir a direção pela posição no grid, e etapas da mesma linha ficam com a mesma altura); ligações entre trilhas espremidas no celular (vão maior e saída lateral); transição de revelação aparecendo na impressão.

**Não testado:** leitores de tela reais, zoom de 200%, Safari e Firefox.


### M.4 Ajuste obrigatório: metas de conversão nos 90 dias (02/11/2026)

**Pedido do responsável:** manter a explicação de diagnóstico, testes, validação e ajustes; acrescentar um aviso pequeno, integrado à linha do tempo, dizendo que os objetivos de conversão são trabalhados a partir do Plano Essencial; diferenciar o foco dos planos; não dizer que a conversão começa só depois de 90 dias; não prometer quantidades.

**Implementado** em `prototipo/index.html`, dentro da linha do tempo, logo abaixo dos três marcos:

- Faixa tracejada que vai do mês 1 ao mês 3, mostrando que as metas de conversão acompanham o período inteiro. Ela se desenha da esquerda para a direita quando entra na tela, e o ícone de alvo aparece em seguida.
- Frase: "Metas de conversão desde o início, a partir do Plano Essencial. Os testes ajudam a estabelecer e ajustar metas realistas, sem prometer quantidades."
- Etiquetas cumulativas por plano: Econômico = posicionamento e presença digital; Essencial = + prospecção e objetivos de conversão; Presença Ampliada = + estratégia mais abrangente e acompanhamento dos resultados.
- Sem caixa de fundo; 132px de altura no desktop, 167px no tablet e 233px no celular. **Primeira versão descartada:** um bloco com fundo, fora da linha do tempo, com 176px no desktop e 355px no celular, que não atendia a "pequeno e discreto".
- Coerência: a etapa "Definir metas" do mapa de 90 dias e o resumo copiado passaram a dizer que, a partir do Essencial, os objetivos de conversão orientam os testes desde o início.
- Com movimento reduzido, faixa e ícone aparecem já completos, sem animação.

**Testes:** a bateria completa passou de 111 para **123 verificações, todas aprovadas** nas larguras 1440, 768 e 390 e com movimento reduzido. Novas verificações: entrada animada ao rolar, posição dentro da linha do tempo (14px abaixo dos marcos), faixa alinhada do mês 1 ao mês 3 e concluída, aviso visível em qualquer mês, impressão, ausência de animação com movimento reduzido. Conferência textual: nenhuma frase do tipo "só após 90 dias" e nenhuma quantidade de conversões.

**Origem do conteúdo:** o foco de cada plano e o termo "prospecção" no Essencial vêm do pedido do responsável em 02/11/2026, não do texto registrado do Canva (seção 3 do estado do projeto). Conferir com o contrato.
