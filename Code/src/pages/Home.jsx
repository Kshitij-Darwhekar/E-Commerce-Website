import React from 'react';
import Interior1 from '../assets/Interior1.jpg';
import Plant1 from '../assets/Plant1.jpg';
import Plant2 from '../assets/Plant2.jpg';
import Plant3 from '../assets/Plant3.jpg';
import Plant4 from '../assets/Plant4.jpg';
import IndoorPlants1 from '../assets/IndoorPlant1.jpg';
import IndoorPlants2 from '../assets/IndoorPlant2.jpg';
import OutdoorPlants1 from '../assets/OutdoorPlant1.jpg';
// import OutdoorPlants2 from '../assets/OutdoorPlants2.jpg';

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-center text-center gap-6 flex-col'>
        <h1 className='text-5xl font-playfair-extra-bold mt-10'>Find Perfect plants <br/> for your Home</h1>
        <p className='text-xl font-playfair'>Beautiful Plants that encourage you to get creative</p>
        <button className='bg-black font-playfair text-white rounded-sm p-2 px-12'>Shop Now</button>
        <div>
          <img src={Interior1} alt="Interior1" width={641} height={368} className='rounded-sm'/>
        </div>
      </div>

      <div>
        <h1 className='text-5xl font-playfair-extra-bold mt-10 text-center mb-10'>Categories</h1>
        <div className='flex flex-row flex-grow justify-evenly gap-4'>
          <div className='flex flex-col'>
            <img src={Plant1} width={234} height={320} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Jungle Plants</p>
          </div>
          <div className='flex flex-col'>
            <img src={Plant3} width={234} height={320} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Flowering Plants</p>
          </div>
          <div className='flex flex-col'>
            <img src={IndoorPlants1} width={234} height={320} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Indoor Plants</p>
          </div>
          <div className='flex flex-col' >
            <img src={OutdoorPlants1} width={234} height={320} />
            <p className='text-lg font-playfair-semi-bold mt-4'>Outdoor Plants</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home