import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from "lucide-react";
import Button from "../common/Button";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Blogs", url: "/blogs" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Careers", url: "/careers" },
  ];

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="h-20 bg-slate-50 flex items-center justify-between px-6 lg:px-12 shadow-md">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10 "></img>
          <h1 className="text-gray-950 font-bold text-2xl font-sans hidden md:block tracking-tighter">
            HyperNex Technologies
          </h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navbarLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-950 px-2 hover:text-blue-500 font-sans transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="hidden lg:flex">
          <Link to="/discuss"> {/* Wrap the button with Link */}
            <Button className="flex items-center h-12 rounded-full" onClick={handleClick}>
              discuss the project
              <span className="p-2 text-yellow-500 text-2xl transition-transform duration-300 ease-in-out hover:rotate-45">
                <ArrowUpRight />
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-gray-950 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-slate-50 lg:hidden flex flex-col items-center space-y-4 py-4 shadow-lg">
          {navbarLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-950 px-4 py-2 hover:text-blue-500 font-sans transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Link to="/discuss">
            <Button className="flex items-center h-12 rounded-full" onClick={handleClick}>
              discuss the project
              <span className="p-2 text-yellow-500 text-2xl transition-transform duration-300 ease-in-out hover:rotate-45">
                <ArrowUpRight />
              </span>
            </Button></Link>
        </div>
      )}
    </>
  );
}
