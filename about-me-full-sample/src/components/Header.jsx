// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Folder, Mail, Sun, Moon } from "lucide-react";

export default function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 ${scrolled ? "shadow-md" : ""} transition-shadow`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <nav className="flex space-x-6">
          <NavLink to="/" className={({ isActive }) => `flex items-center space-x-1 ${isActive ? "underline font-bold" : "hover:underline"}`}>
            <Home size={18} /> <span>Home</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `flex items-center space-x-1 ${isActive ? "underline font-bold" : "hover:underline"}`}>
            <User size={18} /> <span>About</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `flex items-center space-x-1 ${isActive ? "underline font-bold" : "hover:underline"}`}>
            <Folder size={18} /> <span>Projects</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `flex items-center space-x-1 ${isActive ? "underline font-bold" : "hover:underline"}`}>
            <Mail size={18} /> <span>Contact</span>
          </NavLink>
        </nav>

        {/* 다크모드 토글 */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-transparent text-black dark:text-white rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
        >
          {darkMode ? <Sun size={22} strokeWidth={2.5} /> : <Moon size={22} strokeWidth={2.5} />}
        </button>
      </div>
    </header>
  );
}
