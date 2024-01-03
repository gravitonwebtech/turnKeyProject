import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./services.css";
import Swappingoptionpage from "./Swappingoptionpage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hillstation from "./ServicesImages/hillstations.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "./ServicesImages/left.png";
import right from "./ServicesImages/right.png";
import Slider from "react-slick";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image1 from "./ServicesImages/image1.png";
import image2 from "./ServicesImages/image2.png";
import image3 from "./ServicesImages/image3.png";
import image4 from "./ServicesImages/image4.png";
import image5 from "./ServicesImages/image5.png";
import image7 from "./ServicesImages/image 7.png";
import t1 from "./ServicesImages/T1.png";
import Trending from "./ServicesImages/Trending.png";
import House from "./ServicesImages/House.png";
import image8 from "./ServicesImages/image8.png";
import Modern from "./ServicesImages/Modern house.png";
import Mansion from "./ServicesImages/Mansion.png";
import image9 from "./ServicesImages/image9.png";
import Cabin from "./ServicesImages/Cabin.png";
import Fields from "./ServicesImages/Field.png";
import Tiny from "./ServicesImages/tiny.png";
import pool from "./ServicesImages/Swimming pool.png";
import image10 from "./ServicesImages/image10.png";
import image11 from "./ServicesImages/image11.png";
import star from "./ServicesImages/star.png";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import swip1 from "./ServicesImages/swipe.png";
import swip2 from "./ServicesImages/swipe1.png";
// import swip3 from "./ServicesImages/swip3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SwappingPlace = () => {
  const [like, setLike] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState();
  console.log(date);
  const slides = [
    {
      url: require("./ServicesImages/hillstations.png"),
      alt: "Hill Stations Image",
    },
    {
      url: require("./ServicesImages/hillstations.png"),
      alt: "Hill Stations Image",
    },
    // {
    //   url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    // },

    // {
    //   url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    // },
    // {
    //   url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    // },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Show one card at a time
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 300, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 374, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 470, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  };
  const settings1 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const [currentIndex, setCurrentIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const [likes, setLikes] = useState({
    post1: false,
    post2: false,
    post3: false,
    post4: false,
    post5: false,
    post6: false,
    post7: false,
    post8: false,
    post9: false,
    post10: false,
    post11: false,
    post12: false,
    post13: false,
    post14: false,
    post15: false,
    post16: false,
    post17: false,
    post18: false,
  });

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };
  const [showModal, setShowModal] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };
  

 

  return (
    <>
      <>
        <div>
          <div className="container-fluid relative bg-cover bg-center min-h-screen bg-[#bbf3cb] sm:bg-[#bbf3cb] md:bg-[#bbf3cb] lg:bg-[#bbf3cb] xl:bg-[#bbf3cb]">
            <div className="container mt-12 md:mt-10 rounded-lg absolute inset-0 bg-cover bg-center z-0 md:left-12 h-screen">
              <div className="px-[50px] ">
                <div
                  className="about-banner-section"
                  id="about-banner-parallax"
                >
                  <div
                    className="text-white pt-10 px-5 sm:px-10 md:px-28 sm:mx-auto md:mx-auto  md:p-[90px] text-center"
                    style={{ padding: "10px" }}
                  >
                    <h1 className="text-sm sm:text-sm md:text:sm lg:text-lg  font-semibold mt-10 text-[#92E3A9]">
                      DISCOVER YOUR DESIRED HOUSE
                    </h1>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg font-medium mt-5 p-4">
                      Welcome to Swapping Place, where finding your dream home
                      is as easy as a swipe! Discover a world of possibilities
                      as you browse through our diverse range of properties.
                      Swipe right for the homes you love and let the adventure
                      begin.
                    </p>

                    <div className="bg-[#6FAD86] bg-opacity-50 mx-5 md:mx-20 rounded-lg mt-10 hidden md:block ">
                      <h1 className="text-left p-5 text-[#57FFA5] mt-10">
                        Destinations
                      </h1>
                      <hr />
                      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4  p-4 md:p-5">
                        <div className="lg:col-span-4  ">
                          <div>
                            <h1 className="text-md font-semibold mb-2 text-left">
                              SELECT YOUR LOCATION
                            </h1>
                            <select className="w-full p-2.5 text-white bg-[#8DAD99] opacity-80 rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                              <option className="text-white">
                                Eg: 2 BHK House
                              </option>
                              <option className="text-white">Villa with</option>
                              <hr />

                              <option className="text-white">
                                3 BHK House
                              </option>
                              <hr />
                              <option className="text-white">
                                4 BHK House
                              </option>
                              <hr />
                              <option className="text-white">
                                Sea Facing House
                              </option>
                              <hr />
                              <option className="text-white">Villa</option>
                              <hr />
                              <option className="text-white">Bungalow</option>
                              <hr />
                            </select>
                          </div>
                        </div>

                        <div className="lg:col-span-2 ">
                          <div className="w-full">
                            <h1 className="text-md font-semibold  mb-2 text-left">
                              GETTING IN
                            </h1>
                            <input
                              type="date"
                              placeholder="dd/mm/yyyy"
                              onChange={(e) => setDate(e.target.value)}
                              className="text-white p-2 w-full rounded-lg bg-[#969696] opacity-100"
                            />
                          </div>
                        </div>

                        <div className="lg:col-span-2 ">
                          <div className="w-full">
                            <h1 className="text-md font-semibold  mb-2 text-left">
                              GETTING OUT
                            </h1>
                            <input
                              type="date"
                              placeholder="dd/mm/yyyy"
                              onChange={(e) => setDate(e.target.value)}
                              className="text-white p-2 w-full rounded-lg bg-[#969696] opacity-100"
                            />
                          </div>
                        </div>

                        <div className="lg:col-span-1 ">
                          <button
                            className="text-black  font-bold uppercase mr-15 text-sm py-3 w-[98px] rounded  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(true)}
                          >
                            <img
                              src={t1}
                              alt="image"
                              className="max-w-[100%] h-auto mt-3"
                            />
                          </button>
                          {showModal ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl mb-[-1px]">
                                  <div className="border-0 rounded-lg mt-[60rem] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   
                                    <div className="relative p-10 flex-auto overflow-y-auto   rounded-lg">
                                      <h1 className="text-center text-black font-bold">
                                        Filter
                                      </h1>
                                      <hr />
                                      <h1 className="text-black text-left  font-bold">
                                        Type of place
                                      </h1>
                                      <p className="text-black text-left ">
                                        Search rooms, entire home or any type of
                                        place.
                                      </p>
                                      <div
                                        id="main"
                                        class="grid grid-cols-3  justify-evenly p-5"
                                      >
                                        <div class="bg-green-700 w-26 h-12 pt-2">
                                          Any Type
                                        </div>
                                        <div class="border border-t border-gray-500  w-26 h-12 pt-2 text-black">
                                          Studios/Rooms
                                        </div>
                                        <div class="border border-t border-gray-500  w-26 h-12 pt-2 text-black">
                                          Entire Home
                                        </div>
                                        <hr />
                                      </div>
                                      <hr />
                                      <p className="text-black text-left  font-bold">
                                        No. of family members
                                      </p>
                                      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-9 mt-5">
                                        <div>
                                          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                            Any
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            1
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            2
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            3
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            4
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            5
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            6
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            7
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            8+
                                          </button>
                                        </div>
                                      </div>
                                      <p className="text-black text-left font-bold">
                                        Rooms and beds
                                      </p>
                                      <p className="text-black text-left">
                                        Bedrooms
                                      </p>
                                      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-9 mt-5">
                                        <div>
                                          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                            Any
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            1
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            2
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            3
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            4
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            5
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            6
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            7
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            8+
                                          </button>
                                        </div>
                                      </div>
                                      <p className="text-black text-left">
                                        Bathroom
                                      </p>
                                      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-9 mt-5">
                                        <div>
                                          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                            Any
                                          </button>
                                        </div>

                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            1
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            2
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            3
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            4
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            5
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            6
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            7
                                          </button>
                                        </div>
                                        <div>
                                          <button class="border border-t border-gray-500 text-black font-bold py-2 px-4 rounded-full">
                                            8+
                                          </button>
                                        </div>
                                        <hr />
                                      </div>
                                      <hr className="mt-10" />
                                      <h3 className="text-start sm:text-center md:text-center lg:text-start text-black  font-bold mt-3">
                                        Amenities
                                      </h3>
                                      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-2 ">
                                        <div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Fully-furnished
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Swimming pool
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              WI-FI
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Refrigerator
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Washing Machine
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Kitchen
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Gas Supply
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Heater
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              BBQ grill
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Public Transportation
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Pets allowed
                                            </label>
                                          </div>
                                        </div>
                                        <div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Fire/Smoke alarm
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Air Conditioner
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Parking Area
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Gym
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Garden
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Waterfall
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Kids play
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Pet accepted
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Disabled people suitability
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Cable Connection
                                            </label>
                                          </div>
                                          <div class="flex items-center">
                                            <input
                                              type="checkbox"
                                              id="myCheckbox"
                                              class="form-checkbox h-5 w-5text-green-500"
                                            />
                                            <label
                                              for="myCheckbox"
                                              class="ml-2 text-gray-700"
                                            >
                                              Elevator
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <h1 className="text-black text-left mt-5 font-bold">
                                        Host Language
                                      </h1>
                                      {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">English-US</label> */}
                                      <select
                                        id="countries"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      >
                                        <option selected>English-US</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="US">English-US</option>
                                        <option value="Urdu">Urdu</option>
                                        <option value="Telugu">Telugu</option>
                                      </select>

                                      <div>
                                        <div class="grid grid-cols-3 gap-4">
                                          <div>
                                            <div class="flex items-center">
                                              <input
                                                type="checkbox"
                                                id="myCheckbox"
                                                class="form-checkbox h-5 w-5text-green-500"
                                              />
                                              <label
                                                for="myCheckbox"
                                                class="ml-2 text-gray-700"
                                              >
                                                Owned
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="flex items-center">
                                              <input
                                                type="checkbox"
                                                id="myCheckbox"
                                                class="form-checkbox h-5 w-5text-green-500"
                                              />
                                              <label
                                                for="myCheckbox"
                                                class="ml-2 text-gray-700"
                                              >
                                                Rented
                                              </label>
                                            </div>
                                          </div>
                                          <div>
                                            <div class="flex items-center">
                                              <input
                                                type="checkbox"
                                                id="myCheckbox"
                                                class="form-checkbox h-5 w-5text-green-500"
                                              />
                                              <label
                                                for="myCheckbox"
                                                class="ml-2 text-gray-700"
                                              >
                                                Leased
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/*footer*/}
                                    <div className=" p-6 border-t border-solid border-blueGray-200 rounded-b ">
                                      <button
                                        className="text-green-500 background-transparent font-bold text-right float-left top-10px uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                      >
                                        Clear all
                                      </button>
                                      <div className="flex items-center justify-end">
                                        <button
                                          className="bg-green-500  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Show 340 places
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}
                        </div>

                        <div className="lg:col-span-2 ">
                          <button
                            type="button"
                            className="text-gray-900 bg-[#57FFA5] rounded-lg opacity-100 border mt-6  w-full px-5 py-2 "
                          >
                            SEARCH
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/* <div className="md:px-[80px] sm:px-0 md:px-0 sm:mt-[80px]">
          <div className="max-w-[1400px] h-[780px] w-full  py-16 px-4 relative top-0 right-0 group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
           
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
        
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
      
            <div className="absolute bottom-40 left-10 text-white text-lg hidden md:block">
              <h1 className="text-5xl">Hill Station</h1>
              <h5 className="text-2xl text-left">Nainital, India</h5>
              <p className="text-left">15 miles away</p>
            </div>
            <div className="absolute bottom-40 right-10 text-white text-lg hidden md:block">
              <button className="border border-7 p-2 border-bold text-yellow-500 font-bold border-yellow-500">
                HOLD FOR NOW
              </button>
            </div>
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
             
                </div>
              ))}
            </div>
          </div>
        </div> */}

