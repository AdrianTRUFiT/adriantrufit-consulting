import React, { useState } from "react";
import { Send, CheckCircle2, AlertTriangle } from "lucide-react";
import GridBackground from "../components/GridBackground";

type FormState = {
  name: string;
  email: string;
  role: string;
  challenge: string;
  budget: string;
  timeline: string;
};

const CALENDAR_URL = "https://calendar.app.google/839gqG25UmHQgwDU7";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: "",
    challenge: "",
    budget: "",
    timeline: "Immediate",
  });

  // Works locally via Vite proxy AND in prod via Vercel route
  const apiUrl = "/api/contact";

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setErrorMsg(null);
    setSubmitting(true);

    let success = false;

    try {
      const message = [
        `Role: ${form.role}`,
        `Budget: ${form.budget || "N/A"}`,
        `Timeline: ${form.timeline || "N/A"}`,
        "",
        "Primary Operational Challenge:",
        form.challenge,
      ].join("\n");

      const resp = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message,
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data?.ok === false) {
        throw new Error(data?.error || `Request failed (${resp.status})`);
      }

      success = true;
      setSubmitted(true);

      window.setTimeout(() => {
        window.location.href = CALENDAR_URL;
      }, 1500);
    } catch (err: any) {
      setErrorMsg(err?.message || "Submission failed");
    } finally {
      if (!success) setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative min-h-[80vh] flex items-center justify-center px-6">
        <GridBackground variant="top" />
        <div className="max-w-md w-full text-center relative z-10 p-12 bg-zinc-950 border border-zinc-800 rounded-sm shadow-2xl">
          <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Information Received</h2>
          <p className="text-zinc-400 font-light mb-8">
            Forwarding you to the calendar to book your 15-minute diagnostic consultation...
          </p>
          <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
            <div className="bg-white h-full animate-[progress_1.5s_ease-in-out]" />
          </div>
        </div>
        <style>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative">
      <section className="relative pt-24 pb-20 px-6">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Start the <span className="text-zinc-500">Conversation</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
              Tell me about your operational challenges. If you're ready to move from experimentation to structured
              implementation, let's talk.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 mb-6">What to expect</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-zinc-300 font-light">
                    <span className="text-zinc-700 font-black">—</span> 30-minute diagnostic call
                  </li>
                  <li className="flex gap-4 text-zinc-300 font-light">
                    <span className="text-zinc-700 font-black">—</span> Identification of operational friction points
                  </li>
                  <li className="flex gap-4 text-zinc-300 font-light">
                    <span className="text-zinc-700 font-black">—</span> Structured implementation proposal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-sm shadow-2xl relative z-20">
            {errorMsg && (
              <div className="mb-6 p-4 border border-zinc-800 bg-zinc-900/40 rounded-sm flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 mt-0.5 text-zinc-200" />
                <div>
                  <p className="text-zinc-200 font-semibold text-sm">Submission failed</p>
                  <p className="text-zinc-400 text-sm mt-1">{errorMsg}</p>
                  <p className="text-zinc-500 text-[11px] mt-2">
                    Local: run your API + set EMAIL_USER / EMAIL_PASS in .env.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Name (required)
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={onChange("name")}
                    type="text"
                    className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Email (required)
                  </label>
                  <input
                    required
                    value={form.email}
                    onChange={onChange("email")}
                    type="email"
                    className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Role</label>
                <input
                  required
                  value={form.role}
                  onChange={onChange("role")}
                  type="text"
                  className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  Primary Operational Challenge
                </label>
                <textarea
                  required
                  value={form.challenge}
                  onChange={onChange("challenge")}
                  rows={4}
                  className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    value={form.budget}
                    onChange={onChange("budget")}
                    className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select range...</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Timeline
                  </label>
                  <select
                    value={form.timeline}
                    onChange={onChange("timeline")}
                    className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Immediate">Immediate</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Just Researching">Just Researching</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 border font-bold rounded-sm transition-all flex items-center justify-center gap-2 group ${
                  submitting
                    ? "bg-zinc-800 text-zinc-400 border-zinc-800 cursor-not-allowed"
                    : "bg-zinc-100 text-zinc-950 border-zinc-100 hover:bg-white"
                }`}
              >
                {submitting ? "Sending..." : "Request Consultation"}
                <Send className={`w-4 h-4 transition-transform ${submitting ? "" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
              </button>
            </form>

            <p className="mt-6 text-[11px] text-zinc-500">
              Local send requires: EMAIL_USER, EMAIL_PASS (Gmail App Password), and your local API running.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 tracking-tight">
            AI Works Best When <span className="text-zinc-500">Built Into the System</span>
          </h3>
          <p className="text-zinc-400 font-light mb-0">
            If your organization is ready to move beyond experimentation, let's start the dialogue.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
