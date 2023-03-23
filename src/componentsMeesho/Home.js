import React, { useEffect, useState } from "react";
import Midrimg from '../img/mimg.webp';
import Fd from '../img/freeDelivery.svg';
import Cod from '../img/cod.svg';
import Er from '../img/easyReturns.svg';
import Playstoreicon from '../img/playicon.webp';
const Home = () => {
    const [data, setData] = useState([]);

    function fetchData() {
        fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data)

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
            <div className="fr">
                <div className="filter">
                    <div><h1>Total Results {data.length}</h1></div><br></br>
                    <div><h2>Filter Results By</h2></div><br></br>
                    <div>
                        <input type='checkbox' id='men' />&nbsp;&nbsp;<label htmlFor='men'>Men</label><br></br>
                        <input type='checkbox' id='women' />&nbsp;&nbsp;<label htmlFor='women'>Women</label><br></br>
                        <input type='checkbox' id='jewellary' />&nbsp;&nbsp;<label htmlFor='jewellary'>Jewellary</label><br></br>
                        <input type='checkbox' id='bags' />&nbsp;&nbsp;<label htmlFor='bags'>Bags</label><br></br>

                    </div>
                </div>
                <div className="results">
                    {data.map((m, i) => {
                        return (
                            <div className="product-cat" key={i}>
                                <div className="img-cat"><img src={m.image} className='img-cat-size' /></div>
                                <div className="title-cat"><p>{m.title}</p></div>
                                <div className="price-cat"><h4>₹ {m.price} <span>onwards</span></h4></div>
                                <div className="freedelv-cat"><p>Free Delivery</p></div>
                                <div className="rating-cat">
                                    <div className='rating-rev'>
                                    <div className="rating-s">
                                        <p>{m.rating.rate} <span><i className="fa-solid fa-star"></i></span></p>
                                    </div>
                                    <div className="review">{m.rating.count} <span>Reviews</span></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
export default Home;