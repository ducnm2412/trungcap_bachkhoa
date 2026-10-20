"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, Suspense, useState } from "react";
import { MAJORS, NAV, SITE } from "./site";
import { PROGRAMS } from "./admissions";

const GROUPS = ["Y – Dược", "Kỹ thuật – Công nghệ", "Kinh tế", "Ngoại ngữ"] as const;

type Menu = { wide?: boolean; all: string; groups: { title?: string; items: { href: string; label: string }[] }[] };
const MENUS: Record<string, Menu> = {
  "/dao-tao": {
    wide: true,
    all: "Xem tất cả 12 ngành",
    groups: GROUPS.map((g) => ({
      title: `Khối ${g}`,
      items: MAJORS.filter((m) => m.group === g).map((m) => ({ href: `/dao-tao/${m.slug}`, label: m.name })),
    })),
  },
  "/tuyen-sinh": {
    all: "Tổng quan tuyển sinh 2026",
    groups: [{ items: PROGRAMS.map((p) => ({ href: `/tuyen-sinh/${p.slug}`, label: p.name })) }],
  },
};
import { Phone } from "./icons";

export function Brand() {
  return (
    <Link className="brand" href="/">
      <img src="/271132787_105560428680543_8276282393686914678_n.png" alt="Logo Trường Trung cấp Bách Khoa Bình Dương" />
      <div>
        <div className="t1">Trường Trung cấp</div>
        <div className="t2">Bách Khoa Bình Dương</div>
        <div className="t3">Binh Duong Polytechnic · BDP</div>
      </div>
    </Link>
  );
}

function HeaderView({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState<string | null>(null);
  const close = () => {
    setOpen(false);
    setDd(null);
    (document.activeElement as HTMLElement | null)?.blur();
  };
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div>
            <Phone />Tổng đài: <b>{SITE.switchboard}</b> &nbsp;|&nbsp; Hotline tuyển sinh: <b>{SITE.hotline}</b> (Zalo)
          </div>
          <div className="links">
            <Link href="/">Trang chủ</Link>
            <a href="https://bdp.edu.vn" target="_blank" rel="noopener">E-Learning</a>
            <Link href="/lien-he">Liên hệ</Link>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <Brand />
          <button className="burger" aria-label="Mở menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
          <nav className={`nav${open ? " open" : ""}`}>
            {NAV.map((n) => {
              const menu = MENUS[n.href];
              const active = n.href === "/" ? path === "/" : path.startsWith(n.href);
              if (!menu) return <Link key={n.href} href={n.href} className={active ? "active" : ""} onClick={close}>{n.label}</Link>;
              const isOpen = dd === n.href;
              return (
                <div key={n.href} className={`dd${isOpen ? " open" : ""}${menu.wide ? "" : " dd-narrow"}`} onMouseLeave={() => setDd(null)}>
                  <Link href={n.href} className={active ? "active" : ""} onClick={close}>{n.label}</Link>
                  <button className="dd-btn" aria-label={`Mở danh sách ${n.label}`} aria-expanded={isOpen} onClick={() => setDd(isOpen ? null : n.href)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <div className="dd-menu">
                    {menu.groups.map((g) => (
                      <Fragment key={g.title ?? "all"}>
                        {g.title && <h5>{g.title}</h5>}
                        {g.items.map((it) => (
                          <Link key={it.href} href={it.href} className={path === it.href ? "active" : ""} onClick={close}>{it.label}</Link>
                        ))}
                      </Fragment>
                    ))}
                    <Link href={n.href} className="all" onClick={close}>{menu.all}</Link>
                  </div>
                </div>
              );
            })}
            <Link href="/tuyen-sinh#dang-ky" className="cta" onClick={close}>Đăng ký tuyển sinh</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

function HeaderWithPath() {
  return <HeaderView path={usePathname()} />;
}

// usePathname cần nằm trong Suspense để các trang động vẫn prerender được
export default function Header() {
  return (
    <Suspense fallback={<HeaderView path="" />}>
      <HeaderWithPath />
    </Suspense>
  );
}
