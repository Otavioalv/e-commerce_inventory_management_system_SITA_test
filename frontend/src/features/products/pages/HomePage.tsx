import { Container } from "../../../components/ui/Container"


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


export default function HomePage() {
    return (
        <Container>
            <header className="py-4 font-bold text-xl border-b border-zinc-400">
                E-Commerce
            </header>

            <div className="flex flex-col justify-between gap-4">
                <div className="">
                    <h1 className="font-bold text-lg">
                        E-Commerce Inventory Management System
                    </h1>
                    <h2 className="text-sm">
                        Manage your product catalog
                    </h2>
                </div>

                <button className="bg-gray-900 text-white p-3 rounded-md font-bold active:bg-gray-900/90 hover:bg-gray-900/95 transition-all cursor-pointer">
                    + Add New Product
                </button>
            </div>

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
                                    <button className="text-red-600 hover:underline">del</button>
                                    <button className="text-blue-600 hover:underline">edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <footer className="flex justify-center p-10 text-gray-900">
                <p>
                    &#169; 2026 - E-Commerce 
                </p>
            </footer>
        </Container>
    );
}
