import React from "react";
import ProjectsCard from "../Projects/ProjectCard";
import projectData from "../Projects/ProjectsData";

export default function ProjectSection() {
  const sortedProjects = [...projectData].sort((a, b) => b.id - a.id);
  const latestProjects = sortedProjects.slice(0, 3);

  return (
    <section className="py-10 bg-gradient-to-r from-gray-200 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800">Latest Projects</h2>
        <p className="mt-2 text-slate-600">Check out some of my latest work and case studies.</p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-8 pt-0">
        {latestProjects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-10 text-center">
        <a
          href="/projects"
          className="inline-block bg-purple-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300 transform ease-in-out hover:scale-110"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
}
