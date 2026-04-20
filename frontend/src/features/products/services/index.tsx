import { api } from "../../../services/ecommerceAPI";

import type { ApiResponse } from "../../../types";
import type { Product } from "../types";


export const fetchProductList = async ():Promise<ApiResponse<Product[]>> => {
    const result = await api.get<ApiResponse<Product[]>>("/products");
    return result.data;
}
