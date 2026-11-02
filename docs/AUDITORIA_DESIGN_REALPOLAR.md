# REAL POLAR | Auditoria do HTML, direção de UX e briefing de execução no Claude

**Data:** 01/11/2026  
**Alvo auditado:** `index.html` na `main`, conforme consulta ao GitHub (blob `7f5d3c157d0f38ef1701b86e98b14aebbfe26395`), e documentos comerciais do Canva.  
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
2. Arquivo original de logo disponibilizado ao **ambiente do Claude**, além da imagem vista nesta conversa.
3. Confirmação comercial das quantidades exatas de peças/vídeos, bônus e responsabilidades de painel/rebranding.
4. Screenshots e inspeção visual do site ao vivo, que não foram realizados nesta auditoria estática.
5. Aprovação do protótipo e da versão final para merge/publicação.

**Status:** auditoria estática e brief de execução. **Não representa redesign implementado ou deploy verificado.**
