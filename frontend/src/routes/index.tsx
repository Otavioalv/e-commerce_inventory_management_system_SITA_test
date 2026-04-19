import { Navigate, Route, Routes } from "react-router-dom";
import ProductsRoutes from "../features/products/routes";

export default function AppRoutes() {
  return (
    <Routes>
        <Route
            index
            element={
                <Navigate to="/products" replace/>
            }
        />

        <Route
            path="/products/*"
            element={
              <ProductsRoutes/>
            }
        />
    </Routes>
  );
}
