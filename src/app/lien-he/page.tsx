import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { PageBanner, Phone, Pin, SecTitle } from "@/components/icons";
import { SITE } from "@/components/site";

export const metadata: Metadata = { title: "Liên hệ – Trường Trung cấp Bách Khoa Bình Dương" };

export default function Contact() {
  return (
    <>
      <PageBanner title="Liên hệ" crumb="Liên hệ" />
      <div className="sec">
        <div className="wrap">
          <div className="reg">
            <div>
              <SecTitle>Thông tin liên hệ</SecTitle>
              <div className="info-list">
                <div className="info"><Pin /><div><b>Địa chỉ</b><span>{SITE.address} (Bình Dương cũ) – bên trong Nhà khách A11, Quân đoàn 34</span></div></div>
                <div className="info"><Phone /><div><b>Điện thoại</b><a href={`tel:${SITE.switchboardTel}`}>Tổng đài: {SITE.switchboard}</a><br /><a href={`tel:${SITE.hotlineTel}`}>Hotline / Zalo tuyển sinh: {SITE.hotline}</a><br /><a href="tel:0989627686">Cô Hoa: 0989 627 686</a></div></div>
                <div className="info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></svg><div><b>Website · Mạng xã hội</b><a href="https://bdp.edu.vn" target="_blank" rel="noopener">bdp.edu.vn</a><br /><a href={SITE.facebook} target="_blank" rel="noopener">Facebook tư vấn tuyển sinh</a></div></div>
                <div className="info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><div><b>Giờ làm việc</b><span>Thứ 2 – Thứ 7: 7h30 – 11h30 · 13h30 – 17h00</span></div></div>
              </div>
              <div className="mapcard" style={{ background: "var(--surface)" }}>
                <iframe title="Bản đồ Trường Trung cấp Bách Khoa Bình Dương" src={SITE.mapsEmbed} loading="lazy" style={{ width: "100%", aspectRatio: "16/10", border: 0, display: "block" }} />
              </div>
              <div style={{ marginTop: 12 }}><a className="btn btn-yellow" href={SITE.maps} target="_blank" rel="noopener">Mở Google Maps →</a></div>
            </div>
            <LeadForm kind="lien-he" />
          </div>
        </div>
      </div>
    </>
  );
}
