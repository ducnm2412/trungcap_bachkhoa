import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Checks, SecTitle } from "@/components/icons";
import { findMajor, MAJORS } from "@/components/majors";
import { SITE } from "@/components/site";

export function generateStaticParams() {
  return MAJORS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dao-tao/[slug]">): Promise<Metadata> {
  const m = findMajor((await params).slug);
  return { title: m ? `Ngành ${m.name} – Trường Trung cấp Bách Khoa Bình Dương` : "Ngành đào tạo", description: m?.intro };
}

export default async function MajorPage({ params }: PageProps<"/dao-tao/[slug]">) {
  const m = findMajor((await params).slug);
  if (!m) notFound();
  const others = MAJORS.filter((o) => o.slug !== m.slug);

  return (
    <>
      <div className="pbanner">
        <div className="wrap">
          <h1>Ngành {m.name}</h1>
          <div className="crumb"><Link href="/">Trang chủ</Link> › <Link href="/dao-tao">Ngành đào tạo</Link> › {m.name}</div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap">
          <div className="mdetail">
            <div>
              <img className="mhero" src={m.photo} alt={`Ngành ${m.name}`} />
              <span className="tag">Khối {m.group}</span>
              <p className="intro">{m.intro}</p>
              <div className="facts">
                <div><small>Hệ đào tạo</small><b>Trung cấp chính quy</b></div>
                <div><small>Thời gian</small><b>01 – 02 năm</b></div>
                <div><small>Đối tượng</small><b>Tốt nghiệp THCS, THPT trở lên</b></div>
              </div>
              <h3>Học những gì</h3>
              <Checks items={m.learn} />
              <h3>Cơ hội việc làm</h3>
              <Checks items={m.jobs} />
              <h3>Quyền lợi người học</h3>
              <Checks items={[
                "Học sinh tốt nghiệp THCS được hỗ trợ 100% học phí học nghề, học song song chương trình THPT.",
                "Học buổi tối hoặc cuối tuần, phù hợp người đang đi làm.",
                "Tốt nghiệp nhận bằng Trung cấp chính quy, liên thông Cao đẳng, Đại học trên toàn quốc.",
              ]} />
            </div>
            <aside className="mside">
              <div className="box">
                <b>Đăng ký học ngành {m.name}</b>
                <p>Để lại thông tin, cán bộ tuyển sinh sẽ gọi lại trong 24 giờ.</p>
                <Link className="btn btn-yellow" href="/tuyen-sinh#dang-ky">Đăng ký tư vấn</Link>
                <a className="btn btn-ghost" href={`tel:${SITE.hotlineTel}`}>Gọi {SITE.hotline}</a>
              </div>
              <img src={m.img} alt={`Thông báo tuyển sinh ngành ${m.name}`} />
            </aside>
          </div>
        </div>
      </div>
      <div className="sec" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <SecTitle>Các ngành khác</SecTitle>
          <div className="others">
            {others.map((o) => <Link key={o.slug} href={`/dao-tao/${o.slug}`}>{o.name}</Link>)}
          </div>
        </div>
      </div>
    </>
  );
}
