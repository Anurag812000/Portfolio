import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#090a0f] text-zinc-500 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <span className="text-zinc-300 font-medium">{personalData.name}</span>
            <span className="mx-2 text-zinc-700">|</span>
            <span>IIIT Naya Raipur</span>
            <span className="mx-2 text-zinc-700">|</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
