import React from "react";
import Line from "./HowItWokImgs/Line1.svg";
import Image1 from "./HowItWokImgs/Image1.png";
import Image2 from "./HowItWokImgs/Image2.png";
import Image3 from "./HowItWokImgs/Image3.png";

export default function ThirdSection() {
  return (
    <>
      <div className="mt-10 md:mt-14 " style={{ fontFamily: "Poppins" }}>
        <div className="text-center">
          <span className="text-xs bg-[#E9E9E9] px-10 py-1 rounded">
            Uniqueness of Us
          </span>
        </div>

        <div className="mt-5 md:mt-10 hidden md:block text-center">
          <div className="flex justify-center items-center space-x-10">
            <div className="flex items-center">
              <img src={Line} alt="" />
            </div>
            <div className="md:text-3xl lg:text-4xl xl:text-5xl font-regular">
              <h1>
                Why <span className="text-[#09A350]">T</span>urn{" "}
                <span className="text-[#09A350]">K</span>eys?
              </h1>
            </div>
            <div className="flex items-center">
              <img src={Line} alt="" />
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="mt-5 text-center text-3xl lg:text-4xl xl:text-5xl font-regular">
            <h1>
              Why <span className="text-[#09A350]">T</span>urn{" "}
              <span className="text-[#09A350]">K</span>eys?
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-14 px-5 sm:px-10 md:px-20">
        <div className="">
          <div className="flex justify-center">
            <img src={Image1} alt="" className="w-[40%]" />
          </div>
          <h1
            className="text-lg font-medium mt-4 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Exploring Virtual Tour
          </h1>
          <p className="text-[#888888] text-md font-regular text-center px-10 mt-3">
            At Turn Keys, we understand that seeing is believing. That's why
            we've introduced a cutting-edge feature that lets you explore
            properties like never before. When you find a listing that catches
            your eye, take your experience to the next level by requesting a
            virtual tour!
          </p>
        </div>

        <div className="">
          <div className="flex justify-center">
            <img src={Image2} alt="" className="w-[40%]" />
          </div>
          <h1
            className="text-lg font-medium mt-4 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Secure and Trusted
          </h1>
          <p className="text-[#888888] text-md font-regular text-center px-10 mt-3">
            Ensure a trusted community with our identity verification process.
            Communicate securely with fellow homeowners through our encrypted
            messaging system. Experience safe and secure financial transactions
            with our reliable payment systems.
          </p>
        </div>

        <div className="">
          <div className="flex justify-center">
            <img src={Image3} alt="" className="w-[50%]" />
          </div>
          <h1
            className="text-lg font-medium mt-4 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            User-Friendly Experience
          </h1>
          <p className="text-[#888888] text-md font-regular text-center px-10 mt-3">
            Sign up effortlessly with our quick and straightforward registration
            process. Navigate our platform seamlessly with an intuitive
            interface. Begin your house-swapping journey with a hassle-free
            onboarding experience.
          </p>
        </div>
      </div>
    </>
  );
}
