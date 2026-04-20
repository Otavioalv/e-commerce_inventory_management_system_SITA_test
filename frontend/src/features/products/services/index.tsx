import { api } from "../../../shared/services/ecommerceAPI";

import type { ApiResponse } from "../../../shared/types";
import type { Product } from "../types";


// Get list products
export const fetchProductList = async ():Promise<ApiResponse<Product[]>> => {
    const result = await api.get<ApiResponse<Product[]>>("/products");
    return result.data;
}

// Get by id
export const fetchProductById = async (id: number): Promise<ApiResponse<Product[]>> => {
    const result = await api.get<ApiResponse<Product[]>>(`/products/${id}`);
    return result.data;
};

// Add new product
export const fetchProductAdd = async (product: Omit<Product, "id">):Promise<ApiResponse<Product>> => {
    // await new Promise((resolver) => setTimeout(resolver, 5000));
    const result = await api.post<ApiResponse<Product>>("/products", product)   
    return result.data;
}

// Delete product by id
export const fetchProductDelete = async (id: number):Promise<ApiResponse<Product>> => {
    const result = await api.delete<ApiResponse<Product>>(`/products/${id}`);   
    return result.data
}

