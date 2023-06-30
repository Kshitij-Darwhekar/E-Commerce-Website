import React from 'react'
import { CartList } from './CartList';
import CartItems from '../components/CartItems';

const Cart = () => {

  const n = 4;

  return (
    <>
      <h1 className='text-3xl font-playfair-extra-bold  m-4 mt-16 ml-16 '> Your Cart</h1>
      <p className='font-playfair-black m-4 ml-16'>You have {n} items in your cart</p>

      <div className='flex flex-col justify-center items-center text-center gap-8 m-4'>
      {
            CartList.map((cartItem, key) => {
                return (
                    <CartItems 
                    key={key}
                    id = {cartItem.id}
                    img={cartItem.image} 
                    name ={cartItem.name} 
                    price={cartItem.price}  />
                );
            })
        }
      </div>
  </>
  )
}

export default Cart