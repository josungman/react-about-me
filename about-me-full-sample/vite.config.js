// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ✅ 추가

export default defineConfig({
  plugins: [react()],
  server: {
    // ✅ 개발 중 새로고침 시 SPA 라우팅 깨짐 방지
    historyApiFallback: true,
    port: 5173, // 기본값, 원하는 경우 변경 가능
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ 중요: 절대경로로 변경
    },
  },
});
