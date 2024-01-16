import React, { useState, useRef } from "react";
import PersonalInfo from "./PersonalInfo";
import ConfidentialInfo from "./ConfidentialInfo";
import SocialNetwork from "./SocialNetwork";
import Personal from "../Dashboard/images/Personal.svg";
import Confidential from "../Dashboard/images/Confidential.svg";
import Social from "../Dashboard/images/Network.svg";
import ContactImg from "../Dashboard/images/contactImg1.svg";
import Logout from "../Dashboard/images/logout.svg";

export default function UserDashboard() {
  const [image, setImage] = useState(null);
  const [toggle, setToggle] = useState(1);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    // Optionally, you can clear the file input as well
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleToggle = (value) => {
    setToggle(value);
  }; 

  return (
    <>
      <div className="bg-[#DCFFEC] p-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:mx-10">
          <div className="md:col-span-2 border-2 p-3 rounded-[14px] bg-white shadow">
            <div className="flex justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                ref={fileInputRef}
                id="imageUpload"
              />

              <label
                htmlFor="imageUpload"
                className="relative cursor-pointer transition-all duration-300 hover:opacity-75"
              >
                {image ? (
                  <div className="rounded-full overflow-hidden border-2 border-[#09A350]">
                    <img
                      src={image}
                      alt="Uploaded"
                      className="object-cover h-32 w-32"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                ) : (
                  <div className="bg-gray-200 h-32 w-32 flex items-center justify-center rounded-full overflow-hidden border-2 border-[#09A350]">
                    <p className="text-gray-500">No image </p>
                  </div>
                )}
              </label>
            </div>

            <h1 className="font-bold text-[#09A350] text-center text-lg mt-2">
              Hello Lucia
            </h1>

            <div className="mt-8 px-5">
              <h1 className="text-lg font-semibold text-gray-600">PROFILE</h1>

              <div
                className="flex mt-4"
                onClick={() => handleToggle(1)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <img src={Personal} alt="image" className="mt-1" />
                </div>

                <div className="pl-3 font-medium">
                  <h1>Personal Info</h1>
                </div>
              </div>

              <div
                className="flex mt-4"
                onClick={() => handleToggle(2)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <img src={Confidential} alt="image" className="mt-1" />
                </div>
                <div className="pl-3 font-medium ">
                  <h1>Confidential Info</h1>
                </div>
              </div>

              <div
                className="flex mt-4"
                onClick={() => handleToggle(3)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <img src={Social} alt="image" className="mt-1 text-black" />
                </div>
                <div className="pl-3 font-medium">
                  <h1>Social & Network</h1>
                </div>
              </div>
            </div>

            <div className="mt-10 px-5">
              <h1 className="text-lg font-semibold text-gray-600">
                RECENTLY LIKED PROFILES
              </h1>

              <div className="flex mt-4">
                <div>
                  <img src={ContactImg} alt="image" className="mt-1" />
                </div>
                <div className="pl-3 font-medium mt-2">
                  <h1>Locke</h1>
                </div>
              </div>

              <div className="flex mt-4">
                <div>
                  <img src={ContactImg} alt="image" className="mt-1" />
                </div>
                <div className="pl-3 font-medium mt-2">
                  <h1>Tracey</h1>
                </div>
              </div>

              <div className="flex mt-4">
                <div>
                  <img src={ContactImg} alt="image" className="mt-1" />
                </div>
                <div className="pl-3 font-medium mt-2">
                  <h1>Trevor Philips</h1>
                </div>
              </div>
            </div>

            <div className="flex mt-5 md:mt-[150px] ">
              <div>
                <img src={Logout} alt="image" className="mt-1" />
              </div>
              <div className="pl-3 font-medium text-[#F13E3E]">
                <h1>Logout</h1>
              </div>
            </div>
          </div>


          <div className="md:col-span-10">
            {toggle === 1 && <PersonalInfo />}
            {toggle === 2 && <ConfidentialInfo />}
            {toggle === 3 && <SocialNetwork />}
          </div>
        </div>
      </div>
    </>
  );
}
