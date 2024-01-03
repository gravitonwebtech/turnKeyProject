import React, { useState } from "react";
import pic from "./image 1.png";
import img from "./Group 3.svg";
import pic2 from "./image 4.png"
import pic3 from "./image 5.png"
import svg from "./pin.svg"

const Login2 = () => {
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
              <div className="grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
                {/* First Column */}
                <div className="hidden md:block">
                  <div className="w-700 h-700 relative">
                    <div className="absolute inset-0">
                      <img
                        src={pic}
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
                        Create your Turn Keys account with basic details. It
                        only takes a few minutes to get started.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Column */}
               <div className="flex items-start justify-center ">
  <div className="bg-white p-6 w-96">
    <p className="font-custom text-3xl font-medium text-center ">
    Let’s get to know each other!
    </p>
   
    <div className="flex items-start mt-5 font-custom font-semibold text-sm ">
        <h2 className="text-center">Where are you from?</h2>
        
        
    </div>
<p className=" text-sm font-thin font-custom text-custom-color mt-2">So we can share profiles of member who are interested in visiting your areas</p>
<div>
<div className="border border-blue text-light px-4 mt-4 py-2 text-gray-400 flex items-center">
  <img src={svg} alt="Icon" className="w-4 h-4 mr-2" />
  <input
    type="text"
    className="bg-transparent outline-none border-none text-gray-400 flex-1"
    placeholder="City, Country"
  />
</div>

 <div className="mt-3">
    <img src={pic2}/>
    </div> 
    <h1 className="mt-5 font-custom font-semibold text-sm ">Where would you like to go?
        </h1> 
        <p className=" text-sm font-thin font-custom text-custom-color mt-2 ">So we can display homes in this area that might interest you.</p>
        <div className="border border-blue text-light px-4 mt-4 py-2 text-gray-400 flex items-center">
  <img src={svg} alt="Icon" className="w-4 h-4 mr-2" />
  <input
    type="text"
    className="bg-transparent outline-none border-none text-gray-400 flex-1"
    placeholder="City, Country"
  />
</div>

        <div className="mt-3">
    <img src={pic3}/>
    <button type="submit" className="bg-custom-color text-white font-custom text-base py-3 rounded-xl w-full mt-4">
        Create Account
      </button>
    </div> 
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

export default Login2;
