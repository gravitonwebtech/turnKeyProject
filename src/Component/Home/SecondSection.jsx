import React from "react";
import "./Home.css";
import SecondImg from "../HomeImgs/test.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SecondSection() {
  return (
    <div className="mt-5 md:mt-10 mx-0 md:mx-10 home-second-section">
      <div className="grid grid-cols-1 md:grid-cols-12 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-28">
        <div className="md:col-span-5">
          <img src={SecondImg} alt="" className="" />
        </div>

        <div className="md:col-span-6 pt-5 pb-10 md:pb-0 md:pt-20 xl:pt-36">
          <h1
            className="text-[#FFFFFF] text-sm px-10"
            style={{ fontFamily: "Poppins" }}
          >
            The smart way to Exchange Houses
          </h1>

          <h1
            className="text-[#FFFFFF] text-xl md:text-2xl lg:text-4xl xl:text-6xl mt-5"
            style={{ fontFamily: "Poppins" }}
          >
            Ready to Swap Homes and Create Memories?
          </h1>

          <p className="text-[#7B7B7B] mt-5" style={{ fontFamily: "Poppins" }}>
            Become part of a community that values trust, diversity, and
            unforgettable experiences. Find your perfect match with detailed
            profiles and customizable search filters.
          </p>

          <div className="mt-5" style={{ fontFamily: "Poppins" }}>
            <button className="bg-[#09A350] text-sm text-white py-3 px-4 rounded">
              I want to Exchange My Home
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white pl-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
