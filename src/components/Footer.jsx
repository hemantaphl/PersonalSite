import { useEffect, useState } from "react";
import WebLogoKshr from "../assets/images/Web-Logo-KSHR.svg";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const nepalOffset = 5.75 * 60;
    const nepalTime = new Date(now.getTime() + (nepalOffset - now.getTimezoneOffset()) * 60000);
    setYear(nepalTime.getFullYear());
  }, []);

  useEffect(() => {
    const orb = document.querySelector(".orb");
    const handleMouseMove = (e) => {
      if (orb) {
        orb.style.left = `${e.clientX}px`;
        orb.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return ( 
    <footer className="1-full relative  bg-gradient-to-r from-gray-200 to-gray-100 text-white overflow-hidden">
      {/* Animated blobs 
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float1" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-float2" />
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-float3" />
      </div> */}
      {/* bg-gradient-to-br */}

      {/* Main content */}
      <div className="relative max-w-screen-xl mx-auto px-6 bg-gradient-to-r from-gray-200 to-gray-100 py-10 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo / Bio */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
              onClick={() => window.location.href = "/"} 
              src={WebLogoKshr} alt="Logo" className="cursor-pointer w-35 transform transition duration-300 ease-in-out hover:scale-120" />
            </div>
            <p className="text-black">Building smarter digital experiences for modern users.</p>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com/kshr.hemanta" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition transform transition duration-300 ease-in-out hover:scale-120">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/kshrhemanta" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:shadow-lg hover:shadow-sky-500/30 transition transform transition duration-300 ease-in-out hover:scale-120">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://github.com/kshrh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/30 transition transform transition duration-300 ease-in-out hover:scale-120">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/hemantaphuyal" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/30 transition transform transition duration-300 ease-in-out hover:scale-120">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://t.me/hemantaphl" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/30 transition transform transition duration-300 ease-in-out hover:scale-120">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Tools", link: "/tools" },
                { name: "Connect", link: "/connect" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="text-black hover:text-purple-700 hover:pl-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-black text-sm"></i>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-black">Email</p>
                  <a href="mailto:kshrh.info@gmail.com" className="text-black hover:text-[#800080] transition">hello@hemantaphuyal.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <i className="fa-brands fa-telegram text-black text-sm"></i>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-black">Telegram</p>
                  <a href="https://t.me/hemantaphl" className="text-black hover:text-purple-500 transition">t.me/hemantaphl</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Stay Updated</h3>
            <p className="text-black mb-4">Subscribe to our newsletter for updates and resources.</p>
            <form>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full bg-gradient-to-r from-gray-200 to-gray-100  border border-gray-700 rounded-lg py-3 px-4 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#800080] hover:bg-gray-700 text-white rounded-lg px-4 py-1 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-700">No spam, unsubscribe at any time.</p>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-4 pt-4 pb-0 mb0 flex flex-col md:flex-row justify-between items-center text-sm text-black">
          <p className="mb-4 md:mb-0">&copy; {year} Hemanta Phuyal. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-purple-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
