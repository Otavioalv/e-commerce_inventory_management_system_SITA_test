import { Button } from "../../../shared/components/ui/Button";


export const HomeHeader = () => {
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

            <Button>
                + Add New Product
            </Button>
        </div>
    );
}
