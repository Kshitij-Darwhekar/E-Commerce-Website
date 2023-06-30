import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('clicked')
        navigate('/cart')
    }

  return (
    <>
        <div className='flex flex-row relative gap-4 mt-2'>
            <div className='flex justify-start '>
                <h1 className='text-2xl font-playfair-bold ml-8'>Rad Plants</h1>
            </div>
            <div className='flex flex-grow justify-center items-center text-center gap-4'>
                <ul className='flex justify-center items-center text-center'>
                    <li className='mr-6 text-2xl font-playfair-black'><a href='/'>Home</a></li>
                    <li className='mr-6 text-2xl font-playfair-black'><a href='/catalogue'>Catalogue</a></li>
                    <li className='mr-6 text-2xl font-playfair-black'><a href='/contact'>Contact</a></li>
                </ul>
            </div>
            <div className='flex flex-row'>
                <ul className='flex justify-center items-center text-center'>
                    <li className='mr-6'><AiOutlineSearch className='text-3xl'/></li>
                    <li className='mr-6'><AiOutlineShoppingCart className='text-3xl' onClick={handleSubmit}/></li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default Navbar