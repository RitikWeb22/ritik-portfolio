// ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

const Card = ({
  image,
  title,
  description,
  techStack = [],
  githubLink,
  websiteLink,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        {techStack.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Tech Stack</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex space-x-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              GitHub
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
