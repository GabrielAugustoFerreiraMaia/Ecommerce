
# Ecommerce Frontend

Projeto frontend de uma loja online simples feita com React, TypeScript, Zustand e Tailwind CSS.

## Tecnologias

- React 18
- TypeScript
- Zustand (para gerenciamento global do estado do carrinho)
- Tailwind CSS (estilização)
- Axios/fetch para consumo de API externa

## Estrutura do projeto

- `src/api/products.ts` - funções para consumir a API de produtos
- `src/components/ProductCard.tsx` - componente para exibir o produto e botão "Adicionar ao carrinho"
- `src/store/useCartStore.ts` - Zustand store para gerenciamento do carrinho
- `src/pages/Home.tsx` - página principal que lista os produtos e gerencia a busca e ações no carrinho
- `src/components/Cart.tsx` - componente que mostra o conteúdo do carrinho
- `src/pages/Checkout.tsx` - página para finalizar a compra, com formulário e resumo

## Rodando localmente

1. Clone o repositório
2. Instale as dependências:

\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. Inicie o servidor de desenvolvimento:

\`\`\`bash
npm start
# ou
yarn start
\`\`\`

O app estará disponível em \`http://localhost:3000\`.

## Uso

- Na página inicial, você pode buscar produtos por nome.
- Clique em "Adicionar ao carrinho" para adicionar o produto.
- O carrinho é mostrado com os itens adicionados, quantidade e total.
- Na página de checkout, você pode finalizar a compra preenchendo seus dados.

---

Se quiser mais funcionalidades, fique à vontade para abrir issues ou pull requests!

---

Desenvolvido por você 🚀
