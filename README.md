# Real Polar | Proposta Interativa

Página HTML responsiva para apresentar os planos de marketing da Real Polar e esclarecer dúvidas comerciais.

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

- Em 02/11/2026 a versão publicada era idêntica ao `index.html` da branch `main` (commit `6e39383`), o que indica deploy automático a cada push na `main`. A configuração do projeto não pôde ser conferida porque ele não pertence ao time Vercel `caio21`, acessível neste ambiente.
- Por isso, mudanças devem ser feitas em uma branch e revisadas em pull request antes do merge na `main`, que atualiza o site.
- A Vercel publica todos os arquivos da raiz. Hoje `AGENTS.md` também fica acessível em `/AGENTS.md`.

> O site é público para quem tem o link. A página tem `noindex` para não aparecer no Google, mas os valores da proposta ficam visíveis para qualquer pessoa com o endereço e, se o repositório for público, também no código.

## Arquivos

- `index.html`: página completa, com HTML, CSS e JavaScript nativos, sem dependências externas obrigatórias.
- `.devcontainer/devcontainer.json`: configuração para iniciar a prévia no Codespaces.

## Observações comerciais

O preço da captação em São Paulo depende de cotação com o profissional local. A verba de Meta Ads é paga separadamente à plataforma. Os exemplos de investimento e projeções no simulador não garantem vendas ou número de leads.

> Os quantitativos e limites finais devem ser confirmados no contrato antes de enviar a proposta ao cliente.
