# Database
# English

The database is implemented using PostgreSQL.
It is responsible for storing and managing all product data used by the application.

---

## Database creation

```sql
CREATE DATABASE ecommerce;
```

To connect to the database in `psql`:

```bash
\c ecommerce
```

---

## Schema

### Products table

```sql
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    stock_quantity INTEGER NOT NULL CHECK (stock_quantity >= 0)
);
```

---

# Português

O banco de dados é implementado utilizando PostgreSQL.

Ele é responsável por armazenar e gerenciar todos os dados de produtos utilizados pela aplicação.

---

## Criação do banco de dados

```sql
CREATE DATABASE ecommerce;
```

Para conectar ao banco no `psql`:

```bash
\c ecommerce
```

---

## Schema

### Tabela de produtos

```sql
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    stock_quantity INTEGER NOT NULL CHECK (stock_quantity >= 0)
);
```