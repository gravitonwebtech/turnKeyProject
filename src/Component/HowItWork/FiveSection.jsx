import React, { useState } from "react";
import AddIcon from "./HowItWokImgs/Addicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./HowItWork.css";

export default function FiveSection() {
  const questions = [
    {
      id: 1,
      text: "How do I Upload my Property?",
      answer:
        "Upload your property easily with our intuitive platform. Simply provide details, images, and features to showcase your listing effortlessly.",
    },
    {
      id: 2,
      text: "Which documents I need to get ready to initiate?",
      answer:
        "Prepare ID, proof of ownership, utility bills, and financial records to smoothly initiate the process of property transaction or mortgage.",
    },
    {
      id: 3,
      text: "Can I connect with homeowners before confirming a swap?",
      answer:
        "Connect with homeowners before swapping to discuss details, preferences, and ensure a successful and satisfying exchange.",
    },
  ];

  const [expandedQuestion, setExpandedQuestion] = useState(0); // Set the default expanded question index to 0

  const toggleQuestion = (index) => {
    setExpandedQuestion(
      index === 0 ? 0 : expandedQuestion === index ? null : index
    );
  };

  return (
    <div
      className="mt-10 md:mt-14 five-section flex items-center"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20 px-5 sm:px-10 md:px-20 lg:px-28 xl:px-60">
        <div className="md:col-span-6">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="p-4 border-t border-gray-300 w-full"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h2 className="text-md font-regular">{question.text}</h2>
                <img
                  src={AddIcon}
                  alt="Add Circle"
                  className="w-6 h-6 text-green-700"
                />
              </div>
              {expandedQuestion === index && (
                <div className="text-[#8C8C8C] mt-2 text-sm">
                  {question.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:col-span-6">
          <h1 className="text-[#09A350] font-medium text-xl md:text-2xl">
            How we can help you?
          </h1>
          <p className="text-[#8C8C8C] text-sm mt-4">
            Follow our newsletter. We will regulary update<br></br> our latest
            project and availability.
          </p>

          <div className="hidden md:block">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="border-2 border-[#828282] bg-transparent rounded-[37px] px-4 py-2 mt-5 text-sm text-[#8C8C8C]"
            />

            <button
              type="submit"
              className=" mt-4 md:mt-0 ml-2 lg:ml-5 bg-[#09A350] text-white text-sm rounded-[70px] px-4 py-2"
            >
              Let's Talk
            </button>
          </div>

          <div className="block md:hidden">
            <div className="">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className=" border-2 border-[#828282] bg-transparent w-full rounded-[37px] px-5 py-3 mt-5 text-sm text-[#8C8C8C] "
              />
            </div>

            <div>
              <button
                type="submit"
                className=" mt-4 w-full bg-[#09A350] text-white text-sm rounded-[70px] px-5 py-3"
              >
                Let's Talk
              </button>
            </div>
          </div>

          <h1 className="text-[#09A350] font-semibold mt-4">
            More FAQ{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="pl-3 text-[#09A350] "
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
