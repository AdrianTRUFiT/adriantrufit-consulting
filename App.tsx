import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consulting from './pages/Consulting';
import Workflows from './pages/Workflows';
import Process from './pages/Process';
import About from './pages/About';
import Intelligence from './pages/Intelligence';
import SoulBaseAI from './pages/SoulBaseAI';
import ThinkBaseAI from './pages/ThinkBaseAI';
import ThinkFuelAI from './pages/ThinkFuelAI';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import InsightAiOps from './pages/InsightAiOps';
import InsightDecisionIntelligence from './pages/InsightDecisionIntelligence';
import InsightDigitalOverload from './pages/InsightDigitalOverload';
import InsightPerformanceSystems from './pages/InsightPerformanceSystems';
import ArticleWhyAiFails from './pages/ArticleWhyAiFails';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-zinc-100 selection:text-zinc-900">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/intelligence/soulbase" element={<SoulBaseAI />} />
            <Route path="/intelligence/thinkbase" element={<ThinkBaseAI />} />
            <Route path="/intelligence/thinkfuel" element={<ThinkFuelAI />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/ai-operations" element={<InsightAiOps />} />
            <Route path="/insights/decision-intelligence" element={<InsightDecisionIntelligence />} />
            <Route path="/insights/digital-overload" element={<InsightDigitalOverload />} />
            <Route path="/insights/performance-systems" element={<InsightPerformanceSystems />} />
            <Route path="/insights/article-why-ai-consulting-fails" element={<ArticleWhyAiFails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;