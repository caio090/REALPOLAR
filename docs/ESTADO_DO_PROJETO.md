# REAL POLAR | Estado do projeto e alinhamento entre agentes

> Atualizado em **02/11/2026**. Documento de trabalho compartilhado para ChatGPT, Claude/Codespaces e colaboradores.
> **Leia junto com `AGENTS.md`, `CLAUDE.md` e `docs/AUDITORIA_DESIGN_REALPOLAR.md` antes de editar.** Este registro distingue a proposta, o conceito visual e o que existe de verdade no código.
> **Status:** existe um **protótipo isolado** em `prototipo/index.html` (branch `design/prototipo-esclarecimento`). O `index.html` principal e a produção **não foram alterados**.

## 1. Objetivo atual, em uma frase

Criar uma **página interativa de esclarecimento comercial**, não repetir a proposta nem começar um site institucional novo. A Real Polar demonstrou interesse, mas precisa compreender **por que contratar a gestão de marketing, o que acontece nos primeiros 90 dias, como os resultados são medidos e quais custos são externos**.

- Público: decisores da Real Polar, inclusive quem não domina termos de marketing.
- Experiência: rolagem em narrativa curta; blocos visuais com perguntas clicáveis, conexões e ilustrações/ações discretas. Ao clicar numa dúvida, mostrar ação, responsável e indicador correspondente. Sem aparência de conversa de chatbot.
- Texto: direto, pouco texto por tela e sem promessas de resultado; explicar cada termo que for necessário.
- Preços, comparação e simulador ficam como **consulta complementar**, não como primeiro argumento.
- **Não implementar visual nem funcionalidades ainda apenas porque estão descritos aqui.** O conceito fica registrado para um protótipo e revisão antes de publicação.

## 2. Três camadas que NÃO podem ser confundidas

| Camada | Onde consultar | O que representa |
| --- | --- | --- |
| **Proposta comercial** | Canva original: https://canva.link/konuf40jjeznfjb (design `DAHZWbzR63g`, especialmente página 9); contrato, quando anexado | O que foi oferecido e os limites comerciais. **O contrato aprovado terá precedência nos itens que regular.** |
| **Conceito e UX** | Este documento, briefing mais recente e futuras referências aprovadas | Como explicar ao cliente com clareza, ordem narrativa e interações. **Ainda não significa implementado.** |
| **Código real** | `index.html` na branch/commit inspecionados, `README.md`, `AGENTS.md`, Codespaces e prévia efetivamente testada | O que existe e funciona. **Código não é prova de escopo comercial aprovado.** |

O GitHub e o Canva podem mudar independentemente. Sempre reler as fontes acessíveis, comparar datas/commits e registrar divergências. Se não conseguir acessar uma fonte, declarar a limitação; não presumir conteúdo.

## 3. Conferência comercial do Canva em 01/11/2026

**Fonte consultada:** texto extraído do design `DAHZWbzR63g`, sobretudo páginas 7 a 11. Valores apresentados:

| Plano | Mensalidade de gestão | Captação-base de referência, quando contratada | Soma ilustrativa com 1 diária |
| --- | ---: | ---: | ---: |
| Econômico | **R$ 1.280/mês** | Cotação separada | Não há total fixo indicado |
| Essencial | **R$ 2.100/mês** | **R$ 1.200 por diária** | **R$ 3.300** |
| Presença Ampliada | **R$ 3.200/mês** | **R$ 1.200 por diária** | **R$ 4.400** |

- A diária de R$ 1.200 é **referência sujeita a cotação**, não preço garantido, nem cobrança mensal automática. O Canva diz que uma diária pode ser planejada para produzir conteúdo por até dois meses; a produção obtida depende de material, condições e logística.
- **A verba Meta Ads é separada**, a partir de R$ 15/dia como referência na proposta. Não está incluída na mensalidade nem nos totais ilustrativos acima.
- O **Essencial** menciona estratégia de posicionamento, artes com design, vídeos com roteiro e edição, gestão de redes/publicações e Meta Ads, **revisão básica no Google Meu Negócio** e relatório.
- A **Presença Ampliada** menciona rebranding, estratégia, design, vídeos, redes/publicações, gestão do Google Meu Negócio, SEO, análise, **painel central interno no site**, relatório e bônus de artes. A presença desses itens na proposta **não comprova implementação técnica** nem define requisitos/prazos do painel.
- O **Econômico** menciona serviços prioritários, perfil da rede social, Meta Ads e peças apoiadas no acervo fornecido e IA com orientação humana.
- O texto extraído da página 9 **não confirma as quantidades exatas de 7 artes, 2 vídeos ou 6 vídeos que aparecem no HTML**. Conferir o contrato antes de tratar essas quantidades como escopo final.
- **Contrato prometido pelo responsável ainda não foi validado neste registro**. Quando chegar, comparar item a item, sem extrapolar.

