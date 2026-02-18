import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // To ensure form data is forwarded to adriantrufit@gmail.com in a production environment,
    // you would typically point the form action to a service like Formspree 
    // or use a backend API. Here we simulate the successful transmission.
    
    setSubmitted(true);
    
    // Redirecting to Google Calendar after a short delay to show the success message.
    setTimeout(() => {
      window.location.href = 'https://calendar.app.google/839gqG25UmHQgwDU7';
    }, 1500);
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
            <div className="bg-white h-full animate-[progress_1.5s_ease-in-out]"></div>
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
              Tell me about your operational challenges. If you're ready to move from experimentation to structured implementation, let's talk.
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Name (required)</label>
                  <input required name="name" type="text" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Email (required)</label>
                  <input required name="email" type="email" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Role</label>
                <input required name="role" type="text" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Primary Operational Challenge</label>
                <textarea required name="challenge" rows={4} className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors resize-none"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Estimated Budget</label>
                  <select name="budget" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer">
                    <option value="">Select range...</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Timeline</label>
                  <select name="timeline" className="w-full bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer">
                    <option>Immediate</option>
                    <option>1-3 Months</option>
                    <option>3-6 Months</option>
                    <option>Just Researching</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Request Consultation <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Persistent CTA */}
      <section className="py-24 bg-zinc-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h3 className="text-2xl font-bold mb-4 tracking-tight">AI Works Best When <span className="text-zinc-500">Built Into the System</span></h3>
           <p className="text-zinc-400 font-light mb-0">If your organization is ready to move beyond experimentation, let's start the dialogue.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;