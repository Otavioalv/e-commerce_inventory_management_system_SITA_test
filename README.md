
---
# English
# About the project 
This project consists of a simple product management system (e-commerce), consisting of backend, database and frontend.
The application allows you to perform product listing, creation, updating and removal operations. The data is stored in a single table (products) in the database.
Each product has the following structure:

```json
 {
    "id": 1
    "name": "Product name" 
    "description": "Product description"
    "price": "99.99"
    "stockQuantity": 10
 }
``` 

The products table exclusively contains these fields and is the only one used in the application.
On the frontend, there are interfaces to view products and perform creation, editing and deletion operations, consuming the backend API.

---


# Stacks
### General
* Node.js (v24.4.0)
* PostgreSQL (v17)
* Docker (Optional)
* TypeScript

### Backend
* Express
* Zod (data validation)
* Jest + Supertest (tests)
* pg (PostgreSQL driver)
* Tsup

### Frontend
* React (Vite) + Tailwind CSS
* React Router DOM
* React Hook Form
* Zod (validation)
* Vitest (tests)
* Axios (HTTP requests)


---
# Features
The application is made up of three main parts: database, backend (API) and frontend interface. It was created in the following order: Backend (database and api) and frontend

### Database
A single table (products) was created in the database, responsible for storing product data. The table contains fields such as identification, name, description, price and quantity in stock. Restrictions such as primary key, mandatory fields and integrity validations were applied. 

* [See database documentation](./database/README.md)

### Backend
The backend exposes a REST API responsible for CRUD (creation, reading, updating and removing) operations of products. Endpoints were implemented for each operation, with data validation using Zod at application entry points. The project structure follows the feature-based architecture standard, with the aim of improving organization, facilitating maintenance and allowing scalability. Automated tests were also implemented using Jest and Supertest, covering the API endpoints. Tests validate responses, HTTP status, and the behavior of CRUD operations.
* [See backend documentation](./backend/README.md)

### Frontend
The frontend was developed using React (Vite) + Tailwindcss, also following the feature-based architecture standard for organizing pages, components, services, types, etc. Each page was created following the mobile first standard, then desktop.
The interface allows:
* list products in table format
* create new products
* edit existing products
* exclude products

Forms use validation with Zod, integrated with form management. The state of products is managed with React Context. Tests were implemented with Vitest and Testing Library, focused on the flow of product pages such as (form filling, user actions and navigation).
* [See frontend documentation](./frontend/README.md)

---


# Run the application
The application can be executed in two ways:
* Via Docker: requires Docker to be installed and configured in the environment
* Manual (via terminal): requires environment setup and running services separately.

### Via Docker
At the root of the project:
```sh
/e-commerce_inventory_management_system_SITA_test/
```

In the terminal, run:
```sh
 docker compose up --build -d 
```
* -d to run in background.

It will look like this (illustrative example):
```shell
/e-commerce_inventory_management_system_SITA_test/$ docker compose up --build -d 
```

This command will create and start the application containers.

##### Access
* To access the interface (Frontend), in the browser:
```sh
http://127.0.0.1:3000/ 
```

* To access the API:
```
http://127.0.0.1:3333/
```

* To access the database:
```
postgres://otavio:4d1v1nh4@localhost:5432/ecommerce
```

<br>

### Manual
##### Database
We start with the database

In PostgreSQL, run the following command:
```sql
CREATE DATABASE ecommerce;
```

Then connect to the database using psql:
```sh
\c ecommerce
``` 
* This command switches to the newly created database.

If you are using a graphical interface (such as pgAdmin or another DBMS), simply select the `ecommerce` database before executing the next commands. Note: make sure you are using the correct database
```sql
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    stock_quantity INTEGER NOT NULL CHECK (stock_quantity >= 0)
);
```

For more details about the SQL code [click here](/database/createDatabase.sql)


##### Backend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── backend
│   ├── ...
```

In the `backend` folder, install dependencies:

```
npm install
```

Before starting the project, create a `.env` file in the backend root:

```sh
├── backend
│   ├── .env
│   └── ...
```

Inside `.env`, add the environment variable `DATABASE_URL` with your database connection URL.

This URL depends on your local environment configuration (Postgres, Docker or other DBMS).
Example:
```sh
DATABASE_URL="postgres://user:password@localhost:5432/ecommerce"
```

Then in the `backend` folder, start the development server:

```
npm run dev
```

The API will be available at:
```
http://127.0.0.1:3333
```

##### Frontend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── frontend
│   ├── ...
```

