import { validateProductData, validateProductId } from '@/modules/products/products.validation';
import * as ProductsController from '@/modules/products/products.controller';

import { Router } from 'express';

const router = Router();


// LIST
router.get("/products", ProductsController.listProduct);
router.get("/products/:id", validateProductId, ProductsController.listProductById);


// ADD PRODUCT
router.post("/products", validateProductData, ProductsController.addNewProduct);

// UPDATE PRODUCT
router.put("/products/:id", 
    validateProductId,
    validateProductData,
    ProductsController.updateProduct,
);

// DELETE PRODUCT
router.delete("/products/:id", validateProductId, ProductsController.deleteProduct);

export default router;

