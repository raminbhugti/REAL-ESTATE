import React from "react";
import { DarkModeProvider } from "./Components/DarkModeContext";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/ABout";
import Areas from "./Components/Areas";
import Property from "./Components/Property";
import Services from "./Components/Services";
import Testamonial from "./Components/Testamonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <Areas />
        <Property />
        <Services />
        <Testamonial />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
