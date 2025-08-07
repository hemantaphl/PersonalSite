import React from "react";
import postData from "../../components/Posts/postsdata";
import PostsCard from "../Posts/PostsCard";

export default function PostSection() {
  // Sort posts by ID in descending order
  const sortedPosts = [...postData].sort((a, b) => b.id - a.id);

  return (
    <section className="py-10 bg-gradient-to-r from-gray-200 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800">Latest Blogs</h2>
        <p className="mt-2 text-slate-600">Read the latest insights and tips.</p>
      </div>

      {/* Blog Section */}
      <div className="flex flex-wrap justify-center gap-8 pt-0">
        {sortedPosts.slice(0, 3).map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/posts"
          className="inline-block bg-purple-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300 transform ease-in-out hover:scale-110"
        >
          View All Blogs →
        </a>
      </div>
    </section>
  );
}
