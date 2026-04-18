import { addNewProduct, listProduct, listProductById } from '@/controllers/product.controller';
import { validateProductData, validateProductId } from '@/middlewares/product.middleware';

import { Router } from 'express';

const router = Router();

// LIST
router.get("/products", listProduct);
router.get("/products/:id", validateProductId, listProductById);


// ADD PRODUCT
router.post("/products", validateProductData, addNewProduct);

// UPDATE PRODUCT
router.put("/products/:id", () => {});

// DELETE PRODUCT
router.delete("/products/:id", () => {});



export default router;

