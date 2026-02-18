import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const InsightPerformanceSystems: React.FC = () => {
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
            Performance <span className="text-zinc-500 font-serif not-italic">Systems</span>
          </h1>
          <div className="prose prose-zinc prose-invert max-w-none space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
            <p>
              Performance is the byproduct of high-quality systems. In the context of AI, performance isn't just about how fast a model can generate text—it's about how much leverage it provides to the human operating it.
            </p>
            <p>
              A high-performance system aligns human psychology with technological capability. It respects the flow state of the operator while augmenting their output.
            </p>
            <h3 className="text-2xl font-bold text-white mt-12">The ROI of Feedback Loops</h3>
            <p>
              True system performance is measured in the reduction of "dead time"—those minutes and hours spent on rote coordination, formatting, and administrative overhead. 
            </p>
            <p>
              By designing feedback loops where AI continually learns from operational outcomes, we create a self-optimizing environment. Over time, the cost per unit of output drops while the quality of that output remains consistently high.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Align Your Systems for Maximum Leverage</h2>
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

export default InsightPerformanceSystems;