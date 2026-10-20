import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreloadDone from "@/components/PreloadDone";
import "./globals.css";

const bvp = Be_Vietnam_Pro({
  variable: "--font-bvp",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trường Trung cấp Bách Khoa Bình Dương – BDP",
  description: "Tuyển sinh lớp 10 kết hợp Trung cấp chính quy và 12 ngành trung cấp tại Dĩ An. Hotline/Zalo 0373 810 236.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={bvp.variable} suppressHydrationWarning>
      <body>
        {/* Màn hình chờ chỉ chạy một lần khi mở trang, tự ẩn bằng CSS */}
        <div className="preloader" aria-hidden="true">
          <div className="pl-logo">
            <img src="/271132787_105560428680543_8276282393686914678_n.png" alt="" />
          </div>
          <div className="pl-name">Trường Trung cấp <b>Bách Khoa Bình Dương</b></div>
          <div className="pl-bar"><span /></div>
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
        <PreloadDone />
      </body>
    </html>
  );
}
