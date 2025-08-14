import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader/Preloader";
import ProfileImage from "../assets/images/Profile.png";
import Resume from "../assets/Files/Resume-HemantaPhuyal.pdf";

export default function About() {
  return (
    <>
    <div className="pt-10 min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100 ">
      <Preloader />
      <Navbar />
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4">
          {/* About Section */}
          <section className="bg-gradient-to-r from-gray-200 to-gray-100  py-11 pt-22">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="flex items-center gap-x-4">
                <div className="shrink-0">
                  <img className="w-16 h-16 rounded-full object-cover ring-2 ring-[#800080] shadow-md" src={ProfileImage} alt="Avatar" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Hemanta Phuyal</h3>
                  <p className="text-sm text-black">Cybersecurity | Cloud | Network</p>
                </div>
              </div>
              <div className="pt-5">
                <a href={Resume} className="bg-[#800080] text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 inline-block">Download Resume</a>
              </div>
              <div className="mt-8 space-y-4 text-black text-base">
                <p>A passionate and motivated individual with a strong background in computer science and a deep interest in cybersecurity and digital forensics. Skilled in problem-solving, creative thinking, and quickly adapting to new technologies and concepts...</p>
              </div>
            </div>
          </section>

          {/* Volunteering */}
          <section className="py-7">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">Volunteering Experience</h2>
                <p className="text-black mt-2 text-sm sm:text-base"> A summary of my roles, responsibilities, and contributions in various positions.</p>
              </div>
              <div className="space-y-10">
                <div className="group relative flex items-start gap-x-6">
                  <div className="flex-1 bg-gradient-to-r from-gray-200 to-gray-100 border border-[#800080] p-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105">
                    <h3 className="text-sm text-black">19 & 20 December 2024</h3>
                    <h4 className="text-lg font-semibold text-black">Exhibitor</h4>
                    <p className="mt-2 text-sm text-black">ISMT Expo 2.0</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="py-7">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">Education</h2>
                <p className="text-black mt-2 text-sm sm:text-base">A look at my academic history and the institutions I have attended.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-[#800080] bg-gradient-to-r from-gray-200 to-gray-100  p-6 rounded-lg shadow-md space-y-4 transform transition duration-300 ease-in-out hover:scale-105">
                  <p className="text-sm text-black">2024 - Present</p>
                  <h3 className="text-lg font-semibold text-black">BSc (Hons) Cybersecurity & Digital Forensics</h3>
                  <p className="text-sm text-black">ISMT / University of Sunderland</p>
                </div>
                <div className="border border-[#800080] bg-gradient-to-r from-gray-200 to-gray-100  p-6 rounded-lg shadow-md space-y-4 transform transition duration-300 ease-in-out hover:scale-105">
                  <p className="text-sm text-black">2021 - 2023</p>
                  <h3 className="text-lg font-semibold text-black">Management +2</h3>
                  <p className="text-sm text-black">Merryland Secondary School</p>
                  <p className="text-sm text-black">GPA 3.30</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="py-7 bg-gradient-to-r from-gray-200 to-gray-100  text-gray-800 px-6">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Skills</h2>
              <p className="text-black mt-2 text-sm sm:text-base">A collection of technical and interpersonal abilities I have developed over time.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-base text-black max-w-4xl mx-auto">
              {[
                "Basic Python", "Basic Cloud Computing", "Network Fundamentals", "Basic Cyber Security Skills",
                "Linux", "Windows", "Strong Computer Literacy", "Good Communication",
                "Time Management", "Analytical", "Adaptability"
              ].map(skill => (
                <div key={skill} className="border border-[#800080] bg-gradient-to-r from-gray-200 to-gray-100  rounded-md px-3 py-3 shadow-md transform transition duration-300 ease-in-out hover:scale-105">{skill}</div>
              ))}
            </div>
          </section>
        </main>

      <Footer />
      </div>

    </>
  );
}
