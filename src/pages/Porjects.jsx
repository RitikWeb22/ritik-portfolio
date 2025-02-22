import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Sample projects data
const projects = [
  {
    id: 1,
    image: "project1.png",
    title: "Ecommerce Platform",
    description:
      "A fully functional e-commerce website  and product management. using Html Css and Javascript",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/RitikWeb22",
    websiteLink: "https://ecommerce-web-omega-six.vercel.app/",
  },
  {
    id: 2,
    image: "project2.png",
    title: "Zen-Z-Games",
    description: `zen-z-games is a landing page for games. this is develop by using
      React, Tailwind CSS, and framer motion.`,
    techStack: ["React", "Tailwind CSS", "framer motion"],
    githubLink: "https://github.com/RitikWeb22",
    websiteLink: "https://zen-z-games.vercel.app/",
  },
  {
    id: 3,
    image: "project3.png",
    title: "SyncRoom",
    description:
      "A modern Video Confress platform using react js, tailwind css and Api.",
    techStack: ["React js", "Tailwind CSS", "Framer Motion", "Api"],
    githubLink: "https://github.com/RitikWeb22",
    websiteLink: "https://github.com/",
  },
  {
    id: 4,
    image: "project4.png",
    title: "Cryptocore",
    description:
      "this a website where user can visit and check crypto currencies coins  .",
    techStack: ["React js", "Scss", "Framer Motion", "Api"],
    githubLink: "https://github.com/RitikWeb22",
    websiteLink: "https://cryptocore.vercel.app/",
  },
  {
    id: 5,
    image: "project5.png",
    title: "Code Review",
    description:
      "This Website Made to check the errors are coming from the code .",
    techStack: ["React js", "Tailwind", "Api"],
    githubLink: "https://github.com/RitikWeb22",
    websiteLink: "https://code-review-frontend-lcvk.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen py-3 bg-gray-50">
      <div className="head px-10">
        <motion.h1
          className="text-2xl font-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
      </div>
      <motion.div
        className="project-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
