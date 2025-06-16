# Flutter Shop App

Aplicativo móvel simples desenvolvido em Flutter que consome produtos de fornecedores brasileiros e europeus, permite adicionar itens ao carrinho, visualizar e finalizar a compra.

---

## Funcionalidades

- Consulta produtos de duas APIs (Fornecedor Brasileiro e Europeu)
- Lista de produtos com imagens, nome e preço
- Adicionar produtos ao carrinho com quantidade acumulativa
- Visualização detalhada do carrinho com itens, quantidades e preço total
- Remover itens ou limpar o carrinho inteiro
- Botão para finalizar compra com confirmação (SnackBar)
- Uso de Provider para gerenciamento de estado do carrinho

---

## Tecnologias utilizadas

- Flutter & Dart
- Provider (Gerenciamento de estado)
- HTTP (Consumo de API REST)
- MockAPI.io (APIs de fornecedores)

---

## Estrutura do projeto

- `lib/models` — Modelos (ex: Product)
- `lib/providers` — Providers para gerenciamento de estado (ex: CartProvider)
- `lib/pages` — Telas da aplicação (ex: ProductListPage, CartPage)
- `lib/services` — Serviços para consumo de API (ex: ProductService)
- `lib/widgets` — Componentes reutilizáveis (ex: ProductCard)

---

## Como rodar

1. Tenha o Flutter instalado e configurado: [Flutter installation](https://flutter.dev/docs/get-started/install)
2. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
3. Navegue até a pasta do projeto:
   ```bash
   cd flutter-shop-app
   ```
4. Instale as dependências:
   ```bash
   flutter pub get
   ```
5. Rode o app:
   ```bash
   flutter run
   ```

---

## Próximos passos

- Implementar tela de checkout com formulário para dados do cliente
- Adicionar persistência local para manter estado do carrinho
- Melhorar UI/UX com animações e melhor responsividade
- Implementar autenticação de usuários
- Integrar com backend real para finalização de pedidos

---

## Contato

Projeto desenvolvido por [Gabriel Augusto] — [gabrielaugustofmaia@gmail.com]

---

## Licença

MIT License © [Ano] [Seu Nome]
