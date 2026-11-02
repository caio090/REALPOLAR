# AGENTS.md | REALPOLAR

> Documento de orientação para Codex, agentes de IA, desenvolvedores e colaboradores.
> Objetivo: preservar o contexto do projeto, evitar desvios de escopo e impedir mudanças não autorizadas.
> Última revisão: 2026-11-01.
> Idioma de trabalho: português brasileiro.

## 1. Identidade e finalidade

- **Projeto:** REALPOLAR.
- **Repositório oficial:** `caio090/REALPOLAR`.
- **Empresa atendida:** Real Polar, especializada em climatização e soluções técnicas para obras e imóveis em São Paulo.
- **Objetivo de longo prazo:** construir e manter, gradualmente, o ecossistema digital e operacional da Real Polar.
- **Atenção:** este repositório **não é apenas o site nem apenas a proposta comercial**. É a base prevista para futuras soluções digitais, administrativas, integrações e automações.
- **Regra essencial:** o objetivo futuro **não autoriza** criar agora sistemas, páginas, APIs ou infraestrutura que não foram solicitados.

## 2. Estado real do repositório

### Já existe

- `index.html`: página de proposta comercial interativa, com HTML, CSS e JavaScript nativos.
- `README.md`: instruções de uso e visão da proposta interativa.
- `.devcontainer/devcontainer.json`: ambiente do GitHub Codespaces; prévia em servidor Python na porta `5500`.

A aplicação atual é uma **proposta comercial e central de esclarecimento de dúvidas**. Ela não é um CRM, painel de clientes, sistema de automação ou site institucional completo.

### Futuro possível, ainda NÃO implementado

- Site institucional e páginas comerciais.
- Painéis de operação, indicadores e administração.
- Gestão de clientes, propostas, orçamentos e solicitações.
- Fluxos de automação, integrações e APIs.
- Autenticação, permissões, banco de dados e outras ferramentas.

Esses itens são **direções de evolução, não funcionalidades contratadas nem decisões técnicas aprovadas**.

## 3. Regra para não desviar do projeto

Antes de qualquer modificação, o agente deve:

1. Ler este arquivo, `docs/ESTADO_DO_PROJETO.md`, `docs/AUDITORIA_DESIGN_REALPOLAR.md`, `CLAUDE.md` (quando usando Claude Code) e o `README.md`, na branch/commit atuais.
2. Inspecionar a estrutura e o código **reais**, em vez de supor que módulos ou bibliotecas existem.
3. Identificar o pedido específico e limitar a alteração a ele; comparar proposta Canva, conceito visual e código real sem confundir os três.
4. Preservar o que já funciona, especialmente a proposta interativa e o ambiente Codespaces.
5. Informar mudanças de escopo, dependências, integrações e custos antes de implementá-las.
6. Validar o resultado antes de afirmar que foi concluído e distinguir implementado de publicado.
7. **Atualizar `docs/ESTADO_DO_PROJETO.md` em cada tarefa** com decisões, alterações efetivas, pendências, branch/commit/PR e testes. Atualizar `README.md` para mudanças operacionais e este `AGENTS.md` para novas regras permanentes.

**Nunca trocar o objetivo do projeto por uma interpretação criativa do agente.**
Na dúvida, perguntar em vez de inventar.

## 4. Conteúdo e contexto comercial vigente

### Posicionamento

A Real Polar atende projetos de climatização, incluindo imóveis de alto padrão, obras, clínicas, empresas e outros ambientes técnicos, com foco comercial em São Paulo.

A comunicação deve:
- Mostrar soluções, diferenciais técnicos, instalações e projetos reais quando houver material autorizado.
- Aproximar a marca de compradores, gestores de obra, arquitetos e pessoas que indicam projetos.
- Facilitar o entendimento do serviço, gerar oportunidades de contato e apoiar a equipe comercial.
- Evitar promessas de vendas, resultados garantidos ou posição certa em mecanismos de busca.

### Proposta comercial: fonte, valores e divergências

**Leia primeiro [docs/ESTADO_DO_PROJETO.md](docs/ESTADO_DO_PROJETO.md).** Conferência em 01/11/2026 da proposta Canva `DAHZWbzR63g`, especialmente página 9:

| Referência comercial consultada | Econômico | Essencial | Presença Ampliada |
| --- | ---: | ---: | ---: |
| **Gestão mensal no Canva** | **R$ 1.280** | **R$ 2.100** | **R$ 3.200** |
| Captação presencial terceirizada | À parte, mediante cotação | Base ilustrativa R$ 1.200/diária | Base ilustrativa R$ 1.200/diária |
| Verba de anúncios Meta Ads | À parte | À parte | À parte |

A referência de R$ 1.200/diária **não é preço fechado nem mensalidade fixa**. O Canva informa totais ilustrativos de R$ 3.300 e R$ 4.400 para Essencial e Ampliado quando se adiciona uma diária; mídia paga continua à parte.

