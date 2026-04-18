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

