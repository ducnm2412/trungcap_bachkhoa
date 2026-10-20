import Link from "next/link";
import { Cap, Check, SecTitle } from "@/components/icons";
import { SITE } from "@/components/site";

const PROGRAMS = [
  { head: "Lớp 10 + Trung cấp chính quy", img: "482214250_650935274158040_5023520619597037442_n.jpg", alt: "Buổi tư vấn tuyển sinh tại trường", slogan: ["Vững tay nghề –", "Sáng tương lai"], items: ["Đối tượng: tốt nghiệp THCS", "Thời gian: 03 năm (THPT + Trung cấp)", "Hỗ trợ 100% học phí học nghề", "Nhận 2 bằng, liên thông CĐ – ĐH", "Học tại cơ sở Dĩ An"] },
  { head: "Trung cấp chính quy", img: "482072548_655864393665128_5978565174670592317_n.jpg", alt: "Lễ trao giấy khen cho học sinh BDP", slogan: ["Học linh hoạt –", "Chủ động tương lai"], items: ["Đối tượng: tốt nghiệp THCS, THPT trở lên", "Thời gian: 01 – 02 năm", "Học buổi tối hoặc cuối tuần", "Phù hợp người đang đi làm", "Kế toán, CNTT, Tiếng Trung, QTKD…"] },
  { head: "Khối ngành Y – Dược", img: "481907000_653092503942317_8543025953731037875_n.jpg", alt: "Phòng học thực hành", slogan: ["Nâng tầm tri thức –", "Tiếp bước sự nghiệp"], items: ["Dược", "Điều dưỡng", "Y học cổ truyền", "Kỹ thuật Xét nghiệm y học", "Kỹ thuật Hình ảnh y học · Phục hình răng"] },
];

