import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Industry roles in robotic automation, computer vision pipelines, and production machine learning.
          </p>
        </div>

        {/* Roles Stack */}
        <div className="space-y-8">
          {experienceData.map((item) => (
            <div
              key={item.company + item.period}
              className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-7"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-zinc-800/60">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-sm font-medium text-zinc-300 mt-0.5">
                    {item.company} <span className="text-zinc-600">•</span> <span className="text-zinc-400 text-xs font-mono">{item.location}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400">
                  {item.period}
                </div>
              </div>

              {/* Projects / Highlights within this role */}
              <div className="space-y-5">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx}>
                    <h4 className="text-sm font-semibold text-zinc-200 mb-1.5">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3">
                      {highlight.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {highlight.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
