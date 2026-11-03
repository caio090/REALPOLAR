# REAL POLAR | Auditoria do HTML, direção de UX e briefing de execução no Claude

> **Estado atual (02/11/2026, V8):** V5 publicada na raiz pelo PR #4. Auditoria e refinamentos desta rodada em [RELATORIO_V8.md](RELATORIO_V8.md), branch `refinamento/proposta-v8`; sem merge/produção nesta rodada. Os achados originais abaixo são históricos.

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

## N. Terceira rodada: revisão comercial definitiva (02/11/2026)

**Problema apontado pelo responsável:** a apresentação explicava demais o funcionamento do marketing e não deixava claro o que o cliente está comprando. **Medição antes da mudança** (Chromium, movimento reduzido): o primeiro preço aparecia na **tela 8,0** no desktop e na **tela 11,3** no celular; havia 11 menções à operação da Real Polar (visita técnica, orçamento, negociação, fechamento) e 4 mapas de jornada antes dos planos.

**Skills usadas:** `design:design-critique`, `design:ux-copy`, `design:design-system` e `design:accessibility-review` (instaladas e lidas na sessão). Não há skill de motion nem de testes de frontend; testes com Playwright + Chromium fora do repositório.

### N.1 Nova estrutura

| # | Seção (`id`) | Conteúdo |
| --- | --- | --- |
| 1 | Abertura (`inicio`) | "O marketing da Real Polar, sob nossa gestão." + subtítulo + botões "Ver os planos" / "Conhecer os serviços" + os três preços clicáveis |
| 2 | Planos (`planos`) | 3 cartões com foco, serviços com nomes padronizados, limites; Presença Ampliada em destaque ("Mais completo"); faixa "Fora da mensalidade" |
| 3 | Serviços (`servicos`) | Mapa mental com nó central e 9 ramos + seletor de plano |
| 4 | Execução (`execucao`) | 4 etapas conectadas: planejamento, produção, publicação e gestão, análise e ajustes |
| 5 | Audiovisual (`audiovisual`) | Fluxo de 5 passos, 5 pontos curtos e referência de R$ 1.200/diária |
| 6 | 90 dias (`noventa`) | Estruturar, testar, avaliar (uma frase cada) + **aviso de metas de conversão preservado** |
| 7 | Acompanhamento (`acompanhamento`) | Seletor Posicionamento / Prospecção / Resultados comerciais |
| 8 | Investimento (`investimento`) | Simulador com 3 grupos separados + 6 perguntas rápidas |
| 9 | Próximo passo (`proximo`) | 5 passos para contratar, copiar resumo, imprimir |

**Resultado:** primeiro cartão de plano na **tela 2,2** (desktop e celular); página com 9,0 telas no desktop e 13,9 no celular.

### N.2 O que foi removido

- Título abstrato "Quem cuida de encontrar o próximo projeto…" e a comparação de responsabilidades na abertura.
- Os 4 mapas de jornada (atrair clientes, por que marketing em duas trilhas, por que 90 dias, como medir) e o motor de roteiro em trilha.
- Explicações da operação da Real Polar. Ficou só a frase comercial "A gestão de marketing não inclui atendimento comercial, elaboração de orçamentos técnicos ou fechamento de contratos", na faixa "Fora da mensalidade" e nas perguntas rápidas.
- A pergunta duplicada "Por que não definimos metas fixas nos primeiros três meses?".
- O funil de 6 etapas e a seção separada de verba (a verba agora está explicada no simulador).
- As abas mensais dos 90 dias e as abas de profissionais do audiovisual.
- Os rótulos repetidos "O que fazemos / Por que fazemos / Quem é responsável / O que medimos".

### N.3 Mapa mental de serviços

- Nó central "Nossa gestão de marketing" e 9 ramos: Posicionamento, Redes sociais, Conteúdo e design, Roteiro e edição, Anúncios Meta Ads, Presença no Google, Análise e relatórios, Identidade visual e Estrutura digital (as duas últimas com "Quando contemplada").
- Desktop (largura ≥ 760px): disposição radial com curvas SVG do centro até cada ramo. Tablet e celular: lista com tronco à esquerda e ramificações; o detalhe abre logo abaixo do serviço tocado.
- Ao tocar em um serviço: ramo destacado, ligação acesa, nome comercial da entrega, frase curta, limite (quando há) e disponibilidade por plano.
- Seletor "Todos os serviços / Econômico / Essencial / Presença Ampliada": cada ramo recebe um estado, entre **Incluído**, **Versão básica**, **A confirmar** (borda tracejada laranja) e **Não listado** (fundo cinza, borda tracejada, ligação apagada). A descrição do plano aparece acima do mapa.
- Os botões "Ver no mapa de serviços" dos cartões abrem o mapa já filtrado pelo plano.
- Animação: as ligações são desenhadas do centro para fora, em sequência, quando o mapa entra na tela. Com movimento reduzido, aparecem prontas.
- Impressão: matriz de 9 serviços × 3 planos.

| Serviço | Econômico | Essencial | Presença Ampliada |
| --- | --- | --- | --- |
| Estratégia de posicionamento | Versão básica (foco do plano, formato enxuto) | Incluído | Incluído |
| Gestão do perfil e das publicações | Incluído | Incluído | Incluído |
| Artes com design profissional | Versão básica (peças com apoio de IA e orientação da equipe) | Incluído | Incluído + bônus de artes extras |
| Vídeos com roteiro e edição profissional | Não listado | Incluído | Incluído |
| Gestão de anúncios Meta Ads | Versão básica (foco compatível com a proposta enxuta) | Incluído | **A confirmar** |
| Google Meu Negócio e SEO | Não listado | Versão básica (revisão básica do Google Meu Negócio) | Incluído (gestão do perfil e SEO) |
| Análise e relatórios | Não listado | Relatório mensal | Incluído; **periodicidade a confirmar** |
| Rebranding da identidade da marca | Não listado | Não listado | Incluído (começa com briefing de identidade) |
| Painel central interno no site | Não listado | Não listado | Incluído (funcionalidades e prazo em contrato) |

