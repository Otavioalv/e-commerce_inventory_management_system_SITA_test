import { LuPencil, LuTrash2 } from "react-icons/lu";

import { Button } from "../../../components/ui/Button";
import type { Product } from "../types";


/* 
interface IProductTableProps extends Omit<ProductContextType, "isLoading"> {
    products: Product[],
}
*/
interface IProductTableProps {
    products: Product[],
    deleteProduct: (id: number) => Promise<void>;
}


export const ProductsTable = ({
    products, 
    deleteProduct
}: IProductTableProps) => {
    

    const handleDelete = async (id: number) => {
        console.log("produto deletado: ", id);
        await deleteProduct(id);
    }

    return (
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
                            <td className="px-6 py-4">{prod.stockquantity}</td>
                            <td className="px-6 py-4 flex gap-2">
                                <Button variant={"icon"}>
                                    <LuPencil size={18}/>
                                </Button>
                                <Button 
                                    variant={"icon"}
                                    onClick={() => handleDelete(prod.id)}
                                >
                                    <LuTrash2 size={18}/>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
