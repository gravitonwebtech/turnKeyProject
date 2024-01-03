import React from "react";
import image1 from "./Notificationimages/image1.png";
import image2 from "./Notificationimages/image2.png";
import image3 from "./Notificationimages/image3.png";
import image4 from "./Notificationimages/Image4.png";
import eye from "./Notificationimages/eye.png";
const Notification = () => {
  const toggleAnswer = (index) => {
    const answer = document.getElementById(`answer${index}`);
    const arrow = document.getElementById(`arrow${index}`);

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "none";
      arrow.style.transform = "rotate(-180deg)";
    }
  };
  const faqs = [
    {
      question:
        "Morang Helsinki has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image1,
    },
    {
      question:
        "Lucia Sierra has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image2,
    },
    {
      question:
        "Oslo Boscovinch has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image3,
    },
    {
      question:
        "Paul Waden has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image4,
    },
  ];
  const faqs1 = [
    {
      question:
        "Morang Helsinki, has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image1,
    },
    {
      question:
        "Lucia Sierra has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image2,
    },
    {
      question:
        "Oslo Boscovinch has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image3,
    },
    {
      question:
        "Paul Waden has liked your property and requesting a live video tour",
      para: "1 Hours Ago",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      image: image4,
    },
  ];
  return (
    <>
      

      <hr className="mt-[50px]" />
      <p
  className="mx-auto text-center
  bg-gray-300 w-1/4 mt-10 p-1 rounded" 
  >
 Today
</p>
      <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="transition-all duration-200 bg-[#E0FFEE] opacity-52 border border-[#2A2727] shadow-lg cursor-pointer hover:bg-gray-50 flex items-center justify-between w-full px-4 py-5 sm:p-6 rounded-lg" // Added 'rounded-lg'
          >
            <div className="flex items-center">
              <img
                src={faq.image}
                alt={`Image for ${faq.question}`}
                className="w-10 h-10"
              />
              <div className="ml-3">
                <span className="text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <p className="text-sm text-black text-left">{faq.para}</p>
              </div>
            </div>
            <button type="button" onClick={() => toggleAnswer(index)}>
              <img src={eye} id={`arrow${index}`} className="w-3 h-3" />
            </button>
            <div
              id={`answer${index}`}
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              {/* <p>{faq.answer}</p> */}
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-10" />
      <p
  className="mx-auto text-center
  bg-gray-300 w-1/4 mt-10 p-1 rounded" 
  >
  Yesterday
</p>


      <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        {faqs1.map((faq1, index) => (
          <div
            key={index}
            className="transition-all duration-200 bg-[#E0FFEE] opacity-52 border border-[#2A2727] shadow-lg cursor-pointer hover:bg-gray-50 flex items-center justify-between w-full px-4 py-5 sm:p-6 rounded-lg" // Added 'rounded-lg'
          >
            <div className="flex items-center">
              <img
                src={faq1.image}
                alt={`Image for ${faq1.question}`}
                className="w-10 h-10"
              />
              <div className="ml-3">
                <span className="text-lg font-semibold text-black">
                  {faq1.question}
                </span>
                <p className="text-sm text-black text-left">{faq1.para}</p>
              </div>
            </div>
            <button type="button" onClick={() => toggleAnswer(index)}>
              <img src={eye} id={`arrow${index}`} className="w-3 h-3" />
            </button>
            <div
              id={`answer${index}`}
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>{faq1.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto  space-y-4 md:mt-10">
        {faqs1.map((faq1, index) => (
          <div
            key={index}
            className="transition-all duration-200  opacity-52 border border-[#2A2727] shadow-lg cursor-pointer hover:bg-gray-50 flex items-center justify-between w-full px-4 py-5 sm:p-6 rounded-lg" // Added 'rounded-lg'
          >
            <div className="flex items-center">
              <img
                src={faq1.image}
                alt={`Image for ${faq1.question}`}
                className="w-10 h-10"
              />
              <div className="ml-3">
                <span className="text-lg font-semibold text-black">
                  {faq1.question}
                </span>
                <p className="text-sm text-black text-left">{faq1.para}</p>
              </div>
            </div>
            <button type="button" onClick={() => toggleAnswer(index)}>
              <img
                src={eye}
                id={`arrow${index}`}
                className="w-3 h-3 sm:w-2 h-3 md:w-3 h-3 lg:w-4 h-4"
              />
            </button>
            <div
              id={`answer${index}`}
              style={{ display: "none" }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>{faq1.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notification;
