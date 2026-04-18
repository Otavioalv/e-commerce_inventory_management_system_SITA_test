import * as productService from "@/services/product.service";

import type { ApiResponse, Product } from "@/types";
import type { Request, Response } from "express";


// List all products
export const listProduct = async (req: Request, res: Response<ApiResponse<Product[]>>) => {
    try{
        const products = await productService.listProduct();


        return res.status(200).json({
            message: "Products listed successfully",
            data: products,
        });

    } catch(err) {
        console.error(err)
        return res.status(500).json({error: "Internal server error"});
    }
};


// list product by id
export const listProductById = async (
    req: Request<{id: string}>,
    res: Response<ApiResponse<Product[]>>
) => {
    try{
        let id = req.params.id;

        const product = await productService.listProductById(id);

        return res.status(200).json({
            message: "Product listed successfully",
            data: product,
        });
    } catch(err) {
        console.error(err)

        if(err instanceof Error) {
            if(err.message === "PRODUCT_NOT_FOUND") 
                return res.status(404).json({ error: "Product not found" });
            
            // .....
        }

        return res.status(500).json({error: "Internal server error"});
    }
};

export const addNewProduct = async (
    req: Request<{}, {}, Product>, 
    res: Response<ApiResponse<Product>>
) => {
    try {
        const data = req.body;
        const result = await productService.addNewProduct(data);

        return res.status(201).json({
            message: "Product added successfully",
            data: result
        });
    }catch(err) {
        console.error(err)
        return res.status(500).json({error: "Internal server error"});
    }
}


export const updateProduct = async (
    req: Request<{id: string}, {}, Product>, 
    res: Response,
) => {
    try {
        let id = req.params.id;
        const data = req.body;

        const result = await productService.updateProduct(id, data);

        return res.status(200).json({
            message: "Product updated successfully",
            data: result
        });
    }catch(err) {
        console.error(err)

        if(err instanceof Error) {
            if(err.message === "PRODUCT_NOT_FOUND") 
                return res.status(404).json({ error: "Product not found" });
            
            // .....
        }
        return res.status(500).json({error: "Internal server error"});
    }
}
