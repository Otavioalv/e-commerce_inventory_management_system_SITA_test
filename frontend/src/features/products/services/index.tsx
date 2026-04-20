import { api } from "../../../services/ecommerceAPI"
import { AppError } from "../../../errors/AppError";

import type { ApiResponse } from "../../../types";
import type { Product } from "../types";


export const fetchProductList = async ():Promise<ApiResponse<Product[]>> => {
    try {
        const result = await api.get<ApiResponse<Product[]>>("/products");

        return result.data;
    }catch(err){
        console.error("[products-service-list]: ", err);
        
        if(err instanceof AppError) {
            throw err; 
        }

        throw new AppError("Error when searching for products");
    }
}
