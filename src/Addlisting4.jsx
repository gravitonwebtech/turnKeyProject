import React from "react";
import { FaPlus } from "react-icons/fa6";
import image1 from "./addlistingimages4/image1.png";
import image2 from "./addlistingimages4/image2.png";
const Addlisting4 = () => {
  return (
    <>
      <div></div>
      <h1 className="text-xl sm:text-sm md:text-md lg:text-4xl  text-center font-semibold">
        {" "}
        What does your home look like?
      </h1>
      <p className="mt-5 text-center text-[10px] sm:text-[10px] lg:text-xl text-[#EAEAEA] font-semibold">
        Enhance your likelihood of completing a swap by including <br />
        pictures of your residence.
      </p>

      <div className=" mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 mx-10 md:mx-20 lg:mx-28  gap-5">
        <div>
          <h2 className=" font-bold mb-2 text-[#C1C1C1] text-left ">
            Exterior
          </h2>

          <div className="rounded-md border border-dashed border-2 border-black-500 bg-gray-50 p-4 w-36">
            <label
              htmlFor="upload"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <FaPlus className="w-10 h-10 text-[#C1C1C1]" />

              <span className="text-[#C1C1C1] font-medium">Add Photos</span>
            </label>
            <input id="upload" type="file" className="hidden" />
          </div>
        </div>
        <div>
          <h2 className=" font-bold mb-2 text-[#C1C1C1] text-left ">Bedroom</h2>
          <div class="rounded-md border border-dashed border-2 border-black-500 bg-gray-50 p-4 w-36">
            <label
              for="upload"
              class="flex flex-col items-center gap-2 cursor-pointer"
            >
              <FaPlus className="w-10 h-10 text-[#C1C1C1] " />

              <span class="text-[#C1C1C1] font-medium">Add Photos</span>
            </label>
            <input id="upload" type="file" class="hidden" />
          </div>
        </div>
        <div>
          <h2 className=" font-bold mb-2 text-[#C1C1C1] text-left ">
            Bathroom
          </h2>
          <div class="rounded-md border border-dashed border-2 border-black-500 bg-gray-50 p-4 w-36">
            <label
              for="upload"
              class="flex flex-col items-center gap-2 cursor-pointer"
            >
              <FaPlus className="w-10 h-10 text-[#C1C1C1] " />

              <span class="text-[#C1C1C1] font-medium">Add Photos</span>
            </label>
            <input id="upload" type="file" class="hidden" />
          </div>
        </div>
        <div>
          <h2 className=" font-bold mb-2 text-[#C1C1C1] text-left ">Kitchen</h2>
          <div class="rounded-md border border-dashed border-2 border-black-500 bg-gray-50 p-4 w-36">
            <label
              for="upload"
              class="flex flex-col items-center gap-2 cursor-pointer"
            >
              <FaPlus className="w-10 h-10 text-[#C1C1C1] " />

              <span class="text-[#C1C1C1] font-medium">Add Photos</span>
            </label>
            <input id="upload" type="file" class="hidden" />
          </div>
        </div>
        <div>
          <h2 className=" font-bold mb-2 text-[#C1C1C1] text-left ">Hall</h2>
          <div class="rounded-md border border-dashed border-2 border-black-500 bg-gray-50 p-4 w-36">
            <label
              for="upload"
              class="flex flex-col items-center gap-2 cursor-pointer"
            >
              <FaPlus className="w-10 h-10 text-[#C1C1C1] " />

              <span class="text-[#C1C1C1] font-medium">Add Photos</span>
            </label>
            <input id="upload" type="file" class="hidden" />
          </div>
        </div>
        <div>
          <h2 className="text-[11px] sm:text-[11px] mt-2 font-bold mb-2 text-[#C1C1C1] text-left ">
            Other(Mention please)
          </h2>
          <div class="rounded-md border border-dashed border-2 border-black-500 bg-gray-50 p-4 w-36">
            <label
              for="upload"
              class="flex flex-col items-center gap-2 cursor-pointer"
            >
              <FaPlus className="w-10 h-10 text-[#C1C1C1] " />

              <span class="text-[#C1C1C1] font-medium">Add Photos</span>
            </label>
            <input id="upload" type="file" class="hidden" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-5 md:mx-10 lg:mx-20 gap-20">
        <div className="mt-10">
          <h1>Can you provide a description of your home?</h1>

          {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
          <textarea
            id="message"
            rows="4"
            className=" mt-3 block w-[100%] sm:w-[100%] md:w-[100%]  lg:h-[86%] lg:w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          ></textarea>
        </div>
        <div className="max-w-screen-md mx-auto">
          <h1 className="mt-10 font-bold text-center">
            At what date is your home accessible?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div className="">
              <img src={image1} alt="image" className="w-full" />
            </div>
            <div>
              <img src={image2} alt="image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 sm:mx-5 md:mx-10 lg:mx-15 mt-10">
        <div className="rounded-lg border-t-2 border-black-500 relative hidden md:block">
          <div className="absolute top-0 left-0 h-[5px] w-full bg-green-500 md:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mb-5 mt-5">
            <div className="mt-5">Step 4/4</div>
            <div className="space-x-4  ">
              <button className="bg-[#09A350] hover:bg-[#09A350] text-white font-bold py-2 px-5 mt-2 rounded">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addlisting4;
