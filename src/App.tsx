import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Pages/Main/Layout";
import Home from "./components/Pages/Main/Home";
import Product from "./components/Pages/Product/Product";
import Cart from "./components/Pages/Cart/Cart";
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/:id" element={<Product/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;