import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const ALLOWED_ORIGINS = [
  // Add your real domains when live (optional)
  // "https://adriantrufit.com",
  // "https://www.adriantrufit.com",
];

function setCors(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || "";
  const allowOrigin =
    ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin) ? origin : "";

  // If you want to allow ANY origin in early testing, leave ALLOWED_ORIGINS empty.
  if (ALLOWED_ORIGINS.length === 0 && origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else if (allowOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res);

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = (req.body ?? {}) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const cleanName = String(name ?? "").trim();
    const cleanEmail = String(email ?? "").trim();
    const cleanMessage = String(message ?? "").trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    if (!EMAIL_USER || !EMAIL_PASS) {
      return res.status(500).json({
        ok: false,
        error: "Server email is not configured (missing EMAIL_USER / EMAIL_PASS).",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // Optional: verify connection/auth early (helps debugging)
    await transporter.verify();

    const to = process.env.EMAIL_TO || "adriantrufit@gmail.com";

    await transporter.sendMail({
      // Gmail can reject spoofed From addresses; keep From as the authenticated sender
      from: `"AdrianTRUFiT Contact Form" <${EMAIL_USER}>`,
      to,
      replyTo: cleanEmail,
      subject: `New Contact Form Submission — ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT_API_ERROR:", err?.message || err);
    return res.status(500).json({
      ok: false,
      error: err?.message ? `Email failed to send: ${err.message}` : "Email failed to send",
    });
  }
}
