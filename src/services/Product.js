import React from 'react'

function Product({id, image, title,ratings, price}) {
  return (
    <div>
       <div className='product'>
            <div className='product_info'>
              <p>{title}</p>
              <p>
                  <small>$</small> 
                 <strong>{price}</strong> </p>

            </div>
            <img className='img_product' alt='' src={image} />
            <button >Add to Basket</button>
        </div>
    </div>
  )
}

export default Product