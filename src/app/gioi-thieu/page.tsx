import type { Metadata } from "next";
import { PageBanner, SecTitle } from "@/components/icons";

export const metadata: Metadata = { title: "Giới thiệu – Trường Trung cấp Bách Khoa Bình Dương" };

const GALLERY = [
  ["481176649_650935260824708_3978424329703086992_n.jpg", "Lễ trưởng thành Đội & chương trình tư vấn hướng nghiệp tại trường THCS Đông Chiểu"],
  ["482208366_655864263665141_8438852137174287615_n.jpg", "Khen thưởng học sinh có thành tích trong học tập và rèn luyện"],
  ["499247311_712536001331300_3585065997812294851_n.jpg", "Học sinh dâng hương tưởng niệm trong hành trình về nguồn"],
  ["482226860_655864313665136_4919423664639360804_n.jpg", "Đoàn viên, thanh niên nhà trường trang trí cây mai đón Tết"],
  ["499384191_712538651331035_5090980670142737652_n.jpg", "Hoạt động tập thể, rèn luyện kỹ năng mềm cho học sinh"],
  ["500313969_712536231331277_8822651973810606194_n.jpg", "Học sinh tham quan, học tập tại bảo tàng truyền thống"],
];

export default function About() {
  return (
    <>
      <PageBanner title="Giới thiệu nhà trường" crumb="Giới thiệu" />
      <div className="sec">
        <div className="wrap">
          <SecTitle>Tầm nhìn, sứ mệnh, giá trị cốt lõi</SecTitle>
          <div className="vm">
            <figure className="vm-photo">
              <img src="/500059290_712536101331290_1955433981489571009_n.jpg" alt="Học sinh Trường Trung cấp Bách Khoa Bình Dương" />
              <figcaption>Học sinh BDP trong hoạt động ngoại khóa của trường</figcaption>
            </figure>
            <div className="vm-list">
              <article className="vm-item" style={{ "--c": "var(--blue)" } as React.CSSProperties}>
                <img src="/499527285_712538514664382_5712155747554465436_n.jpg" alt="" />
                <div><h3>Tầm nhìn</h3><p>Trở thành trường trung cấp đào tạo nghề uy tín, hiện đại tại khu vực Đông Nam Bộ, nơi học sinh tốt nghiệp THCS có lộ trình học nghề và liên thông rõ ràng.</p></div>
              </article>
              <article className="vm-item" style={{ "--c": "var(--sky)" } as React.CSSProperties}>
                <img src="/482214250_650935274158040_5023520619597037442_n.jpg" alt="" />
                <div><h3>Sứ mệnh</h3><p>Đào tạo nhân lực có tay nghề, có đạo đức nghề nghiệp; gắn đào tạo với nhu cầu doanh nghiệp và cơ hội việc làm cho người học.</p></div>
              </article>
              <article className="vm-item" style={{ "--c": "var(--red)" } as React.CSSProperties}>
                <img src="/482072548_655864393665128_5978565174670592317_n.jpg" alt="" />
                <div>
                  <h3>Giá trị cốt lõi</h3>
                  <ul className="vm-tags">{["Trách nhiệm", "Thực học", "Thực hành", "Chuyên nghiệp", "Đồng hành cùng người học"].map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="two">
            <div className="prose">
              <SecTitle>Về Trường Trung cấp Bách Khoa Bình Dương</SecTitle>
              <p><b>Trường Trung cấp Bách Khoa Bình Dương (Binh Duong Polytechnic – BDP)</b> là cơ sở giáo dục nghề nghiệp đặt tại số 89 Đại lộ Độc Lập, phường Dĩ An (bên trong Nhà khách A11, Quân đoàn 34), trên địa bàn tỉnh Bình Dương cũ, nay thuộc TP. Hồ Chí Minh.</p>
              <p>Nhà trường tổ chức đào tạo <b>12 ngành trung cấp chính quy</b> thuộc các khối Y – Dược, Kỹ thuật – Công nghệ, Kinh tế và Ngoại ngữ; đồng thời triển khai mô hình <b>học lớp 10 kết hợp Trung cấp chính quy</b> dành cho học sinh tốt nghiệp THCS, giúp các em vừa hoàn thành chương trình văn hóa THPT, vừa có nghề trong tay sau 3 năm.</p>
              <p>Học sinh của trường được <b>hỗ trợ 100% học phí học nghề</b> theo quy định, được tham dự kỳ thi tốt nghiệp THPT quốc gia, được nhận đồng thời bằng tốt nghiệp THPT và bằng Trung cấp chính quy, có thể liên thông lên Cao đẳng, Đại học trên toàn quốc. Nhà trường <b>cam kết 100% học sinh ra trường có việc làm</b>.</p>
              <p>Bên cạnh việc học, học sinh BDP thường xuyên tham gia các hoạt động Đoàn – Hội, hoạt động về nguồn, ngoại khóa, tư vấn hướng nghiệp tại các trường THCS trên địa bàn, góp phần rèn luyện kỹ năng sống và tinh thần trách nhiệm với cộng đồng.</p>
            </div>
            <div style={{ display: "grid", gap: 18 }}>
              <img src="/482214250_650935274158040_5023520619597037442_n.jpg" alt="Hội trường nhà trường trong ngày tư vấn tuyển sinh" />
              <img src="/482072548_655864393665128_5978565174670592317_n.jpg" alt="Trao thưởng cho học sinh" />
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap">
          <SecTitle>Một số hình ảnh hoạt động của trường</SecTitle>
          <div className="gallery">
            {GALLERY.map(([src, cap]) => (
              <figure key={cap}><img src={`/${src}`} alt="" /><figcaption>{cap}</figcaption></figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
