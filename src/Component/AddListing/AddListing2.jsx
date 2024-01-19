import React from "react";
import Listing2 from "./AddListingImg/AddListing2.png";
import Map from "./AddListingImg/Map.png";
import Icon1 from "./AddListingImg/Mountain.svg";
import Icon2 from "./AddListingImg/Wooden house.svg";
import Icon3 from "./AddListingImg/Village.svg";
import Icon4 from "./AddListingImg/Barn.svg";
import Icon5 from "./AddListingImg/Vacations.svg";
import Icon6 from "./AddListingImg/Skyline.svg";
import Icon7 from "./AddListingImg/Skytrain.svg";
import Icon8 from "./AddListingImg/Village.svg";
import Icon9 from "./AddListingImg/Island.svg";
import Icon10 from "./AddListingImg/Countryside.svg";

export default function AddListing2({ onNextStep }) {
  return (
    <>
      <div className="md:flex md:items-center md:justify-center min-h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 lg:gap-14 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 mt-5 md:mt-0">
          <div className="md:col-span-5 flex items-center">
            <img src={Listing2} alt="" />
          </div>

          <div className="md:col-span-7" style={{ fontFamily: "Poppins" }}>
            <h1 className="text-xl md:text-2xl font-semibold hidden md:block">
              Share additional information <br></br> about your home.
            </h1>

            <h1 className="text-xl md:text-2xl text-center font-semibold block md:hidden">
              Share additional information about your home.
            </h1>

            <p className="text-[#ABABAB] text-sm mt-4 xl:w-[400px] text-justify hidden md:block">
              Your address (Don't worry, your address will not be displayed on
              your listing.)
            </p>

            <p className="text-[#ABABAB] text-sm mt-4 text-center block md:hidden">
              Your address (Don't worry, your address will not be displayed on
              your listing.)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
              <div className="md:col-span-6">
                <form>
                  <p className="">
                    <input
                      type="text"
                      id="textInput"
                      placeholder="Street Address"
                      className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                    />
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <p className="">
                      <input
                        type="text"
                        id="textInput"
                        placeholder="District"
                        className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                      />
                    </p>
                    <p className="">
                      <input
                        type="text"
                        id="textInput"
                        placeholder="State"
                        className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                      />
                    </p>

                    <p className="">
                      <input
                        type="text"
                        id="textInput"
                        placeholder="Zip Code"
                        className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                      />
                    </p>

                    <p className="">
                      <input
                        type="text"
                        id="textInput"
                        placeholder="Nation"
                        className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                      />
                    </p>
                  </div>
                </form>
              </div>

              <div className=" hidden md:block">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="border-l border-[#808080] h-[55px] mb-1"></div>
                  <h1 className="text-sm text-[#808080] font-regular">or</h1>
                  <div className="border-l border-[#808080] h-[55px] mt-1"></div>
                </div>
              </div>

              <div className="md:col-span-5">
                <img src={Map} alt="" className="xl:w-[85%]" />
              </div>
            </div>

            <p className="text-[#ABABAB] text-sm mt-4">
              How would you describe your home's direct surroundings?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
              <div className="md:col-span-12 lg:col-span-10 xl:col-span-8 grid grid-cols-3 md:grid-cols-5 gap-5">
                <div className="border border-black rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon1} alt="" className="w-8 h-8" />
                  <h1 className="text-xs md:text-[8px]">Mountain</h1>
                </div>

                <div className="border border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon2} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    Isolated
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon3} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    Village
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon4} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    CountrySide
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon5} alt="" className="w-8 h-8" />
                  <h1 className="text-xs md:text-[8px] text-[#808080]">
                    Sea Facing
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon6} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    Urban Area
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon7} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    Metro City
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon8} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    Town
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon9} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    Island
                  </h1>
                </div>

                <div className="border  border-[#A1A1A1] rounded-[8px] p-2 flex flex-col items-center justify-center">
                  <img src={Icon10} alt="" className="w-6 h-6" />
                  <h1 className="text-xs md:text-[8px] mt-2 text-[#808080]">
                    Hill Station
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-2 w-full border-gray-500 bg-[#D9D9D9] mt-5 md:mt-0">
        <div className="absolute left-0 w-[50%] h-full bg-green-500"></div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 mt-3">
        <div className="text-sm font-semibold">Step 2/4</div>
        <div className="flex  justify-end">
          <div className="">
            <button className="text-[#09A350] border border-[#09A350] px-5 py-1 rounded-[4px]">
              Skip
            </button>
          </div>
          <div className="">
            <button
              className="text-white bg-[#09A350] px-5 py-1 rounded-[4px] ml-4"
              onClick={onNextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
