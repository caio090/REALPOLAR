# Real Polar | Proposta Interativa

> **Trabalho coordenado entre ChatGPT e Claude:** antes de qualquer alteração, leia [AGENTS.md](AGENTS.md), [docs/ESTADO_DO_PROJETO.md](docs/ESTADO_DO_PROJETO.md) e [docs/AUDITORIA_DESIGN_REALPOLAR.md](docs/AUDITORIA_DESIGN_REALPOLAR.md). O Claude Code deve iniciar também pelo [CLAUDE.md](CLAUDE.md). Depois da alteração, atualize o registro de decisões, diferenças entre Canva e código, pendências, testes, branch e PR.
>
> **Situação (02/11/2026):** a V5 foi publicada na raiz; o refinamento V8 está em branch de revisão da apresentação comercial, com os valores R$ 1.280 / R$ 2.100 / R$ 3.200. A versão anterior (R$ 1.100 / R$ 1.800 / R$ 3.200) fica só no histórico do git. Pendências de contrato continuam em `docs/ESTADO_DO_PROJETO.md`.

Página HTML responsiva para apresentar os planos de marketing da Real Polar e esclarecer dúvidas comerciais.

## Página da proposta

`index.html` é a apresentação comercial: planos e investimento logo no início, pop-up explicativo para cada serviço, mapa de serviços e comparativo lado a lado, produção audiovisual, primeiros 90 dias, acompanhamento, simulador e resumo executivo com perguntas rápidas. Os cartões têm resumo de três serviços e expansão independente; ambos leem `#cmp`.

**Para editar serviços, estados ou textos:** altere somente a tabela `#cmp` (comparativo). Cartões, mapa, pop-ups e resumo copiado são gerados a partir dela. Cada célula de plano usa `data-st` (`incluido`, `limitado`, `pendente`, `conflito`, `opcional`, `fora`) e a explicação fica no `<details>` da linha. Campos comuns da explicação: `short` (definição neutra do serviço), `dep` (o que precisamos da Real Polar), `ext` (custos externos), `qty` (quantidade) e, no painel, `hyp` (possibilidades não aprovadas). **O conteúdo de cada plano fica em `<div data-plan-detail="E|S|A">`**, com `lead` (resumo do plano), `get` (O que recebo), `how` (Como funciona) e `lim` (Limites e custos), até 3 itens cada. Os três planos precisam ter textos diferentes; um item fora da mensalidade ou a confirmar descreve a ausência, nunca benefícios. O atributo `data-rel` da linha liga a um serviço relacionado.

**Serviços:** o filtro tem somente os três planos e começa em Presença Ampliada. Ele e os pop-ups não mudam o orçamento. O estado aberto de cada cartão é preservado ao alternar o seletor mobile.

**Celular e tablet (até 900 px):** o menu vira o botão "Seções" e os planos aparecem um por vez pelo seletor `.plantabs`, que só muda o cartão exibido, nunca o simulador. As fontes usam `rem`, para acompanhar a fonte do navegador; novos tamanhos devem seguir o mesmo padrão.

**Edição avulsa do Econômico:** o preço está na constante `ECON_EDIT_UNIT` (R$ 180) do script e no item `X04` da tabela; altere os dois juntos.

**Logo (sem uso na página desde a V10, que tirou a marca do cabeçalho e da abertura):** `assets/real-polar-logo-original.png` é o arquivo original e não deve ser editado. As cópias `real-polar-logo-96/192/512.png` são só recortes do enquadramento e redimensionamentos para exibição.

- No Codespaces: porta **5500**, caminho `/`.
- Na prévia da Vercel do pull request e na produção: caminho `/`.
- Endereços de produção: **https://realpolar.vercel.app** (curto, projeto `realpolar`) e https://realpolar-proposta.vercel.app (projeto `realpolar-proposta`). Os dois publicam a mesma `main`.
- `.vercelignore` mantém `AGENTS.md`, `CLAUDE.md`, `README.md`, `docs/` e `.devcontainer/` fora do site publicado; eles ficam só no GitHub.
- Auditoria, decisões e testes: [docs/AUDITORIA_DESIGN_REALPOLAR.md](docs/AUDITORIA_DESIGN_REALPOLAR.md), seções I a S.

## Ver a página (não o código)

**Endereço publicado:** https://realpolar-proposta.vercel.app/

Use sempre esse endereço para ver ou enviar a proposta. Abrir `index.html` na tela de arquivos do GitHub, ou por um link `raw.githubusercontent.com`, mostra apenas o código-fonte, não a página.

