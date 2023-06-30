import React from 'react'
import Product1 from '../assets/Product1.jpg'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'



const ProductPage = () => {
  return (
    <>
    <div className='flex flex-row gap-4 mt-28'>
        <div className='flex flex-grow justify-end'>
            <img className='mx-5' src={Product1} alt='images' style={{width:'302px', height: '432px'}} />
        </div>
        <div className='flex flex-col flex-grow'>
            <button className='bg-black text-white rounded-sm font-playfair w-20'>Sold Out</button>
            <h1 className='text-3xl font-playfair-bold text-black mt-14'>Plant 3</h1>
            <p className='text-2xl font-playfair-bold text-black mt-5'>200 Rs</p>
            <p className='text-lg font-playfair-bold text-black mt-32'>Quantity</p>
            <button className='flex flex-row justify-center items-center gap-8 bg-white border-2 border-black w-48 py-2 mt-2 rounded-sm'><AiOutlineMinus/>1<AiOutlinePlus/></button>
            <button className='bg-black text-white font-playfair w-48 py-2 mt-4 rounded-sm'>Add to Cart</button>    
        </div>
    </div>   
    </>
  )
}

export default ProductPage