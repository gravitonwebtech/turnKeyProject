import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide1 from "./SwappingImgs/Slide1.png";
import Slide2 from "./SwappingImgs/Slide2.png";
import Slide3 from "./SwappingImgs/Slide3.png";
import Location from "./SwappingImgs/Location.png";
import Calendar from "./SwappingImgs/Calendar.png";
import Icon1 from "./SwappingImgs/Amazing View.png";
import Icon2 from "./SwappingImgs/Amazing.png";
import Icon3 from "./SwappingImgs/Bungalow.png";
import Icon4 from "./SwappingImgs/Cabin.png";
import Icon5 from "./SwappingImgs/Cute tiny house.png";
import Icon6 from "./SwappingImgs/Farm House.png";
import Icon7 from "./SwappingImgs/Historical House.png";
import Icon8 from "./SwappingImgs/Luxury.png";
import Icon9 from "./SwappingImgs/Mansion.png";
import Icon10 from "./SwappingImgs/Ryokan.png";
import Icon11 from "./SwappingImgs/Swimming pool.png";
import Icon12 from "./SwappingImgs/Trending.png";
import Icon13 from "./SwappingImgs/Villa.png";

export default function Swapping() {
  const rows = [
    {
      images: [Slide1, Slide2, Slide3],
      heading: "4 BHK Villa + Swimming Pool",
      rating: "4.48",
      city: "Goa, India",
      location: "150 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide2, Slide3, Slide1],
      heading: "Mansion",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide3, Slide2, Slide1],
      heading: "2 BHK Bungalow",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide2, Slide1, Slide3],
      heading: "Mansion",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },

    {
      images: [Slide3, Slide2, Slide1],
      heading: "2 BHK Bungalow",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide1, Slide2, Slide3],
      heading: "4 BHK Villa + Swimming Pool",
      rating: "4.48",
      city: "Goa, India",
      location: "150 Km away",
      date: "7-12 Jan",
    },

    {
      images: [Slide1, Slide2, Slide3],
      heading: "Mansion",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },

    {
      images: [Slide2, Slide3, Slide1],
      heading: "2 BHK Bungalow",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide3, Slide2, Slide1],
      heading: "4 BHK Villa + Swimming Pool",
      rating: "4.48",
      city: "Goa, India",
      location: "150 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide2, Slide3, Slide1],
      heading: "Mansion",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide3, Slide2, Slide1],
      heading: "2 BHK Bungalow",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide1, Slide2, Slide3],
      heading: "4 BHK Villa + Swimming Pool",
      rating: "4.48",
      city: "Goa, India",
      location: "150 Km away",
      date: "7-12 Jan",
    },
  ];

  const rows1 = [
    {
      images: [Slide1, Slide2, Slide3],
      heading: "4 BHK Villa + Swimming Pool",
      rating: "4.48",
      city: "Goa, India",
      location: "150 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide2, Slide3, Slide1],
      heading: "Mansion",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide3, Slide2, Slide1],
      heading: "2 BHK Bungalow",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
  ];

  const rows2 = [
    {
      images: [Slide1, Slide2, Slide3],
      heading: "4 BHK Villa + Swimming Pool",
      rating: "4.48",
      city: "Goa, India",
      location: "150 Km away",
      date: "7-12 Jan",
    },
    {
      images: [Slide2, Slide3, Slide1],
      heading: "Mansion",
      rating: "3.68",
      city: "kerala, India",
      location: "2300 Km away",
      date: "7-12 Jan",
    },
  ];

  const [likedRows, setLikedRows] = useState({});
  const handleLikeClick = (rowIndex) => {
    setLikedRows((prevLikedRows) => {
      const updatedLikedRows = { ...prevLikedRows };
      const updatedRow = Array(3).fill(!prevLikedRows[rowIndex]?.[0]);
      updatedLikedRows[rowIndex] = updatedRow;
      return updatedLikedRows;
    });
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  const isSmallScreen = window.innerWidth <= 768;

  if (isSmallScreen) {
    sliderSettings.slidesToShow = 1;
  }

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const isSmallScreen2 = window.innerWidth <= 768;

  if (isSmallScreen2) {
    settings3.slidesToShow = 3;
  }

  const [toggle, setToggle] = useState(1);
  function Toggle(id) {
    setToggle(id);
  }

  return (
    <>
      <div className="mx-5 md:mx-10 mt-20">
        <Slider {...settings3}>
          <div
            className={`cursor-pointer ${toggle === 1 ? "active" : ""}`}
            onClick={() => Toggle(1)}
          >
            <div className="flex justify-center">
              <img src={Icon12} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">Trending</p>
            <div className="border-b-4 border-black mx-10 py-1"></div>
          </div>

          <div
            className={`cursor-pointer ${toggle === 2 ? "active" : ""}`}
            onClick={() => Toggle(2)}
          >
            <div className="flex justify-center">
              <img src={Icon2} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-medium text-center mt-3">
              Amazing views
            </p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 3 ? "active" : ""}`}
            onClick={() => Toggle(3)}
          >
            <div className="flex justify-center">
              <img src={Icon1} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-medium text-center mt-3">
              Amazing views
            </p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 4 ? "active" : ""}`}
            onClick={() => Toggle(4)}
          >
            <div className="flex justify-center">
              <img src={Icon3} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-medium text-center mt-3">Bungalow</p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 5 ? "active" : ""}`}
            onClick={() => Toggle(5)}
          >
            <div className="flex justify-center">
              <img src={Icon13} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-medium text-center mt-3">Villa</p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 6 ? "active" : ""}`}
            onClick={() => Toggle(6)}
          >
            <div className="flex justify-center">
              <img src={Icon9} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-medium text-center mt-3">Mansion</p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 7 ? "active" : ""}`}
            onClick={() => Toggle(7)}
          >
            <div className="flex justify-center">
              <img src={Icon7} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">
              Historical House
            </p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 8 ? "active" : ""}`}
            onClick={() => Toggle(8)}
          >
            <div className="flex justify-center">
              <img src={Icon4} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">Cabin</p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 9 ? "active" : ""}`}
            onClick={() => Toggle(9)}
          >
            <div className="flex justify-center">
              <img src={Icon6} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">Farm House</p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 10 ? "active" : ""}`}
            onClick={() => Toggle(10)}
          >
            <div className="flex justify-center">
              <img src={Icon5} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">
              Tiny Houses
            </p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 11 ? "active" : ""}`}
            onClick={() => Toggle(11)}
          >
            <div className="flex justify-center">
              <img src={Icon11} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">
              Amazing Pools
            </p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 12 ? "active" : ""}`}
            onClick={() => Toggle(12)}
          >
            <div className="flex justify-center">
              <img src={Icon8} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">Luxury</p>
          </div>

          <div
            className={`cursor-pointer ${toggle === 13 ? "active" : ""}`}
            onClick={() => Toggle(13)}
          >
            <div className="flex justify-center">
              <img src={Icon10} className="w-[40px] h-auto"></img>
            </div>
            <p className="text-sm font-semibold text-center mt-3">Ryokans</p>
          </div>
        </Slider>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 1 ? "block" : "hidden"
        }`}
      >
        {rows.map((rowData, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 2 ? "block" : "hidden"
        }`}
      >
        {rows1.map((rowData1, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData1.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData1.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 3 ? "block" : "hidden"
        }`}
      >
        {rows2.map((rowData2, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData2.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData2.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 4 ? "block" : "hidden"
        }`}
      >
        {rows1.map((rowData1, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData1.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData1.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 5 ? "block" : "hidden"
        }`}
      >
        {rows2.map((rowData2, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData2.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData2.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 6 ? "block" : "hidden"
        }`}
      >
        {rows1.map((rowData1, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData1.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData1.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10  mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 7 ? "block" : "hidden"
        }`}
      >
        {rows2.map((rowData2, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData2.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData2.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10  mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 8 ? "block" : "hidden"
        }`}
      >
        {rows1.map((rowData1, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData1.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData1.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10  mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 9 ? "block" : "hidden"
        }`}
      >
        {rows2.map((rowData2, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData2.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData2.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10  mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 10 ? "block" : "hidden"
        }`}
      >
        {rows1.map((rowData1, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData1.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData1.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 11 ? "block" : "hidden"
        }`}
      >
        {rows2.map((rowData2, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData2.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData2.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 12 ? "block" : "hidden"
        }`}
      >
        {rows1.map((rowData1, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData1.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData1.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData1.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData1.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-10 lg:mx-20 mt-10 ${
          toggle === 13 ? "block" : "hidden"
        }`}
      >
        {rows2.map((rowData2, rowIndex) => (
          <div key={rowIndex} className="mb-5">
            <Slider {...sliderSettings}>
              {rowData2.images.map((image, index) => (
                <div key={index} className="w-full relative">
                  <img src={image} alt="" className="w-full" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => handleLikeClick(rowIndex)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-xl ${
                        likedRows[rowIndex]?.[0] ? "text-red-500" : "text-white"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="grid grid-cols-12 gap-5 mt-2">
              <div className="col-span-9">
                <h1
                  className="text-black font-semibold text-sm md:text-lg"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.heading}
                </h1>
              </div>
              <div className="col-span-3 flex justify-end">
                <FontAwesomeIcon icon={faStar} className="w-3 pr-2" />
                <h1
                  className="text-sm md:text-md font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {rowData2.rating}
                </h1>
              </div>
            </div>

            <h1
              className="text-black font-semibold text-sm md:text-md mt-1"
              style={{ fontFamily: "Poppins" }}
            >
              {rowData2.city}
            </h1>

            <div className="flex mt-2" style={{ fontFamily: "Poppins" }}>
              <div className="">
                <img src={Location} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.location}
              </div>
            </div>

            <div className="flex mt-2">
              <div className="">
                <img src={Calendar} alt="" className="w-3/4" />
              </div>

              <div className="font-medium text-[#959595] text-xs pl-2">
                {rowData2.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
