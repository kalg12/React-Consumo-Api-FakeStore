import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result.data);
    });
  }, []);
  return (
    <>
      <h1>Fake Store Api</h1>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
    </>
  );
};

export default Products;