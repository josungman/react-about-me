import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTitle from "../components/PageTitle";
import PageWrapper from "../components/PageWrapper";
import profileImg from "../assets/profile.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const stackImg = "https://via.placeholder.com/600x200.png?text=Tech+Stack";

const SkillsParallaxText = () => {
  const leftRef = useRef(null);
  const { scrollYProgress: leftScroll } = useScroll({
    target: leftRef,
    offset: ["start end", "end start"],
  });
  const leftX = useTransform(leftScroll, [0, 1], [-100, 0]);

  const rightRef = useRef(null);
  const { scrollYProgress: rightScroll } = useScroll({
    target: rightRef,
    offset: ["start end", "end start"],
  });
  const rightX = useTransform(rightScroll, [0, 1], [100, 0]);

  return (
    <div className="relative z-10 flex flex-col gap-8 max-w-4xl mx-auto mt-12">
      <motion.div ref={leftRef} className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-300" style={{ x: leftX }}>
        💡 프론트엔드 개발 경험
      </motion.div>

      <motion.div ref={rightRef} className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-300 text-right" style={{ x: rightX }}>
        ⚙️ 퍼포먼스 최적화 역량
      </motion.div>
    </div>
  );
};

export default function About() {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const uniRef = useRef(null);
  const { scrollYProgress: uniScroll } = useScroll({
    target: uniRef,
    offset: ["start end", "end start"],
  });
  const uniX = useTransform(uniScroll, [0, 1], [-100, 0]);

  const highRef = useRef(null);
  const { scrollYProgress: highScroll } = useScroll({
    target: highRef,
    offset: ["start end", "end start"],
  });
  const highX = useTransform(highScroll, [0, 1], [-100, 0]);

  return (
    <PageWrapper className="px-0 pt-2 text-gray-800 dark:text-gray-200 transition-colors duration-700">
      <section ref={introRef} className="relative z-0 snap-start flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: -1, opacity: videoOpacity }}
        >
          <source src="/About_Video/bg-video.mp4" type="video/mp4" />
        </motion.video>

        <PageTitle>
          <span className="relative z-10">About Me</span>
        </PageTitle>
        <motion.img
          src={profileImg}
          alt="My Profile"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <p className="text-lg max-w-2xl relative z-10">
          안녕하세요! 저는 <span className="font-semibold text-blue-600 dark:text-blue-400">성만</span>입니다. 사용자 중심의 UI와 성능을 중요하게 생각하는 <strong>개발자</strong>
          입니다.
        </p>
      </section>

      <section className="snap-start relative min-h-screen flex flex-col justify-center px-8 bg-white dark:bg-gray-800 transition overflow-hidden">
        <div
          className="absolute inset-0 z-0 animate-wave dark:hidden"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, #93c5fd 0%, transparent 25%), radial-gradient(circle at 80% 80%, #bfdbfe 0%, transparent 25%)",
            backgroundSize: "200% 200%",
            opacity: 0.3,
          }}
        />
        <div
          className="absolute inset-0 z-0 animate-wave hidden dark:block"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, #0ea5e9 0%, transparent 25%), radial-gradient(circle at 80% 80%, #6366f1 0%, transparent 25%)",
            backgroundSize: "200% 200%",
            opacity: 0.2,
          }}
        />

        <motion.h2
          className="text-3xl font-bold text-center mb-8 relative z-10 text-blue-600 dark:text-blue-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          💻 Skills
        </motion.h2>

        <SkillsParallaxText />

        <motion.img
          src={stackImg}
          alt="Tech Stack"
          className="mx-auto max-w-4xl relative z-10 mt-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700 dark:text-blue-300">🎓 Education</h2>

        <div className="max-w-xl mx-auto space-y-8">
          <motion.div ref={uniRef} className="border-l-4 border-blue-500 pl-4" style={{ x: uniX }}>
            <h3 className="font-semibold text-lg">올대학교 - 코바스코 공학과</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2015 ~ 2019</p>
          </motion.div>

          <motion.div ref={highRef} className="border-l-4 border-blue-500 pl-4" style={{ x: highX }}>
            <h3 className="font-semibold text-lg">올고등학교</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2012 ~ 2015</p>
          </motion.div>
        </div>
      </section>

      <section className="snap-start min-h-screen py-20 px-8 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">📸 Life & Projects</h2>
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={30} slidesPerView={1} className="max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((num) => (
            <SwiperSlide key={num}>
              <img src={`https://via.placeholder.com/800x400?text=Slide+${num}`} alt={`Slide ${num}`} className="rounded-lg shadow-lg w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </PageWrapper>
  );
}
