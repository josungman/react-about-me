// src/App.jsx
import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollManager from "./components/ScrollManager";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ⭐ 새로고침 시 스크롤 복원 방지
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <Router>
      <ScrollManager /> {/* ✅ 라우터 안에서 최상단에 배치 */}
      <div className={darkMode ? "dark" : ""}>
        <div className="flex flex-col min-h-screen transition-colors duration-700 bg-white text-black dark:bg-gray-900 dark:text-white">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-grow pt-10">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
