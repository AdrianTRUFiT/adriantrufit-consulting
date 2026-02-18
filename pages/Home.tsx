import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, BarChart3, Zap } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Operational AI Systems Built for <span className="text-zinc-500">Real Business Environments</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
              I design and implement AI-integrated workflows that improve clarity, increase execution speed, and create measurable operational performance.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                Book Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consulting"
                className="px-8 py-4 border border-zinc-800 text-white font-bold rounded-sm hover:bg-zinc-900 transition-all flex items-center justify-center"
              >
                View Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift Section - Removed Top Border */}
      <section className="py-16 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">The Problem</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              AI Only Works When <span className="text-zinc-500">Embedded Into Operations</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
            <p>
              Many organizations are experimenting with artificial intelligence. Few are integrating it in a way that improves daily execution.
            </p>
            <p>
              Tools are added. Subscriptions grow. Dashboards multiply. But workflows remain fragmented. Decisions remain slow. Teams remain overloaded.
            </p>
            <div className="py-4 border-l-2 border-zinc-800 pl-6 italic text-zinc-300">
              "AI becomes another layer of complexity instead of a structural advantage."
            </div>
            <p className="font-bold text-zinc-200">
              The real opportunity is not more tools. It is better architecture.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Methodology</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold">AI Workflow Architecture and <span className="text-zinc-500">Implementation</span></h2>
            <p className="mt-4 text-xl text-zinc-400 font-light">
              I work with leadership teams to design AI systems that operate inside existing business structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-900 hover:border-zinc-700 transition-colors bg-zinc-950/20">
              <Layers className="w-8 h-8 text-zinc-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Mapping Bottlenecks</h3>
              <p className="text-zinc-400 leading-relaxed font-light">Identifying operational friction points where human cognitive load is highest.</p>
            </div>
            <div className="p-8 border border-zinc-900 hover:border-zinc-700 transition-colors bg-zinc-950/20">
              <Zap className="w-8 h-8 text-zinc-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Leverage Points</h3>
              <p className="text-zinc-400 leading-relaxed font-light">Pinpointing high-impact automation opportunities that drive immediate margin growth.</p>
            </div>
            <div className="p-8 border border-zinc-900 hover:border-zinc-700 transition-colors bg-zinc-950/20">
              <BarChart3 className="w-8 h-8 text-zinc-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Clarity Systems</h3>
              <p className="text-zinc-400 leading-relaxed font-light">Structuring data into executive-level dashboards for faster, better decision intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Removed Top Border */}
      <section className="py-16 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Services</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">Core Consulting <span className="text-zinc-500">Capabilities</span></h2>
            </div>
            <Link to="/consulting" className="text-zinc-400 hover:text-white flex items-center gap-2 group transition-colors font-bold uppercase text-xs tracking-widest">
              Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 p-12 border border-zinc-900/50 hover:border-zinc-700 transition-all rounded-sm">
              <h3 className="text-2xl font-bold mb-4">AI Workflow Audits</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed font-light">A structured review of your current operational systems, tools, and decision layers.</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li className="flex gap-2"><span>—</span> Comprehensive Roadmap</li>
                <li className="flex gap-2"><span>—</span> Redundancy Identification</li>
              </ul>
            </div>
            <div className="bg-zinc-950 p-12 border border-zinc-900/50 hover:border-zinc-700 transition-all rounded-sm">
              <h3 className="text-2xl font-bold mb-4">Workflow System Design</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed font-light">Custom-built AI-integrated operational frameworks aligned with your company structure.</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li className="flex gap-2"><span>—</span> Built for Execution</li>
                <li className="flex gap-2"><span>—</span> Integrated Frameworks</li>
              </ul>
            </div>
            <div className="bg-zinc-950 p-12 border border-zinc-900/50 hover:border-zinc-700 transition-all rounded-sm">
              <h3 className="text-2xl font-bold mb-4">Revenue Optimization</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed font-light">Integration of AI into intake, qualification, CRM structuring, and proposal development.</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li className="flex gap-2"><span>—</span> Pipeline Performance</li>
                <li className="flex gap-2"><span>—</span> Reduced Manual Input</li>
              </ul>
            </div>
            <div className="bg-zinc-950 p-12 border border-zinc-900/50 hover:border-zinc-700 transition-all rounded-sm">
              <h3 className="text-2xl font-bold mb-4">Decision Intelligence</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed font-light">AI-supported systems that reduce ambiguity in forecasting, planning, and evaluation.</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li className="flex gap-2"><span>—</span> Reduced Information Gaps</li>
                <li className="flex gap-2"><span>—</span> Strategic Modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Focus - Removed Top Border for Footer Blend */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Designed for <span className="text-zinc-500">Measurable Impact</span></h2>
          <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
            Each engagement is structured around operational outcomes such as reduced processing time, improved data clarity, and faster internal decision cycles.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="px-12 py-5 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;