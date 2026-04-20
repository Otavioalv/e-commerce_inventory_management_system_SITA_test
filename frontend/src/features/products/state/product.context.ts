import { createContext } from "react";

import type { Product } from "../types";


export type ProductContextType = {
    isLoading: boolean;
    products: Product[];
    fetchProducts: () => Promise<void>;
    deleteProduct: (id: number) => Promise<void>;
    // addProduct: (data: Product) => Promise<void>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
