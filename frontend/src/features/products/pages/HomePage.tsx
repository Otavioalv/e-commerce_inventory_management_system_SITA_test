import { FullPageLoading } from "../../../components/layout/FullPageLoading";
import { Container } from "../../../components/ui/Container";
import { HomeHeader } from "../components/HomeHeader";
import { ProductsTable } from "../components/ProductsTable";
import { useProducts } from "../state/useProducts";


export default function HomePage() {
    const {
        products,
        isLoading,
    } = useProducts();

    return (
        <Container>
            <FullPageLoading
                isLoading={isLoading}
            />
            <HomeHeader/>
            <ProductsTable
                products={products}
            />
        </Container>
    );
}

