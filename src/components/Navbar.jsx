import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import YellowButton from "./ui/button";
import logo from '../assets/nexgeneducationlogo.png'
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Courses",
      link: "/#courses",
    },
    {
      name: "Universities",
      link: "/",
    },{
      name: "Contact",
      link: "/contact",
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
      <div className="relative mx-auto flex max-w-[95%] items-center justify-between gap-4 px-4 py-4 md:max-w-[80%] md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
        >
          <img src={logo} alt="NexGenEducation Logo" className="h-auto w-30 md:w-36" />
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute hidden -translate-x-1/2 left-1/2 lg:flex">
          <nav className="flex items-center justify-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                to={item.link}
                smooth
                className="group relative inline-flex items-center py-2 text-md font-medium text-[#2a3572] transition-colors duration-200 hover:text-[#edcf2e]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#edcf2e] transition-all duration-300 group-hover:w-full" />
              </HashLink>
            ))}
          </nav>
        </div>

        <div className="items-center hidden shrink-0 lg:flex">
          <Link to="/suggest-university">
            <YellowButton name="Suggest me a University" className="cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 p-2 focus:outline-none lg:hidden"
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
            className="fixed inset-0 z-40 h-screen mt-[80px] bg-black/60 lg:hidden"
            onClick={closeMenu}
          />
          {/* Mobile Menu */}
          <div className="absolute left-0 right-0 z-50 duration-300 bg-white shadow-2xl top-full animate-in fade-in slide-in-from-top-0 lg:hidden">
            <div className="mx-auto max-w-[95%] space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={closeMenu}
                  className="block border-b border-[#e4e4e4] px-4 py-3 font-medium text-[#2a3572]"
                >
                  {item.name}
                </Link>
              ))}
            <div className="flex items-center w-full">
              <Link to="/suggest-university" onClick={closeMenu} className="w-full">
                <YellowButton name="Suggest me a University" className="cursor-pointer" />
              </Link>
            </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
