// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors duration-700">
        <PageTitle>Contact Me</PageTitle>
        <form className="space-y-4 ">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
