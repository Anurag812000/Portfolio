import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, RotateCcw } from 'lucide-react';

export default function AiAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: "Hello! I am Anurag's Portfolio AI Agent, built with retrieval-grounded principles. Ask me anything about Anurag's experience with YOLOv8, RAG pipelines, 6G Smart Grid research, or academic qualifications!",
      sources: ['Resume Overview']
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const sampleQuestions = [
    "Tell me about Anurag's RAG & Qdrant project",
    "What did he build at Janyu Tech with YOLOv8?",
    "Explain his 6G Smart Grid research paper",
    "What are his degrees and GATE qualification?",
    "How can I contact or hire Anurag?"
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateAnswer = (query) => {
    const q = query.toLowerCase();

    if (q.includes('rag') || q.includes('qdrant') || q.includes('document q&a') || q.includes('langchain')) {
      return {
        text: "Anurag engineered the 'Intelligent Document Q&A and AI Agent' (2026). It uses FastAPI, LangChain, semantic embeddings, and a Qdrant vector database to ingest multi-format documents and generate citation-grounded responses. The system features an autonomous agent that dynamically decides between document retrieval and computational tools, coupled with a modular evaluation framework measuring retrieval recall, response accuracy, and latency.",
        sources: ['Projects / Intelligent Document Q&A & AI Agent', 'Technical Skills / AI & GenAI']
      };
    }

    if (q.includes('janyu') || q.includes('yolo') || q.includes('vision') || q.includes('varaha') || q.includes('intern')) {
      return {
        text: "At Janyu Tech (Aug 2026 – Present), Anurag is a Robotic Programmer Intern working on two key initiatives:\n1. YOLOv8 Robotic Vision: Built an instance segmentation pipeline (YOLOv8-nano, PyTorch, OpenCV). He curated 1,368 polygon-annotated instances across 198 images in Label Studio, attaining 0.84 mAP50 detection and 0.81 mAP50 segmentation.\n2. Varaha IoT: Developed a real-time telemetry monitoring dashboard utilizing MQTT, Node.js, PostgreSQL, React, and TypeScript to track motor health, RPM, current draw, and tank levels.",
        sources: ['Experience / Janyu Tech', 'Robotic Programmer Intern']
      };
    }

    if (q.includes('devtown') || q.includes('potato') || q.includes('disease') || q.includes('cnn')) {
      return {
        text: "During his Machine Learning Internship at DevTown (Jan 2023 – Apr 2023), Anurag built an AI potato plant disease detection model using Python, TensorFlow, and CNNs. He also developed FastAPI REST APIs for production inference with latency optimization.",
        sources: ['Experience / DevTown', 'FastAPI Inference API']
      };
    }

    if (q.includes('research') || q.includes('paper') || q.includes('xgboost') || q.includes('smart grid') || q.includes('6g')) {
      return {
        text: "Anurag has conducted two major research projects:\n1. 'Explainable XGBoost-Based Smart Grid Load Forecasting for 6G-Enabled Cyber-Physical Systems': Developed an explainable framework with lag features, cyclical time encodings, and strict chronological splits (no data leakage). Achieved MAE=1.04, RMSE=1.39, R²=0.836, and interpreted 168-hour peak stresses using Temporal TreeSHAP.\n2. 'Lightweight Multivariate Predictive Auto-Scaling for Energy-Efficient Cloud Data Centers': Designed a MAPE-K Predictor-Guardian framework on NASA HTTP logs, achieving R²=0.8400 (workload) and F1=0.9955 (anomaly detection).",
        sources: ['Research / Smart Grid Load Forecasting', 'Research / Cloud Auto-Scaling']
      };
    }

    if (q.includes('education') || q.includes('gate') || q.includes('college') || q.includes('cgpa') || q.includes('degree') || q.includes('iiit')) {
      return {
        text: "Anurag is GATE CSE Qualified and currently pursuing his M.Tech in Computer Science and Engineering at IIIT Naya Raipur (2025–Present) with a CGPA of 7.8/10. He also completed his B.Tech in Data Science from IIIT Naya Raipur with a CGPA of 8.0/10. Furthermore, he serves as Placement Coordinator at IIIT Naya Raipur.",
        sources: ['Education / IIIT Naya Raipur', 'Achievements / GATE CSE Qualified']
      };
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('python')) {
      return {
        text: "Anurag's core technical stack includes:\n• Languages: Python, C, C++, SQL\n• AI / GenAI: LangChain, Qdrant, RAG, PyTorch, TensorFlow, Scikit-Learn, Prompt Engineering\n• Vision: Ultralytics YOLOv8, OpenCV, Label Studio\n• Backend & Cloud: FastAPI, REST APIs, PostgreSQL, MQTT, Docker, AWS (EC2/Lambda), CI/CD\n• Core: Data Structures, Algorithms, OOP, Complexity Analysis.",
        sources: ['Technical Skills / Matrix']
      };
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('linkedin')) {
      return {
        text: `You can reach Anurag directly:\n• Email: anuragsahu812000@gmail.com\n• Phone: +91-6260412013\n• LinkedIn: linkedin.com/in/anuragkumarsahu1\n• GitHub: github.com/Anurag812000\n• Location: Korba, Chhattisgarh, India`,
        sources: ['Personal Contact Information']
      };
    }

    // Default response
    return {
      text: `Anurag Kumar Sahu is an M.Tech scholar at IIIT Naya Raipur and a GATE-qualified Computer Science Engineer specializing in AI, RAG, YOLOv8 computer vision, and FastAPI backend systems. He is currently working as a Robotic Programmer Intern at Janyu Tech. Feel free to ask about his specific projects, research papers, or skills!`,
      sources: ['Resume Summary']
    };
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const result = generateAnswer(query);
      setMessages((prev) => [
        ...prev,
        { sender: 'agent', text: result.text, sources: result.sources }
      ]);
      setIsTyping(false);
    }, 450);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-cyan-500/40 shadow-2xl flex flex-col h-[85vh] max-h-[700px] overflow-hidden">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-white">
                  Anurag AI Assistant
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/80">
                  RAG-Grounded
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Indexed to Anurag's resume, research & projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setMessages([
                  {
                    sender: 'agent',
                    text: "Conversation reset. What would you like to know about Anurag's work?",
                    sources: ['System']
                  }
                ]);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-sans text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                m.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl p-4 ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-xs shadow-md shadow-cyan-600/20'
                    : 'bg-slate-950/80 border border-white/[0.08] text-slate-200 rounded-tl-xs shadow-lg'
                }`}
              >
                <div className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                  {m.text}
                </div>

                {m.sources && (
                  <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-cyan-400/90">
                    <span className="text-slate-400">Sources:</span>
                    {m.sources.map((src, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50"
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 p-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Retrieving context & synthesizing response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-white/[0.04] overflow-x-auto flex gap-1.5 scrollbar-none">
          {sampleQuestions.map((sq, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(sq)}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-750 hover:text-cyan-300 border border-white/[0.05] whitespace-nowrap transition-colors shrink-0"
            >
              {sq}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-950 border-t border-white/[0.08]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about Anurag's skills, projects, or research..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/[0.1] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors font-sans"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-40 text-white font-medium transition-all shadow-md shadow-cyan-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
