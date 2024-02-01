import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BannerImg from "../HomeImgs/bannerimage.png";
import "./Home.css";

export default function HeroSection() {
  // const [email, setEmail] = useState("");

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Submitted email:", email);
  //   setEmail("");
  // };

  const [formData, setFormData] = useState({
    city: "",
    stayDuration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic here, for example, logging the form data
    console.log("Form Data:", formData);
    setFormData({
      city: "",
      stayDuration: "",
    });
  };

  // buttons
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
          <div className="pt-16 md:pt-28 lg:pt-32">
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

            {/* <div className="hidden md:block">
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
            </div> */}

            {/* <div className="block md:hidden">
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
            </div> */}

            <div className="hidden md:block border border-[#09A350] rounded-[80px] mt-5 md:mt-10 px-5 py-2">
              <form style={{ fontFamily: "Poppins" }} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="">
                    <label className="md:text-sm lg:text-md font-semibold">
                      CITY
                    </label>
                    <p>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Where to?"
                        className="md:text-sm bg-transparent text-[#727272] hover:border-none focus:border-none outline-none"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </p>
                  </div>

                  <div className="">
                    <label className="md:text-sm lg:text-md font-semibold">
                      STAY DURATION
                    </label>
                    <p>
                      <input
                        type="text"
                        id="stayDuration"
                        name="stayDuration"
                        placeholder="Move in - Move out"
                        className="md:text-sm bg-transparent text-[#727272] hover:border-none focus:border-none outline-none"
                        value={formData.stayDuration}
                        onChange={handleInputChange}
                        required
                      />
                    </p>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="bg-[#09A350] text-sm text-white md:p-2 lg:px-4 lg:py-2 rounded-[40px]"
                    >
                      View Home
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="block md:hidden mt-5 md:mt-10">
              <form onSubmit={handleSubmit} style={{ fontFamily: "Poppins" }}>
                <div className="">
                  <label className="text-md font-semibold">CITY</label>
                  <p>
                    <input
                      type="text"
                      id="city"
                      name="city" 
                      placeholder="Where to?"
                      className="bg-transparent w-full border-b-2 border-[#909090] py-2 text-[#727272] focus:outline-none"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </p>
                </div>

                <div className="mt-4">
                  <label className="text-md font-semibold">STAY DURATION</label>
                  <p>
                    <input
                      type="text"
                      id="stayDuration"
                      name="stayDuration"
                      placeholder="Move in - Move out"
                      className="bg-transparent w-full border-b-2 border-[#909090] py-2 text-[#727272] focus:outline-none"
                      value={formData.stayDuration}
                      onChange={handleInputChange}
                      required
                    />
                  </p>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className="bg-[#09A350] w-full text-sm text-white py-3 px-4 rounded-[40px]"
                  >
                    View Home
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="relative pt-5 md:pt-24 xl:pt-20 flex justify-end">
            <img src={BannerImg} alt="" className="xl:w-[90%]" />
            {buttons.map((buttonContent, index) => (
              <button
                key={index}
                className="absolute bottom-16 sm:bottom-24 left-0 xl:left-32 bg-[#09A350] bg-opacity-50 z-20 text-white text-xs font-bold rounded px-4 py-3"
                style={{
                  display: index === currentIndex ? "block" : "none",
                  fontFamily: "Poppins",
                }}
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
