import React, { useState } from "react";
import banner from "./addlistingimage3/banner.png";
const Addlisting3 = () => {
  const [selectedUnit, setSelectedUnit] = useState("m2");
  const [numberInput, setNumberInput] = useState("");

  const handleDropdownItemClick = (unit) => {
    setSelectedUnit(unit);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-4 md:mx-20 lg:mx-28 gap-28 mt-28 font-poppins ">
        <div>
          <img src={banner} alt="image" className="mt-32" />
        </div>
        <div>
          <p className="text-sm md:text-sm lg:text-4xl text-start font-semibold ">
            Tell more about your house (if any)
          </p>
          <h3 className="text-left mt-10 font-bold ">Area of your house</h3>

          <form className="flex items-center gap-3 mt-3">
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="border border-t border-black-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-2 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              {selectedUnit}{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedUnit === "m2" ? "font-bold" : ""
                    }`}
                    onClick={() => handleDropdownItemClick("m2")}
                  >
                    Square Meter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedUnit === "km2" ? "font-bold" : ""
                    }`}
                    onClick={() => handleDropdownItemClick("km2")}
                  >
                    Square Kilometer
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <h3 className="text-start sm:text-center md:text-center lg:text-start  font-bold mt-10">
            Amenities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-2 ">
            <div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Fully-furnished
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Swimming pool
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  WI-FI
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Refrigerator
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Washing Machine
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Kitchen
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Gas Supply
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Heater
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  BBQ grill
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Public Transportation
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Pets allowed
                </label>
              </div>
            </div>
            <div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Fire/Smoke alarm
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Air Conditioner
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Parking Area
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Gym
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Garden
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Waterfall
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Kids play
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Pet accepted
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Disabled people suitability
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Cable Connection
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  class="form-checkbox h-5 w-5text-green-500"
                />
                <label for="myCheckbox" class="ml-2 text-gray-700">
                  Elevator
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 sm:mx-5 md:mx-10 lg:mx-15 mt-10">
        <div className="rounded-lg border-t-2 border-black-500 relative ">
          <div className="absolute top-0 left-0 h-[5px] w-3/4 bg-green-500 md:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10  mt-5">
            <div className="mt-5">Step 3/4</div>
            <div className="space-x-4">
              <button className="bg-[#09A350] hover:bg-[#09A350] text-white font-bold py-2 px-5 mt-2 rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addlisting3;