In the `frontend` folder, install dependencies:

```
npm install
```

Then in the `frontend` folder, start the application in development mode:

```
npm run dev
```

The frontend will be available at:

```
http://localhost:5174/
```
---
# Tests

##### Frontend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── frontend
│   ├── ...
```

In the `frontend` folder, run the command in the terminal:
```
npm run test
```

##### Backend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── backend
│   ├── ...
```

In the `backend` folder, run the command in the terminal:

```
npm install
```

---

# Design decisions and challenges

In the application design, as mentioned previously, the feature-based architecture model was used in both the frontend and backend. This choice was made considering this model to be more organized, with good scalability and maintenance capacity. Separation by features makes it easier to visualize the project and reduces the impact of changes, as changes tend to be isolated within each feature. From my point of view, this makes the code more understandable and structured. Still, I recognize that other approaches exist and that implementation can be improved over time. I created a docker-compose.yml file to simplify project execution.

In the backend, there was a difficulty in interpreting the test requirements. The statement presented points such as: definition of a product model ("Define a Product model with the following fields...") and also the need to write SQL queries ("Write SQL queries to perform CRUD operations"). These two points raised doubts in my mind, as they could indicate both the use of an ORM and the direct use of SQL.
Given this, I considered two approaches, using an ORM or using SQL queries.
As there was no possibility of clarification during the test, just me and the pdf of the technical test, I chose to use SQL queries directly, in line with the query writing requirement. This decision was made even considering the possibility of using a hybrid approach (ORM + SQL), as in the case of Prisma. Still, I preferred to stick to using pure SQL in this context. The application, however, was structured in a way that allows changes at this level, enabling future migration to ORM without major impacts. Basic validations with Zod and a start of standardization of API responses were also implemented, allowing future evolution as necessary.
* ([Click here for more backend information](./backend/README.md)).


In frontend development, integration with the API was done using Axios to consume the endpoints.
Product data state management was implemented with React Context, centralizing listing, creating, updating and removing operations. The interface was developed responsively, adapting to different screen sizes. Tests were also implemented using Vitest, focusing on the behavior of product pages, including form flow, user actions and navigation. I still have some difficulty using useMemo and React memo, but during development I did not identify a real need for use, at least in the way the application was built. Regarding Zod in handling form errors, I encountered a difficulty with numeric fields, since the inputs return values ​​as strings. This led to inconsistency in type validation. I tried using ```z.coerce```, but I had typing problems when integrating with React Hook Form. As an alternative, I chose to keep the values ​​as a string during validation and perform the conversion when sending the data. It's not the most ideal approach, but it solved the problem without impacting the operation of the application. Therefore, I prioritized the delivery of the main functionalities. This point did not compromise the functioning of the system, so I chose to continue this way. If it was something critical, I would look for the best possible solution.
* [Click here for more frontend information](./frontend/README.md)

 
I believe that there are still several points for improvement, mainly in error handling and a more consistent standardization of API responses. Although an initial base already exists, it can be refined and expanded. These adjustments apply to both the backend and frontend. Authentication with JWT is not implemented at this time. As the deadline was approaching and this was an additional feature, I chose to prioritize documentation and delivery of the project. If there is time, the idea is to implement at least a basic version and document the approach adopted.

---


# Português
# Sobre o projeto 
Este projeto consiste em um sistema simples de gerenciamento de produtos (e-commerce), composto por backend, banco de dados e frontend.
O aplicativo permite realizar operações de listagem, criação, atualização e remoção de produtos. Os dados são armazenados em uma única tabela (produtos) no banco de dados.
Cada produto possui a seguinte estrutura:
```json
 {
    "id": 1
    "name": "Product name" 
    "description": "Product description"
    "price": "99.99"
    "stockQuantity": 10
 }
``` 
A tabela de produtos contém exclusivamente estes campos e é a única utilizada na aplicação.
No frontend, existem interfaces para visualizar produtos e realizar operações de criação, edição e exclusão, consumindo a API backend.

---

# Staks
### Em geral
* Node.js (v24.4.0)
* PostgreSQL (v17)
* Docker (opcional)
* TypeScript

