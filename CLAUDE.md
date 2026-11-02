# CLAUDE.md | REAL POLAR

> Instruções persistentes para o Claude Code neste repositório. Última revisão: 01/11/2026.
> Este arquivo **não substitui** as fontes abaixo. Leia-as antes de planejar ou editar.

## Ordem de leitura obrigatória

1. `AGENTS.md`: regras permanentes, segurança, escopo e publicação.
2. `docs/ESTADO_DO_PROJETO.md`: estado compartilhado ChatGPT ↔ Claude, decisões comerciais, divergências, pendências, branch e histórico.
3. `docs/AUDITORIA_DESIGN_REALPOLAR.md`: diagnóstico atual de UX, proposta de experiência, tarefas e critérios de aceite.
4. `README.md`, `index.html`, `.devcontainer/devcontainer.json` e arquivos relevantes da branch ativa.
5. Fonte comercial: Canva `https://canva.link/konuf40jjeznfjb` (design `DAHZWbzR63g`, sobretudo página 9); contrato **somente quando de fato disponibilizado**. Se indisponível, registrar limitação e não inventar entregáveis.

## Identidade da tarefa

A prioridade atual é tornar uma **página de esclarecimento de dúvidas comerciais da Real Polar** extremamente intuitiva e profissional. Ela não é um site institucional completo, painel ativo, sistema de CRM ou apresentação genérica de preços. A experiência ideal é uma narrativa curta com perguntas clicáveis, mapa conectado de ações, etapas dos 90 dias, métricas e responsabilidades. Planos são consulta, não a primeira tela.

## Protocolo para executar design

- Primeiro faça uma auditoria do código e, **se o navegador estiver disponível**, capture a interface real em desktop e mobile antes de redesign. Diferencie achados de código de achados visuais.
- Inventarie as **skills/plugins realmente instalados neste ambiente** e leia as instruções aplicáveis a frontend, UX, UI, acessibilidade, motion, design QA e testes. Não diga que uma skill foi executada sem evidência; não instalar dependências sem necessidade.
- Apresente proposta de componentes, interações e hierarquia; preserve a identidade Real Polar, a logo fornecida e as funcionalidades existentes. **Não refaça a marca ou use ícones genéricos como substituto.**
- Implemente somente o escopo aprovado em branch dedicada e valide o resultado com navegador e testes. Evite excesso de efeitos, bibliotecas desnecessárias e texto longo.
- Se o responsável ainda não aprovou a direção visual, limite-se a auditoria, wireframe/estrutura e protótipo isolado, sem substituir o HTML principal.
- O logo metálico azul-marinho fornecido na conversa **ainda não está garantido como arquivo deste repositório**. Não afirmar que foi incorporado sem verificar o asset.
- Datas, termos contratuais, número de artes e vídeos, metas de leads, preço de filmagem e Google Meu Negócio/SEO só podem ser afirmados com base nas fontes atualizadas. **Há divergências registradas entre Canva e HTML.**

## Regras de sincronização e entrega

1. Na abertura: verificar `git status`, `git branch`, `git log -1`, `git fetch`, PRs recentes e diffs. Não sobrescrever alteração de ChatGPT, Claude ou colaborador.
2. Antes de qualquer alteração comercial: validar Canva + contrato disponível e confrontar todas as ocorrências no HTML, FAQ e simulador.
3. Ao concluir cada tarefa: atualizar `docs/ESTADO_DO_PROJETO.md` com **decidido / proposto / codado / testado / publicado**, arquivos, branch/commit, limitações, divergências e próximos passos. Atualizar `docs/AUDITORIA_DESIGN_REALPOLAR.md` quando a auditoria ou desenho mudar.
4. Abrir PR para revisão; **não fazer merge na `main` nem deploy em produção sem aprovação explícita**. Não marcar como pronto algo não testado.
5. Resposta final deve listar objetivamente: o que foi feito, o que não foi feito, provas de testes, link da prévia se existir, PR, pendências e decisões de escopo necessárias.

**Ponto de entrada:** leia a seção "Brief de execução para o Claude" em `docs/AUDITORIA_DESIGN_REALPOLAR.md` antes de começar uma revisão de design.
