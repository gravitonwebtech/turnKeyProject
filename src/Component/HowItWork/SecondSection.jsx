import React from "react";
import Arrow from "./HowItWokImgs/NewWindowArrow.svg";
import One from "./HowItWokImgs/1.svg";
import Two from "./HowItWokImgs/2.svg";
import Three from "./HowItWokImgs/3.svg";
import Four from "./HowItWokImgs/4.svg";
import Five from "./HowItWokImgs/5.svg";

export default function SecondSection() {
  return (
    <>
      <div className="bg-[#E7F9EC] pb-10 md:pb-20" style={{ fontFamily: "Poppins" }}>
        <div className="pt-10 md:pt-14">
          <div className="text-center">
            <span className="text-xs bg-[#09A350] bg-opacity-50 px-10 py-1 rounded">
              How to begin your journey?
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-8 text-center mx-5 sm:mx:20 md:mx-40 lg:mx-60">
            Steps to House Swapping
          </h1>
        </div>

        <div className="mt-5 md:mt-10">
          <div className="border-2 border-[#09A350] h-40 w-40 rounded-full mx-auto flex flex-col items-center justify-center">
            <img src={Arrow} alt="" className="w-5 h-5 mb-2" />
            <h1 className="text-[#09A350] text-sm font-medium px-2">
              Get Started For Free
            </h1>
          </div>
        </div>

        <div className="mx-5 sm:mx:34  md:mx-28 lg:mx-40 xl:mx-80 mt-5 md:mt-10 lg:mt-20">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
              <img src={One} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            </div>

            <div className="col-span-9">
              <h1 className="text-[#09A350] text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                Registration and Verification
              </h1>
              <p className="text-[#696969] text-sm font-regular mt-3 md:mt-4">
                - Sign up for free with basic details.
              </p>
              <p className="text-[#696969] text-sm font-regular mt-1 md:mt-2">
                - Complete our identity verification process for a secure and
                trusted community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-14">
            <div className="col-span-3">
              <img src={Two} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
            
            <div className="col-span-9">
              <h1 className="text-[#09A350] text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Create your Profile
              </h1>
              <p className="text-[#696969] text-sm font-regular mt-3 md:mt-4">
                - Browse through a diverse range of properties from around the world.
              </p>
              <p className="text-[#696969] text-sm font-regular mt-1 md:mt-2">
                - Use customizable search filters to narrow down your options.
              </p>
              <p className="text-[#696969] text-sm font-regular mt-1 md:mt-2">
                - In fact our AI schema will assist you to shortlist your desired home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-14">
            <div className="col-span-3">
              <img src={Three} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
            
            <div className="col-span-9">
              <h1 className="text-[#09A350] text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Explore Listings
              </h1>
              <p className="text-[#696969] text-sm font-regular mt-3 md:mt-4">
                - Sign up for free with basic details.
              </p>
              <p className="text-[#696969] text-sm font-regular mt-1 md:mt-2">
                - Complete our identity verification process for a secure and
                trusted community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-14">
            <div className="col-span-3">
              <img src={Four} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
            
            <div className="col-span-9">
              <h1 className="text-[#09A350] text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Swapping
              </h1>
              <p className="text-[#696969] text-sm font-regular mt-3 md:mt-4">
                - Get lots of Exchanging Home option by our AI based filter.
              </p>
              <p className="text-[#696969] text-sm font-regular mt-1 md:mt-2">
                - Discuss potential swaps and get to know your exchange partners.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-14">
            <div className="col-span-3">
              <img src={Five} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
            
            <div className="col-span-9">
              <h1 className="text-[#09A350] text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Initiate Contact and Confirm
              </h1>
              <p className="text-[#696969] text-sm font-regular mt-3 md:mt-4">
                - Connect with homeowners through secure messaging.
              </p>
              <p className="text-[#696969] text-sm font-regular mt-1 md:mt-2">
                - Finalize the details and terms of your house swap.
              </p>
              <p className="text-[#696969] text-sm font-regular mt-1 md:mt-2">
                - Enjoy a seamless and secure exchange experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
