import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Contact & Profiles
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Available for research collaboration, AI engineering roles, and technical discussions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Email */}
          <div className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-500">Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="text-xs sm:text-sm font-mono text-white hover:underline break-all block"
              >
                {personalData.email}
              </a>
            </div>
            {copied && (
              <span className="text-[11px] text-emerald-400 font-mono mt-2">
                Copied to clipboard
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-5">
            <span className="text-xs font-mono text-zinc-500 block mb-2">Phone</span>
            <a
              href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs sm:text-sm font-mono text-white hover:underline block"
            >
              {personalData.phone}
            </a>
            <span className="text-[11px] text-zinc-500 font-mono mt-1 block">
              {personalData.location}
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-5 hover:border-zinc-700 transition-colors block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500">LinkedIn</span>
              <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-xs sm:text-sm font-mono text-white group-hover:underline">
              {personalData.linkedinDisplay}
            </div>
          </a>

          {/* GitHub */}
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-zinc-900/40 border border-zinc-800/80 p-5 hover:border-zinc-700 transition-colors block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500">GitHub</span>
              <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-xs sm:text-sm font-mono text-white group-hover:underline">
              {personalData.githubDisplay}
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
