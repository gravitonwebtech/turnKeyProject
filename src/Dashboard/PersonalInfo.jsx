import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faTrash,
  faPhone,
  faVideo,
  faFaceSmile,
  faPlus,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ContactImg from "../Dashboard/images/contactImg1.svg";
import Image1 from "../Dashboard/images/Image1.svg";
import { MdSend } from "react-icons/md";

export default function PersonalInfo() {
  const [percentage, setPercentage] = useState(0);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleUploadButtonClick = () => {
    // Trigger the file input click programmatically
    fileInputRef.current.click();
  };

  const countries = [
    "India",
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ">
        <div className="md:col-span-8 ">
          <div className="border-2 rounded-[14px] bg-white shadow-xl">
            <h1 className="text-[#09A350] px-5 md:px-8 py-2 font-medium text-base">
              {" "}
              Personal Information
            </h1>
            <div className="w-full border" />
            <h1 className="text-black px-5 md:px-8 font-medium text-lg mt-2">
              {" "}
              Profile Picture
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  ref={fileInputRef}
                />
                <div className="relative">
                  {image ? (
                    <div
                      className=" rounded-full overflow-hidden"
                      style={{ position: "relative" }}
                    >
                      <img
                        src={image}
                        alt="Uploaded"
                        className="object-cover  h-32 w-32"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-200  h-32  w-32 flex items-center justify-center rounded-full overflow-hidden">
                      <p className="text-gray-500">No image </p>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={handleUploadButtonClick}
                    className="text-slate-400 text-sm w-36 h-10 rounded-lg border-2 relative"
                  >
                    <FontAwesomeIcon
                      icon={faUpload}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    />
                    Edit or Upload
                  </button>

                  <button
                    onClick={handleRemoveImage}
                    className={`${
                      image ? "border-2" : "border-2"
                    } text-slate-400 text-sm w-36 h-10 rounded-lg relative mt-3`}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    {image ? "Remove " : "Remove "}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-base font-medium">First Name</label>
                <p>
                  <input
                    type="text"
                    name="first"
                    placeholder="First Name"
                    className="border border-gray-300 mt-2 mb-2 px-2 py-1 rounded w-full md:w-3/5"
                  />
                </p>

                <label className="text-base font-medium"> Last Name</label>
                <p>
                  <input
                    type="text"
                    name="last"
                    placeholder="Last Name"
                    className="border border-gray-300 mt-2 px-2 py-1 rounded w-full md:w-3/5"
                  />
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-8 mt-2">
              <div>
                <label className="text-base font-medium">
                  Languages I speak
                </label>
                <p>
                  <input
                    type="text"
                    name="languages"
                    placeholder="Languages"
                    className="border border-gray-200 mt-2 px-2 py-1 rounded w-full md:w-3/5"
                  />
                </p>
              </div>

              <div>
                <label htmlFor="country" className="text-base font-medium">
                  Country
                </label>
                <p>
                  {" "}
                  <select
                    id="country"
                    name="country"
                    className="border border-gray-300 mt-2 px-2 py-1 rounded w-full md:w-3/5"
                  >
                    <option value="  Select your country" disabled>
                      Select your country
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
            </div>

            <div className="px-5 md:px-8 mt-2 mb-2">
              <label className="text-base font-medium">About me</label>
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

        <div className="md:col-span-4">
          <div className="border-2 rounded-[14px] flex justify-center items-center h-full bg-white shadow-xl p-5 md:p-0">
            <div className="app">
              <h1 className="text-lg font-semibold">Complete profile in:</h1>
              <div className="mt-6 relative">
                <CircularProgressbar
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "round",
                    pathColor: "#09A350",
                    trailColor: "#F2F2F2",
                  })}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="text-xl md:text-4xl font-semibold text-[#09A350]">
                    {percentage}%
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No. of visitors (This week): 850
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-3">
        <div className="md:col-span-5">
          <div className="border-2 rounded-[14px] bg-white shadow-xl">
            <h1 className="text-[#09A350] px-5 md:px-8 py-2 font-medium text-base">
              {" "}
              Recent Listing
            </h1>
            <div className="w-full border mb-3" />

            <div className="border rounded p-3 mx-5 md:mx-8 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-4">
                  <img src={Image1}></img>
                </div>
                <div className="md:col-span-8">
                  <h1 className="text-base font-semibold">
                    Single Floor Farm House
                  </h1>
                  <p className="text-sm text-[#858585]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, cum?
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded p-3 mx-5 md:mx-8 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-4">
                  <img src={Image1}></img>
                </div>
                <div className="md:col-span-8">
                  <h1 className="text-base font-semibold">
                    Single Floor Farm House
                  </h1>
                  <p className="text-sm text-[#858585]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, cum?
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-2">
              <h1 className="text-[#09A350] text-center text-base font-semibold">
                View More
              </h1>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="border-2 rounded-[14px] bg-white shadow-xl h-full">
            <h1 className="text-[#09A350] px-5 md:px-8 py-2 font-medium text-base">
              My Contacts
            </h1>
            <div className="w-full border"></div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 border-r border-gray-400">
                <div className="flex bg-[#C1FFDE] px-5 py-2 font-semibold">
                  <div>
                    <img src={ContactImg} alt="image" />
                  </div>
                  <div className="pl-3 ">
                    <h1>Morang Helsinki</h1>
                  </div>
                </div>
                <div className="flex px-5 py-2 font-semibold ">
                  <div>
                    <img src={ContactImg} alt="image" />{" "}
                  </div>
                  <div className="pl-3 ">
                    <h1>Mohjang</h1>
                  </div>
                </div>
                <div className="flex px-5 py-2 font-semibold ">
                  <div>
                    <img src={ContactImg} alt="image" />
                  </div>
                  <div className="pl-3 ">
                    <h1>Jason</h1>
                  </div>
                </div>
                <div className="flex px-5 py-2 font-semibold ">
                  <div>
                    <img src={ContactImg} alt="image" />
                  </div>
                  <div className="pl-3 ">
                    <h1>Lucia</h1>
                  </div>
                </div>
                <div className="flex px-5 py-2 font-semibold ">
                  <div>
                    <img src={ContactImg} alt="image" />
                  </div>
                  <div className="pl-3 ">
                    <h1>Morang Helsinki</h1>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="bg-[#DCDCDC] px-5 py-2">
                  <div className="grid grid-cols-2 md:grid-cols-12 gap-5">
                    <div className="md:col-span-8">
                      <div className="flex font-semibold ">
                        <div>
                          <img src={ContactImg} alt="image" />
                        </div>
                        <div className="pl-3 ">
                          <h1>Morang Helsinki</h1>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-4 mt-2">
                      <div className="flex justify-center">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-[#09A350]"
                        />
                        <FontAwesomeIcon
                          icon={faVideo}
                          className="ml-3 text-[#09A350]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-base font-semibold bg-[#F2F4F7] rounded-[32px] px-3 py-1">
                    Today
                  </h1>
                </div>
                <div className="mt-4 min-h-[200px]">
                  <p className="bg-[#09A350] text-white text-sm md:w-3/4 p-2 mx-5 mt-5 rounded-tr rounded-br rounded-bl">
                    Hi, welcome
                  </p>
                  <p className="bg-[#036825] text-white text-sm md:w-3/4 ml-20 mr-2 p-2 mt-4 rounded-tl rounded-br rounded-bl">
                    Hello
                  </p>
                </div>

                <div className="bg-[#DCDCDC] px-3 py-2 rounded-br-[14px] flex items-center">
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    className="text-[#09A350]"
                  />
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-[#09A350] pl-5"
                  />
                  <input
                    type="text"
                    placeholder="Type your message here"
                    className="border border-gray-500 rounded-lg w-full px-3 mx-3"
                  />

                  <MdSend className="bg-[#09A350] p-1 rounded-lg text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}