import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending message
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you are looking to hire for AI Engineering, Machine Learning, Robotics Vision, or research collaborations.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/[0.08] backdrop-blur-xl relative group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400">Email Address</h4>
                    <a 
                      href={`mailto:${personalData.email}`} 
                      className="text-base font-bold text-white hover:text-cyan-400 transition-colors font-sans break-all"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
                  <Check className="w-3 h-3" /> Copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/[0.08] backdrop-blur-xl flex items-center gap-3">
              <div className="p-3 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400">Phone</h4>
                <a 
                  href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`} 
                  className="text-base font-bold text-white hover:text-indigo-400 transition-colors font-sans"
                >
                  {personalData.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/[0.08] backdrop-blur-xl flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-950 border border-purple-800 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400">Location</h4>
                <div className="text-base font-bold text-white font-sans">
                  {personalData.location}
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-5 h-5 text-[#0a66c2]" />
                  <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-5 h-5 text-white" />
                  <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    GitHub
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/70 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white font-display">
                  Send a Direct Message
                </h3>
              </div>

              {sentSuccess ? (
                <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Anurag will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Anurag, I would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] text-slate-400 font-mono">
                      Fast response guaranteed
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
