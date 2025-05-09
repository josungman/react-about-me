// src/components/PageWrapper.jsx
import { motion } from "framer-motion";

export default function PageWrapper({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-700 ${className}`}
    >
      {children}
    </motion.div>
  );
}
