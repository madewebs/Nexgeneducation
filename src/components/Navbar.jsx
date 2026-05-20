import React, { useState } from "react";
import { Link } from "react-router-dom";
import YellowButton from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Universities",
      link: "/",
    },
    {
      name: "Career",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full shadow-md bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[95%] lg:max-w-[80%] items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#2a3572] hover:text-[#edcf2e] transition-colors">
          Logoo
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-8 md:flex lg:gap-10">
          <nav className="flex items-center justify-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-md font-medium text-[#2a3572] hover:text-[#edcf2e] transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#edcf2e] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
          <div className="shrink-0">
            <YellowButton name="Suggest me a University" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#2a3572] transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#2a3572] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#2a3572] transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu with Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/40 z-40 top-[70px]"
            onClick={closeMenu}
          />
          {/* Mobile Menu */}
          <div className="absolute left-0 right-0 z-50 duration-300 bg-white shadow-2xl md:hidden top-full animate-in fade-in slide-in-from-top-2">
            <div className="max-w-[95%] mx-auto px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-[#2a3572] font-medium rounded-lg hover:bg-[#f0f4ff] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <YellowButton name='Suggest me a University'/>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