### Backend
* Express
* Zod (validação de dados)
* Jest + Superteste (testes)
* pg (driver PostgreSQL)
* Tsup

### Frontend
* React (Vite) + Tailwind CSS
* React Router DOM
* React Hook Form
* Zod (validação)
* Vitest (testes)
* Axios (solicitações HTTP)


---

# Features
A aplicação é composta por três partes principais: banco de dados, backend (API) e interface frontend. Foi criado na seguinte ordem: Backend (banco de dados e api) e frontend.

### Banco de dados
Foi criada uma única tabela (produtos) no banco de dados, responsável por armazenar os dados dos produtos. A tabela contém campos como identificação, nome, descrição, preço e quantidade em estoque. Foram aplicadas restrições como chave primária, campos obrigatórios e validações de integridade. 
* [Veja a documentação do banco de dados](./database/README.md)

### Backend
O backend expõe uma API REST responsável pelas operações CRUD (criação, leitura, atualização e remoção) de produtos. Foram implementados endpoints para cada operação, com validação de dados utilizando Zod nos end-points da aplicação. A estrutura do projeto segue o padrão feature-based architecture, com o objetivo de melhorar a organização, facilitar a manutenção e permitir escalabilidade. Testes automatizados também foram implementados usando Jest e Supertest, cobrindo os endpoints da API. Os testes validam as respostas, o status HTTP e o comportamento das operações CRUD.
* [Veja a documentação de back-end](./backend/README.md)


### Frontend
O frontend foi desenvolvido utilizando React (Vite) + Tailwindcss, seguindo também o padrão feature-based architecture para organização de páginas, componentes, serviços, tipos, etc.
A interface permite:

* listar produtos em formato de tabela
* criar novos produtos
* editar produtos existentes
* excluir produtos

Os formulários utilizam validação com Zod, integrado ao gerenciamento de formulários. O estado dos produtos é gerenciado com React Context. Foram implementados testes com Vitest e Testing Library, focados no fluxo das páginas dos produtos como (preenchimento de formulários, ações do usuário e navegação).
* [Veja a documentação do frontend](./frontend/README.md)


---

# Executar a aplicação
A aplicação pode ser executada de duas formas: 
* Via Docker: requer que o Docker esteja instalado e configurado no ambiente
* Manual (via terminal): exige a configuração do ambiente e execução dos serviços separadamente.

### Via Docker
Na raiz do projeto:
```sh
/e-commerce_inventory_management_system_SITA_test/
```
No terminal digite: 
```sh
 docker compose up --build -d 
```
* -d para rodar em background.

Ficando dessa forma (exemplo ilustrativo):
```shell
/e-commerce_inventory_management_system_SITA_test/$ docker compose up --build -d 
```
Esse comando irá criar e iniciar os containers da aplicação.

##### Acessos
* Para acessar a interface (Frontend), no navegador: 
```sh
http://127.0.0.1:3000/ 
```

* Para acessar a API:
```
http://127.0.0.1:3333/
```

* Para acessar o banco de dados:
```
postgres://otavio:4d1v1nh4@localhost:5432/ecommerce
```

<br>

### Manual
##### Banco de dados
Inicialmente começamos pelo banco de dados

No PostgreSQL, execute o seguinte comando:
```sql
CREATE DATABASE ecommerce;
```

Em seguida, conecte-se ao banco utilizando o psql:
```sh
\c ecommerce
``` 
* Esse comando alterna para o banco de dados recém-criado.

Caso esteja utilizando uma interface gráfica (como pgAdmin ou outro SGBD), basta selecionar o banco `ecommerce` antes de executar os comandos seguintes. Obs: Tenha certeza de utilizar o banco de dados correto
```sql
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    stock_quantity INTEGER NOT NULL CHECK (stock_quantity >= 0)
);

```
Para mais detalhes do codigo SQL [clique aqui](/database/createDatabase.sql)


##### Backend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── backend
│   ├── ...
```

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

##### Frontend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── frontend
│   ├── ...
```

Na pasta `frontend` no terminal, instale as dependências:

```
npm install
```

Em seguida na pasta `frontend` no terminal, inicie a aplicação em modo desenvolvimento:

```
npm run dev
```

O frontend estará disponível em:

