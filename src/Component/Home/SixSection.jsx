import React from "react";
import "./Home.css";

export default function SixSection() {
  return (
    <div className="mt-10  md:mt-14 home-six-section">
      <div className="text-center py-10 md:py-14">
        <span className="text-xs text-white bg-[#333333] px-10 py-1">
         Smarter Way to Exchange Houses
        </span>

        <div className="px-5 sm:px-20 md:px-28 lg:px-32 xl:px-60 mt-10 lg:mt-14 xl:mt-20 hidden md:block">
          <h1
            className="text-[#FFFFFF] text-2xl md:text-2xl lg:text-4xl xl:text-6xl"
            style={{ fontFamily: "Poppins" }}
          >
            Become One Of 10,000+ Member
          </h1>
          <h1
            className="text-[#FFFFFF] text-2xl md:text-2xl lg:text-4xl xl:text-6xl mt-3"
            style={{ fontFamily: "Poppins" }}
          >
             of Our Global Community
          </h1>
        </div>

        <div className="px-5 sm:px-20 md:px-28 lg:px-32 xl:px-60 mt-10 lg:mt-14 xl:mt-20 block md:hidden">
          <h1
            className="text-[#FFFFFF] text-2xl md:text-2xl lg:text-4xl xl:text-6xl"
            style={{ fontFamily: "Poppins" }}
          >
            Become One Of 10,000+ Member  of Our Global Community
          </h1>
        </div>

        <div className="px-5 sm:px-10 md:px-28 lg:px-48 xl:px-96 mt-5 md:mt-10">
          <p
            className="text-[#9E9E9E] text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            Embrace a world of endless possibilities as you connect with
            like-minded individuals who share a passion for exploration and
            unique travel experiences. As a valued member, you'll have exclusive
            access to a diverse range of homes, fostering connections that
            transcend borders. Join Turn Keys today and be part of a growing
            community that believes in the power of shared adventures and
            creating memories that last a lifetime.
          </p>
        </div>

        <div className="mt-5 md:mt-10 flex justify-center" style={{ fontFamily: "Poppins" }}>
          <button className="bg-[#09A350] text-sm text-black font-semibold py-3 px-4 rounded">
            Get Started-It's Free
          </button>
        </div>
      </div>
    </div>
  );
}
