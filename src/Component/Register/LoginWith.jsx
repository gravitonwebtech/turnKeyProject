import React from "react";
import "./Register.css";
import Image1 from "./RegisterImgs/RegisterImg1.png";
import Facebook from "./RegisterImgs/Facebook.svg";
import Google from "./RegisterImgs/Google.svg";
import Email from "./RegisterImgs/Email.svg";
import LogoImg from "./RegisterImgs/RegisterIcon.svg";

export default function LoginWith(props) {
  return (
    <>
      <div className="register-background">
        <div className="grid grid-cols-1 md:grid-cols-12 px-5 md:px-5 lg:px-16 xl:px-56 py-14 sm:py-20 md:py-20 lg:py-14 xl:py-14">
          <div className="md:col-span-7 hidden md:block relative">
            <div className="relative">
              <img src={Image1} alt="" />

              <div
                className="absolute inset-0 flex flex-col justify-center items-center"
                style={{ fontFamily: "Poppins" }}
              >
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
            className="md:col-span-5 bg-white relative"
            style={{ fontFamily: "Poppins" }}
          >
            <h1 className="text-center mt-5 md:mt-8 text-xl md:text-2xl font-medium">
              Create an Account
            </h1>
            <p className="text-[#8D8D8D] text-xs mt-2 text-center">
              Kindly Fill The Credential To Proceed
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-20 lg:mt-28 xl:mt-32 mx-5 ">
              <div className="cursor-pointer border-2 border-[#09A350] rounded flex flex-col justify-center items-center pt-5 pb-5">
                <img src={Facebook} alt="" className="w-4 h-4" />
                <p className="text-[#09A350] text-sm font-medium mt-3">
                  Facebook
                </p>
              </div>

              <div className="cursor-pointer border-2 border-[#AABBCC] rounded flex flex-col justify-center items-center pt-5 pb-5">
                <img src={Google} alt="" className="w-4 h-4" />
                <p className="text-sm font-medium mt-3">Google</p>
              </div>

              <div className="cursor-pointer border-2 border-[#AABBCC] rounded flex flex-col justify-center items-center pt-5 pb-5">
                <img src={Email} alt="" className="w-5 h-5" />
                <p className="text-sm font-medium mt-3">Email</p>
              </div>
            </div>

            <h1 className="md:absolute md:bottom-5 md:left-0 md:right-0 mt-10 mb-10 md:mb-0 md:mt-0 text-center text-sm">
              Already have an account?
              <span
                className="text-[#09A350] cursor-pointer"
                onClick={props.togglePage}
              > Sign in</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
