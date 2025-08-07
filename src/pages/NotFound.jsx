import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="pt-10 min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100">
      <Preloader />
      <Navbar />
        <main className="flex flex-col items-center justify-center text-center px-4 py-19 bg-gradient-to-r from-gray-200 to-gray-100">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-black pt-32">404</h1>
          <p className="mt-4 text-base sm:text-lg text-black">Oops, something went wrong.</p>
          <p className="text-base sm:text-lg text-black">Sorry, we couldn't find your page.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-x-2 bg-purple-500 hover:bg-purple-800 text-white text-sm font-medium px-5 py-2.5 rounded-md transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </main>
            <Footer />
      </div>
    </>
  );
}
