import React from "react";

export default function ProjectsCard({ project }) {
  return (
    <div className="w-full sm:w-[320px] flex">
      <div className="bg-gradient-to-r from-gray-200 to-gray-100 shadow-sm transition hover:shadow-md transform transition duration-300 ease-in-out hover:scale-105 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
          />
          {/* Optional overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs font-semibold uppercase px-3 py-1 rounded-full bg-opacity-20 ${
                  tag.color.includes("bg-") ? tag.color.replace("bg-", "bg-opacity-40 ") : "bg-gray-200 text-gray-700"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 flex-grow line-clamp-3">{project.description}</p>

          {/* Link */}
          <a
            href={project.link}
            className="mt-6 inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition"
            aria-label={`View case study for ${project.title}`}
          >
            View project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
