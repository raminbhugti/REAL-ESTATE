import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./DarkModeContext";
import areapic1 from "../assets/area1-Bd11O3xH.jpg";
import areapic2 from "../assets/area2-Cda6bto8.jpg";
import areapic3 from "../assets/area3-C1rIox7-.jpg";
const Areas = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center flex justify-center items-center flex-col lg:px-20 px-6 py-20 gap-20`}
      >
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          <div>
            <h1 className="text-xl font-semibold text-red-600">
              Popular Areas
            </h1>
            <h1 className="text-4xl font-bold text-black leading-10 mt-4 dark:text-white">
              Explore most<br></br> popular areas
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6 lg:w-[800px]">
            <div
              style={{ backgroundImage: `url(${areapic1})` }}
              className=" h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              style={{ backgroundImage: `url(${areapic2})` }}
              className="h-[400px]  bg-cover bg-center rounded-xl"
            ></div>
            <div
              style={{ backgroundImage: `url(${areapic3})` }}
              className="h-[400px] bg-cover  bg-center rounded-xl"
            ></div>
          </div>
          <div className="lg:col-span-3 grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6">
            <div className="flex justify-center lg:items-center w-full gap-8">
              <h1 className="text-7xl text-black font-semibold dark:text-white">
                5K
              </h1>
              <h1>
                ACTIVE<br></br> LISTINGS
              </h1>
            </div>
            <div className="flex justify-center lg:items-center w-full gap-8">
              <h1 className="text-7xl text-black font-semibold dark:text-white">
                9K
              </h1>
              <h1>
                SOLID<br></br> LISTINGS
              </h1>
            </div>
            <div className="flex justify-center lg:items-center w-full gap-8">
              <h1 className="text-7xl text-black font-semibold dark:text-white">
                6K
              </h1>
              <h1>
                CLIENTS<br></br>WE HAVE SERVED
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;
