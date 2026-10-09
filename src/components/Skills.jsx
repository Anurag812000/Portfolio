import React, { useState } from 'react';
import { 
  Brain, 
  Eye, 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Search, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Eye: Eye,
  Code2: Code2,
  Server: Server,
  Database: Database,
  Cpu: Cpu
};

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
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Expertise</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive spectrum of AI engineering, computer vision, backend systems, and data science capabilities.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/[0.05] hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. YOLO, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => {
            const Icon = iconMap[catGroup.icon] || Brain;
            const matchingSkills = catGroup.skills.filter((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && matchingSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={catGroup.category}
                className="rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-cyan-500/30 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${catGroup.accent} bg-opacity-20 text-white shadow-md`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                        {catGroup.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {matchingSkills.length} skills
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {matchingSkills.map((skill) => {
                      const isHighlighted =
                        skill.includes('YOLO') ||
                        skill.includes('RAG') ||
                        skill.includes('FastAPI') ||
                        skill.includes('Qdrant') ||
                        skill.includes('Python') ||
                        skill.includes('LangChain') ||
                        skill.includes('AI Agents');

                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-default ${
                            isHighlighted
                              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-400'
                              : 'bg-slate-800/60 text-slate-300 border border-white/[0.04] hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Production Ready</span>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
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
