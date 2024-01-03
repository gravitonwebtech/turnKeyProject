import React, { useState, useEffect } from "react";
import logo from "../Images/logo.png";
import logotext from "../Images/logotext.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Scrollup from "../Scrollup";

const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeDropdowns = () => {
    setIsBusinessOpen(false);
    setIsTrainingOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top when the route changes

    window.scrollTo(0, 0);
  }, [location.pathname]);

  window.addEventListener("scroll", function () {
    const firstButton = document.querySelector(".first-dropdown-button");
    const secondButton = document.querySelector(".second-dropdown-button");
    const thirdButton = document.querySelector(".third-dropdown-button");
  });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50  ${
          isScrolled
            ? "bg-white text-black shadow-b-lg px-5 py-2 sm:px-10 sm:py-2 md:px-20 md:py-2"
            : "bg-white text-black px-5 py-2  md:px-10 md:py-5 lg:px-20 lg:py-5"
        }`}
      >
        <Scrollup />
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img className="w-25 h-10 cursor-pointer" src={logo} alt="" />
            <img className="w-15 h-5 cursor-pointer" src={logotext} alt="" />
          </Link>

          <div className="lg:hidden">
            {/* Hamburger Icon */}

            <button
              className="p-2 focus:outline-none third-dropdown-button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Drawer */}

          {isDrawerOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-screen w-64 bg-blue-300 text-white p-4 shadow-md">
              <button
                className="text-white p-2 focus:outline-none absolute top-2 right-2"
                onClick={() => setIsDrawerOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/HowitWorks"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    How it Works?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SwappingPlace"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    SwappingPlace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Notification"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Notification
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Swappingoptionpage"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Swapping option page
                  </Link>
                </li>
              </ul>

              <div className="mt-4">
                <div className="p-4 relative flex items-center flex-col">
                  <Link
                    to="/Login"
                    className="rounded-[4px] px-5 py-2 font-semibold  bg-[#09A350] text-white"
                    onClick={() => closeDropdowns()}
                  >
                    Register/Login
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* for desktop */}

          <ul className="hidden lg:flex text-md font-medium space-x-6">
            <li>
              <Link
                to="/"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/HowitWorks"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/SwappingPlace"
                className="text-black-500"
                onClick={() => setIsDrawerOpen(false)}
              >
                Swapping Place
              </Link>
            </li>
            <li>
              <Link
                to="/Notification"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                Notification
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                About
              </Link>
            </li>
            {/* <li>
                  <Link
                    to="/Swappingoptionpage"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                  Swapping option page
                  </Link>
                </li> */}
          </ul>

          <div className="hidden lg:flex justify-center text-white ">
            <Link
              to="/Login"
              className="rounded-[4px] px-5 py-2 font-semibold  bg-[#09A350] text-white"
              onClick={() => closeDropdowns()}
            >
              Register/Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
