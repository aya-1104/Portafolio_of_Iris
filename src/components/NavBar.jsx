import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Titles from "./Titles";

const navItems = [
  { label: "Home", target: "/#home" },
  { label: "Skills", target: "/#skills" },
  { label: "Projects", target: "/#projects" },
  { label: "Contact", target: "/#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1f1c2f] h-[8dvh] flex justify-between items-center px-4 lg:px-8 shadow-sm">
    <Titles h1={'The Portfolio'} h2={'of Iris'} className="text-xl justify-start"/>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between space-x-8">
        {navItems.map((item) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a
              href={item.target}
              className="text-white text-l hover:underline hover:scale-110 hover:text-[#7c2b91] transition-transform duration-300"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:bg-purple-50 p-2 rounded-md transition-colors duration-200"
          aria-label="Abrir menú"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>

    {/* Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-[#1f1c2f]/30 z-40 lg:hidden"
        onClick={toggleMenu}
      />
    )}

    {/* Sidebar */}
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-end p-4 border-b h-[8dvh]">
        <button
          onClick={toggleMenu}
          className="text-[#1f1c2f] hover:bg-purple-50 p-1 rounded-md transition-colors duration-200"
          aria-label="Cerrar menú"
        >
          <X size={24} />
        </button>
      </div>

      {/* Sidebar Menu Items */}
      <div className="py-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.target}
            onClick={toggleMenu}
            className="block px-6 py-4 text-[#1f1c2f]] text-lg hover:bg-purple-50 hover:scale-105 transition-all duration-200 border-b border-gray-100 last:border-b-0"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
    </>
  );
}
