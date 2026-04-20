import { useCallback, useEffect, useState } from "react";

import { ProductContext } from "./product.context";
import { fetchProductList } from "../services";

import type { Product } from "../types";


export function ProductProvider({ children }: { children: React.ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // helper - separate to global file if need to reuse
    const runAsync = useCallback(async (fn: () => Promise<void>) => {
        try {
            setIsLoading(true);
            await fn();
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []); 
    

    const fetchProducts = useCallback(() => {
        return runAsync(async() => {
            const result = await fetchProductList();
            setProducts(result.data ?? []);
        });
    }, [runAsync]);


    useEffect(() => {
        const load = async () => {
            await fetchProducts();
        };
        load();
    }, [fetchProducts]);


    return (
        <ProductContext.Provider 
            value={{ 
                products, 
                fetchProducts,
                isLoading
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
