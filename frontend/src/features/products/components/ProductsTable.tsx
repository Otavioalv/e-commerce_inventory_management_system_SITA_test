import { Button } from "../../../shared/components/ui/Button";
import { DeleteProductDialog } from "./DeleteProductDialog";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import type { Product } from "../types";


/* 
interface IProductTableProps extends Omit<ProductContextType, "isLoading"> {
    products: Product[],
}
*/

interface IProductTableProps {
    products: Product[],
    isLoading: boolean,
    deleteProduct: (id: number) => Promise<void>
}


export const ProductsTable = ({
    products, 
    deleteProduct,
    isLoading,
}: IProductTableProps) => {
    const navigate = useNavigate();
    
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleConfirmDelete = async () => {
        if(selectedId === null) return;

        await deleteProduct(selectedId);
        setSelectedId(null);
    };

    const handleCancel = () => {
        setSelectedId(null);
    };

    return (
        <>
            <DeleteProductDialog
                isLoading={isLoading}
                open={selectedId !== null}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancel}
            />
            
            <div className="w-full overflow-x-auto shadow-md sm:rounded-lg rounded-md">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs bg-gray-900 uppercase text-gray-50">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Description</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Stock</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(prod => (
                            <tr key={prod.id} className="bg-white border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {prod.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{prod.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{prod.description}</td>
                                <td className="px-6 py-4">{prod.price}</td>
                                <td className="px-6 py-4">{prod.stockQuantity}</td>
                                <td className="px-6 py-4 flex gap-2">
                                    <Button 
                                        aria-label={`edit-product-${prod.id}`}
                                        variant={"icon"}
                                        onClick={() => navigate(`/products/edit/${prod.id}`)}
                                    >
                                        <LuPencil size={18}/>
                                    </Button>
                                    <Button 
                                        aria-label={`delete-product-${prod.id}`}
                                        variant={"icon"}
                                        onClick={() => setSelectedId(prod.id)}
                                    >
                                        <LuTrash2 size={18}/>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
