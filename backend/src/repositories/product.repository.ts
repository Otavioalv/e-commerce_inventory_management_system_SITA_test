import pool from '@/config/database';
import { Product } from '@/types';


export const listProduct = async ():Promise<Product[]> => {    
    const query = `
        SELECT id, name, description, price, stock_quantity as stockQuantity FROM products;
    `;

    const values = await pool.query<Product>(query);

    return values.rows;
}

