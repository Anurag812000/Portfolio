import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Layers, 
  Activity, 
  Sparkles, 
  FileText, 
  Play, 
  Check, 
  Copy,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  // Terminal state
  const [activeConsoleTab, setActiveConsoleTab] = useState('vision'); // 'vision' | 'rag' | 'specs'
  const [frameCount, setFrameCount] = useState(14820);
  const [isInferencing, setIsInferencing] = useState(false);
  const [copiedSpecs, setCopiedSpecs] = useState(false);

  // Trigger camera snapshot
  const handleTriggerSnapshot = () => {
    setIsInferencing(true);
    setTimeout(() => {
      setFrameCount((prev) => prev + 1);
      setIsInferencing(false);
    }, 280);
  };

  const handleCopySpecs = () => {
    const specs = JSON.stringify({
      engineer: "Anurag Kumar Sahu",
      institution: "IIIT Naya Raipur",
      degree: "M.Tech CSE (2025–Present) CGPA: 7.8/10",
      gate_cse: "Qualified",
      experience: "Janyu Tech (Robotic Programmer Intern)",
      vision_stack: "YOLOv8-nano, PyTorch, OpenCV, Label Studio",
      genai_stack: "FastAPI, LangChain, Qdrant, RAG",
      research: ["6G Smart Grid XAI (R²: 0.836)", "Cloud Auto-Scaling (F1: 0.9955)"]
    }, null, 2);
    navigator.clipboard.writeText(specs);
    setCopiedSpecs(true);
    setTimeout(() => setCopiedSpecs(false), 2000);
  };

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-800/80 relative overflow-hidden bg-tech-grid">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/12 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: Identity & Credentials (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-zinc-200 font-medium">Available for AI & Robotics Roles</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">IIIT Naya Raipur</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              {personalData.name}
            </h1>

            {/* Role & Specialization */}
            <p className="text-lg sm:text-xl text-zinc-200 font-medium mb-4 leading-snug">
              AI & Machine Learning Engineer specializing in <span className="text-white underline decoration-zinc-700 underline-offset-4">Computer Vision</span>, <span className="text-white underline decoration-zinc-700 underline-offset-4">RAG Agents</span>, and <span className="text-white underline decoration-zinc-700 underline-offset-4">Explainable AI</span>.
            </p>

            {/* High-Impact Bio */}
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6 max-w-2xl">
              M.Tech Scholar at IIIT Naya Raipur & GATE CSE Qualified. Experienced in building production instance segmentation pipelines (YOLOv8-nano on edge hardware), high-concurrency industrial IoT telemetry engines, and research-backed Explainable AI systems.
            </p>

            {/* Metrics Callout Strip */}
            <div className="grid grid-cols-3 gap-3 mb-7 max-w-lg p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm font-mono">
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Vision Detection</div>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">0.84 mAP50</div>
                <div className="text-[10px] text-zinc-400">1,368 Polygons</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Edge Latency</div>
                <div className="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">14.2 ms</div>
                <div className="text-[10px] text-zinc-400">~70+ FPS Feed</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Smart Grid XAI</div>
                <div className="text-base sm:text-lg font-bold text-cyan-400 mt-0.5">0.836 R²</div>
                <div className="text-[10px] text-zinc-400">Temporal SHAP</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-zinc-950" />
                <span>View Official Resume</span>
              </button>

              <a
                href="#demo-lab"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive Architecture Lab</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80 text-xs font-medium transition-colors"
              >
                <span>Projects</span>
              </a>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{personalData.email}</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Edge AI Terminal (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-800/90 bg-[#0c0d14] shadow-2xl overflow-hidden backdrop-blur-md">
              
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-[11px] font-mono text-zinc-400 ml-1">
                    edge-ai@iiit-nr:~
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex items-center border-b border-zinc-800/80 bg-zinc-950/60 px-2 pt-1.5">
                {[
                  { id: 'vision', label: 'yolov8_edge.py', icon: Cpu },
                  { id: 'rag', label: 'rag_retriever.py', icon: Terminal },
                  { id: 'specs', label: 'scholar_spec.json', icon: Layers }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveConsoleTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors ${
                        activeConsoleTab === tab.id
                          ? 'bg-zinc-900 text-white border-t border-x border-zinc-700/80'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Icon className="w-3 h-3 text-zinc-400" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Terminal Screen Body */}
              <div className="p-4 font-mono text-xs text-zinc-300 min-h-[290px] flex flex-col justify-between">
                
                {/* TAB 1: YOLOv8 Live Vision Edge Inference */}
                {activeConsoleTab === 'vision' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800/60 pb-2">
                      <span>Model: YOLOv8-nano (FP16 TensorRT)</span>
                      <span className="text-emerald-400 font-bold">71.4 FPS</span>
                    </div>

                    <div className="space-y-1.5 text-[11px] leading-relaxed">
                      <div className="text-zinc-500">
                        [INFERENCE] Frame #{frameCount} • Latency: 14.2ms • Device: Jetson/CUDA
                      </div>
                      <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 font-semibold">[0] robotic_manipulator_arm</span>
                          <span className="text-emerald-400">conf: 0.942</span>
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          bbox: [142, 88, 310, 420] | polygon: 36 vertices
                        </div>
                      </div>

                      <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 font-semibold">[1] industrial_workpiece</span>
                          <span className="text-emerald-400">conf: 0.891</span>
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          bbox: [220, 310, 290, 395] | polygon: 24 vertices
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={handleTriggerSnapshot}
                        disabled={isInferencing}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-white text-[11px] font-mono transition-colors"
                      >
                        <Play className={`w-3 h-3 text-emerald-400 ${isInferencing ? 'animate-spin' : ''}`} />
                        <span>{isInferencing ? 'Capturing Frame...' : 'Sample Live Feed'}</span>
                      </button>
                      <span className="text-[10px] text-zinc-400">Janyu Tech Pipeline</span>
                    </div>
                  </div>
                )}

                {/* TAB 2: RAG Pipeline Trace */}
                {activeConsoleTab === 'rag' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800/60 pb-2">
                      <span>Pipeline: LangChain + Qdrant</span>
                      <span className="text-cyan-400 font-bold">Latency: 48ms</span>
                    </div>

                    <div className="space-y-1 text-[11px]">
                      <div className="text-zinc-500">
                        &gt; POST /api/v1/query HTTP/1.1
                      </div>
                      <div className="text-zinc-300">
                        &gt; Vector Embedding: Cosine metric (dim=1536)
                      </div>
                      <div className="text-emerald-400">
                        &gt; Qdrant Top-K: retrieved 2 chunks (score &gt; 0.91)
                      </div>
                      <div className="text-purple-400">
                        &gt; Agent router: VectorRetriever(k=2)
                      </div>
                      <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 text-[10px] text-zinc-300 mt-2">
                        &quot;Strict zero-hallucination evaluation passed with dual citation grounding.&quot;
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-zinc-400 flex items-center justify-between">
                      <span>Evaluation: Grounded</span>
                      <a href="#demo-lab" className="text-cyan-400 hover:underline">
                        Open Simulator &rarr;
                      </a>
                    </div>
                  </div>
                )}

                {/* TAB 3: Scholar Specs JSON */}
                {activeConsoleTab === 'specs' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800/60 pb-2">
                      <span>Credentials Spec</span>
                      <button
                        onClick={handleCopySpecs}
                        className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white"
                      >
                        {copiedSpecs ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedSpecs ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <pre className="text-[10px] leading-tight text-zinc-300 overflow-x-auto p-2 rounded bg-zinc-900/70 border border-zinc-800/80 scrollbar-none">
{`{
  "engineer": "Anurag Kumar Sahu",
  "affiliation": "IIIT Naya Raipur",
  "degree": "M.Tech CSE (CGPA: 7.8/10)",
  "gate_exam": "Qualified (Computer Science)",
  "roles": ["Robotic Programmer Intern @ Janyu Tech",
           "Placement Coordinator @ IIIT-NR"],
  "focus": ["YOLOv8 Edge Vision", "RAG Systems", "XAI"]
}`}
                    </pre>

                    <div className="text-[10px] text-zinc-400 pt-1">
                      Verified Academic & Industry Profile
                    </div>
                  </div>
                )}

                {/* Terminal status bar */}
                <div className="pt-2 mt-auto border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="text-zinc-600">&gt;</span> ready
                  </span>
                  <span>CUDA: 12.2 • PyTorch: 2.x</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

