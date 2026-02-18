import React from 'react';
import { Link } from 'react-router-dom';
import GridBackground from './GridBackground';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-950 py-20 px-6 overflow-hidden">
      <GridBackground variant="bottom" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-zinc-400">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl font-bold tracking-tighter text-white">
            ADRIAN <span className="text-zinc-600">TRUFiT</span>
          </Link>
          <p className="mt-4 text-zinc-400 max-w-sm leading-relaxed font-light">
            Operational AI Consulting. Designing workflow architecture that drives measurable performance and operational clarity.
          </p>
          <div className="mt-8">
            <a href="mailto:adriantrufit@gmail.com" className="text-zinc-100 font-bold hover:underline transition-all">
              adriantrufit@gmail.com
            </a>
          </div>
        </div>

        <div>
          {/* Header removed as requested */}
          <ul className="space-y-4 font-light md:mt-12">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/consulting" className="hover:text-white transition-colors">Consulting</Link></li>
            <li><Link to="/workflows" className="hover:text-white transition-colors">Workflows</Link></li>
            <li><Link to="/process" className="hover:text-white transition-colors">Process</Link></li>
          </ul>
        </div>

        <div>
          {/* Header removed as requested */}
          <ul className="space-y-4 font-light md:mt-12">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900/50 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-zinc-600">
        <p>© {new Date().getFullYear()} Adrian TRUFiT McKenzie. All rights reserved.</p>
        <div className="flex gap-10">
          {/* LinkedIn removed from bottom row as requested */}
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;