"Não listado" significa que o item não aparece na lista do plano, sem afirmar proibição contratual.

### N.4 Testes (114 verificações automáticas, todas aprovadas)

Larguras 1440, 768 e 390, mais um contexto com movimento reduzido:

- Ordem comercial das seções; preços na abertura; planos na tela 2,2.
- Mapa: 9 ramos ligados ao centro por SVG, sem sobreposição; 9 serviços clicados com destaque, ligação acesa e disponibilidade; estados por plano conferidos um a um nos três planos; esmaecimento e conexões apagadas; botão do cartão abre o mapa filtrado; setas do teclado.
- Execução e 90 dias revelados ao rolar; aviso de conversão com o texto exato e a faixa animada.
- Acompanhamento por objetivo; menu com a seção atual; barra de progresso.
- Simulador: botões de plano ↔ cartões, cálculos (3.650, 3.100 e 1.280 nos casos de borda), destaque na mudança, rótulo "Investimento estimado no período".
- Resumo copiado (planos, "a confirmar", fora da mensalidade), perguntas rápidas, impressão com matriz de serviços.
- Sem rolagem horizontal e sem erros de console; alvos ≥ 44px; contraste ≥ 4,5:1, inclusive nos serviços "Não listado" (6,3:1).

**Conferência textual:** as 10 perguntas do item 16 do briefing têm resposta localizável na página. Confirmados ainda: nenhum valor antigo, nenhuma promessa, nenhum número fictício, nomenclatura consistente entre os cartões, sem Canva, LKT ou "capta".

**Defeitos encontrados e corrigidos:** resumo com texto interno no item pendente; serviços "Não listado" com contraste de 2,8:1 (a opacidade foi trocada por fundo cinza); abertura longa demais no celular (os planos estavam na tela 3,7); linha da execução passando da última etapa.

**Não testado:** leitores de tela reais, zoom de 200%, Safari e Firefox.

## O. Quarta rodada: explicador interativo por entregável (02/11/2026)

