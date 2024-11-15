import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./DarkModeContext";
import { property } from "../Components/export";
import {
  FaBath,
  FaBed,
  FaPlus,
  FaMapMarkedAlt,
  FaShareAlt,
  FaUserCircle,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
const Property = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
      <section className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center  gap-10">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-red-500 text-xl dark:text-white">PROPERTIES</h1>
          <h1 className="text-4xl font-semibold">
            Explore the latest<br></br>
            properties available
          </h1>
        </div>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {property.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl w-full"
            >
              <div
                style={{ backgroundImage: `url(${item.images})` }}
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
              >
                <div className="flex justify-between items-end w-full">
                  <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black rounded-2xl text-[13px]">
                    Feature
                  </button>
                  <div className="flex justify-between items-center gap-3 ">
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black rounded-2xl text-[13px]">
                      sales
                    </button>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black rounded-2xl text-[13px]">
                      active
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-end w-full">
                  <p className="flex text-white gap-2 items-center">
                    <span>
                      <FaMapMarkedAlt />
                    </span>
                    6Downtown, Las Vegas
                  </p>
                  <div className="flex justify-between items-center gap-2 text-white">
                    <FaCamera />
                    <FaVideo />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-6 py-3 gap-2 w-full">
                <h1 className="text-xl font-semibold dark:text-white">
                  {item.name}
                </h1>
                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                  {item.price}
                </h1>
                <p className="dark:text-white">{item.about}</p>
                <div className="flex justify-center items-start gap-4">
                  <FaBath />
                  <h1 className="dark:text-white">{item.bath}</h1>
                  <FaBed />
                  <h1 className="dark:text-white">{item.bed}</h1>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 w-full">
                <div className="flex justify-center items-center gap-2">
                  <FaUserCircle className="size-5 text-red-400" />
                  <h1>{item.owner}</h1>
                </div>
                <div className="flex justify-between items-end gap-4">
                  <FaPlus className="size-5 text-red-400 " />
                  <FaHeart className="size-5 text-red-400" />
                  <FaShareAlt className="size-5 text-red-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4  text-white font-semibold cursor-pointer rounded-xl hover:scale-105 transition-transform duration-300">
            LOAD MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Property;
