import React from 'react';
import { educationData, achievementsData, certificationsData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education & Honors
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Academic degrees at IIIT Naya Raipur, national GATE qualification, and leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              University Degrees
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {edu.degree} — {edu.field}
                  </h4>
                  <span className="text-xs font-mono font-semibold text-zinc-300">
                    {edu.score}
                  </span>
                </div>

                <div className="text-xs text-zinc-400 font-mono mb-2">
                  {edu.institution} <span className="text-zinc-600">•</span> {edu.period}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Honors & Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              Achievements & Responsibilities
            </h3>

            {achievementsData.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-5"
              >
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {item.title}
                </h4>
                <div className="text-xs font-mono text-zinc-500 mb-2">
                  {item.subtitle}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Certifications strip */}
        <div className="rounded-lg bg-zinc-900/30 border border-zinc-800/60 p-5">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
            Certifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {certificationsData.map((cert) => (
              <div
                key={cert.title}
                className="p-3 rounded-md bg-zinc-900/70 border border-zinc-800/80"
              >
                <div className="text-xs font-semibold text-zinc-200">
                  {cert.title}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
