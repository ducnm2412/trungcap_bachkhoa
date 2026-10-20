import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

// Lưu mỗi đăng ký thành một dòng JSON trong data/registrations.jsonl
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.phone !== "string" || !body.name.trim() || !body.phone.trim()) {
    return Response.json({ error: "Thiếu họ tên hoặc số điện thoại" }, { status: 400 });
  }
  const entry = { ...body, createdAt: new Date().toISOString() };
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "registrations.jsonl"), JSON.stringify(entry) + "\n", "utf8");
  return Response.json({ ok: true });
}
