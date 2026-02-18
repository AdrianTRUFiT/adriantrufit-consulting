import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Brain, Cpu, Zap, Layers } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const ThinkBaseAI: React.FC = () => {
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
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-1 block">System Layer: 02</span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                    ThinkBase<span className="text-zinc-500">AI</span>
                  </h1>
                </div>
              </div>
              <p className="text-2xl md:text-3xl text-zinc-200 font-bold leading-tight max-w-4xl border-l-2 border-zinc-800 pl-6 py-2">
                The Logic Layer is the reasoning core. It manages decision-making mental models and structured memory of complex tasks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight pt-4">
                Cognitive <span className="text-zinc-500 font-serif italic not-italic">Architecture</span>
              </h2>
              <div className="prose prose-zinc prose-invert max-w-none text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  Intelligence without structure is just noise. ThinkBaseAI provides the framework for high-order reasoning. By embedding specific "Mental Models"—such as First Principles, Inversion, and Second-Order Thinking—into the system, we transform the AI from a search engine into a strategic advisor.
                </p>
                <p>
                  ThinkBase serves as the bridge between raw data ingestion and value-aligned execution, ensuring that logic is consistent and results are predictable.
                </p>
              </div>
            </div>

            {/* Dynamic Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "Mental Model Vault", desc: "Bespoke reasoning frameworks tailored to your industry and decision style." },
                { icon: Zap, title: "Recursive Synthesis", desc: "The ability to chain multiple logical steps together for deep problem solving." },
                { icon: Layers, title: "Decision Context", desc: "Maintains a persistent state of active projects across all conversations." },
                { icon: Brain, title: "Logic Bridge", desc: "Translates abstract concepts into concrete, executable operational workflows." }
              ].map((card, i) => (
                <div key={i} className="group p-8 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 hover:border-white transition-all rounded-sm relative overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <card.icon className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors mb-4 relative z-10" />
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10 uppercase tracking-tight">{card.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light relative z-10">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl py-12 border-t border-zinc-900">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-zinc-600">Building the "Second Brain"</h3>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              ThinkBaseAI acts as the cognitive foundation for your personal intelligence. It doesn't just "remember" facts; it remembers the logic you used to reach a decision six months ago, allowing for a consistent, evolving intelligence that grows smarter with every interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Strengthen Your Reasoning Architecture</h2>
          <Link
            to="/contact"
            className="px-12 py-5 bg-white text-zinc-950 font-bold rounded-sm hover:bg-zinc-200 transition-all inline-flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Initiate System Design <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ThinkBaseAI;