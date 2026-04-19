import { Container } from "../ui/Container";
import { MainContainer } from "../ui/MainContainer";

export const Header = () => {
    return (
        <header className="py-4 border-b border-zinc-400 w-full">
            <Container>
                <MainContainer>
                    <h1 className="font-bold text-xl w-full">
                        E-Commerce
                    </h1>
                </MainContainer>
            </Container>
        </header>
    );
}
