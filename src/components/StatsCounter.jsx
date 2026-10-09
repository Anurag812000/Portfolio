import React from 'react';
import { Award, GraduationCap, Cpu, Activity } from 'lucide-react';

export default function StatsCounter() {
  const highlights = [
    {
      icon: Award,
      value: "GATE CSE",
      label: "Qualified",
      subtitle: "National Level CS Exam",
      gradient: "from-amber-400 to-orange-500",
      border: "border-amber-500/20"
    },
    {
      icon: GraduationCap,
      value: "7.8 / 10",
      label: "M.Tech CGPA",
      subtitle: "IIIT Naya Raipur",
      gradient: "from-cyan-400 to-blue-500",
      border: "border-cyan-500/20"
    },
    {
      icon: GraduationCap,
      value: "8.0 / 10",
      label: "B.Tech CGPA",
      subtitle: "Data Science Specialization",
      gradient: "from-indigo-400 to-purple-500",
      border: "border-indigo-500/20"
    },
    {
      icon: Cpu,
      value: "0.84 mAP50",
      label: "YOLOv8 Detection",
      subtitle: "1,368 Polygon Annotations",
      gradient: "from-emerald-400 to-teal-500",
      border: "border-emerald-500/20"
    },
    {
      icon: Activity,
      value: "0.9955 F1",
      label: "Traffic Isolation",
      subtitle: "NASA HTTP Cloud Auto-Scale",
      gradient: "from-purple-400 to-pink-500",
      border: "border-purple-500/20"
    }
  ];

  return (
    <section className="py-8 border-y border-white/[0.06] bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-slate-900/60 border ${item.border} backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-slate-900/90 shadow-md group`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-20 text-white`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.value}
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
