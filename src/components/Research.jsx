import React from 'react';
import { 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { researchData } from '../data/portfolioData';

export default function Research() {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-indigo-950/20 via-cyan-950/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Rigor & Scientific Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Publications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Investigating explainable AI frameworks for next-generation 6G cyber-physical grids and energy-efficient autonomous cloud infrastructure.
          </p>
        </div>

        {/* Research Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchData.map((item) => {

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/70 border border-white/[0.08] hover:border-cyan-500/40 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Badge & Domain */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Peer-Level Research
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Domain Tag */}
                  <p className="text-xs font-mono text-indigo-400 mb-5 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{item.domain}</span>
                  </p>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {item.summary}
                  </p>

                  {/* Quantitative Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-slate-950/70 border border-white/[0.05]">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-[11px] font-mono text-slate-400 mb-1">
                          {m.label}
                        </div>
                        <div className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300 font-display">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Key Methodological Innovations:
                    </div>
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Tags */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
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
