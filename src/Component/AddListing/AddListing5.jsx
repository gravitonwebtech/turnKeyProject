import React from "react";
import Image from "./AddListingImg/AddListing5.png";

export default function AddListing5() {
  return (
    <>
      <div
        className="mt-5 md:mt-14 text-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-xl md:text-2xl font-semibold">
          Hurray! You done created your Listing!
        </h1>
        <p className="text-[#818181] text-sm mt-3 mx-5 md:mx-0">
          Enhance your likelihood of completing a swap by including <br></br>
          pictures of your residence.
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <img src={Image} alt="" className="md:w-[30%]" />
      </div>

      <div className="flex justify-center">
        <div className="">
          <button className="text-white bg-[#09A350] px-5 py-1 rounded-[4px]">
            Finish
          </button>
        </div>
      </div>
    </>
  );
}
