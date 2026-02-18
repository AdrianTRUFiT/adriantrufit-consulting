import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Database, Check } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const Intelligence: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Defining <span className="text-zinc-500">Personal Intelligence</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-zinc-100 font-bold leading-relaxed max-w-3xl">
              Intelligence is not just raw compute. It is the synthesis of identity, memory, and reasoning.
            </p>
            <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
              I am an Architect of Personal Intelligence Systems. My work focuses on the intersection of human cognitive patterns and high-order algorithmic reasoning.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                With a background in structured logic and digital ecosystem design, I realized that the greatest limitation of modern AI is its lack of persistent, value-aligned identity. We are currently building tools that are broad but shallow; my mission is to build systems that are deep, personal, and profoundly effective.
              </p>
              <p>
                I believe that in the coming decade, every high-performing individual will require a "Second Brain"—not just as a file cabinet, but as an active, thinking partner that mirrors their own mental models.
              </p>
            </div>
            <div className="p-10 border border-zinc-900 bg-zinc-900/20">
              <div className="text-zinc-100 font-bold mb-4 uppercase tracking-[0.2em] text-xs">Core Mission</div>
              <p className="text-2xl text-white font-bold leading-tight">
                To bridge the gap between human intuition and algorithmic efficiency through persistent identity layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Styled as requested in screenshots */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            
            {/* Pillar 01 */}
            <div className="flex flex-col md:flex-row gap-4 items-center group">
              <div className="text-8xl font-black text-zinc-900 leading-none shrink-0 md:w-32 transition-colors duration-500 group-hover:text-white">01</div>
              <div className="flex-1 p-10 md:p-14 border-2 border-sky-600/40 bg-zinc-900/30 backdrop-blur-md rounded-sm hover:border-sky-500 hover:bg-zinc-900/50 transition-all duration-500 relative z-10 shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 text-white tracking-tight">The <span className="text-zinc-500">Identity Paradox</span></h3>
                <div className="space-y-6 text-zinc-400 font-light leading-relaxed max-w-4xl">
                  <p>
                    Standard AI operates on a "clean slate" basis. Every interaction is isolated. This results in a lack of continuity—what I call the Identity Paradox. If an intelligence does not know your core values, how can it truly represent your interests?
                  </p>
                  <p>
                    Personal Intelligence Systems resolve this by anchoring every LLM call to a persistent Identity Layer (SoulBase). This ensures that the AI's output is contextually aligned.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="flex flex-col md:flex-row gap-4 items-center group">
              <div className="text-8xl font-black text-zinc-900 leading-none shrink-0 md:w-32 transition-colors duration-500 group-hover:text-white">02</div>
              <div className="flex-1 p-10 md:p-14 border-2 border-sky-600/40 bg-zinc-900/30 backdrop-blur-md rounded-sm hover:border-sky-500 hover:bg-zinc-900/50 transition-all duration-500 relative z-10 shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 text-white tracking-tight">Memory as <span className="text-zinc-500">Foundation</span></h3>
                <div className="space-y-8 max-w-4xl">
                  <p className="text-lg text-zinc-400 font-light leading-relaxed">
                    A second brain requires a structured memory vault.
                  </p>
                  <div className="p-8 border-l border-sky-600/50 bg-sky-600/5 italic text-zinc-200 text-xl leading-relaxed">
                    "ThinkBase acts as the long-term cognitive repository, allowing the system to recall decisions made months ago and use them as logic gates for today's problems."
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="flex flex-col md:flex-row gap-4 items-center group">
              <div className="text-8xl font-black text-zinc-900 leading-none shrink-0 md:w-32 transition-colors duration-500 group-hover:text-white">03</div>
              <div className="flex-1 p-10 md:p-14 border-2 border-sky-600/40 bg-zinc-900/30 backdrop-blur-md rounded-sm hover:border-sky-500 hover:bg-zinc-900/50 transition-all duration-500 relative z-10 shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 text-white tracking-tight">Beyond <span className="text-zinc-500">Chatbots</span></h3>
                <div className="space-y-8 max-w-4xl">
                  <p className="text-lg text-zinc-400 font-light leading-relaxed">
                    We are moving past the "Chat UI" era. Personal Intelligence is an invisible layer that lives between you and your digital world.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "Automatic context synthesis across tools.",
                      "Value-based decision filtering.",
                      "Proactive insight generation based on patterns."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 text-zinc-300 items-center">
                        <div className="w-6 h-[1px] bg-sky-600/60 shrink-0"></div>
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* System Layers */}
      <section className="py-24 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 block">Architecture</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">System <span className="text-zinc-500">Layers</span></h2>
            <p className="mt-6 text-zinc-400 font-light max-w-2xl mx-auto">
              My personal intelligence architecture is built on three distinct but interconnected layers. Click to explore the core architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/intelligence/soulbase" className="group bg-zinc-950 p-12 border border-zinc-900/50 hover:border-zinc-100 transition-all rounded-sm flex flex-col">
              <Shield className="w-10 h-10 text-zinc-500 group-hover:text-zinc-100 transition-colors mb-8" />
              <h3 className="text-2xl font-bold mb-4 text-white">SoulBaseAI</h3>
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-6">The Identity Layer</p>
              <p className="text-zinc-400 leading-relaxed font-light mb-8 grow">
                Stores core values, personal philosophy, tone of voice, and fundamental beliefs. It acts as the moral compass for all system decisions.
              </p>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-white flex items-center gap-2 transition-colors">
                Explore Layer <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link to="/intelligence/thinkbase" className="group bg-zinc-950 p-12 border border-zinc-900/50 hover:border-zinc-100 transition-all rounded-sm flex flex-col">
              <Brain className="w-10 h-10 text-zinc-500 group-hover:text-zinc-100 transition-colors mb-8" />
              <h3 className="text-2xl font-bold mb-4 text-white">ThinkBaseAI</h3>
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-6">The Logic Layer</p>
              <p className="text-zinc-400 leading-relaxed font-light mb-8 grow">
                Manages reasoning frameworks, decision-making mental models, and structured memory of previous complex tasks.
              </p>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-white flex items-center gap-2 transition-colors">
                Explore Layer <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link to="/intelligence/thinkfuel" className="group bg-zinc-950 p-12 border border-zinc-900/50 hover:border-zinc-100 transition-all rounded-sm flex flex-col">
              <Database className="w-10 h-10 text-zinc-500 group-hover:text-zinc-100 transition-colors mb-8" />
              <h3 className="text-2xl font-bold mb-4 text-white">ThinkFuelAI</h3>
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-6">The Knowledge Layer</p>
              <p className="text-zinc-400 leading-relaxed font-light mb-8 grow">
                The raw data ingestion engine. It transforms external information into usable tokens for the logic engine.
              </p>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-white flex items-center gap-2 transition-colors">
                Explore Layer <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Inquiry & <span className="text-zinc-500">Collaboration</span></h2>
          <p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed">
            I primarily work with high-performing teams and individuals looking to architect their own bespoke intelligence environments.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="px-12 py-5 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all flex items-center gap-2"
            >
              Initiate Connection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intelligence;