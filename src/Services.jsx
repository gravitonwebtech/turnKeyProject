import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./services.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hillstation from "./ServicesImages/hillstations.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "./ServicesImages/left.png";
import right from "./ServicesImages/right.png";
import Slider from "react-slick";
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
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

const Services = () => {
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
    slidesToScroll: 1
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
  });

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div>
        <div className="container-fluid relative bg-cover bg-center min-h-screen bg-[#bbf3cb] sm:bg-[#bbf3cb] md:bg-[#bbf3cb] lg:bg-[#bbf3cb] xl:bg-[#bbf3cb]">
          <div className="container mt-12 md:mt-10 rounded-lg absolute inset-0 bg-cover bg-center z-0 md:left-12 h-screen">
            <div className="px-[50px] ">
              <div className="about-banner-section" id="about-banner-parallax">
                <div
                  className="text-white pt-10 px-5 sm:px-10 md:px-28 sm:mx-auto md:mx-auto  md:p-[90px] text-center"
                  style={{ padding: "10px" }}
                >
                  <h1 className="text-sm sm:text-sm md:text:sm lg:text-lg  font-semibold mt-10 text-[#92E3A9]">
                    DISCOVER YOUR DESIRED HOUSE
                  </h1>
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg font-medium mt-5 p-4">
                    Welcome to Swapping Place, where finding your dream home is
                    as easy as a swipe! Discover a world of possibilities as you
                    browse through our diverse range of properties. Swipe right
                    for the homes you love and let the adventure begin.
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
                          <select className="w-full p-2.5 text-white bg-[#969696] opacity-80 rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option className="text-white">
                              Eg: 2 BHK House
                            </option>
                            <option className="text-white">3BHK HOUSE</option>
                            <option className="text-white">1BHK HOUSE</option>
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
                        <img
                          src={t1}
                          alt="image"
                          className="max-w-full h-auto mt-6"
                        />
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
      <div className="md:px-[80px] sm:px-0 md:px-0 sm:mt-[80px]">
        <div className="max-w-[1400px] h-[780px] w-full  py-16 px-4 relative top-0 right-0 group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          {/* Text in bottom-left corner */}
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
                {/* <RxDotFilled /> */}
              </div>
            ))}
          </div>
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
      {/* First post */}
      {/* <div className="blog-post">
        <div className="blog-effect-box relative top-0 right-0">
          <img src={image1} alt="" />
          <div
            className="heart-icon absolute top-10 right-10 text-2xl"
            onClick={() => handleLike("post1")}
          >
            {likes.post1 ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
        <div className="p-4 ">
          <div className=" items-center gap-5">
            <h1 className="font-bold text-left">Mansion</h1>
            <p className="font-bold flex">Kerala, India</p>
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
        </div>
      </div> */}
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
        {/* <div className="p-7 ">
          <div className=" items-center gap-5">
            <h1 className="text-left font-bold">4 BHK Villa+Swimming Pool</h1>
            <div className="flex items-center justify-end">
  <span className="flex items-center">
    <MdOutlineStarPurple500 className="text-purple-500" />
    <span className="ml-1">4.68</span>
  </span>
</div>

            <p className="font-bold flex">Kerala, India</p>
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
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div >
          <h1 className="text-left font-bold">4 BHK Villa+Swimming Pool</h1>
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
    <MdOutlineStarPurple500  />
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
          <div >
          <h1 className="text-left font-bold">4 BHKVilla+Swimming Pool</h1>
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
    <MdOutlineStarPurple500  />
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
          <div >
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
    <MdOutlineStarPurple500  />
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
          <div >
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
    <MdOutlineStarPurple500  />
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
          <div >
          <h1 className="text-left font-bold">4 BHK Villa+Swimming Pool</h1>
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
    <MdOutlineStarPurple500  />
    <span className="ml-1">4.68</span>
  </span>
</div>
          </div>
        </div>
      </div>

      {/* Fifth post */}
      <div className="blog-post">
        <div className="blog-effect-box relative top-0 right-0">
          <img src={image2} alt="" />
          <div
            className="heart-icon absolute top-10 right-10 text-2xl"
            onClick={() => handleLike("post5")}
          >
            {likes.post5 ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div className="blog-effect-layer"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div >
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
    <MdOutlineStarPurple500  />
    <span className="ml-1">4.68</span>
  </span>
</div>
          </div>
        </div>
      </div>

      {/* Sixth post */}
      <div className="blog-post">
        <div className="blog-effect-box relative top-0 right-0">
          <img src={image3} alt="" />
          <div
            className="heart-icon absolute top-10 right-10 text-2xl"
            onClick={() => handleLike("post6")}
          >
            {likes.post6 ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div className="blog-effect-layer"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div >
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
    <MdOutlineStarPurple500  />
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
            <button class="px-4 py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-gray-50">
              Prev
            </button>
          </li>
          <li>
            <button class="px-4 py-2 hover:bg-blue-600 hover:text-gray-50 dark:text-gray-100 rounded dark:hover:bg-gray-700">
              1
            </button>
          </li>
          <li>
            <button class="bg-blue-400 px-4 py-2 text-gray-100 hover:bg-blue-600 hover:text-gray-50 rounded dark:bg-gray-600 dark:hover:bg-gray-700">
              ..
            </button>
          </li>
          <li>
            <button class="px-4 py-2 hover:bg-blue-600 hover:text-gray-50 dark:text-gray-100 rounded dark:hover:bg-gray-700">
              10
            </button>
          </li>
          <li>
            <button class="px-4 py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-gray-50">
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Services;
