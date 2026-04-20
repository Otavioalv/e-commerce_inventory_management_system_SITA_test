import { Container } from "../../../shared/components/ui/Container";
import { useProducts } from "../state/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { Product } from "../types";
import { FullPageLoading } from "../../../shared/components/layout/FullPageLoading";
import { ProductForm } from "../components/ProductForm";
import type { ProductFormData } from "../schemas/products.schemas";

export default function EditProductPage () {
    const navigate = useNavigate();
    
    const { id } = useParams();
    
    const [product, setProduct] = useState<Product | null>(null);

    const {
        fetchById,
        isLoading,
    } = useProducts();


    useEffect(() => {
        const getProduct = async () => {
            if(!id) return;
            const numericId = Number(id);
            if(isNaN(numericId)) return;

            const result = await fetchById(numericId);

            setProduct(result[0] ?? null);
        }

        getProduct();
    }, [fetchById, id]);



    const handleUpdate = async (data: ProductFormData) => {
        console.log(data);
        // await addProduct({
        //     description: data.description,
        //     name: data.name,
        //     price: Number(data.price),
        //     stockQuantity: Number(data.stockQuantity),
        // });

        // navigate("/products/home");
    };

    return (
        <Container>
            <FullPageLoading
                isLoading={isLoading}
            />

            <ProductForm
                product={product || undefined}
                onSaveProduct={handleUpdate}
                title="Edit This Product"
                isLoading={isLoading}
            />
        </Container>
    );
}
