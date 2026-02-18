import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Shield, Target, UserCheck, Heart } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const SoulBaseAI: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Texture Header - Limited Height */}
      <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0">
        <GridBackground variant="top" />
      </div>

      <section className="relative pt-8 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Navigation - Higher up */}
          <Link to="/intelligence" className="text-zinc-500 hover:text-white inline-flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-widest transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Intelligence
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-sm">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-1 block">System Layer: 01</span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                    SoulBase<span className="text-zinc-500">AI</span>
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-zinc-200 font-bold leading-tight max-w-4xl border-l-2 border-zinc-800 pl-6 py-2">
                The Identity Layer is the moral compass of personal intelligence. It is the persistent repository of core values, personal philosophy, and fundamental beliefs.
              </p>
            </div>
          </div>

          {/* Philosophy Section - No Texture Background Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight pt-4">
                The Philosophy of <span className="text-zinc-500 font-serif italic not-italic">Alignment</span>
              </h2>
              <div className="prose prose-zinc prose-invert max-w-none text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  Modern LLMs are stochastic parrots—they generate output based on statistical probability, not personal conviction. SoulBaseAI fixes this by injecting a "Value Constraint" into every prompt. It ensures that the system doesn't just provide an answer, but an answer that mirrors your specific worldview.
                </p>
                <p>
                  Without SoulBase, intelligence is adrift. With it, every output becomes a reflection of your identity, ensuring continuity across months and years of digital interaction.
                </p>
              </div>
            </div>

            {/* Dynamic Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Goal Filtering", desc: "Every task is audited against your long-term objectives before execution begins." },
                { icon: UserCheck, title: "Voice Synthesis", desc: "Maintains a consistent, persistent tone of voice that reflects your brand." },
                { icon: Heart, title: "Ethics Layer", desc: "A hard-coded set of moral boundaries that the AI is not permitted to cross." },
                { icon: Shield, title: "Constraint Protocol", desc: "Identifies Forbidden Logic nodes to prevent undesirable cognitive drift." }
              ].map((card, i) => (
                <div key={i} className="group p-8 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 hover:border-white transition-all rounded-sm relative overflow-hidden shadow-xl">
                  <div className="absolute -inset-full bg-gradient-to-br from-white/5 to-transparent group-hover:inset-0 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                  <card.icon className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors mb-4 relative z-10" />
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10 uppercase tracking-tight">{card.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light relative z-10">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl py-12 border-t border-zinc-900">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-zinc-600">The Identity Layer in Action</h3>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              When you ask a standard AI to "write an email," it chooses the most probable words. When you ask SoulBaseAI, it reviews your "Tone Matrix," checks your current "Priority Stack," and cross-references your "Value Vault" to produce an email that is indistinguishable from your own high-level communication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Architect Your Identity Layer?</h2>
          <Link
            to="/contact"
            className="px-12 py-5 bg-white text-zinc-950 font-bold rounded-sm hover:bg-zinc-200 transition-all inline-flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Start Implementation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoulBaseAI;