import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Phone, 
  FileText,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Meta Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-6">
          <span>IIIT Naya Raipur</span>
          <span className="text-zinc-600">•</span>
          <span>GATE CSE Qualified</span>
          <span className="text-zinc-600">•</span>
          <span>M.Tech Scholar</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          {personalData.name}
        </h1>

        {/* Professional Subhead */}
        <p className="text-lg sm:text-xl text-zinc-300 font-medium mb-6 max-w-3xl leading-relaxed">
          AI & Machine Learning Engineer specializing in RAG architectures, Computer Vision (YOLOv8), and Explainable AI Systems.
        </p>

        {/* Comprehensive Bio */}
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-8 max-w-3xl">
          {personalData.summary}
        </p>

        {/* Direct Coordinates & Links */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-zinc-400 mb-8 pb-8 border-b border-zinc-800/60">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{personalData.location}</span>
          </div>
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>{personalData.email}</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-zinc-400" />
            <span>{personalData.phone}</span>
          </div>
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>GitHub Profile</span>
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4 text-zinc-950" />
            <span>View & Download Resume</span>
          </button>

          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-colors"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          <a
            href="#research"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-colors"
          >
            <span>Research Papers</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
