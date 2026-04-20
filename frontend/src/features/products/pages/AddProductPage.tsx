import { Container } from "../../../shared/components/ui/Container";
import { ProductForm } from "../components/ProductForm";

import type { ProductFormData } from "../schemas/products.schemas";
import { useProducts } from "../state/useProducts";


export default function AddProductPage() {
    
    const {
        addProduct,
        isLoading,
    } = useProducts();

    const handleSave = async (data: ProductFormData) => {
        await addProduct({
            description: data.description,
            name: data.name,
            price: Number(data.price),
            stockQuantity: Number(data.stockQuantity),
        });
    };

    return (
        <Container>
            <ProductForm
                onSaveProduct={handleSave}
                title="Create a New Product"
                isLoading={isLoading}
            />
        </Container>
    );
}
