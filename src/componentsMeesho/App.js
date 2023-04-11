import React, { useEffect } from "react";
import '../styles/meesho.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Header from "./Header";
import Midpart from "./Midpart";
import WomenEthnic from './WomenEthnic';
import WomenWestern from "./WomenWestern";
import Men from "./Men";
import Kids from "./Kids";
import Hk from "./Hk";
import Bh from "./Bh";
import Ja from "./Ja";
import Bf from "./Bf";
import Electronics from "./Electronics";
import Footer from "./Footer";
import { NoPage } from "./NoPage";
import Login from "./Login";
import Signup from "./Signup";
import Flt from "./Flt";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import Ccontext from "./Ccontext";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Ccontext>
                    <Header />
                    <Midpart>
                        <Routes>
                            <Route path='/womenethnic' element={<WomenEthnic />} />
                            <Route path='/womenwestern' element={<WomenWestern />} />
                            <Route path='/men' element={<Men />} />
                            <Route path='/kids' element={<Kids />} />
                            <Route path='/hk' element={<Hk />} />
                            <Route path='/bh' element={<Bf />} />
                            <Route path='/ja' element={<Ja />} />
                            <Route path='/bf' element={<Bf />} />
                            <Route path='/electronics' element={<Electronics />} />
                            <Route path='/signup' element={<Signup />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/flt' element={<Flt />} />
                            <Route path='/productpage' element={<ProductPage />} />
                            <Route path='/cart' element={<Cart />} />

                            <Route path='/' element={<Home />} />
                            <Route path='/*' element={<NoPage />} />
                        </Routes>
                    </Midpart>
                    <Footer />
                </Ccontext>
            </BrowserRouter>
        </>
    )
}
export default App;