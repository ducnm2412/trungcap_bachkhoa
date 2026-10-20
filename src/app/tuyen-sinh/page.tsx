import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Checks, PageBanner, Pin, SecTitle } from "@/components/icons";
import { SITE } from "@/components/site";
import { PROGRAMS } from "@/components/admissions";
import Link from "next/link";

export const metadata: Metadata = { title: "Tuyển sinh 2026 – Trường Trung cấp Bách Khoa Bình Dương" };

export default function Admission() {
  return (
    <>
      <PageBanner title="Tuyển sinh năm 2026" crumb="Tuyển sinh" />
      <div className="sec">
        <div className="wrap">
          <SecTitle>Các chương trình tuyển sinh</SecTitle>
          <p className="sec-sub">Chọn chương trình phù hợp để xem đối tượng, thời gian học, ngành đào tạo và quyền lợi.</p>
          <div className="pgrid">
            {PROGRAMS.map((p) => (
              <Link key={p.slug} href={`/tuyen-sinh/${p.slug}`} className="pcard">
                <img src={p.poster} alt={p.name} />
                <div>
                  <b>{p.name}</b>
                  <span>{p.short}</span>
                  <em className="go">Xem chi tiết</em>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="sec" id="dang-ky" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <div className="reg">
            <div>
              <SecTitle>Tuyển sinh Trung cấp 9+</SecTitle>
              <p className="sec-sub">Chương trình dành riêng cho học sinh tốt nghiệp THCS. Xét tuyển học bạ, không thi tuyển, nhập học quanh năm.</p>
              <div style={{ marginBottom: 28 }}>
                <Checks items={[
                  "Học song song Trung cấp + THPT trong 03 năm",
                  "Được hỗ trợ 100% học phí học nghề theo quy định",
                  "Đào tạo chú trọng thực hành",
                  "Chương trình văn hóa THPT hệ GDTX giảm áp lực học tập",
                  "Liên thông Cao đẳng, Đại học ngay sau khi tốt nghiệp",
                ]} />
              </div>
              <h3 style={{ fontSize: 17, color: "var(--blue-d)", marginBottom: 12 }}>Hồ sơ đăng ký</h3>
              <div className="info-list">
                <div className="info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></svg><div><b>Giấy tờ cần nộp</b><span>Phiếu đăng ký (theo mẫu của trường) · Bản sao bằng tốt nghiệp THCS hoặc giấy chứng nhận tốt nghiệp tạm thời · Học bạ THCS (bản sao) · CCCD · 4 ảnh 3×4.</span></div></div>
                <div className="info"><Pin /><div><b>Nơi nhận hồ sơ</b><span>{SITE.address} (bên trong Nhà khách A11, Quân đoàn 34). Từ thứ 2 đến thứ 7.</span></div></div>
              </div>
              <div className="mapcard">
                <img src="/854143808_1129389872979242_3890253322672408158_n.jpg" alt="" />
                <div className="ov">
                  <b>Liên hệ tư vấn trực tiếp</b>
                  <span>Hotline {SITE.hotline} (Zalo) · Cô Hoa: 0989 627 686</span>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a className="btn btn-yellow" href={`tel:${SITE.hotlineTel}`}>Gọi ngay</a>
                    <a className="btn btn-ghost" href={SITE.zalo} target="_blank" rel="noopener">Nhắn Zalo</a>
                  </div>
                </div>
              </div>
            </div>
            <LeadForm kind="dang-ky" />
          </div>
        </div>
      </div>
    </>
  );
}
