import { Navigate, Route, Routes } from "react-router-dom";


// test
const Home = () => (
    <h1>
        home
    </h1>
)


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
                element={<Home/>}
            />
        </Routes>
    );
}