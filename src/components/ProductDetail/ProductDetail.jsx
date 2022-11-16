import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Información del producto por detalle {id}</h1>
    </div>
  );
};

export default ProductDetail;
