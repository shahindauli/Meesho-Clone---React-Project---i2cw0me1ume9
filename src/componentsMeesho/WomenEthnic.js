import React, { useContext, useEffect } from "react";
import Fr from "./Fr";
import { centralContext } from "./Ccontext";
const WomenEthnic = () => {
  const { fetchedProductData, setfetchedProductData } = useContext(centralContext);
  function fetchData() {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
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
      <Fr fetchedProductData={fetchedProductData} />
    </>
  )
}
export default WomenEthnic;