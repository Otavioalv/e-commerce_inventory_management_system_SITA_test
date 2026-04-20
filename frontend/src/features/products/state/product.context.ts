import { createContext } from "react";

import type { Product } from "../types";


export type ProductContextType = {
    products: Product[];
    fetchProducts: () => Promise<void>;
    // addProduct: (data: Product) => Promise<void>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
