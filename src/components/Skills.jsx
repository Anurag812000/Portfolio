import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = skillsData.filter((cat) => {
    if (activeTab !== 'All' && cat.category !== activeTab) {
      return false;
    }
    return true;
  });

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Competencies
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Languages, machine learning frameworks, computer vision libraries, and system tooling.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-60">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === cat
                  ? 'bg-zinc-800 text-white border border-zinc-700'
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
            const matchingSkills = catGroup.skills.filter((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && matchingSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={catGroup.category}
                className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {catGroup.category}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {matchingSkills.length}
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-1.5">
                    {matchingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors font-mono"
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
