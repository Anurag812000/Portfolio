import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Cpu, 
  Radio, 
  X,
  Database,
  Search,
  FileCheck
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [architectureModalOpen, setArchitectureModalOpen] = useState(false);

  const filterTabs = ['All', 'AI & Generative AI', 'Computer Vision', 'IoT & Full Stack'];

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Highlighted <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-grade Generative AI pipelines, real-time industrial telemetry, and high-accuracy computer vision models.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === tab
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/[0.05] hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isRAG = project.id === 'rag-ai-agent';

            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-slate-900/70 border ${
                  project.featured 
                    ? 'border-cyan-500/30 shadow-cyan-500/5' 
                    : 'border-white/[0.08]'
                } p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between group`}
              >
                <div>
                  
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-cyan-300 border border-cyan-500/20">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Flagship
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-slate-950/60 border border-white/[0.04]">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-[10px] font-mono text-slate-400">
                            {m.label}
                          </div>
                          <div className="text-sm sm:text-base font-bold text-cyan-300 font-display">
                            {m.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {project.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Row: Tech Stack & Actions */}
                <div className="pt-6 border-t border-white/[0.06]">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950 text-slate-300 border border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    {isRAG ? (
                      <button
                        onClick={() => setArchitectureModalOpen(true)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Layers className="w-4 h-4" />
                        <span>View RAG Pipeline Flow</span>
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400 font-mono">
                        Production Verified
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 hover:border-slate-600 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* RAG Pipeline Architecture Flow Modal */}
      {architectureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setArchitectureModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-mono mb-2 border border-cyan-800">
                <Bot className="w-3.5 h-3.5" />
                <span>RAG Pipeline Architecture</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Intelligent Document Q&A & Autonomous Agent
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Engineered with FastAPI, LangChain, Qdrant Vector DB, Embeddings, and Source Attribution.
              </p>
            </div>

            {/* Architecture Steps Flow */}
            <div className="space-y-4 font-mono text-xs mb-6">
              {[
                {
                  step: "01",
                  title: "Document Ingestion & Semantic Chunking",
                  desc: "Raw documents (PDFs, text, markdown) are parsed and split into token-aware overlapping semantic chunks.",
                  icon: Database,
                  badge: "Pre-processing"
                },
                {
                  step: "02",
                  title: "Vector Embeddings & Qdrant DB Indexing",
                  desc: "Chunks converted into dense vector embeddings and indexed in Qdrant Vector DB for sub-millisecond similarity search.",
                  icon: Layers,
                  badge: "Indexing"
                },
                {
                  step: "03",
                  title: "Autonomous Agent Tool/Retrieval Router",
                  desc: "Agent evaluates query intent: dispatches semantic vector retrieval or specialized computational tools.",
                  icon: Bot,
                  badge: "Routing"
                },
                {
                  step: "04",
                  title: "Prompt Synthesis & Citation Grounding",
                  desc: "Grounds LLM synthesis with top-k retrieved chunks, enforcing direct citation references and mitigating hallucinations.",
                  icon: Search,
                  badge: "Synthesis"
                },
                {
                  step: "05",
                  title: "Evaluation & FastAPI REST Serving",
                  desc: "Continuous latency, retrieval recall, and citation correctness evaluation, exposed over high-throughput REST APIs.",
                  icon: FileCheck,
                  badge: "Evaluation"
                }
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.step}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-700/60 flex items-center justify-center font-bold text-cyan-400 shrink-0">
                      {s.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-white font-display">
                          {s.title}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {s.badge}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs font-sans leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setArchitectureModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
