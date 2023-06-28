import React from 'react'

const Contact = () => {
  return (
    <>
      <h1 className='text-black text-5xl p-4'>Contact Us</h1>
      <div className='flex flex-row relative p-10'>
        <div className='p-10 mr-10'>
          <h2>Address</h2>
          <p>1234 Main St</p>
          <p>City, State 12345</p>
        </div>
        <div className='flex flex-col flex-grow justify-center items-center text-center gap-4'>
          <form className='flex gap-2'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' className='border-2 border-black' />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' className='border-2 border-black' />
            <label htmlFor='textarea'>Message</label>
            <textarea id='message' className='border-2 border-black'/>
          </form>
          <button type='submit' className='bg-black text-white rounded-xl text-xl px-4 py-2'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Contact