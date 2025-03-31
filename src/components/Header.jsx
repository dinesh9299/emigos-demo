import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../emigosimages/emigoslogo.png";
import logo1 from "../images/trinai white 1 (1).png";
import gpu from "../images/gpu.png";
import bullet from "../images/AI02B030L67-28(40)F-NS.png";
import dome from "../images/AI02D040L67-05MV.png";
import eyeball from "../images/AI08ID030L67-28(40)F-LS.png";
import ptz from "../images/AI02P150L66-33MV-148F-LS.png";
import server from "../images/Trinai Server.png";

const categories = [
  //   "HD CCTV Camera",
  //   "IP Cameras",
  "Bullet Cameras",
  "Eyeball Cameras",
  "Dome Cameras",
  "PTZ Cameras",
  "Network Video Recorder",
  // "Network Switches",
  "Server",
  "Smart GPU with AI Camera",
  //   "WiFi Smart",
];

// "WiFi Smart": [
//   //     "WiFi Smart Indoor Camera",
//   //     "WiFi Smart Outdoor Camera",
//   //     "WiFi Doorbell Camera",
//   //   ],

const Header = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const location = useLocation();
  console.log("path", location.pathname);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // onClick={() =>
  //   navigate(
  //     `/categories?query=${encodeURIComponent(
  //       product.name
  //     )}`
  //   )
  // }

  const HandleClick = (id) => {
    navigate(`/categories?query=${encodeURIComponent(id)}`);
    setIsCategoriesOpen(false);
  };

  return (
    <header
      className={`${
        isScrolled ||
        isCategoriesOpen ||
        location.pathname === "/cemaradetails" ||
        location.pathname === "/viewproducts"
          ? "bg-slate-200 shadow-lg text-black  top-0 left-0 right-0 "
          : "bg-slate-200 text-white  top-0 left-0 right-0 "
      } w-full px-4 transition-all duration-300 z-50 flex items-center  py-4 pt-5`}
    >
      {/* Mega menu section */}
      {isCategoriesOpen && (
        <div
          className="absolute  left-0 top-full w-full bg-white shadow-2xl border-t pt-6 pb-8 px-8 z-50"
          onMouseEnter={() => setIsCategoriesOpen(true)}
          onMouseLeave={() => setIsCategoriesOpen(false)}
        >
          <div className="flex gap-8 "></div>
        </div>
      )}
      {/* Company Logo */}
      <div
        className="flex items-center justify-center "
        style={{ marginTop: "-18px" }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Company Logo"
            className="h-20 object-cover w-60"
          />
        </Link>
      </div>
      {/* Desktop Navigation */}
      {/* Mobile hamburger menu */}
      {/* Hamburger button */}
      {/* Mobile Dropdown */}
      {/* <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 space-y-4`}
      >
        <a href="#aboutus" className="text-white hover:text-gray-400">
          About Us
        </a>
        <a href="#categories" className="text-white hover:text-gray-400">
          Categories
        </a>
        <a href="#solutions" className="text-white hover:text-gray-400">
          Solutions
        </a>
        <a href="#contact" className="text-white hover:text-gray-400">
          Contact
        </a>
      </div> */}
    </header>
  );
};

export default Header;
