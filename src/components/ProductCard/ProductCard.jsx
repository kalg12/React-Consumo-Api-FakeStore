import React from 'react'
import './ProductCardStyles.css'

const ProductCard = ({title, price, image}) => {
  return (
    <>
        <div className="productInfo">
            <h3 href="#">{title}</h3>
            <img src={image} alt={title} />
            <p className="productPrice">Precio:${price}</p>
        </div>
    </>
  )
}

export default ProductCard