<div className="container mx-auto relative">
  <div className="relative">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="relative">
          <img
            src={swip1}
            alt="image"
            className="w-full h-full object-cover"
          />
          {/* Add additional content here for the first slide */}
          <div className="absolute bottom-40 left-10 text-lg text-white">
            <h1 className="text-5xl">Hill Station</h1>
            <h5 className="text-2xl text-left">Nainital, India</h5>
            <p className="text-left">15 miles away</p>
          </div>
          <div className="absolute bottom-40 right-10 text-white text-lg">
          <Link to="/Swappingoptionpage" className="border border-7 p-2 border-bold text-yellow-500 font-bold border-yellow-500">
              HOLD FOR NOW
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative">
          <img
            src={swip2}
            alt="image"
            className="w-full h-full object-cover"
          />
          {/* Add additional content here for the second slide */}
          <div className="absolute bottom-40 left-10 text-lg text-white">
            <h1 className="text-5xl">Hill Station</h1>
            <h5 className="text-2xl text-left">Nainital, India</h5>
            <p className="text-left">15 miles away</p>
          </div>
          <div className="absolute bottom-40 right-10 text-white text-lg">
          <Link to="/Swappingoptionpage" className="border border-7 p-2 border-bold text-yellow-500 font-bold border-yellow-500">
              HOLD FOR NOW
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Add more SwiperSlides with your images and additional content */}
    </Swiper>
  </div>
