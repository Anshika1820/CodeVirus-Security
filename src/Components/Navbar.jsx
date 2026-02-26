import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="text-xl font-semibold text-[#1d3b6d]">
            Codevirus Security
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            <a href="/" className="hover:text-[#1d3b6d]">Home</a>
            <a href="/services" className="hover:text-[#1d3b6d]">Services</a>
            <a href="/projects" className="hover:text-[#1d3b6d]">Projects</a>
            <a href="/team" className="hover:text-[#1d3b6d]">Team</a>
            <a href="/about" className="hover:text-[#1d3b6d]">About Us</a>

          </div>

          {/* Right Section Desktop */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-full w-48 focus:outline-none"
            />

            {/* Buttons */}
            <button className="px-5 py-2 bg-[#1d3b6d] text-white rounded-full">
              Login
            </button>

            <button className="px-5 py-2 border border-[#1d3b6d] rounded-full">
              Contact
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-6 pb-6 space-y-4">

          <a href="/" className="block">Home</a>
          <a href="/services" className="block">Services</a>
          <a href="/projects" className="block">Projects</a>
          <a href="/team" className="block">Team</a>
          <a href="/about" className="block">About Us</a>

          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-full"
          />

          <button className="w-full px-5 py-2 bg-[#1d3b6d] text-white rounded-full">
            Login
          </button>

          <button className="w-full px-5 py-2 border border-[#1d3b6d] rounded-full">
            Contact
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
