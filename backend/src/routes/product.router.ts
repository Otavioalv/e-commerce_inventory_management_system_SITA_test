import { Router, type Request, type Response } from 'express';

const router = Router();

// LIST
router.get("/products", () => {});
router.get("/products/:id", () => {});


// ADD PRODUCT
router.post("/products", () => {});

// UPDATE PRODUCT
router.put("/products/:id", () => {});

// DELETE PRODUCT
router.delete("/products/:id", () => {});



export default router;