```
http://localhost:5174/
```

---

# Tests
##### Frontend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── frontend
│   ├── ...
```

Na pasta `frontend` no terminal, digite o comando:
```
npm run test
```

##### Backend

```sh
├── e-commerce_inventory_management_system_SITA_test
│   ├── backend
│   ├── ...
```

Na pasta `backend` no terminal, digite o comando:

```
npm run test
```


---

# Decisões de design e desafios

No design da aplicação, como mencionado anteriormente, foi utilizado o modelo feature-based architecture tanto no frontend quanto no backend. Essa escolha foi feita por considerar esse modelo mais organizado, com boa capacidade de escalabilidade e manutenção. A separação por funcionalidades facilita a visualização do projeto e reduz o impacto de mudanças, já que alterações tendem a ficar isoladas dentro de cada feature. Do meu ponto de vista, isso torna o código mais compreensível e estruturado. Ainda assim, reconheço que existem outras abordagens e que a implementação pode ser aprimorada com o tempo.  Criei um arquivo docker-compose.yml para simplificar a execução do projeto

No backend, houve uma dificuldade na interpretação dos requisitos do teste. O enunciado apresentava pontos como: definição de um modelo de produto ("Define a Product model with the following fields...") e também a necessidade de escrever queries SQL ("Write SQL queries to perform CRUD operations"). Esses dois pontos me geraram dúvida, pois podem indicar tanto o uso de um ORM quanto o uso direto de SQL.
Diante disso, considerei duas abordagens, utilizar um ORM ou utilizar queries SQL.
Como não havia possibilidade de esclarecimento durante o teste, somente eu e o pdf do teste tecnico, optei por utilizar queries SQL diretamente, alinhando com o requisito de escrita de queries. Essa decisão foi tomada mesmo considerando a possibilidade de utilizar uma abordagem híbrida (ORM + SQL), como no caso do Prisma. Ainda assim, preferi manter o uso de SQL puro neste contexto. A aplicação, no entanto, foi estruturada de forma que permite mudanças nesse nível, possibilitando uma futura migração para ORM sem grandes impactos.Também foram implementadas validações básicas com Zod e um início de padronização das respostas da API, permitindo evolução futura conforme necessário.
* ([Clique aqui para mais informações do backend](./backend/README.md)).


No desenvolvimento do frontend, a integração com a API foi feita utilizando Axios para consumo dos endpoints.
O gerenciamento de estado dos dados de produto foi implementado com React Context, centralizando as operações de listagem, criação, atualização e remoção. A interface foi desenvolvida de forma responsiva, adaptando-se a diferentes tamanhos de tela. Também foram implementados testes utilizando Vitest, focados no comportamento das páginas de produtos, incluindo fluxo de formulário, ações do usuário e navegação. Ainda possuo certa dificuldade com o uso de useMemo e memo do React, porém durante o desenvolvimento não identifiquei necessidade real de utilização, pelo menos na forma como a aplicação foi construída. Em relação ao Zod no tratamento de erros dos formulários, encontrei uma dificuldade com campos numéricos, já que os inputs retornam valores como string. Isso gerou inconsistência na validação de tipos. Tentei utilizar ```z.coerce```, mas tive problemas de tipagem na integração com o React Hook Form. Como alternativa, optei por manter os valores como string durante a validação e realizar a conversão no momento do envio dos dados. Não é a abordagem mais ideal, mas resolveu o problema sem impactar o funcionamento da aplicação. Diante disso, priorizei a entrega das funcionalidades principais. Esse ponto não comprometeu o funcionamento do sistema, então optei por seguir dessa forma. Caso fosse algo crítico, buscaria a melhor solução possivel.
* [Clique aqui para mais informações do frontend](./frontend/README.md)

 
Acredito que ainda há diversos pontos de melhoria, principalmente no tratamento de erros e em uma padronização mais consistente das respostas da API. Apesar de já existir uma base inicial, ela pode ser refinada e expandida. Esses ajustes se aplicam tanto ao backend quanto ao frontend. A autenticação com JWT não foi implementada neste momento. Como o prazo estava próximo do fim e se trata de uma additional feature, optei por priorizar a documentação e a entrega do projeto. Caso haja tempo, a ideia é implementar ao menos uma versão básica e documentar a abordagem adotada.

---