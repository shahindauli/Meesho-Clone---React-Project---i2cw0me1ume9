import React, { useEffect } from "react";
import '../styles/meesho.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Header from "./Header";
import Midpart from "./Midpart";
import WomenEthnic from './WomenEthnic';
import WomenWestern from "./WomenWestern";
import Kids from "./Kids";
import Footer from "./Footer";
import { NoPage } from "./NoPage";
import Login from "./Login";
import Signup from "./Signup";
const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Midpart>
                    <Routes>
                        <Route path='/womenethnic' element={<WomenEthnic />} />
                        <Route path='/womenwestern' element={<WomenWestern />} />
                        <Route path='/kids' element={<Kids />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />

                        <Route path='/' element={<Home />} />
                        <Route path='/*' element={<NoPage />} />

                    </Routes>
                </Midpart>
                <Footer />
            </BrowserRouter>
        </>
    )
}
export default App;