import { addNewProduct, deleteProduct, listProduct, listProductById, updateProduct } from '@/controllers/product.controller';
import { validateProductData, validateProductId } from '@/middlewares/product.middleware';

import { Router } from 'express';

const router = Router();

// LIST
router.get("/products", listProduct);
router.get("/products/:id", validateProductId, listProductById);


// ADD PRODUCT
router.post("/products", validateProductData, addNewProduct);

// UPDATE PRODUCT
router.put("/products/:id", 
    validateProductId,
    validateProductData,
    updateProduct,
);

// DELETE PRODUCT
router.delete("/products/:id", validateProductId, deleteProduct);



export default router;

