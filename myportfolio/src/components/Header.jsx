import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
        {/* Mobile Hamburger Menu */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/projects" className="text-white">
            Projects
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
