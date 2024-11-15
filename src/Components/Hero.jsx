import React, { useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import heropic from "../assets/hero1-CiouO6zv.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      once: true,
      offset: 200,
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center items-start flex-col lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heropic})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl font-bold text-white lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next Home in Las Vegas
          </h1>
          <p
            data-aos="zoom-in"
            className="text-2xl text-white lg:pr-[500px] pr-0"
          >
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </section>
      </div>

      {/* FORM SECTION */}
      <div
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-gray-100"
        } z-10`}
      >
        <div
          className={`${
            darkMode ? "bg-gray-900" : "bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl`}
        >
          <div className="w-full">
            <h1 className="text-black dark:text-white font-semibold">
              LOCATION
            </h1>
            <input
              className="bg-white p-2 w-full mt-2 border-b-2 border-gray-400"
              type="text"
              placeholder="Search Location"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black dark:text-white font-semibold">TYPE</h1>
            <input
              className="bg-white p-2 w-full mt-2 border-b-2 border-gray-400"
              type="text"
              placeholder="say type of property"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black dark:text-white font-semibold">
              CATOGORY
            </h1>
            <input
              className="bg-white p-2 w-full mt-2 border-b-2 border-gray-400"
              type="text"
              placeholder="Catagory"
            />
          </div>
          <div className="w-full">
            <button
              className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold cursor-pointer rounded-xl hover:scale-105 transition-transform duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
