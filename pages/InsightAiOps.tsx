import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const InsightAiOps: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Texture Header - Limited Height */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none z-0">
        <GridBackground variant="top" />
      </div>

      <section className="relative pt-24 pb-20 px-6 z-10">
        <div className="max-w-4xl mx-auto relative">
          <Link to="/insights" className="text-zinc-500 hover:text-white flex items-center gap-2 mb-12 text-sm uppercase tracking-widest font-bold transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">Category</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            AI & <span className="text-zinc-500 font-serif not-italic">Operations</span>
          </h1>
          <div className="prose prose-zinc prose-invert max-w-none space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
            <p>
              In the modern enterprise, "Operations" is where AI strategy often goes to die. The disconnect between a high-level vision and daily execution is the primary hurdle to achieving real ROI from machine intelligence.
            </p>
            <p>
              True operational AI integration isn't about giving everyone a ChatGPT subscription. It's about architecting systems that bridge the gap between human intuition and algorithmic efficiency.
            </p>
            <h3 className="text-2xl font-bold text-white mt-12">The Bridge Between Theory and Execution</h3>
            <p>
              Operational AI must be invisible. It should sit within the background of existing workflows—CRM entries, project management updates, vendor communications—reducing the "friction of doing" without requiring the user to learn a new paradigm.
            </p>
            <p>
              Our approach focuses on identifying high-friction nodes where manual input or information retrieval slows down the entire system. By embedding AI at these specific points, we don't just "automate"—we accelerate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Architect Your Operations?</h2>
          <Link
            to="/contact"
            className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-sm hover:bg-white transition-all inline-flex items-center gap-2"
          >
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InsightAiOps;