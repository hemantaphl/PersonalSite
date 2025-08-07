import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import ProjectsCard from "../components/Projects/ProjectCard";
import projectData from "../components/Projects/ProjectsData";

export default function Projects() {
  const sortedProjects = [...projectData].sort((a, b) => b.id - a.id); // Optional sorting
  const [visibleCount, setVisibleCount] = useState(8);
  const visibleProjects = sortedProjects.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProjects.length;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="pt-10 min-h-screen flex flex-col bg-[#0D1117] text-gray-900">
      <Preloader />
      <Navbar />

      <main className="flex-grow">
        <section className="px-6 py-24 bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                My Projects
              </h2>
              <p className="text-black mt-2 text-sm sm:text-base">
                Check out some of my recent work and case studies.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {visibleProjects.map((project) => (
                <ProjectsCard key={project.id} project={project} />
              ))}
            </div>

            {/* View More Button */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleViewMore}
                  className="inline-flex items-center rounded-md border border-transparent bg-purple-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 transition"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