const NOTICES = [
  ["15/10/2026", "Tuyển sinh Trung cấp chính quy năm 2026 – học buổi tối, cuối tuần", "/tuyen-sinh"],
  ["01/10/2026", "Khai giảng lớp Dược – Điều dưỡng khóa mới (liên thông CĐ, ĐH ngành khác)", "/dao-tao"],
  ["20/09/2026", "Tuyển sinh ngành Tiếng Trung Quốc và Công nghệ thông tin", "/dao-tao"],
  ["05/09/2026", "Lịch nhập học lớp 10 kết hợp Trung cấp năm học 2026 – 2027", "/tin-tuc"],
];

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg">
          <img src="/482214250_650935274158040_5023520619597037442_n.jpg" alt="Học sinh Trường Trung cấp Bách Khoa Bình Dương" />
        </div>
        <div className="hero-tag">Tuyển sinh năm học 2026 – 2027<small>Lớp 10 kết hợp Trung cấp chính quy tại Dĩ An</small></div>
        <div className="wrap">
          <div className="hero-copy">
            <div className="kicker">BDP · Binh Duong Polytechnic</div>
            <h1>Học nghề vững – Tốt nghiệp sớm – Việc làm chắc</h1>
            <p>Trường Trung cấp Bách Khoa Bình Dương đào tạo 12 ngành trung cấp chính quy, học song song chương trình THPT, hỗ trợ 100% học phí học nghề cho học sinh tốt nghiệp THCS.</p>
            <div className="acts">
              <Link className="btn btn-red" href="/tuyen-sinh#dang-ky">Đăng ký tư vấn</Link>
              <Link className="btn btn-outline" href="/dao-tao">Xem ngành đào tạo →</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z" /><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" /></svg><div className="n">12</div><div className="l">ngành đào tạo trung cấp</div></div>
        <div className="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" /></svg><div className="n">100<sup>%</sup></div><div className="l">cam kết việc làm sau tốt nghiệp</div></div>
        <div className="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg><div className="n">3</div><div className="l">năm: bằng THPT + Trung cấp</div></div>
      </div>

      <div className="band">
        <div className="wrap">
          <div>
            <h2>Trường Trung cấp <span>Bách Khoa Bình Dương</span> – Học văn hóa THPT kết hợp Trung cấp chính quy</h2>
            <p className="lead">Chương trình phù hợp với học sinh tốt nghiệp THCS, học viên đã đi làm và người muốn chuyển đổi nghề. Cơ sở đào tạo đặt tại Dĩ An, thuận tiện cho học sinh khu vực Bình Dương cũ và TP. Hồ Chí Minh.</p>
            <div className="pills">
              {[
                ["Học chương trình lớp 10 – 11 – 12", "do Trung tâm GDTX đào tạo, thi tốt nghiệp THPT quốc gia"],
                ["Hỗ trợ 100% học phí học nghề", "theo chính sách dành cho học sinh tốt nghiệp THCS"],
                ["Nhận 2 bằng cùng lúc", "bằng tốt nghiệp THPT và bằng Trung cấp chính quy"],
                ["Liên thông Cao đẳng, Đại học", "trên toàn quốc ngay sau khi tốt nghiệp"],
              ].map(([b, s]) => (
                <div className="pill" key={b}><Check /><div><b>{b}</b><span>{s}</span></div></div>
              ))}
            </div>
          </div>
          <div className="band-img"><img src="/504801529_723828436868723_1428903809076542400_n.jpg" alt="Poster tuyển sinh lớp 10 kết hợp Trung cấp chính quy tại Dĩ An" /></div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <SecTitle>Thông tin tuyển sinh năm 2026</SecTitle>
          <div className="feature">
            <div className="feature-img">
              <img src="/482226860_655864313665136_4919423664639360804_n.jpg" alt="Học sinh BDP tham gia hoạt động ngoại khóa" />
              <div className="cap">Học nghề chuyên nghiệp – Trưởng thành toàn diện</div>
            </div>
            <div>
              <div className="eyebrow">BDP · Tuyển sinh sau lớp 9</div>
              <h3>Học lớp 10 song song Trung cấp</h3>
              <p className="lead">Học văn hóa, rèn tay nghề, mở thêm lựa chọn cho tương lai. Xét tuyển học bạ, không thi tuyển.</p>
              <div className="fgrid">
                <div className="f"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg><div><b>Hỗ trợ 100% học phí</b><span>Học sinh tốt nghiệp THCS học tiếp học nghề được hỗ trợ toàn bộ học phí trung cấp theo quy định.</span></div></div>
                <div className="f"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" /><path d="M4 19a2 2 0 0 0 2 2h14M8 7h8M8 11h8" /></svg><div><b>Học văn hóa THPT</b><span>Chương trình lớp 10 – 11 – 12 theo hệ GDTX, giảm áp lực học tập, đủ điều kiện thi tốt nghiệp THPT.</span></div></div>
                <div className="f"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-3-3z" /></svg><div><b>Chú trọng thực hành</b><span>Rèn kỹ năng nghề thực tế với các ngành Y – Dược, CNTT, Ô tô, Kế toán, Ngoại ngữ…</span></div></div>
                <div className="f"><Cap w={1.7} /><div><b>Liên thông Cao đẳng – Đại học</b><span>Tốt nghiệp nhận bằng THPT và Trung cấp chính quy, liên thông lên bậc cao hơn trên toàn quốc.</span></div></div>
              </div>
              <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link className="btn btn-red" href="/tuyen-sinh#dang-ky">Đăng ký tư vấn miễn phí</Link>
                <a className="btn btn-outline" href={`tel:${SITE.hotlineTel}`}>Gọi {SITE.hotline}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec" style={{ background: "var(--surface)", paddingTop: 64 }}>
        <div className="wrap center">
          <SecTitle>Các chương trình đào tạo</SecTitle>
          <p className="sec-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>Trường Trung cấp Bách Khoa Bình Dương đào tạo 12 ngành trung cấp chính quy thuộc các khối Y – Dược, Kỹ thuật – Công nghệ, Kinh tế và Ngoại ngữ, phù hợp với nhiều đối tượng người học.</p>
          <div className="programs" style={{ textAlign: "left" }}>
            {PROGRAMS.map((p) => (
              <div className="prog" key={p.head}>
                <div className="head">{p.head}</div>
                <div className="pic"><img src={`/${p.img}`} alt={p.alt} /><div className="slogan">{p.slogan[0]}<br />{p.slogan[1]}</div></div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <div className="foot"><Link href="/dao-tao">Xem thêm</Link><Link href="/tuyen-sinh#dang-ky">Đăng ký tư vấn</Link></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="news-wrap">
            <div>
              <SecTitle>Tin tức &amp; Sự kiện</SecTitle>
              <article className="news-big">
                <img src="/481176649_650935260824708_3978424329703086992_n.jpg" alt="Chương trình tư vấn hướng nghiệp tại trường THCS" />
                <div className="body">
                  <div className="meta"><span>📅 19/10/2026</span><span className="new">New</span></div>
                  <h3><Link href="/tin-tuc/bdp-dong-hanh-tu-van-huong-nghiep-thcs-di-an">BDP đồng hành cùng các trường THCS trên địa bàn Dĩ An trong chương trình tư vấn hướng nghiệp</Link></h3>
                  <p>Nhà trường tham gia Lễ trưởng thành Đội và chương trình tư vấn hướng nghiệp cho học sinh lớp 9, giới thiệu mô hình học lớp 10 kết hợp Trung cấp chính quy. <Link className="more" href="/tin-tuc/bdp-dong-hanh-tu-van-huong-nghiep-thcs-di-an">[Đọc thêm]</Link></p>
                </div>
              </article>
              <div className="news-small">
                <article className="ns"><img src="/499247310_712538547997712_7833559384917220088_n.jpg" alt="Học sinh BDP trải nghiệm ngoại khóa" /><div className="body"><div className="meta"><span>📅 12/10/2026</span><span className="new">New</span></div><h3><Link href="/tin-tuc/hanh-trinh-ve-nguon-hoc-sinh-trung-cap">Hành trình về nguồn – Trải nghiệm thực tế dành cho học sinh khối Trung cấp</Link></h3><p>Chuyến đi gắn kết tập thể, giáo dục truyền thống… <Link className="more" href="/tin-tuc/hanh-trinh-ve-nguon-hoc-sinh-trung-cap">[Đọc thêm]</Link></p></div></article>
                <article className="ns"><img src="/500313969_712536231331277_8822651973810606194_n.jpg" alt="Học sinh tham quan bảo tàng" /><div className="body"><div className="meta"><span>📅 05/10/2026</span></div><h3><Link href="/tin-tuc/hoc-sinh-bdp-tham-quan-bao-tang">Học sinh BDP tham quan, học tập tại bảo tàng truyền thống</Link></h3><p>Buổi học ngoại khóa môn Lịch sử – Giáo dục công dân… <Link className="more" href="/tin-tuc/hoc-sinh-bdp-tham-quan-bao-tang">[Đọc thêm]</Link></p></div></article>
              </div>
            </div>
            <div>
              <SecTitle>Thông báo</SecTitle>
              <div className="notices">
                <img src="/854143808_1129389872979242_3890253322672408158_n.jpg" alt="Poster tuyển sinh Trung cấp chính quy" />
                {NOTICES.map(([d, t, href]) => (
                  <div className="notice" key={t}><div className="meta"><span>📅 {d}</span><span>Thông báo</span></div><h4><Link href={href}>{t}</Link></h4></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap center">
          <SecTitle>Hoạt động của nhà trường</SecTitle>
          <div className="strip">
            <img src="/499247311_712536001331300_3585065997812294851_n.jpg" alt="Học sinh dâng hương tại khu di tích" />
            <img src="/499384191_712538651331035_5090980670142737652_n.jpg" alt="Hoạt động tập thể của học sinh" />
            <img src="/482208366_655864263665141_8438852137174287615_n.jpg" alt="Trao thưởng trên sân khấu" />
            <img src="/499527285_712538514664382_5712155747554465436_n.jpg" alt="Học sinh chụp ảnh lưu niệm" />
          </div>
          <div style={{ marginTop: 24 }}><Link className="btn btn-outline" href="/gioi-thieu">Xem thêm hình ảnh →</Link></div>
        </div>
      </div>

      <div className="cta">
        <div className="wrap">
          <div><h2>Đăng ký tư vấn tuyển sinh 2026</h2><p>Để lại thông tin, cán bộ tuyển sinh sẽ liên hệ qua điện thoại hoặc Zalo trong 24 giờ.</p></div>
          <Link className="btn" href="/tuyen-sinh#dang-ky">Đăng ký ngay →</Link>
        </div>
      </div>
    </>
  );
}
