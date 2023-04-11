import React, { useContext } from "react";
import { centralContext } from "./Ccontext";
import Fr from "./Fr";
const Hk = () => {
    const { fetchedProductData, setfetchedProductData } = useContext(centralContext);

    return (
        <>
            <Fr fetchedProductData={fetchedProductData} />

        </>
    )
}
export default Hk;