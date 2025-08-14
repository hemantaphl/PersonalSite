import { useState } from "react";
import { NavLink } from "react-router-dom";
import WebLogoKshr from "../assets/images/Web-Logo-KSHR.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-gray-200 to-gray-100 text-black fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" end>
              <img src={WebLogoKshr} alt="Logo" className="h-10 sm:h-12 object-contain transform transition duration-300 ease-in-out hover:scale-120 hover:fill-[#800080] group-hover:text-[#800080]" fill="currentColor"/>
            </NavLink>
          </div>

          

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 text-sm sm:text-base ">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/tools" label="Tools" />
          </nav>

          {/* Right Section: Connect + Hamburger */}
          <div className="flex items-center space-x-3">
            {/* "Connect" Button: visible on all screens */}
            <NavLink
              to="/connect"
              className="inline-block bg-[#800080] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium hover:bg-gray-700 transform transition duration-300 ease-in-out hover:scale-120"
            >
              Connect
            </NavLink>

            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden cursor-pointer relative z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-current rounded transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current rounded transition duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current rounded transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <nav
            className={`absolute top-full right-4 mt-2 w-full max-w-[250px] rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 dark:white px-6 py-5 shadow-lg lg:hidden transition-transform duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col space-y-4">
              <MobileNavItem to="/" label="Home" onClick={() => setIsOpen(false)} />
              <MobileNavItem to="/about" label="About" onClick={() => setIsOpen(false)} />
              <MobileNavItem to="/tools" label="Tools" onClick={() => setIsOpen(false)} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Desktop Nav Link
const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      isActive
        ? "text-[#800080] font-bold"
        : "text-gray-700 dark:text-black hover:text-[#800080] transition"
    }
  >
    {label}
  </NavLink>
);

// Mobile Nav Link
const MobileNavItem = ({ to, label, onClick }) => (
  <li>
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "block text-purple-700 font-bold"
          : "block text-gray-800 dark:text-black hover:text-purple-700 transition"
      }
    >
      {label}
    </NavLink>
  </li>
);
