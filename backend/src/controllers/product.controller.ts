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
export const listProductById = async (req: Request, res: Response) => {
    try{
        let id = req.params.id as string;

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


