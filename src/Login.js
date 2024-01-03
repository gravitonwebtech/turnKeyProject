import React from "react";
import image1 from "./image1.png";
import img from "./Group 3.svg";
import pic2 from "./Vector.svg";
import pic3 from "./Vector (1).svg";
import pic4 from "./Vector (2).svg";
const Login = () => {
  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex  justify-center items-center"
      >
        <div className="p-4 w-full h-full ">
          {/* Modal content */}
          <div className="relative border border-red-500 rounded-lg shadow dark:bg-gray-700  ">
            {/* Modal body */}
            <div className="grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
              {/* First Column */}
              <div className="hidden md:block">
                <div className="w-700 h-700 relative">
                  <div className="absolute inset-0">
                    <img
                      src={image1}
                      alt="First Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={img}
                    alt="Second Image"
                    className="absolute top-[38%] left-[53%] transform -translate-x-1/2 -translate-y-1/2"
                  />
                  <div className="w-[70%] text-custom-primary font-custom font-semibold text-5xl absolute top-[63%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p>Your Journey Starts Here</p>
                  </div>
                  <div className="mt-11 w-[70%] absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-white text-lg font-extralight">
                      Create your Turn Keys account with basic details. It only
                      takes a few minutes to get started.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6">
                <p className="font-custom text-3xl font-medium text-center">
                  Create an Account
                </p>
                <p className="text-custom-secondary font-custom font-light text-center">
                  Kindly Fill The Credential To Proceed
                </p>

                <div className="flex justify-center space-x-4 items-center h-[85%] ">
                  <div className="mb-4 w-150 h-150 rounded-xl border border-blue-500 p-8 flex flex-col items-center">
                    <img
                      src={pic2}
                      alt="Facebook Icon"
                      className="w-8 h-8 mb-2"
                    />

                    <h1 className=" text-custom-accent">Facebook</h1>
                  </div>

                  <div className="mb-4 w-150 h-150 rounded-xl border border-blue-500 p-8 flex flex-col items-center">
                    <img
                      src={pic3}
                      alt="Facebook Icon"
                      className="w-8 h-8 mb-2"
                    />

                    <h1>Google</h1>
                  </div>

                  <div className="mb-4 w-150 h-150 rounded-xl border border-blue-500 p-8 flex flex-col items-center">
                    <img
                      src={pic4}
                      alt="Facebook Icon"
                      className="w-8 h-8 mb-2"
                    />

                    <h1 className="whitespace-nowrap">Email address</h1>
                  </div>
                </div>
                <p className="text-center font-custom">
                  Already have an account?{" "}
                  <span className="text-custom-accent underline">Sign in</span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
