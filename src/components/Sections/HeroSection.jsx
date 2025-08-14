import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div>
          <p className="text-[#800080] font-medium text-lg mb-2">
            Hi, I am
          </p>
          <h1 className=" text-5xl lg:text-6xl font-bold text-gray-900  leading-tight">
            Hemanta Phuyal
          </h1>
          <h2 className="text-2xl lg:text-3xl text-[#800080] mt-4">
            You're welcome here.
          </h2>
        </div>
        <p className="text-lg text-black leading-relaxed">
          Passionate about cybersecurity and digital forensics, I enjoy solving problems and continuously learning to build a safer digital future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => (window.location.href = "/tools")}
            className="cursor-pointer bg-[#800080] text-white px-8 py-3 rounded-lg hover:bg-gray-700 font-medium transform transition duration-300 ease-in-out hover:scale-105"
          >
            Explore Tools
          </button>

          <button
            onClick={() => (window.location.href = "/connect")}
            className="cursor-pointer border-2 border-[#800080] text-[#800080] px-8 py-3 rounded-lg hover:border-purple-700 hover:text-purple-700 font-medium transform transition duration-300 ease-in-out hover:scale-105"
          >
            Connect
          </button>
        </div>

        <div className="flex justify-center space-x-6 text-slate-600">
          <a
            href="https://facebook.com/kshr.hemanta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <i className="fab fa-facebook-f w-6 h-6 text-current"></i>
          </a>
          <a
            href="https://x.com/kshrhemanta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <i className="fab fa-x-twitter w-6 h-6 text-current"></i>
          </a>
          <a
            href="https://github.com/kshrh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <i className="fab fa-github w-6 h-6 text-current"></i>
          </a>
          <a
            href="https://linkedin.com/in/hemantaphuyal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <i className="fab fa-linkedin-in w-6 h-6 text-current"></i>
          </a>
          <a
            href="https://t.me/hemantaphl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            <i className="fab fa-telegram w-6 h-6 text-current"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