## Editar e pré-visualizar no GitHub Codespaces

1. Abra este repositório no GitHub.
2. Clique em **Code → Codespaces → Create codespace on main**.
3. O ambiente inicia um servidor Python na porta **5500** automaticamente.
4. Clique na notificação da porta 5500, ou em **Ports → 5500 → Open in Browser**.

O site será exibido diretamente a partir de `index.html`. Para editar textos, cores, FAQ ou planos, altere `index.html` e atualize a prévia.

## Conteúdo

- Comparação dos planos Econômico, Essencial e Ampliado.
- Valores de mensalidade separados da verba de anúncios e de captação terceirizada.
- Quatro perguntas rápidas em acordeões acessíveis.
- Primeiros 90 dias: estruturar, testar e avaliar; acompanhamento em linguagem de cliente.
- Explicação da verba de Meta Ads e do leilão, sem promessa de resultados.
- Simulador de investimento.

## Antes de enviar ao cliente

No início do `<script>` em `index.html`, preencha o objeto `PROPOSTA`:

```js
const PROPOSTA={
  agencia:'Nome da agência',
  whatsapp:'5511999999999',   // DDI + DDD + número, só dígitos
  email:'contato@agencia.com.br',
  validade:'30/11/2026'
};
```

Campos vazios ficam ocultos. Com eles preenchidos, a página mostra quem assina a proposta, a validade, um botão de WhatsApp e o e-mail de contato, e inclui esses dados no resumo copiado.

## Pendências antes de enviar

- Dados do bloco `PROPOSTA` (agência, WhatsApp, e-mail, validade).
- Quantidade de publicações mensais do Plano Econômico e verba sugerida de anúncios para ele. No simulador, ao escolher o Econômico, a verba diária digitada é mantida (não é zerada nem substituída por um valor sugerido).
- Limites do bônus de artes do Ampliado (quantidade, tipos e revisões).
- Periodicidade dos relatórios do Ampliado, quantidades, revisões e requisitos de rebranding/painel em contrato. A logo oficial já está em `assets/` e permanece no cabeçalho.

## Publicação

A página está publicada na Vercel, no projeto `realpolar-proposta`, em https://realpolar-proposta.vercel.app/.

- O repositório está conectado à Vercel (time `caio21`): cada push na `main` atualiza o site, e cada pull request gera um link de prévia, no formato `https://realpolar-proposta-git-<branch>-caio21.vercel.app/`, informado nos checks do PR.
- Por isso, mudanças devem ser feitas em uma branch e conferidas na prévia do PR antes do merge na `main`.
- Existe um segundo projeto Vercel ligado ao mesmo repositório, `realpolar` (https://realpolar.vercel.app/), que publica a mesma página. O endereço oficial para o cliente é o do projeto `realpolar-proposta`.
- `.vercelignore` exclui documentos internos e `docs/`. Em 02/11/2026, `/AGENTS.md`, `/CLAUDE.md`, `/README.md`, `/docs/ESTADO_DO_PROJETO.md` e `/prototipo/` retornaram 404 na produção oficial.

> O site é público para quem tem o link. A página tem `noindex` para não aparecer no Google, mas os valores da proposta ficam visíveis para qualquer pessoa com o endereço e, se o repositório for público, também no código.

## Arquivos

- `index.html`: página completa, com HTML, CSS e JavaScript nativos, sem dependências externas obrigatórias.
- `.devcontainer/devcontainer.json`: configuração para iniciar a prévia no Codespaces.

## Observações comerciais

O preço da captação em São Paulo depende de cotação com o profissional local. A verba de Meta Ads é paga separadamente à plataforma. Os exemplos de investimento e projeções no simulador não garantem vendas ou número de leads.

> Os quantitativos e limites finais devem ser confirmados no contrato antes de enviar a proposta ao cliente.

## Verificação do V8

Relatório e capturas: [docs/RELATORIO_V8.md](docs/RELATORIO_V8.md). O teste de navegador é `docs/testes/v8.cjs`, sem dependências adicionadas à aplicação. Com Playwright/Chromium já disponíveis fora do repositório e servidor na porta 5500:

```bash
NODE_PATH=/home/codespace/realpolar-qa/node_modules node docs/testes/v8.cjs http://localhost:5500/ /tmp/realpolar-v8
```

Ajuste `NODE_PATH` para sua instalação existente. O script aceita URL da prévia como primeiro argumento e diretório de evidências como segundo. Não instala pacotes e não publica nada.
