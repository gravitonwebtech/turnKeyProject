import React, { useState } from "react";
import Image1 from "./RegisterImgs/RegisterImg1.png";
import LogoImg from "./RegisterImgs/RegisterIcon.svg";
import LocationIcon from "./RegisterImgs/LocationIcon.svg";
import NotFound from "./RegisterImgs/Notfound.svg";

export default function CreatAccount(props) {
    const [formData, setFormData] = useState({
        location1: "",
        location2: "",
      });
    
      const handleChange = (locationField, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [locationField]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Log the entire form data object to the console
        console.log("Form Data:", formData);
    
        // Assuming registration is successful, call the onWelcomeSuccess callback
        props.onWelcomeSuccess();
    
        setFormData({
          location1: "",
          location2: "",
        });
      };
    

  return (
    <>
      <div className="register-background md:flex md:items-center md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 px-5 md:px-5 lg:px-16 xl:px-56 py-16 md:py-0">
          <div className="md:col-span-7 hidden md:block relative">
            <div className="relative h-full">
              <img src={Image1} alt="" className="h-full object-cover" />

              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div>
                  <img src={LogoImg} alt="" className="w-3/4 h-auto" />
                </div>
                <h1 className="text-center text-[#57FFA5] mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                  Your Journey Starts<br></br> Here
                </h1>
                <p className="text-white text-sm text-center mt-4 px-10 xl:px-28">
                  Create your Turn Keys account with basic details. It only
                  takes a few minutes to get started.
                </p>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-5 flex flex-col bg-white px-5 md:px-10"
            style={{ fontFamily: "Poppins" }}
          >
            <div className="flex flex-col h-full">
              <h1 className="mt-5 md:mt-8 text-xl lg:text-2xl font-medium text-center hidden lg:block">
                Let’s get to know each <br></br> other!
              </h1>

              <h1 className="mt-5 md:mt-8 text-xl font-medium text-center block lg:hidden">
                Let’s get to know each other!
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <h1 className="text-sm font-semibold">Where are you from?</h1>
                  <p className="text-[#585858] text-xs mt-3">
                    So we can share profiles of members who are interested in
                    visiting your areas
                  </p>
                  <p className="mt-4 relative">
                    <img
                      src={LocationIcon}
                      alt=""
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                      type="text"
                      placeholder="City, Country"
                      value={formData.location1}
                      required
                      onChange={(e) =>
                        handleChange("location1", e.target.value)
                      }
                      className="pl-10 border border-[#A1A1A1] w-full focus:outline-none text-[#9C9C9C] rounded-[4px] px-3 py-2"
                    />
                  </p>
                  <p className="mt-3 text-[#8D8D8D] text-xs flex items-center">
                    <img src={NotFound} alt="" className="w-4 h-4 mr-2" />
                    Please enter your city or a country, but not your exact
                    address.
                  </p>
                </div>

                <div className="mt-5">
                  <h1 className="text-sm font-semibold">
                    Where would you like to go?
                  </h1>
                  <p className="text-[#585858] text-xs mt-3">
                    So we can share profiles of members who are interested in
                    visiting your areas
                  </p>
                  <p className="mt-4 relative">
                    <img
                      src={LocationIcon}
                      alt=""
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                      type="text"
                      placeholder="City, Country"
                      value={formData.location2}
                      required
                      onChange={(e) =>
                        handleChange("location2", e.target.value)
                      }
                      className="pl-10 border border-[#A1A1A1] w-full focus:outline-none text-[#9C9C9C] rounded-[4px] px-3 py-2"
                    />
                  </p>
                  <p className="mt-3 text-[#8D8D8D] text-xs flex items-center">
                    <img src={NotFound} alt="" className="w-4 h-4 mr-2" />
                    Select "Anywhere in the world" if you are not sure about
                    your preferred destination.
                  </p>
                </div>

                <div className="mt-5 mb-10 md:mt-8 md:mb-5 xl:mb-0">
                  <button
                    type="submit"
                    className="bg-[#09A350] w-full py-3 text-center text-white text-sm rounded-[8px]"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
