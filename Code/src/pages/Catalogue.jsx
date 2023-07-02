import React from 'react'

import {FaShoppingCart} from 'react-icons/fa'
import Product1 from "../assets/Product1.jpg"
import Product2 from "../assets/Product2.jpg"
import Product3 from "../assets/Product3.jpg"
import Product4 from "../assets/Product4.jpg"
import { Card } from 'flowbite-react'

const Catalogue = () => {
  return (
    <>
      <h1 className='text-3xl text-black font-playfair-extra-bold p-10'>Plants</h1>
      <div className='flex flex-row justify-evenly'>
          
          {/* Card 1 */}

        
          <Card className="flex p-5 mb-5 shadow-lg border-slate-200 border-2"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={Product1}
          style={{ width: "18rem" , height: "30rem"  }}
        >
          <a href="#">
            <h5 className="text-xl font-playfair-bold tracking-tight text-gray-900 dark:text-white">
              <p className='font-playfair'>
                Montera
              </p>
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-playfair-extra-bold text-gray-900 dark:text-white">
              Rs 500
            </span>
            <a
              className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300"
              href="#"
            >
              <p>
                Add to cart
                <FaShoppingCart className='inline-block ml-2 items-center justify-center'/>
              </p>
            </a>
          </div>
        </Card>



        {/* Card 2 */}


        <Card className="flex p-5 mb-5 "
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={Product2}
          style={{ width: "18rem" , height: "30rem" }}
        >
          <a href="#">
            <h5 className="text-xl font-playfair-bold tracking-tight text-gray-900 dark:text-white">
              <p className='font-playfair'>
                Montera
              </p>
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-playfair-extra-bold text-gray-900 dark:text-white">
              Rs 500
            </span>
            <a
              className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300"
              href="#"
            >
              <p>
                Add to cart
                <FaShoppingCart className='inline-block ml-2 items-center justify-center'/>
              </p>
            </a>
          </div>
        </Card>


        {/* Card 3 */}


        <Card className="flex p-5 mb-5"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={Product3}
          style={{ width: "18rem" , height: "30rem" }}
        >
          <a href="#">
            <h5 className="text-xl font-playfair-bold tracking-tight text-gray-900 dark:text-white">
              <p className='font-playfair'>
                Montera
              </p>
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-playfair-extra-bold text-gray-900 dark:text-white">
              Rs 500
            </span>
            <a
              className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300"
              href="#"
            >
              <p>
                Add to cart
                <FaShoppingCart className='inline-block ml-2 items-center justify-center'/>
              </p>
            </a>
          </div>
        </Card>



        {/* Card 4 */}


        <Card className="flex p-5 mb-5"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={Product4}
          style={{ width: "18rem" , height: "30rem" }}
        >
          <a href="#">
            <h5 className="text-xl font-playfair-bold tracking-tight text-gray-900 dark:text-white">
              <p className='font-playfair'>
                Montera
              </p>
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-playfair-extra-bold text-gray-900 dark:text-white">
              Rs 500
            </span>
            <a
              className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300"
              href="#"
            >
              <p>
                Add to cart
                <FaShoppingCart className='inline-block ml-2 items-center justify-center'/>
              </p>
            </a>
          </div>
        </Card>
    </div>

    </>
  )
}

export default Catalogue