**Base:** branch `design/prototipo-esclarecimento`, commit `396a403` (PR #3, que depende do PR #2, ainda aberto). **Briefing:** "Prompt mestre" com capítulos numerados. **A mensagem chegou cortada no capítulo 07, na ficha S01** (limite de 50 mil caracteres). O TXT original não foi encontrado no repositório, nas branches nem no Codespace. Foram aplicados integralmente os capítulos 01 a 06: regras, 36 fatos comerciais (F01–F36), critérios CC-001 a CC-020, os 7 estados, os 10 blocos e os 30 requisitos do pop-up. **Não recebidos:** fichas S02 em diante e capítulos seguintes. Os textos das fichas foram escritos seguindo o formato da S01 e os fatos do capítulo 02. **Os "três módulos do painel" (F34) não foram descritos, porque não chegaram.**

**Skills:** `design:design-critique`, `design:ux-copy`, `design:design-system` e `design:accessibility-review`. Não há skill de motion nem de testes; os testes usam Playwright + Chromium em `~/realpolar-qa/`, fora do repositório e sem dependência adicionada.

### O.1 Arquitetura: fonte única

O comparativo `#cmp`, em HTML, é **a única fonte dos serviços**. Cada linha (`data-id` S01–S11 e X01–X03) traz:
- nome comercial;
- por plano: estado (`data-st`), rótulo, observação e origem interna (`data-src`: `canva` ou `conflito`);
- explicação em `<details>`, com resumo, papel da equipe, até 3 passos, resultado esperado, limites, dependências, custos externos e exemplo ilustrativo.

Sem JavaScript, a tabela fica visível e legível (requisito MODAL-030). Com JavaScript, a página lê a tabela e gera os **cartões dos planos**, o **mapa**, a faixa **fora da mensalidade**, o **pop-up** e o **resumo copiado** (requisito MODAL-025: nenhum texto de serviço duplicado entre HTML e JS).

### O.2 Estados comerciais (capítulo 04)

| Estado | Rótulo ao cliente | Uso |
| --- | --- | --- |
| incluido | Incluído | Previsto no plano pela proposta |
| limitado | Limitado | Existe, com abrangência menor (ex.: revisão básica do Google Meu Negócio no Essencial) |
| pendente | Previsto | Consta na proposta, com detalhes em contrato (rebranding, painel, bônus, gestão do Google Meu Negócio no Ampliado) |
| conflito | A confirmar | Fontes divergem; não afirmar obrigação (Meta Ads e periodicidade dos relatórios no Ampliado) |
| opcional | Opcional | Contratação à parte, com orçamento e aprovação (captação, storymaker, drone, apresentador) |
| fora | Fora da mensalidade / Pago à parte | Não faz parte da mensalidade do plano (inclui a verba de anúncios) |
| depende | Depende de insumos | Definido no sistema, não usado nesta versão; as dependências aparecem na aba "Como funciona" |

Cada estado tem texto e forma própria (marcador cheio, meio cheio, vazio, losango, "+", traço), não só cor.

### O.3 Matriz atual

| ID | Serviço | Econômico | Essencial | Presença Ampliada | Origem |
| --- | --- | --- | --- | --- | --- |
| S01 | Gestão do perfil e das publicações | Limitado (operação enxuta) | Incluído | Incluído | F10, F18, F25 |
| S02 | Estratégia de posicionamento | Fora | Incluído | Incluído | F07, F15 |
| S03 | Artes com design profissional | Limitado (IA dirigida pela equipe, fotos da Real Polar) | Incluído | Incluído | F08, F16, F27, F28 |
| S04 | Vídeos com roteiro e edição profissional | Fora | Incluído | Incluído | F09, F17 |
| S05 | Gestão de anúncios Meta Ads | Incluído | Incluído | **A confirmar** | F11, F26, **F30** |
| S06 | Google Meu Negócio | Fora | Limitado (revisão básica) | Previsto | F12, F19 |
| S07 | SEO | Fora | Fora | Incluído | F20 |
| S08 | Relatórios e análise de resultados | Fora | Incluído (mensal) | **A confirmar** (periodicidade) | F13, F21, **F23/F32** |
| S09 | Rebranding da identidade da marca | Fora | Fora | Previsto (com briefing de identidade) | F14, F33 |
| S10 | Painel central interno no site | Fora | Fora | Previsto (requisitos em contrato) | F22, F34 |
| S11 | Bônus de artes extras | Fora | Fora | Previsto (limites em contrato) | F24 |
| X01 | Verba de anúncios (Meta) | Pago à parte | Pago à parte | Pago à parte | F05 |
| X02 | Captação presencial | Opcional | Opcional (R$ 1.200/diária) | Opcional (R$ 1.200/diária) | F04, F29 |
| X03 | Storymaker, drone e apresentador | Opcional | Opcional | Opcional | briefings anteriores |

**Mudança em relação à rodada N:** a estratégia de posicionamento do Econômico passou de "Versão básica" para "Fora da mensalidade", porque F25–F28 não a listam. O foco do plano ("presença digital e posicionamento") continua no cartão.

### O.4 Pop-up explicador (capítulo 06)

Um único `<dialog>` nativo, preenchido a partir da fonte única. Ele abre a partir de qualquer serviço: cartões, mapa, comparativo, faixa de custos externos e audiovisual.

- **Conteúdo:**
  - cabeçalho com grupo e nome do serviço;
  - seletor de plano interno, que não muda a escolha da página (MODAL-028);
  - estado no plano;
  - abas "O que recebo", "Como funciona", "Limites" e "Comparar planos";
  - navegação anterior/próximo entre os 14 itens, sem fechar.
- **Comportamento:**
  - fecha por botão, Esc ou clique fora (este só em telas ≥ 641px, para evitar toques acidentais no celular);
  - o foco volta ao botão de origem;
  - o fundo fica travado e a posição de rolagem é restaurada;
  - no celular, abre como folha a partir da base;
  - sem animação com movimento reduzido.
- **Requisito MODAL-022 (sem depender da área de transferência):** atendido. O botão "Copiar resumo" é opcional e fica fora do pop-up.

### O.5 Estrutura da página (capítulo 05)

Abertura → Planos (listas geradas + "Não incluído neste plano" + fora da mensalidade) → Serviços (Mapa / Lado a lado) → Audiovisual → 90 dias (aviso de conversão preservado) → Acompanhamento → Investimento (simulador + 2 perguntas não respondidas nos pop-ups) → Próximo passo. **Removida:** a seção "Execução", porque cada pop-up tem o "Como funciona" do serviço. O plano ativo (Presença Ampliada por padrão) fica sincronizado entre filtro do mapa, cartões e simulador.

### O.6 Testes (145 verificações automáticas, todas aprovadas)

Larguras 1440, 768 e 390, mais um contexto com movimento reduzido e outro **sem JavaScript**:

- **Sem JS:** comparativo com os 14 serviços, estados, explicações e preços visíveis.
- **Fonte única:** cartões iguais ao comparativo (Econômico 3, Essencial 7, Presença Ampliada 11 serviços); estados do mapa iguais aos do comparativo nos três planos; nenhum `id` duplicado.
- **Pop-up:**
  - abre por cartão, mapa, comparativo, faixa externa e audiovisual, com nome acessível e foco dentro;
  - 25 tabulações sem sair;
  - 4 abas por clique e setas;
  - troca de plano interna sem alterar a página;
  - Esc, botão Fechar e clique fora (no computador; no celular o toque fora não fecha) devolvem o foco;
  - fundo travado e rolagem restaurada;
  - folha inferior no celular;
  - varredura completa de **14 serviços × 3 planos × 4 abas** sem vazio, "undefined" ou "NaN";
  - primeira frase de cada pop-up com até 2 frases;
  - "Ver o plano" leva ao cartão sem trocar a escolha.
- **Mapa:** 11 serviços ligados ao centro, sem sobreposição; Mapa ↔ Lado a lado por clique e setas.
- **Simulador:** sincronizado com mapa e cartões; cálculos 2.550, 3.920 e 2.100; sem NaN.
- **Geral:**
  - aviso de conversão preservado; revelação ao rolar; menu com seção atual;
  - sem rolagem horizontal nem erros de console;
  - alvos ≥ 44px na página e no pop-up; contraste ≥ 4,5:1 na página, no pop-up e nas etiquetas de estado;
  - impressão com o comparativo e as explicações.

**Conferência textual:** F01–F06, F13, F23/F30/F32 (como "a confirmar", sem expor a divergência ao cliente), F29, F33, F34 (nenhum módulo inventado), CC-009, CC-011 a CC-014, CC-017 a CC-019 e F36.

**Defeitos encontrados e corrigidos:**
- os cartões listavam os 11 serviços em todos os planos (filtro comparava o objeto, não o estado), um erro comercial grave detectado antes do commit;
- texto duplicado no estado "A confirmar";
- regra CSS que quebraria os contêineres flex/grid exibidos só com JavaScript;
- colunas da linha do tempo passando 5px da tela em 390px;
- comparativo comprimido no celular.

**Não testado:** leitores de tela reais (VoiceOver/NVDA), zoom de 200%, Safari e Firefox, e o teste com decisor não técnico (CC-001 a CC-020). **Capturas:** `docs/capturas/antes-r4-396a403-*` e `docs/capturas/depois-r4-*`.

## P. Quinta rodada: Adendo V2, pop-ups em três camadas (02/11/2026)

**Base real:** commit `e93f9ee`. O Adendo V2 foi escrito sobre `396a403`, anterior à 4ª rodada; a "lacuna crítica" do A01 (ausência de pop-ups) já estava resolvida em `12c0c57`. Esta rodada fez a auditoria dos AC01–AC40 sobre o código real e implementou o que faltava. A mensagem chegou cortada no capítulo 04 da V1 anexa; o Adendo A01–A09, que tem precedência, chegou completo.

### P.1 O que mudou

- **Dados (tabela `#cmp`):** cada linha ganhou `data-f="get"` (O que recebo, até 3 itens), `data-rel` (serviço relacionado), `data-f="qty"` (quantidade em contrato, em artes e vídeos) e, no painel, `data-f="hyp"` (3 possibilidades). Novo item **X00 Mensalidade de gestão** no grupo `investimento`. Os textos de vídeos, rebranding e painel seguem os exemplos do A02, e o bônus lista quantidade, formatos, rodadas de revisão e prazo como pendentes.
- **Pop-up em três camadas (A02/A05):**
  - Camada 1: título, uma frase e estado no plano, no cabeçalho.
  - Camada 2: abas "O que recebo", "Como funciona", "Limites e custos" e "Comparar planos".
  - Camada 3: no máximo 3 itens por aba, mais "Para quê", o custo, a quantidade e o link do serviço relacionado.
- **Painel (AC12):** "Possibilidades para o briefing" com 3 botões (Visão geral de atividades; Solicitações e oportunidades; Indicadores e relatórios). Cada um abre, no mesmo pop-up, um esquema visual rotulado "Ilustração · possibilidade para o briefing, não aprovada", sem dados, login, CRM ou prazo, e com "Voltar ao painel".
- **Simulador (AC15):** botões de informação "Entender mensalidade de gestão", "Entender verba de anúncios" e "Entender captação presencial", que abrem o pop-up no plano do simulador.
- **AC16 corrigido:** o filtro do mapa e o seletor de plano dentro do pop-up **não alteram mais o simulador**. Só "Simular este plano" e os botões do simulador mudam o orçamento. Antes, o filtro do mapa trocava o plano do simulador.

### P.2 Critérios de aceite (AC01–AC40)

| AC | Situação | Evidência |
| --- | --- | --- |
| 01–04 | Atendido | Todo item dos cartões é `<button>` e abre o pop-up com o título exato e o plano de origem |
| 05 | Atendido | Estado "Limitado" com a observação no cabeçalho (ex.: Econômico, operação enxuta) |
| 06 | Atendido | Bônus só no Presença Ampliada (teste) |
| 07, 11 | Atendido | Meta Ads e relatórios do Ampliado como "A confirmar"; nada pendente aparece como incluído |
| 08–10 | Atendido | Abas trocam o conteúdo sem fechar; dados de uma única tabela; comparação com 3 planos |
| 12 | Atendido | 3 possibilidades rotuladas como não aprovadas |
| 13 | Atendido | Frase do rebranding começa pelo briefing de identidade |
| 14 | Atendido | "Não é ilimitado"; quantidade, formatos, revisão e prazo em contrato; sem 48h |
| 15 | Atendido | Pop-ups próprios para mensalidade, verba e captação |
| 16–17 | Atendido | Mapa e pop-up não alteram o orçamento; "Simular este plano" altera |
| 18–21 | Atendido | Foco entra e volta; Tab preso no pop-up; Esc; clique fora no computador; corpo rolável com Fechar visível |
| 22–24 | Atendido | 390, 768 e 1440 sem rolagem horizontal nem sobreposição |
| 25 | **Parcial** | Zoom de 200% verificado (equivalente a 720×450). **Tamanho de fonte ampliado nas configurações do navegador não funciona:** as fontes estão em `px` |
| 26–29 | Atendido | Movimento reduzido, mapa, linha do tempo, filtro, menu, resumo copiado, impressão, console sem erros |
| 30 | Atendido | Cartões, mapa, pop-up e resumo vêm da mesma tabela |
| 31 | Atendido | Detalhes ficam nos pop-ups; a página não ganhou texto |
| 32, 37 | Atendido | Produção não alterada; sem merge |
| 33–36, 38 | Atendido | Testes reais desta rodada (abaixo); Markdown e README atualizados; link da prévia |
| 39 | Atendido | "Previsto · detalhes em contrato" e "A confirmar" separam item citado de requisito a definir |
| 40 | **Não testado** | Depende de leitura por um decisor não técnico |

### P.3 Testes desta rodada

**186 verificações automáticas, todas aprovadas** (Playwright + Chromium, em `~/realpolar-qa/t6.js`). Cobertura:
- larguras 1440, 768 e 390, mais zoom de 200%, movimento reduzido e página sem JavaScript;
- varredura de 15 itens × 3 planos × 4 abas, com 1 a 3 itens em "O que recebo" e em "Limites e custos";
- hipóteses do painel (rótulo, esquema, pop-up único, retorno do foco);
- serviço relacionado trocando o conteúdo no mesmo pop-up;
- botões de informação do simulador;
- AC16;
- primeira camada visível sem rolar no celular (as abas terminam em 454px de 844px).

Conferência textual: sem Canva, LKT ou marcadores internos; sem "quinzenal", "ilimitado", 48h, login, CRM, brandbook ou quantidades inventadas.

**Defeitos encontrados e corrigidos nesta rodada:** filtro do mapa alterando o simulador (AC16); rótulo "não aprovada" saindo de vista ao abrir uma hipótese no celular; link de serviço relacionado centralizado.

**Não testado:** leitores de tela reais, iOS e Android físicos, Safari e Firefox, tamanho de fonte ampliado e leitura por decisor (AC40).
**Commits:** a interface entrou em um único commit (`1186405`). Separar dados e componente deixaria um commit intermediário quebrado, porque o novo formato dos dados removeu campos que o pop-up anterior lia.
**Capturas:** `docs/capturas/depois-r5-*`.

## Q. Sexta rodada: Prompt Mestre V3, edição avulsa, barra e logo (02/11/2026)

**Base:** `aa1b450`. O V3 citava `e93f9ee` como HEAD observado; os commits do Adendo V2 já estavam na branch e foram preservados. A mensagem chegou cortada no capítulo 18 (matriz de regressão, caso SM-0022). Os capítulos 01–17 chegaram completos, e os casos faltantes seguem a mesma fórmula, que foi usada como oráculo.

### Q.1 Decisão comercial nova

**Edição de vídeos avulsa no Econômico: R$ 180 por vídeo**, quando solicitada. É uma **decisão do responsável em 02/11/2026**, não consta no Canva e **precisa ser validada em contrato**. Regras aplicadas:
- **Essencial e Presença Ampliada:** a edição prevista no plano não recebe cobrança por vídeo (sem cobrança dupla).
- **Criação, roteiro, conceito ou produções adicionais:** **sem preço fixo**; "sob orçamento".
- **Captação:** independente da edição. A diária não inclui edição, e a edição pode ser contratada sem captação.
- **Não definidos:** duração, formatos e revisões incluídos nos R$ 180; quantidade de vídeos dos planos superiores.

### Q.2 O que foi codado

- **Simulador:**
  - Grupo "Edição de vídeos" (`#econEdit`), visível só no Econômico, logo após a escolha do plano.
  - Campo "Quantidade de vídeos para editar" (`#sEditQty`): inteiro de 0 a 50, valor inicial 0.
  - "R$ 180,00 por vídeo" visível como texto, não editável, e botão "Zerar vídeos".
  - Recibo com a linha "Edição de vídeos (Econômico)", ex.: "2 vídeos × R$ 180,00".
  - No Essencial e no Presença Ampliada, o grupo e a linha somem e aparece a nota "Edição de vídeos prevista no plano, conforme contrato. Sem cobrança por vídeo".
- **Cálculo:** uma única função `calc()`, com `ECON_EDIT_UNIT = 180`:
  `total = mensalidade + verba diária × dias + diárias × valor da diária + (Econômico ? vídeos × 180 : 0)`.
  Fica exposta como `window.RealPolarSim`, só para verificação automatizada.
- **Troca de plano (RF-012):** a quantidade digitada no Econômico fica guardada. Ao voltar, reaparece no campo, no recibo e num aviso para leitor de tela (`#simStatus`). Nos outros planos ela é ignorada.
- **Validação:** vazio, negativo, fração ou valor acima de 50 viram um inteiro de 0 a 50 ao sair do campo, com o aviso "Ajustado para N".
- **Tabela-fonte:**
  - Novo item **X04 "Edição de vídeos avulsa"**: Econômico "R$ 180 por vídeo" (opcional, origem: responsável); Essencial e Ampliado "Prevista no plano · sem cobrança por vídeo".
  - **S04 (vídeos):** Econômico continua "Fora da mensalidade", com a observação "Edição avulsa: R$ 180 por vídeo, quando solicitada".
  - **X02 (captação):** "Captação e edição são etapas distintas: a diária não inclui edição, que depende do plano".
- **Cartão Econômico:** nota "Edição de vídeos avulsa: R$ 180 por vídeo, quando solicitada", com botão "Entender" que abre o pop-up.
- **Resumo copiado:** passa a trazer o bloco "SIMULAÇÃO ATUAL", com edição avulsa no Econômico ou "prevista no plano" nos demais.
- **Impressão:** mantém a linha de edição e o total.
- **Barra de progresso:** de 3px para **6px** no computador e **5px** no celular, com trilho `rgba(18,48,73,.12)`, `pointer-events:none`, limitada a 0–100%. Recalcula ao rolar, redimensionar e quando o conteúdo muda de altura.
- **Logo:**
  - `prototipo/assets/real-polar-logo-original.png`: arquivo enviado pelo responsável na conversa do Claude Code em 02/11/2026, idêntico ao recebido (hash conferido). 1254×1254, fundo azul-marinho opaco (`#011842`, sem transparência).
  - Cópias de 96, 192 e 512 px: **apenas recorte do enquadramento** em volta do símbolo (área 812×812 a partir de 222,232) e redimensionamento, **sem alterar cores, geometria ou proporções**. O recorte foi necessário porque, no quadro original, o símbolo ocupa menos da metade da imagem e ficava ilegível em 40px.
  - Uso: cabeçalho (40px; 34px no celular, `alt=""` porque o nome "REAL POLAR" está ao lado) e abertura (104px; 72px no celular, `alt` descritivo). `width` e `height` declarados para evitar deslocamento de layout.
- **Correção extra:** os preços da abertura no celular saíam colados ao nome do plano ("EconômicoR$ 1.280").

### Q.3 Testes (241 verificações automáticas, todas aprovadas)

`~/realpolar-qa/t7.js`: larguras 1440, 768 e 390, zoom de 200%, movimento reduzido e página sem JavaScript, mais toda a regressão anterior. Novos nesta rodada:

- **Oráculo:** 432 combinações (3 planos × verba 0/15/25/50 × 0/15/30 dias × 0/1/2 diárias × 0–3 vídeos) conferidas contra a fórmula do V3, calculada de forma independente no teste.
- **Exemplos do capítulo 05 na interface:**

  | Plano e cenário | Total |
  | --- | --- |
  | Econômico sem audiovisual | 1.730 |
  | Econômico com 2 vídeos | 2.090 |
  | Econômico com 3 vídeos e 1 diária | 3.470 |
  | Essencial com 1 diária e 4 vídeos residuais ignorados | 3.750 |
  | Presença Ampliada com 5 vídeos residuais ignorados | 3.650 |

- **Simulador:**
  - grupo e linha só no Econômico; restauração do valor ao voltar; "Zerar vídeos" com retorno do foco;
  - validação de -3, 2,5, vazio e 999;
  - rótulo e preço ligados ao campo para leitor de tela;
  - "Simular este plano" revela o campo.
- **Saídas:** resumo copiado com e sem edição; impressão (1.280 + 450 + 1.200 + 360 = R$ 3.290).
- **Pop-ups:** edição (gravação, criação e edição separadas; Essencial sem cobrança por vídeo) e captação.
- **Barra:** 6/5px, de 0 a 100%, acompanhando navegação por âncora.
- **Logo:** carregada, quadrada, nos tamanhos esperados, com dimensões reservadas.

**Não testado:** leitores de tela reais, iOS e Android físicos, Safari e Firefox, tamanho de fonte ampliado (fontes em px, limitação já registrada) e largura de 320px (só 390).

## R. Sétima rodada: Prompt Mestre V4, conteúdo por plano (02/11/2026)

**Base:** `14d6c41`. A mensagem chegou cortada no capítulo 08, na ficha X04 (limites do Presença Ampliada). As fichas S01–S11 e X00 foram transcritas. X01, X02, X03, X05, X06 e o fim de X04 foram escritos no mesmo padrão, usando apenas fatos já registrados: nenhum preço, quantidade ou entrega novos.

### R.1 Problema confirmado antes da mudança

Nos pop-ups, "O que recebo", "Como funciona" e "Limites e custos" mostravam o mesmo texto nos três planos; só a etiqueta mudava. Um item "Limitado" descrevia o serviço completo e um item "Fora" listava benefícios. Evidência: `docs/capturas/antes-r7-14d6c41-popup-S01-economico-1440x900.jpg`.

### R.2 O que foi codado (`5ab501b`)

- **Fonte única mantida:** cada linha do comparativo `#cmp` ganhou três blocos `<div data-plan-detail="E|S|A">` com `lead`, `get`, `how` e `lim`. São 18 itens: 11 da mensalidade, mensalidade e edição avulsa, e 5 custos externos. Os blocos aparecem também na página sem JavaScript.
- **Pop-up:**
  - O resumo do plano ("No Econômico: Limitado · …") fica abaixo dos botões de plano.
  - As quatro abas leem o conteúdo do plano escolhido pela função `resolve(id, plano, aba)`.
  - "O que recebo" não repete o resumo exibido logo acima.
  - Itens "Fora" e "A confirmar" usam marcador neutro e frases de ausência.
  - As hipóteses do painel aparecem só no Presença Ampliada.
  - "Comparar planos" mostra a etiqueta e a diferença de escopo de cada plano.
  - Trocar o plano mantém a aba, e trocar a aba ou ir ao próximo serviço mantém o plano.
- **Cartões dos planos:** itens que não estão incluídos por completo mostram o que muda no plano, não só a etiqueta.
- **Audiovisual:**
  - A frase única sobre edição foi trocada por duas: Econômico com edição avulsa a R$ 180 por vídeo; Essencial e Presença Ampliada com edição prevista na mensalidade.
  - Storymaker, drone e piloto, e apresentador ou ator viraram três cartões separados, cada um com pop-up e condições próprias, sem preço fixo.
  - A faixa de custos externos passou a ter 5 itens.
- **90 dias:**
  - Cada mês diz o que fica pronto ao final.
  - Os focos dos planos viraram texto corrido, sem bordas com aparência de filtro.
  - No celular, os meses ficam empilhados, ligados por conectores.
  - O aviso de metas de conversão foi preservado palavra por palavra.
- **Simulador:** nota "Base: 1 mês de gestão; o período mínimo de contratação é de três meses". O cálculo, o AC16 e a edição avulsa continuam iguais.
- **Rolagem:** a revelação ficou mais leve (10px, 0,45s), e o movimento reduzido continua respeitado.

### R.3 Testes (289 verificações automáticas, todas aprovadas)

`~/realpolar-qa/t8.js`, derivado de `t7.js`, sem apagar testes anteriores, em 1440, 768 e 390px, mais zoom de 200%, movimento reduzido e página sem JavaScript. Novos nesta rodada:

- **Varredura completa:** nos 18 itens, resumo, "O que recebo", "Como funciona" e "Limites e custos" são diferentes nos 3 planos.
- **Ausência:** itens "Fora" e "A confirmar" não listam benefícios.
- **Nada repetido:** "O que recebo" não repete o resumo do plano.
- **Estado preservado:** a aba se mantém ao trocar o plano, e o plano se mantém ao trocar a aba ou o serviço.
- **Comparar planos:** mostra 3 resumos diferentes.
- **Painel:** hipóteses só no Presença Ampliada.
- **Extras:** 3 extras separados, com pop-ups próprios; a faixa de custos externos tem 5 itens.
- **Audiovisual:** o texto separa a edição por plano, e a frase antiga não aparece mais.
- **90 dias:** sem controles; resultado de cada mês; aviso preservado; layout em linha no computador e empilhado no celular.
- **Simulador:** nota de base de 1 mês. O oráculo de 432 combinações continua aprovado.

Capturas depois: `docs/capturas/depois-r7-*` (pop-up S01 nos 3 planos, extras e 90 dias, em 1440 e 390).

**Não testado:** leitores de tela reais, aparelhos físicos, Safari e Firefox.

## S. Oitava rodada: Prompt Mestre V5, adaptação mobile-first (02/11/2026)

**Base:** `1cec07b`, igual ao HEAD observado no V5. A mensagem chegou cortada no capítulo 22 (critérios de 768×1024); os capítulos 01–21 chegaram completos. Nada da matriz comercial V4 foi alterado: preços, estados, textos por plano e cálculo continuam iguais. Canva e contrato continuam indisponíveis ao Claude.

### S.1 Auditoria antes da mudança (prévia local, Chromium, 8 tamanhos)

Medições em `~/realpolar-qa/audit8.js`; capturas `docs/capturas/antes-r8-*` (início, pop-up e página inteira).

| Sev. | Problema medido | Causa (código) | Correção |
| --- | --- | --- | --- |
| P0 | Rolagem lateral em 320 px (página com 348 px); no pop-up, o Fechar e o botão "Presença Ampliada" ficavam cortados | `.sim` e `.receipt` em `1fr` sem mínimo zero; os botões de plano e o recibo esticavam a coluna | `minmax(0,1fr)` nas grades de uma coluna e no recibo |
| P0 | Abas do pop-up 195 a 277 px além da tela de 320 a 430 px; "Limites e custos" e "Comparar planos" escondidas | `.m-tabs` com rolagem horizontal, concorrente com o seletor de plano | Quatro abas numa linha, com quebra de texto, sem rolagem lateral |
| P0 | Pop-up em 320×568 com 135 px de leitura; em paisagem baixa, conteúdo e rodapé fora de alcance | Cabeçalho, plano e abas fixos, com rolagem só no corpo | Em telas de até 740 px de altura, o pop-up inteiro rola como uma única região, com cabeçalho (Fechar) e rodapé fixos; altura em `dvh` e área segura |
| P1 | Menu mostrava 1 ou 2 das 6 seções no celular e 4 no tablet | Faixa horizontal com máscara, pouco perceptível | Botão "Seções" (`aria-expanded`, `aria-controls`) com painel vertical de 48 px por item; fecha ao escolher, com Esc ou com toque fora |
| P1 | Seção de planos com 4.400 a 5.200 px no celular (três cartões completos empilhados) | Três cartões em uma coluna abaixo de 900 px | Seletor com os três nomes e preços sempre visíveis e um cartão por vez; não altera o simulador |
| P1 | Preços fora da primeira tela em 320, 360 e 375 px | Preços depois de dois botões grandes e logo de 72 px | Preços antes dos botões (também no computador), logo de 56 px e título menor no celular |
| P1 | Total do simulador cerca de 1.000 px abaixo da escolha do plano | Recibo depois de todos os campos | Linha "Total estimado agora", logo após a escolha do plano, até 900 px de largura (sem fixar na tela) |
| P1 | Ampliar a fonte do navegador não tinha efeito | 112 tamanhos de fonte em `px` | Fontes convertidas para `rem`; testado a 125% e 200%, sem rolagem lateral |
| P2 | Etapas do audiovisual quebravam como etiquetas soltas, com traços pendurados | Fluxo horizontal com `flex-wrap` | Sequência vertical com setas curtas até 640 px |
| P2 | Mapa em lista: 11 itens sem agrupamento | Ordem do comparativo | Grupos por tema: Presença; Conteúdo; Campanhas; Busca e análise; Estrutura visual e digital |
| P2 | Recibo não diferenciava custo recorrente de eventual | Só a nota de rodapé explicava | Rótulo em cada linha: "Recorrente, todo mês", "Pago direto à Meta", "Eventual, com orçamento aprovado", "Por vídeo, quando solicitada" |
| P2 | Etiquetas de estado em 12 px | — | 13 px (`.8125rem`) |

Também verificados: barra de progresso com `pointer-events:none` e sem deslocar o layout; 90 dias já vertical desde a V4; seletor de objetivos do acompanhamento quebra linha sem corte; `inputmode` correto em todos os campos.

### S.2 Antes × depois (medido)

| Tamanho | Largura da página | Fim dos 3 preços | Seção de planos | Página inteira | Abas fora da tela |
| --- | --- | --- | --- | --- | --- |
| 320×568 | 348 → 320 | 865 → 705 | 5.190 → 3.151 | 14.502 → 13.189 | 277 → 0 |
| 360×800 | 360 → 360 | 821 → 658 | 4.855 → 2.929 | 13.741 → 12.317 | 265 → 0 |
| 390×844 | 390 → 390 | 792 → 638 | 4.641 → 2.804 | 13.227 → 11.805 | 235 → 0 |
| 768×1024 | 768 → 768 | 702 → 622 | 3.957 → 2.426 | 10.813 → 9.556 | 0 → 0 |
| 1440×900 | sem mudança de layout, exceto preços antes dos botões | 783 → 703 | 2.443 → 2.453 | 8.705 → 8.696 | 0 → 0 |

Em 320×568 os preços terminam em 705 px: a faixa interna "Ambiente de teste" ocupa cerca de 95 px e sai na versão do cliente.

### S.3 Testes

- **Regressão (`~/realpolar-qa/t9.js`, derivada de `t8.js`):** 289 verificações, todas aprovadas. Ajustes, sem apagar nenhuma verificação:
  - nos tamanhos com seletor, o teste toca no plano antes de abrir o cartão, como faria uma pessoa;
  - o mapa é comparado por serviço, não pela ordem;
  - a logo da abertura no celular passou de 72 para 56 px.
- **V5 (`~/realpolar-qa/t9m.js`):** 199 verificações, todas aprovadas.
  - **Nos 8 tamanhos:**
    - sem rolagem lateral;
    - três preços na primeira tela a partir de 360 px;
    - menu "Seções": abre, recebe o foco, fecha com Esc e ao escolher uma seção;
    - um cartão por vez, sem mudar o simulador;
    - pop-up aberto pelo Econômico começa no Econômico, com Fechar visível, abas inteiras e fim do conteúdo alcançável;
    - foco e posição restaurados ao fechar;
    - `inputmode` correto e campos de 48 px;
    - total imediato igual ao recibo;
    - rótulos de recorrente e eventual;
    - audiovisual e 90 dias verticais;
    - mapa agrupado;
    - sem erros de script.
  - **Varredura em 390×844:** 18 serviços × 3 planos × 4 abas = 216 telas, sem vazar a largura.
  - **Paisagem:** 568×320 e 844×390.
  - **Fonte do navegador:** 125% e 200%.
  - **Sem JavaScript:** links de seção, três cartões e comparativo completo.
  - **Impressão:** os três cartões saem impressos.
- **Não testado:** Safari iOS (barra dinâmica, teclado virtual e área segura reais), Firefox, aparelhos físicos e leitores de tela reais. O comportamento do teclado virtual foi tratado com `scroll-margin` nos campos, sem prova em aparelho.


## T. Consolidação V7 + V8 (02/11/2026, Codex)

Base: `ec052835b081332112860e9fba22157eefc15d16`, igual ao HTML público antes da edição. Auditoria com capturas atuais de produção em 390 e 1280 px; preservadas logo original, paleta, navegação, matriz, audiovisual e simulador.

1. **Abertura:** logo grande e título antigos confirmados; título aprovado V7 aplicado, frase final em azul existente, Marketing em Georgia do sistema. Sem fonte ou asset novo.
2. **Planos:** listas extensas confirmadas. Resumo de três serviços + expansão independente com `aria-expanded`, `aria-controls` e painel oculto sem foco; demais serviços e exclusões vêm de `#cmp`. Estados conservados ao trocar cartão; preço e CTA fora da expansão.
3. **Serviços:** opção Todos removida do HTML e do estado JavaScript; Ampliado já era default e foi preservado. Status de Meta Ads/Google corrigidos na matriz e nos detalhes, incluindo mensalidade e verba de anúncios. Nenhuma periodicidade inventada.
4. **90 dias e acompanhamento:** retirados bloco técnico e seletor de indicadores; mantidos marcos, período mínimo e limites. Ações, observações e próximos ajustes em linguagem de cliente.
5. **Final:** resumo curto de valores e campanha, custos externos, âncora para simulador, quatro perguntas e fechamento. Cópia e impressão acompanham a redação.
6. **Acessibilidade/regressão:** corrigido overflow de FAQ com fonte 200% após falha reproduzível. Matriz final, evidências e limites no relatório V8. Não houve teste em aparelhos físicos ou leitor de tela real.

Capturas: `docs/capturas/v8/`. Teste reproduzível: `docs/testes/v8.cjs`. Sem merge ou deploy de produção; revisão pendente.

### T.1 Correção pontual do PR #5 (02/11/2026)

Base `08f1780`, mesma branch `refinamento/proposta-v8`. A revisão anterior não detectou a ressalva antiga na célula-resumo X01/A: corrigida para gestão Meta Ads incluída e verba separada. `--silver-500`, indefinido no marcador neutro, foi substituído pelo token existente `--silver-700`. Layout e estrutura preservados.

Revisados todos os textos de Meta/Google e seus geradores no HTML. As fichas de S05/S06 e X00/X01 já refletiam a decisão V8; apenas a célula-resumo estava divergente. Google continua incluído com frequência/ações em contrato; relatórios do Ampliado mantêm periodicidade pendente. Recibo e cálculo sem alteração.

Teste atualizado para prevenir a regressão dessa célula, validar o token e o resumo copiado: **366/366 verificações locais**, **648 combinações**, **1.944 estados de pop-up**, sem falhas. Simulador comparado integralmente com a base e idêntico. Evidência e limitações em `RELATORIO_V8.md`, seção de correção pontual. Sem merge ou publicação em produção.
