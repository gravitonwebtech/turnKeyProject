import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Model.css";

export default function Model({ onClose }) {
  const modalRef = useRef();

  const handleClose = () => {
    onClose();
    console.log("MOdel closed");
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClose]);

  // checkbox

  const checkboxes = [
    { label: "Fully furnished" },
    { label: "Fire/Smoke alarm" },
    { label: "Swimming pool" },
    { label: "Air Conditionar" },
    { label: "Wi-fi" },
    { label: "Parking Area" },
    { label: "Refrigerator" },
    { label: "Gym" },
    { label: "Washing Machine" },
    { label: "Garden" },
    { label: "Kitchen" },
    { label: "Waterfall" },
    { label: "Gas Supply" },
    { label: "Kids Play" },
    { label: "Heater" },
    { label: "Pet accepted" },
    { label: "BBQ grill" },
    { label: "Disabled people suitability" },
    { label: "Public Transportation" },
    { label: "Cable Connections" },
  ];

  // Language

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("English - US");

  const options = [
    "English - US",
    "Spanish - Spain",
    "French - France",
    "German - Germany",
    "Italian - Italy",
    "Hindi - India",
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // ownership
  const checkboxes1 = [
    { label: "Owned" },
    { label: "Rented" },
    { label: "Leased" },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
        <div
          ref={modalRef}
          className="bg-white shadow-lg border-2 border-gray-200 rounded-[14px] w-[400px] md:w-[600px] mx-5 md:mx-0 py-3"
        >
          <div className="flex px-5">
            <div className="">
              <button
                type="button"
                onClick={handleClose}
                className="text-black cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="ml-28 md:ml-64 text-lg font-semibold">
              <h1>Filter</h1>
            </div>
          </div>

          <div className="border-b border-black my-4"></div>

          <div className="events">
            <div className="px-5">
              <h1 className="font-semibold">Type of Place</h1>
              <p className="mt-2 text-sm text-[#A0A0A0] font-regular">
                Search rooms, entire room or any type of place.
              </p>
              <div className="border border-gray-300 rounded-[8px] mt-5 md:mt-8 mx-0 md:mx-14 flex">
                <div className="px-2 py-2 md:px-10 md:py-3 cursor-pointer border-r border-gray-300 font-medium text-sm text-white rounded-tl-[8px] rounded-bl-[8px] bg-[#09A350]">
                  Any Type
                </div>
                <div className="px-1 py-2 md:px-6 md:py-3 cursor-pointer border-r border-gray-300 font-semibold text-sm">
                  Studios/Rooms
                </div>
                <div className="px-1 py-2 md:px-6 md:py-3 cursor-pointer font-semibold text-sm">
                  Entire Room
                </div>
              </div>
            </div>

            <div className="border-b border-gray-300 mt-10 mb-5"></div>

            <div className="px-5">
              <h1 className="text-sm text-[#A0A0A0] font-regular">
                No. of family members
              </h1>
              <div className="grid grid-cols-5 md:grid-cols-9 lg:grid-cols-12 gap-3 mt-5">
                <div className="bg-[#09A350] rounded-[20px] py-2  lg:col-span-2">
                  <h1 className="text-white text-xs text-center">Any</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-xs text-center text-[#09A350]">1</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-[#09A350] text-xs text-center">2</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-[#09A350]  text-xs text-center">3</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-[#09A350]  text-xs text-center">4</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-[#09A350]  text-xs text-center">5</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-[#09A350]  text-xs text-center">6</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-[#09A350]  text-xs text-center">7</h1>
                </div>

                <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                  <h1 className="text-[#09A350]  text-xs text-center">8+</h1>
                </div>
              </div>

              <div className="mt-5">
                <h1 className="font-semibold">Rooms and beds</h1>

                <p className="mt-4 text-sm text-[#A0A0A0] font-regular">
                  Bedrooms
                </p>

                <div className="grid grid-cols-5 md:grid-cols-9 lg:grid-cols-12 gap-3 mt-5">
                  <div className="bg-[#09A350] rounded-[20px] py-2  lg:col-span-2">
                    <h1 className="text-white text-xs text-center">Any</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-xs text-center text-[#09A350]">1</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350] text-xs text-center">2</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">3</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">4</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">5</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">6</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">7</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">8+</h1>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#A0A0A0] font-regular">
                  Bathrooms
                </p>
                <div className="grid grid-cols-5 md:grid-cols-9 lg:grid-cols-12 gap-3 mt-5">
                  <div className="bg-[#09A350] rounded-[20px] py-2  lg:col-span-2">
                    <h1 className="text-white text-xs text-center">Any</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-xs text-center text-[#09A350]">1</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350] text-xs text-center">2</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">3</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">4</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">5</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">6</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">7</h1>
                  </div>

                  <div className="border border-[#09A350] rounded-[12px] py-2 lg:col-span-1">
                    <h1 className="text-[#09A350]  text-xs text-center">8+</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-300 my-5"></div>

            <div className="px-5">
              <h1 className="font-semibold">Amenities</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                {checkboxes.map((checkbox) => (
                  <div key={checkbox.label} className="mb-4 flex items-center">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className={`w-5 h-5 border border-gray-300 rounded-md checkbox-input`}
                      />
                      <span className="ml-2 text-sm font-medium">{checkbox.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b border-gray-300 my-5"></div>

            <div className="px-5">
              <h1 className="font-semibold">Host Language</h1>

              <div className="relative">
                <div
                  className="cursor-pointer w-[300px] border border-gray-300 flex justify-between items-center mt-5 text-sm text-black font-medium rounded-[4px] py-2 px-2"
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
                  <div className="p-3 absolute mt-2 w-[300px] bg-[#5B8C6C] bg-opacity-80 text-white rounded">
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

            <div className="border-b border-gray-300 my-5"></div>


            <div className="px-5">
              <h1 className="font-semibold">Ambience</h1>

               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-5">
                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Restaurant</h1>
                 </div>

                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Library</h1>
                 </div>

                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Meeting area</h1>
                 </div>

                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Theatre</h1>
                 </div>

                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Club House</h1>
                 </div>

                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Terrace</h1>
                 </div>

                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Arcade area</h1>
                 </div>

                 <div className="border border-gray-300 rounded px-3 py-2 text-[#A0A0A0] cursor-pointer hover:border-black hover:text-black hover:font-semibold">
                  <h1 className=" text-sm">Cafeteria</h1>
                 </div>

               </div>
            </div>

            <div className="border-b border-gray-300 my-5"></div>

            <div className="px-5">
              <h1 className="font-semibold">Ownership</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-10 lg:gap-20 mt-5">
                {checkboxes1.map((checkbox1) => (
                  <div key={checkbox1.label} className="mb-4 flex items-center">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className={`w-5 h-5 border border-gray-300 rounded-md checkbox-input`}
                      />
                      <span className="ml-3 text-sm font-medium">{checkbox1.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-5 mt-5 sticky bottom-0 w-full bg-white shadow-xl">
             <div className="grid grid-cols-2">
              <div className="flex items-center">
              <h1 className="text-[#09A350] text-sm font-semibold">Clear all</h1>
              </div>

              <div className="flex justify-end">
              <button className="bg-[#09A350] text-white text-sm  px-2 md:px-5 py-2 rounded-bl-[8px] rounded-br-[8px]">Show 340 places</button>
              </div>
             </div>
            </div>

             
          </div>
        </div>
      </div>
    </>
  );
}
