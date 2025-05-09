import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import PageWrapper from "../components/PageWrapper";

// 임시 이미지 링크 (또는 실제 파일 import로 교체)
const profileImg = "https://via.placeholder.com/150x150.png?text=My+Photo";
const stackImg = "https://via.placeholder.com/600x200.png?text=Tech+Stack";

// ✅ Swiper 최신 버전용 import (10+)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function About() {
  return (
    <PageWrapper className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-700">
      {/* 인트로 */}
      <section className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <PageTitle>About Me</PageTitle>
        <motion.img
          src={profileImg}
          alt="My Profile"
          className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <p className="text-lg max-w-2xl">
          안녕하세요! 저는 <span className="font-semibold text-blue-600 dark:text-blue-400">성만</span>입니다. 사용자 중심의 UI와 성능을 중요하게 생각하는 <strong>개발자</strong>
          입니다.
        </p>
      </section>

      {/* 기술 스택 */}
      <section className="py-20 px-8 bg-white dark:bg-gray-800 transition">
        <h2 className="text-3xl font-bold text-center mb-8">💻 Skills</h2>
        <motion.img
          src={stackImg}
          alt="Tech Stack"
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* 학력 */}
      <section className="py-20 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">🎓 Education</h2>
        <motion.div
          className="max-w-xl mx-auto space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">ㅇㅇ대학교 - 컴퓨터공학과</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2015 ~ 2019</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">ㅇㅇ고등학교</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2012 ~ 2015</p>
          </div>
        </motion.div>
      </section>

      {/* 사진 슬라이드 */}
      <section className="py-20 px-8 bg-white dark:bg-gray-800">
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
