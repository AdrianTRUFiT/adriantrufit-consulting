import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Layout, Cpu, Activity } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const Consulting: React.FC = () => {
  return (
    <div className="relative">
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Structured AI Consulting for <span className="text-zinc-500">Operational Leaders</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12">
            Focused implementation for companies ready to move beyond experimentation. No unnecessary complexity. Just systems that work.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all inline-flex items-center gap-2"
          >
            Request Consulting Details <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Engagement Structure - Removed Top Border */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-4 block">Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How Engagements Are <span className="text-zinc-500">Structured</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: Search, title: "Diagnostic Review", text: "A comprehensive review of your operational workflows, current AI usage, and data systems. This phase identifies inefficiencies and integration gaps." },
              { step: "02", icon: Layout, title: "Architecture Blueprint", text: "Design of a structured AI workflow system aligned with your organizational priorities and performance goals." },
              { step: "03", icon: Cpu, title: "Implementation", text: "Integration of AI tools into operational processes with clear accountability and execution mapping." },
              { step: "04", icon: Activity, title: "Calibration", text: "Measurement and refinement based on real-world usage and performance metrics to ensure long-term ROI." }
            ].map((item, idx) => (
              <div key={idx} className="group relative p-8 border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/30 hover:border-zinc-800 transition-all duration-300 rounded-sm">
                <div className="text-[10px] font-black text-zinc-800 group-hover:text-zinc-500 mb-6 uppercase tracking-[0.2em] transition-colors">Phase {item.step}</div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-zinc-100">
                  <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" /> {item.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link to="/contact" className="px-8 py-4 border border-zinc-800 text-zinc-400 font-bold hover:bg-zinc-900 hover:text-white transition-all rounded-sm flex items-center gap-2 group">
              Schedule Diagnostic <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Options - Removed Top Border */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-4 block">Partnership</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Engagement <span className="text-zinc-500">Options</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/20 border border-zinc-900 p-10 flex flex-col hover:border-zinc-800 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-zinc-100">AI Workflow Audit</h3>
              <p className="text-zinc-500 leading-relaxed mb-10 grow font-light">
                Short-term engagement delivering a detailed operational roadmap. Ideal for companies looking to identify immediate leverage points and structural bottlenecks.
              </p>
              <Link to="/contact" className="text-zinc-100 border border-zinc-100/10 px-6 py-3 rounded-sm font-bold hover:bg-white/5 flex items-center justify-center gap-2 group transition-colors">
                Begin Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-zinc-900/40 border border-zinc-800 p-10 flex flex-col hover:bg-zinc-900/50 hover:border-zinc-700 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-zinc-100">System Implementation</h3>
              <p className="text-zinc-500 leading-relaxed mb-10 grow font-light">
                End-to-end design and integration of AI workflow systems. We build the architecture, select the machine intelligence, and ensure organizational team adoption.
              </p>
              <Link to="/contact" className="bg-zinc-100 text-zinc-950 border border-zinc-100 px-6 py-3 rounded-sm font-bold flex items-center justify-center gap-2 group transition-colors">
                Request Implementation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-zinc-900/20 border border-zinc-900 p-10 flex flex-col hover:border-zinc-800 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-zinc-100">Ongoing Advisory</h3>
              <p className="text-zinc-500 leading-relaxed mb-10 grow font-light">
                Strategic advisory support for leadership teams scaling AI across departments. High-level guidance for long-term coherence and decision intelligence.
              </p>
              <Link to="/contact" className="text-zinc-100 border border-zinc-100/10 px-6 py-3 rounded-sm font-bold hover:bg-white/5 flex items-center justify-center gap-2 group transition-colors">
                Start Advisory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;