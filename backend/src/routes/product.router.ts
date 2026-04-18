import { listProduct, listProductById } from '@/controllers/product.controller';
import { validateProductId } from '@/middlewares/validateProductId.middleware';
import { Router } from 'express';

const router = Router();

// LIST
router.get("/products", listProduct);
router.get("/products/:id", validateProductId, listProductById);


// ADD PRODUCT
router.post("/products", () => {});

// UPDATE PRODUCT
router.put("/products/:id", () => {});

// DELETE PRODUCT
router.delete("/products/:id", () => {});



export default router;

