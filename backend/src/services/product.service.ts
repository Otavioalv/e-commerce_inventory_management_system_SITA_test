import * as productRepository from '@/repositories/product.repository';
import { Product } from '@/types';

export const listProduct = async ():Promise<Product[]> => {
    return productRepository.listProduct();
}


export const listProductById = async (id?:string) => {
    if(id) console.log("listar 1 produto");
    return [];
}

