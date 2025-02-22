import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Web Developer", "Frontend Developer", "Full Stack Developer"];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // change text every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const Home = () => {
  // Variants for container and its children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id="home"
      className="min-h-screen md:bg-white lg:bg-blue-400 px-4 sm:px-6 md:px-10 flex items-center"
      style={{ borderRadius: "0 0 300px 0" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <motion.div
          className="flex flex-col   gap-8 text-center md:text-left w-full md:w-1/2"
          variants={leftVariants}
        >
          <motion.h1 className="text-4xl pt-20 md:text-5xl font-bold">
            Welcome to Ritik's Portfolio
          </motion.h1>
          <motion.h2 className="text-2xl md:text-3xl font-thin">
            Innovating Solutions Through Creativity & Technology
          </motion.h2>
          <motion.h3 className="text-xl text-white md:text-2xl font-semibold">
            <RotatingText />
          </motion.h3>
          <motion.button
            className="btn  py-3 bg-gray-900 hover:bg-gray-500 text-white rounded-lg lg:w-full md:w-1/2 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="resume.pdf" download target="_blank">
              Resume Download
            </a>
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex justify-center lg:w-full md:w-1/2"
          variants={rightVariants}
        >
          <motion.img
            className="max-w-72 rounded-lg"
            src="ritik.jpeg"
            alt="Profile"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
