import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const InsightDecisionIntelligence: React.FC = () => {
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
            Decision <span className="text-zinc-500 font-serif not-italic">Intelligence</span>
          </h1>
          <div className="prose prose-zinc prose-invert max-w-none space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
            <p>
              Leadership is often a game of incomplete information. Decision Intelligence (DI) is the practice of using AI to turn raw data into structured, actionable insights that remove the guesswork from strategic planning.
            </p>
            <p>
              It is not just data visualization. It is about building a feedback loop where the machine helps leadership understand the "why" behind the numbers, not just the "what."
            </p>
            <h3 className="text-2xl font-bold text-white mt-12">Beyond Dashboards</h3>
            <p>
              Traditional dashboards tell you what happened last month. Decision Intelligence models tell you what is likely to happen next week if you change a single variable today. 
            </p>
            <p>
              By leveraging predictive modeling and unstructured data analysis (like customer sentiment or market shifts), we help leadership teams build a proactive stance. The goal is clarity in high-stakes environments where the cost of a wrong turn is significant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Strengthen Your Strategic Clarity</h2>
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

export default InsightDecisionIntelligence;