import React from "react";
import Listing3 from "./AddListingImg/AddListing3.png";

export default function AddListing3({onNextStep}) {
  //    checkbox
  const checkboxes = [
    { label: "Fully furnished" },
    { label: "Fire/Smoke alarm" },
    { label: "Swimming pool" },
    { label: "Air Conditionar" },
    { label: "Wi-fi" },
    { label: "Parking Area" },
    { label: "Refrigerator" },
    { label: "Gym" },
    { label: "Washing Machine" },
    { label: "Garden" },
    { label: "Kitchen" },
    { label: "Waterfall" },
    { label: "Gas Supply" },
    { label: "Kids Play" },
    { label: "Heater" },
    { label: "Pet accepted" },
    { label: "BBQ grill" },
    { label: "Disabled people suitability" },
    { label: "Public Transportation" },
    { label: "Cable Connections" },
  ];

  // ownership
  const checkboxes1 = [
    { label: "Owned" },
    { label: "Rented" },
    { label: "Leased" },
  ];

  return (
    <>
      <div className="md:flex md:items-center md:justify-center min-h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-14 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 mt-5 md:mt-0">
          <div className="flex items-center">
            <img src={Listing3} alt="" />
          </div>

          <div className="" style={{ fontFamily: "Poppins" }}>
            <h1 className="text-lg m sm:text-xl md:text-2xl font-semibold">
              Tell more about your house (if any)
            </h1>

            <div className="mt-3">
              <form>
                <label className="text-sm font-semibold">
                  Area of your house
                </label>

                <div className="mt-2 flex ">
                  <p>
                    <input
                      type="text"
                      id="textInput"
                      placeholder="30"
                      className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                    />
                  </p>
                  <p className="pl-4">
                    <select
                      id="mathExpression"
                      className="w-full text-sm focus:outline-gray-500 border border-gray-300 p-2 rounded"
                    >
                      <option value="m²">
                        {" "}
                        m<sup>2</sup>
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </p>
                </div>

                <label className="text-sm font-semibold mt-3">Amenities</label>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
                  {checkboxes.map((checkbox) => (
                    <div
                      key={checkbox.label}
                      className="mb-3 flex items-center"
                    >
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className={`w-5 h-5 border border-gray-300 rounded-md checkbox-input`}
                        />
                        <span className="ml-2 text-xs font-medium">
                          {checkbox.label}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>

                <label className="font-semibold mt-3">Ownership</label>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-2">
                  {checkboxes1.map((checkbox1, index) => (
                    <div
                      key={checkbox1.label}
                      className="mb-3 flex items-center"
                    >
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className={`w-5 h-5 border border-gray-300 rounded-md checkbox-input`}
                          defaultChecked={index === 0}
                        />
                        <span className="ml-3 text-sm font-medium">
                          {checkbox1.label}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-2 w-full border-gray-500 bg-[#D9D9D9] mt-5 md:mt-0">
        <div className="absolute left-0 w-[75%] h-full bg-green-500"></div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 mt-3" style={{ fontFamily: "Poppins" }}>
        <div className="text-sm font-semibold">Step 3/4</div>
        <div className="flex  justify-end">
          <div className="">
          <button
              className="text-white bg-[#09A350] px-5 py-1 rounded-[4px]"
              onClick={onNextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
