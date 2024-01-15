import React, { useState } from "react";
import Banner from "./SwappingImgs/SwappingBanner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ModelImg from "./SwappingImgs/ModelImg.svg";
import "./SwappingPlace.css";
import Model from "./Model";

export default function SwappingPlace() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Eg: 2 BHK House");
  const [gettingIn, setGettingIn] = useState("");
  const [gettingOut, setGettingOut] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false); // New state for the model

  const options = [
    "Villa with",
    "3 BHK House",
    "4 BHK House",
    "Sea facing House",
    "Villa",
    "Bungalow",
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted with data:", {
      selectedOption,
      gettingIn,
      gettingOut,
    });

    setSelectedOption("Eg: 2 BHK House");
    setGettingIn("");
    setGettingOut("");
    setIsOpen(false);
  };

  const handleModelToggle = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <div className="relative mt-14 bg-[#CFF3D9] py-10 md:py-16 px-5 sm:px-10 md:px-20 lg:px-28">
      <div className="relative swapping-banner-section">
        <img
          src={Banner}
          alt=""
          className="w-full md:h-[550px] lg:h-[450px] xl:h-full rounded-[40px]"
        />

        <div
          className="absolute left-0 top-0 py-20"
          style={{ fontFamily: "Poppins" }}
        >
          <h1 className="w-full text-center font-semibold text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-[#92E3A9]">
            DISCOVER YOUR DESIRED HOUSE
          </h1>

          <p className="text-center text-sm text-[#E9E9E9] font-regular mt-8 px-5 sm:px-10 md:px-20 lg:px-28 xl:px-48">
            Welcome to Swapping Place, where finding your dream home is as easy
            as a swipe! Discover a world of possibilities as you browse through
            our diverse range of properties. Swipe right for the homes you love
            and let the adventure begin.
          </p>

          <div className="bg-[#92E3A9] bg-opacity-50 rounded-[8px] pt-4 pb-8 px-5 mt-10 mx-5 sm:mx-10 xl:mx-44">
            <h1 className="text-[#57FFA5] text-sm font-semibold">
              Destinations
            </h1>
            <div className="border-b-2 border-[#DADADA] py-1"></div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 mt-4">
                <div className="lg:col-span-3">
                  <h1 className="text-xs text-[#FFFFFF] font-semibold">
                    SELECT YOUR LOCATION
                  </h1>
                  <div className="relative">
                    <div
                      className="cursor-pointer flex justify-between items-center w-full mt-3 bg-[#969696] text-xs text-white font-medium rounded-[4px] py-2 px-2"
                      onClick={handleToggle}
                    >
                      <span>{selectedOption}</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`ml-2 transition-transform transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="p-3 absolute mt-2 w-full bg-[#5B8C6C] bg-opacity-80 text-white rounded">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className="cursor-pointer border-b border-white py-2 font-medium"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <h1 className="text-xs text-[#FFFFFF] font-semibold ">
                    GETTING IN
                  </h1>
                  <input
                    type="date"
                    id="calendarIn"
                    name="calendarIn"
                    value={gettingIn}
                    onChange={(e) => setGettingIn(e.target.value)}
                    placeholder="DD/MM/YYYY"
                    className="w-full mt-3 bg-[#969696] text-xs text-white font-medium rounded-[4px] py-2 px-2 focus:outline-none hover:border-transparent"
                  />
                </div>

                <div className="lg:col-span-3">
                  <h1 className="text-xs text-[#FFFFFF] font-semibold ">
                    GETTING OUT
                  </h1>

                  <input
                    type="date"
                    id="calendarOut"
                    name="calendarOut"
                    value={gettingOut}
                    onChange={(e) => setGettingOut(e.target.value)}
                    placeholder="DD/MM/YYYY"
                    className="w-full mt-3 bg-[#969696] text-xs text-white font-medium rounded-[4px] py-2 px-2 focus:outline-none hover:border-transparent"
                  />
                </div>

                <div className="hidden md:block lg:col-span-1 flex items-center justify-center mt-3 md:mt-6 lg:mt-7">
                  <div
                    className="border-2 border-[#969696] rounded cursor-pointer flex items-center justify-center"
                    onClick={handleModelToggle}
                  >
                    <img src={ModelImg} alt="" />
                  </div>
                </div>

                <div className="hidden md:block lg:col-span-2 flex items-center justify-center mt-3 md:mt-7 lg:mt-7">
                  <button
                    className="w-full bg-[#92E3A9] text-black font-semibold rounded text-sm py-3 lg:py-2 px-6 xl:px-10"
                    type="submit"
                  >
                    SEARCH
                  </button>
                </div>

                <div className="block md:hidden mt-3 md:mt-6">
                  <div
                    className="border-2 border-[#969696] rounded py-1 cursor-pointer flex items-center justify-center "
                    onClick={handleModelToggle}
                  >
                    <img src={ModelImg} alt="" />
                  </div>
                </div>

                <div className="block md:hidden mt-3 md:mt-6">
                  <button
                    className="w-full bg-[#92E3A9] text-black font-semibold rounded text-sm py-2 xl:px-10"
                    type="submit"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Your model */}
          {isModelOpen && <Model onClose={handleModelToggle} />}
        </div>
      </div>
    </div>
  );
}
