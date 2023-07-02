import React from 'react'

import {FaShoppingCart} from 'react-icons/fa'
import Product1 from "../assets/Product1.jpg"
import { Card } from 'flowbite-react'

const Catalogue = () => {
  return (
    <>
      <h1 className='text-3xl text-black font-playfair-extra-bold p-10'>Plants</h1>
      <div className='flex flex-row'>
        {/* Card 1 */}
        <div className='flex flex-col flex-grow px-10 mx-4 justify-center items-center text-center rounded-xl border-gray border-2 shadow-lg'>
          <img src={Product1} alt='Product 1' style={{width:'300px' , height: '420px'}} className='object-cover w-full h-full' />
          <div className='flex flex-row flex-grow items-center gap-40 my-4'>
            <h1>Montera</h1>
            <button><FaShoppingCart/></button>
          </div>
        </div>
        {/* Card 2 */}
        <div className='flex flex-col flex-grow px-10 mx-4 justify-center items-center text-center rounded-xl border-gray border-2 shadow-lg'>
          <img src={Product1} alt='Product 1' style={{width:'300px' , height: '420px'}} className='object-cover w-full h-full' />
          <div className='flex flex-row flex-grow items-center gap-40 my-4'>
            <h1>Montera</h1>
            <button><FaShoppingCart/></button>
          </div>
        </div>
        {/* Card 3 */}
        <div className='flex flex-col flex-grow px-10 mx-4 justify-center items-center text-center rounded-xl border-gray border-2 shadow-lg'>
          <img src={Product1} alt='Product 1' style={{width:'300px' , height: '420px'}} className='object-cover w-full h-full' />
          <div className='flex flex-row flex-grow items-center gap-40 my-4'>
            <h1>Montera</h1>
            <button><FaShoppingCart/></button>
          </div>
        </div>
        {/* Card 4 */}
        <div className='flex flex-col flex-grow px-10 mx-4 justify-center items-center text-center rounded-xl border-gray border-2 shadow-lg'>
          <img src={Product1} alt='Product 1' style={{width:'300px' , height: '420px'}} className='object-cover w-full h-full' />
          <div className='flex flex-row flex-grow items-center gap-40 my-4'>
            <h1>Montera</h1>
            <button><FaShoppingCart/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalogue