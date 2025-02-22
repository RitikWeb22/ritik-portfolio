import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaCog,
  FaPlus,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen bg-gray-900 text-white flex flex-col p-4 fixed">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>

      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/projects"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaProjectDiagram />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/about"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaUser />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/contact"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaEnvelope />
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaCog />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/new-page"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
            >
              <FaPlus />
              <span>Add Page</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
