import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-transparent relative top-[60px] z-10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center text-3xl ps-10 text-white font-bold font-modern"
            >
              BL
            </Link>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Link
              to="/"
              className={`nav-link rounded-3xl ${
                pathname === "/" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link rounded-3xl ${
                pathname === "/about" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              About
            </Link>
            <Link
              to="/project"
              className={`nav-link rounded-3xl ${
                pathname === "/project" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              Project
            </Link>
            <Link
              to="/gallery"
              className={`nav-link rounded-3xl ${
                pathname === "/gallery" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link rounded-3xl ${
                pathname === "/contact" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
