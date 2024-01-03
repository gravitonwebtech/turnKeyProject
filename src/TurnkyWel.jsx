import React, { useState } from "react";
import text from './Welcome to Turn Keys.png'
import pic from "./bro.png"
const TurnkyWel = () => {
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
        Open Modal
      </button>

      {/* Main modal */}
      {modalVisible && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-gray-800 bg-opacity-50"
        >
          <div className="p-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-400 w-900 h-screen">
            {/* Modal content */}
            <div className="relative">
              {/* <button
                onClick={hideModal}
                type="button"
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button> */}
             <div className="flex items-center justify-center">
  <img src={text} alt="Image" />
</div>
<div className=" mt-16 flex items-center justify-center">
   <img src={pic} />
   </div>
   <div className="flex mt-16">
  <div className="flex-1 mx-4 ml-12"> {/* Added mx-4 for horizontal margin */}
    {/* Content for the first column */}
    <button type="submit" className="bg-custom-color text-white font-custom text-base py-3 rounded-xl w-full mt-4">
    Continue to Browse
    </button>
  </div>
  <div className="flex-1 mx-4 mr-12"> {/* Added mx-4 for horizontal margin */}
    <button
      type="button"
      className="flex items-center justify-center text-custom-accent font-custom border border-custom-color text-base py-3 mt-4 rounded-xl w-full"
    >
      + Create my first Listings
    </button>
  </div>
</div>




            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TurnkyWel;
