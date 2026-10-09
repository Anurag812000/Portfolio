import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import AiAssistant from './components/AiAssistant';
import { Bot } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenTerminal={() => setIsTerminalOpen(true)} 
        />
        <StatsCounter />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating AI Assistant Button */}
      <button
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95 group border border-cyan-400/30"
        title="Chat with Anurag's AI Assistant"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
        <Bot className="w-4 h-4 text-white" />
        <span className="hidden sm:inline">Ask Anurag AI</span>
      </button>

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <AiAssistant 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />

    </div>
  );
}