### Divergências verificadas com o HTML da `main` no momento da conferência

O `index.html` existente exibe Econômico **R$ 1.100**, Essencial **R$ 1.800**, Ampliado **R$ 3.200**, e cita diária audiovisual de **R$ 1.000** em trecho de FAQ. Esses valores **não correspondem à proposta do Canva**. **Não enviar o HTML antigo como se os preços estivessem corrigidos.**

Não corrigir isso apenas neste Markdown e declarar que o site mudou. A atualização do HTML é tarefa separada, com revisão integral de cartões, simulador, FAQ, resumo copiado e textos sobre custos antes do merge.

## 4. Narrativa aprovada para o próximo protótipo de esclarecimento

1. **Por que a Real Polar precisa de marketing estruturado?** A empresa executa projetos técnicos; a equipe contratada assume posicionamento, conteúdo e operação dos anúncios. O marketing apoia aquisição e confiança, mas não substitui orçamento, atendimento ou venda.
2. **Mapa interativo: da dúvida à ação.** Ex.: clicar “Como vamos atrair clientes?” → diagnóstico → mensagem/público → anúncio → site/WhatsApp → contato → atendimento Real Polar. Cada etapa explica “quem faz” e “o que observamos”.
3. **Primeiros 90 dias = diagnóstico, teste e avaliação.** Mês 1: diagnóstico LKT, materiais, hipóteses e caminhos de contato. Mês 2: testes, mensagens, regiões, públicos e primeiros ajustes. Mês 3: consolidar sinais, analisar custo/qualidade e decidir a continuidade e metas escaláveis. Não prometer meta fechada de leads antes de dados. O Canva indica **período mínimo de 3 meses**; eventual cancelamento/renovação depende do contrato, sem prometer direito ou condição não verificada.
4. **O que medimos?** Alcance útil, visualizações/cliques, custo por clique, volume e custo de contatos (quando rastreáveis), qualificação, reuniões/visitas, propostas e negócios fechados **quando a Real Polar compartilhar o andamento**. Distinguir métrica de anúncio de resultado comercial. Mostrar um mini-funil clicável.
5. **Leilão e verba de anúncios.** Mais orçamento pode ampliar testes e acelerar a coleta de dados, sem garantir leads, vendas ou retorno. A qualidade de oferta, criativos, atendimento e concorrência também importa.
6. **Audiovisual presencial fora do escopo financeiro da gestão.** Videomaker/fotógrafo, Storymaker, drone/piloto, apresentador e produção local são terceirizados e cotados/contratados à parte com aprovação da Real Polar. A equipe de marketing orienta roteiro/briefing, recebe material e executa entregas de edição conforme o plano. Drone é opcional e sujeito a autorização/viabilidade de voo.
7. **Planos e investimento como referência final.** Exibir primeiro o benefício, depois separar mensalidade, Meta Ads e audiovisual. Quantidades/condições finais dependem de contrato.
8. **Encerramento.** Propor alinhamento de escopo, verba, material e responsabilidades, não prometer fechamento ou resultado.

Visual sugerido: fluxo de nós conectados, cartões com rótulos curtos, linhas animadas quando ativadas, timeline de 30/60/90 dias, mini-funil e botões acessíveis. Respeitar cores e logotipo aprovados, sem inventar marca. Garantir teclado, foco visível, redução de movimento, celular e boa leitura sem animação.

## 5. Protocolo obrigatório de colaboração ChatGPT ↔ Claude

