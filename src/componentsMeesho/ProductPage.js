import React, { useContext, useEffect, useState } from "react";
import { centralContext } from "./Ccontext";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
    const { productID, setCartln } = useContext(centralContext);
    const [product, setProduct] = useState({})
    const [rating, sni] = useState('')
    const [count, scount] = useState('')
    const navg = useNavigate();

    const loggedUser = localStorage.getItem('loggedUser')
    function fetchData() {
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                sni(data.rating.rate)
                scount(data.rating.count)
            })
    }
    function addtocart() {
        if (loggedUser === null) {
            alert('Please log in or sign up....')
        }
        else {
            let cartobj = {
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                quantity: 1
            }
            let cart = localStorage.getItem('cart');

            if (cart === null) {
                cart = [cartobj]
                localStorage.setItem('cart', JSON.stringify(cart))
                setCartln(cart.length)

            }
            else {

                let xct = JSON.parse(cart)
                for (let i = 0; i < xct.length; i++) {
                    if (xct[i].id === product.id) {
                        xct[i].quantity += 1;
                        console.log(xct[i])
                        let xcv = [...xct.slice(0, i), xct[i], ...xct.slice(i + 1)]
                        localStorage.setItem("cart", JSON.stringify(xcv))
                        setCartln(xct.length)
                        break;
                    }
                    else {
                        let xcv = [...xct, cartobj]
                        localStorage.setItem("cart", JSON.stringify(xcv))
                        setCartln(xcv.length)

                    }
                }

            }


        }
    }
    function buynow() {
        if (loggedUser === null) {
            alert('Please log in or sign up....')
        }
        else {
            let cartobj = {
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                quantity: 1
            }
            let cart = localStorage.getItem('cart')

            if (cart === null) {
                cart = [cartobj]
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            else {

                let xct = JSON.parse(cart)
                for (let i = 0; i < xct.length; i++) {
                    if (xct[i].id === product.id) {
                        xct[i].quantity += 1;
                        console.log(xct[i])
                        let xcv = [...xct.slice(0, i), xct[i], ...xct.slice(i + 1)]
                        localStorage.setItem("cart", JSON.stringify(xcv))
                        break;
                    }
                    else {
                        let xcv = [...xct, cartobj]
                        localStorage.setItem("cart", JSON.stringify(xcv))
                    }
                }

            }
            navg("/cart")
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <div className="productpage">
                <div className="simage-cont"><img className="sic" src={product.image} /></div>
                <div className="limage-cont">
                    <img className="sic" src={product.image} />
                    <div className="addtocartbutton">
                        <button className="addtocart" onClick={addtocart}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                        <button className="buynow" id={product.id} onClick={buynow}>Buy Now</button>
                    </div>

                </div>
                <div className="details-cont">
                    <div className="dc">
                        <h3 style={{ color: 'grey' }}>{product.title}</h3><br />
                        <h1>₹ {product.price}</h1><br />
                        <div className="dcprr">
                            <div className="rating-star">
                                <p>{rating} <span><i className="fa-solid fa-star"></i></span></p>
                            </div>
                            <p style={{ marginLeft: '30px', fontSize: '12px' }}>{count} <span>reviews</span></p>
                        </div><br />
                        <p style={{ fontSize: '12px' }}>Free Delivery</p>
                    </div>
                    <div className="dc sm">
                        <h3>Select Size</h3><br />
                        <div className="size">
                            <div>28</div>
                            <div>30</div>
                            <div>32</div>
                        </div>
                    </div>
                    <div className="dc sm">
                        <h3>Product Details</h3><br />
                        <p>Name : {product.title}</p><br />
                        <p>Size : 28 30 32</p><br />
                        <p>Delivery : Free Delivery</p><br />
                        <p>Country of origin : India</p>

                    </div>

                </div>

            </div>
        </>
    )
}
export default ProductPage;