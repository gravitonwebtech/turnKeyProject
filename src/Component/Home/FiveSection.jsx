import React from "react";
import Line from "../HomeImgs/Line.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star1 from "../HomeImgs/Star.svg";
import Star2 from "../HomeImgs/Star1.svg";
import Star3 from "../HomeImgs/Star3.svg";

export default function FiveSection() {
  const Settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const isSmallScreen1 = window.innerWidth <= 768;

  if (isSmallScreen1) {
    Settings1.slidesToShow = 1;
  }

  return (
    <>
      <div className="mt-10 md:mt-14 " style={{ fontFamily: "Poppins" }}>
        <div className="text-center">
          <span className="text-xs bg-[#E9E9E9] px-10 py-1 rounded">Testimonials</span>
        </div>

        <div className="mt-5 hidden sm:block text-center">
          <div className="flex justify-center items-center space-x-10">
            <div className="flex items-center">
              <img src={Line} alt="" />
            </div>
            <div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-regular"
            >
              <h1>What Our Happy</h1>
              <h1 className="mt-2">Customers Said.</h1>
            </div>
            <div className="flex items-center">
              <img src={Line} alt="" />
            </div>
          </div>
        </div>

        <div className="block sm:hidden">
          <div
            className="mt-5 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-regular"
          >
            <h1>What Our Happy</h1>
            <h1 className="mt-2">Customers Said.</h1>
          </div>
        </div>
      </div>

      <div className="mx-5 md:mx-20 lg:mx-32 xl:mx-40 mt-5 md:mt-10">
        <Slider {...Settings1}>
          <div className="p-4">
            <div className="bg-[#E9F7EF] border-2 border-[#09A350] rounded-[10px] p-5 rounded-2xl">
              <h1
                className="text-[#09A350] font-semibold text-xl"
                style={{ fontFamily: "Poppins" }}
              >
                Amit & Manjit
              </h1>
              <p className="text-[#888888] mt-4">
                "Turn Keys made our dream vacation a reality! Swapping homes
                with another family was not only cost-effective but also added a
                personal touch to our travels. We're now part of a community
                that values trust and shared experiences."
              </p>
              <p className="mt-3 flex">
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="border-2 border-[#09A350] rounded-[10px] p-5 rounded-2xl">
              <h1
                className="text-[#09A350] font-semibold text-xl"
                style={{ fontFamily: "Poppins" }}
              >
                Ramesh & Binod
              </h1>
              <p className="text-[#888888] mt-4">
                "Our Turn Keys experience was fantastic. The platform's security
                measures gave us peace of mind, and connecting with fellow
                homeowners was seamless. We have made friends across borders, all
                thanks to Turn Keys!"
              </p>
              <p className="mt-3 flex">
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star3} alt="" className="w-4" />
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="border-2 border-[#09A350] rounded-[10px] p-5 rounded-2xl">
              <h1
                className="text-[#09A350] font-semibold text-xl"
                style={{ fontFamily: "Poppins" }}
              >
                Karan & Kumbh
              </h1>
              <p className="text-[#888888] mt-4">
                "As avid travelers, Turn Keys become our go-to platform for
                unique accommodations. The personalized profiles helped us find
                perfect match for our preferences. Our house swapping
                adventures have nothing short of amazing."
              </p>
              <p className="mt-3 flex">
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star1} alt="" className="w-4" />
                <img src={Star2} alt="" className="w-4" />
              </p>
            </div>
          </div>

        </Slider>
      </div>
    </>
  );
}
