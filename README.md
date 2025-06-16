# Resolução do Teste Técnico — Desenvolvedor(a) Fullstack

Este repositório contém a solução desenvolvida para o desafio técnico da Devnology, que consiste em criar um sistema completo de e-commerce, com frontend web (React), aplicativo mobile (Flutter) e backend (opcional).

---

## 🧪 Sobre o desafio

O objetivo é construir uma aplicação que integre produtos de dois fornecedores externos (APIs públicas), permitindo ao usuário:

- Visualizar e filtrar produtos
- Adicionar/remover itens no carrinho
- Finalizar a compra com formulário do cliente
- Registrar os pedidos realizados

A solução envolve:

- Aplicação Web em React
- Aplicativo Mobile em Flutter
- Backend opcional em Node.js (NestJS opcional) para unificar dados e gerenciar pedidos

---

## 📦 APIs dos fornecedores utilizados

- Fornecedor Brasileiro  
  - Listagem: `GET http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider`  
  - Produto por ID: `GET http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider/:id`

- Fornecedor Europeu  
  - Listagem: `GET http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider`  
  - Produto por ID: `GET http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider/:id`

---

## 🚀 Como rodar o projeto

### Frontend Web (React + TypeScript + Tailwind)

1. Clone o repositório  
2. No terminal, rode:  
   ```bash
   npm install
   npm run dev
   ```
3. Acesse `http://localhost:3000`

### Mobile (Flutter)

1. Tenha o Flutter instalado  
2. Navegue até a pasta do app Flutter  
3. Instale dependências:  
   ```bash
   flutter pub get
   ```
4. Rode o app:  
   ```bash
   flutter run
   ```

### Backend (Node.js)

- O backend está em desenvolvimento e **não está finalizado**  
- Atualmente o frontend e o app Flutter consomem diretamente as APIs públicas dos fornecedores  
- Futuramente, o backend será responsável por unificar os dados dos fornecedores, registrar e gerenciar os pedidos via API REST

---

## ⚙️ Decisões técnicas tomadas

- **Frontend Web:**  
  - React com TypeScript para maior robustez e segurança de tipos  
  - Tailwind CSS para desenvolvimento rápido e estilização responsiva  
  - Zustand para gerenciamento de estado do carrinho pela sua simplicidade e desempenho  
  - Consumo direto das APIs externas para acelerar o desenvolvimento e focar no frontend

- **Mobile:**  
  - Flutter para multiplataforma com alta performance e UI nativa  
  - Provider para gerenciamento reativo do estado do carrinho  
  - Consumo das mesmas APIs externas que o frontend web

- **Backend:**  
  - Optou-se inicialmente por não implementar o backend para agilizar a entrega da aplicação funcional  
  - Futuro backend em Node.js/Express (ou NestJS) para unificação dos dados, persistência dos pedidos e autenticação

- **Arquitetura:**  
  - Separação clara entre frontend, mobile e backend  
  - Reutilização máxima dos modelos e lógica entre plataformas  
  - Uso de APIs públicas mockadas para garantir consistência nos dados

---

## 🔜 Próximos passos e melhorias

- Finalizar backend para persistência e gestão de pedidos, autenticação e registro dos usuários  
- Adicionar funcionalidades avançadas no frontend e mobile (notificações, histórico de pedidos, melhorias UX)  
- Implementar testes automatizados e integração contínua  
- Otimizar consumo e cache das APIs externas para melhor performance  
- Adicionar paginação e filtros avançados na listagem de produtos

---

## 📌 Observações finais

Este projeto é um protótipo funcional que cumpre os requisitos obrigatórios do desafio. A implementação do backend é um diferencial e será incorporada futuramente.

Contribuições, feedbacks e melhorias são muito bem-vindos.

