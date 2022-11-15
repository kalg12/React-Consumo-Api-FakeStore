import ProductCard from "./components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result.data);
    });
  }, []);
  return (
    <>
      <h1>Fake Store Api</h1>
      {products && products.map((product, id) =>
      <ProductCard key={id} title={product.title} price={product.price} />)}
    </>
  );
}

export default App;