</div>



        {/* slider */}
        {/* icons */}
        <div className="container mt-[40px] mx-auto  text-left text-sm px-20">
          <Slider {...settings}>
            <div>
              <div>
                <img src={Trending} alt="image" />
                <p>Trending</p>
              </div>
            </div>
            <div>
              <div>
                <img src={image7} alt="image" />
                <p>Amazing views</p>
              </div>
            </div>
            <div>
              <div>
                <img src={House} alt="image" />
                <p>Amazing views</p>
              </div>
            </div>
            <div>
              <div>
                <img src={image8} alt="image" />
                <p>Bungalow</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Modern} alt="image" />
                <p>Villa</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Mansion} alt="image" />
                <p>Mansion</p>
              </div>
            </div>
            <div>
              <div>
                <img src={image9} alt="image" />
                <p>Historical House</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Cabin} alt="image" />
                <p>Cabin</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Fields} alt="image" />
                <p>Farm House</p>
              </div>
            </div>
            <div>
              <div>
                <img src={Tiny} alt="image" />
                <p>Tiny Houses</p>
              </div>
            </div>
            <div>
              <div>
                <img src={pool} alt="image" />
                <p>Amazing Pools</p>
              </div>
            </div>
            <div>
              <div>
                <img src={image10} alt="image" />
                <p>Luxury</p>
              </div>
            </div>
            <div>
              <div>
                <img src={image11} alt="image" />
                <p>Ryokans</p>
              </div>
            </div>
          </Slider>
        </div>
        {/* icons */}
        {/* third */}

        <div>
          {/* Your blog post sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-48 mt-10 md:mt-20 relative">
            <div>
              <Slider {...settings1}>
                <div>
                  <div className="blog-post">
                    <div className="blog-effect-box relative top-0 right-0">
                      <img src={image1} alt="" />
                      <div
                        className="heart-icon absolute top-10 right-10 text-2xl"
                        onClick={() => handleLike("post1")}
                      >
                        {likes.post1 ? <FaHeart /> : <FaRegHeart />}
                      </div>
                      <div className="blog-effect-layer"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                      <div>
                        <h1 className="text-left font-bold">
                          4 BHK Villa+Swimming Pool
                        </h1>
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="flex">
                              <CiLocationOn />
                              2300 Km away
                            </p>
                            <br />
                            <p className="flex mt-[-18px]">
                              <MdDateRange />
                              7-12 Jan
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-end">
                          <span className="flex items-center">
                            <MdOutlineStarPurple500 />
                            <span className="ml-1">4.68</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="blog-post">
                    <div className="blog-effect-box relative top-0 right-0">
                      <img src={image2} alt="" />
                      <div
                        className="heart-icon absolute top-10 right-10 text-2xl"
                        onClick={() => handleLike("post1")}
                      >
                        {likes.post1 ? <FaHeart /> : <FaRegHeart />}
                      </div>
                      <div className="blog-effect-layer"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                      <div>
                        <h1 className="text-left font-bold">
                          4 BHKVilla+Swimming Pool
                        </h1>
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="flex">
                              <CiLocationOn />
                              2300 Km away
                            </p>
                            <br />
                            <p className="flex mt-[-18px]">
                              <MdDateRange />
                              7-12 Jan
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-end">
                          <span className="flex items-center">
                            <MdOutlineStarPurple500 />
                            <span className="ml-1">4.68</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            {/* Second post */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image2} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post2")}
                >
                  {likes.post2 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third post */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image3} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post3")}
                >
                  {likes.post3 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth post */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image1} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post4")}
                >
                  {likes.post4 ? <FaHeart /> : <FaRegHeart />}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">
                    4 BHK Villa+Swimming Pool
                  </h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fifth post */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image3} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post5")}
                >
                  {likes.post5 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sixth post */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image1} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post6")}
                >
                  {likes.post6 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* seven  */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image2} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post7")}
                >
                  {likes.post7 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* eight */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image3} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post8")}
                >
                  {likes.post8 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* nine */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image2} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post9")}
                >
                  {likes.post9 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* ten */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image2} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post10")}
                >
                  {likes.post10 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* eleven */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image1} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post11")}
                >
                  {likes.post11 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* tweleve */}
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image3} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post12")}
                >
                  {likes.post12 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image2} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post13")}
                >
                  {likes.post13 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image3} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post14")}
                >
                  {likes.post14 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image1} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post15")}
                >
                  {likes.post15 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image3} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post16")}
                >
                  {likes.post16 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image2} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post17")}
                >
                  {likes.post17 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="blog-effect-box relative top-0 right-0">
                <img src={image1} alt="" />
                <div
                  className="heart-icon absolute top-10 right-10 text-2xl"
                  onClick={() => handleLike("post18")}
                >
                  {likes.post18 ? <FaHeart /> : <FaRegHeart />}
                </div>
                <div className="blog-effect-layer"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div>
                  <h1 className="text-left font-bold">Mansion</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="flex">
                        <CiLocationOn />
                        2300 Km away
                      </p>
                      <br />
                      <p className="flex mt-[-18px]">
                        <MdDateRange />
                        7-12 Jan
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center">
                      <MdOutlineStarPurple500 />
                      <span className="ml-1">4.68</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        {/* page */}
        <div class="flex flex-col my-12 py-4 items-center space-y-5 dark:bg-gray-800">
          <ul class="inline-flex mx-auto bg-gray-50 space-x-2 px-2 py-4 rounded-md shadow-md dark:bg-gray-500">
            <li>
              <button class="px-4 py-2 hover:text-green-600 dark:text-gray-300 dark:hover:text-gray-50">
                Prev
              </button>
            </li>
            <li>
              <button class="px-4 py-2 hover:text-green-600 hover:text-gray-50 dark:text-gray-100 rounded dark:hover:bg-gray-700">
                1
              </button>
            </li>
            <li>
              <button class="bg-green-600 px-4 py-2 text-gray-100 hover:bg-green-600 hover:text-gray-50 rounded dark:bg-gray-600 dark:hover:bg-gray-700">
                ..
              </button>
            </li>
            <li>
              <button class="px-4 py-2 hover:text-green-600 hover:text-gray-50 dark:text-gray-100 rounded dark:hover:bg-gray-700">
                10
              </button>
            </li>
            <li>
              <button class="px-4 py-2 hover:text-green-600 dark:text-gray-300 dark:hover:text-gray-50">
                Next
              </button>
            </li>
          </ul>
        </div>
        <div>
       

     </div>
   
        {/*  */}
      </>
    </>
  );
};

export default SwappingPlace;
