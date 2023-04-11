import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { centralContext } from "./Ccontext";

const Fr = (props) => {
    const { fetchedProductData } = props;
    const { setProductID } = useContext(centralContext)
    const navg = useNavigate()
    useEffect(() => {

    })
    return (
        <>
            <div className="fr">
                <div className="results">
                    {fetchedProductData.map((m, i) => {
                        return (
                            <div className="product-cat" id={m.id} key={i} >
                                <div onClick={e => {
                                    setProductID(e.target.parentNode.id)
                                    navg("/productpage")
                                }} className="film" >
                                </div>
                                <div className="img-cat"><img src={m.image} className='img-cat-size' /></div>
                                <div className="title-cat"><p className='ep'>{m.title}</p></div>
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
export default Fr;