**Histórico: a versão de `index.html` inspecionada em 01/11/2026 mostrava Econômico R$ 1.100, Essencial R$ 1.800, Ampliado R$ 3.200 e outro valor de captação. Em 02/11/2026, com aprovação do responsável, a página principal passou a ser a versão V5 (R$ 1.280 / R$ 2.100 / R$ 3.200).** A proposta Canva lista revisão básica do Google Meu Negócio no Essencial e rebranding, gestão do Google Meu Negócio, SEO e painel central interno no Ampliado. Não presumir que quantidades e condições específicas do HTML estão comprovadas no Canva. Contrato formal, quando anexado, deve ser lido e confrontado antes da correção completa. **Não desenvolver painel/rebranding automaticamente porque são citados na proposta.**

#### Condições que precisam estar claras

- A **mensalidade** remunera os serviços da equipe de marketing.
- A **verba de anúncios** é definida pela Real Polar e paga **separadamente à Meta**.
- A **captação presencial em São Paulo**, incluindo videomaker/fotografia e opcionais como Storymaker, drone ou apresentador, é **terceirizada e cobrada à parte**.
- A equipe de marketing faz estratégia, redação, roteiros, criação visual, edição conforme plano, Instagram e gestão de anúncios.
- Quantidades de vídeos editados **não são promessa de filmagem incluída**: dependem de imagens adequadas do cliente ou de captação contratada separadamente.
- O bônus de artes extras do Ampliado contempla peças **pontuais além do volume de feed contratualmente confirmado**. Exige briefing completo, aceite, criação e revisão; referência de **até 48 horas úteis** após o aceite. **Quantidade, revisões e tipos de arte ainda precisam de definição contratual. Não tratar como solicitações ilimitadas.**
- SEO e melhorias de presença nas buscas devem ser explicados de modo delimitado **conforme o plano e o contrato**. O Canva diferencia Essencial (revisão básica do Google Meu Negócio) de Ampliado (gestão do perfil e SEO). **Não** apresentar como auditoria técnica completa, desenvolvimento de site, posicionamento garantido ou Google Ads.
- A Real Polar atende contatos comerciais, qualifica oportunidades, realiza orçamentos e fecha contratos, salvo contratação específica em sentido contrário.
- Não incluir Perfil da Empresa no Google como serviço certo se isso não estiver expressamente confirmado no escopo.

## 5. Processo estratégico de anúncios

A operação segue um processo, e não uma configuração de público improvisada:

1. **Diagnóstico LKT:** conhecer o negócio, objetivos, serviços prioritários, canais, materiais e jornada até o contato comercial.
2. **Período de validação:** verificar acessos, rastreamento possível, mensagens, canais e hipóteses iniciais. Realizar testes controlados quando houver verba e autorização.
3. **Definição de metas:** alinhar objetivo realista para o período e indicadores observáveis antes de aumentar investimento.
4. **Públicos e configuração:** organizar regiões, perfis, criativos, mensagens e destino dos anúncios (site ou WhatsApp), usando o aprendizado obtido.
5. **Acompanhamento e melhoria:** analisar dados disponíveis, qualidade dos contatos compartilhados pelo cliente e ajustar continuamente o necessário.

### Como explicar a verba da Meta

- O sistema de distribuição dos anúncios utiliza um **leilão**, influenciado por concorrência, qualidade, públicos e outros fatores.
- Mais orçamento **pode** ampliar alcance, permitir mais testes e gerar informações mais rapidamente.
- Com orçamento menor, a validação e a geração de contatos **podem exigir mais tempo**.
- **Mais dinheiro não garante mais leads qualificados, vendas, ROI positivo ou retorno mais rápido.**
- O resultado depende também de mercado, oferta, criativos, página/WhatsApp, atendimento e capacidade comercial da Real Polar.
- Projeções em calculadoras são **estimativas matemáticas de custos**, não previsão de faturamento ou volume de leads.

Ao apresentar a metodologia ao cliente, preferir termos claros como "diagnóstico", "validação", "metas" e "melhorias mensais". Não sobrecarregar o material com siglas internas como "Growth" sem explicar.

## 6. Diretrizes de interface, redação e experiência

- **Tom:** direto, profissional, comercial e simples de entender.
- **Idioma:** pt-BR, com pontuação natural e sem jargões desnecessários.
- **Visual:** aproveitar a identidade já aplicada no arquivo existente. Não inventar nova marca, logo ou paleta como se fossem aprovados.
- **Hierarquia:** valor da mensalidade em destaque; custos de anúncios e captação visivelmente separados.
- **Comparação de planos:** destacar diferenças concretas, sem retirar serviços compartilhados de um dos planos para parecer que o outro é melhor.
- **Evitar duplicação:** não repetir a mesma lista de entregáveis em diversas seções sem necessidade.
- **FAQ:** responder dúvidas reais, com explicações compreensíveis.
- **Acessibilidade:** HTML semântico, foco visível, controles com teclado, rótulos em formulários e contraste apropriado.
- **Responsividade:** funcionar em celular e desktop.
- **Conteúdos externos:** não inventar depoimentos, obras, dados de desempenho, parceiros, valores de prestadores ou resultados da empresa.
- **Microcopy:** não escrever como se uma funcionalidade futura já estivesse ativa.

