import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/components/ui/Button";


export const ProductNotFoundScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-5 w-full md:w-150">
                <p>Product Not Found</p>

                <Button
                    onClick={() => navigate("/products/home")}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
}

