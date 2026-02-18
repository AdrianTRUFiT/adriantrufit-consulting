import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Intelligence', path: '/intelligence' },
    { label: 'Workflows', path: '/workflows' },
    { label: 'Process', path: '/process' },
    { label: 'Insights', path: '/insights' },
    { label: 'Consulting', path: '/consulting' },
    { label: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-900 shadow-2xl">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 h-20 flex items-center">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center shrink-0 pr-8">
          <Link to="/" className="nav-logo text-3xl font-bold tracking-tighter flex items-center group">
            <span className="text-white group-hover:text-zinc-500 transition-colors duration-300">ADRIAN</span>
            <span className="text-zinc-600 group-hover:text-white transition-colors duration-300">TRUFiT</span>
          </Link>
        </div>

        {/* Center: Navigation Links - Perfectly centered between Logo and CTA */}
        <div className="hidden lg:flex flex-1 justify-center items-center px-16">
          <div className="flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[15px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border-b-2 py-1 hover:text-zinc-500 ${
                  isActive(item.path) 
                    ? 'text-white border-white' 
                    : 'text-white border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Action Button */}
        <div className="hidden lg:flex items-center shrink-0 pl-8">
          <Link
            to="/contact"
            className="whitespace-nowrap px-6 py-2.5 bg-white text-zinc-950 text-[11px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-200 transition-all flex items-center gap-3 border border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <Cpu className="w-3.5 h-3.5" />
            </div>
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden ml-auto text-zinc-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-black uppercase tracking-widest hover:text-zinc-500 transition-colors ${
                isActive(item.path) ? 'text-white' : 'text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full py-5 bg-white text-zinc-950 text-center font-black uppercase tracking-widest rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            Book Strategy Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;