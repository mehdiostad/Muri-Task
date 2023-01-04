import Card from "../Card/Card";
import React, { useEffect, useState } from "react";
import "./ShopCards.css";
import axios from "axios";
const ShopCards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
        const {data} = await axios.get("http://localhost:8000/products/");
        setProducts(data);
      
    };
    fetchProducts();
  }, []);
  return (
    <div className="shopcards">
      <div className="main">
        {products.map((product) => {
         return <Card productInfo={product}/>;
        })}
      </div>
    </div>
  );
};

export default ShopCards;
