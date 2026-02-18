import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load env from project root .env
dotenv.config();

const app = express();

// CORS: allow your local Vite dev server(s)
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

app.use(
  cors({
    origin: (origin, cb) => {
      // allow curl / no-origin requests
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error(`CORS blocked origin: ${origin}`));
    },
  })
);

app.use(express.json({ limit: "1mb" }));

// Health endpoint (helps quick sanity checks)
app.get("/api/health", (req, res) => {
  res.status(200).json({
    ok: true,
    service: "dev-api",
    emailUserPresent: !!process.env.EMAIL_USER,
    emailPassPresent: !!process.env.EMAIL_PASS,
    emailTo: process.env.EMAIL_TO || "adriantrufit@gmail.com",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    const cleanName = String(name ?? "").trim();
    const cleanEmail = String(email ?? "").trim();
    const cleanMessage = String(message ?? "").trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    if (!EMAIL_USER || !EMAIL_PASS) {
      return res
        .status(500)
        .json({ ok: false, error: "Missing EMAIL_USER / EMAIL_PASS env vars" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // Early auth check (useful while you’re wiring it up)
    await transporter.verify();

    const to = process.env.EMAIL_TO || "adriantrufit@gmail.com";

    await transporter.sendMail({
      from: `"AdrianTRUFiT Contact Form" <${EMAIL_USER}>`,
      to,
      replyTo: cleanEmail,
      subject: `New Contact Form Submission — ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("DEV_CONTACT_ERROR:", err?.message || err);
    return res.status(500).json({
      ok: false,
      error: err?.message ? `Email failed to send: ${err.message}` : "Email failed to send",
    });
  }
});

const PORT = 8787;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Local API listening on http://127.0.0.1:${PORT}`);
  console.log(`EMAIL_USER present: ${!!process.env.EMAIL_USER}`);
  console.log(`EMAIL_PASS present: ${!!process.env.EMAIL_PASS}`);
});
