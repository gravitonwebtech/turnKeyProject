import React, { useState } from "react";
import detail1 from "./Images/DetailImg1.png";
import detail2 from "./Images/DetailImg2.png";
import detail3 from "./Images/DetailImg3.png";
import {
  faCaretDown,
  faHeart,
  faHeartbeat,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Share from "./Images/Share.svg";
import Avatar from "./Images/Avatar.svg";
import detail4 from "./Images/detailImg4.svg";
import Arrow from "./Images/Arrow.svg";
import Videocall from "./Images/Videocall.svg";
import Message from "./Images/Message.svg";
import NotFound from "./Images/Notfound.svg";

export default function Detailed() {
  const [isLikedDiv1, setIsLikedDiv1] = useState(false);

  const handleLikeClickDiv1 = () => {
    setIsLikedDiv1(!isLikedDiv1);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10 md:mt-20">
        <div className="md:col-span-8">
          <div className="h-full relative">
            <img src={detail1} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute top-5 right-5 cursor-pointer flex items-center space-x-3"
              onClick={handleLikeClickDiv1}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`text-2xl md:text-xl ${
                  isLikedDiv1 ? "text-red-500" : "text-white"
                }`}
              />
              <img src={Share} alt="" className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="mb-5">
            <img src={detail2} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative">
            <img src={detail3} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-5 right-10 cursor-pointer">
              <button className="text-white border border-white rounded-[3px] px-3 py-1">
                More +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-20 lg:mx-28 mt-10">
        <div className="">
          <h1
            className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            Villa + Swimming Pool
          </h1>
          <h1
            className="font-medium text-sm mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            8 guests-4bedrooms-6beds-1bathroom
          </h1>
          <div className="flex space-x-3 mt-5">
            <div className="">
              <img src={Avatar} alt="" />
            </div>

            <div className="">
              <h1
                className="font-medium text-sm mt-2"
                style={{ fontFamily: "Poppins" }}
              >
                Posted by <b>Swann Eliza</b>
              </h1>
              <h1
                className="font-medium text-[#707070] text-sm "
                style={{ fontFamily: "Poppins" }}
              >
                2 Days ago
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <img src={detail4} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 ">
        <div className="md:col-span-8">
          <div className="border-b-2 border-[#9E9E9E] my-8"></div>
          <h1
            className="font-semibold text-lg md:text-xl lg:text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            About This Property
          </h1>
          <p
            className="text-sm font-regular mt-4 text-justify"
            style={{ fontFamily: "Poppins" }}
          >
            Location is Huahin soi 88.Hua Hin vacation home style minimalist.
            private Suitable for guests who are couples up to 4 couples and can
            also sleep up to 8-12 persons (Maximum 12 persons)
          </p>
          <p
            className="text-sm font-regular text-justify mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            The space 4 bedrooms with en-suite bathrooms and (2 Bedrooms with a
            soaking tub) 2 water systems, hot and cold .Private holiday home on
            an area of 1 rai 60 wa. Pool villa style minimalist ,Two salt system
            swimming pools, 7×2.5 meters and 8×5 meters, kitchen with full
            kitchen equipment , Living room with karaoke , dining room .Standard
            Poolside Table With a bar zone to chill.5 Smart TV + Complete
            electrical appliances. Free Wi-fi , 6 air conditioners, BBQ grill
            and outdoor seating zone , Mountain view.(Maximum 12 ppl)4 bedrooms-
            2 bedrooms with soaking tubsCan sleep 2 people, Queen size bedwith
            ensuite bathroom- The other 2 bedrooms are bedrooms that can sleep
            3-4 people , 1 single bed and King size bed with ensuite bathroom.
          </p>
          <p
            className="text-sm font-regular text-justify mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            Guest access
          </p>
          <p
            className="text-sm font-regular text-justify mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            - 4 Bedrooms– Private holiday home on an area of 1 rai 60 wa– Usable
            area 412 square meters– Private Poolvilla style minimalist– Two salt
            system swimming pools, 7×2.5 meters and 8×5 meters.– desert style
            garden- 5 bathrooms with water heater, shower cream, shampoo,
            toothbrush, towels, hair dryer, bathrobes, slippers-1 kitchen with
            full kitchen equipment-1 Living room with sound system and karaoke-1
            dining room– Standard Poolside Table With a bar zone to chill– 5
            Smart TV.– Complete electrical appliances-Wi-fi– 6 air conditioners,
            4 15000BTU air conditioners, 2 4-way 45000BTU air conditioners.– BBQ
            grill and outdoor seating zone– Mountain view– 10 minutes from the
            sea
          </p>
          <p
            className="text-sm font-regular text-justify mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            Other things to note
          </p>
          <p
            className="text-sm font-regular text-justify mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            -No breakfast-No pets allowed-No smoking inside the house.-Do not
            stay more than the stated number and no extra bed is provided.Free
            ice 1 bucket 80 liters/nightDrinking water 1 pack/nightCharcoal for
            grill 2 pack/night*Private Pool villa**Maximum 12 persons*Check-in 3
            PMCheck-out 12 PM(security deposit 5,000 THB Cash Only)
          </p>

          <h1
            className="font-semibold text-lg md:text-xl lg:text-2xl mt-5"
            style={{ fontFamily: "Poppins" }}
          >
            What This Place Offers
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <p className="flex items-center mt-3">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Garden View
                </h1>
              </p>

              <p className="flex items-center mt-2">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Kitchen
                </h1>
              </p>

              <p className="flex items-center mt-2">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Dedicated Workspace
                </h1>
              </p>

              <p className="flex items-center mt-2">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Private outdoor pool available all years,<br></br>open 24
                  hours
                </h1>
              </p>

              <p className="flex items-center mt-2">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  <s>Carbormonoxide alarm</s>
                </h1>
              </p>
            </div>

            <div className="">
              <p className="flex items-center mt-2">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Mountain View
                </h1>
              </p>

              <p className="flex items-center mt-2">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Wifi
                </h1>
              </p>

              <p className="flex items-center mt-2">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Free parking on primises
                </h1>
              </p>

              <p className="flex items-center mt-2 md:mt-4">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Security cameras on property
                </h1>
              </p>

              <p className="flex items-center mt-2 md:mt-8">
                <img src={NotFound} alt="" className="mr-2" />
                <h1
                  className="text-[#767676] text-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  <s>Smoke alarm</s>
                </h1>
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="border border-gray-100 bg-white rounded-[20px] shadow-xl p-5">
            <div className="border border-[#A5A5A5] rounded">
              <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="border-r-2 pr-4 p-3">
                  <h1
                    className="font-semibold text-[12px] sm:text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    GEETING-IN
                  </h1>
                  <h1
                    className="font-regular text-sm text-[#8A8A8A] mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    DD/MM/YYYY
                  </h1>
                </div>
                <div className="pl-4 p-3">
                  <h1
                    className="font-semibold text-[12px] sm:text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    GEETING-OUT
                  </h1>
                  <h1
                    className="font-regular text-sm text-[#8A8A8A] mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    DD/MM/YYYY
                  </h1>
                </div>
              </div>

              <div className="border border-[#A5A5A5]"></div>
              <div className="p-3">
                <h1
                  className="font-semibold text-[12px] sm:text-sm"
                  style={{ fontFamily: "Poppins" }}
                >
                  GUESTS
                </h1>
                {/* <div className="mt-2 flex ">
                  <input
                    type="text"
                    id="guestsInput"
                    name="guestsInput"
                    className=" w-full"
                    placeholder="I guest"
                  />
                  <div className="relative flex justify-end">
                    <img src={Arrow} alt="" className="cursor-pointer" />
                  </div>
                </div> */}

                <select
                  id="selectOption"
                  name="guestsInput"
                  className="w-full mt-2 focus:outline-none hover:border-transparent"
                >
                  <option value="">I guest</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[#09A350] mt-4 px-5 py-3 rounded-[8px] text-white text-[12px] sm:text-md font-semibold"
              >
                <img src={Message} alt="" className="h-5 w-5 mr-3" />
                MESSAGE
              </button>
            </div>

            <div className="">
              <button
                type="submit"
                className="w-full flex items-center justify-center border border-[#09A350] mt-4 px-5 py-3 rounded-[8px] text-[#09A350] text-[12px] sm:text-md font-semibold"
              >
                <img src={Videocall} alt="" className="h-5 w-5 mr-3" />
                REQUEST A VIRTUAL TOUR
              </button>
            </div>

            <div className="flex items-center mt-3">
              <img src={NotFound} alt="" className="mr-2" />
              <h1
                className="text-[#A7A7A7] text-[12px] font-regular"
                style={{ fontFamily: "Poppins" }}
              >
                Both hosts need to be liked mutually in order to contact
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 md:mx-20 lg:mx-28 border border-[#9E9E9E] my-10"></div>
      <div className="text-center">
        <h1
          className="text-[#09A350] font-semibold text-lg md:text-xl lg:text-2xl"
          style={{ fontFamily: "Poppins" }}
        >
          See what other swappers said about this property
        </h1>
        <p
          className="text-[#767676] text-sm font-regular mt-2"
          style={{ fontFamily: "Poppins" }}
        >
          One of the most loved homes on Turn Keys based on ratings, reviews and
          reliability
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20 mx-5 md:mx-20 lg:mx-28 mt-10">
        <div className="">
          <div className="flex space-x-3">
            <div className="">
              <img src={Avatar} alt="" />
            </div>

            <div className="">
              <h1
                className="font-medium text-sm mt-2"
                style={{ fontFamily: "Poppins" }}
              >
                <b>Gienn</b>
              </h1>
              <h1
                className="font-medium text-[#707070] text-sm "
                style={{ fontFamily: "Poppins" }}
              >
                Singapore
              </h1>
            </div>
          </div>
          <h1
            className="font-medium text-sm mt-3"
            style={{ fontFamily: "Poppins" }}
          >
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <span className="pl-3">- November 2023</span>
            <span className="pl-3 text-[#767676]">- Group Trip</span>
          </h1>
          <p
            className="mt-2 text-[#767676] text-[12px] text-justify"
            style={{ fontFamily: "Poppins" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aspernatur voluptatem blanditiis laboriosam, quia
            nostrum beatae non eum mollitia dignissimos.
          </p>
          <h1
            className="font-semibold text-md mt-3"
            style={{ fontFamily: "Poppins" }}
          >
            Show More
          </h1>
        </div>

        <div className="">
          <div className="flex space-x-3">
            <div className="">
              <img src={Avatar} alt="" />
            </div>

            <div className="">
              <h1
                className="font-medium text-sm mt-2"
                style={{ fontFamily: "Poppins" }}
              >
                <b>To</b>
              </h1>
              <h1
                className="font-medium text-[#707070] text-sm "
                style={{ fontFamily: "Poppins" }}
              >
                Hang Kong
              </h1>
            </div>
          </div>
          <h1
            className="font-medium text-sm mt-3"
            style={{ fontFamily: "Poppins" }}
          >
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <span className="pl-3">- November 2023</span>
            <span className="pl-3 text-[#767676]">- Group Trip</span>
          </h1>
          <p
            className="mt-2 text-[#767676] text-[12px] text-justify"
            style={{ fontFamily: "Poppins" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aspernatur voluptatem blanditiis laboriosam, quia
            nostrum beatae non eum mollitia dignissimos.
          </p>
          <h1
            className="font-semibold text-md mt-3"
            style={{ fontFamily: "Poppins" }}
          >
            Show More
          </h1>
        </div>

        <div className="">
          <div className="flex space-x-3">
            <div className="">
              <img src={Avatar} alt="" />
            </div>

            <div className="">
              <h1
                className="font-medium text-sm mt-2"
                style={{ fontFamily: "Poppins" }}
              >
                <b>Gienn</b>
              </h1>
              <h1
                className="font-medium text-[#707070] text-sm "
                style={{ fontFamily: "Poppins" }}
              >
                Singapore
              </h1>
            </div>
          </div>
          <h1
            className="font-medium text-sm mt-3"
            style={{ fontFamily: "Poppins" }}
          >
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
            <span className="pl-3">- November 2023</span>
            <span className="pl-3 text-[#767676]">- Group Trip</span>
          </h1>
          <p
            className="mt-2 text-[#767676] text-[12px] text-justify"
            style={{ fontFamily: "Poppins" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aspernatur voluptatem blanditiis laboriosam, quia
            nostrum beatae non eum mollitia dignissimos.
          </p>
          <h1
            className="font-semibold text-md mt-3"
            style={{ fontFamily: "Poppins" }}
          >
            Show More
          </h1>
        </div>
      </div>

      <div className=" mx-5 md:mx-20 lg:mx-28 mt-5 mb-5">
        <button
          type="submit"
          className="border border-[#09A350] px-5 py-1 rounded-[4px] text-[#09A350] text-[12px] sm:text-md font-semibold"
        >
          View More
        </button>
      </div>
    </>
  );
}
