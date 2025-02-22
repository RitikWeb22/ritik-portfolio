import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "./About";
import Porjects from "./Porjects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <section className="flex">
      <div className="navbar w-[20%]">
        <Navbar />
      </div>
      <div className="main   lg:w-[80%] md:w-full">
        <Home />
        <About />
        <Skills />
        <Porjects />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default HomePage;
