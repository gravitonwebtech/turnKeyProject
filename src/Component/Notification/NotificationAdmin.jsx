import React from 'react'
import Icon1 from "./NotificationImg/Image-1.png";
import Icon2 from "./NotificationImg/Image-2.png";
import Icon3 from "./NotificationImg/Image-3.png";
import Icon4 from "./NotificationImg/Image-4.png";
import EyeIcon from "./NotificationImg/EyeIcon.svg";

export default function NotificationAdmin() {
  return (
    <>
      <div className="mt-10 " style={{ fontFamily: "Poppins" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 sm:mx-10 md:mx-14 lg:mx-20 xl:mx-24">
          <div className="">
            <span className="bg-[#F2F4F7] rounded-[32px] text-sm px-3 py-1">
              8 Unread
            </span>
          </div>
          <div className="flex justify-end">
            <h1 className="text-[#09A350] font-medium">Mark all as Read</h1>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 my-5"></div>

      <h1 className="flex justify-center">
        <span className="bg-[#F2F4F7] rounded-[32px] text-sm font-semibold px-3 py-1">
          Today
        </span>
      </h1>

      <div className=" mx-5 sm:mx-10 md:mx-14 lg:mx-28 xl:mx-80 mt-5 md:mt-10">
        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon1} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Morang Helsinki </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon2} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Lucia Sierra </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon3} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Oslo Boscovinch </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon4} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Paul Waden </b>has liked your property and requesting a live
                video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 my-5 md:my-10"></div>

      <h1 className="flex justify-center">
        <span className="bg-[#F2F4F7] rounded-[32px] text-sm font-semibold px-3 py-1">
          Yesterday
        </span>
      </h1>

      <div className=" mx-5 sm:mx-10 md:mx-14 lg:mx-28 xl:mx-80 mt-5 md:mt-10">
        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon1} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Morang Helsinki </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon2} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Lucia Sierra </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon3} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Oslo Boscovinch </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] bg-[#E0FFEE] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon4} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg">
                <b>Paul Waden </b>has liked your property and requesting a live
                video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            <div className="sm:col-span-1 md:col-span-1 flex items-center">
              <img src={EyeIcon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px]  px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon4} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg text-[#666666]">
                <b>Paul Waden </b>has liked your property and requesting a live
                video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon2} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg text-[#666666]">
                <b>Lucia Sierra </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px]  px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon3} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg text-[#666666]">
                <b>Oslo Boscovinch </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px] px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon4} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg text-[#666666]">
                <b>Paul Waden </b>has liked your property and requesting a live
                video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            
          </div>
        </div>

        <div
          className="border border-[#828282] rounded-[8px]  px-4 py-2 mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={Icon3} alt="" className="w-[14%] sm:w-full" />
            </div>
            <div className="sm:col-span-9 md:col-span-10">
              <h1 className="text-md md:text-lg text-[#666666]">
                <b>Oslo Boscovinch </b>has liked your property and requesting a
                live video tour
              </h1>
              <h1 className="text-sm text-[#828282]">1 Hours Ago</h1>
            </div>
            
          </div>
        </div>
      </div>

      <div className="border border-gray-300 my-5 md:my-10"></div>
    </>
  )
}
