import React, { useContext, useEffect } from "react";
import { centralContext } from "./Ccontext";
import Fr from "./Fr";
const Kids = () => {
    const { fetchedProductData, setfetchedProductData } = useContext(centralContext);

    return (
        <>
            <Fr fetchedProductData={fetchedProductData} />
        </>
    )
}
export default Kids;