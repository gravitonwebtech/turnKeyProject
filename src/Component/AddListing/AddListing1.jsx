import React from "react";
import Listing1 from "./AddListingImg/AddListingImg1.png";
import House from "./AddListingImg/House.svg";
import Apartment from "./AddListingImg/Apartment.svg";
import Bungalow from "./AddListingImg/Bungalow.svg";
import Line from "../HomeImgs/Line.svg";

export default function AddListing1({ onNextStep }) {
  return (
    <>
      <div className="md:flex md:items-center md:justify-center min-h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 mt-5 md:mt-0">
          <div className="">
            <img src={Listing1} alt="" />
          </div>
          <div className="" style={{ fontFamily: "Poppins" }}>
            <h1 className="text-xl md:text-2xl font-semibold hidden md:block">
              Hello <span className="text-[#09A350]">Natalie</span>, what's your
              <br></br> home like?
            </h1>

            <h1 className="text-xl md:text-2xl text-center font-semibold block md:hidden">
              Hello <span className="text-[#09A350]">Natalie</span>, what's your
              <br></br> home like?
            </h1>

            <p className="text-[#ABABAB] text-sm mt-4 xl:w-[500px] text-justify hidden md:block">
              Allow prospective partners for exchange to discover more about you
              in order to persuade them to trade houses with you! It only takes
              two minutes, and you'll be able to select whether or not to invite
              other members to your house.
            </p>

            <p className="text-[#ABABAB] text-sm mt-4 text-center block md:hidden">
              Allow prospective partners for exchange to discover more about you
              in order to persuade them to trade houses with you! It only takes
              two minutes, and you'll be able to select whether or not to invite
              other members to your house.
            </p>

            <h1 className="text-md mt-5">Home Type</h1>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-5 mt-5 xl:mt-8 lg:mr-20 xl:mr-40">
              <div className="border border-black rounded-[8px] p-4 flex flex-col items-center justify-center">
                <img src={House} alt="" className="h-10 w-10" />
                <h1 className="mt-3 text-sm">Villa</h1>
              </div>

              <div className="border border-black rounded-[8px] p-4 flex flex-col items-center justify-center">
                <img src={Bungalow} alt="" className="h-10 w-10" />
                <h1 className="mt-2 text-sm text-[#808080]">Bungalow</h1>
              </div>

              <div className="border border-black rounded-[8px] p-4 flex flex-col items-center justify-center">
                <img src={Apartment} alt="" className="h-10 w-10" />
                <h1 className="mt-2 text-sm text-[#808080]">Apartment</h1>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-6 mt-3 xl:mt-5 lg:mr-20 xl:mr-40">
              <div className="flex items-center">
                <img src={Line} alt="" />
              </div>
              <div className="">
                <h1 className="text-sm text-[#808080] font-regular">or</h1>
              </div>
              <div className="flex items-center">
                <img src={Line} alt="" />
              </div>
            </div>

            <p className="mt-4 xl:mt-5 lg:mr-20 xl:mr-40">
              <input
                type="text"
                id="textInput"
                placeholder="Enter your home type if above is not matched with yours"
                className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
              />
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-2 w-full border-gray-500 bg-[#D9D9D9] mt-10 sm:mt-10 md:mt-0">
        <div className="absolute left-0 w-[25%] h-full bg-green-500"></div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 mt-3" style={{ fontFamily: "Poppins" }}>
        <div className="text-sm font-semibold">Step 1/4</div>
        <div className="flex justify-end">
          <button
            onClick={onNextStep}
            className="text-white bg-[#09A350] px-5 py-1 rounded-[4px]"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
