import React, { useState } from 'react';
import { Search, Code2, Cpu, Database, Server, Layers, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const getCategoryIcon = (category) => {
    if (category.includes('Languages')) return Code2;
    if (category.includes('Machine Learning') || category.includes('Vision')) return Cpu;
    if (category.includes('Backend') || category.includes('Cloud')) return Server;
    if (category.includes('Data Science')) return Database;
    return Wrench;
  };

  const filteredCategories = skillsData.filter((cat) => {
    if (activeTab !== 'All' && cat.category !== activeTab) {
      return false;
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-zinc-800/80 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 mb-2.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack ML & Systems Tooling</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Competencies
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Languages, machine learning frameworks, computer vision libraries, and high-reliability systems tooling.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frameworks, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === cat
                  ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800/80 hover:bg-zinc-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((catGroup) => {
            const Icon = getCategoryIcon(catGroup.category);
            const matchingSkills = catGroup.skills.filter((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && matchingSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={catGroup.category}
                className="rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 p-5 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/70">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        {catGroup.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      {matchingSkills.length}
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-1.5">
                    {matchingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs text-zinc-300 bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-700 hover:text-white transition-colors font-mono"
                      >
                        {skill}
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
