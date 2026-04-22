# English
# Stack
- Node.js (v24.4.0)
- PostgreSQL (v17)
- Docker (optional)
- TypeScript
- Express
- Zod (data validation)
- Jest + Supertest (testing)
- pg (PostgreSQL driver)
- Tsup

---

# Overview

The e-commerce API is designed to manage product data stored in a PostgreSQL database and expose it to the user interface (UI) through HTTP endpoints. The persistence layer uses PostgreSQL as the primary database. Data access is handled using the `pg` driver with raw SQL queries inside the repository layer (`.repository`), without the use of an ORM.

---

# Project structure

```bash
backend
├── src
│   ├── config
│   │   └── database.ts
│   ├── modules
│   │   └── products
│   │       ├── products.controller.ts
│   │       ├── products.repository.ts
│   │       ├── products.routes.ts
│   │       ├── products.schema.ts
│   │       ├── products.service.ts
│   │       ├── products.test.ts
│   │       ├── products.types.ts
│   │       └── products.validation.ts
│   ├── server.ts
│   ├── app.ts
│   └── shared
│       ├── middleware
│       │   └── notFound.middleware.ts
│       └── types
│           ├── api.ts
│           └── index.ts
├── Dockerfile
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

The folder structure follows a feature-based architecture pattern, where each feature is isolated into its own module. Each module contains its own domain-specific logic and responsibilities.

The `config` folder contains global configurations such as database connection (`database.ts`). The `shared` folder contains reusable components such as middleware and global types that are not tied to a specific feature.

---

## Architectural organization

The project follows a feature-based architecture, where each module groups its own responsibilities such as controller, service, repository, validation, and tests.

---

## Layers and responsibilities

### modules/products

Contains the implementation of the products feature. Each file has a specific responsibility:

- **products.controller.ts**: handles HTTP requests and returns responses.
- **products.service.ts**: contains business logic. It receives data from the controller, processes it if necessary, and communicates with the repository layer.
- **products.repository.ts**: handles communication with the database using raw SQL queries.
- **products.routes.ts**: defines the module routes.
- **products.schema.ts**: defines data schemas (validation/structure).
- **products.validation.ts**: input validation rules.
- **products.types.ts**: domain types and interfaces.
- **products.test.ts**: module tests.

If additional features are required, the same structural pattern can be reused.

---

### config

Contains global application configurations.

- **database.ts**: database connection setup and initialization.

---

### shared

Contains reusable resources across modules, such as middleware and shared types.

---

## Main files

- **app.ts**: application initialization and middleware configuration.
- **server.ts**: HTTP server initialization.
- **Dockerfile**: container configuration.
- **jest.config.js**: test configuration.
- **tsconfig.json**: TypeScript configuration.

---

## Run backend
Configure the database, learn how to click [here](/database/README.md)
Inside the `backend` folder, install dependencies:

```bash
npm install
```

Before starting the project, create a `.env` file in the backend root:

```bash
backend
├── .env
└── ...
```

Inside `.env`, add the environment variable `DATABASE_URL` with your database connection string.

Example:

```bash
DATABASE_URL="postgres://user:password@localhost:5432/ecommerce"
```

Then start the development server:

```bash
npm run dev
```

The API will be available at:

```
http://127.0.0.1:3333
```

---

## Tests

Inside the `backend` folder, run:

```bash
npm run test
```

---

## Endpoints

Base URL:
```
/api
```

---

### List products

**Endpoint:**
```
GET /api/products
```

**Description:**
Returns a list of all registered products.

**Payload:**
Not applicable.

**Response (200):**
```json
{
  "data": [],
  "message": "Products listed successfully"
}
```

---

### Get product by ID

**Endpoint:**
```
GET /api/products/:id
```

**Description:**
Returns a specific product based on the provided ID.

**Parameters:**
- `id` (string | number): product identifier

**Response (200):**
```json
{
  "message": "Product listed successfully",
  "data": [
    {
      "id": 3,
      "name": "Product name",
      "description": "Product Description",
      "price": "67.67",
      "stockQuantity": 67
    }
  ]
}
```

---

### Create product

**Endpoint:**
```
POST /api/products
```

**Description:**
Creates a new product in the system.

**Payload:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": "8.99",
  "stockQuantity": 12
}
```

