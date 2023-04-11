import React, { useContext, useEffect } from "react";
import { centralContext } from "./Ccontext";
import Fr from "./Fr";
const Men = () => {
  const { fetchedProductData, setfetchedProductData } = useContext(centralContext);
  function fetchData() {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
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
export default Men;