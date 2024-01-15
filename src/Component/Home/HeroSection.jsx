import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BannerImg from "../HomeImgs/bannerimage.png";
import "./Home.css";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic
    console.log("Submitted email:", email);

    setEmail("");
  };

  const initialButtons = [
    "Global Community",
    "Personalized Matches",
    "Discover Your Perfect Home Exchange",
  ];

  const [buttons, setButtons] = useState(initialButtons);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % initialButtons.length);
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-bg-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          <div className="pt-40">
            <h1
              className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl"
              style={{ fontFamily: "Baumans" }}
            >
              Unlock the Door to Your Next Adventure with
              <span className="text-[#09A350]"> Turn Keys</span>.
            </h1>
            <p
              className="mt-5 text-[#393939] xl:w-[550px]"
              style={{ fontFamily: "Poppins" }}
            >
              Turn Keys is not just a platform; it's a community of like-minded
              individuals sharing the joy of exploration and discovery. Your
              dream house swap is just a click away.
            </p>

            <div className="hidden md:block">
              <form
                onSubmit={handleSubmit}
                className="mt-5 md:mt-10"
                style={{ fontFamily: "Poppins" }}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent text-[#727272] hover:border-none focus:border-none outline-none"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />

                <button
                  type="submit"
                  className="bg-[#09A350] text-sm text-white py-2 px-4 rounded md:ml-4 lg:ml-5"
                >
                  GET STARTED{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white pl-1"
                  />
                </button>
                <div className="border-b-2 border-[#909090] md:w-[355px] lg:w-[360px] my-1"></div>
              </form>
            </div>

            <div className="block md:hidden">
              <form
                onSubmit={handleSubmit}
                className="mt-5 md:mt-10"
                style={{ fontFamily: "Poppins" }}
              >
                <p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="bg-transparent w-full border-b-2 border-[#909090] my-1 py-2 text-[#727272] focus:outline-none"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </p>

                <button
                  type="submit"
                  className="mt-5 bg-[#09A350] w-full text-sm text-white py-3 px-4 rounded"
                >
                  GET STARTED{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white pl-1"
                  />
                </button>
              </form>
            </div>
          </div>

          <div className="relative pt-5 md:pt-32 xl:pt-24 flex justify-end">
            <img src={BannerImg} alt="" className="xl:w-[90%]" />
            {buttons.map((buttonContent, index) => (
              <button
                key={index}
                className="absolute bottom-16 sm:bottom-24 left-0 xl:left-32 bg-[#09A350] bg-opacity-50 z-20 text-black text-xs font-bold rounded px-4 py-3"
                style={{ display: index === currentIndex ? "block" : "none" ,fontFamily: "Poppins"}}
              >
                {buttonContent}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
