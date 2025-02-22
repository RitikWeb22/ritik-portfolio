import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Desktop Sidebar (remains unchanged) */}
      <div className="hidden md:flex fixed top-0 left-0 w-72 text-center flex-col justify-center gap-4 py-10 bg-gray-900 text-white p-4 z-50 h-screen">
        <div className="flex flex-col h-screen justify-between">
          <div>
            <h1 className="text-4xl ">
              Ritik <br /> Developer
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center px-10 gap-2">
            <HashLink
              className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
              smooth
              to="/#home"
            >
              Home
            </HashLink>
            <HashLink
              className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
              smooth
              to="/#about"
            >
              About us
            </HashLink>
            <HashLink
              className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
              smooth
              to="/#skills"
            >
              Skills
            </HashLink>
            <HashLink
              className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
              smooth
              to="/#projects"
            >
              Projects
            </HashLink>
            <HashLink
              className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
              smooth
              to="/#contact"
            >
              Contact
            </HashLink>
          </div>
          <div className="flex justify-center px-10 gap-3 text-2xl">
            <a
              href="https://www.instagram.com/the_ritik22/"
              target="_blank"
              className="hover:text-purple-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-web-538280347/"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RitikWeb22"
              target="_blank"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar with Hamburger Icon */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50 flex justify-between items-center">
        <h1 className="text-2xl">Ritik Developer</h1>
        <button onClick={toggleMobileMenu} className="text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-72 h-screen bg-gray-900 text-white p-4 z-50">
          <div className="flex flex-col h-full justify-evenly">
            <div>
              <h1 className="text-4xl pb-10">Ritik Developer</h1>
            </div>
            <div className="flex flex-col justify-center items-center px-10 gap-4">
              <HashLink
                onClick={toggleMobileMenu}
                className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
                smooth
                to="/#home"
              >
                Home
              </HashLink>
              <HashLink
                onClick={toggleMobileMenu}
                className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
                smooth
                to="/#about"
              >
                About us
              </HashLink>
              <HashLink
                onClick={toggleMobileMenu}
                className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
                smooth
                to="/#skills"
              >
                Skills
              </HashLink>
              <HashLink
                onClick={toggleMobileMenu}
                className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
                smooth
                to="/#projects"
              >
                Projects
              </HashLink>
              <HashLink
                onClick={toggleMobileMenu}
                className="px-14 rounded-lg py-4 hover:bg-orange-400 transition-all duration-500 ease"
                smooth
                to="/#contact"
              >
                Contact
              </HashLink>
            </div>
            <div className="flex justify-center px-10 gap-3 text-2xl">
              <a
                href="https://www.instagram.com/the_ritik22/"
                target="_blank"
                className="hover:text-purple-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-web-538280347/"
                target="_blank"
                className="hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/RitikWeb22"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
