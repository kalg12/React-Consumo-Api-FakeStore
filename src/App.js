import ProductCard from "./components/ProductCard/ProductCard";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result.data);
      console.log(products);
  });
  }, []);
  return (
    <>
    <h1>Fake Store Api</h1>
    <ProductCard title="Producto de prueba" price="50.00"/>
    </>
  );
}

export default App;