## 7. Engenharia e organização do repositório

### Agora

- Preservar o `index.html` funcional.
- Manter a prévia do Codespaces na porta `5500`.
- Manter HTML/CSS/JS nativos enquanto o escopo atual não exigir outra estrutura.
- Não introduzir dependências, serviços pagos, frameworks ou banco de dados por conveniência.
- Não quebrar caminhos, links, simuladores, filtros, FAQs ou controles interativos existentes.

### Quando o ecossistema crescer

Uma estrutura como a seguinte **poderá ser avaliada**, mas **não deve ser criada automaticamente**:

    apps/
      site/
      proposta/
      painel/
    services/
      automacoes/
      api/
    packages/
      ui/
      shared/
    docs/

A eventual migração de `index.html` para `apps/proposta/` exige plano de compatibilidade, atualização da prévia e aprovação. Não reorganizar a raiz do repositório apenas para "ficar mais bonito".

Antes de escolher Next.js, React, Supabase, n8n, qualquer hospedagem ou modelo de autenticação, validar necessidade, orçamento, suporte, acessos e integração com os sistemas existentes. **Nenhuma dessas tecnologias está aprovada por este documento.**

## 8. Segurança e dados

- O repositório pode ser público. Tratar tudo que entrar nele como potencialmente visível.
- Nunca inserir tokens, senhas, chaves de API, credenciais de WhatsApp, cookies, dados de clientes ou variáveis secretas no código e no Git.
- Usar secrets do Codespaces, ambiente de hospedagem ou gerenciador seguro quando houver integrações.
- Não copiar dados reais de leads para exemplos, prints, logs ou arquivos versionados.
- Não disparar mensagens, anúncios, cobranças, campanhas ou tarefas em produção sem autorização explícita.
- Não afirmar que uma conexão, automação, pagamento ou deploy foi testado sem evidência.

## 9. Checklist de entrega para qualquer agente

Antes de declarar uma tarefa pronta:

- [ ] A alteração atende exatamente ao pedido?
- [ ] Foram lidos `AGENTS.md`, `docs/ESTADO_DO_PROJETO.md`, `README.md` e o código mais recente?
- [ ] Os preços, escopos e responsabilidades permanecem consistentes?
- [ ] Nenhum recurso ou promessa foi inventado?
- [ ] O HTML abre e os controles essenciais funcionam?
- [ ] A interface permanece legível no celular?
- [ ] O Codespaces e a porta `5500` continuam funcionando?
- [ ] Nenhum segredo ou dado confidencial foi exposto?
- [ ] As alterações foram feitas no repositório e na branch corretos, sem sobrescrever trabalho do outro agente?
- [ ] `docs/ESTADO_DO_PROJETO.md` foi atualizado com decisão, mudança, status, divergências, testes e commit/PR?
- [ ] A resposta final informa o que mudou, o que não mudou e o que ainda depende de aprovação?

## 10. Prioridade das fontes e controle de decisões

Em caso de divergência, seguir esta ordem:

1. Pedido explícito mais recente do responsável pelo projeto.
2. Documento contratual/escopo formal aprovado, quando fornecido.
3. Código e dados atuais verificados no repositório.
4. Este `AGENTS.md` e documentação técnica do projeto.
5. Propostas, versões e ideias antigas, apenas como referência.

Se houver conflito entre o pedido e uma regra antiga, **não alterar silenciosamente a regra**. Explicar a divergência, registrar a nova decisão e atualizar este documento quando apropriado.

## 11. Continuidade entre ChatGPT e Claude

- **Toda sessão começa por releitura do estado atual no GitHub**, não por lembrança de conversa. Verificar branch, commit, alterações pendentes e PRs antes de editar.
- **Registro comum:** `docs/ESTADO_DO_PROJETO.md` documenta separadamente **proposta comercial**, **conceito/design**, **código implementado** e **deploy publicado**; atualizar após cada tarefa material.
- Se ChatGPT ou Claude mudou arquivo ou abriu PR, **inspecionar o diff** antes de continuar. Não sobrescrever nem presumir que está em `main`.
- Mudanças em produção exigem autorização explícita. Preferir branch, PR e prévia; o MD sozinho não altera o HTML do site.
- Quando chegar o contrato citado pelo responsável, ler e comparar com Canva/HTML **antes de assumir que os valores, entregas, direitos de cancelamento ou condições estão aprovados**.

### Resumo obrigatório para agentes

**REALPOLAR é um ecossistema em construção, não uma licença para construir tudo de uma vez.**
Execute somente o que foi solicitado, preserve o que existe, diferencie fatos de planos, não invente escopos, proteja as credenciais e entregue mudanças verificáveis.
