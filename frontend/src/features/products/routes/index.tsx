import { Navigate, Route, Routes } from "react-router-dom";


import HomePage from "../pages/HomePage";
import Layout from "../../../shared/components/layout/Layout";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";

export default function ProductsRoutes() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route
                    index
                    element={
                        <Navigate to="home" replace/>
                    }
                />


                <Route
                    path="home"
                    element={<HomePage/>}
                />

                <Route
                    path="create"
                    element={<AddProductPage/>}
                />

                <Route
                    path="edit/:id"
                    element={<EditProductPage/>}
                />

            </Route>
        </Routes>
    );
}