import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="images/logo1.webp"
              alt="Empire Blue Logo"
              className="h-10 w-auto object-contain hover:cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9 text-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-[#4384FF] font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4384FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <button className="bg-[#03009B] text-white px-7 py-2 rounded-full text-xl font-medium transition-colors hover:cursor-pointer flex items-center space-x-2 shadow-md">
              <span>Book Now</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute left-0 block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 top-2" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute left-0 block w-full h-0.5 bg-gray-600 top-2 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 top-2" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col py-2 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-xl text-gray-600 hover:text-blue-700 transition-colors px-2 py-2"
              >
                {link.name}
              </a>
            ))}

            <button className="w-full bg-[#03009B] text-xl text-white px-4 py-2 mb-5 rounded-xl text-center hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2">
              Book Now
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
