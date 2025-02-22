import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiExpress,
  SiSass,
  SiBootstrap,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack",
    hoverColor: "#FF6B6B",
  },
  {
    icon: (
      <div className="flex items-center">
        <FaHtml5 className="mr-1" />
        <FaCss3Alt />
      </div>
    ),
    title: "HTML & CSS",
    hoverColor: "#F7DC6F",
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    hoverColor: "#68A063",
  },
  {
    icon: <FaReact />,
    title: "React",
    hoverColor: "#61DAFB",
  },
  {
    icon: (
      <div className="flex items-center">
        <FaNodeJs className="mr-1" />
        <SiExpress />
      </div>
    ),
    title: "Node & Express",
    hoverColor: "#68A063",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
    hoverColor: "#38B2AC",
  },
  {
    icon: <SiFigma />,
    title: "Figma",
    hoverColor: "#A259FF",
  },
  {
    icon: <SiSass />,
    title: "SCSS",
    hoverColor: "#CC6699",
  },
  {
    icon: <SiBootstrap />,
    title: "Bootstrap",
    hoverColor: "#7952B3",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    hoverColor: "#333333",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    hoverColor: "#4DB33D",
  },
];

const MinimalSkills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8"
    >
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-200"
            initial={{ backgroundColor: "#ffffff", color: "#000000" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: skill.hoverColor,
              color: "#ffffff",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <div className="text-sm font-medium">{skill.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MinimalSkills;
