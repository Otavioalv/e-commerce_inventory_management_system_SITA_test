import { useCallback, useEffect, useState } from "react";

import { ProductContext } from "./product.context";
import { fetchProductAdd, fetchProductById, fetchProductDelete, fetchProductList } from "../services";

import type { Product } from "../types";


export function ProductProvider({ children }: { children: React.ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // helper - separate to global file if need to reuse
    const runAsync = useCallback(async<T,> (fn: () => Promise<T>) => {
        try {
            setIsLoading(true);
            return await fn();
        } catch (err) {
            console.error(err);
            throw err;
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

    const fetchById = useCallback((id: number):Promise<Product[]> => {
        return runAsync(async ():Promise<Product[]> => {
            const result = await fetchProductById(id);

            return result.data ?? [];
        })
    }, [runAsync]);


    const addProduct = (product: Omit<Product, "id">) => {
        return runAsync(async () => {
            await fetchProductAdd(product);
            await fetchProducts()
        });
    }


    const deleteProduct = (id: number) => {
        return runAsync(async() => {
            await fetchProductDelete(id);
            await fetchProducts();
        })  
    };

    // Auto reload products
    useEffect(() => {
        const load = async () => {
            await fetchProducts();
        };
        console.warn("PRODUCT PROVIDER");
        load();
    }, [fetchProducts]);


    return (
        <ProductContext.Provider 
            value={{ 
                products, 
                fetchProducts,
                deleteProduct,
                addProduct,
                fetchById,
                isLoading
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
