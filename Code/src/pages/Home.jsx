import React from 'react';
import Interior1 from '../assets/Interior1.jpg';
import Plant1 from '../assets/Plant1.jpg';
import Poster from '../assets/Poster.jpg';
import Plant2 from '../assets/Plant2.jpg';
import Plant3 from '../assets/Plant3.jpg';
import Plant4 from '../assets/Plant4.jpg';
import IndoorPlants1 from '../assets/IndoorPlant1.jpg';
import IndoorPlants2 from '../assets/IndoorPlant2.jpg';
import OutdoorPlants1 from '../assets/OutdoorPlant1.jpg';
import Product1 from '../assets/Product1.jpg';
import Product2 from '../assets/Product2.jpg';
import Product3 from '../assets/Product3.jpg';
import Product4 from '../assets/Product4.jpg';
import Blog1 from '../assets/Blog1.jpg';
import Blog2 from '../assets/Blog2.jpg';
import Blog3 from '../assets/Blog3.jpg';

// import OutdoorPlants2 from '../assets/OutdoorPlants2.jpg';

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-center text-center gap-6 flex-col'>
        <h1 className='text-5xl font-playfair-extra-bold mt-10'>Find Perfect plants <br/> for your Home</h1>
        <p className='text-xl font-playfair'>Beautiful Plants that encourage you to get creative</p>
        <button className='bg-black font-playfair text-white rounded-sm p-2 px-12'>Shop Now</button>
        <div className='mt-20'>
          <img src={Interior1} alt="Interior1" style={{width:'641px', height:'368px'}} className='rounded-sm'/>
        </div>
      </div>

      <div>
        <h1 className='text-5xl font-playfair-extra-bold mt-32 text-center mb-16'>Categories</h1>
        <div className='flex flex-row flex-grow justify-evenly gap-4'>
          <div className='flex flex-col'>
            <img src={Plant1} style={{width:'234px', height: '320px'}} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Jungle Plants</p>
          </div>
          <div className='flex flex-col '>
            <img src={Plant3} style={{width:'234px', height: '320px'}} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Flowering Plants</p>
          </div>
          <div className='flex flex-col'>
            <img src={IndoorPlants1} style={{width:'234px', height: '320px'}} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Indoor Plants</p>
          </div>
          <div className='flex flex-col' >
            <img src={OutdoorPlants1} style={{width:'234px', height: '320px'}} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Outdoor Plants</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-3xl font-playfair-extra-bold mt-10 text-center mb-20'>Love and work are to people what water <br/> and sunshine are to plants</h1>
      </div>

      <div className='flex flex-row gap-40'>
        <div className='flex flex-col justify-start items-start text-start ml-10'>
          <h5 className='text-2xl mb-5'>Featured</h5>
          <p className='text-xl font-playfair-italic'>Our plants are 100% organic, <br /> we don't use pesticides or harmful chemicals. <br /> But please don't eat them</p>
          <button className=" mt-6 px-6 py-2 font-semibold text-black border-b-4 rounded shadow-lg hover:border-gray hover:shadow-none">Shop all favourites</button>
        </div>
        <div className='flex flex-row justify-evenly gap-10'>
          <section className='flex flex-col'>
            <img src={Product1} alt="Product1" style={{width: '224px',height:'280px'}} className='rounded-sm'/>
            <p className='text-lg font-playfair-semi-bold mt-4 text-slate-500'>Monstera</p>
            <p className='text-lg font-playfair-semi-bold mt-4'>$ 20</p>
          </section>
          <section className='flex flex-col'>
            <img src={Product2} alt="Product2" style={{width: '224px',height:'280px'}} className='rounded-sm'/>
            <p className='text-lg font-playfair-semi-bold mt-4 text-slate-500'>Monstera</p>
            <p className='text-lg font-playfair-semi-bold mt-4'>$ 40</p>
          </section>
          <section className='flex flex-col w-96 h-96'>
            <img src={Product3} alt="Product3" style={{width: '224px',height:'280px'}} className='rounded-sm'/>
            <p className='text-lg font-playfair-semi-bold mt-4 text-slate-500'>Monstera</p>
            <p className='text-lg font-playfair-semi-bold mt-4'>$ 30</p>
          </section>
        </div>
      </div>

      <div className='flex flex-row gap-10 mt-10 text-justify justify-evenly mb-10'>
        <div className='relative'>
          <div className='flex flex-col flex-grow text-center gap-2'>
            <img src={Blog1} alt="Blog 1" width={308} style={{height:'200px'}} className='rounded-sm' title='Blog 1'/>
            <p className='font-playfair-black'>How to repot a Monstera without <br /> killing it and foster its growth</p>
          </div>
          <div className='absolute bottom-20 right-0 bg-white p-2 px-5 '>
            <p className='text-slate-500 font-playfair'>Written By</p>
            <p className='text-black font-playfair'>Billy Bowden</p>
          </div>
        </div>

        <div className='relative'>
          <div className='flex flex-col flex-grow text-center gap-2'>
          <img src={Blog2} alt="Blog 2" width={308} style={{height: '200px'}} className='rounded-sm' title='Blog 2'/>
          <p className='font-playfair-black'>How to water your freaking plants <br/> so they don't die after one week</p>
          </div>
          <div className='absolute bottom-20 right-0 bg-white p-2 px-5 '>
            <p className='text-slate-500 font-playfair'>Written By</p>
            <p className='text-black font-playfair'>Aleem Daar</p>
          </div>
        </div>

        <div className='relative'>
          <div className='flex flex-col flex-grow text-center gap-2'> 
            <img src={Blog3} alt="Blog 3" width={308} style={{height: '200px'}} className='rounded-sm' title='Blog 3'/>
            <p className='font-playfair-black'>Unleashing the Green Thumb: Mastering <br/> Monstera Repotting for Optimal Growth</p>
          </div>
          
          <div className='absolute bottom-20 right-0 bg-white p-2 px-5 '>
            <p className='text-slate-500 font-playfair'>Written By</p>
            <p className='text-black font-playfair'>Steve Bucknor</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home