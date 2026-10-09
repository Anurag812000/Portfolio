import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Users, 
  CheckCircle, 
  Cloud, 
  FileCode, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { educationData, achievementsData, certificationsData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Leadership</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Scholastic accomplishments at IIIT Naya Raipur and professional recognition.
          </p>
        </div>

        {/* Education & Achievements Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Degrees at IIIT Naya Raipur (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Degrees & University</span>
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 shadow-xl group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-cyan-400">
                      {edu.field}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-start sm:items-end gap-1">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {edu.score}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-slate-300 font-medium mb-3">
                  {edu.institution}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Leadership & National Honors (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Achievements & Leadership</span>
            </h3>

            {achievementsData.map((item) => {
              const isGate = item.title.includes('GATE');
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-indigo-500/30 p-6 backdrop-blur-xl transition-all duration-300 shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${
                      isGate ? 'bg-amber-950/80 text-amber-400 border border-amber-800/60' : 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/60'
                    }`}>
                      {isGate ? <Award className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <div className="text-xs font-mono text-slate-400">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Certifications Section */}
        <div className="rounded-2xl bg-slate-900/40 border border-white/[0.06] p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Industry Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certificationsData.map((cert, idx) => (
              <div
                key={cert.title}
                className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.04] hover:border-cyan-500/30 transition-all flex items-center gap-3.5 group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                  {idx === 0 ? (
                    <Cloud className="w-4 h-4 text-cyan-400" />
                  ) : idx === 1 ? (
                    <FileCode className="w-4 h-4 text-indigo-400" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