**Response (201):**
```json
{
  "data": {
    "id": 3,
    "name": "Product Name",
    "description": "Product Description",
    "price": "8.99",
    "stockQuantity": 12
  },
  "message": "Product added successfully"
}
```

---

### Update product

**Endpoint:**
```
PUT /api/products/:id
```

**Description:**
Updates an existing product.

**Parameters:**
- `id` (string | number): product identifier

**Payload:**
```json
{
  "name": "Updated name",
  "description": "Updated description",
  "price": 150,
  "stockQuantity": 5
}
```

**Response (200):**
```json
{
  "data": {
    "id": 3,
    "name": "Updated name",
    "description": "Updated description",
    "price": 150,
    "stockQuantity": 5
  },
  "message": "Product updated successfully"
}
```

---

### Delete product

**Endpoint:**
```
DELETE /api/products/:id
```

**Description:**
Removes a product from the system.

**Parameters:**
- `id` (string | number): product identifier

**Response (200):**
```json
{
  "data": {
    "id": 3,
    "name": "Updated name",
    "description": "Updated description",
    "price": 150,
    "stockQuantity": 5
  },
  "message": "Product successfully deleted"
}
```

# Português
# Staks
* Node.js (v24.4.0)
* PostgreSQL (v17)
* Docker (opcional)
* TypeScript
* Express
* Zod (validação de dados)
* Jest + Superteste (testes)
* pg (driver PostgreSQL)
* Tsup


# Visão geral

A API de e-commerce tem como objetivo gerenciar dados de produtos armazenados em um banco de dados PostgreSQL e expô-los para a interface (UI) por meio de endpoints HTTP. A camada de persistência utiliza PostgreSQL como banco de dados principal. O acesso aos dados é realizado por meio do driver `pg`, utilizando consultas SQL puras dentro da camada de repositório (`.repository`), sem uso de ORM.


# Estrutura do projeto
```
backend
├── src
│   ├── config
│   │   └── database.ts
│   ├── modules
│   │   └── products
│   │       ├── products.controller.ts
│   │       ├── products.repository.ts
│   │       ├── products.routes.ts
│   │       ├── products.schema.ts
│   │       ├── products.service.ts
│   │       ├── products.test.ts
│   │       ├── products.types.ts
│   │       └── products.validation.ts
│   ├── server.ts
│   ├── app.ts
│   └── shared
│       ├── middleware
│       │   └── notFound.middleware.ts
│       └── types
│           ├── api.ts
│           └── index.ts
├── Dockerfile
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```
A estrutura das pastas foi seguindo o modelo do padrão feature-based architecture, que separa as features em modulos/pastas, e dentro dela foram colocadas funcionalidades exclusivas do modulo expecifico. Na pasta config existe a conexão com o banco de dados `database.ts`, a pasta `shared` existe componente que são utilizados por toda a aplicação, que não fazem parte de uma feature expecifica

---
## Organização arquitetural

O projeto segue uma arquitetura baseada em features (feature-based architecture), onde cada módulo agrupa suas próprias responsabilidades, como controller, service, repository, validação e testes.

---

## Camadas e responsabilidades

### modules/products

Contém a implementação da funcionalidade de produtos. Cada arquivo possui uma responsabilidade específica:

- **products.controller.ts**: responsável por receber requisições HTTP e retornar respostas.
- **products.service.ts**: contém regras de negócio. Ele recebe dados do controlador, processa-os se necessário e se comunica com a camada de repositório.
- **products.repository.ts**: responsável pela comunicação com o banco de dados.
- **products.routes.ts**: definição das rotas do módulo.
- **products.schema.ts**: definição de esquemas de dados (validação/estrutura).
- **products.validation.ts**: regras de validação de entrada.
- **products.types.ts**: tipos e interfaces do domínio.
- **products.test.ts**: testes do módulo.

