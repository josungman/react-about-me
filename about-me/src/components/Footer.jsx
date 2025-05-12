// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:example@example.com">Email</a>
      </div>
      <div>© 2025 My Portfolio. All rights reserved.</div>
    </footer>
  );
}
