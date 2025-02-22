import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";

const About = () => {
  const aboutText =
    "I am a passionate Frontend Developer with a strong focus on building modern, high-performance web applications. With expertise in React.js, Tailwind CSS, and JavaScript, I specialize in crafting sleek, responsive, and user-friendly interfaces. My goal is to create seamless digital experiences by combining clean code, efficient performance, and visually appealing designs.Always eager to learn and innovate, I thrive in fast-paced environments where creativity meets technology. Let’s build something amazing together";

  return (
    <motion.div
      id="about"
      className="text-2xl flex px-10 justify-center items-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="lg:px-20 md:px-10 lg:h-3/4  gap-10 lg:bg-gray-200 md:bg-none flex flex-col justify-center items-center"
        style={{ borderRadius: "200px 0px 0px 200px" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl border-b-2 border-solid border-black"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.div
          className="text-sm text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Typewriter text={aboutText} speed={40} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
