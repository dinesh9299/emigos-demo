import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div></div>
      <div className="max-w-screen-xl mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              At Emigos Solutions, your safety and comfort are our top
              priorities. Experience the difference with our professional,
              high-quality, and customer-centric solutions today!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 ">
              <li>
                <button className=" my-2 transition-transform duration-300 ease-in-out">
                  Home
                </button>
              </li>

              <li>
                <button className=" my-2 transition-transform duration-300 ease-in-out">
                  {" "}
                  About
                </button>
              </li>

              <li>
                <button className=" my-2 transition-transform duration-300 ease-in-out">
                  Services
                </button>
              </li>

              <li>
                <button className=" my-2 transition-transform duration-300 ease-in-out">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">Email: emigossolutions@gmail.com</p>
            <p className="text-gray-400">Phone: +91 7207086111</p>
            <div className=" flex my-7 gap-4">
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-cyan-500 hover:cursor-pointer">
                <a href="https://www.facebook.com/share/197ggGqfai/?mibextid=wwXIfr">
                  <FaFacebookSquare className=" " size={20} />
                </a>
              </div>

              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-cyan-500 hover:cursor-pointer">
                <a href="https://www.instagram.com/emigossolutions?igsh=MWFncnBhZ2t0emVh&utm_source=qr">
                  {" "}
                  <FaInstagram className=" " size={20} />
                </a>
              </div>
              <div className=" bg-white text-black  hover:text-white p-3 rounded-full hover:bg-cyan-500 hover:cursor-pointer">
                <a href="https://www.linkedin.com/in/emigos-solutions-09b368343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <FaLinkedinIn className=" " size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
      </div>

      <div className="text-center mt-8 text-gray-400">
        <p>&copy; 2025 Emigossolutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
