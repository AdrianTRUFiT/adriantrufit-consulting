import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GridBackground from '../components/GridBackground';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Founder / AI Control Architect",
    company: "BizTech Wellness AI / iAscendAi",
    period: "2022 - Present",
    location: "Orlando, FL",
    description: [
      "Architected the iAscendAi ecosystem and SoulMark identity protocol.",
      "Conducted groundbreaking research on LLM Behavioral Drift.",
      "Designed control layers for enterprise AI production systems.",
    ],
    skills: ["LLM Orchestration", "Identity Architecture", "Constraint Protocol"],
  },
  {
    id: "2",
    title: "Integrative Nutrition Health Coach & Author",
    company: "Advanced Integrative Wellness Group",
    period: "2019 - 2022",
    location: "Orlando, FL",
    description: [
      "Designed wellness programs with bio-individual approaches including nutrigenomics and biohacking.",
      "Published author on mental fitness and holistic health.",
      "Developed personalized healthcare plans for high-performing clients.",
    ],
    skills: ["Nutrigenomics", "Biohacking", "Mental Fitness"],
  },
  {
    id: "3",
    title: "Founder / Owner",
    company: "TRUFiT Training Center",
    period: "2013 - 2018",
    location: "Orlando, FL",
    description: [
      "Branded and developed a fitness facility concept from ground up.",
      "Designed integrated marketing systems for client acquisition and retention.",
      "Managed P&L and daily operations for a premium wellness boutique.",
    ],
    skills: ["Brand Development", "P&L Management", "Consumer Acquisition"],
  },
  {
    id: "4",
    title: "VP Marketing",
    company: "Select Beverages LLC",
    period: "2010 - 2013",
    location: "Miami, FL",
    description: [
      "Led brand development and packaging for beverage products.",
      "Secured funding through comprehensive financial and marketing plans.",
      "Developed 360-degree online marketing strategies.",
    ],
    skills: ["Strategy", "Contract Negotiation", "Creative Direction"],
  },
  {
    id: "5",
    title: "Marketing Manager",
    company: "Norwegian Cruise Lines / Royal Caribbean",
    period: "2007 - 2010",
    location: "Miami, FL",
    description: [
      "Managed $14M advertising budgets for global cruise lines.",
      "Created media allocation models that reduced budget by 10% while increasing reach.",
      "Awarded Most Valuable Partner of the Year.",
    ],
    skills: ["Media Planning", "ROI Analysis", "Brand Management"],
  },
];

const About: React.FC = () => {
  return (
    <div className="relative">
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
              About Adrian
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              The <span className="text-zinc-500">Legacy</span> of Resilience
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
              Adrian builds systems not from speculation — but from scars. 25 years of cross-disciplinary expertise in wellness, security, and high-stakes system optimization.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all">
                Book Strategy Call
              </Link>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-zinc-900/50 border border-zinc-800 -rotate-3"></div>
            <div className="absolute inset-0 bg-zinc-900/50 border border-zinc-800 rotate-2"></div>
            <div className="absolute inset-0 overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center p-8">
              <span className="text-8xl font-black text-zinc-800 select-none tracking-tighter">AT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline - Removed Top Border */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Expertise & <span className="text-zinc-500">History</span></h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Adrian TRUFiT is an entrepreneur and systems thinker with decades of experience building businesses through economic shifts and digital transformation cycles.
            </p>
          </div>

          <div className="relative border-l border-zinc-800 ml-4 space-y-16">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12">
                <div className="absolute -left-3.5 top-1.5 w-7 h-7 bg-zinc-950 border-2 border-zinc-700 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-zinc-100 rounded-full" />
                </div>

                <div className="p-8 border border-zinc-900 bg-zinc-900/10 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{exp.title}</h3>
                      <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">{exp.company}</p>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-block px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-sm text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        {exp.period}
                      </span>
                      <p className="text-zinc-600 text-xs mt-2">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-400 text-sm flex items-start leading-relaxed font-light">
                        <span className="text-zinc-700 mr-3 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-sm text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats - Removed Top Border */}
      <section className="py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-zinc-900 bg-zinc-950 border-l-4 border-l-zinc-700">
              <div className="text-5xl font-black mb-4 text-white">10%</div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                Waste reduction in production systems
              </p>
            </div>
            <div className="p-10 border border-zinc-900 bg-zinc-950 border-l-4 border-l-zinc-500">
              <div className="text-5xl font-black mb-4 text-white">26%</div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                Performance improvement via optimization
              </p>
            </div>
            <div className="p-10 border border-zinc-900 bg-zinc-950 border-l-4 border-l-zinc-300">
              <div className="text-5xl font-black mb-4 text-white">2.5x</div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                Output gains through feedback loops
              </p>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              My practice centers on measurable implementation, not theoretical models. I have built companies through economic shifts, digital disruption, and operational collapse, learning that tools don't fix broken systems—clarity does.
            </p>
            <Link to="/contact" className="px-12 py-5 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all inline-flex items-center gap-3">
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;