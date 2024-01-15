import React from "react";
import Image1 from "../HomeImgs/home1.png";
import Image2 from "../HomeImgs/home2.png";
import Image3 from "../HomeImgs/home3.png";

export default function FourthSection() {
  return (
    <div className="mt-10 md:mt-20 bg-[#EAFAEF] py-10 px-5 sm:px-10 md:px-20">
      <h1
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center"
        style={{ fontFamily: "Poppins" }}
      >
        Features That Set Us Apart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-14">
        <div className="">
          <div className="flex justify-center">
            <img src={Image1} alt="" className="w-1/2" />
          </div>
          <h1
            className="text-lg font-medium mt-4 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Trusted and Secure
          </h1>
          <p className="text-[#888888] text-md font-regular text-center px-10 mt-3">
            Your safety is our priority. Our rigorous identity verification
            process ensures that you can trust the Turn Keys community. Secure
            communication and payment systems provide peace of mind throughout
            the exchange process.
          </p>
        </div>

        <div className="">
          <div className="flex justify-center">
            <img src={Image2} alt="" className="w-[35%]" />
          </div>
          <h1
            className="text-lg font-medium mt-4 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Personalized Profiles
          </h1>
          <p className="text-[#888888] text-md font-regular text-center px-10 mt-3">
            Craft detailed profiles that showcase your property and preferences.
            Use our customizable search filters to find the perfect match for
            your next house swap adventure.
          </p>
        </div>

        <div className="">
          <div className="flex justify-center">
            <img src={Image3} alt="" className="w-[35%]" />
          </div>
          <h1
            className="text-lg font-medium mt-4 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            User-Friendly Onboarding
          </h1>
          <p className="text-[#888888] text-md font-regular text-center px-10 mt-3">
            Our easy registration and identity verification process get you
            started in no time. Create your profile, add stunning photos, and
            begin exploring potential swaps effortlessly
          </p>
        </div>
      </div>
    </div>
  );
}
