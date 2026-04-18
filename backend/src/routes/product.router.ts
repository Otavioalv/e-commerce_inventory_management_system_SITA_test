import { listProduct } from '@/controllers/product.controller';
import { listProductById } from '@/services/product.service';
import { Router, type Request, type Response } from 'express';

const router = Router();

// LIST
router.get("/products", listProduct);
router.get("/products/:id", listProductById);


// ADD PRODUCT
router.post("/products", () => {});

// UPDATE PRODUCT
router.put("/products/:id", () => {});

// DELETE PRODUCT
router.delete("/products/:id", () => {});



export default router;

