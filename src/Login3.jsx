import React, { useState } from "react";

import img from "./Group 3.svg";
import img2 from "./image 2.png";
import svg2 from "./g12.svg";
import svg from "./Google.svg";

const Login3 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {/* Main modal */}
      {modalVisible && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center"
        >
          <div className="p-4 w-1200 h-700 ">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
              {/* Modal body */}
              <div className="grid" style={{ gridTemplateColumns: "1fr 5fr" }}>
                {/* First Column */}
                <div>
                  <div className="w-500 h-700 relative">
                    <div className="flex items-start justify-center ">
                      <div className="bg-white p-6 w-96">
                        <p className="font-custom text-4xl font-medium ">
                          Login
                        </p>
                        <p className="mt-2 text-sm  text-custom-secondary font-custom font-extralight ">
                          Kindly Fill The Credential To Proceed
                        </p>

                        {/* Form with three input fields */}
                        <form className="w-full justify-center">
                          <div className="mb-4 mt-8">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-black"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="mt-1 p-2 border-b border-black focus:outline-none  w-full"

                              // Add any other necessary attributes or event handlers
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-black"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="mt-1 p-2 border-b border-black focus:outline-none  w-full"

                              // Add any other necessary attributes or event handlers
                            />
                          </div>

                          {/* Add your submit button or any other form elements here */}
                          <div className="mt-16">
                            <button
                              type="submit"
                              className="bg-custom-color text-white font-custom text-base py-3 rounded-xl w-full"
                            >
                              Login
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-custom-accent font-custom border border-custom-color text-base py-3 mt-4 rounded-xl w-full"
                            >
                              <img
                                src={svg}
                                alt="Facebook Icon"
                                className="w-5 h-5 mr-2"
                              />
                              <span>Log in with Google</span>
                            </button>
                            <button
                              type="button"
                              className="flex items-center justify-center text-custom-accent font-custom border border-custom-color text-base py-3 mt-4 rounded-xl w-full"
                            >
                              <img
                                src={svg2}
                                alt="Facebook Icon"
                                className="w-5 h-5 mr-2"
                              />
                              <span>Log in with Facebook</span>
                            </button>
                            <p className="mt-8 text-sm text-light font-custom">
                              Not a member?{" "}
                              <span className="ml-1 text-custom-accent underline text-lg font-custom">
                                Sign up
                              </span>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Column */}
                <div className="hidden md:block">
                  <div className=" h-700 relative">
                    <div className="absolute inset-0">
                      <img
                        src={img2}
                        alt="First Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <img
                      src={img}
                      alt="Second Image"
                      className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  h-[25%]"
                    />

                    <div className="w-[70%] text-custom-primary font-custom font-semibold text-5xl absolute top-[63%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <p>Welcome Back</p>
                    </div>
                    <div className="mt-3 w-[70%] absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-white text-lg font-extralight">
                        Welcome Back User, Enter your credential to continue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login3;