Caso seja necessario criar outras stacks, teoricamente será necessario apenas reutlizar a mesma regra de implementação.

---

### config

Contém configurações globais da aplicação.

- **database.ts**: configuração e inicialização da conexão com o banco de dados.

---

### shared

Contém recursos reutilizáveis entre diferentes módulos, como middlewares e types

---

## Arquivos principais

- **app.ts**: inicialização da aplicação e configuração de middlewares.
- **server.ts**: inicialização do servidor HTTP.
- **Dockerfile**: configuração de container da aplicação.
- **jest.config.js**: configuração de testes automatizados.
- **tsconfig.json**: configuração do TypeScript.

---

## Rodar Backend
Configure o banco de dados, saiba como clicanco [aqui](/database/README.md)
Na pasta `backend` no terminal, instale as dependências:

```
npm install
```

Antes de iniciar o projeto, crie um arquivo `.env` na raiz do backend:

```sh
├── backend
│   ├── .env
│   └── ...
```

Dentro do `.env`, adicione a variável de ambiente `DATABASE_URL` com a URL de conexão do seu banco de dados.

Essa URL depende da configuração do seu ambiente local (Postgres, Docker ou outro SGBD).
Exemplo:
```sh
DATABASE_URL="postgres://usuario:senha@localhost:5432/ecommerce"
```

Em seguida na pasta `backend` no terminal, inicie o servidor em modo desenvolvimento:

```
npm run dev
```

A API estará disponível em:
```
http://127.0.0.1:3333
```

---

## Tests
Na pasta `backend` no terminal, digite o comando:

```
npm run test
```

---

## Endpoints

Base URL:
```
/api
```

---

### Listar produtos

**Endpoint:**
```
GET /api/products
```

**Descrição:**
Retorna a lista de todos os produtos cadastrados.

**Payload:**
Não se aplica.

**Response (200):**
```json
{
    "data": [....],
    "message": "Products listed successfully"
}
```

---

### Buscar produto por ID

**Endpoint:**
```
GET /api/products/:id
```

**Descrição:**
Retorna um produto específico com base no ID informado.

**Parâmetros:**
- `id` (string | number): identificador do produto

**Response (200):**
```json
{
    "message": "Product listed successfully",
    "data": [
        {
            "id": 3,
            "name": "Product name",
            "description": "Product Description",
            "price": "67.67",
            "stockQuantity": 67
        }
    ]
}
```

---

### Criar produto

**Endpoint:**
```
POST /api/products
```

**Descrição:**
Cria um novo produto no sistema.

**Payload:**
```json
{
    "name": "Product Name",
    "description": "Product Description",
    "price": "8.99",
    "stockQuantity": 12
}
```

**Response (201):**
```json
{
    "data": {
        "id": 3,
        "name": "Product Name",
        "description": "Product Description",
        "price": "8.99",
        "stockQuantity": 12
    },
    "message": "Product added successfully"
}
```

---

### Atualizar produto

**Endpoint:**
```
PUT /api/products/:id
```

**Descrição:**
Atualiza os dados de um produto existente.

**Parâmetros:**
- `id` (string | number): identificador do produto

**Payload:**
```json
{
    "name": "Updated name",
    "description": "Updated description",
    "price": 150,
    "stock_quantity": 5
}
```

**Response (200):**
```json
{
    "data": {
        "id": 3,
        "name": "Updated name",
        "description": "Updated description",
        "price": 150,
        "stock_quantity": 5
    },
    "message": "Product updated successfully"
}
```

---

### Deletar produto

**Endpoint:**
```
DELETE /api/products/:id
```

**Descrição:**
Remove um produto do sistema.

**Parâmetros:**
- `id` (string | number): identificador do produto

**Response (200):**
```json
{
    "data": {
        "id": 3,
        "name": "Updated name",
        "description": "Updated description",
        "price": 150,
        "stock_quantity": 5
    },
    "message": "Product successfully deleted"
}
```


