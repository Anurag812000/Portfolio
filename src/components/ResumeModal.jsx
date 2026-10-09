import React, { useState } from 'react';
import { X, Printer, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'web'

  if (!isOpen) return null;

  const handlePrint = () => {
    // Open the PDF directly in a new window/tab for the browser's native 1-page PDF print dialog
    const printWindow = window.open('/resume.pdf', '_blank');
    if (printWindow) {
      printWindow.focus();
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn no-print">
      <div className="relative w-full max-w-5xl rounded-2xl bg-slate-900 border border-white/[0.1] shadow-2xl flex flex-col h-[94vh] overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-sm sm:text-base">
                  Anurag Kumar Sahu — Resume
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  1-Page Verified
                </span>
              </div>
            </div>
          </div>

          {/* View Mode Toggle & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Official PDF View
              </button>
              <button
                onClick={() => setViewMode('web')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  viewMode === 'web'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1-Page Web View
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href="/resume.pdf"
              download="Anurag_Kumar_Sahu_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
              title="Download official single-page PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Open Tab</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              title="Print 1-page PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full bg-slate-950 overflow-hidden relative">
          
          {/* MODE 1: Embedded PDF View (Guaranteed 1-Page native PDF) */}
          {viewMode === 'pdf' ? (
            <div className="w-full h-full flex flex-col">
              <object
                data="/resume.pdf#view=FitH"
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src="/resume.pdf#view=FitH"
                  className="w-full h-full border-0"
                  title="Anurag Kumar Sahu Resume"
                >
                  <div className="p-8 text-center text-slate-300">
                    <p className="mb-4">PDF viewer preview is loading.</p>
                    <a
                      href="/resume.pdf"
                      download="Anurag_Kumar_Sahu_Resume.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                    >
                      <Download className="w-4 h-4" /> Download 1-Page Resume PDF
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          ) : (
            /* MODE 2: Web Clean View (Fitted strictly on a single 1-page A4 canvas) */
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 flex justify-center">
              <div
                id="resume-printable-doc"
                className="w-full max-w-[794px] bg-white text-gray-950 px-8 py-7 shadow-2xl rounded-sm font-sans text-[11px] leading-[1.32] select-text"
                style={{ minHeight: '1050px' }}
              >
                {/* Header */}
                <div className="text-center pb-2.5 border-b border-gray-300 mb-2.5">
                  <h1 className="text-xl font-bold tracking-tight text-gray-950 uppercase font-serif mb-0.5">
                    {personalData.name}
                  </h1>
                  <div className="text-[10px] text-gray-700 flex flex-wrap justify-center items-center gap-2 font-mono">
                    <span>{personalData.location}</span>
                    <span>|</span>
                    <span>{personalData.phone}</span>
                    <span>|</span>
                    <a href={`mailto:${personalData.email}`} className="text-blue-700 underline">
                      {personalData.email}
                    </a>
                  </div>
                  <div className="text-[10px] text-gray-700 flex flex-wrap justify-center items-center gap-2.5 mt-0.5 font-mono">
                    <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                      {personalData.linkedinDisplay}
                    </a>
                    <span>|</span>
                    <a href={personalData.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                      {personalData.githubDisplay}
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <section className="mb-2.5">
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Summary
                  </h2>
                  <p className="text-[10.5px] text-gray-900 leading-snug text-justify">
                    {personalData.summary}
                  </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-2.5">
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Technical Skills
                  </h2>
                  <div className="space-y-0.5 text-[10px] text-gray-900 leading-snug">
                    <div>
                      <strong className="font-semibold text-gray-950">Programming:</strong> Python, C, C++, SQL, Object-Oriented Programming, Data Structures, Algorithms, Problem Solving, Computational Complexity
                    </div>
                    <div>
                      <strong className="font-semibold text-gray-950">AI & Generative AI:</strong> Machine Learning, Deep Learning, Generative AI, LLMs, RAG, Prompt Engineering, AI Agents, LangChain, Embeddings, Qdrant, Scikit-Learn, PyTorch, TensorFlow
                    </div>
                    <div>
                      <strong className="font-semibold text-gray-950">Data & Python Libraries:</strong> Pandas, NumPy, Data Processing, Data Preprocessing, Feature Engineering, EDA, Statistical Analysis, Data Analytics, Data Visualization, Large-Scale Dataset Processing
                    </div>
                    <div>
                      <strong className="font-semibold text-gray-950">Backend & Software:</strong> FastAPI, REST APIs, API Integration, PostgreSQL, MQTT, Git, GitHub, GitHub Actions, Docker, CI/CD, Unit Testing, Debugging
                    </div>
                    <div>
                      <strong className="font-semibold text-gray-950">Computer Vision & Tools:</strong> OpenCV, Ultralytics, YOLOv8, Label Studio, Object Detection, Instance Segmentation, Jupyter Notebook, Google Colab, VS Code, AWS EC2/Lambda/CloudWatch
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section className="mb-2.5">
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Experience
                  </h2>
                  
                  {/* Janyu Tech */}
                  <div className="mb-1.5">
                    <div className="flex justify-between font-bold text-[10.5px] text-gray-950">
                      <span>Robotic Programmer Intern | Janyu Tech</span>
                      <span>Aug 2026 – Present</span>
                    </div>
                    <ul className="list-disc ml-4 space-y-0.5 text-[10px] text-gray-900 mt-0.5 leading-snug">
                      <li>
                        <strong className="font-semibold">YOLOv8 Computer Vision & Robotic Automation:</strong> Developed an instance segmentation pipeline using Python, PyTorch, Ultralytics, YOLOv8, and OpenCV for identifying and segmenting objects from images and live camera feeds. Created a custom dataset of 198 images and 1,368 polygon-annotated instances using Label Studio and trained a lightweight YOLOv8-nano model, achieving 0.84 mAP50 detection and 0.81 mAP50 segmentation.
                      </li>
                      <li>
                        <strong className="font-semibold">Varaha IoT – Real-Time Monitoring Dashboard:</strong> Developed an end-to-end telemetry monitoring solution using MQTT, Node.js, PostgreSQL, React, and TypeScript for real-time visualization of motor health, RPM, current, cleanliness level, remaining capacity, and tank/device status. Implemented MQTT-based telemetry simulation and verification workflows for real-time data ingestion and backend services.
                      </li>
                    </ul>
                  </div>

                  {/* DevTown */}
                  <div>
                    <div className="flex justify-between font-bold text-[10.5px] text-gray-950">
                      <span>Machine Learning Intern | DevTown (Remote)</span>
                      <span>Jan 2023 – Apr 2023</span>
                    </div>
                    <ul className="list-disc ml-4 space-y-0.5 text-[10px] text-gray-900 mt-0.5 leading-snug">
                      <li>
                        Developed and tested AI-based potato plant disease detection using Python, TensorFlow, and CNNs, covering data acquisition, image preprocessing, model training, validation, and deployment.
                      </li>
                      <li>
                        Developed FastAPI REST APIs for deployable ML applications and real-time inference; performed debugging, testing, validation, and performance optimization during development.
                      </li>
                      <li>
                        Worked across end-to-end ML workflows and collaborated on development, testing, documentation, and project execution.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Projects */}
                <section className="mb-2.5">
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Projects
                  </h2>
                  <div>
                    <div className="flex justify-between font-bold text-[10.5px] text-gray-950">
                      <span>Intelligent Document Q&A and AI Agent | Python, FastAPI, LangChain, RAG, Qdrant, LLM</span>
                      <span>2026</span>
                    </div>
                    <ul className="list-disc ml-4 space-y-0.5 text-[10px] text-gray-900 mt-0.5 leading-snug">
                      <li>
                        Built a Python-based Retrieval-Augmented Generation (RAG) application using FastAPI, LangChain, embeddings, and Qdrant to ingest documents and generate citation-grounded responses.
                      </li>
                      <li>
                        Implemented document chunking, vector retrieval, prompt construction, and LLM-based answer generation with source attribution; exposed the pipeline through REST APIs.
                      </li>
                      <li>
                        Developed an AI agent capable of selecting between document retrieval and utility tools based on the user query.
                      </li>
                      <li>
                        Implemented evaluation for retrieval quality, response correctness, citation correctness, and latency, with modular components designed for testing and extension.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Research */}
                <section className="mb-2.5">
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Research
                  </h2>
                  
                  <div className="mb-1">
                    <div className="font-bold text-[10.5px] text-gray-950">
                      Explainable XGBoost-Based Smart Grid Load Forecasting for 6G-Enabled Cyber-Physical Systems
                    </div>
                    <ul className="list-disc ml-4 space-y-0.5 text-[10px] text-gray-900 mt-0.5 leading-snug">
                      <li>
                        Developed an explainable XGBoost forecasting framework using derivative-based feature engineering, lag variables, rolling statistics, cyclical time encoding, and surge ratio; used a strict chronological train-test split with training-only preprocessing to prevent temporal data leakage.
                      </li>
                      <li>
                        Achieved MAE = 1.04, RMSE = 1.39, R² = 0.836 and applied Temporal TreeSHAP over a 168-hour high-stress period to interpret feature contributions during load peaks and abnormal grid conditions.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[10.5px] text-gray-950">
                      Lightweight Multivariate Predictive Auto-Scaling for Energy-Efficient Cloud Data Centers
                    </div>
                    <ul className="list-disc ml-4 space-y-0.5 text-[10px] text-gray-900 mt-0.5 leading-snug">
                      <li>
                        Designed a lightweight MAPE-K-based Predictor–Guardian framework integrating workload prediction and anomalous traffic detection using large-scale NASA HTTP request data.
                      </li>
                      <li>
                        Evaluated machine-learning models including Random Forest and Decision Tree, achieving R² = 0.8400 and F1 = 0.9955, respectively, for the evaluated tasks.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Education */}
                <section className="mb-2">
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Education
                  </h2>
                  <div className="flex justify-between font-bold text-[10px] text-gray-950">
                    <span>International Institute of Information Technology, Naya Raipur</span>
                    <span>2025 – Present</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-900">
                    <span>M.Tech in Computer Science and Engineering</span>
                    <span>CGPA: 7.8/10</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-900 mt-0.5">
                    <span>Bachelor of Technology – Data Science</span>
                    <span>CGPA: 8.0/10</span>
                  </div>
                </section>

                {/* Achievements & Leadership */}
                <section className="mb-2">
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Achievements & Leadership
                  </h2>
                  <div className="text-[10px] text-gray-900 leading-snug">
                    <strong className="font-semibold text-gray-950">GATE CSE Qualified | Placement Coordinator | IIIT Naya Raipur:</strong> Coordinated industry interactions, recruitment drives, student engagement, and communication with company representatives and placement teams.
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h2 className="text-[11px] font-bold text-gray-950 uppercase tracking-wider border-b border-gray-800 pb-0.5 mb-1 font-serif">
                    Certifications
                  </h2>
                  <div className="text-[10px] text-gray-900 leading-snug">
                    AWS Cloud Fundamentals | Python for Data Science | Machine Learning and Deep Learning Certifications
                  </div>
                </section>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
