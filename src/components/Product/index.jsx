import React from 'react'
import {ProductWrapper} from "./style"

const Product = ({item, addToCart}) => {
  const {image,
    imgSubtitle,
    title,
    rating,
    ratingVoice,
    monthlyPayment,
    oldPrice,
    price,
  } = item;


  return (
    <ProductWrapper>
      <div className='product__top'>
          <img className='product__top--image' src={image} alt={title}/>
           <span className='product__top--image-sub'>{imgSubtitle}</span>
           <button className='product__top--btn'><i class="fa-regular fa-heart"></i></button>
      </div>
      
      <div className='product__bottom'>
        <h5 className='product__bottom--heading'>{title}</h5>
          <div className='product__bottom--rating'>
            <p><i class="fa-solid fa-star"></i> {rating} <span>({ratingVoice} sharh)</span></p>
          </div>
          <p className='product__bottom--monthly-payment'>{monthlyPayment} so'm/oyiga</p>
          <del className='product__bottom--old-price'>{oldPrice} so'm</del>
          <h6 className='product__bottom--price'>{price} so'm</h6>
          <button className='product__bottom--btn' onClick={() => addToCart(item)}><i class="fa-solid fa-cart-plus"></i></button>
      </div>

    </ProductWrapper>
  )
}

export default Product