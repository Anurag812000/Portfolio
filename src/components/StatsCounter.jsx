import React from 'react';
import { Award, GraduationCap, Cpu, Activity, ShieldCheck } from 'lucide-react';

export default function StatsCounter() {
  const highlights = [
    {
      value: "GATE CSE",
      label: "Qualified",
      detail: "National CS Exam",
      icon: ShieldCheck,
      color: "text-purple-400"
    },
    {
      value: "7.8 / 10",
      label: "M.Tech CSE",
      detail: "IIIT Naya Raipur",
      icon: GraduationCap,
      color: "text-cyan-400"
    },
    {
      value: "0.84 mAP50",
      label: "YOLOv8 Detection",
      detail: "1,368 Polygon Masks",
      icon: Cpu,
      color: "text-emerald-400"
    },
    {
      value: "0.836 R²",
      label: "Explainable XGBoost",
      detail: "Temporal TreeSHAP",
      icon: Activity,
      color: "text-indigo-400"
    },
    {
      value: "0.9955 F1",
      label: "Cloud Auto-Scaling",
      detail: "MAPE-K Architecture",
      icon: Award,
      color: "text-amber-400"
    }
  ];

  return (
    <section className="py-8 border-b border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-zinc-700/80 transition-all duration-150 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                    {item.label}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    {item.detail}
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

