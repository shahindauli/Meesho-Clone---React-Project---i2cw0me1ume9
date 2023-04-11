import React, { createContext, useState, useEffect } from "react";
export const centralContext = createContext();
const Ccontext = (props) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [fetchedProductData, setfetchedProductData] = useState([]);
    const [productID, setProductID] = useState(0);
    const [showCart, setShowCart] = useState(false)
    const [cartln, setCartln] = useState(0);
    const [ctlm, setctl] = useState(false)
    const [showCartempty, setShowCartEmpty] = useState(false)

    return (
        <>
            <centralContext.Provider
                value={{
                    productID, setProductID, userLoggedIn, setUserLoggedIn, fetchedProductData, setfetchedProductData,
                    showCart, setShowCart, cartln, setCartln, showCartempty, setShowCartEmpty, ctlm, setctl
                }}>
                {props.children}
            </centralContext.Provider>

        </>
    )
}
export default Ccontext;