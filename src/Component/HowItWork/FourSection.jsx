import React from "react";
import Banner from "./HowItWokImgs/Section4.png";
import Image4 from "./HowItWokImgs/Image4.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function FourSection() {
  return (
    <>
      <div className="mt-10 md:mt-14 mx-5 sm:mx-10 md:mx-20 hidden md:block">
        <div className="relative section-four-banner">
          <img
            src={Banner}
            alt=""
            className="w-full h-[300px] xl:h-full rounded-[40px]"
          />

          <div
            className="absolute left-0 top-0 py-24"
            style={{ fontFamily: "Poppins" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 px-5 md:px-14">
              <div className="md:col-span-3">
                <img src={Image4} alt="" className="" />
              </div>

              <div className="md:col-span-5">
                <p className="text-white font-regular text-xs lg:text-sm xl:text-md">
                  Introducing Turn Keys Cost Escapes, where we offers numerous
                  benefits, including cost saving, cultural immersion, and
                  flexibility. It enables individuals to experience a new way of
                  living while saving on accommodation costs.{" "}
                </p>
              </div>

              <div className="md:col-span-1"></div>

              <div className="md:col-span-3 mt-5">
                <h1 className="text-white text-xl font-semibold">Discover </h1>
                <i className="text-white text-xl font-semibold">
                  Money Efficient
                </i><FontAwesomeIcon icon={faArrowRight} className="pl-5 text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
