// src/components/ScrollManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // 페이지 경로가 바뀔 때마다 스크롤 맨 위로
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null; // 렌더링은 하지 않음
}
