import React from 'react'

const ProductCard = ({title, price}) => {
  return (
    <>
        <div>
            <a href="#">{title}</a>
            <p>Precio: {price}</p>
        </div>
    </>
  )
}

export default ProductCard