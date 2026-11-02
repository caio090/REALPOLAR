# Real Polar | Proposta Interativa

Página HTML responsiva para apresentar os planos de marketing da Real Polar e esclarecer dúvidas comerciais.

## Como abrir no GitHub Codespaces

1. Abra este repositório no GitHub.
2. Clique em **Code → Codespaces → Create codespace on main**.
3. O ambiente inicia um servidor Python na porta **5500** automaticamente.
4. Clique na notificação da porta 5500, ou em **Ports → 5500 → Open in Browser**.

O site será exibido diretamente a partir de `index.html`. Para editar textos, cores, FAQ ou planos, altere `index.html` e atualize a prévia.

## Conteúdo

- Comparação dos planos Econômico, Essencial e Ampliado.
- Valores de mensalidade separados da verba de anúncios e de captação terceirizada.
- FAQ interativo com busca e filtros.
- Etapas de anúncio: Diagnóstico LKT, período de validação, definição de públicos, captação de contatos e melhorias.
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

Pendente de definição: quantidade de publicações mensais do Plano Econômico e verba sugerida de anúncios para ele. No simulador, ao escolher o Econômico, a verba diária digitada é mantida (não é zerada nem substituída por um valor sugerido).

## Opções para publicar o link (a avaliar)

O Codespaces serve só para prévia interna. Nenhuma hospedagem foi escolhida ainda (ver `AGENTS.md`, seção 7). Uma opção sem custo, se aprovada:

1. No GitHub, vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Após alguns minutos, o site fica em `https://<usuario>.github.io/REALPOLAR/`.

> GitHub Pages em repositório privado exige plano pago. Se o repositório for público, os valores da proposta ficam visíveis no código. A página já tem `noindex` para não aparecer no Google, mas qualquer pessoa com o link consegue abri-la. Alternativa: publicar só o `index.html` na Netlify (arrastar e soltar em app.netlify.com/drop).

## Arquivos

- `index.html`: página completa, com HTML, CSS e JavaScript nativos, sem dependências externas obrigatórias.
- `.devcontainer/devcontainer.json`: configuração para iniciar a prévia no Codespaces.

## Observações comerciais

O preço da captação em São Paulo depende de cotação com o profissional local. A verba de Meta Ads é paga separadamente à plataforma. Os exemplos de investimento e projeções no simulador não garantem vendas ou número de leads.

> Os quantitativos e limites finais devem ser confirmados no contrato antes de enviar a proposta ao cliente.
