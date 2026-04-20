import { LuPencil, LuTrash2 } from "react-icons/lu";

import { Button } from "../../../components/ui/Button";


const MOCK_PRODUCTS = [
        {
            "id": 6,
            "name": "Webcam Full HD 1080p",
            "description": "Câmera com foco automático e microfone estéreo integrado.",
            "price": "215.75",
            "stockquantity": 12
        },
        {
            "id": 7,
            "name": "Pad Mouse Extra Large",
            "description": "Mousepad de tecido micro-entrançado com bordas costuradas (90x40cm).",
            "price": "85.00",
            "stockquantity": 50
        },
        {
            "id": 8,
            "name": "SSD NVMe 1TB",
            "description": "Unidade de estado sólido com velocidade de leitura de até 3500MB/s.",
            "price": "450.00",
            "stockquantity": 25
        },
        {
            "id": 9,
            "name": "Memória RAM 16GB DDR4",
            "description": "Pente único de memória de alta performance com dissipador de calor.",
            "price": "310.00",
            "stockquantity": 40
        },
        {
            "id": 41,
            "name": "nome do produto",
            "description": "123",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 12,
            "name": "nome do produto",
            "description": "descrição",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 13,
            "name": "nome do produto",
            "description": "descrição",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 14,
            "name": "nome do produto",
            "description": "descrição",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 15,
            "name": "nome do produto",
            "description": "descrição",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 16,
            "name": "nome do produto",
            "description": "descrição",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 17,
            "name": "nome do produto",
            "description": "descrição",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 18,
            "name": "nome do produto",
            "description": "descrição",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 2,
            "name": "atualizei o produto 2",
            "description": "descrição atualizada",
            "price": "43356.00",
            "stockquantity": 1
        },
        {
            "id": 1,
            "name": "atualizei o produto 2",
            "description": "descrição atualizada",
            "price": "43356.00",
            "stockquantity": 1
        },
        {
            "id": 4,
            "name": "atualizei o produto 2",
            "description": "descrição atualizada",
            "price": "43356.00",
            "stockquantity": 1
        },
        {
            "id": 5,
            "name": "atualizei o produto 2",
            "description": "descrição atualizada",
            "price": "43356.00",
            "stockquantity": 1
        },
        {
            "id": 29,
            "name": "nome do produto",
            "description": "123",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 32,
            "name": "nome do produto",
            "description": "123",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 33,
            "name": "nome do produto",
            "description": "123",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 35,
            "name": "nome do produto",
            "description": "123",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 23,
            "name": "atualizei o produto 2",
            "description": "descrição atualizada",
            "price": "43356.00",
            "stockquantity": 1
        },
        {
            "id": 38,
            "name": "nome do produto",
            "description": "123",
            "price": "123.00",
            "stockquantity": 234
        },
        {
            "id": 39,
            "name": "nome do produto",
            "description": "123",
            "price": "123.00",
            "stockquantity": 234
        }
    ]


export const ProductsTable = () => {
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
                    {MOCK_PRODUCTS.map(prod => (
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
                                <Button variant={"icon"}>
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
