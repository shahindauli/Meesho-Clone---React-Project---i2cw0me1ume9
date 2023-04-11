import React, { useContext, useEffect, useState } from "react";
import { centralContext } from "./Ccontext";
const Cart = () => {

    const cart = JSON.parse(localStorage.getItem('cart'))
    const [total, settotal] = useState(0)
    const ul = useContext(centralContext);
    const { setShowCart, cartln, setCartln, showCartempty, setShowCartEmpty, ctlm, setctl } = ul;

    function crtln() {
        if (cart !== null)
            setCartln(cart.length)
        else
            setCartln(0)
    }

    function tot() {
        let cvt = 0;
        if (cart !== null) {
            for (let i = 0; i < cart.length; i++) {
                cvt += cart[i].quantity * cart[i].price;
            }
        }
        settotal(cvt)
    }

    function clearCart() {
        localStorage.removeItem('cart')
        setctl(false)
        setShowCartEmpty(true)
        setShowCart(false)
    }

    function ctl() {
        if (cart !== null) {
            setctl(true)
            setShowCartEmpty(false)
        }
        else {
            setShowCartEmpty(true)
            setctl(false)
        }
    }


    function deleteItem(e) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == e.target.parentNode.id) {
                cart.splice(i, 1)
                localStorage.setItem('cart', JSON.stringify(cart))
                console.log('cart item', cart)
                if (cart.length === 0) {
                    localStorage.removeItem('cart')
                    setctl(false)
                    setShowCartEmpty(true)
                    setShowCart(false)
                }
                setCartln(cart.length)
                tot();
                break;
            }

        }

    }

    function incItem(e) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == e.target.id) {
                cart[i].quantity += 1;
                console.log(cart[i])
                let xcv = [...cart.slice(0, i), cart[i], ...cart.slice(i + 1)]
                localStorage.setItem("cart", JSON.stringify(xcv))
                tot();
                break;
            }
        }
    }

    function decItem(e) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == e.target.id && cart[i].quantity !== 1) {
                cart[i].quantity -= 1;
                console.log(cart[i])
                let xcv = [...cart.slice(0, i), cart[i], ...cart.slice(i + 1)]
                localStorage.setItem("cart", JSON.stringify(xcv))
                tot();
                break;
            }
        }
    }
    useEffect(() => {
        ctl()
    }, [ctlm])

    useEffect(() => {
        crtln()
    }, [cartln])
    useEffect(() => {
        tot();
    }, [total])


    return (
        <>
            <div className="cartCss">
                {
                    ctlm && <>
                        {cart.map((m, i) => {
                            return (
                                <div className="cart-item-cont" key={i}>
                                    <div className="ci cics">
                                        <div>
                                            <p>Product id : {m.id}</p><br></br>
                                            <img width="100" height="80" src={m.image} />
                                        </div>
                                    </div>
                                    <div className="ci">
                                        <div className="qid-cont">
                                            <button className="qid-s" id={m.id} onClick={decItem}>-</button>
                                            <p className="qid-s">{m.quantity}</p>
                                            <button className="qid-s" id={m.id} onClick={incItem}>+</button>
                                        </div>
                                    </div>
                                    <div className="ci">
                                        <p style={{ fontSize: '20px' }}> <i className="fa-solid fa-indian-rupee-sign"></i> {m.price} <i className="fa-solid fa-xmark"></i> {m.quantity} <i className="fa-solid fa-equals"></i> <i className="fa-solid fa-indian-rupee-sign"></i> {m.price * m.quantity}</p>
                                    </div>
                                    <div className="ci cicl">
                                        <button className="delete-btn" onClick={deleteItem} id={m.id}><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="total-price-cont">
                            <div>
                                <button className="clrcart" onClick={clearCart} >Clear Cart</button>
                            </div>
                            <div className="ftotal">
                                <p>Total Price <i className="fa-solid fa-equals"></i> <i className="fa-solid fa-indian-rupee-sign"></i>  {total.toFixed(2)}</p>
                            </div>
                        </div>
                    </>
                }
                {showCartempty && <p style={{ color: 'red', fontSize: '50px', marginTop: '100px', textAlign: 'center' }}>Cart is empty</p>}
            </div>
        </>
    )
}
export default Cart