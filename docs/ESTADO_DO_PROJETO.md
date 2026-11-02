# REAL POLAR | Estado do projeto e alinhamento entre agentes

> Atualizado em **01/11/2026**. Documento de trabalho compartilhado para ChatGPT, Claude/Codespaces e colaboradores.
> **Leia junto com `AGENTS.md` antes de editar.** Este registro distingue a proposta, o conceito visual e o que existe de verdade no código.
> **Status deste documento:** alinhamento/documentação; nenhuma mudança de HTML ou publicação de produção foi feita por esta revisão.

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
| HTML interativo com planos/FAQ/simulador | **Implementado na `main`**, mas com divergências comerciais versus Canva |
| Site do cliente em Vercel | **Existente** em https://realpolar-proposta.vercel.app/; verificar deployment e commit antes de afirmar versão em produção |
| Novo storytelling de dúvidas e mapas clicáveis | **Conceito registrado, ainda não codado** |
| Fluxo dos primeiros 90 dias | **Conceito registrado, ainda não codado** |
| Contrato a anexar | **Pendente de leitura e validação** |
| Arte/logo oficial | **Arquivo apresentado na conversa**; incorporação e aprovação no repositório ainda precisam ser verificadas |
| Correção de preços no HTML | **Pendente**, não confundir com esta correção documental |
| Rebranding e painel interno mencionados no Canva | **Itens comerciais a detalhar/validar**, não sistemas implantados |

## 7. Histórico de alterações

- **01/11/2026 | Documentação de alinhamento:** leitura do `AGENTS.md`, `README.md` e `index.html`; conferência do Canva `DAHZWbzR63g`, sobretudo página 9. Registradas divergências de preços, proposta do mapa interativo, processo de 90 dias e protocolo ChatGPT/Claude. **Nenhuma alteração de código de produção nesta etapa.** Conferir o PR desta documentação para identificação do commit e aprovação.

> Princípio final: **proposta é o combinado, conceito é o planejado, código é o implementado e deploy é o publicado. Nunca apresentar um como se fosse outro.**
