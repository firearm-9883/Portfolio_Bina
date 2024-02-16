import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState("Home");
  return (
    <nav className="bg-transparent relative top-[60px] z-10">
      <div className="max-w-7xl  mx-auto px-4 py-3">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center  text-white text-xl font-bold"
            >
              BL
            </Link>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Link
              to="/"
              onClick={() => setIsActive("Home")}
              className={`nav-link rounded-3xl ${
                isActive === "Home" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsActive("About")}
              className={`nav-link rounded-3xl ${
                isActive === "About" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              About
            </Link>
            <Link
              to="/project"
              onClick={() => setIsActive("Project")}
              className={`nav-link rounded-3xl ${
                isActive === "Project" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              Project
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsActive("Gallery")}
              className={`nav-link rounded-3xl ${
                isActive === "Gallery" ? "border-2 border-[#66FCF1]" : ""
              } px-7 py-2`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsActive("Contact")}
              className={`nav-link rounded-3xl ${
                isActive === "Contact" ? "border-2 border-[#66FCF1]" : ""
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
