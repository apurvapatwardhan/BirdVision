import { useEffect } from "react";
import { useState } from "react";
import { PRODUCT_URL } from "../constants";

async function getProductData(id, setProduct) {
  const resp = await fetch(`${PRODUCT_URL}/${id}`);
  const product = await resp.json();
  setProduct(product);
}

function useProductDetails(id) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
        getProductData(id, setProduct);
    }
    catch(Err) {
        setProduct({})
    }
  }, [id]);

  return product;
}

export default useProductDetails;
