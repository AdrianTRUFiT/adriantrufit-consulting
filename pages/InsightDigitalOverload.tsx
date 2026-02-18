import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const InsightDigitalOverload: React.FC = () => {
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
            Digital <span className="text-zinc-500 font-serif not-italic">Overload</span>
          </h1>
          <div className="prose prose-zinc prose-invert max-w-none space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
            <p>
              We are living in an era of tool saturation. Most organizations don't have a lack of tools; they have a lack of coherence. 
            </p>
            <p>
              Digital overload isn't just a productivity drain—it's an operational risk. When teams are switching between a dozen platforms just to complete a single task, the cognitive load leads to burnout and error.
            </p>
            <h3 className="text-2xl font-bold text-white mt-12">The Solution is Integration, Not Addition</h3>
            <p>
              Instead of adding more AI tools to the stack, we focus on thinning the herd. We use AI as the orchestrator—the central nervous system that pulls data from disparate sources into a single, clean workflow.
            </p>
            <p>
              The goal is to move from "multi-tab operational hell" to a streamlined, unified environment where the machine handles the logistics, letting your team focus on the high-value creativity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Reduce Your Operational Noise</h2>
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

export default InsightDigitalOverload;