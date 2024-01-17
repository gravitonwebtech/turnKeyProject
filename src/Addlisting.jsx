import React from "react";
import banner from "./addlistingimages1/banner.png";
import image1 from "./addlistingimages1/image1.png";
import image2 from "./addlistingimages1/image2.png";
import image3 from "./addlistingimages1/image3.png";
const Addlisting = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:flex-col md:flex-col md:grid-cols-1 lg:grid-cols-2 mx-4 md:mx-8 lg:mx-20 gap-28 mt-28 mx-auto">
        <div class="text-center">
          <img src={banner} alt="banner" class="w-full sm:mx-auto md:mx-auto" />
        </div>

        <div className="p-4 sm:p-6 md:p-7">
          <div className="font-poppins">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-left font-semibold ">
              Hello{" "}
              <span className="text-[#74CB9C] font-poppins">Natalie,</span>{" "}
              what's your
              <br /> home like?
            </h1>
            <p className="text-left sm:text-center md:text-center lg:text-left  mt-2 text-[#D0D0D0] text:md sm:text-sm md:text-sm lg:text-md mx-auto sm:mx-auto md:mx-auto opacity-100">
              Allow prospective partners for exchange to discover more about you
              in order to persuade them to trade houses with you! It only takes
              two minutes, and you'll be able to select whether or not to invite
              other members to your house.
            </p>
          </div>
          <div>
            <h1 className="text-left mt-6 sm:mt-8 md:mt-10 p-1 mx-auto sm:mx-auto md:mx-auto mt-3">
              Home Type
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-10 md-mx-15 lg:mx-20 gap-2">
              <div className="rounded-lg border-black border p-1 w-[90px] mx-auto sm:mx-auto md:mx-auto lg:ml-[-69px] mt-3 ">
                <img src={image1} alt="images" className="ml-4" />
              </div>
              <div className="rounded-lg border-black-500 border p-1 w-[90px] mx-auto sm:mx-auto md:mx-auto lg:ml-[-69px] mt-3">
                <img src={image2} alt="images" />
              </div>
              <div className="rounded-lg border-black-500 border p-1 w-[90px] mx-auto sm:mx-auto md:mx-auto lg:ml-[-69px] mt-3">
                <img src={image3} alt="images" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex-1 border-t border-black-500"></div>
              <div className="mx-2">or</div>
              <div className="flex-1 border-t border-black-500"></div>
            </div>
            <div className="mx-2 mt-3 text-center sm:mx-auto md:mx-auto">
              <p className="border border-solid border-[#A1A1A1] p-2 rounded-lg font-semibold text-[#D0D0D0]">
                Enter your home type if above is not matched with yours
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 sm:mx-5 md:mx-10 lg:mx-15 mt-4">
        <div className="rounded-lg border-t-2 border-black-500 relative ">
          <div className="absolute top-0 left-0 h-[5px] w-1/4 bg-green-500 md:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
            <div className="mt-5">Step 1/4</div>
            <div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 mt-2 rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addlisting;
