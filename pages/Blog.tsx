import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import GridBackground from '../components/GridBackground';

const Blog: React.FC = () => {
  const posts = [
    {
      id: "why-ai-consulting-fails",
      title: "Why Most AI Consulting Fails",
      excerpt: "The 'software-first' mistake is the most expensive error an organization can make when adopting artificial intelligence.",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "Thought Leadership",
      path: "/insights/article-why-ai-consulting-fails"
    }
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950">
      <section className="relative pt-24 pb-16 px-6">
        <GridBackground variant="top" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block">The Feed</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Latest <span className="text-zinc-500">Posts</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Deep dives into operational architecture, personal intelligence, and the future of execution.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                to={post.path} 
                className="group flex flex-col bg-zinc-900/10 border border-zinc-900 hover:border-zinc-500 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-300 transition-colors">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 font-light leading-relaxed mb-8 grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-zinc-900 group-hover:border-zinc-800">
                    <div className="flex items-center gap-4 text-xs text-zinc-600">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Stay Updated on System Design</h2>
          <Link
            to="/contact"
            className="px-10 py-4 bg-white text-zinc-950 font-bold rounded-sm hover:bg-zinc-200 transition-all inline-flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Join the Network <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;