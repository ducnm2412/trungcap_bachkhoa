import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/icons";
import { ARTICLES } from "@/components/news";

export const metadata: Metadata = { title: "Tin tức – Thông báo – Trường Trung cấp Bách Khoa Bình Dương" };


export default function News() {
  return (
    <>
      <PageBanner title="Tin tức – Thông báo" crumb="Tin tức" />
      <div className="sec">
        <div className="wrap">
          <div className="news-page">
            <div>
              {ARTICLES.map((a) => {
                const [d, m] = a.date.split("/");
                const href = `/tin-tuc/${a.slug}`;
                return (
                  <article className="article" key={a.slug}>
                    <Link href={href}><img src={a.img} alt="" /></Link>
                    <div className="body">
                      <div className="date">{d}<small>Th{Number(m)}</small></div>
                      <h3><Link href={href}>{a.title}</Link></h3>
                      <p>{a.excerpt} <Link className="more" href={href}>[Đọc thêm]</Link></p>
                    </div>
                  </article>
                );
              })}
            </div>
            <aside className="side">
              <h4>Tuyển sinh nổi bật</h4>
              <ul>
                <li><Link href="/tuyen-sinh/lop-10-ket-hop-trung-cap">Tuyển sinh lớp 10 kết hợp Trung cấp</Link></li>
                <li><Link href="/dao-tao">Trung cấp chính quy – học tối, cuối tuần</Link></li>
                <li><Link href="/dao-tao">Khối ngành Y – Dược</Link></li>
                <li><Link href="/dao-tao">Tiếng Trung Quốc · Tiếng Anh</Link></li>
                <li><Link href="/dao-tao">Kế toán · Quản trị kinh doanh</Link></li>
                <li><Link href="/dao-tao">Công nghệ thông tin · Công nghệ ô tô</Link></li>
              </ul>
              <h4>Thông báo tuyển sinh</h4>
              <div className="posters">
                <img src="/499415833_712717387979828_9032098146062915480_n.jpg" alt="Tuyển sinh Tiếng Trung Quốc" />
                <img src="/854143808_1129389872979242_3890253322672408158_n.jpg" alt="Tuyển sinh Trung cấp chính quy" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
