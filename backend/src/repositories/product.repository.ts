import pool from '@/config/database';
import { Product } from '@/types';


export const listProduct = async ():Promise<Product[]> => {    
    const query = `
        SELECT id, name, description, price, stock_quantity as stockQuantity FROM products;
    `;

    const result = await pool.query<Product>(query);

    return result.rows;
}

export const listProductById = async (id: string):Promise<Product[]> => {    
    const query = `
        SELECT id, name, description, price, stock_quantity as stockQuantity 
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