import { ProductProvider } from "./features/products/state/product.provider"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./shared/routes"

function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
