import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./DarkModeContext";
import { client } from "../Components/export";
import { FaStar } from "react-icons/fa";
const Testamonial = () => {
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
      <section className="lg:w-[95%] w-full h-fit m-auto rounded-xl bg-cover bg-center flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-20">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-red-500 dark:text-white">OUR CLIENTS</h1>
          <h1 className="text-4xl font-semibold leading-10">
            What are our clients<br></br> saying about us
          </h1>
        </div>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {client.map((item, index) => (
            <div
              className="bg-white dark:bg-slate-800 rounded-xl H-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 border-b-[5px] border-red-600 cursor-pointer hover:bg-red-300"
              key={index}
            >
              <div className="flex justify-start items-center w-full gap-4">
                <img src={item.image} alt="" className="w-[70px]" />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl font-semibold dark:text-white">
                    {item.name}
                  </h1>
                  <h1>{item.text}</h1>
                </div>
              </div>
              <p className="text-md text-slate-600 dark:text-white">
                {item.feedback}
              </p>
              <div className="flex justify-start items-start gap-2 w-full">
                <FaStar className="size-4 text-yellow-400" />
                <FaStar className="size-4 text-yellow-400" />
                <FaStar className="size-4 text-yellow-400" />
                <FaStar className="size-4 text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testamonial;
