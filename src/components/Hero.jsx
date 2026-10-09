import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Brain, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const titles = [
  "AI & Generative AI Engineer",
  "RAG & Agentic Systems Developer",
  "Computer Vision & Robotics Specialist",
  "M.Tech CSE Scholar @ IIIT Naya Raipur",
  "GATE CSE Qualified Engineer"
];

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-sm shadow-cyan-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>GATE CSE Qualified</span>
              <span className="text-slate-500">•</span>
              <span>M.Tech CSE @ IIIT Naya Raipur</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hello, I'm <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                {personalData.name}
              </span>
            </h1>

            {/* Dynamic Typewriter Heading */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <p className="text-xl sm:text-2xl font-mono text-cyan-300 flex items-center">
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse inline-block"></span>
              </p>
            </div>

            {/* Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
              {personalData.summary}
            </p>

            {/* Quick Contact & Location Pills */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 mb-8 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalData.location}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a 
                href={`mailto:${personalData.email}`} 
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{personalData.email}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{personalData.phone}</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-md"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-300 border border-cyan-800/50 text-sm font-mono transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                title="Launch Interactive AI Terminal"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>AI Terminal</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-[#0077b5] border border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive System & Capabilities Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-25 blur-lg transition duration-1000 group-hover:opacity-40" />

              {/* Terminal / Code Card */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">anurag_sahu_core.py</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Active
                  </span>
                </div>

                {/* Architecture Highlights / Capabilities */}
                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Item 1: RAG & GenAI */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span>RAG & AI Agentic Pipeline</span>
                      </div>
                      <span className="text-[10px] text-cyan-400/80 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">2026</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      Qdrant Vector DB • FastAPI • LangChain • Source Attribution
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[10px] text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Zero-Hallucination Citation Grounding</span>
                    </div>
                  </div>

                  {/* Item 2: YOLOv8 Computer Vision */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-purple-300 font-semibold">
                        <Cpu className="w-4 h-4 text-purple-400" />
                        <span>Robotic Vision (Janyu Tech)</span>
                      </div>
                      <span className="text-[10px] text-purple-400/80 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-800/40">Aug 2026</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      YOLOv8-nano • PyTorch • OpenCV • Label Studio (1,368 polygons)
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Detection: <strong className="text-purple-300 font-bold">0.84 mAP50</strong></span>
                      <span className="text-slate-400">Seg: <strong className="text-purple-300 font-bold">0.81 mAP50</strong></span>
                    </div>
                  </div>

                  {/* Item 3: 6G Smart Grid Research */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        <span>Explainable AI Load Forecasting</span>
                      </div>
                      <span className="text-[10px] text-indigo-400/80 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-800/40">Research</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      6G CPS Smart Grid • XGBoost • Temporal TreeSHAP (168h window)
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">MAE: <strong className="text-indigo-300 font-bold">1.04</strong></span>
                      <span className="text-slate-400">R²: <strong className="text-indigo-300 font-bold">0.836</strong></span>
                    </div>
                  </div>

                  {/* Item 4: Industrial IoT Telemetry */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-amber-300 font-semibold">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Varaha IoT Real-Time Engine</span>
                      </div>
                      <span className="text-[10px] text-amber-400/80 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">MQTT</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      Node.js • PostgreSQL • React • Motor Health, RPM & Current
                    </p>
                  </div>

                </div>

                {/* Footer status button */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">Location: Korba, CG, India</span>
                  <a
                    href="#research"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group"
                  >
                    <span>Read Research Papers</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
