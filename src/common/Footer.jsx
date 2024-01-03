import React from 'react';
import logo from "../Images/logo.png";
import logotext1 from "../Images/logotext1.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsMap } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
// import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='bg-[#0B0B0B] min-h-screen text-white'>

         <div className="flex justify-between items-center p-4">
        <Link to="/" className="flex items-center text-white mt-20">
          <img className=" cursor-pointer" src={logo} alt="Logo"  />
          <img className=" cursor-pointer ml-2" src={logotext1} alt="Logotext" />
          <hr className="my-5 w-full text-white" />
        </Link>
       
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 mx-20 sm:mx-20 md:mx-20 lg:mx-28 '>
        <div >
     
      <div className="flex items-center">
      <BsMap className='w-4 h-4 mt-1 mr-2'/><h4 className=" ">Address Line 1,</h4>
      </div>
        <h4 className='ml-6'>Address Line 2,</h4>
        <h4 className='ml-6'>District, State,</h4>
        <h4 className='ml-6'>Country, ZipCode</h4>
        <div className="flex items-center">
      <LuPhone className='w-4 h-4 mt-1 mr-1' />
      <h4>
        <Link to="tel:+911234567890">+91 12345-67890</Link>
      </h4>
    </div>
    <div className="flex items-center">
      <AiOutlineMail className='w-4 h-4 mt-1 mr-2' />
      <h4>
        <Link to="mailto:mail@email.com">mail@email.com</Link>
      </h4>
    </div>
        <div className="flex items-center mt-10">
      <h4 className=" mr-2">See Details</h4>
      <IoIosArrowRoundForward className='w-8 h-8 mt-1' />
    </div>
      </div>
      <div >
      <div className="flex items-center">
        <h3>Services</h3><AiFillCaretDown />
        </div>
        <p>Help & Support</p>
        <p>FAQs</p>
        <p>House Selection</p>
      </div>
      <div >
     
        <div className="flex items-center">
        <h3>Important Links</h3><AiFillCaretDown />
        </div>
        <Link to="/">Home</Link><br/>
      <Link to="/HowitWorks">How It Works?</Link><br/>
      <Link to="/SwappingPlace">Swapping Places</Link><br/>
      <Link to="/Notifications">Notifications</Link><br/>
      <Link to="/terms-and-conditions">Terms & Condition</Link><br/>
      <Link to="/help-and-support">Help & Support</Link><br/>
      <Link to="/privacy-policy">Privacy Policy</Link><br/>
      <Link to="/Career">Career</Link><br/>
      <Link to="/About">About</Link><br/>
      <Link to="/Login">Login/Register</Link><br/>
        </div>
     
      <div >
      <div className="flex items-center">
        <h3>Social Media</h3><AiFillCaretDown />
        </div>
        <Link to="/instagram">Instagram</Link><br/>
        <Link to="/twitter">Twitter(X)</Link><br/>
      <Link to="/facebook">Facebook</Link><br/>
      <Link to="/linkedin">LinkedIn</Link><br/>
      <Link to="/reddit">Reddit</Link>
      </div>
      </div>
     
      <div>
            <p className="footer-paragraph text-white mt-28 text-center">
            Copyright © 2023 Turn Keys. All Rights Reserved:
              {/* <Link href="#" className="footer-text">
                <strong> Gravitonweb Technologies</strong>
              </Link> */}
            </p>
          </div>
    </div>
     
    </>
  );
};

export default Footer;
