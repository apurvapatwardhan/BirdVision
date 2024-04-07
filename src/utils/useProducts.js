import { useEffect } from "react";
import { useState } from "react";
import { PRODUCT_URL } from "../constants";

async function getProductsData(url, setProducts) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error("error");
    }
    const op = await resp.json();
    setProducts(op.products);
  } catch (err) {
    setProducts([]);
  }
}

function useProducts(limit, skip) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProductsData(
        `${PRODUCT_URL}?limit=${limit}&skip=${skip}`,
        setProducts
      );
   
  }, [limit, skip]);

  return products;
}

export default useProducts;
