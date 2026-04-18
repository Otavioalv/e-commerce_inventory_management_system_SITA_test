import { Request, Response } from "express";

import * as productService from "@/services/product.service";
import { ApiResponse, Product } from "@/types";




// Listar todos
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


// Listar por id
export const listProductById = async (req: Request, res: Response) => {
    try{
        let id = req.params.id;

        if(typeof id !== "string") {
            return res.status(400).json({ error: "Invalid id" });
        }

        const product = await productService.listProductById(id);

        return res.status(200).json({
            message: "Product listed successfully",
            data: product,
        });
    } catch(err) {
        console.error(err)
        return res.status(500).json({error: "Internal server error"});
    }
};
