import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import PostsCard from "../components/Posts/PostsCard";
import postData from "../components/Posts/postsdata"; // 👈 Imported sorted data

export default function Posts() {
  // Sort by latest (higher ID first)
  const sortedposts = [...postData].sort((a, b) => b.id - a.id);

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleposts = sortedposts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedposts.length;

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
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl font-bold text-black">
                Posts
              </h1>
              <p className="text-black mt-2 text-sm sm:text-base">
                Stay ahead of the curve with fresh content on code, design,
                startups, and everything in between.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-7">
              {visibleposts.map((post) => (
                <PostsCard key={post.id} post={post} />
              ))}
            </div>

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
