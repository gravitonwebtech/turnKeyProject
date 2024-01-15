import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import logotext from "../Images/logotext1.png";
import DownArrow from "../Images/DownArrow.svg";
import Playstore from "../Images/playstore.png";
import AppleIcon from "../Images/Appleicon.png"

export default function Footer() {
  return (
    <div className="bg-[#0B0B0B] px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 lg:gap-20 xl:gap-32">
        <div className="md:col-span-4 md:pt-10">
          <Link to="/" className="flex items-center">
            <img className="w-25 h-10 cursor-pointer pr-4" src={logo} alt="" />
            <img className="w-15 h-5 cursor-pointer" src={logotext} alt="" />
          </Link>

          <div className="border-b border-[#9E9E9E] mt-5 md:mt-10"></div>

         <div className="mt-5 md:mt-8">
         <button
            type="submit"
            className="border border-[#9E9E9E] px-5 py-3 rounded-[8px]"
          >
            <div className="flex">
              <div className="flex justify-center items-center"><img src={Playstore} alt="" className="h-5 w-5" />
              </div>
              <div className="pl-3">
                <h1 className="text-[8px] text-[#9E9E9E] text-left">Get It On</h1>
                <h1 className="text-sm text-white text-semibold">Google Play</h1>
              </div>
            </div>
            
          </button>
         </div>


         <div className="mt-5">
         <button
            type="submit"
            className="border border-[#9E9E9E] px-6 py-3 rounded-[8px]"
          >
            <div className="flex">
              <div className="flex justify-center items-center"><img src={AppleIcon} alt="" className="h-6 w-6" />
              </div>
              <div className="pl-3">
                <h1 className="text-[8px] text-[#9E9E9E]">Download On The</h1>
                <h1 className="text-sm text-white text-semibold">App Store</h1>
              </div>
            </div>
            
          </button>
         </div>
        </div>

        <div className="md:col-span-2 ">
          <div className="flex">
            <div>
              <h1 className="text-white  text-xl font-regular">Services</h1>
            </div>
            <div className="">
              <img src={DownArrow} alt="" className="mt-3 pl-2" />
            </div>
          </div>

          <ul className="text-[#9E9E9E] text-sm mt-5">
            <li>Help & Support</li>
            <li className="mt-2">FAQs</li>
            <li className="mt-2">House Selection</li>
          </ul>
        </div>

        <div className="md:col-span-3 ">
          <div className="flex">
            <div>
              <h1 className="text-white  text-xl font-regular">
                Important Links
              </h1>
            </div>
            <div className="">
              <img src={DownArrow} alt="" className="mt-3 pl-2" />
            </div>
          </div>

          <ul className="text-[#9E9E9E] text-sm mt-5">
            <li>Help & Support</li>
            <li className="mt-2">Hom</li>
            <li className="mt-2">How It Works?</li>
            <li className="mt-2">Swapping Places</li>
            <li className="mt-2">Notifications</li>
            <li className="mt-2">Terms & Conditions</li>
            <li className="mt-2">Help & Support</li>
            <li className="mt-2">Privacy Policy</li>
            <li className="mt-2">About</li>
            <li className="mt-2">Career</li>
            <li className="mt-2 font-bold">Login/Register</li>
          </ul>
        </div>

        <div className="md:col-span-3 ">
          <div className="flex">
            <div>
              <h1 className="text-white  text-xl font-regular">Social Media</h1>
            </div>
            <div className="">
              <img src={DownArrow} alt="" className="mt-3 pl-2" />
            </div>
          </div>

          <ul className="text-[#9E9E9E] text-sm mt-5">
            <li>Instragram</li>
            <li className="mt-2">Twitter(X)</li>
            <li className="mt-2">Facebook</li>
            <li className="mt-2">Linkedin</li>
            <li className="mt-2">Reddit</li>
          </ul>
        </div>
      </div>

      <div className="mt-5 md:mt-8 flex justify-center">
          <h1 className="text-white text-sm font-bold">Copyright &copy; 2023 Turn Keys. All Right Reserved</h1>
      </div>
    </div>
  );
}
