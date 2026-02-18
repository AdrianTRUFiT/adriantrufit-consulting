import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Settings, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const RevenueDiagram = () => (
  <svg viewBox="0 0 800 500" className="w-full h-full text-zinc-700" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="200" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="rgba(255,255,255,0.02)"/>
    <text x="110" y="245" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">INTAKE</text>
    <path d="M170 240H220" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <rect x="220" y="150" width="140" height="180" rx="4" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
    <text x="290" y="180" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" opacity="0.6">AI QUALIFICATION</text>
    <circle cx="290" cy="230" r="20" stroke="currentColor" strokeWidth="1"/>
    <path d="M285 230L295 240L310 220" stroke="currentColor" strokeWidth="2"/>
    <text x="290" y="270" textAnchor="middle" fill="white" fontSize="11">LOGIC ENGINE</text>
    <path d="M360 240H410" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <rect x="410" y="200" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="1" fill="rgba(255,255,255,0.02)"/>
    <text x="470" y="245" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">CRM SYNC</text>
    <path d="M530 240H580" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <rect x="580" y="150" width="140" height="180" rx="4" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
    <text x="650" y="180" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" opacity="0.6">PROPOSAL GEN</text>
    <rect x="610" y="210" width="80" height="10" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="610" y="230" width="80" height="10" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="610" y="250" width="60" height="10" rx="2" fill="currentColor" opacity="0.3"/>
    <text x="650" y="290" textAnchor="middle" fill="white" fontSize="11">DYNAMIC FLOW</text>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);

const OpsDiagram = () => (
  <svg viewBox="0 0 800 500" className="w-full h-full text-zinc-700" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="400" cy="250" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" opacity="0.3"/>
    <g transform="translate(340, 60)">
      <rect width="120" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
      <text x="60" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SCHEDULING</text>
    </g>
    <g transform="translate(620, 220)">
      <rect width="120" height="60" rx="2" stroke="currentColor" strokeWidth="1" fill="rgba(255,255,255,0.02)"/>
      <text x="60" y="35" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">DOCS</text>
    </g>
    <g transform="translate(340, 380)">
      <rect width="120" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
      <text x="60" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">VENDOR SYNC</text>
    </g>
    <g transform="translate(60, 220)">
      <rect width="120" height="60" rx="2" stroke="currentColor" strokeWidth="1" fill="rgba(255,255,255,0.02)"/>
      <text x="60" y="35" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">COMMS</text>
    </g>
    <path d="M400 120 C 550 120, 620 220, 620 220" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
    <path d="M620 280 C 620 280, 550 380, 400 380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
    <path d="M340 380 C 190 380, 120 280, 120 280" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
    <path d="M120 220 C 120 220, 190 120, 340 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
    <circle cx="400" cy="250" r="40" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="1"/>
    <text x="400" y="254" textAnchor="middle" fill="white" fontSize="10" fontWeight="black">AI CORE</text>
  </svg>
);

const IntelligenceDiagram = () => (
  <svg viewBox="0 0 800 500" className="w-full h-full text-zinc-700" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <rect x="100" y="100" width="150" height="40" rx="2" stroke="currentColor"/>
      <rect x="100" y="160" width="150" height="40" rx="2" stroke="currentColor"/>
      <rect x="100" y="220" width="150" height="40" rx="2" stroke="currentColor"/>
      <text x="175" y="125" textAnchor="middle" fill="currentColor" fontSize="10">RAW DATA A</text>
      <text x="175" y="185" textAnchor="middle" fill="currentColor" fontSize="10">RAW DATA B</text>
      <text x="175" y="245" textAnchor="middle" fill="currentColor" fontSize="10">RAW DATA C</text>
    </g>
    <path d="M250 120 L 400 200" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M250 180 L 400 225" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M250 240 L 400 250" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M400 150 L 500 250 L 400 350 L 300 250 Z" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="2"/>
    <text x="400" y="245" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SYNTHESIS</text>
    <text x="400" y="265" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.7">AI REASONING</text>
    <path d="M500 250 H 600" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <rect x="600" y="150" width="150" height="200" rx="4" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,255,255,0.08)"/>
    <rect x="620" y="170" width="110" height="60" rx="2" fill="currentColor" opacity="0.2"/>
    <rect x="620" y="240" width="50" height="40" rx="2" fill="currentColor" opacity="0.2"/>
    <rect x="680" y="240" width="50" height="40" rx="2" fill="currentColor" opacity="0.2"/>
    <rect x="620" y="290" width="110" height="40" rx="2" fill="currentColor" opacity="0.2"/>
    <text x="675" y="365" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">EXECUTIVE DASHBOARD</text>
  </svg>
);

const Workflows: React.FC = () => {
  const systems = [
    {
      title: "Revenue Workflow Integration",
      icon: Target,
      description: "A structured system that integrates AI into lead intake, qualification logic, CRM enrichment, proposal drafting, and follow-up management.",
      outcomes: ["Reduced manual data entry", "Improved pipeline visibility", "Faster proposal turnaround", "Higher-quality prospect targeting"],
      cta: "Improve Revenue Systems",
      diagram: <RevenueDiagram />
    },
    {
      title: "Operations Workflow Integration",
      icon: Settings,
      description: "AI-driven automation for scheduling, documentation, vendor coordination, and internal communication systems.",
      outcomes: ["Fewer process errors", "Improved turnaround time", "Clear accountability mapping", "Reduced administrative overhead"],
      cta: "Optimize Operations",
      diagram: <OpsDiagram />
    },
    {
      title: "Executive Decision Intelligence",
      icon: Brain,
      description: "AI-supported dashboards and structured data interpretation models that assist leadership teams in forecasting, planning, and performance review.",
      outcomes: ["Clearer financial modeling", "Faster strategic decisions", "Reduced information fragmentation", "Improved reporting clarity"],
      cta: "Strengthen Decision Systems",
      diagram: <IntelligenceDiagram />
    }
  ];

  return (
    <div className="relative">
      <section className="relative pt-24 pb-20 px-6">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Operational AI <span className="text-zinc-500">Workflows</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12">
            Structured systems designed around execution and performance. These are not products; they are operational frameworks adapted to your organization.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-zinc-100 text-zinc-950 border border-zinc-100 font-bold rounded-sm hover:bg-white transition-all inline-flex items-center gap-2"
          >
            Discuss Your Workflow <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Workflow Sections - Removed Top Border */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {systems.map((sys, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className={`${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <sys.icon className="w-12 h-12 text-zinc-500 mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{sys.title}</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
                  {sys.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {sys.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="px-8 py-4 border border-zinc-800 text-white font-bold hover:bg-zinc-900 rounded-sm transition-all inline-block">
                  {sys.cta}
                </Link>
              </div>
              <div className="aspect-[16/10] bg-zinc-900/40 border border-zinc-800 relative group overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                   {sys.diagram}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Workflows;