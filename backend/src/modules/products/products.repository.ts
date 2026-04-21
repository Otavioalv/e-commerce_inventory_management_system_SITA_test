import pool from '@/config/database';
import type { Product } from '@/shared/types';


export const listProduct = async ():Promise<Product[]> => {    
    const query = `
        SELECT id, name, description, price, stock_quantity as "stockQuantity" FROM products ORDER BY id;
    `;

    const result = await pool.query<Product>(query);

    return result.rows;
}

export const listProductById = async (id: string):Promise<Product[]> => {    
    const query = `
        SELECT id, name, description, price, stock_quantity as "stockQuantity" 
        FROM products
        WHERE id = $1;
    `;

    const values = [id]
    const result = await pool.query<Product>(query, values);

    return result.rows;
}



export const addNewProduct = async (product: Product): Promise<Product> => {
    const query = `
        INSERT INTO products (name, description, price, stock_quantity)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;

    const values = [
        product.name,
        product.description,
        product.price,
        product.stockQuantity
    ]

    const {rows} = await pool.query(query, values);
    

    return rows[0]
}


export const updateProduct = async (id: string, product: Product): Promise<Product | null> => {
    const query = `
        UPDATE products 
        SET 
            name = $1,
            description = $2,
            price = $3,
            stock_quantity = $4
        WHERE 
            id = $5
        RETURNING *;
    `;

    const values = [
        product.name,
        product.description,
        product.price,
        product.stockQuantity,
        id
    ];

    const {rows} = await pool.query<Product>(query, values);

    return rows[0] || null;
}

export const deleteProduct = async (id: string) => {
    const query = `
        DELETE from products WHERE id = $1 RETURNING *;
    `;

    const {rows} = await pool.query<Product>(query, [id]);

    // console.log(rows);

    return rows[0] || null
}

