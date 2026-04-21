import { ProductProvider } from "./features/products/state/product.provider";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./shared/routes";

function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Toaster position="top-right"/>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App
