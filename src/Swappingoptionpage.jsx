import React, { useState } from "react";
import image1 from "./ServicesImages/image1.png";
import image2 from "./ServicesImages/image2.png";
import image3 from "./ServicesImages/image3.png";
import image4 from "./ServicesImages/image4.png";
import image5 from "./ServicesImages/image5.png";
import image7 from "./ServicesImages/image 7.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Swappingoptionpage = () => {
//   const [like, setLike] = useState(false);
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
  const settings1 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
      

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 mt-40 mx-10 sm:mx-15 md:mx-20 lg:mx-28 gap-10">
       
          <div>
          <Slider {...settings1}>
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
            </Slider>
          </div>
          
          <div className="col-span-3 mt-5">
            <div className="grid grid-cols-4">
              <div className="col-span-3 ">
                <h1 className="font-bold">4 BHK Villa + Swimming Pool</h1>
                <p>
                  Location is Huahin soi 88.Hua Hin vacation home style
                  minimalist. private Suitable for guests who are couples up to
                  4 couples and can also sleep up to 8-12 persons (Maximum 12
                  persons)
                </p>
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
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold ">Goa, India</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#959595]">
                    <p className="flex ">
                      <CiLocationOn />
                      150 Km away
                    </p>
                    <br />
                    <p className="flex mt-[-18px]">
                      <MdDateRange />
                      7-12 Jan
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary border border-green-500  text-green-500 hover:bg-[#09A350] hover:text-white  p-3 gap-10 rounded-lg"
                >
                  Remove from the list
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-green-500 hover:bg-[#09A350] text-white p-3 rounded-lg ml-4"
                >
                  Move in this property
                </button>
              </div>
            </div>
          </div>

          <div className="blog-effect-box relative top-0 right-0">
              <img src={image2} alt="" />
              <div
                className="heart-icon absolute top-10 right-10 text-2xl"
                onClick={() => handleLike("post3")}
              >
                {likes.post3 ? <FaHeart /> : <FaRegHeart />}
              </div>
              <div className="blog-effect-layer"></div>
            </div>
            <div className="col-span-3 mt-5">
            <div className="grid grid-cols-4">
              <div className="col-span-3 ">
                <h1 className="font-bold">4 BHK Villa + Swimming Pool</h1>
                <p>
                  Location is Huahin soi 88.Hua Hin vacation home style
                  minimalist. private Suitable for guests who are couples up to
                  4 couples and can also sleep up to 8-12 persons (Maximum 12
                  persons)
                </p>
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
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold ">Goa, India</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#959595]">
                    <p className="flex ">
                      <CiLocationOn />
                      150 Km away
                    </p>
                    <br />
                    <p className="flex mt-[-18px]">
                      <MdDateRange />
                      7-12 Jan
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary border border-green-500  text-green-500 hover:bg-[#09A350] hover:text-white  p-3 gap-10 rounded-lg"
                >
                  Remove from the list
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-green-500 hover:bg-[#09A350] text-white p-3 rounded-lg ml-4"
                >
                  Move in this property
                </button>
              </div>
            </div>
          </div>

          <div className="blog-effect-box relative top-0 right-0">
              <img src={image3} alt="" />
              <div
                className="heart-icon absolute top-10 right-10 text-2xl"
                onClick={() => handleLike("post4")}
              >
                {likes.post4 ? <FaHeart /> : <FaRegHeart />}
              </div>
              <div className="blog-effect-layer"></div>
            </div>
            <div className="col-span-3 mt-5">
            <div className="grid grid-cols-4">
              <div className="col-span-3 ">
                <h1 className="font-bold">4 BHK Villa + Swimming Pool</h1>
                <p>
                  Location is Huahin soi 88.Hua Hin vacation home style
                  minimalist. private Suitable for guests who are couples up to
                  4 couples and can also sleep up to 8-12 persons (Maximum 12
                  persons)
                </p>
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
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold ">Goa, India</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#959595]">
                    <p className="flex ">
                      <CiLocationOn />
                      150 Km away
                    </p>
                    <br />
                    <p className="flex mt-[-18px]">
                      <MdDateRange />
                      7-12 Jan
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary border border-green-500  text-green-500 hover:bg-[#09A350] hover:text-white  p-3 gap-10 rounded-lg"
                >
                  Remove from the list
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-green-500 hover:bg-[#09A350] text-white p-3 rounded-lg ml-4"
                >
                  Move in this property
                </button>
              </div>
            </div>
          </div>
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
            <div className="col-span-3 mt-5">
            <div className="grid grid-cols-4">
              <div className="col-span-3 ">
                <h1 className="font-bold">4 BHK Villa + Swimming Pool</h1>
                <p>
                  Location is Huahin soi 88.Hua Hin vacation home style
                  minimalist. private Suitable for guests who are couples up to
                  4 couples and can also sleep up to 8-12 persons (Maximum 12
                  persons)
                </p>
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
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold ">Goa, India</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#959595]">
                    <p className="flex ">
                      <CiLocationOn />
                      150 Km away
                    </p>
                    <br />
                    <p className="flex mt-[-18px]">
                      <MdDateRange />
                      7-12 Jan
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary border border-green-500  text-green-500 hover:bg-[#09A350] hover:text-white  p-3 gap-10 rounded-lg"
                >
                  Remove from the list
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-green-500 hover:bg-[#09A350] text-white p-3 rounded-lg ml-4"
                >
                  Move in this property
                </button>
              </div>
            </div>
          </div>
          <div className="blog-effect-box relative top-0 right-0">
              <img src={image5} alt="" />
              <div
                className="heart-icon absolute top-10 right-10 text-2xl"
                onClick={() => handleLike("post6")}
              >
                {likes.post6 ? <FaHeart /> : <FaRegHeart />}
              </div>
              <div className="blog-effect-layer"></div>
            </div>
            <div className="col-span-3 mt-5">
            <div className="grid grid-cols-4">
              <div className="col-span-3 ">
                <h1 className="font-bold">4 BHK Villa + Swimming Pool</h1>
                <p>
                  Location is Huahin soi 88.Hua Hin vacation home style
                  minimalist. private Suitable for guests who are couples up to
                  4 couples and can also sleep up to 8-12 persons (Maximum 12
                  persons)
                </p>
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
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold ">Goa, India</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#959595]">
                    <p className="flex ">
                      <CiLocationOn />
                      150 Km away
                    </p>
                    <br />
                    <p className="flex mt-[-18px]">
                      <MdDateRange />
                      7-12 Jan
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary border border-green-500  text-green-500 hover:bg-[#09A350] hover:text-white  p-3 gap-10 rounded-lg"
                >
                  Remove from the list
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-green-500 hover:bg-[#09A350] text-white p-3 rounded-lg ml-4"
                >
                  Move in this property
                </button>
              </div>
            </div>
          </div>
          <div className="blog-effect-box relative top-0 right-0">
              <img src={image2} alt="" />
              <div
                className="heart-icon absolute top-10 right-10 text-2xl"
                onClick={() => handleLike("post8")}
              >
                {likes.post8 ? <FaHeart /> : <FaRegHeart />}
              </div>
              <div className="blog-effect-layer"></div>
            </div>
            <div className="col-span-3 mt-5">
            <div className="grid grid-cols-4">
              <div className="col-span-3 ">
                <h1 className="font-bold">4 BHK Villa + Swimming Pool</h1>
                <p>
                  Location is Huahin soi 88.Hua Hin vacation home style
                  minimalist. private Suitable for guests who are couples up to
                  4 couples and can also sleep up to 8-12 persons (Maximum 12
                  persons)
                </p>
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
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold ">Goa, India</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#959595]">
                    <p className="flex ">
                      <CiLocationOn />
                      150 Km away
                    </p>
                    <br />
                    <p className="flex mt-[-18px]">
                      <MdDateRange />
                      7-12 Jan
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary border border-green-500  text-green-500 hover:bg-[#09A350] hover:text-white  p-3 gap-10 rounded-lg"
                >
                  Remove from the list
                </button>
                <button
                  type="button"
                  className="btn btn-primary bg-green-500 hover:bg-[#09A350] text-white p-3 rounded-lg ml-4"
                >
                  Move in this property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swappingoptionpage;
