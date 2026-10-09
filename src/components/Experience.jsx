import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu, Activity, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const getCompanyBadge = (company) => {
    if (company.includes('Janyu')) {
      return {
        initials: 'JT',
        border: 'border-purple-500/40',
        bg: 'bg-purple-950/60 text-purple-300',
        icon: Cpu
      };
    }
    if (company.includes('DevTown')) {
      return {
        initials: 'DT',
        border: 'border-emerald-500/40',
        bg: 'bg-emerald-950/60 text-emerald-300',
        icon: Activity
      };
    }
    return {
      initials: 'IIIT',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-950/60 text-cyan-300',
      icon: Award
    };
  };

  return (
    <section id="experience" className="py-20 md:py-24 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 mb-2.5">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Professional Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience & Roles
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Hands-on industry engineering in robotic automation, computer vision pipelines, and production machine learning.
          </p>
        </div>

        {/* Roles Stack */}
        <div className="space-y-8">
          {experienceData.map((item) => {
            const badge = getCompanyBadge(item.company);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={item.company + item.period}
                className="group rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 p-6 sm:p-8 transition-all duration-200 relative"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/70">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm border ${badge.border} ${badge.bg}`}>
                      {badge.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-zinc-300 mt-0.5 flex items-center gap-2 font-sans">
                        <span>{item.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400 text-xs font-mono">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Projects / Highlights within this role */}
                <div className="space-y-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-800/70">
                      <div className="flex items-center gap-2 mb-2">
                        <BadgeIcon className="w-4 h-4 text-cyan-400" />
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {highlight.title}
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}

