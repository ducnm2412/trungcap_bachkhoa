import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, findArticle } from "@/components/news";
import { SITE } from "@/components/site";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tin-tuc/[slug]">): Promise<Metadata> {
  const a = findArticle((await params).slug);
  return { title: a ? `${a.title} – BDP` : "Tin tức", description: a?.excerpt };
}

export default async function ArticlePage({ params }: PageProps<"/tin-tuc/[slug]">) {
  const a = findArticle((await params).slug);
  if (!a) notFound();
  const others = ARTICLES.filter((o) => o.slug !== a.slug).slice(0, 4);

  return (
    <>
      <div className="pbanner">
        <div className="wrap">
          <div className="crumb" style={{ marginTop: 0, marginBottom: 10 }}>
            <Link href="/">Trang chủ</Link> › <Link href="/tin-tuc">Tin tức</Link>
          </div>
          <h1 className="atitle">{a.title}</h1>
          <div className="crumb">📅 {a.date}</div>
        </div>
      </div>
      <div className="sec">
        <div className="wrap">
          <div className="news-page">
            <article className="post">
              <img className="post-cover" src={a.img} alt="" />
              <p className="post-lead">{a.excerpt}</p>
              {a.body.map((p) => <p key={p}>{p}</p>)}
              <div className="post-gallery">
                {a.gallery.map((g) => <img key={g} src={g} alt="" />)}
              </div>
              <div className="post-cta">
                <b>Muốn tìm hiểu chương trình học tại BDP?</b>
                <div>
                  <Link className="btn btn-red" href="/tuyen-sinh#dang-ky">Đăng ký tư vấn</Link>
                  <a className="btn btn-outline" href={SITE.zalo} target="_blank" rel="noopener">Nhắn Zalo {SITE.hotline}</a>
                </div>
              </div>
            </article>
            <aside className="side">
              <h4>Tin khác</h4>
              <div className="side-news">
                {others.map((o) => (
                  <Link key={o.slug} href={`/tin-tuc/${o.slug}`}>
                    <img src={o.img} alt="" />
                    <span><small>{o.date}</small>{o.title}</span>
                  </Link>
                ))}
              </div>
              <Link className="btn btn-outline" href="/tin-tuc" style={{ marginTop: 18 }}>Tất cả tin tức</Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
