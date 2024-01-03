import React, { useState, useEffect } from "react";
import bannerimage from "./Images/bannerimage.png";
import test from "./Images/test.png";
import bro from "./Images/bro.png";
import bro1 from "./Images/bro1.png";
import bro2 from "./Images/bro2.png";
import bro3 from "./Images/bro3.png";
import bro4 from "./Images/bro4.png";
import home1 from "./Images/home1.png";
import home2 from "./Images/home2.png";
import home3 from "./Images/home3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import lines from "./Images/lines.png";
import left from "./Images/Left.png";
import Right from "./Images/Right.png";
import Grid from "./Images/Grid.png";
import { FaArrowRight } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const Home = () => {
  const buttons = [
    "Global Community",
    "Personalized Matches",
    "Discover Your Perfect Home Exchange",
  ];

  const [currentButton, setCurrentButton] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentButton((prev) => (prev + 1) % buttons.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentButton]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show one card at a time
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 300, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 374, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 470, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Your JSX code using the Slider with the updated settings
  <div className="mt-20 px-4">
    <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
    <Slider {...settings}>{/* Testimonial cards go here */}</Slider>
  </div>;

  const starRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-green-500" />
      );
    }
    return stars;
  };
  useEffect(() => {
    ScrollReveal().reveal(".home-animate-card", {
      duration: 3000,
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      reset: true,
      mobile: true,
      scale: 0.5,
      viewFactor: 0.3,
      once: true, // Added once option
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".home-animate-card1", {
      duration: 3000,
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      reset: true,
      mobile: true,
      scale: 0.5,
      viewFactor: 0.3,
      once: true, // Added once option
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".home-animate-card2", {
      duration: 3000,
      origin: "top",
      distance: "300px",
      easing: "ease-in-out",
      reset: true,
      mobile: true,
      scale: 0.5,
      viewFactor: 0.3,
      once: true, // Added once option
    });
  }, []);
  return (
    <>
      {/* banner */}
      <div className="container mx-auto bg-[#E3F8FC] opacity mt-[73px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-4 sm:mx-6 md:mx-10  ">
          <div className="p-4 mt-20 home-animate-card">
            <h1
              className="text-xl sm:text-xl md:text-xl lg:text-5xl"
              style={{
                fontFamily: "Baumans",
                lineHeight: "1.2",
                marginTop: "20px",
              }}
            >
              Unlock the Door to
              <br className="text-left" /> Your Next Adventure{" "}
              <br className="text-left" />
              with <span className="text-[#09A350] font-bold">Turn Keys.</span>
            </h1>
            <p className="text-left  text-sm sm:text-sm md:text-sm lg:text-md mt-5 md:mt-3 ml-4 md:ml-0">
              Turn Keys is not just a platform; it's a community of like-minded
              individuals sharing the joy of exploration and discovery. Your
              dream house swap is just a click away.
            </p>

            {/* Email Field and Buttons */}
            <div className="mt-6 md:mt-16 flex flex-col sm:flex-row items-center relative">
              <div className="flex-grow sm:flex-grow-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md focus:outline-none"
                />

                <button className="bg-[#09A350] text-white px-4 py-2  rounded-md animate-fade-in-out hover:bg-white hover:text-green-500 hover:font-bold hover:border border-green-500">
                  Get Started <FaArrowRight className="ml-28 mt-[-18px]" />
                </button>

                {/* Horizontal Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-500 text-bold w-2/3"></div>
              </div>

              {/* Horizontal Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-500  text-bold  w-2/3"></div>
            </div>
          </div>

          {/* Second Column */}
          <div className="p-4 relative flex items-center flex-col">
            <img src={bannerimage} alt="image" className="w-full mt-4 home-animate-card1" />
            {buttons.map((buttonContent, index) => (
              <button
                key={index}
                className={`absolute bottom-20 left-0 m-4 bg-[#09A350]   text-white w-1/2  p-2 rounded-lg ${
                  index === currentButton ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                {buttonContent}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* banner */}

      {/* hero */}
      <div className="container-fluid relative mx-auto bg-black text-white p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-10 sm:mx-6 md:mx-10 lg:mx-20">
          <div className="text-center">
            {/* Centering the image */}
            <img src={test} alt="image"  className="home-animate-card1"/>
          </div>
          <div className="mt-[90px] font-poppins ">
            <button className="bg-[#9E9E9E] opacity-100 grid content-left text-white py-1 px-3 rounded">
              The smart way to Exchange Houses
            </button>

            <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl mt-2 text-left  ">
              Ready to Swap
            </h5>
            <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl mt-2 text-left">
              Homes and
            </h5>
            <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl mt-2 text-left">
              Create Memories?
            </h5>
            <p className="text-left mt-10 leading-60">
              Become part of a community that values trust, diversity, and
              unforgettable experiences. Find your perfect match with detailed
              profiles and customizable search filters.
            </p>
            <button className="bg-[#09A350] grid content-left mt-[50px] home-animate-card2 text-white font-bold py-2 px-4 rounded">
              I want to Exchange My Home
            </button>
          </div>
        </div>
        <img
          src={lines}
          alt="image"
          className="absolute bottom-0 right-0 w-[300px] h-[400px] hidden md:block"
        />
      </div>

      {/* hero */}

      {/* second section */}
      <div className="flex justify-center items-center">
        <button className="bg-[#9E9E9E] opacity-100 text-center text-white py-1 px-3 mt-[40px] rounded">
          The Secret to Home Exchanging
        </button>
      </div>

      <h1 className="text-5xl mt-[50px] font-poppins text-center  text-sm sm:text-sm md:text-sm lg:text-5xl ">
        Discover the Magic: Your Guide to Turn
        <br /> Keys' Operation
      </h1>
      <div className="container mx-auto bg-[#FFFFFF] ">
        {/* Step 1: Registration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-10 mx-5 sm:mx-10 md:mx-20 lg:mx-28 gap-70">
          <div className="flex flex-col justify-center ">
            <h1 className="text-3xl text-[#09A350] font-poppins font-bold mb-6 ">
              Step 1: Registration
            </h1>
            <ul className="list-disc list-inside space-y-2 ">
              <li>Sign up for free with basic details.</li>
              <li className="">
                Verify your identity for a secure
                <br /> community.
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-6">
              <img src={bro} alt="image" className="w-48 h-48 home-animate-card1" />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-10 border-t-1 border-gray-300" />

        {/* Step 2: Create Your Profile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-10 gap-70 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
          <div className="flex flex-col justify-center ">
            <h1 className="text-3xl text-[#09A350] font-poppins font-bold mb-6 text-left">
              Step 2: Create Your Profile
            </h1>
            <ul className="list-disc list-inside space-y-2 ">
              <li className="">
                Craft a detailed profile showcasing your property and
                <br />
                preferences.
              </li>
              <li className="">
                Add high-quality photos to make your listing stand out.
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-6">
              <img src={bro1} alt="image" className="w-48 h-48 home-animate-card1" />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-10 border-t-1 border-gray-300" />

        {/* Step 3: Explore Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-70 mt-10 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
          <div className="flex flex-col justify-center ">
            <h1 className="text-3xl text-[#09A350] font-poppins font-bold mb-6 text-left">
              Step 3: Explore Listings
            </h1>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li className="">
                Browse through a diverse range of properties.
              </li>
              <li className="">
                Use filters to find the perfect match for your next <br />
                house swap, in case our AI Schema is set in <br />
                such a way, you can get your desired houses.
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-6">
              <img src={bro2} alt="image" className="w-48 h-48 home-animate-card1" />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-10 border-t-1 border-gray-300" />

        {/* Step 4: Swap */}
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-70 mx-5 sm:mx-10 md:mx-20 lg:mx-28">
            <div className="flex flex-col ">
              <h1 className="text-3xl text-[#09A350] font-poppins font-bold mb-2 text-left">
                Step 4: Swap
              </h1>
              <ul className="list-disc list-inside space-y-2  text-left">
                <li>
                  Get lots of Exchanging Home options with our AI-based filter.
                </li>
                <li>
                  Discuss potential swaps and get to know your exchange
                  <br />
                  partners.
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className=" pl-6">
                <img src={bro3} alt="image" className="w-48 h-48 home-animate-card1" />
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="my-10 border-t-1 border-gray-300" />

          {/* Step 5: Initiate Contact and Confirm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 mx-5 sm:mx-10 md:mx-20 lg:mx-28 gap-70">
            <div className="flex flex-col justify-center ">
              <h1 className="text-3xl text-[#09A350] font-poppins font-bold mb-6  text-left">
                Step 5: Initiate Contact and Confirm
              </h1>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li className="">
                  Connect with homeowners through secure messaging.
                </li>
                <li>Finalize the details and terms of your house swap.</li>
                <li className="">
                  Enjoy a seamless and secure exchange experience.
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className=" pl-6">
                <img src={bro4} alt="image" className="w-48 h-48 home-animate-card1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sceond section */}

      {/* third section */}
      <div className=" bg-[#E3F8FC] opacity-44 p-10 mt-[80px]">
        <h1 className="text-5xl mt-[80px] text-xl home-animate-card2 sm:text-2xl md:text-3xl lg:text-6xl text-center">
          Features That Set Us Apart
        </h1>
        <div className="container mx-auto bg-[EAFAEF] font-poppins">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-10 md:mx-20 lg:mx-28  mt-20">
            <div className="text-center ">
              <img src={home1} alt="image" className="w-48 h-48 mb-4 mx-auto home-animate-card2" />
              <h1 className="text-xl font-bold mb-2">Trusted and Secure</h1>
              <p className="text-sm">
                Your safety is our priority. Our rigorous identity verification
                process ensures that you can trust the Turn Keys community.
                Secure communication and payment systems provide peace of mind
                throughout the exchange process.
              </p>
            </div>
            <div className="text-center ">
              <img src={home2} alt="image" className="w-48 h-48 mb-4 mx-auto home-animate-card2" />
              <h1 className="text-xl font-bold mb-2">Personalized Profiles</h1>
              <p className="text-sm">
                Craft detailed profiles that showcase your property
                <br /> and preferences. Use our customizable
                <br /> search filters to find the perfect <br />
                match for your next house swap adventure.
              </p>
            </div>
            <div className="text-center">
              <img src={home3} alt="image" className="w-48 h-48 mb-4 mx-auto  home-animate-card1" />
              <h1 className="text-xl font-bold mb-2">
                User-Friendly Onboarding
              </h1>
              <p className="text-sm">
                Our easy registration and identity verification process get you
                started in no time. Create your profile, add stunning photos,
                and begin exploring potential swaps effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}

      {/* four section */}
      <div className="grid:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid:cols-3 mx-10 md:mx-15 lg:mx-28 gap-10 mt-30">
        <div className="flex items-center justify-center mt-10">
          <h6 className="bg-[#E9E9E9] opacity-100 w-1/4 text-center py-2">
            Testimonial
          </h6>
        </div>

        <h1 className="text-4xl mt-6 text-center">What Our Happy </h1>
        <h1 className="text-4xl text-center">Customers Said.</h1>

        <div className="mt-10 px-4">
          <Slider {...settings}>
            <div className="px-[10px]">
              <div className="border border-green-500 p-6 rounded-lg w-[100%] hover:bg-[#E3F8FC] opacity">
                <h4 className="text-2xl mb-2 text-green-500 font-bold ">
                  Amit & Manjit
                </h4>

                <p className="text-gray-700">
                  "Turn Keys made our dream vacation a reality! Swapping homes
                  with another family was not only cost-effective but also added
                  a personal touch to our travels. We're now part of a community
                  that values trust and shared experiences."
                </p>
                <div className="flex mb-4 text-center">{starRating(5)}</div>
              </div>
            </div>
            <div className="px-[10px]">
              <div className="border border-green-500 p-6 rounded-lg  w-[100%] hover:bg-[#E3F8FC] opacity">
                <h4 className="text-2xl mb-2 text-green-500 font-bold">
                  Ramesh & Binod
                </h4>

                <p className="text-gray-700">
                  "Our Turn Keys experience was fantastic. The platform's
                  security measures gave us peace of mind, and connecting with
                  fellow homeowners was seamless. We've made friends across
                  borders, all thanks to Turn Keys!"
                </p>
                <div className="flex mb-4">{starRating(4)}</div>
              </div>
            </div>
            <div className="px-[10px]">
              <div className="border border-green-500 p-6 rounded-lg w-[100%] hover:bg-[#E3F8FC] opacity">
                <h4 className="text-2xl mb-2 text-green-500 font-bold">
                  Karan & Kumbh
                </h4>

                <p className="text-gray-700">
                  "As avid travelers,Turn Keys has become our go-to platform for
                  unique accommodations. The personalized profiles helped us
                  find the perfect match for our preferences.Our house swapping
                  ."
                </p>
                <div className="flex mb-4">{starRating(3)}</div>
              </div>
            </div>
            <div className="px-[10px]">
              <div className="border border-green-500 p-6 rounded-lg w-[100%] hover:bg-[#E3F8FC] opacity">
                <h4 className="text-2xl mb-2 text-green-500 font-bold">
                  Amit & Manjit
                </h4>

                <p className="text-gray-700">
                  "Turn Keys made our dream vacation a reality! Swapping homes
                  with another family was not only cost-effective but also added
                  a personal touch to our travels. We're now part of a community
                  that values trust and shared experiences."
                </p>
                <div className="flex mb-4">{starRating(3)}</div>
              </div>
            </div>

            <div className="px-[10px]">
              <div className="border border-green-500 p-6 rounded-lg w-[100%] hover:bg-[#E3F8FC] opacity">
                <h4 className="text-2xl mb-2 text-green-500 font-bold">
                  Amit & Manjit
                </h4>

                <p className="text-gray-700">
                  "Turn Keys made our dream vacation a reality! Swapping homes
                  with another family was not only cost-effective but also added
                  a personal touch to our travels. We're now part of a community
                  that values trust and shared experiences."
                </p>
                <div className="flex mb-4">{starRating(4)}</div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
      {/* four section */}

      {/* five section */}
      <div className="bg-black text-white mt-[50px] Py-[96px] relative">
        <img
          src={left}
          alt="image"
          className="w-48 h-48 absolute top-0 left-0 mt-0 hidden md:block"
        />
        <img
          src={Right}
          alt="image"
          className="w-48 h-48 absolute top-0 right-0 mt-0 hidden md:block"
        />
        <div className="flex items-center justify-center mt-10">
          <button className="bg-[#333333] text-center text-white font-bold py-2 px-4 mt-10 rounded mx-auto">
            Smarter Way to Exchange Houses
          </button>
        </div>
        <div className="grid grid-cols-1">
          <h1
            className="text-xl text-center sm:text-2xl md:text-3xl lg:text-6xl mt-[40px]"
            style={{ lineHeight: "1.5" }}
          >
            Become One Of 10,000+ Members <br />
            of Our Global Community
          </h1>
          <p className="mt-[10px] text-xl sm:text-xl md:text-sm  p-10 sm:p-10 md:p-10 mx-auto max-w-2xl text-center">
            Embrace a world of endless possibilities as you connect with
            like-minded individuals who share a passion for exploration and
            unique travel experiences. As a valued member, you'll have exclusive
            access to a diverse range of homes, fostering connections that
            transcend borders. Join Turn Keys today and be part of a growing
            community that believes in the power of shared adventures and
            creating memories that last a lifetime.
          </p>

          <button className="bg-[#09A350]  text-white font-bold py-2 px-4 mb-10 rounded mx-auto">
            Get Started — It’s Free
          </button>
          <img
            src={Grid}
            alt="image"
            className="absolute bottom-0 right-0 w-20 h-20 hidden md:block"
          />
        </div>
      </div>
      
    
      {/* five section */}
      
    
    
     
    </>
  );
};

export default Home;
