import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const { pathname } = useLocation();
  const segments = pathname.split("/");
  const routeName = segments[1];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-transparent relative top-[60px] right-2 z-10">
      <div className="max-w-7xl hidden md:block mx-auto px-4 py-3">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center text-3xl ps-10 text-white font-bold font-modern"
            >
              BL
            </Link>
          </div>
          <div className="flex gap-2 justify-center items-center text-base md:text-lg">
            <Link
              to="/"
              className={`nav-link rounded-3xl ${
                routeName === ""
                  ? "border-2 border-[#66FCF1]"
                  : "border-2 border-[#00000000]"
              } px-3 md:px-7 pt-1 pb-2 md:pt-2 md:pb-2 transition ease-in-out delay-150  hover:scale-110 duration-300 `}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link rounded-3xl ${
                routeName === "about"
                  ? "border-2 border-[#66FCF1]"
                  : "border-2 border-[#00000000]"
              } px-3 md:px-7 pt-1 pb-2 md:pt-2 md:pb-2 transition ease-in-out delay-150  hover:scale-110 duration-300 `}
            >
              About
            </Link>
            <Link
              to="/project"
              className={`nav-link rounded-3xl ${
                routeName === "project"
                  ? "border-2 border-[#66FCF1]"
                  : "border-2 border-[#00000000]"
              } px-3 md:px-7 pt-1 pb-2 md:pt-2 md:pb-2 transition ease-in-out delay-150  hover:scale-110 duration-300`}
            >
              Project
            </Link>
            <Link
              to="/gallery"
              className={`nav-link rounded-3xl ${
                routeName === "gallery"
                  ? "border-2 border-[#66FCF1]"
                  : "border-2 border-[#00000000]"
              } px-3 md:px-7 pt-1 pb-2 md:pt-2 md:pb-2 transition ease-in-out delay-150  hover:scale-110 duration-300`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link rounded-3xl ${
                routeName === "contact"
                  ? "border-2 border-[#66FCF1]"
                  : "border-2 border-[#00000000]"
              } px-3 md:px-7 pt-1 pb-2 md:pt-2 md:pb-2 transition ease-in-out delay-150  hover:scale-110 duration-300`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Top Navigation Menu  Mobile View*/}
      <div className="overflow-hidden block md:hidden ">
        <Link
          to="/"
          className="flex items-center text-3xl ps-10 pt-5 text-white font-bold font-modern"
        >
          BL
        </Link>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } px-2 md:flex sm:p-0 sm:space-x-4  flex-col items-end `}
        >
          <div className="text-center top-[30%] right-6 text-white fixed md:hidden nav-card px-10 py-5  rounded-3xl ">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 "
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4"
            >
              About
            </Link>
            <Link
              to="/project"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4"
            >
              Project
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4"
            >
              Contact
            </Link>
          </div>
        </div>
        <button
          className=" bg-transparent block absolute md:hidden top-0 right-0 m-1"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="text-white text-4xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
