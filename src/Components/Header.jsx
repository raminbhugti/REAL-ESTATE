import React, { useState } from "react";
import logo from "../assets/logo-CMrIGaUI.png";
import { useDarkMode } from "./DarkModeContext";
import { FaBars, FaTimes, FaPhone, FaUser } from "react-icons/fa";

const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        darkMode ? "dark bg-black text-white" : "light bg-white text-black"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      {/* Logo */}
      <div>
        <img
          className="lg:w-[150px] w-[120px] dark:invert"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Menu for large screens */}
      <ul className="lg:flex justify-center items-center gap-20 hidden">
        <li className="hover:text-red-700  cursor-pointer font-semibold text-lg">
          Home
        </li>
        <li className="hover:text-red-700  cursor-pointer font-semibold text-lg">
          About
        </li>
        <li className="hover:text-red-700  cursor-pointer font-semibold text-lg">
          Properties
        </li>
        <li className="hover:text-red-700  cursor-pointer font-semibold text-lg">
          Services
        </li>
        <li className="hover:text-red-700  cursor-pointer font-semibold text-lg">
          Testimonials
        </li>
        <li className="hover:text-red-700  cursor-pointer font-semibold text-lg">
          Contact
        </li>
        <li className="flex items-center gap-2 font-semibold text-lg">
          <FaPhone className="text-red-600" /> 888-908-9102{" "}
          <FaUser className="text-red-600" />
        </li>
      </ul>

      {/* Hamburger menu icon for small screens */}
      <div className="lg:hidden">
        {isMenuOpen ? (
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          } flex flex-col items-center gap-4 py-4`}
        >
          <li
            className="hover:text-red-700  cursor-pointer font-semibold text-lg"
            onClick={toggleMenu}
          >
            Home
          </li>
          <li
            className="hover:text-red-700  cursor-pointer font-semibold text-lg"
            onClick={toggleMenu}
          >
            About
          </li>
          <li
            className="hover:text-red-700  cursor-pointer font-semibold text-lg"
            onClick={toggleMenu}
          >
            Properties
          </li>
          <li
            className="hover:text-red-700  cursor-pointer font-semibold text-lg"
            onClick={toggleMenu}
          >
            Services
          </li>
          <li
            className="hover:text-red-700  cursor-pointer font-semibold text-lg"
            onClick={toggleMenu}
          >
            Testimonials
          </li>
          <li
            className="hover:text-red-700  cursor-pointer font-semibold text-lg"
            onClick={toggleMenu}
          >
            Contact
          </li>
          <li
            className="flex items-center gap-2 font-semibold text-lg"
            onClick={toggleMenu}
          >
            <FaPhone className="text-red-600" /> 888-908-9102
            <FaUser className="text-red-600" />
          </li>
        </div>
      )}
    </nav>
  );
};

export default Header;
