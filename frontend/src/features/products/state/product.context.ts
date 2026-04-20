import { createContext } from "react";

import type { Product } from "../types";


export type ProductContextType = {
    isLoading: boolean;
    products: Product[];
    addProduct: (data: Omit<Product, "id">) => Promise<void>;
    fetchProducts: () => Promise<void>;
    fetchById: (id: number) => Promise<Product[]>,
    deleteProduct: (id: number) => Promise<void>;
    updateProduct: (id:number, product: Omit<Product, "id">) => Promise<void>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
