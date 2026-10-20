"use client";

import { useState } from "react";
import { MAJORS, SITE } from "./site";

type Kind = "dang-ky" | "lien-he";

export default function LeadForm({ kind }: { kind: Kind }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [bad, setBad] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const missing = [...f.querySelectorAll<HTMLInputElement>("[required]")].filter((i) => !i.value.trim()).map((i) => i.name);
    setBad(missing);
    if (missing.length) return;
    setState("sending");
    const data = Object.fromEntries(new FormData(f));
    try {
      const res = await fetch("/api/dang-ky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...data }),
      });
      if (!res.ok) throw new Error();
      f.reset();
      setState("ok");
    } catch {
      setState("error");
    }
  }

  const cls = (n: string) => (bad.includes(n) ? "err" : undefined);

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      {kind === "dang-ky" ? (
        <>
          <h3>Đăng ký tư vấn</h3>
          <p className="note">Điền thông tin bên dưới, cán bộ tuyển sinh sẽ liên hệ lại trong vòng 24 giờ.</p>
          <div className="grid2">
            <div><label htmlFor="f-name">Họ và tên học sinh <span>*</span></label><input id="f-name" name="name" className={cls("name")} required placeholder="Nguyễn Văn A" /></div>
            <div><label htmlFor="f-dob">Năm sinh</label><input id="f-dob" name="dob" type="number" min="1980" max="2015" placeholder="2011" /></div>
          </div>
          <div className="grid2">
            <div><label htmlFor="f-phone">Số điện thoại / Zalo <span>*</span></label><input id="f-phone" name="phone" className={cls("phone")} required type="tel" placeholder="09xx xxx xxx" /></div>
            <div><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" placeholder="email@example.com" /></div>
          </div>
          <label htmlFor="f-level">Trình độ hiện tại <span>*</span></label>
          <select id="f-level" name="level" className={cls("level")} required defaultValue="">
            <option value="">— Chọn —</option>
            <option>Đang học lớp 9 / tốt nghiệp THCS</option>
            <option>Tốt nghiệp THPT</option>
            <option>Đã tốt nghiệp Trung cấp / Cao đẳng / Đại học ngành khác</option>
            <option>Khác</option>
          </select>
          <label htmlFor="f-program">Chương trình quan tâm <span>*</span></label>
          <select id="f-program" name="program" className={cls("program")} required defaultValue="">
            <option value="">— Chọn —</option>
            <option>Lớp 10 kết hợp Trung cấp chính quy</option>
            <option>Trung cấp chính quy (học tối / cuối tuần)</option>
          </select>
          <label htmlFor="f-major">Ngành muốn học</label>
          <select id="f-major" name="major" defaultValue="">
            <option value="">— Chọn ngành —</option>
            {MAJORS.map((m) => <option key={m.slug}>{m.name}</option>)}
            <option>Chưa quyết định – cần tư vấn</option>
          </select>
          <label htmlFor="f-addr">Địa chỉ / Trường THCS đang học</label>
          <input id="f-addr" name="addr" placeholder="VD: THCS Đông Chiểu, Dĩ An" />
          <label htmlFor="f-note">Ghi chú</label>
          <textarea id="f-note" name="note" rows={3} placeholder="Câu hỏi hoặc thời gian thuận tiện để liên hệ…" />
        </>
      ) : (
        <>
          <h3>Gửi lời nhắn</h3>
          <p className="note">Mọi thắc mắc về tuyển sinh, học phí, chương trình học – nhà trường sẽ phản hồi sớm nhất.</p>
          <label htmlFor="c-name">Họ và tên <span>*</span></label>
          <input id="c-name" name="name" className={cls("name")} required placeholder="Họ tên của bạn" />
          <div className="grid2">
            <div><label htmlFor="c-phone">Số điện thoại <span>*</span></label><input id="c-phone" name="phone" className={cls("phone")} required type="tel" placeholder="09xx xxx xxx" /></div>
            <div><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" placeholder="email@example.com" /></div>
          </div>
          <label htmlFor="c-note">Nội dung <span>*</span></label>
          <textarea id="c-note" name="note" className={cls("note")} rows={5} required placeholder="Bạn cần tư vấn về…" />
        </>
      )}
      <button className={`btn ${kind === "dang-ky" ? "btn-red" : "btn-blue"}`} type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Đang gửi…" : kind === "dang-ky" ? "Gửi đăng ký" : "Gửi lời nhắn"}
      </button>
      {bad.length > 0 && <p className="note" style={{ color: "var(--red)", margin: "12px 0 0" }}>Vui lòng điền các ô có dấu *.</p>}
      {state === "ok" && (
        <div className="ok show" role="status">
          ✅ Đã gửi thông tin. Cán bộ tuyển sinh sẽ liên hệ trong 24 giờ. Cần tư vấn ngay? <a href={SITE.zalo} target="_blank" rel="noopener">Nhắn Zalo {SITE.hotline}</a>.
        </div>
      )}
      {state === "error" && (
        <div className="ok show" role="alert" style={{ background: "#fdecea", borderColor: "#f1a9a3", color: "#8a1f17" }}>
          Chưa gửi được thông tin. Kiểm tra kết nối mạng rồi gửi lại, hoặc gọi <a href={`tel:${SITE.hotlineTel}`}>{SITE.hotline}</a>.
        </div>
      )}
      {kind === "dang-ky" && (
        <p className="note" style={{ margin: "14px 0 0", fontSize: 12.5 }}>Thông tin của bạn chỉ dùng cho mục đích tư vấn tuyển sinh của {SITE.name}.</p>
      )}
    </form>
  );
}
