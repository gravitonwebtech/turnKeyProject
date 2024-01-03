import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import personal from "../personalimage/personal.svg";
import iconsimages from "../personalimage/iconsimages.png";
import { FaPhoneAlt } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { LuSmilePlus } from "react-icons/lu";
import { MdSend } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImBin } from "react-icons/im";
const PersonalInfo = () => {
  const [percentage, setPercentage] = useState(0);
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    // Add more countries as needed
  ];

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 75) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setImage(null);
  };
  // country
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mx-5 md:mx-10">
 
  <div className="md:col-span-8">
    <div className="border rounded p-5 md:p-8">
      <h1 className="text-[#09A350] font-medium font-inter ">
        Personal Information
      </h1>
      <div className="border-b py-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
        <div className="flex items-center mb-4">
          {image ? (
            <div className="mr-4">
              <img
                src={image}
                alt="Profile"
                className="object-cover w-28 h-28 rounded-full"
              />
            </div>
          ) : (
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
          )}
          <div className="flex flex-col ml-5 space-y-2">
            <label
              htmlFor="upload"
              className="px-4 bg-white text-gray-500 border border-t border-gray-500 rounded-lg mb-2 cursor-pointer"
            >
              <IoCloudUploadOutline /> Upload
            </label>
            <input
              type="file"
              id="upload"
              className="hidden"
              accept="image/*"
              onChange={handleUpload}
            />

            <button
              className="p-1 bg-white text-gray-500 border border-t border-gray-500 rounded-lg cursor-pointer"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
        <div>
          <label>First Name</label>
          <p>
            <input
              type="text"
              name="first"
              placeholder="First Name"
              className="border border-gray-300 mt-2 mb-3 px-3 py-2 rounded"
            />
          </p>

          <label className=""> Last Name</label>
          <p>
            <input
              type="text"
              name="last"
              placeholder="Last Name"
              className="border border-gray-300 mt-2 px-3 py-2 rounded"
            />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div>
          <label>Languages I speak</label>
          <p>
            <input
              type="text"
              name="languages"
              placeholder="Languages"
              className="border border-gray-300 mt-2 mb-3 px-3 py-2 rounded"
            />
          </p>
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="mt-1 p-3 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label>About me</label>
        <p>
          <textarea
            rows={3}
            placeholder="Description about yourself"
            className="border border-gray-300 mt-2 px-3 py-2 rounded w-full"
          ></textarea>
        </p>
      </div>
    </div>
  </div>

  {/* Column 2 */}
  <div className="md:col-span-4">
    <div className="shadow flex justify-center py-10 rounded-lg">
      <div className="app">
        <h1 className="text-md ">Complete profile in:</h1>
        <div style={{ width: 150, height: 150 }} className="mt-6">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          No. of visitors (This week): 850{" "}
        </p>
      </div>
    </div>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-10 mt-10">
        <div className=" border rounded p-5 md:p-8">
          <h1 className="text-[#09A350] font-medium font-inter ">
            Recent Listings
          </h1>
          <div className="border-b py-2"></div>
          <div className="border rounded p-3 ">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-4">
                <img src={personal} alt="image" />
              </div>
              <div className="md:col-span-8 ">
                <h1 className="font-semibold">Single Floor Farm House </h1>
                <p className="text-justify ">
                  Lorem ipsum dolor sit amet consectetur. Nibh bibendum at netus
                  turpis lorem nulla tellus. Libero mauris eu mattis ac.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border rounded p-3 mt-3 ">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-4">
                <img src={personal} alt="image" />
              </div>
              <div className="md:col-span-8 ">
                <h1 className="font-semibold">Single Floor Farm House </h1>
                <p className="text-justify ">
                  Lorem ipsum dolor sit amet consectetur. Nibh bibendum at netus
                  turpis lorem nulla tellus. Libero mauris eu mattis ac.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" border rounded ">
          <h1 className="text-[#09A350] font-medium font-inter p-5">
            My Contacts
          </h1>
          <div className="border-b py-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-12  ">
            <div className="md:col-span-5 border-r border-gray-400">
              <div className="flex bg-[#C1FFDE] p-5 font-semibold ">
                <div>
                  <img src={iconsimages} alt="image" />
                </div>
                <div className="pl-3 ">
                  <h1>Morang Helsinki</h1>
                </div>
              </div>
              <div className="flex  p-3 font-semibold ">
                <div>
                  <img src={iconsimages} alt="image" />
                </div>
                <div className="pl-3 ">
                  <h1>Mohjang</h1>
                </div>
              </div>
              <div className="flex p-3 font-semibold ">
                <div>
                  <img src={iconsimages} alt="image" />
                </div>
                <div className="pl-3 ">
                  <h1>Jason</h1>
                </div>
              </div>
              <div className="flex p-3 font-semibold ">
                <div>
                  <img src={iconsimages} alt="image" />
                </div>
                <div className="pl-3 ">
                  <h1>Lucia</h1>
                </div>
              </div>
              <div className="flex  p-3 font-semibold ">
                <div>
                  <img src={iconsimages} alt="image" />
                </div>
                <div className="pl-3 ">
                  <h1>Morang Helsinki</h1>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 ">
              <div className="bg-[#DCDCDC] p-2">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="md:col-span-8">
                    <div className="flex  p-3 font-semibold ">
                      <div>
                        <img src={iconsimages} alt="image" />
                      </div>
                      <div className="pl-3 ">
                        <h1>Morang Helsinki</h1>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 flex items-center justify-center">
                    <FaPhoneAlt className="mr-2 text-md text-[#09A350]" />
                    <CiVideoOn className="text-lg  text-[#09A350]" />
                  </div>
                </div>
              </div>
              <div className="mt-5 ">
                <h1 className="text-center">Today</h1>
                <p className="bg-[#09A350] text-white  p-2 mx-4 mt-5 rounded-tr rounded-br rounded-bl">
                 Hi, welcome
                </p>
                <p className="bg-[#09A350] text-white ml-5 mr-2 p-2 mt-4 rounded-tr rounded-br rounded-bl">
                  Hello
                </p>
              </div>
              <div className="bg-[#DCDCDC] p-2 mt-5  flex item-center gap-3">
              <LuSmilePlus className="text-2xl"/>
              
              <input type="text" placeholder="Type of message here" className="border border-gray-500 rounded-lg w-full px-3 " />
              <MdSend  className="mt-1 bg-[#09A350] p-1 rounded-lg text-white text-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
