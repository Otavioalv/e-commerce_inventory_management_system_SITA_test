import { fetchProductAdd, fetchProductById, fetchProductDelete, fetchProductList, fetchProductUpdate } from "../services";
import { AppError } from "../../../shared/errors/AppError";
import { useCallback, useEffect, useState } from "react";
import { ProductContext } from "./product.context";
import toast from "react-hot-toast";

import type { Product } from "../types";


export function ProductProvider({ children }: { children: React.ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // helper - separate to global file if need to reuse
    const runAsync = useCallback(async<T,> (fn: () => Promise<T>) => {
        try {
            setIsLoading(true);
            return await fn();
        }catch(err) {
            console.error(err);
            if(err instanceof AppError) {
                toast.error(err.message);
            }
            throw err;
        }finally{
            setIsLoading(false);
        }
    }, []); 
    
    
    
    const fetchProducts = useCallback(() => {
        return runAsync(async() => {
            const result = await fetchProductList();
            setProducts(result.data ?? []);
            toast.success(result.message || "Successfully listed products");
        })
    }, [runAsync]);

    const fetchById = useCallback((id: number):Promise<Product[]> => {
        return runAsync(async ():Promise<Product[]> => {
            const result = await fetchProductById(id);
            toast.success(result.message || "Products found successfully");
            return result.data ?? [];
        })
    }, [runAsync]);

    
    
    const addProduct = (product: Omit<Product, "id">) => {
        return runAsync(async () => {
            const result = await fetchProductAdd(product);
            await fetchProducts()
            toast.success(result.message || "Product added successfully");
        });
    }
    
    
    const updateProduct = (id:number, product: Omit<Product, "id">) => {
        return runAsync(async() => {
            const resuilt = await fetchProductUpdate(id, product);
            await fetchProducts();
            toast.success(resuilt.message || "Product updated successfully");
        });
    }

    const deleteProduct = (id: number) => {
        return runAsync(async() => {
            const result = await fetchProductDelete(id);
            await fetchProducts();
            toast.success(result.message || "Product deleted successfully");
        });
    };

    // Auto reload products
    useEffect(() => {
        const load = async () => {
            await fetchProducts();
        };
        // console.warn("PRODUCT PROVIDER");
        load();
    }, [fetchProducts]);


    return (
        <ProductContext.Provider 
            value={{ 
                products, 
                isLoading,
                fetchProducts,
                deleteProduct,
                addProduct,
                fetchById,
                updateProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
