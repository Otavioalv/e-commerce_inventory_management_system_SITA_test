import { Request, Response, NextFunction } from "express";
import { productIdSchema } from "@/schemas/product.schema";
import { ApiResponse } from "@/types";

export const validateProductId = (req: Request, res: Response<ApiResponse<null>>, next: NextFunction) => {
    const result = productIdSchema.safeParse(req.params.id);
    
    if(!result.success) {
        return res.status(400).json({ error: "Invalid id" });
    }
    
    next();
};