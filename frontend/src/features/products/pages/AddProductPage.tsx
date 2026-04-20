import { Container } from "../../../shared/components/ui/Container";
import { ProductForm } from "../components/ProductForm";

import type { ProductFormData } from "../schemas/products.schemas";


export default function AddProductPage() {
    
    const handleSave = (data: ProductFormData) => {
        console.log("Data PAGE:", data);
    };

    return (
        <Container>
            <ProductForm
                onSaveProduct={handleSave}
                title="Create a New Product"
            />
        </Container>
    );
}
