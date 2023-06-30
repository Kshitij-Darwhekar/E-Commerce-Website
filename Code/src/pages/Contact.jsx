import React from 'react';
import Background from '../assets/Background.jpg';

const Contact = () => {
  return (
    <>
      <h1 className='text-black text-3xl font-playfair-bold px-4 pt-16'>Contact Us</h1>
      <p className='text-black text-xl font-playfair px-4 pt-2'>We'd love to hear from you!</p>
      <div className="flex flex-row relative p-10 rounded-xl bg-cover" >
        <div className='p-10 mr-10'>
          <h2 className='text-3xl font-playfair-bold mb-4'>Address</h2>
          <p className='font-playfair text-xl'>1234 Main St</p>
          <p className='font-playfair text-xl'>City, State 12345</p>
          <p className='font-playfair text-xl'>Country</p>
          <h2 className='text-3xl font-playfair-bold mt-10 mb-4'>Phone</h2>
          <p className='font-playfair text-xl'>123-456-7890</p>
          <h2 className='text-3xl font-playfair-bold mt-10 mb-4'>Email</h2>
          <p className='font-playfair text-xl'><a href='mailto:radplants.contacts@gmail.com'> radplants.contacts@gmail.com </a> </p>
        </div>
        <div className='flex flex-col flex-grow justify-center items-center text-center gap-4'>
          <form className='flex flex-col gap-4'>
            <label className='text-left '>Name</label>
            <input type='text' placeholder='Name' className='border-2 border-black bg-gray rounded-sm p-2 '/>
            <label className='text-left'>Email</label>
            <input type='email' placeholder='Email' className='border-2 border-black bg-gray rounded-sm p-2'/>
            <label className='text-left'>Subject</label>
            <input type='textarea' placeholder='Subject' className='border-2 border-black bg-gray rounded-sm p-2'/>
          </form>
          <button type='submit' className='bg-black text-white rounded-xl text-xl px-4 py-2 mt-10'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Contact