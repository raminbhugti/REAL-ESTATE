import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./DarkModeContext";
const Contact = () => {
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
          darkMode ? "dark bg-black" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div className="bg-white dark:bg-white flex flex-col justify-center items-start gap-4 rounded-xl p-5">
          <h1 className=" text-4xl text-black dark:text-white">
            Send Us a Massage Today
          </h1>
          <input
            type="text"
            placeholder="enter your name here "
            className="px-6 py-3 w-full border-2 border-gray-200 rounded-xl"
          />
          <input
            type="text"
            placeholder="enter valid email "
            className="px-6 py-3 w-full border-2 border-gray-200 rounded-xl"
          />
          <input
            type="number"
            placeholder="enter your phone number"
            className="px-6 py-3 w-full border-2 border-gray-200 rounded-xl"
          />
          <textarea
            name=""
            id=""
            rows={5}
            cols={30}
            placeholder="enter your massage"
            className="px-6 py-3 w-full border-2 border-gray-200 rounded-xl"
          ></textarea>
          <button className="px-8 py-3 w-full bg-red-600 text-md font-semibold rounded-xl hover:bg-black hover:text-white dark:hover:bg-red-700 cursor-pointer">
            Send Email
          </button>
        </div>
        <div className="flex flex-col justify-center items-center lg:p-20 p-6 gap-4">
          <h1 className="text-red-500 text-xl font-semibold ">REACH US</h1>
          <h1 className="text-4xl text-black dark:text-white leading-10 gap-1">
            Get in touch with us today and our team will assist you
          </h1>
          <p className="text-gray-500">
            Our experts and developers would love to contribute their expertise
            and insights and help you today. Contact us to help you plan your
            next transaction, either buying or selling a home.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
