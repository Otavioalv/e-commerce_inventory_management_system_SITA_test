import { Container } from "../../../components/ui/Container";
import { HomeHeader } from "../components/HomeHeader";
import { ProductsTable } from "../components/ProductsTable";


export default function HomePage() {
    return (
        <Container>
            <HomeHeader/>
            <ProductsTable/>
        </Container>
    );
}

