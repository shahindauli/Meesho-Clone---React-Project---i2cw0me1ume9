import React from "react";
import Fr from "./Fr";
import { centralContext } from "./Ccontext";
import { useContext } from "react";

const Flt = () => {
  const { fetchedProductData, setfetchedProductData } = useContext(centralContext);

  return (
    <>
      <Fr fetchedProductData={fetchedProductData} />

    </>
  )
}
export default Flt;