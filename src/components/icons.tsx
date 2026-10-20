type P = { w?: number };

export const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.7a2 2 0 0 1 1.7 2z" /></svg>
);
export const Check = ({ w = 2 }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Cap = ({ w = 1.6 }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w}><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /><path d="M22 10v6" /></svg>
);

export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="checks">
      {items.map((t) => (
        <li key={t}><Check w={2.4} />{t}</li>
      ))}
    </ul>
  );
}

export function SecTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="sec-title">{children}</h2>
      <div className="rule" />
    </>
  );
}

export function PageBanner({ title, crumb }: { title: string; crumb: string }) {
  return (
    <div className="pbanner">
      <div className="wrap">
        <h1>{title}</h1>
        <div className="crumb"><a href="/">Trang chủ</a> › {crumb}</div>
      </div>
    </div>
  );
}
