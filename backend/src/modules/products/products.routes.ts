import { addNewProduct, deleteProduct, listProduct, listProductById, updateProduct } from '@/modules/products/products.controller';
import { validateProductData, validateProductId } from '@/modules/products/products.validation';

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

