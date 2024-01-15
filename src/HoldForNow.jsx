import React, { useState } from "react";
import Slide1 from "./Images/Slide1.png";
import Slide2 from "./Images/Slide2.png";
import Slide3 from "./Images/Slide3.png";
import Location from "./Images/Location.png";
import Calendar from "./Images/Calendar.png";
import {
  faCalendar,
  faHeart,
  faLocation,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HoldForNow() {
  const [likedProperties, setLikedProperties] = useState([]);

  const handleLikeClick = (propertyId) => {
    setLikedProperties((prevLikedProperties) => {
      if (prevLikedProperties.includes(propertyId)) {
        return prevLikedProperties.filter((id) => id !== propertyId);
      } else {
        return [...prevLikedProperties, propertyId];
      }
    });
  };

  const propertiesData = [
    {
      id: 1,
      image: Slide1,
      title: "4 BHK Villa + Swimming Pool",
      rating: 4.68,
      location: "Goa, India",
      distance: "150 Km away",
      description:
        "Location is Huahin soi 88.Hua Hin vacation home style minimalist. private Suitable for guests who are couples up to 4 couples and can also sleep up to 8-12 persons (Maximum 12 persons)",
      date: "7-12 Jan",
    },

    {
      id: 2,
      image: Slide2,
      title: "4 BHK Villa + Swimming Pool",
      rating: 4.68,
      location: "Goa, India",
      distance: "150 Km away",
      description:
        "Location is Huahin soi 88.Hua Hin vacation home style minimalist. private Suitable for guests who are couples up to 4 couples and can also sleep up to 8-12 persons (Maximum 12 persons)",
      date: "7-12 Jan",
    },

    {
      id: 3,
      image: Slide3,
      title: "4 BHK Villa + Swimming Pool",
      rating: 4.68,
      location: "Goa, India",
      distance: "150 Km away",
      description:
        "Location is Huahin soi 88.Hua Hin vacation home style minimalist. private Suitable for guests who are couples up to 4 couples and can also sleep up to 8-12 persons (Maximum 12 persons)",
      date: "7-12 Jan",
    },

    {
      id: 4,
      image: Slide1,
      title: "4 BHK Villa + Swimming Pool",
      rating: 4.68,
      location: "Goa, India",
      distance: "150 Km away",
      description:
        "Location is Huahin soi 88.Hua Hin vacation home style minimalist. private Suitable for guests who are couples up to 4 couples and can also sleep up to 8-12 persons (Maximum 12 persons)",
      date: "7-12 Jan",
    },

    {
      id: 5,
      image: Slide2,
      title: "4 BHK Villa + Swimming Pool",
      rating: 4.68,
      location: "Goa, India",
      distance: "150 Km away",
      description:
        "Location is Huahin soi 88.Hua Hin vacation home style minimalist. private Suitable for guests who are couples up to 4 couples and can also sleep up to 8-12 persons (Maximum 12 persons)",
      date: "7-12 Jan",
    },
  ];

  return (
    <>
      {propertiesData.map((property) => (
        <div
          key={property.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 xl:mx-44 mt-10 md:mt-20"
        >
          <div className="md:col-span-3">
            <div className="relative w-full">
              <img src={property.image} alt="" className="w-full" />
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => handleLikeClick(property.id)}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-2xl md:text-xl ${
                    likedProperties.includes(property.id)
                      ? "text-red-500"
                      : "text-white"
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-2">
              <div className="">
                <h1
                  className="font-semibold text-md sm:text-lg md:text-xl lg:text-xl xl:text-3xl"
                  style={{ fontFamily: "Poppins" }}
                >
                  {property.title}
                </h1>
              </div>

              <div className="flex justify-end">
                <h1 className="mt-2 " style={{ fontFamily: "Poppins" }}>
                  <FontAwesomeIcon icon={faStar} className="" />
                  <span className="font-medium text-md pl-3">
                    {property.rating}
                  </span>
                </h1>
              </div>
            </div>

            <p
              className="font-regular text-sm xl:text-base mt-1 xl:mt-4 lg:w-[600px] text-justify"
              style={{ fontFamily: "Poppins" }}
            >
              {property.description}
            </p>
            <h1
              className="font-semibold text-md sm:text-lg md:text-xl xl:text-2xl mt-1 xl:mt-4"
              style={{ fontFamily: "Poppins" }}
            >
              {property.location}
            </h1>

            <div
              className="flex mt-1 xl:mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              <div className="">
                <img src={Location} alt="" />
              </div>

              <div className="font-medium text-[#959595] xl:text-md pl-3">
                {property.distance}
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 gap-5"
              style={{ fontFamily: "Poppins" }}
            >
              <div className="mt-1 xl:mt-2 md:col-span-3 xl:col-span-6">
                <div className="flex">

                  <div className="">
                    <img src={Calendar} alt="" />
                  </div>

                  <div className="font-medium text-[#959595] xl:text-md pl-3">
                    {property.date}
                  </div>
                </div>
              </div>
              <div className="md:col-span-9 xl:col-span-6 hidden sm:block">
                <button className="border border-[#09A350] rounded-[5px] px-4 py-2 text-[#09A350] font-medium text-sm">
                  Remove from the list
                </button>
                <button className="bg-[#09A350] text-white font-medium text-sm rounded-[5px] px-4 py-2 ml-4">
                  Move in this property
                </button>
              </div>
              <div className="block sm:hidden">
                <p>
                  <button className="w-full border border-[#09A350] rounded-[5px] px-4 py-2 text-[#09A350] font-medium text-sm">
                    Remove from the list
                  </button>
                </p>

                <p>
                  <button className="w-full bg-[#09A350] text-white font-medium text-sm rounded-[5px] px-4 py-2 mt-4">
                    Move in this property
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HoldForNow;
