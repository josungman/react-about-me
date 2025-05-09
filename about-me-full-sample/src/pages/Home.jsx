import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function Home() {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    const generateBlobs = () =>
      Array.from({ length: 6 }, (_, i) => ({
        top: `${Math.floor(Math.random() * 90)}%`,
        left: `${Math.floor(Math.random() * 90)}%`,
        size: `${Math.floor(Math.random() * 60) + 60}px`, // 60~120px
        delay: `${i * 0.5}s`,
      }));

    setBlobs(generateBlobs());

    const interval = setInterval(() => {
      setBlobs(generateBlobs());
    }, 6000); // 6초마다 위치 갱신

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper className="relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 🔵 물방울 랜덤 위치 + 진하게 + 그림자 */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{
            top: blob.top,
            left: blob.left,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute rounded-full blur-xl opacity-30 animate-blob3d z-0 drop-shadow-lg 
               bg-blue-400 dark:bg-cyan-500"
          style={{
            width: blob.size,
            height: blob.size,
            animationDelay: blob.delay,
            position: "absolute",
          }}
        />
      ))}

      {/* 상단 인사 */}
      <motion.p
        className="text-sm uppercase tracking-widest text-blue-500 mb-4 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to my space
      </motion.p>

      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I’m{" "}
        <span className="bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
          Sungman
        </span>
      </motion.h1>

      {/* ✅ Typewriter 효과 */}
      <motion.p
        className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl z-10 min-h-[2.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Typewriter
          words={["Full-Stack Developer 🧩", "Building with React ⚛️", "Clean Code Enthusiast ✨"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* 버튼 영역 */}
      <motion.div className="flex space-x-4 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white hover:shadow-md transition-transform transform hover:scale-105 duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
    </PageWrapper>
  );
}