### Antes de trabalhar
1. Identificar **repositório, branch, commit e arquivos modificados**. Em ambiente local, executar `git status` e `git fetch` antes de decidir qualquer merge ou edição. Não presumir que a branch `main` está igual à cópia local.
2. Ler integralmente `AGENTS.md`, **este arquivo** e as partes relevantes de `README.md` e do código real.
3. Conferir a fonte comercial **mais recente** (Canva e contrato, se disponível) antes de alterar valores, entregáveis, prazos, métricas ou promessas.
4. Comparar o pedido novo com os registros **decidido / proposto / implementado / publicado** abaixo. Tratar conflitos explicitamente.
5. Se outra IA tiver feito alterações ou aberto PR, **ler o diff e não sobrescrever seu trabalho**. Trabalhar em branch própria ou atualizar a branch correta, com controle de alterações.

### Durante a tarefa
- Escopo mínimo, sem reorganização gratuita, sem segredos ou dados privados nos arquivos.
- Não modificar a versão de produção por iniciativa própria. Usar branch + PR + prévia, e merge somente com autorização.
- Mudanças de texto comercial exigem conferir **todas** as ocorrências do mesmo valor no HTML (planos, FAQ, simulador, resumo para copiar, metadados).
- Não transformar ideias do ecossistema futuro (site, painel, CRM, automações) em tarefas já aprovadas.

### Depois de cada alteração
1. Atualizar este Markdown: decisões, código efetivamente tocado, diferenças em relação à proposta, pendências e referência da branch/PR/commit.
2. Atualizar `AGENTS.md` se mudou uma **regra permanente**; `README.md` se mudou instalação, funcionamento, URLs ou instruções.
3. Testar o que for possível e relatar o que **foi testado** e o que **não foi testado**. Para HTML: celular, teclado, interações, valores, impressão, Codespaces/porta 5500 e prévia Vercel quando disponível.
4. Registrar uma linha no histórico abaixo. Não declarar publicação sem confirmação do deployment.
5. Ao iniciar em outra IA/sessão, **reler os arquivos da branch mais recente**; não depender apenas da memória do chat anterior.

## 6. Quadro de situação

