import React from "react";
import Phone from "../Images/Phone.svg";
import Email from "../Images/Email.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location1 = useLocation();
  const flag = location1?.pathname?.includes("/RegisterLogin");

  if (flag) {
    return <></>;
  } else {
  return (
    <div className="bg-[#EDEDED] hidden lg:block px-5 py-2 sm:px-10 md:px-14 lg:px-20 xl:px-24">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="">
          <h1 className="text-sm text-[#3A3A3A]">
            100+ House Swapping Options Available, check it fast!
          </h1>
        </div>

        <div className="flex justify-end">

          <div className="flex items-center">
            <img src={Email} alt="" className="mr-2 w-4 h-4" />
            <span className="text-[#3A3A3A] text-sm">email.id@domain.com</span>
          </div>

          <div className="flex items-center ml-5">
            <img src={Phone} alt="" className="mr-2 w-4 h-4" />
            <span className="text-[#3A3A3A] text-sm">+91 12345-67890</span>
          </div>

        </div>
      </div>
    </div>
  );
  }
}
