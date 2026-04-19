import { Navigate, Route, Routes } from "react-router-dom";


import HomePage from "../pages/HomePage";



export default function ProductsRoutes() {
    return (
        <Routes>

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
        </Routes>
    );
}