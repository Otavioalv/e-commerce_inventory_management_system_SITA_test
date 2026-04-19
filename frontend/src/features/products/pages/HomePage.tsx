

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
        <div>
            <div 
                className="flex justify-between items-end"
            >
                <div>
                    <h1>E-Commerce Inventory Management System</h1>
                    <h2>
                        Manage your product catalog
                    </h2>
                </div>
                <button>
                    + Add New Product
                </button>
            </div>
            
            <table>
                <thead>
                    <tr>
                    
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {MOCK_PRODUCTS.map(prod => (
                        <tr key={prod.id}>
                            <td>
                                {prod.id}
                            </td>
                            <td>
                                {prod.name}
                            </td>
                            <td>
                                {prod.description}
                            </td>
                            <td>
                                {prod.price}
                            </td>
                            <td>
                                {prod.stockquantity}
                            </td>
                            <td>
                                <button>del</button>
                                <button>edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer>
                &#169; 2026 - E-Commerce 
            </footer>
        </div>
    );
}
