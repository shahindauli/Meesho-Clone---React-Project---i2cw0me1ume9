import React, { useContext, useEffect, useState } from "react";
import Midrimg from '../img/mimg.webp';
import Fd from '../img/freeDelivery.svg';
import Cod from '../img/cod.svg';
import Er from '../img/easyReturns.svg';
import Playstoreicon from '../img/playicon.webp';
import Fr from "./Fr";
import { centralContext } from "./Ccontext";

const Home = () => {
    const { fetchedProductData, setfetchedProductData } = useContext(centralContext);

    function fetchData() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setfetchedProductData(data);
            })
    }


    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className="mid-top">
                <div className="left">
                    <h1 className="lhfs">Lowest Prices<br></br>
                        Best Quality Shopping</h1><br></br>
                    <div className="codrfd">
                        <div className="cc">
                            <img src={Fd} />&nbsp;&nbsp;&nbsp;&nbsp; <p>Free<br></br>Delivery</p>
                        </div>
                        <div className="cc ccss">
                            <img src={Cod} />&nbsp;&nbsp;&nbsp;&nbsp; <p>Cash on<br></br>Delivery</p>
                        </div>
                        <div className="cc ccss">
                            <img src={Er} />&nbsp;&nbsp;&nbsp;&nbsp; <p>Easy<br></br>Return</p>
                        </div>
                    </div><br></br><br></br><br></br>
                    <div className="dwnldmapp">
                        <img src={Playstoreicon} />&nbsp;&nbsp;&nbsp;
                        <h4>Download the Meesho App</h4>
                    </div>
                </div>
                <div className="right">
                    <img src={Midrimg} className='imgmidr' />
                </div>
            </div>
            <Fr fetchedProductData={fetchedProductData} />
        </>
    )
}
export default Home;