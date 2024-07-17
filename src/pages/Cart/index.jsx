import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
      {cart.map((item) => {
        return (
         <div>
              <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
      </div>          
        )
      })}
    </div>
  )
}

export default Cart