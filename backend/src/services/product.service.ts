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

export const addNewProduct = async (productData: Product): Promise<Product> => {
    return await productRepository.addNewProduct(productData);
}


export const updateProduct = async (id: string, productData: Product): Promise<Product> => {
    const product = await productRepository.updateProduct(id,productData);

    if(!product) {
        throw new Error("PRODUCT_NOT_FOUND");
    }

    return product;
}


