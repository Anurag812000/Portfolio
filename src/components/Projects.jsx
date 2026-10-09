import React, { useState } from 'react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = ['All', 'AI & Generative AI', 'Computer Vision', 'IoT & Full Stack'];

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Production AI pipelines, industrial telemetry engines, and computer vision models.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedFilter === tab
                    ? 'bg-zinc-800 text-white border border-zinc-700'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800/80 hover:bg-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2.5">
                  <span>{project.category}</span>
                  <span>{project.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-1.5">
                  {project.title}
                </h3>

                {/* Subtitle / Role */}
                <p className="text-xs text-zinc-400 font-mono mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-5 text-xs text-zinc-300 list-disc list-inside">
                  {project.points.map((pt, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row */}
              <div className="pt-4 border-t border-zinc-800/70">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
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
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
