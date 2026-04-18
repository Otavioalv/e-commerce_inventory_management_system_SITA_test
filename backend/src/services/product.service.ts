import * as productRepository from '@/repositories/product.repository';
import { Product } from '@/types';

export const listProduct = async ():Promise<Product[]> => {
    return productRepository.listProduct();
}


export const listProductById = async (id:string): Promise<Product[]>=> {
    const product = await productRepository.listProductById(id);

    if(product.length === 0)
        throw new Error("PRODUCT_NOT_FOUND");


    return product;
}

export const addNewProduct = async (product: Product): Promise<Product> => {
    return await productRepository.addNewProduct(product);
}

