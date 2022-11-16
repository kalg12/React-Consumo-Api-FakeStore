import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((result) => setProduct(result.data));
    }, [id]);

  return (
    <div className="productDetail">
      <h1>Información del producto por detalle - {id}</h1>
        <h2>{product && product.title}</h2>
        <p className="productDetailDescription">{product && product.description}</p>
        <p className="productDetailPrice">${product && product.price} MXN</p>
        <img className="productDetailImage" src={product && product.image} alt={product && product.title} />
        <Link className="btn-backHome" to="/">Volver</Link>
    </div>
  );
};

export default ProductDetail;