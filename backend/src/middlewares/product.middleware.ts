import { productCreateSchema, productIdSchema } from "@/schemas/product.schema";

import type { Request, Response, NextFunction } from "express";
import z from "zod";

import type { ApiResponse } from "@/types";

export const validateProductId = (req: Request, res: Response<ApiResponse<null>>, next: NextFunction) => {
    const result = productIdSchema.safeParse(req.params.id);
    
    if(!result.success) {
        return res.status(400).json({ error: "Invalid id" });
    }
    
    return next();
};

export const validateProductData = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(!req.body) {
        return res.status(400).json({
            error: "Request body is missing",
        });
    }

    const result = productCreateSchema.safeParse(req.body);

    if(!result.success) {
        return res.status(400).json({
            error: "Invalid product data",
            details: z.treeifyError(result.error),
        });
    }

    req.body = result.data;

    return next();
};