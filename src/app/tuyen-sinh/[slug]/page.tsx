import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProgram, PROGRAMS } from "@/components/admissions";
import { Checks, SecTitle } from "@/components/icons";
import { SITE } from "@/components/site";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tuyen-sinh/[slug]">): Promise<Metadata> {
  const p = findProgram((await params).slug);
  return { title: p ? `${p.name} – Tuyển sinh 2026 – BDP` : "Tuyển sinh", description: p?.short };
}

export default async function ProgramPage({ params }: PageProps<"/tuyen-sinh/[slug]">) {
  const p = findProgram((await params).slug);
  if (!p) notFound();
  const others = PROGRAMS.filter((o) => o.slug !== p.slug);
  const longList = p.majors.some((m) => m.length > 40);

  return (
    <>
      <div className="pbanner">
        <div className="wrap">
          <h1>{p.name}</h1>
          <div className="crumb"><Link href="/">Trang chủ</Link> › <Link href="/tuyen-sinh">Tuyển sinh</Link> › {p.name}</div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap">
          <div className="pd">
            <div className="pd-poster">
              <img src={p.poster} alt={`Poster ${p.name}`} />
              {p.posters.length > 0 && (
                <div className="more">{p.posters.map((x) => <img key={x} src={x} alt="" />)}</div>
              )}
            </div>
            <div>
              <p className="short">{p.short}</p>
              <div className="facts">
                <div><small>Đối tượng</small><b>{p.target}</b></div>
                <div><small>Thời gian</small><b>{p.duration}</b></div>
                <div><small>Liên hệ tư vấn</small><b>0989 627 686 (Cô Hoa)</b></div>
              </div>
              <h3>{p.slug === "boi-duong-khoi-nganh-suc-khoe" ? "Các khóa đào tạo" : p.slug === "lien-thong-cao-dang-dai-hoc" ? "Các bậc học hỗ trợ tư vấn" : "Ngành tuyển sinh"}</h3>
              <ul className={`chips${longList ? " long" : ""}`}>{p.majors.map((m) => <li key={m}>{m}</li>)}</ul>
              <h3>Quyền lợi</h3>
              <Checks items={p.benefits} />
              {p.note && <p className="note">{p.note}</p>}
              <div className="acts">
                <Link className="btn btn-red" href="/tuyen-sinh#dang-ky">Đăng ký tư vấn</Link>
                <a className="btn btn-outline" href={SITE.zalo} target="_blank" rel="noopener">Nhắn Zalo {SITE.hotline}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <SecTitle>Chương trình tuyển sinh khác</SecTitle>
          <div className="others">
            {others.map((o) => <Link key={o.slug} href={`/tuyen-sinh/${o.slug}`}>{o.name}</Link>)}
          </div>
        </div>
      </div>
    </>
  );
}
