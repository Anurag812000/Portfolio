import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Cpu, 
  Database, 
  Activity, 
  Sparkles,
  Layers,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = ['All', 'AI & Generative AI', 'Computer Vision', 'IoT & Full Stack'];

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  // Project icon mapping
  const getProjectIcon = (category) => {
    if (category.includes('Generative')) return Database;
    if (category.includes('Vision')) return Cpu;
    return Activity;
  };

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-zinc-800/80 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 mb-2.5">
              <span>Production Systems & Models</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects & Pipelines
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Production-grade GenAI retrieval architectures, custom-annotated robotic vision models, and industrial real-time telemetry platforms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-zinc-900/80 p-1.5 rounded-lg border border-zinc-800 overflow-x-auto scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  selectedFilter === tab
                    ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/80'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-850'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.category);
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 p-0 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden project-card-glow"
              >
                {/* Visual Image Banner with Subtle Gradient Mask */}
                {project.image && (
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                    
                    {/* Floating Top Category & Year Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-zinc-200">
                        <Icon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{project.category}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-zinc-300">
                        {project.period}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Quantitative KPI Strip */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/70 font-mono mb-5">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx}>
                            <span className="text-[10px] text-zinc-500 block truncate">{m.label}</span>
                            <span className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5 block truncate">
                              {m.val}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Engineering Accomplishments */}
                    <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                      {project.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-cyan-400 font-mono mt-0.5 text-xs">▹</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: Tech Tags & Links */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-950/90 border border-zinc-800/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white font-mono transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </a>

                      <a
                        href="#demo-lab"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Inspect in Lab &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

