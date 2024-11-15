import React, { useEffect } from "react";
import aboutpic from "../assets/about-Cyz-uuF2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./DarkModeContext";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      once: true,
      offset: 200,
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <section
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } w-full m-auto lg:px-10 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
      >
        <div>
          <img
            data-aos="zoom-in"
            className="rounded-2xl lg:w-[500px] lg:h-[600px]"
            src={aboutpic}
            alt="aboutpic"
          />
        </div>
        <div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-600 text-xl mb-6"
          >
            Who We Are
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-4xl font-semibold text-black leading-10 dark:text-white mb-6"
          >
            We help clients buy and sell houses since 1989
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-gray-600 dark:text-white font-semibold text-xl mb-6"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
            eaque inventore voluptatum rem consectetur quae magni optio quis
            incidunt?
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4  text-white rounded-xl"
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
