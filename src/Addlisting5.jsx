import React from 'react'
import './App.css';
import banner from "./addlistingimages5/banner.png";
const Addlisting5 = () => {
  return (
   <>
   <div className='grid grid-cols-1 md grid-cols-1 lg:grid-cols-1 mx-auto mt-40'>
    <div>
        <h1 className='text-xl sm:text-sm  md:text-sm lg:text-3xl font-semibold'>Hurray! You done created your Listing!</h1>
        <p className='mt-5'>Enhance your likelihood of completing a swap by including</p>
        <p className=''>pictures of your residence.</p>
        <img src={banner} alt="image" className='mx-auto w-[400px] h-[300px]' />
        <button type="button"  className='bg-green-500 text-white px-8 py-3 mb-5 w-100 h-90 rounded-lg '>Finish</button>
    </div>
   </div>
   
   </>
  )
}

export default Addlisting5