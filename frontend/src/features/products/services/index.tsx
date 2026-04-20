import { api } from "../../../services/ecommerceAPI";

import type { ApiResponse } from "../../../types";
import type { Product } from "../types";


// Get list products
export const fetchProductList = async ():Promise<ApiResponse<Product[]>> => {
    const result = await api.get<ApiResponse<Product[]>>("/products");
    return result.data;
}

// Delete product by id
export const fetchProductDelete = async (id: number):Promise<ApiResponse<Product>> => {
    const result = await api.delete<ApiResponse<Product>>(`/products/${id}`);   
    return result.data
}

