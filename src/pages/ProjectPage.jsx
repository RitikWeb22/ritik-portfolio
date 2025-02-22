import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { getProjects } from "../services/api";

const itemsPerPage = 6;

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data.projects);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(projects.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="flex">
      <div className="navbar w-[20%]">
        <Navbar />
      </div>
      <div className="main px-10 lg:w-[80%] md:w-full">
        <h1 className="text-2xl font-semibold border-b-black border-2 border-solid py-2 w-32">
          Projects
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="grid py-10 grid-cols-3 gap-10">
              {currentProjects.map((project, index) => (
                <Card key={index} {...project} />
              ))}
            </div>
            <div className="flex justify-between py-5">
              <button
                onClick={prevPage}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                disabled={
                  currentPage === Math.ceil(projects.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          </>
        )}
        <Footer />
      </div>
    </section>
  );
};

export default ProjectPage;
