import { FullPageLoading } from "../../../shared/components/layout/FullPageLoading";
import { ProductNotFoundScreen } from "../components/ProductNotFoundScreen";
import { Container } from "../../../shared/components/ui/Container";
import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from "../components/ProductForm";
import { useEffect, useMemo, useState } from "react";
import { useProducts } from "../state/useProducts";


import type { ProductFormData } from "../schemas/products.schemas";
import type { Product } from "../types";



const parseId = (id?: string): number | null =>  {
    if(!id) return null;
    const numericId = Number(id);
    if(isNaN(numericId)) return null;

    return numericId;
}


export default function EditProductPage () {
    const navigate = useNavigate();
    
    const { id } = useParams();
    const numericId = useMemo(() => parseId(id), [id]);

    const [product, setProduct] = useState<Product | null>(null);

    const {
        fetchById,
        updateProduct,
        isLoading,
    } = useProducts();



    useEffect(() => {
        const getProduct = async () => {
            if(!numericId) return;
            const result = await fetchById(numericId);
            setProduct(result[0] ?? null);
        }

        getProduct();
    }, [fetchById, numericId]);



    const handleUpdate = async (data: ProductFormData) => {
        if(!numericId) return;
        
        await updateProduct(
            numericId, 
            {
                description: data.description,
                name: data.name,
                price: data.price,
                stockQuantity: Number(data.stockQuantity),
            }
        );

        navigate("/products/home");
    };

    return (
        <Container>
            <FullPageLoading
                isLoading={isLoading}
            />

            {product ? (
                <ProductForm
                    product={product || undefined}
                    onSaveProduct={handleUpdate}
                    title="Edit This Product"
                    isLoading={isLoading}
                />

            ) : (
                <ProductNotFoundScreen/>
            )}  
        </Container>
    );
}
