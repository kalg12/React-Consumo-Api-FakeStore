import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./Product.css";
import { RotatingLines } from "react-loader-spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result.data);
    });
  }, []);
  return (
    <>
      <h1>Fake Store Api</h1>
      {loading ? (
        <RotatingLines
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <div className="product-container">
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
        </div>
      )}
    </>
  );
};

export default Products;
