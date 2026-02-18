import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const ArticleWhyAiFails: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Texture Header - Limited Height */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none z-0">
        <GridBackground variant="top" />
      </div>

      <section className="relative pt-24 pb-32 px-6 z-10">
        <div className="max-w-3xl mx-auto relative">
          <Link to="/insights" className="text-zinc-500 hover:text-white flex items-center gap-2 mb-12 text-sm uppercase tracking-widest font-bold transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">Thought Leadership</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
            Why Most AI <span className="text-zinc-500">Consulting Fails</span>
          </h1>
          
          <div className="prose prose-zinc prose-invert max-w-none space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
            <p className="text-zinc-200 font-medium">
              The "software-first" mistake is the most expensive error an organization can make when adopting artificial intelligence.
            </p>
            <p>
              Most consulting firms arrive with a list of tools. They pitch subscriptions, licenses, and technical integrations. They treat AI like a plugin—something you just "turn on" to fix a broken process.
            </p>
            <p>
              This fails because AI is not a tool; it is an architect of behavior. If you automate a broken workflow, you simply get faster errors.
            </p>
            
            <h3 className="text-2xl font-bold text-white mt-12">Systemic Incoherence</h3>
            <p>
              The result of tool-first consulting is often "Systemic Incoherence." The marketing team is using one tool, the operations team is using another, and leadership has no visibility into how these systems are actually impacting the bottom line.
            </p>
            <p>
              Tool sprawl leads to data silos. Data silos lead to operational noise. Operational noise leads to the exact opposite of what AI promised: slower execution and higher complexity.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12">The Solution: Workflow Architecture</h3>
            <p>
              Real impact requires looking at the organization's skeletal structure first. Before choosing a tool, you must map the bottlenecks, the decision nodes, and the information flow.
            </p>
            <p>
              We start with the diagnostic. We strip away the hype and look at the "scars" of your operations. Only once the architecture is clear do we select the machine intelligence that best fits the frame.
            </p>
            <div className="p-8 border-l border-zinc-700 bg-zinc-900/10 italic my-12">
              "AI doesn't solve problems; it amplifies systems. Make sure your system is worth amplifying."
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Move From Tools to Architecture</h2>
          <p className="text-zinc-500 font-light mb-12 max-w-xl mx-auto">
            If you're ready for a diagnostic review of your operational workflows, let's connect.
          </p>
          <Link
            to="/contact"
            className="px-10 py-5 bg-zinc-100 text-zinc-950 font-bold rounded-sm hover:bg-white transition-all inline-flex items-center gap-3"
          >
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleWhyAiFails;