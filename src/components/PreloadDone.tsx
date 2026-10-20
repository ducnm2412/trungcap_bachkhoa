"use client";

import { useEffect } from "react";

// Sau lần tải đầu, bỏ độ trễ chờ preloader để khi chuyển trang về trang chủ
// phần hero hiện ngay (trang chuyển bằng client không hiện lại preloader).
export default function PreloadDone() {
  useEffect(() => {
    const t = setTimeout(() => document.documentElement.setAttribute("data-loaded", ""), 2500);
    return () => clearTimeout(t);
  }, []);
  return null;
}
