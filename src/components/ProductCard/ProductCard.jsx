import React from 'react'
import './ProductCardStyles.css'
import {Link} from "react-router-dom"

const ProductCard = ({title, price, image, id}) => {
  return (
    <>
        <div className="productInfo">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p className="productPrice">Precio:${price} MXN</p>
            <Link to={`/product/${id}`}>
            <button className="btn-seeDetails">Ver detalle</button>
            </Link>
        </div>
    </>
  )
}

export default ProductCard