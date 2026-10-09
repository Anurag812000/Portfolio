import React, { useState } from 'react';
import { BookOpen, Copy, Check, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import { researchData } from '../data/portfolioData';

export default function Research() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyBibtex = (item) => {
    const bibtex = `@article{sahu2026${item.id},
  title={${item.title}},
  author={Sahu, Anurag Kumar and Collaborators},
  institution={International Institute of Information Technology (IIIT) Naya Raipur},
  year={2026},
  note={Under Peer Review}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="research" className="py-20 md:py-24 border-b border-zinc-800/80 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 mb-2.5">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Contributions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Research & Publications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Mathematical modeling, explainable AI architectures, and autonomous cloud optimization conducted at IIIT Naya Raipur.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-lg relative overflow-hidden"
            >
              <div>
                {/* Domain & Topic */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                  <span className="text-cyan-400">{item.domain}</span>
                  <span className="bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-[10px]">
                    Preprint
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3 leading-snug group-hover:text-zinc-100 transition-colors">
                  {item.title}
                </h3>

                {/* Abstract / Summary */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5 font-normal">
                  {item.summary}
                </p>

                {/* Quantitative Results Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/70 font-mono">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-[10px] text-zinc-400 truncate">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Contributions */}
                <div className="space-y-1.5 mb-5 text-xs text-zinc-300">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Methodological Contributions:
                  </div>
                  <ul className="space-y-1.5 text-zinc-300">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-indigo-400 font-mono text-xs mt-0.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags & Action Row */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => handleCopyBibtex(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">BibTeX Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>

                  <a
                    href="#demo-lab"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>View XAI in Lab &rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

