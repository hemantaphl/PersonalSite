import React from "react";

export default function PostsCard({ post }) {
  return (
    <a
      href={post.link}
      className="border border-purple-400 group block max-w-sm rounded-xl border border-gray-200 bg-gradient-to-r from-gray-200 to-gray-100 shadow-sm transition hover:shadow-md transform transition duration-300 ease-in-out hover:scale-105"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Date and Tag */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{post.date}</span>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-700">
            {post.tags?.[0] || "post"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900 group-hover:text-purple-700">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {post.description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <img
            src={post.authorImage}
            alt={post.authorName}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-medium text-gray-800">{post.authorName}</p>
            <p className="text-xs text-gray-500">{post.authorPosition}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
