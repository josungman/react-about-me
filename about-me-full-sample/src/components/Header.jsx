import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Folder, Mail, Sun, Moon, Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";

export default function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <User size={18} /> },
    { to: "/projects", label: "Projects", icon: <Folder size={18} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 ${scrolled ? "shadow-md" : ""} transition-shadow`}>
      <div className="max-w-7xl mx-auto px-4 py-3 relative">
        {/* ✅ PC: Grid 3열 배치 */}
        <div className="hidden sm:grid grid-cols-3 items-center">
          {/* 좌측: 로고 */}
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-full object-cover border shadow" />
          </div>

          {/* 중앙: 메뉴 */}
          <nav className="flex justify-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex items-center gap-1 ${isActive ? "font-bold underline" : "hover:underline"}`}>
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* 우측: 다크모드 */}
          <div className="flex justify-end">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded transition">
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>

        {/* ✅ 모바일: 햄버거 + 로고 + 토글 */}
        <div className="flex sm:hidden items-center justify-between">
          {/* 왼쪽 햄버거 */}
          <button className="p-2 text-black dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* 가운데 로고 */}
          <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-full object-cover border shadow" />

          {/* 다크모드 */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded transition">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/* ✅ 모바일 메뉴 슬라이드 */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden px-4 pb-4 mt-2 overflow-hidden bg-white/90 dark:bg-gray-900/90 rounded-b-md"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `block py-2 flex items-center gap-2 ${isActive ? "font-bold underline" : "hover:underline"}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
