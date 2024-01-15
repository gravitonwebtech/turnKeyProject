import React, { useState } from "react";
import SearchIcon from "./Images/SearchIcon.svg";
import TwoIcon from "./Images/TwoIcon.png";
import Icon1 from "./Images/Icon1.png";
import Icon2 from "./Images/Icon3.png";
import Icon3 from "./Images/Icon4.png";
import Icon4 from "./Images/Icon5.png";
import Icon5 from "./Images/Icon6.png";
import Icon6 from "./Images/Icon7.png";
import Icon7 from "./Images/Icon8.png";
import Icon8 from "./Images/Icon2.png";
import VcIcon from "./Images/VcIcon.svg";
import PhoneIcon from "./Images/call icon.svg";
import MoreIcon from "./Images/more icon.svg";
import HeartIcon from "./Images/HeartIcon.svg";
import CheckIcon from "./Images/check Icon.svg";
import CheckIcon1 from "./Images/Check Icon1.svg";
import EmojiIcon from "./Images/EmojiIcon.svg";
import EnterIcon from "./Images/EnterIcon.svg";
import "./Whatsapp.css";

function Whatsapp() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    // Handle the click for each option
    console.log(`Clicked on ${option}`);
    // You can add logic here for different actions based on the option
  };

  const dropdownOptions = ["New group", "New community", "Starred messages", "Select chats", "Settings", "Log out"];

  return (
    <>
      <div className="border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 md:border-r md:border-gray-200">
            <div className="mx-5 my-2">
              <div
                className="w-full flex items-center bg-[#F5F5F5] rounded-[22px] px-5 py-2 
                 text-[#707991] text-sm font-regular"
              >
                <img src={SearchIcon} alt="" className="h-4 w-4 mr-3" />
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  id="search"
                  className="w-full bg-transparent focus:outline-none hover:border-transparent"
                  placeholder="Search"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
            </div>

            <div className="events">
              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon1} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Jessica Drew</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Ok, see you later
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">
                      18:30
                    </h1>
                  </div>
                  <div className="">
                    <img src={TwoIcon} alt="" className="" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 bg-[#F5F5F5] py-2 px-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon8} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>David Moore</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    You: i don't remember anything 😄
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">
                      18:16
                    </h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon2} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Greg James</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    I got a job at SpaceX 🎉 🚀
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">
                      18:02
                    </h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon3} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Emily Dorson</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Table for four, 5PM. Be there
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">
                      17:42
                    </h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon4} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Office Chat</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Lewis: All done mate 😆
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">
                      17:08
                    </h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon5} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Announcements</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Channel created
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">
                      16:15
                    </h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon6} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Little Sister</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Tell mom i will be home for tea 💜
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">Wed</h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon7} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Art Class</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Emily: Editorial
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">Tue</h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon7} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Art Class</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Emily: Editorial
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">Tue</h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon7} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Art Class</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Emily: Editorial
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">Tue</h1>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
                <div className="mt-3 sm:mt-0 col-span-2">
                  <img src={Icon7} alt="" />
                </div>

                <div className="mt-2 col-span-8">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>Art Class</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-sm "
                    style={{ fontFamily: "Poppins" }}
                  >
                    Emily: Editorial
                  </h1>
                </div>

                <div className="mt-2 col-span-2 flex flex-col items-end">
                  <div>
                    <h1 className="font-medium text-[#707991] text-sm">Tue</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 hidden md:block">
            <div className="grid grid-cols-12 gap-5 mx-5 my-2">
              <div className="col-span-10 flex">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>

                <div className="ml-3">
                  <h1
                    className="font-medium text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <b>David Moore</b>
                  </h1>
                  <h1
                    className="font-medium text-[#707991] text-xs"
                    style={{ fontFamily: "Poppins" }}
                  >
                    last seen 5 min ago
                  </h1>
                </div>
              </div>

              <div className="col-span-2 flex items-center justify-center space-x-3">
                <div className="">
                  <img src={VcIcon} alt="" className="w-5 h-5 cursor-pointer" />
                </div>
                <div className="">
                  <img
                    src={PhoneIcon}
                    alt=""
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>

                <div className="relative">
                  <img
                    src={MoreIcon}
                    alt=""
                    className="w-5 h-5 cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-[4px] shadow-lg">
                      <ul>
                        {dropdownOptions.map((option, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 cursor-pointer w-[200px]"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200"></div>

            <div className="bg-[#D8FFEA] px-28 pb-5">
              <div className="flex justify-center items-center pt-80">
                <h1 className="bg-[#3DB86E] text-white text-sm px-3 py-1 rounded-[4px]">
                  Today
                </h1>
              </div>

              <div className="mt-10 px-3 py-1 border border-[#CACACA] rounded-[8px] bg-white w-[205px]">
                <h1 className="text-[#011627] text-sm font-medium">
                  Lorem 😲 ipsum dolor emit
                </h1>
                <div className="flex justify-end">
                  <img src={HeartIcon} alt="" className="h-4 w-4" />
                  <span className="text-xs px-2">18:12</span>
                  <img src={CheckIcon} alt="" className="h-4 w-4" />
                </div>
              </div>

              <div className="flex justify-end mt-5">
                <div className="px-3 py-1 border border-[#CACACA] rounded-[8px] bg-[#09A350] text-white">
                  <div>
                    <h1 className="text-sm font-medium">No haha</h1>
                    <div className="flex justify-end">
                      <span className="text-xs px-2">18:16</span>
                      <img src={CheckIcon1} alt="" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-5">
                <div className="px-3 py-1 border border-[#CACACA] rounded-[8px] bg-[#09A350] text-white">
                  <div>
                    <h1 className="text-sm font-medium">
                      I don't remember anything 😄
                    </h1>
                    <div className="flex justify-end">
                      <span className="text-xs px-2">18:16</span>
                      <img src={CheckIcon1} alt="" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center bg-white rounded-[8px] px-5 py-3 text-[#707991] text-sm font-regular">
                <img src={EmojiIcon} alt="" className="h-4 w-4 mr-3" />
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="message"
                  className="w-full bg-transparent focus:outline-none hover:border-transparent"
                  placeholder="Message"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
                <div className="ml-3">
                  <img src={EnterIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatsapp;
