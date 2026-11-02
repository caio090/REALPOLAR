# Real Polar | Proposta Interativa

> **Trabalho coordenado entre ChatGPT e Claude:** antes de qualquer alteração, leia [AGENTS.md](AGENTS.md), [docs/ESTADO_DO_PROJETO.md](docs/ESTADO_DO_PROJETO.md) e [docs/AUDITORIA_DESIGN_REALPOLAR.md](docs/AUDITORIA_DESIGN_REALPOLAR.md). O Claude Code deve iniciar também pelo [CLAUDE.md](CLAUDE.md). Depois da alteração, atualize o registro de decisões, diferenças entre Canva e código, pendências, testes, branch e PR.
>
> **Atenção comercial (01/11/2026):** o HTML da `main` ainda apresenta valores diferentes dos verificados na proposta do Canva. O registro de divergências está em `docs/ESTADO_DO_PROJETO.md`. A correção do HTML precisa passar por revisão e prévia antes de usar com o cliente.

Página HTML responsiva para apresentar os planos de marketing da Real Polar e esclarecer dúvidas comerciais.

## Protótipo em revisão

`prototipo/index.html` é a nova versão da apresentação comercial: planos e investimento logo no início, pop-up explicativo para cada serviço, mapa de serviços e comparativo lado a lado, produção audiovisual, primeiros 90 dias, acompanhamento e simulador.

**Para editar serviços, estados ou textos:** altere somente a tabela `#cmp` (comparativo). Cartões, mapa, pop-ups e resumo copiado são gerados a partir dela. Cada célula de plano usa `data-st` (`incluido`, `limitado`, `pendente`, `conflito`, `opcional`, `fora`) e a explicação fica no `<details>` da linha. Campos comuns da explicação: `short` (definição neutra do serviço), `dep` (o que precisamos da Real Polar), `ext` (custos externos), `qty` (quantidade) e, no painel, `hyp` (possibilidades não aprovadas). **O conteúdo de cada plano fica em `<div data-plan-detail="E|S|A">`**, com `lead` (resumo do plano), `get` (O que recebo), `how` (Como funciona) e `lim` (Limites e custos), até 3 itens cada. Os três planos precisam ter textos diferentes; um item fora da mensalidade ou a confirmar descreve a ausência, nunca benefícios. O atributo `data-rel` da linha liga a um serviço relacionado.

**Edição avulsa do Econômico:** o preço está na constante `ECON_EDIT_UNIT` (R$ 180) do script e no item `X04` da tabela; altere os dois juntos.

**Logo:** `prototipo/assets/real-polar-logo-original.png` é o arquivo original e não deve ser editado. As cópias `real-polar-logo-96/192/512.png` são só recortes do enquadramento e redimensionamentos para exibição. **Ainda não substitui a página principal** e não deve ser enviado ao cliente antes da aprovação.

- No Codespaces: porta **5500**, caminho `/prototipo/`.
- Na prévia da Vercel do pull request: mesmo caminho, `/prototipo/`.
- Auditoria, decisões e testes: [docs/AUDITORIA_DESIGN_REALPOLAR.md](docs/AUDITORIA_DESIGN_REALPOLAR.md), seções I a Q.
- O aviso amarelo "Ambiente de teste" no topo é interno e deve ser removido antes de qualquer versão para o cliente.

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
- FAQ interativo com busca e filtros.
- Etapas de anúncio: Diagnóstico LKT, período de validação, definição de metas, organização dos públicos, captação e melhorias.
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
- Logo oficial (símbolo RP). Enquanto o arquivo original não estiver no repositório, a página usa só a marca em texto "REAL POLAR".

## Publicação

A página está publicada na Vercel, no projeto `realpolar-proposta`, em https://realpolar-proposta.vercel.app/.

- O repositório está conectado à Vercel (time `caio21`): cada push na `main` atualiza o site, e cada pull request gera um link de prévia, no formato `https://realpolar-proposta-git-<branch>-caio21.vercel.app/`, informado nos checks do PR.
- Por isso, mudanças devem ser feitas em uma branch e conferidas na prévia do PR antes do merge na `main`.
- Existe um segundo projeto Vercel ligado ao mesmo repositório, `realpolar` (https://realpolar.vercel.app/), que publica a mesma página. O endereço oficial para o cliente é o do projeto `realpolar-proposta`.
- A Vercel publica todos os arquivos da raiz. Hoje `AGENTS.md` também fica acessível em `/AGENTS.md`.

> O site é público para quem tem o link. A página tem `noindex` para não aparecer no Google, mas os valores da proposta ficam visíveis para qualquer pessoa com o endereço e, se o repositório for público, também no código.

## Arquivos

- `index.html`: página completa, com HTML, CSS e JavaScript nativos, sem dependências externas obrigatórias.
- `.devcontainer/devcontainer.json`: configuração para iniciar a prévia no Codespaces.

## Observações comerciais

O preço da captação em São Paulo depende de cotação com o profissional local. A verba de Meta Ads é paga separadamente à plataforma. Os exemplos de investimento e projeções no simulador não garantem vendas ou número de leads.

> Os quantitativos e limites finais devem ser confirmados no contrato antes de enviar a proposta ao cliente.
