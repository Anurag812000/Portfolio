import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Layers, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Database, 
  Search, 
  BarChart2, 
  Sparkles,
  Radio,
  FileCheck
} from 'lucide-react';

export default function InteractiveLab() {
  const [activeTab, setActiveTab] = useState('rag'); // 'rag' | 'vision' | 'xai' | 'iot'

  // Tab 1: RAG Simulator state
  const ragQueries = [
    {
      q: "What is Anurag's experience with YOLOv8 & Robotics at Janyu Tech?",
      chunks: [
        { id: "chunk_01", text: "Janyu Tech: Built instance segmentation pipeline with Ultralytics YOLOv8-nano, PyTorch, and OpenCV. Curated 198 images with 1,368 polygon annotations via Label Studio.", score: 0.948 },
        { id: "chunk_02", text: "Achieved 0.84 mAP50 detection and 0.81 mAP50 segmentation on edge cameras.", score: 0.912 }
      ],
      answer: "At Janyu Tech (Aug 2026 – Present), Anurag developed an end-to-end instance segmentation pipeline using YOLOv8-nano and OpenCV. He annotated 1,368 polygon instances across 198 images in Label Studio, achieving 0.84 mAP50 detection and 0.81 mAP50 segmentation.",
      tool: "VectorRetriever(collection='janyu_experience', k=2)"
    },
    {
      q: "Explain his 6G Smart Grid Explainable AI research paper",
      chunks: [
        { id: "chunk_03", text: "Smart Grid 6G CPS: Explainable XGBoost forecasting with lag variables, cyclical encoding, surge ratio, and strict chronological splits (no data leakage).", score: 0.962 },
        { id: "chunk_04", text: "Results: MAE = 1.04, RMSE = 1.39, R² = 0.836. Applied Temporal TreeSHAP over a 168-hour high-stress load period.", score: 0.935 }
      ],
      answer: "Anurag designed an explainable XGBoost load forecasting model for 6G smart cyber-physical systems. By enforcing chronological train-test splits and applying Temporal TreeSHAP across a 168-hour stress window, the model attained an R² of 0.836, MAE of 1.04, and RMSE of 1.39 without data leakage.",
      tool: "VectorRetriever(collection='research_publications', k=2)"
    },
    {
      q: "What are his GATE CSE score and academic qualifications?",
      chunks: [
        { id: "chunk_05", text: "IIIT Naya Raipur: M.Tech in Computer Science and Engineering (2025–Present) CGPA: 7.8/10. B.Tech in Data Science CGPA: 8.0/10.", score: 0.954 },
        { id: "chunk_06", text: "Achievements: Qualified GATE CSE. Served as Placement Coordinator at IIIT Naya Raipur.", score: 0.928 }
      ],
      answer: "Anurag is GATE CSE Qualified and currently pursuing his M.Tech in Computer Science at IIIT Naya Raipur (CGPA 7.8/10). He previously completed his B.Tech in Data Science from IIIT Naya Raipur (CGPA 8.0/10) and is also a university Placement Coordinator.",
      tool: "VectorRetriever(collection='education_academics', k=2)"
    }
  ];

  const [selectedRagIdx, setSelectedRagIdx] = useState(0);

  // Tab 2: Vision confidence threshold slider
  const [confidenceThreshold, setConfidenceThreshold] = useState(0.65);

  // Tab 3: SHAP Explainability regime state
  const [shapRegime, setShapRegime] = useState('peak');

  // Tab 4: IoT telemetry simulation
  const [motorRpm, setMotorRpm] = useState(1740);
  const [motorCurrent, setMotorCurrent] = useState(12.4);
  const [tankLevel, setTankLevel] = useState(86);

  return (
    <section id="demo-lab" className="py-20 border-b border-zinc-800/80 bg-[#0c0d14]/60 relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Architecture Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineering Lab & Live Visualizers
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Interact directly with the architectural workflows behind Anurag's RAG agent, YOLOv8 vision pipeline, Temporal TreeSHAP explainability, and IoT telemetry.
            </p>
          </div>

          {/* Interactive Lab Tabs */}
          <div className="flex items-center gap-1 bg-zinc-900/90 p-1.5 rounded-lg border border-zinc-800 overflow-x-auto scrollbar-none">
            {[
              { id: 'rag', label: 'RAG Agent Lab', icon: Bot },
              { id: 'vision', label: 'YOLOv8 Vision', icon: Cpu },
              { id: 'xai', label: 'SHAP Explainability', icon: BarChart2 },
              { id: 'iot', label: 'IoT Telemetry', icon: Activity }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/80'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-850'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* WORKBENCH BODY */}
        <div className="rounded-xl border border-zinc-800/90 bg-zinc-950/80 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">

          {/* ================= TAB 1: RAG SIMULATOR ================= */}
          {activeTab === 'rag' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/70">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span>Intelligent Document Q&A — RAG Pipeline Simulator</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    FastAPI • LangChain • Qdrant Vector DB • Citation Attribution
                  </p>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  Select a query below to inspect retrieval flow
                </span>
              </div>

              {/* Sample Queries Chips */}
              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-2">
                  Simulate User Query:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {ragQueries.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedRagIdx(idx)}
                      className={`text-left p-3 rounded-lg text-xs transition-all border ${
                        selectedRagIdx === idx
                          ? 'bg-zinc-800/90 border-cyan-500/40 text-white shadow-sm'
                          : 'bg-zinc-900/50 border-zinc-800/70 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                      }`}
                    >
                      <span className="font-mono text-[10px] text-cyan-400 block mb-1">
                        Query 0{idx + 1}
                      </span>
                      <span className="line-clamp-2">{item.q}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* RAG Execution Stages Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
                
                {/* Left: Vector Retrieval Chunks (6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Qdrant Top-K Chunks Retrieved</span>
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      Similarity Cosine Metric
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {ragQueries[selectedRagIdx].chunks.map((chk, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 font-mono text-xs"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] text-zinc-400 bg-zinc-800 px-1.5 py-0.2 rounded">
                            {chk.id}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-400">
                            Score: {chk.score}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-zinc-300 font-sans leading-relaxed">
                          "{chk.text}"
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Dispatch Tool Router Badge */}
                  <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 font-mono text-[11px] text-zinc-400 flex items-center justify-between">
                    <span>Agent Tool Dispatch:</span>
                    <code className="text-cyan-300 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                      {ragQueries[selectedRagIdx].tool}
                    </code>
                  </div>
                </div>

                {/* Right: Synthesized & Grounded Output (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between p-4 rounded-lg bg-zinc-900/40 border border-zinc-800">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                      <span className="flex items-center gap-1.5 text-white font-medium">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Citation-Grounded Response</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 font-mono">
                        Zero-Hallucination
                      </span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-zinc-950/90 border border-zinc-800 text-xs text-zinc-200 leading-relaxed font-sans mb-3">
                      {ragQueries[selectedRagIdx].answer}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 mb-3">
                      <span>Citations:</span>
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                        [Chunk 1]
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                        [Chunk 2]
                      </span>
                    </div>

                    {/* Architecture Graphic Visualizer Thumbnail */}
                    <div className="rounded-lg overflow-hidden border border-zinc-800/80 relative group">
                      <img
                        src="/assets/images/rag_ai_agent.jpg"
                        alt="RAG Vector Architecture"
                        className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex items-end p-2.5">
                        <span className="text-[10px] font-mono text-cyan-300 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-700">
                          Qdrant 1536-d Vector Cluster & Citation Graph
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Latency: 48ms</span>
                    <span>Evaluation: Verified</span>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ================= TAB 2: YOLOv8 VISION ================= */}
          {activeTab === 'vision' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/70">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <span>Robotic Instance Segmentation & Detection Pipeline</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Ultralytics YOLOv8-nano • PyTorch • OpenCV • Label Studio (1,368 Polygon Annotations)
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-purple-950/70 border border-purple-800 text-purple-300">
                    Janyu Tech Pipeline
                  </span>
                </div>
              </div>

              {/* Slider for confidence threshold */}
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <label className="text-xs font-mono text-white block font-medium">
                    Inference Confidence Threshold (IoU / mAP50 filter)
                  </label>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    Adjust threshold to observe precision/recall trade-off on robotic cameras
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0.20"
                    max="0.95"
                    step="0.05"
                    value={confidenceThreshold}
                    onChange={(e) => setConfidenceThreshold(parseFloat(e.target.value))}
                    className="w-36 accent-purple-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold text-purple-300 w-12 text-right">
                    {(confidenceThreshold * 100).toFixed(0)}%
                  </span>
                </div>
              </div>

              {/* Key Benchmark Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-500 block">mAP50 Detection</span>
                  <span className="text-xl font-bold font-mono text-white mt-1 block">0.84</span>
                  <span className="text-[10px] text-zinc-400 font-mono">YOLOv8-nano weights</span>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-500 block">mAP50 Segmentation</span>
                  <span className="text-xl font-bold font-mono text-white mt-1 block">0.81</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Polygon instances</span>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-500 block">Polygon Annotations</span>
                  <span className="text-xl font-bold font-mono text-white mt-1 block">1,368</span>
                  <span className="text-[10px] text-zinc-400 font-mono">198 raw camera frames</span>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-500 block">Edge Frame Latency</span>
                  <span className="text-xl font-bold font-mono text-emerald-400 mt-1 block">14.2 ms</span>
                  <span className="text-[10px] text-zinc-400 font-mono">~70 FPS live feed</span>
                </div>
              </div>

              {/* Visual Simulated Camera Viewport Canvas */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 relative overflow-hidden font-mono">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 pb-2 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-white font-medium">CAM_01: JETSON_LIVE_FEED.mp4 (640x640)</span>
                  </div>
                  <span className="text-zinc-500 text-[11px]">
                    Model: YOLOv8n-seg.pt (FP16 TensorRT)
                  </span>
                </div>

                {/* Viewport Box with Real YOLOv8 Robotic Vision Feed */}
                <div className="relative w-full h-80 sm:h-[400px] rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden bg-black">
                  {/* Real Industrial Robotic Arm Vision Feed Background */}
                  <img
                    src="/assets/images/yolov8_robotic_vision.jpg"
                    alt="YOLOv8 Robotic Vision Feed"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                  {/* Subtle Grid in Camera */}
                  <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none"></div>
                  
                  {/* Crosshair Center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-16 h-px bg-cyan-400"></div>
                    <div className="h-16 w-px bg-cyan-400"></div>
                  </div>

                  {/* Laser Scan Line Micro Animation */}
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent pointer-events-none animate-pulse-subtle top-1/2 -translate-y-1/2"></div>

                  {/* Simulated Objects with confidence filtering */}
                  {[
                    { id: 'box1', name: 'ARM_SEGMENT [RB12]', conf: 0.94, top: '22%', left: '32%', width: '30%', height: '52%', color: 'border-cyan-400/90 bg-cyan-500/15 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.3)]' },
                    { id: 'box2', name: 'END_EFFECTOR [EE-5]', conf: 0.88, top: '26%', left: '60%', width: '16%', height: '32%', color: 'border-fuchsia-400/90 bg-fuchsia-500/15 text-fuchsia-200 shadow-[0_0_15px_rgba(217,70,239,0.3)]' },
                    { id: 'box3', name: 'JOINT_2 [JT-7]', conf: 0.81, top: '48%', left: '20%', width: '18%', height: '38%', color: 'border-purple-400/90 bg-purple-500/15 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]' },
                    { id: 'box4', name: 'CONVEYOR_GUIDE', conf: 0.68, top: '70%', left: '42%', width: '45%', height: '22%', color: 'border-amber-400/90 bg-amber-500/15 text-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.2)]' },
                    { id: 'box5', name: 'GEARING_DEFECT', conf: 0.42, top: '65%', left: '25%', width: '10%', height: '14%', color: 'border-rose-400/90 bg-rose-500/15 text-rose-200' }
                  ].map((obj) => {
                    const isVisible = obj.conf >= confidenceThreshold;
                    if (!isVisible) return null;

                    return (
                      <div
                        key={obj.id}
                        className={`absolute border-2 rounded transition-all duration-300 ${obj.color} flex flex-col justify-start p-1.5 backdrop-blur-[1px]`}
                        style={{ top: obj.top, left: obj.left, width: obj.width, height: obj.height }}
                      >
                        <div className="bg-zinc-950/95 px-1.5 py-0.5 rounded text-[10px] font-bold self-start border border-zinc-700/80 leading-none shadow-md">
                          {obj.name} <span className="text-emerald-400 font-mono">conf: {obj.conf}</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Overlay Watermark info */}
                  <div className="absolute bottom-3 left-3 text-[10px] text-zinc-300 bg-zinc-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-800 flex items-center gap-3">
                    <span>IoU: 0.50</span>
                    <span className="text-zinc-600">•</span>
                    <span>Confidence: {(confidenceThreshold * 100).toFixed(0)}%</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-emerald-400">1,368 Polygon Masks</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>
                    Detections visible: {
                      [0.94, 0.88, 0.78, 0.62, 0.38].filter(c => c >= confidenceThreshold).length
                    } of 5 candidate proposals
                  </span>
                  <span className="text-emerald-400 font-bold">
                    Zero False Positives at &gt;= 0.65 threshold
                  </span>
                </div>
              </div>

              {/* Technical description */}
              <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed font-sans">
                <strong className="text-white block mb-1">Architecture Implementation:</strong>
                Trained a lightweight nano-scale YOLOv8 instance segmentation backbone in PyTorch with custom polygon masks exported from Label Studio. Optimized for real-time robotic manipulator tracking and object isolation via OpenCV live video streams with minimal memory footprint on edge hardware.
              </div>

            </div>
          )}

          {/* ================= TAB 3: SHAP EXPLAINABILITY ================= */}
          {activeTab === 'xai' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/70">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-indigo-400" />
                    <span>Explainable XGBoost 6G Smart Grid — Temporal TreeSHAP</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Feature Attribution Across 168-Hour High-Stress Grid Demand Window
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  IIIT Naya Raipur Research
                </div>
              </div>

              {/* Dynamic Stress Regime Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">Evaluation Window:</span>
                <div className="inline-flex rounded-lg bg-zinc-900 border border-zinc-800 p-1">
                  <button
                    onClick={() => setShapRegime('peak')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      shapRegime === 'peak' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    168-Hour Peak Stress Window
                  </button>
                  <button
                    onClick={() => setShapRegime('baseline')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      shapRegime === 'baseline' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Standard Chronological Split
                  </button>
                </div>
              </div>

              {/* Network Topology & Visual Feature Attribution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left 6 cols: Visual Topology Graphic */}
                <div className="lg:col-span-5 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col justify-between">
                  <div className="relative group">
                    <img
                      src="/assets/images/smart_grid_xai.jpg"
                      alt="Cyber-Physical Energy Grid Topology & TreeSHAP"
                      className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent flex items-end p-3">
                      <span className="text-[10px] font-mono text-cyan-300 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-700">
                        6G Cyber-Physical Grid Command Topology
                      </span>
                    </div>
                  </div>
                  <div className="p-3 text-[11px] font-mono text-zinc-400 border-t border-zinc-800/80 bg-zinc-900/40">
                    Temporal TreeSHAP isolates non-linear interactions across 168-hour demand surges without chronological data leakage.
                  </div>
                </div>

                {/* Right 7 cols: Interactive Bar Chart */}
                <div className="lg:col-span-7 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">
                      Feature Attributions (|SHAP Value|):
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Window: {shapRegime === 'peak' ? 'Peak Stress (168h)' : 'Chronological Baseline'}
                    </span>
                  </div>

                  {(shapRegime === 'peak' ? [
                    { name: "Lag_24h_Grid_Load", value: 0.442, pct: "88%", desc: "Previous day baseline demand" },
                    { name: "Surge_Ratio_Derivative", value: 0.321, pct: "64%", desc: "Sudden rate of consumption spike" },
                    { name: "Cyclic_Sin_Hour_Encoding", value: 0.235, pct: "47%", desc: "Circadian grid load periodicity" },
                    { name: "Rolling_Std_12h", value: 0.168, pct: "34%", desc: "Variance during stress window" },
                    { name: "Temperature_Gradient", value: 0.098, pct: "20%", desc: "Cooling & heating correlation" }
                  ] : [
                    { name: "Cyclic_Sin_Hour_Encoding", value: 0.395, pct: "79%", desc: "Diurnal cyclical demand pattern" },
                    { name: "Lag_24h_Grid_Load", value: 0.362, pct: "72%", desc: "24-hour autoregressive term" },
                    { name: "Rolling_Mean_48h", value: 0.245, pct: "49%", desc: "Two-day moving average demand" },
                    { name: "Weekend_Indicator_Flag", value: 0.180, pct: "36%", desc: "Industrial vs residential shift" },
                    { name: "Surge_Ratio_Derivative", value: 0.112, pct: "22%", desc: "Normal-state rate derivative" }
                  ]).map((f, fIdx) => (
                    <div key={fIdx} className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-zinc-200 font-bold">{f.name}</span>
                        <span className="text-cyan-300 font-bold">+{f.value}</span>
                      </div>
                      <div className="w-full bg-zinc-950 rounded-full h-2 overflow-hidden mb-1">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full"
                          style={{ width: f.pct }}
                        />
                      </div>
                      <div className="text-[10px] text-zinc-500 font-sans">
                        {f.desc}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 font-mono text-center">
                <div>
                  <span className="text-[10px] text-zinc-500">Mean Absolute Error (MAE)</span>
                  <span className="text-base font-bold text-white block mt-0.5">1.04</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500">Root Mean Squared (RMSE)</span>
                  <span className="text-base font-bold text-white block mt-0.5">1.39</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500">R² Coefficient</span>
                  <span className="text-base font-bold text-emerald-400 block mt-0.5">0.836</span>
                </div>
              </div>

            </div>
          )}

          {/* ================= TAB 4: IOT TELEMETRY ================= */}
          {activeTab === 'iot' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/70">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Radio className="w-4 h-4 text-emerald-400" />
                    <span>Varaha IoT — High-Frequency Industrial Telemetry Engine</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    MQTT Protocol • Node.js • PostgreSQL • React • TypeScript
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  MQTT Stream Active
                </span>
              </div>

              {/* Visual Telemetry Dashboard Banner */}
              <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 relative group">
                <img
                  src="/assets/images/varaha_iot_telemetry.jpg"
                  alt="Varaha Industrial IoT Telemetry Dashboard"
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent flex items-end justify-between p-4">
                  <div className="font-mono text-xs">
                    <span className="text-white font-bold block">Industrial 3-Phase Telemetry Dashboard</span>
                    <span className="text-zinc-400 text-[11px]">Real-Time Vibration, Temperature & Capacity Ingestion</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/90 border border-emerald-800 px-2 py-0.5 rounded">
                    Broker: 10.0.1.50 • 12.5k pkts/sec
                  </span>
                </div>
              </div>

              {/* Live Gauges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                
                <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Motor Velocity</span>
                    <div className="text-2xl font-bold text-white mt-1">
                      {motorRpm} <span className="text-xs text-zinc-400 font-normal">RPM</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setMotorRpm((prev) => Math.min(2200, prev + 50))}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200"
                    >
                      +50
                    </button>
                    <button
                      onClick={() => setMotorRpm((prev) => Math.max(1200, prev - 50))}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200"
                    >
                      -50
                    </button>
                    <span className="text-[10px] text-emerald-400 ml-auto">Normal Range</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Current Draw</span>
                    <div className="text-2xl font-bold text-white mt-1">
                      {motorCurrent} <span className="text-xs text-zinc-400 font-normal">Amperes</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setMotorCurrent((prev) => +(prev + 0.5).toFixed(1))}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200"
                    >
                      +0.5
                    </button>
                    <button
                      onClick={() => setMotorCurrent((prev) => +(prev - 0.5).toFixed(1))}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200"
                    >
                      -0.5
                    </button>
                    <span className="text-[10px] text-cyan-400 ml-auto">3-Phase Balanced</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Tank Cleanliness Index</span>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">
                      {tankLevel}%
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setTankLevel((prev) => Math.min(100, prev + 2))}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200"
                    >
                      +2%
                    </button>
                    <button
                      onClick={() => setTankLevel((prev) => Math.max(50, prev - 2))}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200"
                    >
                      -2%
                    </button>
                    <span className="text-[10px] text-emerald-400 ml-auto">Optimal State</span>
                  </div>
                </div>

              </div>

              {/* Ingestion Pipeline note */}
              <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/80 text-xs text-zinc-400 leading-relaxed font-mono">
                <span className="text-white font-bold block mb-1">Architecture Highlights:</span>
                • Implemented MQTT topic subscriptions (`telemetry/motor/+, telemetry/tank/+`) for continuous non-blocking event-driven updates.<br />
                • Ingestion worker in Node.js buffers high-frequency telemetry packets and batches writes into PostgreSQL timeseries tables.<br />
                • Real-time fault simulation hooks trigger immediate threshold alerts for motor overload and degradation detection.
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
