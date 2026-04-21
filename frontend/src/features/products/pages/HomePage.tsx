import { FullPageLoading } from "../../../shared/components/layout/FullPageLoading";
import { Container } from "../../../shared/components/ui/Container";
import { ProductsTable } from "../components/ProductsTable";
import { HomeHeader } from "../components/HomeHeader";
import { useProducts } from "../state/useProducts";


export default function HomePage() {
    const {
        products,
        deleteProduct,
        isLoading,
    } = useProducts();

    return (
        <Container>
            <FullPageLoading
                isLoading={isLoading}
            />

            <HomeHeader/>
            <ProductsTable
                isLoading={isLoading}
                products={products}
                deleteProduct={deleteProduct}
            />
        </Container>
    );
}

