import React from 'react'
import './ProductCardStyles.css'
import {Link} from "react-router-dom"

const ProductCard = ({title, price, image, id}) => {
  return (
    <>
        <div className="productInfo">
            <h3 href="#">{title}</h3>
            <img src={image} alt={title} />
            <p className="productPrice">Precio:${price}</p>
            <Link to={`/product/${id}`}>
            <button className="">Ver detalle</button>
            </Link>
        </div>
    </>
  )
}

export default ProductCard