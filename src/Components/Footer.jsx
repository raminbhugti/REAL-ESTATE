import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import footerpic1 from "../assets/prop1-DyCTk8t_.webp";
import footerpic2 from "../assets/prop2-jZp6mjIB.webp";
const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      once: true,
      offset: 200,
      delay: 100,
    });
  }, []);

  return (
    <div
      className={`${
        darkMode
          ? "dark bg-slate-800 text-white"
          : "light bg-slate-800 text-white"
      } pb-20`}
    >
      <section className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* About Us */}
          <div data-aos="fade-up">
            <h1 className="text-2xl font-semibold mb-4">About Us</h1>
            <p className="text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              vulputate nunc.
            </p>
            <div className="flex space-x-6 mb-4 mt-8">
              <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            </div>
            <p className="text-md mt-12">
              &copy; Real Estate, All Rights Reserved
            </p>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <div className="flex items-center mb-4">
              <FaHome className="text-xl mr-2" />
              <p className="text-sm">1234 Real Estate St, City, Country</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-xl mr-2" />
              <p className="text-sm">+123-456-7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-2" />
              <p className="text-sm">info@realestate.com</p>
            </div>
          </div>

          {/* Latest Properties */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-2xl font-semibold mb-4">Latest Properties</h1>
            <div className="flex items-center space-x-2">
              {/* Images */}
              <div className="flex flex-col space-y-6">
                <img
                  src={footerpic1}
                  alt="Amazing Villa"
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <img
                  src={footerpic2}
                  alt="Sea View Villa"
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              {/* Text */}
              <div className="space-y-20">
                <div>
                  <p className="text-xl">Amazing Villa</p>
                  <p className="text-sm text-gray-500">$278.98</p>
                </div>
                <div>
                  <p className="text-xl">Sea View Villa</p>
                  <p className="text-sm text-gray-500">$789.98</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
