import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const Process: React.FC = () => {
  const phases = [
    {
      title: "Phase One — Operational Diagnostic",
      description: "A structured review of your current workflows, tools, and internal processes to identify integration gaps and improvement opportunities."
    },
    {
      title: "Phase Two — System Architecture",
      description: "Development of a clear workflow blueprint outlining how AI will be embedded into operations."
    },
    {
      title: "Phase Three — Integration",
      description: "Implementation of AI within defined workflows with clear ownership and accountability."
    },
    {
      title: "Phase Four — Measurement and Refinement",
      description: "Performance tracking and optimization to ensure measurable impact."
    }
  ];

  return (
    <div className="relative bg-zinc-950 min-h-screen">
      <section className="relative pt-24 pb-12 px-6">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The Implementation <span className="text-zinc-500">Process</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Clear structure. Disciplined execution. We don't believe in experimental chaos. We believe in architected integration.
          </p>
          <Link
            to="/contact"
            className="px-10 py-5 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all inline-flex items-center gap-2"
          >
            Start the Process <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-4 block">The Framework</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Methodological <span className="text-zinc-500">Phases</span></h2>
          </div>

          <div className="space-y-8">
            {phases.map((phase, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 items-center group">
                <div className="text-6xl font-black text-zinc-900 leading-none shrink-0 md:w-32 transition-colors duration-500 group-hover:text-white phase-number">
                  0{idx + 1}
                </div>
                <div className="flex-1 p-10 md:p-12 border-2 border-sky-600/40 bg-zinc-900/30 backdrop-blur-md rounded-sm hover:border-sky-500 hover:bg-zinc-900/50 transition-all duration-500 relative z-10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
                    {phase.description}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-sky-600/20 group-hover:border-sky-500/50 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link 
              to="/contact" 
              className="px-12 py-5 bg-zinc-950 text-white border-2 border-zinc-800 font-bold hover:border-zinc-500 transition-all rounded-sm inline-flex items-center gap-3"
            >
              Initiate Diagnostic <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;