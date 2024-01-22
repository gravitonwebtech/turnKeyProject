import React, { useState } from "react";
import AddIcon1 from "./AddListingImg/AddIcon.svg";
import Calendar1 from "./AddListingImg/Calendar1.png";
import Calendar2 from "./AddListingImg/Calendar2.png";

export default function AddListing4({onNextStep}) {

  const [selectedImages, setSelectedImages] = useState([
    { heading: "Exterior", image: null },
    { heading: "Bedroom", image: null },
    { heading: "Bathroom", image: null },
    { heading: "Kitchen", image: null },
    { heading: "Hall", image: null },
    { heading: "Other(Mention)", image: null },
  ]);

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = { ...newImages[index], image: reader.result };
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="mt-5 md:mt-14 text-center" style={{ fontFamily: "Poppins" }}>
        <h1 className="text-xl md:text-2xl font-semibold">
          What does your home look like?
        </h1>
        <p className="text-[#818181] text-sm mt-3 mx-5 md:mx-0">
          Enhance your likelihood of completing a swap by including <br></br>
          pictures of your residence.
        </p>
      </div>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-10 xl:gap-20 mt-5 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24" style={{ fontFamily: "Poppins" }}>
          {selectedImages.map((selectedImage, index) => (
            <div key={index}>
              <h2 className="text-[#818181]">{selectedImage.heading}</h2>
              <div className="rounded border-2 border-dashed border-black-500 p-4 mt-3">
                <label
                  htmlFor={`upload-${index}`}
                  className="flex flex-col items-center cursor-pointer"
                >
                  {selectedImage.image ? (
                    <img
                      src={selectedImage.image}
                      alt="Uploaded"
                      className="max-w-full max-h-40"
                    />
                  ) : (
                    <img src={AddIcon1} alt="" />
                  )}
                  <span className="text-[#818181] mt-3">Add Photos</span>
                </label>
                <input
                  type="file"
                  id={`upload-${index}`}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(index, e)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-10 xl:gap-20 mt-5 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24" style={{ fontFamily: "Poppins" }}>
          <div className="">
            <label className="text-lg md:text-xl font-semibold">
              Can you provide a description of your home?
            </label>

            <p className="mt-5">
              <textarea
                id="textAreaInput"
                placeholder="Type Here..."
                className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                rows="6"
              />
            </p>
          </div>


          <div className="text-lg md:text-xl font-semibold">
            <h1>At what date is your home accessible?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-0 mt-5">
                <div className="">
                    <img src={Calendar1} alt="" />
                </div>
                <div className="">
                    <img src={Calendar2} alt="" />
                </div>
            </div>
          </div>
        </div>


      <div className="relative h-2 w-full border-gray-500 bg-[#D9D9D9] mt-5 md:mt-10">
        <div className="absolute left-0 w-[100%] h-full bg-green-500"></div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 mt-3" style={{ fontFamily: "Poppins" }}>
        <div className="text-sm font-semibold">Step 4/4</div>
        <div className="flex  justify-end">
          <div className="">
          <button
              className="text-white bg-[#09A350] px-5 py-1 rounded-[4px]"
              onClick={onNextStep}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
