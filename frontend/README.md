# Frontend

---

# English

## Stack

### Frontend
* React (Vite)
* TypeScript
* Tailwind CSS
* React Router DOM
* React Hook Form
* Zod (validation)
* Axios (HTTP requests)
* Vitest + Testing Library (tests)

### General
- Node.js (v24.4.0)
- PostgreSQL (v17)
- Docker (optional)
- TypeScript

---

## Features

The UI is a responsive CRUD application for managing products.

Implemented features:

* Product listing in table format
* Create new products
* Edit existing products
* Delete products with confirmation dialog
* Client-side form validation with Zod
* API communication via Axios
* Navigation using React Router
* State management using React Context

Tests are defined but not fully implemented.

---

## Pages

### Home Page
* Displays all products in a table format
* Supports navigation to edit and delete actions

### Add Product Page
* Form to create a new product
* Uses React Hook Form + Zod validation

### Edit Product Page
* Form to update an existing product
* Pre-filled with selected product data

### Delete Product Flow
* Confirmation dialog before removing a product

---

## Architecture

The frontend follows a feature-based architecture pattern, where each domain is isolated inside its own module.

### Structure overview

- `features/products`: contains all product-related logic
- `shared`: contains reusable components, services, types, and utilities

---

## State Management

Product state is managed using React Context.

Responsibility includes:
- storing product list
- synchronizing data with API
- providing actions for CRUD operations

---

## Folder Structure

```bash
frontend
├── src
│   ├── features
│   │   └── products
│   │       ├── components
│   │       ├── pages
│   │       ├── routes
│   │       ├── schemas
│   │       ├── services
│   │       ├── state
│   │       └── types
│   ├── shared
│   │   ├── components
│   │   ├── errors
│   │   ├── routes
│   │   ├── services
│   │   └── types
│   ├── lib
│   ├── main.tsx
│   └── App.tsx
```

---

## API Communication

All HTTP requests are handled through a centralized Axios service inside `shared/services/ecommerceAPI`.

The frontend communicates with the backend through REST endpoints exposed by the API.

---

## Styling

The UI is styled using Tailwind CSS and follows a mobile-first approach, with progressive enhancement for larger screens.

---

## Testing

Tests are set up using Vitest. To run the test:

Inside the `frontend` folder, run:

```bash
npm run test
```

---

# Português

## Stack

### Frontend
* React (Vite)
* TypeScript
* Tailwind CSS
* React Router DOM
* React Hook Form
* Zod (validação)
* Axios (requisições HTTP)
* Vitest + Testing Library (testes)

### Geral
- Node.js (v24.4.0)
- PostgreSQL (v17)
- Docker (opcional)
- TypeScript

---

## Funcionalidades

A interface é uma aplicação CRUD responsiva para gerenciamento de produtos.

Funcionalidades implementadas:

* Listagem de produtos em formato de tabela
* Criação de novos produtos
* Edição de produtos existentes
* Exclusão de produtos com diálogo de confirmação
* Validação de formulários no cliente com Zod
* Comunicação com API via Axios
* Navegação com React Router
* Gerenciamento de estado com React Context

Os testes estão definidos, porém não foram totalmente implementados.

---

## Páginas

### Home Page
* Exibe todos os produtos em formato de tabela
* Permite navegação para ações de edição e exclusão

### Add Product Page
* Formulário para criação de um novo produto
* Utiliza React Hook Form + validação com Zod

### Edit Product Page
* Formulário para atualização de um produto existente
* Preenchido com os dados do produto selecionado

### Delete Product Flow
* Diálogo de confirmação antes da remoção de um produto

---

## Arquitetura

O frontend segue o padrão de arquitetura baseada em features, onde cada domínio é isolado dentro do seu próprio módulo.

### Visão da estrutura

- `features/products`: contém toda a lógica relacionada a produtos
- `shared`: contém componentes reutilizáveis, serviços, tipos e utilitários

---

## Gerenciamento de Estado

O estado dos produtos é gerenciado utilizando React Context.

Responsabilidades:
- armazenar lista de produtos
- sincronizar dados com a API
- fornecer ações de CRUD

---

## Estrutura de Pastas

```bash
frontend
├── src
│   ├── features
│   │   └── products
│   │       ├── components
│   │       ├── pages
│   │       ├── routes
│   │       ├── schemas
│   │       ├── services
│   │       ├── state
│   │       └── types
│   ├── shared
│   │   ├── components
│   │   ├── errors
│   │   ├── routes
│   │   ├── services
│   │   └── types
│   ├── lib
│   ├── main.tsx
│   └── App.tsx
```

---

## Comunicação com API

Todas as requisições HTTP são centralizadas em um serviço Axios dentro de `shared/services/ecommerceAPI`.

O frontend se comunica com o backend através de endpoints REST expostos pela API.

---

## Estilização

A interface é estilizada com Tailwind CSS e segue a abordagem mobile-first, com adaptação progressiva para telas maiores.

---

## Testes

Os testes são configurados utilizando Vitest. Para executar os testes:

Dentro da pasta `frontend`, execute:

```bash
npm run test
```