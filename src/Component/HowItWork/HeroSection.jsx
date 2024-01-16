import React from 'react';
import "./HowItWork.css"

export default function HeroSection() {
  return (
    <div className='mt-14 hero-section-banner flex items-center justify-center text-center'>
      <div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white' style={{ fontFamily: "Baumans" }}>
          <span className='text-[#57FFA5]'>Turn Keys</span>: How does it work?
        </h1>
        <p className='text-white font-medium mt-5 md:mt-8' style={{ fontFamily: "Poppins" }}>
          "From Registration to Adventure - A Seamless Experience Awaits You"
        </p>
        <div className="mt-5 md:mt-8" style={{ fontFamily: "Poppins" }}>
            <button className=' bg-[#09A350] text-white font-medium text-sm rounded-[4px] px-5 md:px-8 py-3'>
            Create your account for free
            </button>
        </div>
      </div>
    </div>
  )
}
