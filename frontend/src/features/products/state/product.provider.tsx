import { useEffect, useState } from "react";
import { ProductContext } from "./product.context";

import type { Product } from "../types";


export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);

    
    const fetchProducts = async () => {
        // setProducts(res.data ?? []);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider 
            value={{ 
                products, 
                fetchProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