| Item | Situação em 01/11/2026 |
| --- | --- |
| HTML interativo com planos/FAQ/simulador | **Implementado na `main`** (inclui o PR #1, já mesclado), mas com divergências comerciais versus Canva |
| Site do cliente em Vercel | **Existente** em https://realpolar-proposta.vercel.app/; verificar deployment e commit antes de afirmar versão em produção |
| Apresentação comercial (protótipo) | **7ª rodada (V4), codada e testada** em `prototipo/index.html`: comparativo como fonte única de 18 itens com conteúdo próprio por plano, pop-up explicador por entregável, cartões e mapa gerados do comparativo, audiovisual, 90 dias, acompanhamento e simulador. Aguardando aprovação; não publicado na produção |
| Fluxo dos primeiros 90 dias | **Codado e testado em protótipo**, como marco de avaliação, sem meta fixa de leads |
| Acompanhamento por objetivo e simulador com custos separados | **Codados e testados em protótipo** (3ª rodada) |
| Contrato a anexar | **Pendente de leitura e validação** |
| Arte/logo oficial | **Recebida em 02/11/2026** e incorporada ao protótipo em `prototipo/assets/` (original preservado). Página principal não alterada |
| Correção de preços no HTML | **Pendente no `index.html` principal.** O protótipo já usa os valores do Canva (R$ 1.280 / 2.100 / 3.200 e diária de referência R$ 1.200) |
| Rebranding e painel interno mencionados no Canva | **Itens comerciais a detalhar/validar**, não sistemas implantados |

## 7. Auditoria e execução de design no Claude

- **Claude Code:** `CLAUDE.md`, na raiz, contém instruções persistentes que referenciam as mesmas regras, proposta e estado do projeto.
- **Auditoria/brief:** `docs/AUDITORIA_DESIGN_REALPOLAR.md` registra achados confirmados no código, o que não está codado, recomendações P0/P1/P2, direção visual e roteiro de execução/validação.
- **Inventário de skills (02/11/2026):** usadas `design:design-critique`, `design:accessibility-review`, `design:ux-copy` e `design:design-system`. Não há skill de animação nem de testes de frontend instalada; testes feitos com Playwright + Chromium fora do repositório. Detalhes em `docs/AUDITORIA_DESIGN_REALPOLAR.md`, seções I a L.
- **Auditoria visual e testes:** feitos em 02/11/2026 em 1440×900 e 390×844 (capturas em `docs/capturas/`). Sem merge nem deploy de produção autorizados.
- **Logo:** a imagem RP azul-marinho/prateada foi vista na conversa com o ChatGPT, mas o arquivo não está no repositório nem no Codespace. Precisa ser enviado.
- **Canva:** não acessível ao Claude em 02/11/2026 (403; conector sem autorização). O protótipo depende da conferência da seção 3.
- **Ponto de entrada para Claude:** ler `CLAUDE.md`, depois `docs/AUDITORIA_DESIGN_REALPOLAR.md` (seção “Brief de execução para o Claude”).

## 8. Histórico de alterações

- **02/11/2026 | V4: conteúdo por plano nos pop-ups (Claude Code):** base `14d6c41`. **Problema confirmado:** as abas do pop-up repetiam o mesmo texto nos três planos (captura `docs/capturas/antes-r7-14d6c41-popup-S01-economico-1440x900.jpg`). **Briefing:** Prompt Mestre V4 recebido **cortado no capítulo 08, na ficha X04 (limites do Presença Ampliada)**. Fichas S01–S11 e X00 transcritas; **X01, X02, X03, X05, X06 e o fim de X04 escritos por Claude** no mesmo padrão, sem preço, quantidade ou entrega novos. **Codado** (`5ab501b`): blocos por plano (`data-plan-detail`) para os 18 itens; resumo, "O que recebo", "Como funciona" e "Limites e custos" mudam com o plano; "Fora" e "A confirmar" mostram ausência; troca de plano mantém a aba e vice-versa; "Comparar planos" com a diferença de escopo; Storymaker, drone e piloto, e apresentador ou ator separados; edição explicada por plano no audiovisual; 90 dias com o resultado de cada mês, sem etiquetas com cara de filtro e empilhado no celular; base de 1 mês no simulador; revelação de rolagem mais leve. **Testado:** 289 verificações (auditoria, seção R). **Publicado:** nada em produção; `index.html` da raiz intacto.
  - **A validar em contrato:** todo o texto por plano das fichas escritas por Claude (X01, X02, extras e limites de X04 no Ampliado); Meta Ads e periodicidade dos relatórios no Ampliado (continuam "A confirmar"); duração, formatos e revisões incluídos nos R$ 180; quantidade de vídeos do Essencial e do Ampliado.

- **02/11/2026 | V3: edição avulsa no Econômico, barra e logo (Claude Code):** base `aa1b450`. **Decidido pelo responsável (nova, a validar em contrato):** edição de vídeos no Econômico a **R$ 180 por vídeo**, quando solicitada; criação, roteiro e produções adicionais sem preço fixo (sob orçamento); captação independente da edição; Essencial e Ampliado sem cobrança por vídeo. **Codado:** campo condicional no simulador, item X04 na tabela-fonte, textos de vídeos e captação, resumo e impressão com a simulação, barra de 6px (5px no celular) e logo oficial (`prototipo/assets/`, original preservado e cópias só recortadas e redimensionadas). **Testado:** 241 verificações, incluindo um oráculo de 432 combinações (seção Q da auditoria). **Commits:** `5c7b2d0` (logo) e `2da6082` (interface). **Publicado:** nada em produção.

- **02/11/2026 | Adendo V2: pop-ups em três camadas (Claude Code):** base `e93f9ee` (o adendo foi escrito sobre `396a403`, anterior aos pop-ups da 4ª rodada). **Codado** (`1186405`): camada 1 no cabeçalho; abas "O que recebo", "Como funciona", "Limites e custos" e "Comparar planos"; 3 possibilidades do painel rotuladas como não aprovadas; serviço relacionado; mensalidade como item próprio; botões de informação no simulador; **AC16 corrigido** (explorar o mapa ou o pop-up não muda o orçamento). **Testado:** 186 verificações, inclusive zoom de 200%. **Pendente:** tamanho de fonte ampliado (fontes em px), leitura por decisor (AC40), contrato, logo e as divergências já registradas (Meta Ads e relatórios do Ampliado, prospecção no Essencial, módulos do painel apenas como hipóteses).

- **02/11/2026 | Explicador por entregável, 4ª rodada (Claude Code):** branch `design/prototipo-esclarecimento`, PR #3, base `396a403`. **Briefing:** "prompt mestre" recebido **cortado no capítulo 07 (ficha S01)**; capítulos 01–06 aplicados integralmente; fichas S02 em diante escritas a partir dos fatos F01–F36. **Codado:** comparativo HTML como fonte única; pop-up único com 4 abas, troca de plano, navegação e acessibilidade; cartões, mapa, custos externos e resumo gerados dessa fonte; seção Execução removida. **Testado:** 145 verificações, inclusive página sem JavaScript e varredura de 14 serviços × 3 planos × 4 abas (auditoria, seção O). **Publicado:** nada em produção. **Commit da interface:** `12c0c57`.
  - **Estados "A confirmar" (conflito):** Meta Ads no Ampliado (F30) e periodicidade dos relatórios do Ampliado (F23 mensal × F32 quinzenal). O cliente vê "a confirmar em contrato"; a divergência fica só neste registro.
  - **Estados "Previsto" (detalhes em contrato):** rebranding (F14/F33), painel (F22), bônus de artes (F24), gestão do Google Meu Negócio no Ampliado (F19).
  - **Mudança:** estratégia de posicionamento do Econômico passou a "Fora da mensalidade" (F25–F28 não a listam).
  - **Não definido:** os "três módulos do painel" (F34) não chegaram no briefing; nada foi descrito.
  - **Ainda pendente:** contrato final (mencionado, não fornecido), logo oficial, confirmação de "prospecção" no Essencial (F31) e se o nome da agência deve aparecer na página.

- **02/11/2026 | Revisão comercial definitiva do protótipo (Claude Code):** branch `design/prototipo-esclarecimento`, PR #3. **Decidido pelo responsável:** proposta comercial antes da explicação; abertura "O marketing da Real Polar, sob nossa gestão."; planos logo no início, com nomes padronizados e Presença Ampliada em destaque; mapa mental de serviços com seletor de plano; execução em 4 etapas; 90 dias curto, com o aviso de conversão mantido; acompanhamento por objetivo; simulador com três grupos; sem explicar a operação da Real Polar. **Codado:** `prototipo/index.html` reestruturado (detalhes na seção N da auditoria). **Testado:** 114 verificações + conferência das 10 perguntas comerciais, aprovadas no local e na prévia da Vercel; commit `915d543`; descrição do PR #3 atualizada. **Publicado:** nada em produção. **Divergências registradas:** ver lista abaixo.
  - **Meta Ads na Presença Ampliada:** não consta na lista do Canva; o responsável indica que o plano trabalha conversão. Exibido como **"A confirmar"**, sem entrar formalmente no escopo.
  - **Relatórios na Presença Ampliada:** o responsável orientou acompanhamento **quinzenal**; o Canva registra **mensal**. Exibido como "periodicidade a confirmar em contrato".
  - **Econômico:** a lista usada (gestão do perfil e publicações; Meta Ads com foco enxuto; conteúdos a partir de fotos e informações da Real Polar; peças com IA e orientação) e o "foco em presença digital e posicionamento" vêm do pedido do responsável. "Estratégia de posicionamento" aparece como "Versão básica" no mapa por causa desse foco; confirmar em contrato.
  - **Essencial:** "prospecção com objetivos de conversão" vem do pedido do responsável, não do texto registrado do Canva.
  - **Diária de captação:** fatores de variação informados pelo responsável: duração, deslocamentos, equipamentos, locais e profissionais envolvidos.

- **02/11/2026 | Metas de conversão nos 90 dias (Claude Code):** branch `design/prototipo-esclarecimento`, PR #3. **Decidido pelo responsável:** os objetivos de conversão são trabalhados a partir do Plano Essencial e desde o início, não só depois de 90 dias. O foco dos planos fica assim: Econômico = posicionamento e presença digital; Essencial = posicionamento, prospecção e objetivos de conversão; Presença Ampliada = estratégia mais abrangente, objetivos de conversão e acompanhamento dos resultados. **Codado:** aviso discreto dentro da linha do tempo, com faixa animada do mês 1 ao mês 3. A etapa "Definir metas" e o resumo copiado foram alinhados. **Testado:** 123 verificações (auditoria, seção M.4), aprovadas no local e na prévia da Vercel; commit `5721ddb`. **Publicado:** nada em produção. **Divergência a conferir:** "prospecção" e o foco por plano não constam no texto registrado do Canva (seção 3); confirmar no contrato.

- **02/11/2026 | Refinamento do protótipo, 2ª rodada (Claude Code):** branch `design/prototipo-esclarecimento`, PR #3. **Decidido pelo responsável:** mapas conectados em vez de listas, animações discretas de rolagem, linguagem sem "Esclarecimentos da proposta", Canva ou LKT na interface, métricas por objetivo e audiovisual com responsabilidades. **Codado:** motor de roteiro em SVG (4 mapas + audiovisual), linha do tempo de 90 dias, seletor de objetivos, comparação de investimento, barra de progresso, menu com seção ativa, revelação progressiva, ligação planos ↔ simulador. **Testado:** 111 verificações em 1440, 768 e 390px + movimento reduzido (seção M da auditoria). **Publicado:** nada em produção. **Commit:** `a6d4061`; as 111 verificações também passaram na prévia https://realpolar-proposta-git-design-prototipo-esclarecimento-caio21.vercel.app/prototipo/, e a produção foi conferida sem alteração. **Limitações:** briefing recebido cortado na seção 11; Canva, logo e contrato continuam indisponíveis. **Divergências:** sem novas; continuam as da seção 3.

- **02/11/2026 | Protótipo de esclarecimento (Claude Code):** branch `design/prototipo-esclarecimento`, criada a partir de `docs/alinhamento-chatgpt-claude-20261101`. **Decidido:** protótipo isolado, sem tocar no `index.html` principal. **Codado:** `prototipo/index.html` com dois polos, mapa de 3 perguntas (18 etapas com o que fazemos / por quê / responsável / medição), cronograma de 90 dias, funil de 6 métricas, comparador de verba, trilha do audiovisual, planos com valores do Canva, simulador e próximos passos. **Testado:** 48 verificações automáticas em 1440×900 e 390×844, porta 5500 e conferência textual (seção L da auditoria). **Publicado:** nada em produção; prévia somente pela Vercel da branch. **Divergências novas:** Meta Ads não listado na Presença Ampliada no texto extraído do Canva; prazo de 48h do bônus sem confirmação no Canva. **Limitações:** Canva inacessível ao Claude; logo ausente; contrato não recebido. **PR #3** (base: `docs/alinhamento-chatgpt-claude-20261101`): https://github.com/caio090/REALPOLAR/pull/3. **Prévia:** https://realpolar-proposta-git-design-prototipo-esclarecimento-caio21.vercel.app/prototipo/ (48 verificações também aprovadas na prévia; produção conferida sem alteração).

- **01/11/2026 | Preparação para auditoria de design Claude:** criados `CLAUDE.md` e `docs/AUDITORIA_DESIGN_REALPOLAR.md`; auditados estaticamente os componentes do `index.html` (hero, 3 planos, processo em 5 etapas, 15 FAQs, filtros e simulador). Registradas lacunas: mapa clicável, timeline 30/60/90 e aplicação da logo. **Nenhum HTML modificado; sem screenshot/teste visual/deploy nesta etapa.** PR #2 mantém a revisão apenas documental.
- **01/11/2026 | Documentação de alinhamento:** leitura do `AGENTS.md`, `README.md` e `index.html`; conferência do Canva `DAHZWbzR63g`, sobretudo página 9. Registradas divergências de preços, proposta do mapa interativo, processo de 90 dias e protocolo ChatGPT/Claude. **Nenhuma alteração de código de produção nesta etapa.** Conferir o PR desta documentação para identificação do commit e aprovação.

> Princípio final: **proposta é o combinado, conceito é o planejado, código é o implementado e deploy é o publicado. Nunca apresentar um como se fosse outro.**
