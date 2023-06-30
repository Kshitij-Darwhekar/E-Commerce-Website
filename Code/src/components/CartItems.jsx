import React from 'react'

function CartItems({id,image, name, price}) {
    return (
      <div className='menuItem'>
        <div>{id}</div>
          <p><img src={image} alt='images' /></p>
          <h1>{name}</h1>
          <p>₹{price}</p>
          {/* <h4>{category}</h4> */}
      </div>
    )
  }
  
  
  
  export default CartItems