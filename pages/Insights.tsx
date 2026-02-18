import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const Insights: React.FC = () => {
  const categories = [
    {
      title: "AI & Operations",
      description: "How AI integrates into real workflows and improves daily execution speed.",
      path: "/insights/ai-operations"
    },
    {
      title: "Decision Intelligence",
      description: "Structuring clarity for leadership teams through better data interpretation models.",
      path: "/insights/decision-intelligence"
    },
    {
      title: "Digital Overload",
      description: "Reducing cognitive strain in modern business environments through smarter systems.",
      path: "/insights/digital-overload"
    },
    {
      title: "Performance Systems",
      description: "Aligning human execution with technological capability for long-term ROI.",
      path: "/insights/performance-systems"
    }
  ];

  return (
    <div className="relative">
      <section className="relative pt-24 pb-16 px-6">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Insights on AI and <span className="text-zinc-500">Intelligence</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Perspectives on implementation, clarity, and system design. No fluff content. Strong thinking pieces for operational leaders.
          </p>
        </div>
      </section>

      {/* Content Grid - Removed Top Border */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="bg-zinc-950 p-12 group hover:bg-zinc-900/50 transition-all cursor-pointer block">
              <BookOpen className="w-8 h-8 text-zinc-600 mb-8" />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{cat.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-8">{cat.description}</p>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-100 flex items-center gap-2 transition-colors">
                View Category <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Insight - Removed Top Border */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 border border-zinc-800 bg-zinc-900/20 rounded-sm">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 block">Featured Thinking</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Most AI <span className="text-zinc-500">Consulting Fails</span></h2>
            <p className="text-lg text-zinc-400 font-light mb-8 leading-relaxed">
              Most firms focus on tool selection. They start with the software instead of the system. This approach leads to tool sprawl, data silos, and operational noise. Real impact requires workflow architecture before automation.
            </p>
            <Link to="/insights/article-why-ai-consulting-fails" className="inline-flex items-center gap-2 text-zinc-100 border border-zinc-100 px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-zinc-950 transition-all">
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;