import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  getDashboardData,
  getProjects,
  createProject,
} from "../../services/api";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    techStack: "",
    githubLink: "",
    websiteLink: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboard = await getDashboardData();
        const projectData = await getProjects();
        setDashboardData(dashboard);
        setProjects(projectData.projects);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const createdProject = await createProject(newProject);
      setProjects([...projects, createdProject]);
      setNewProject({
        title: "",
        description: "",
        image: "",
        techStack: "",
        githubLink: "",
        websiteLink: "",
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewProject({ ...newProject, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/5 bg-white shadow-md">
        <Sidebar />
      </div>
      <div className="w-4/5 p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>

        {loading ? (
          <p>Loading...</p>
        ) : dashboardData ? (
          <div>
            <p>Welcome, {dashboardData.adminName}!</p>
            <p>Total Projects: {dashboardData.projectsCount}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              Recent Projects
            </h2>
            <ul className="list-disc ml-6">
              {projects.map((project, index) => (
                <li key={index} className="mb-2">
                  {project.title} - {project.description}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              Add New Project
            </h2>
            <form
              onSubmit={handleCreateProject}
              className="bg-white p-6 shadow-lg rounded-lg space-y-4"
            >
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
              )}
              <input
                type="text"
                placeholder="Tech Stack (comma separated)"
                value={newProject.techStack}
                onChange={(e) =>
                  setNewProject({ ...newProject, techStack: e.target.value })
                }
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="GitHub Link"
                value={newProject.githubLink}
                onChange={(e) =>
                  setNewProject({ ...newProject, githubLink: e.target.value })
                }
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Website Link"
                value={newProject.websiteLink}
                onChange={(e) =>
                  setNewProject({ ...newProject, websiteLink: e.target.value })
                }
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Add Project
              </button>
            </form>
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
