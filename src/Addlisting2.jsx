import React from 'react'
import banner from './addlistingimages2/banner.png';
import map  from "./addlistingimages2/map.png";
import image1 from "./addlistingimages2/image1.png";
import image2 from "./addlistingimages2/image2.png";
import image3 from "./addlistingimages2/image3.png";
import image4 from "./addlistingimages2/image4.png";
import image5 from "./addlistingimages2/image5.png";
import image6 from "./addlistingimages2/image6.png";
import image7 from "./addlistingimages2/image7.png";
import image8 from "./addlistingimages2/image8.png";
import image9 from "./addlistingimages2/image9.png";
import image10 from "./addlistingimages2/image10.png";
import line1 from "./addlistingimages2/line1.png";
import line2 from "./addlistingimages2/line2.png";
const Addlisting2 = () => {
  return (
   <>
     <div className="grid grid-cols-1 sm:flex-col md:flex-col md:grid-cols-1 lg:grid-cols-2 mx-4 md:mx-8 lg:mx-20 gap-28 mt-28 mx-auto ">
        <div class="text-center">
          <img src={banner} alt="banner" class="w-full sm:mx-auto md:mx-auto" />
        </div>
        
        <div className="p-4 sm:p-6 md:p-7">
          <div className="font-poppins">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-left font-semibold ">
            Share additional information about your home.
            </h1>
            <p className="text-left mt-2 sm:text-center md:text-center lg:text-left text-md sm:text-sm md:text-md lg:text-md mt-2 text-[#D0D0D0] text:md sm:text-sm md:text-sm lg:text-md mx-auto sm:mx-auto md:mx-auto opacity-100">
            Your address (Don't worry, your address will not be displayed on<br/> your listing.)
            </p>
      
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4">
    <div className='col-span-8 mt-2'>
        <form>
            <input type="text" placeholder='Street Address ' className='w-full h-full border border-[#A1A1A1] p-2 rounded-lg' />
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-3 gap-2'>
                <div>
                    <input type="text" placeholder='District' className='w-full h-full border border-[#A1A1A1] p-2 rounded-lg' />
                </div>
                <div>
                    <input type="text" placeholder='State' className='w-full h-full border border-[#A1A1A1] p-2 rounded-lg' />
                </div>
                <div>
                    <input type="text" placeholder='Zip Code' className='w-full h-full border border-[#A1A1A1] p-2 rounded-lg' />
                </div>
                <div>
                    <input type="text" placeholder='Nation' className='w-full h-full border border-[#A1A1A1] p-2 rounded-lg' />
                </div>
            </div>
        </form>
    </div>
    <div className='col-span-1 hidden md:block mx-auto'>
        <img src={line1} alt="image" className='h-12' />
        <p className='text-left'>or</p>
        <img src={line1} alt="image" className='h-14' />
    </div>
    <div className='col-span-3 mx-auto md:mx-0'>
        <img src={map} alt="image" className='w-[200px] h-[150px]' />
    </div>
</div>

     
     </div>
     <div className='mt-10'>
     <p className='text-[#ABABAB] text-start'>How would you describe your home's direct surroundings?</p>
     <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 mt-10 gap-6 mx-5 sm:mx-auto md:mx-auto '>
        <div>
            <img src={image1} alt="image"/>
        </div>
        <div>
        <img src={image2} alt="image"/>
        </div>
        <div>
        <img src={image3} alt="image"/>
        </div>
        <div>
        <img src={image4} alt="image"/>
        </div>
        <div>
        <img src={image5} alt="image"/>
        </div>
        <div>
            <img src={image6} alt="image"/>
        </div>
        <div>
        <img src={image7} alt="image"/>
        </div>
        <div>
        <img src={image8} alt="image"/>
        </div>
        <div>
        <img src={image9} alt="image"/>
        </div>
        <div>
        <img src={image10} alt="image"/>
        </div>
     </div>
     </div>
     </div>
    
     </div>

     <div className="mx-2 sm:mx-5 md:mx-10 lg:mx-15 mt-4">
        <div className="rounded-lg border-t-2 border-black-500 relative ">
          <div className="absolute top-0 left-0 h-[5px] w-2/4 bg-green-500 md:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
            <div className="mt-5">Step 2/4</div>
            <div className="space-x-4">
    <button className="text-green-500 border border-t border-green-500 font-bold py-2 px-5 mt-2 rounded">
        Skip
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 mt-2 rounded">
        Next
    </button>
</div>

          </div>
        </div>
      </div>
   </>
  )
}

export default Addlisting2