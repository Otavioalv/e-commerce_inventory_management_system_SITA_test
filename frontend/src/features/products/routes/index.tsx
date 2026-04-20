import { Navigate, Route, Routes } from "react-router-dom";


import HomePage from "../pages/HomePage";
import Layout from "../../../shared/components/layout/Layout";

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
            </Route>
        </Routes>
    );
}