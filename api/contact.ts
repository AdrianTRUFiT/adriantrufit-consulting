import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // sender gmail
        pass: process.env.EMAIL_PASS, // gmail app password
      },
    });

    const to = process.env.EMAIL_TO || "adriantrufit@gmail.com";

    await transporter.sendMail({
      from: `"AdrianTRUFiT Contact Form" <${process.env.EMAIL_USER}>`,
      to,
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Email failed to send" });
  }
}
