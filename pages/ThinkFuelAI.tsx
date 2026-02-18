import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Database, Activity, RefreshCcw, Search } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const ThinkFuelAI: React.FC = () => {
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
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-1 block">System Layer: 03</span>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                    ThinkFuel<span className="text-zinc-500">AI</span>
                  </h1>
                </div>
              </div>
              <p className="text-2xl md:text-3xl text-zinc-200 font-bold leading-tight max-w-4xl border-l-2 border-zinc-800 pl-6 py-2">
                The Knowledge Layer is the data ingestion engine. It transforms raw external information into high-density tokens for intelligence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight pt-4">
                Information <span className="text-zinc-500 font-serif italic not-italic">Coherence</span>
              </h2>
              <div className="prose prose-zinc prose-invert max-w-none text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  Intelligence is limited by the quality of its information. ThinkFuelAI acts as a sophisticated filter and synthesizer, pulling from your calendars, emails, industry feeds, and internal databases to create a unified, high-fidelity context for the AI system.
                </p>
                <p>
                  By cleaning and structuring data at the source, ThinkFuel ensures the logic engines are never hallucinating based on outdated or irrelevant noise.
                </p>
              </div>
            </div>

            {/* Dynamic Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: RefreshCcw, title: "Live Ingestion", desc: "Continuous monitoring of digital inputs to ensure the intelligence is never out of sync." },
                { icon: Search, title: "Semantic Search", desc: "Instant retrieval of relevant data points based on meaning, not just keywords." },
                { icon: Activity, title: "Context Mapping", desc: "Determines the relevance of incoming data to current active projects and priorities." },
                { icon: Database, title: "Data Distillation", desc: "Compresses long-form data into concise intelligence tokens for reasoning." }
              ].map((card, i) => (
                <div key={i} className="group p-8 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 hover:border-white transition-all rounded-sm relative overflow-hidden shadow-xl">
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <card.icon className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors mb-4 relative z-10" />
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10 uppercase tracking-tight">{card.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light relative z-10">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl py-12 border-t border-zinc-900">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-zinc-600">The Fuel for Higher Reasoning</h3>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              ThinkFuelAI ensures that the system is always working with the most up-to-date and relevant information. It removes the "Information Paradox" where the user has to manually copy-paste context into a chat window. Here, the context is already present, structured, and ready for analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Fuel Your Intelligence System</h2>
          <Link
            to="/contact"
            className="px-12 py-5 bg-white text-zinc-950 font-bold rounded-sm hover:bg-zinc-200 transition-all inline-flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Request Data Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ThinkFuelAI;