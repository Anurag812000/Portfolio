import React from 'react';
import { researchData } from '../data/portfolioData';

export default function Research() {
  return (
    <section id="research" className="py-16 md:py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Research & Publications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Explainable AI frameworks and autonomous cloud optimization conducted at IIIT Naya Raipur.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Domain & Topic */}
                <div className="text-xs font-mono text-zinc-500 mb-2">
                  {item.domain}
                </div>

                {/* Paper Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Abstract / Summary */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Quantitative Results Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-3 rounded-md bg-zinc-900/80 border border-zinc-800/60 font-mono">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-[10px] text-zinc-500">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Contributions */}
                <div className="space-y-1.5 mb-5 text-xs text-zinc-300">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    Methodological Contributions:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-400">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-zinc-800/70">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
