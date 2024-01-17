import React from "react";
import NotificationImage from "./NotificationImg/NotificationImg.png";

export default function Notification() {
  return (
    <div
      className="mt-10 mb-10 flex flex-col items-center justify-center"
      style={{ fontFamily: "Poppins" }}
    >
      <img src={NotificationImage} alt="" className="w-[350px]" />
      <h1 className="text-[#09A350] font-medium text-xl md:text-2xl mt-5 md:mt-8">
        Kindly Register to See Notifications
      </h1>

      <div className="mt-5" style={{ fontFamily: "Poppins" }}>
            <button className=' bg-[#09A350] text-white font-medium text-sm rounded-[4px] px-5 md:px-8 py-3'>
            Create your account for free
            </button>
        </div>
    </div>
  );
}
