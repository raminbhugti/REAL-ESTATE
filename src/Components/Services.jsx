import React, { useEffect } from "react";
import { service } from "../Components/export";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./DarkModeContext";
const Services = () => {
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
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        className={`${
          darkMode ? "dark bg-black" : "light bg-white"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-red-500 dark:text-white">OUR SERVICES</h1>
          <h1 className="text-4xl font-semibold">Top Real State</h1>
        </div>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {service.map((item, index) => (
            <div
              className="bg-white dark:bg-slate-800 rounded-xl H-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 border-b-[5px] border-red-600 cursor-pointer hover:bg-red-300"
              key={index}
            >
              <div className="p-6 rounded-full bg-red-200">
                <item.icon className="text-red-600 size-10 transform hover: scale-110 transition-transform duration-300" />
              </div>
              <h1 className="text-black text-[22px] font-semibold dark:text-white">
                {item.title}
              </h1>
              <p className="text-lg text-slate-700 dark:text-white">
                {item.desc}
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
