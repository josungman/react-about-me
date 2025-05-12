// src/components/PageTitle.jsx
import React from "react";
import { motion } from "framer-motion";

export default function PageTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200"
    >
      {children}
    </motion.h2>
  );
}
