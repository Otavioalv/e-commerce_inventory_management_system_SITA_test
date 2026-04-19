import { Container } from "../ui/Container";

export const Header = () => {
    return (
        <header className="py-4 border-b border-zinc-400 w-full">
            <Container>
                    <h1 className="font-bold text-xl w-full">
                        E-Commerce
                    </h1>
            </Container>
        </header>
    );
}
