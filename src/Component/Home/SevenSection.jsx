import React from "react";
import Slider1 from "../HomeImgs/SliderImgs1.png";
import Slider2 from "../HomeImgs/SliderImgs2.png";
import Slider3 from "../HomeImgs/SliderImgs3.png";
import Slider4 from "../HomeImgs/SliderImgs4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SevenSection() {
  const Settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  // Adjust slidesToShow based on screen width
  if (window.innerWidth <= 576) {
    Settings2.slidesToShow = 1;
  } else if (window.innerWidth <= 800) {
    Settings2.slidesToShow = 2;
  } else if (window.innerWidth <= 1200) {
    Settings2.slidesToShow = 3;
  } else {
    Settings2.slidesToShow = 4;
  }

  return (
    <>
      <div
        className="mt-5 md:mt-10 mx-5 sm:mx-10"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-[#90959A] font-semibold">
          Top trending home of the week!
        </h1>
        <h1 className="mt-3 text-[#313131] font-semibold text-xl">
          Have your eye on these most liked Home of the Week
        </h1>
      </div>

      <div
        className="mt-5 mx-2 sm:mx-6"
        style={{ fontFamily: "Poppins" }}
      >
        <Slider {...Settings2}>
          <div className="p-4">
            <img src={Slider1} alt="" />
            <div className="grid grid-cols-2">
              <div className="mt-4">
                <h1 className="text-md font-medium">Berlin</h1>
                <h1 className="text-[#777473] text-sm">Mindblowing home</h1>
              </div>

              <div className="mt-4 items-center flex justify-end">
                <button className="bg-[#09A350] text-sm text-white py-2 px-4 rounded-[8px]">
                  See This Property
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <img src={Slider2} alt="" />
            <div className="grid grid-cols-2">
              <div className="mt-4">
                <h1 className="text-md font-medium">Berlin</h1>
                <h1 className="text-[#777473] text-sm">Mindblowing home</h1>
              </div>

              <div className="mt-4 items-center flex justify-end">
                <button className="bg-[#09A350] text-sm text-white py-2 px-4 rounded-[8px]">
                  See This Property
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <img src={Slider3} alt="" />
            <div className="grid grid-cols-2">
              <div className="mt-4">
                <h1 className="text-md font-medium">Berlin</h1>
                <h1 className="text-[#777473] text-sm">Mindblowing home</h1>
              </div>

              <div className="mt-4 items-center flex justify-end">
                <button className="bg-[#09A350] text-sm text-white py-2 px-4 rounded-[8px]">
                  See This Property
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <img src={Slider4} alt="" />
            <div className="grid grid-cols-2">
              <div className="mt-4">
                <h1 className="text-md font-medium">Berlin</h1>
                <h1 className="text-[#777473] text-sm">Mindblowing home</h1>
              </div>

              <div className="mt-4 items-center flex justify-end">
                <button className="bg-[#09A350] text-sm text-white py-2 px-4 rounded-[8px]">
                  See This Property
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
