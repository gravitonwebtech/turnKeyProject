import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-white mt-4 text-black">
        {/* Top Left Text */}
        <div className="font-semibold text-gray-600 text-sm mb-2 mx-2 text-center md:text-left">
          How it Works
        </div>

        {/* Navigation Header */}
        <div className="bg-gray-300 p-1 text-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="font-semibold text-sm md:ml-4 md:mb-0 text-center md:text-left">
              100+ House Swapping Options Available, Check It Fast
            </div>

            {/* Contact Info and Logo */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-4 md:mr-4">
              {/* Email */}
              <div className="flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAYY-8W1s0IIjVZ6nOiX1aQ6ewZOcgin9Lg&usqp=CAU"
                  alt="Email Logo"
                  className="w-6 h-6 md:w-4 md:h-4 mr-2 rounded-xl"
                />
                <div className="text-sm">email.id@domain.com</div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcplDce0ScI9Ln7f8jIZmaxb8VbJQ3Vg9FlQ&usqp=CAU"
                  alt="Phone Logo"
                  className="w-6 h-6 md:w-4 md:h-4 mr-2 rounded-xl"
                />
                <div className="text-sm">+91 12345-67890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
