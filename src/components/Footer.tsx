"use client";

import Link from "next/link";
import { Brand } from "./Header";
import { Phone } from "./icons";
import { SITE } from "./site";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="foot1">
          <div className="wrap">
            <div className="addr">
              <h4>Thông tin liên hệ</h4>
              <b>🏫 Cơ sở đào tạo tại Dĩ An</b>
              <div>{SITE.address}<br />(bên trong Nhà khách A11, Quân đoàn 34)</div>
              <b>☎ Điện thoại</b>
              <div>Tổng đài: {SITE.switchboard}<br />Hotline tuyển sinh / Zalo: {SITE.hotline}<br />Cô Hoa: 0989 627 686</div>
              <b>🌐 Website</b>
              <div>bdp.edu.vn</div>
            </div>
            <div>
              <h4>Thông tin tuyển sinh</h4>
              <ul>
                <li><Link href="/tuyen-sinh/lop-10-ket-hop-trung-cap">Tuyển sinh lớp 10 + Trung cấp</Link></li>
                <li><Link href="/dao-tao">Trung cấp chính quy</Link></li>
                <li><Link href="/dao-tao">Khối ngành Y – Dược</Link></li>
                <li><Link href="/dao-tao">Khối ngành Kỹ thuật – CNTT</Link></li>
                <li><Link href="/dao-tao">Khối ngành Kinh tế – Ngoại ngữ</Link></li>
                <li><Link href="/tin-tuc">Tin tức – Thông báo</Link></li>
              </ul>
            </div>
            <div>
              <h4>Theo dõi fanpage</h4>
              <div className="fb-card">
                <img src="/271132787_105560428680543_8276282393686914678_n.png" alt="" />
                <div>
                  <b>{SITE.name}</b>
                  <a href={SITE.facebook} target="_blank" rel="noopener">facebook.com → Tư vấn tuyển sinh</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot2">
          <div className="wrap">
            <Brand />
            <div className="kv"><small>Tổng đài</small><b>{SITE.switchboard}</b></div>
            <div className="kv"><small>Hotline · Zalo</small><b>{SITE.hotline}</b></div>
          </div>
        </div>
        <div className="foot3"><div className="wrap">© 2026 <b>BDP – {SITE.name}</b>. Bảo lưu mọi quyền.</div></div>
      </footer>

      <div className="float">
        <a className="call" href={`tel:${SITE.hotlineTel}`} aria-label="Gọi hotline"><Phone /><span className="lbl">Gọi {SITE.hotline}</span></a>
        <a className="zalo" href={SITE.zalo} target="_blank" rel="noopener" aria-label="Chat Zalo">
          <svg viewBox="0 0 48 48" aria-hidden="true" style={{ width: 34, height: 34 }}>
            <path d="M24 6C13 6 4 13.4 4 22.5c0 5.3 3 10 7.8 13L10 42l7.6-3.9c2 .5 4.2.8 6.4.8 11 0 20-7.4 20-16.4S35 6 24 6z" fill="#fff" />
            <text x="24" y="27.5" textAnchor="middle" fontSize="11.5" fontWeight="800" fontFamily="Arial, sans-serif" fill="#0068ff">Zalo</text>
          </svg>
          <span className="lbl">Chat Zalo</span>
        </a>
        <a className="msg" href={SITE.messenger} target="_blank" rel="noopener" aria-label="Messenger">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.4 2 2 6.2 2 11.5c0 3 1.4 5.6 3.6 7.4V22l3.3-1.8c.9.2 2 .4 3.1.4 5.6 0 10-4.2 10-9.5S17.6 2 12 2zm1 12.7-2.6-2.7-5 2.7 5.5-5.8 2.6 2.7 4.9-2.7-5.4 5.8z" /></svg>
          <span className="lbl">Messenger</span>
        </a>
        <button className="top" aria-label="Lên đầu trang" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="m6 15 6-6 6 6" /></svg>
        </button>
      </div>
    </>
  );
}
