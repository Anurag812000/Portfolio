import React from 'react';
import { X, Printer } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-white/[0.1] shadow-2xl flex flex-col h-[90vh] overflow-hidden">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base">
              Resume Preview
            </span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              Verified PDF View
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Container (White paper document matching PDF) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950 flex justify-center">
          <div className="w-full max-w-[850px] bg-white text-gray-900 p-8 sm:p-12 shadow-2xl rounded-sm font-sans text-[13px] leading-relaxed select-text print:p-0 print:shadow-none">
            
            {/* Header */}
            <div className="text-center pb-4 border-b border-gray-300 mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-950 mb-1 uppercase font-serif">
                {personalData.name}
              </h1>
              <div className="text-xs text-gray-700 flex flex-wrap justify-center items-center gap-2 font-mono">
                <span>{personalData.location}</span>
                <span>|</span>
                <span>{personalData.phone}</span>
                <span>|</span>
                <a href={`mailto:${personalData.email}`} className="text-blue-700 underline">
                  {personalData.email}
                </a>
              </div>
              <div className="text-xs text-gray-700 flex flex-wrap justify-center items-center gap-3 mt-1 font-mono">
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
            <section className="mb-4">
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Summary
              </h2>
              <p className="text-xs text-gray-800 leading-normal text-justify">
                {personalData.summary}
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-4">
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-gray-800">
                <div>
                  <strong className="text-gray-950 font-semibold">Programming:</strong> Python, C, C++, SQL, Object-Oriented Programming, Data Structures, Algorithms, Problem Solving, Computational Complexity
                </div>
                <div>
                  <strong className="text-gray-950 font-semibold">AI & Generative AI:</strong> Machine Learning, Deep Learning, Generative AI, LLMs, RAG, Prompt Engineering, AI Agents, LangChain, Embeddings, Qdrant, Scikit-Learn, PyTorch, TensorFlow
                </div>
                <div>
                  <strong className="text-gray-950 font-semibold">Data & Python Libraries:</strong> Pandas, NumPy, Data Processing, Data Preprocessing, Feature Engineering, EDA, Statistical Analysis, Data Analytics, Data Visualization, Large-Scale Dataset Processing
                </div>
                <div>
                  <strong className="text-gray-950 font-semibold">Backend & Software:</strong> FastAPI, REST APIs, API Integration, PostgreSQL, MQTT, Git, GitHub, GitHub Actions, Docker, CI/CD, Unit Testing, Debugging
                </div>
                <div>
                  <strong className="text-gray-950 font-semibold">Computer Vision & Tools:</strong> OpenCV, Ultralytics, YOLOv8, Label Studio, Object Detection, Instance Segmentation, Jupyter Notebook, Google Colab, VS Code, AWS EC2/Lambda/CloudWatch
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-4">
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Experience
              </h2>
              
              {/* Janyu Tech */}
              <div className="mb-3">
                <div className="flex justify-between font-bold text-xs text-gray-950">
                  <span>Robotic Programmer Intern | Janyu Tech</span>
                  <span>Aug 2026 – Present</span>
                </div>
                <ul className="list-disc ml-4 space-y-1 text-xs text-gray-800 mt-1">
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
                <div className="flex justify-between font-bold text-xs text-gray-950">
                  <span>Machine Learning Intern | DevTown (Remote)</span>
                  <span>Jan 2023 – Apr 2023</span>
                </div>
                <ul className="list-disc ml-4 space-y-1 text-xs text-gray-800 mt-1">
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
            <section className="mb-4">
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Projects
              </h2>
              <div>
                <div className="flex justify-between font-bold text-xs text-gray-950">
                  <span>Intelligent Document Q&A and AI Agent | Python, FastAPI, LangChain, RAG, Qdrant, LLM</span>
                  <span>2026</span>
                </div>
                <ul className="list-disc ml-4 space-y-1 text-xs text-gray-800 mt-1">
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
            <section className="mb-4">
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Research
              </h2>
              
              <div className="mb-2">
                <div className="font-bold text-xs text-gray-950">
                  Explainable XGBoost-Based Smart Grid Load Forecasting for 6G-Enabled Cyber-Physical Systems
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-800 mt-0.5">
                  <li>
                    Developed an explainable XGBoost forecasting framework using derivative-based feature engineering, lag variables, rolling statistics, cyclical time encoding, and surge ratio; used a strict chronological train-test split with training-only preprocessing to prevent temporal data leakage.
                  </li>
                  <li>
                    Achieved MAE = 1.04, RMSE = 1.39, R² = 0.836 and applied Temporal TreeSHAP over a 168-hour high-stress period to interpret feature contributions during load peaks and abnormal grid conditions.
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-xs text-gray-950">
                  Lightweight Multivariate Predictive Auto-Scaling for Energy-Efficient Cloud Data Centers
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-800 mt-0.5">
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
            <section className="mb-4">
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Education
              </h2>
              <div className="flex justify-between font-bold text-xs text-gray-950">
                <span>International Institute of Information Technology, Naya Raipur</span>
                <span>2025 – Present</span>
              </div>
              <div className="flex justify-between text-xs text-gray-800">
                <span>M.Tech in Computer Science and Engineering</span>
                <span>CGPA: 7.8/10</span>
              </div>
              <div className="flex justify-between text-xs text-gray-800 mt-0.5">
                <span>Bachelor of Technology – Data Science</span>
                <span>CGPA: 8.0/10</span>
              </div>
            </section>

            {/* Achievements & Leadership */}
            <section className="mb-4">
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Achievements & Leadership
              </h2>
              <div className="text-xs text-gray-800">
                <strong className="text-gray-950 font-semibold">GATE CSE Qualified | Placement Coordinator | IIIT Naya Raipur:</strong> Coordinated industry interactions, recruitment drives, student engagement, and communication with company representatives and placement teams.
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-2 font-serif">
                Certifications
              </h2>
              <div className="text-xs text-gray-800">
                AWS Cloud Fundamentals | Python for Data Science | Machine Learning and Deep Learning Certifications
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
