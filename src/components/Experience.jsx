import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu, Activity, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering hands-on computer vision models, real-time IoT architectures, and production ML pipelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent before:opacity-30">
          
          {experienceData.map((item) => {
            const isCurrent = item.badge === 'Current Role';

            return (
              <div
                key={item.company + item.period}
                className="relative flex flex-col md:flex-row items-start gap-8"
              >
                {/* Center Node on desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-[#07090e] shadow-lg ${
                    isCurrent 
                      ? 'border-cyan-400 shadow-cyan-500/30' 
                      : 'border-indigo-400/60 shadow-indigo-500/20'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${isCurrent ? 'bg-cyan-400 animate-ping' : 'bg-indigo-400'}`} />
                  </div>
                </div>

                {/* Left/Right Container */}
                <div className="w-full">
                  <div className="rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-cyan-500/5 group">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display group-hover:text-cyan-300 transition-colors">
                            {item.role}
                          </h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            isCurrent
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}>
                            {item.badge}
                          </span>
                        </div>
                        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                          {item.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Highlights */}
                    <div className="space-y-6">
                      {item.highlights.map((highlight, hIdx) => (
                        <div 
                          key={hIdx} 
                          className="p-5 rounded-xl bg-slate-950/50 border border-white/[0.04] hover:border-cyan-500/20 transition-all"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-800/50 text-cyan-400">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <h4 className="text-base font-bold text-white font-display">
                              {highlight.title}
                            </h4>
                          </div>

                          <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                            {highlight.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {highlight.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/[0.05]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
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
