import React from "react";
import "./Register.css";
import WelcomeImg from "./RegisterImgs/Welcome.png";

export default function WelcomePage() {
  return (
    <>
      <div className="register-background">
        <div className="px-5 md:px-5 lg:px-16 xl:px-96 py-14 sm:py-10 md:py-12 lg:py-20">
          <div className="bg-white p-5" style={{ fontFamily: "Poppins" }}>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-semibold">Welcome to</h1>
              <h1
                className="text-xl md:text-3xl lg:text-3xl font-medium mt-3"
                style={{ fontFamily: "Baumans" }}
              >
                <span className="text-[#09A350]">T</span> u r n{" "}
                <span className="pl-4">
                  <span className="text-[#09A350]">K</span> e y
                </span>
              </h1>
              <div className="flex justify-center mt-5 md:mt-8">
                <img src={WelcomeImg} alt="" className="w-3/4 h-auto" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-10 mb-5 md:mb-10">
              <div className="mt-5 md:mt-10">
                <button
                  type="submit"
                  className="bg-[#09A350] w-full py-3 text-center text-white text-sm rounded-[8px]"
                >
                  Continue to Browser
                </button>
              </div>

              <div className="mt-5 md:mt-10">
                <button
                  type="submit"
                  className="border border-[#09A350] w-full py-3 text-center text-[#09A350] text-sm rounded-[8px]"
                >
                  + Create my first Listings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
