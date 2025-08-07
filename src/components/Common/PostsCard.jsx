import React from "react";

export default function PostsCard({ blog }) {
  return (
    <a
      href={blog.link}
      className="group relative mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-lg transition active:opacity-90"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="aspect-[3/4] w-full object-cover grayscale-[75%] transition ease-out group-hover:scale-105 group-hover:grayscale-0 group-active:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl bg-zinc-600/50 mask-t-from-50% backdrop-blur-xs transition-all duration-300 ease-out group-hover:bg-zinc-900/50 group-hover:opacity-0"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="p-7 text-right transition duration-300 ease-out group-hover:-translate-y-full">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/50 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
                aria-hidden="true"
                className="inline-block h-4 w-4"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
              <span>{blog.tags?.[0] || "Blog"}</span>
            </div>
          </div>
          <div className="p-7 transition duration-300 ease-out group-hover:translate-y-full">
            <h3 className="text-2xl font-black text-white">{blog.title}</h3>
            <p className="mt-1 text-sm text-white/90">
              {blog.description || "Read more about this post."}
            </p>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="pointer-events-none absolute inset-0 flex scale-0 items-center justify-center opacity-0 transition duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-active:scale-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 rotate-45 text-white"
          >
            <path d="m5 9 7-7 7 7" />
            <path d="M12 16V2" />
            <circle cx="12" cy="21" r="1" />
          </svg>
        </div>
      </div>
    </a>
  );
}
