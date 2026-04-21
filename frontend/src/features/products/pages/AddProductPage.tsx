import { FullPageLoading } from "../../../shared/components/layout/FullPageLoading";
import { Container } from "../../../shared/components/ui/Container";
import { ProductForm } from "../components/ProductForm";
import { useProducts } from "../state/useProducts";
import { useNavigate } from "react-router-dom";


import type { ProductFormData } from "../schemas/products.schemas";

export default function AddProductPage() {
    const navigate = useNavigate();

    const {
        addProduct,
        isLoading,
    } = useProducts();

    const handleSave = async (data: ProductFormData) => {
        await addProduct({
            description: data.description,
            name: data.name,
            price: data.price,
            stockQuantity: Number(data.stockQuantity),
        });

        navigate("/products/home");
    };

    return (
        <Container>
            <FullPageLoading
                isLoading={isLoading}
            />
            <ProductForm
                onSaveProduct={handleSave}
                title="Create a New Product"
                isLoading={isLoading}
            />
        </Container>
    );
}
