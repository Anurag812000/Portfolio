import React from 'react';

export default function StatsCounter() {
  const highlights = [
    {
      value: "GATE CSE",
      label: "Qualified",
      detail: "National CS Exam"
    },
    {
      value: "7.8 / 10",
      label: "M.Tech CSE",
      detail: "IIIT Naya Raipur"
    },
    {
      value: "8.0 / 10",
      label: "B.Tech Data Science",
      detail: "Undergraduate CGPA"
    },
    {
      value: "0.84 mAP50",
      label: "YOLOv8 Detection",
      detail: "Instance Segmentation"
    },
    {
      value: "0.9955 F1",
      label: "Traffic Isolation",
      detail: "Cloud Auto-Scaling Work"
    }
  ];

  return (
    <section className="py-6 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg border border-zinc-800/70 bg-zinc-900/40"
            >
              <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-medium text-zinc-300 mt-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
