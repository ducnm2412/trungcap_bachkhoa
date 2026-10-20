import type { Metadata } from "next";
import Link from "next/link";
import { Checks, PageBanner, SecTitle } from "@/components/icons";
import { MAJORS, SITE } from "@/components/site";

export const metadata: Metadata = { title: "Ngành đào tạo – Trường Trung cấp Bách Khoa Bình Dương" };

export default function Training() {
  return (
    <>
      <PageBanner title="Các ngành đào tạo" crumb="Ngành đào tạo" />
      <div className="sec">
        <div className="wrap">
          <SecTitle>12 ngành Trung cấp chính quy</SecTitle>
          <p className="sec-sub">Đối tượng tuyển sinh: tốt nghiệp THCS, THPT trở lên (kể cả học viên đã tốt nghiệp Trung cấp, Cao đẳng, Đại học ngành khác). Thời gian đào tạo 01 – 02 năm; học buổi tối hoặc cuối tuần phù hợp người đang đi làm.</p>
          <div className="majors">
            {MAJORS.map((m, i) => (
              <Link className="major mcard" href={`/dao-tao/${m.slug}`} key={m.slug}>
                <div className="mpic"><img src={m.photo} alt={`Ngành ${m.name}`} /><span className="num">{i + 1}</span><span className="grp">{m.group}</span></div>
                <div className="mbody"><b>{m.name}</b><span>{m.desc}</span><em className="go">Xem chi tiết ngành</em></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="sec" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <div className="benefit">
            <img src="/675605903_972963461955218_2611189865476705292_n.jpg" alt="Poster tuyển sinh lớp 10 kết hợp học Trung cấp chính quy tại Dĩ An" />
            <div>
              <SecTitle>Quyền lợi học sinh lớp 10 + Trung cấp</SecTitle>
              <Checks items={[
                "Được học chương trình lớp 10 – 11 – 12 do Trung tâm Giáo dục thường xuyên đào tạo.",
                "Được tham dự kỳ thi tốt nghiệp THPT quốc gia.",
                "Được hỗ trợ 100% học phí học nghề.",
                "Nhận bằng tốt nghiệp THPT và bằng Trung cấp chính quy.",
                "Được liên thông Cao đẳng, Đại học trên toàn quốc.",
                "Cam kết 100% học sinh ra trường có việc làm.",
              ]} />
              <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link className="btn btn-red" href="/tuyen-sinh#dang-ky">Đăng ký tư vấn</Link>
                <a className="btn btn-outline" href={SITE.zalo} target="_blank" rel="noopener">Nhắn Zalo tư vấn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap center">
          <SecTitle>Thông báo tuyển sinh theo ngành</SecTitle>
          <div className="strip" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            <img src="/499950786_712710624647171_2219965835143449016_n.jpg" alt="Tuyển sinh Dược – Điều dưỡng" style={{ aspectRatio: "auto" }} />
            <img src="/500093081_712715651313335_8774571315096172820_n.jpg" alt="Tuyển sinh Công nghệ thông tin" style={{ aspectRatio: "auto" }} />
            <img src="/482030792_653092607275640_7112079629161641080_n.jpg" alt="Tuyển sinh vào lớp 10" style={{ aspectRatio: "auto" }} />
          </div>
        </div>
      </div>
    </>
  );
}
