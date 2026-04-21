import { Button } from "../../../shared/components/ui/Button";
import { useNavigate } from "react-router-dom";


export const HomeHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="">
                <h1 className="font-bold text-lg">
                    E-Commerce Inventory Management System
                </h1>
                <h2 className="text-sm">
                    Manage your product catalog
                </h2>
            </div>

            <Button
                aria-label="add-new-product-btn"
                onClick={() => navigate("/products/create")}
            >
                + Add New Product
            </Button>
        </div>
    );
}
