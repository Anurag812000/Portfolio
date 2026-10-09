export const personalData = {
  name: "Anurag Kumar Sahu",
  title: "AI Engineer & Computer Science Graduate",
  location: "Korba, Chhattisgarh, India",
  phone: "+91-6260412013",
  email: "anuragsahu812000@gmail.com",
  linkedin: "https://linkedin.com/in/anuragkumarsahu1",
  linkedinDisplay: "linkedin.com/in/anuragkumarsahu1",
  github: "https://github.com/Anurag812000",
  githubDisplay: "github.com/Anurag812000",
  summary:
    "GATE-qualified Computer Science Engineer pursuing an M.Tech in Computer Science and Engineering at IIIT Naya Raipur. Hands-on experience in Python programming, AI engineering, machine learning, REST APIs, data processing, and computer vision. Proven track record in building practical GenAI applications using FastAPI, LangChain, RAG, Qdrant vector databases, and autonomous AI agents.",
  taglines: [
    "AI & Generative AI Engineer",
    "RAG & Agentic Systems Builder",
    "Computer Vision & Robotics Developer",
    "M.Tech CSE Scholar @ IIIT Naya Raipur",
    "GATE CSE Qualified Engineer"
  ],
  stats: [
    { label: "GATE CSE", value: "Qualified", highlight: "Top National Exam" },
    { label: "M.Tech CGPA", value: "7.8 / 10", highlight: "IIIT Naya Raipur" },
    { label: "B.Tech CGPA", value: "8.0 / 10", highlight: "Data Science" },
    { label: "YOLOv8 Detection", value: "0.84 mAP50", highlight: "Robotic Vision" },
    { label: "Cloud Predictive F1", value: "0.9955", highlight: "Research Work" },
  ]
};

export const skillsData = [
  {
    category: "AI & Generative AI",
    icon: "Brain",
    accent: "from-cyan-500 to-blue-600",
    skills: [
      "Generative AI",
      "LLMs & Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "AI Agents",
      "LangChain",
      "Embeddings",
      "Qdrant Vector DB",
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn"
    ]
  },
  {
    category: "Computer Vision & Robotics",
    icon: "Eye",
    accent: "from-emerald-500 to-teal-600",
    skills: [
      "Ultralytics YOLOv8",
      "OpenCV",
      "Instance Segmentation",
      "Object Detection",
      "Label Studio",
      "Model Quantization & Nano Weights",
      "Live Camera Ingestion",
      "Robotic Automation"
    ]
  },
  {
    category: "Programming & Core CS",
    icon: "Code2",
    accent: "from-purple-500 to-indigo-600",
    skills: [
      "Python",
      "C",
      "C++",
      "SQL",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Computational Complexity",
      "Analytical Problem Solving"
    ]
  },
  {
    category: "Backend, IoT & Cloud",
    icon: "Server",
    accent: "from-amber-500 to-orange-600",
    skills: [
      "FastAPI REST APIs",
      "API Integration",
      "MQTT Protocol",
      "PostgreSQL",
      "Docker",
      "CI/CD & GitHub Actions",
      "AWS EC2 / Lambda / CloudWatch",
      "Unit Testing & Debugging"
    ]
  },
  {
    category: "Data Science & Processing",
    icon: "Database",
    accent: "from-rose-500 to-pink-600",
    skills: [
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Data Preprocessing & Cleaning",
      "Data Visualization",
      "Large-Scale Dataset Processing"
    ]
  },
  {
    category: "Tools & Environments",
    icon: "Cpu",
    accent: "from-blue-500 to-cyan-600",
    skills: [
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Git & GitHub",
      "Linux / Windows",
      "Postman",
      "React & TypeScript (Dashboard)"
    ]
  }
];

export const experienceData = [
  {
    role: "Robotic Programmer Intern",
    company: "Janyu Tech",
    period: "Aug 2026 – Present",
    badge: "Current Role",
    type: "Internship",
    location: "On-site / Hybrid",
    highlights: [
      {
        title: "YOLOv8 Computer Vision & Robotic Automation",
        description:
          "Developed an end-to-end instance segmentation pipeline using Python, PyTorch, Ultralytics YOLOv8, and OpenCV for identifying and segmenting objects from images and live camera feeds. Curated a custom dataset of 198 images and 1,368 polygon-annotated instances via Label Studio and trained a lightweight YOLOv8-nano model, reaching 0.84 mAP50 detection and 0.81 mAP50 segmentation.",
        tags: ["Python", "PyTorch", "Ultralytics YOLOv8", "OpenCV", "Label Studio", "Robotics"]
      },
      {
        title: "Varaha IoT – Real-Time Monitoring Dashboard",
        description:
          "Architected an end-to-end telemetry monitoring solution using MQTT, Node.js, PostgreSQL, React, and TypeScript for real-time visualization of motor health, RPM, current, cleanliness level, remaining capacity, and tank/device status. Implemented MQTT-based telemetry simulation and verification workflows for high-reliability data ingestion and backend services.",
        tags: ["MQTT", "Node.js", "PostgreSQL", "React", "TypeScript", "IoT Telemetry"]
      }
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "DevTown",
    period: "Jan 2023 – Apr 2023",
    badge: "Completed",
    type: "Remote Internship",
    location: "Remote",
    highlights: [
      {
        title: "AI-Based Potato Plant Disease Detection & Inference APIs",
        description:
          "Developed and rigorously evaluated an AI-based potato plant disease detection system using Python, TensorFlow, and Deep Convolutional Neural Networks (CNNs). Covered data acquisition, robust image preprocessing, model training, validation, and production deployment.",
        tags: ["TensorFlow", "CNNs", "Computer Vision", "Python", "Image Preprocessing"]
      },
      {
        title: "Production FastAPI REST APIs & Model Deployment",
        description:
          "Built and deployed FastAPI REST APIs for real-time ML inference; conducted extensive unit testing, debugging, validation, and latency optimization during development across end-to-end ML workflows.",
        tags: ["FastAPI", "REST APIs", "Model Optimization", "Testing & Debugging"]
      }
    ]
  }
];

export const projectsData = [
  {
    id: "rag-ai-agent",
    title: "Intelligent Document Q&A & AI Agent",
    period: "2026",
    category: "AI & Generative AI",
    featured: true,
    subtitle: "RAG Pipeline with Qdrant Vector DB & Autonomous Tool-Calling Agent",
    description:
      "A production-grade Python-based Retrieval-Augmented Generation (RAG) system using FastAPI, LangChain, embeddings, and Qdrant vector database to ingest multi-source documents and synthesize citation-grounded, verifiable answers with zero hallucinations.",
    metrics: [
      { label: "Vector DB", val: "Qdrant" },
      { label: "Latency", val: "Optimized" },
      { label: "Grounding", val: "100% Attributed" }
    ],
    points: [
      "Implemented document chunking, semantic vector retrieval, prompt construction, and LLM-based answer generation with direct source attribution.",
      "Engineered an autonomous AI agent capable of dynamically selecting between document retrieval and external utility tools based on intent classification.",
      "Exposed the full query and ingestion pipeline through high-throughput FastAPI REST APIs.",
      "Constructed a modular evaluation suite benchmarked against retrieval quality, response correctness, citation validity, and latency."
    ],
    tech: ["Python", "FastAPI", "LangChain", "RAG", "Qdrant", "LLMs", "Vector Embeddings", "AI Agents"],
    github: "https://github.com/Anurag812000",
    architecture: [
      "Document Ingestion & Chunking",
      "Vector Embedding Generation",
      "Qdrant Semantic Search",
      "Agent Tool & Retrieval Router",
      "Context Grounding & Prompt Synthesis",
      "Citation-Attributed Response via FastAPI"
    ]
  },
  {
    id: "varaha-iot-dashboard",
    title: "Varaha IoT Real-Time Telemetry Dashboard",
    period: "2026",
    category: "IoT & Full Stack",
    featured: true,
    subtitle: "High-Frequency MQTT Telemetry Engine for Industrial Monitoring",
    description:
      "End-to-end industrial telemetry monitoring solution built with MQTT protocol, Node.js backend, PostgreSQL, and a reactive TypeScript dashboard. Streams live sensor telemetry including motor RPM, current, tank levels, and device status with automated fault simulation.",
    metrics: [
      { label: "Protocol", val: "MQTT" },
      { label: "DB", val: "PostgreSQL" },
      { label: "Frontend", val: "React + TS" }
    ],
    points: [
      "Streamlined real-time data ingestion using MQTT brokers with guaranteed QoS.",
      "Rendered live telemetry gauges for motor health, RPM, current draw, and cleanliness index.",
      "Implemented automated simulation routines to stress-test data ingestion pipelines and threshold alerts."
    ],
    tech: ["MQTT", "Node.js", "PostgreSQL", "React", "TypeScript", "Real-Time Telemetry"],
    github: "https://github.com/Anurag812000"
  },
  {
    id: "yolov8-robotic-vision",
    title: "YOLOv8 Robotic Vision & Instance Segmentation",
    period: "2026",
    category: "Computer Vision",
    featured: true,
    subtitle: "Custom-Annotated Industrial Computer Vision Pipeline",
    description:
      "High-precision computer vision pipeline using Ultralytics YOLOv8-nano and OpenCV. Built with 1,368 polygon annotations to deliver millisecond-level instance segmentation and detection on embedded and robotic platforms.",
    metrics: [
      { label: "mAP50 Det", val: "0.84" },
      { label: "mAP50 Seg", val: "0.81" },
      { label: "Annotations", val: "1,368" }
    ],
    points: [
      "Curated and labeled a domain-specific dataset of 198 images and 1,368 polygon instances in Label Studio.",
      "Trained and fine-tuned a lightweight YOLOv8-nano architecture achieving 0.84 mAP50 detection and 0.81 mAP50 segmentation.",
      "Integrated with OpenCV video streaming pipelines for real-time robotic object manipulation."
    ],
    tech: ["Ultralytics YOLOv8", "PyTorch", "OpenCV", "Label Studio", "Python", "Instance Segmentation"],
    github: "https://github.com/Anurag812000"
  },
  {
    id: "plant-disease-detection",
    title: "Plant Disease Detection & ML REST Microservice",
    period: "2023",
    category: "Computer Vision",
    featured: false,
    subtitle: "Deep Learning CNN Microservice for Agricultural Diagnosis",
    description:
      "Convolutional Neural Network (CNN) pipeline trained on leaf imagery to accurately diagnose plant pathologies in real-time, served via FastAPI microservices for deployment on edge and mobile applications.",
    metrics: [
      { label: "Framework", val: "TensorFlow" },
      { label: "API", val: "FastAPI" },
      { label: "Domain", val: "AgriTech" }
    ],
    points: [
      "Executed end-to-end data acquisition, image augmentation, preprocessing, and CNN architecture training.",
      "Deployed model weights behind a responsive FastAPI endpoint with sub-second inference latency.",
      "Ensured thorough validation and edge-case handling for agricultural image variations."
    ],
    tech: ["Python", "TensorFlow", "CNNs", "FastAPI", "OpenCV", "REST APIs"],
    github: "https://github.com/Anurag812000"
  }
];

export const researchData = [
  {
    id: "smart-grid-xgboost",
    title: "Explainable XGBoost-Based Smart Grid Load Forecasting for 6G-Enabled Cyber-Physical Systems",
    domain: "Explainable AI • Cyber-Physical Systems • 6G Networks",
    badge: "Smart Grid & XAI",
    summary:
      "A novel, explainable forecasting framework for future 6G smart cyber-physical energy grids. Implements derivative-based feature engineering, lag features, cyclical encodings, and Temporal TreeSHAP for rigorous peak-load explainability without data leakage.",
    metrics: [
      { label: "MAE", value: "1.04" },
      { label: "RMSE", value: "1.39" },
      { label: "R² Score", value: "0.836" },
      { label: "SHAP Window", value: "168 Hours" }
    ],
    highlights: [
      "Engineered high-dimensional feature representations: derivative-based trends, rolling statistics, cyclical time encodings, and surge ratios.",
      "Enforced strict chronological train-test splits with training-only preprocessing to eliminate temporal data leakage.",
      "Applied Temporal TreeSHAP over a 168-hour high-stress load window to unpack exact feature attributions during severe grid surges and abnormal demand."
    ],
    tags: ["Explainable AI (XAI)", "XGBoost", "Temporal TreeSHAP", "6G CPS", "Feature Engineering", "Time-Series"]
  },
  {
    id: "cloud-predictive-autoscaling",
    title: "Lightweight Multivariate Predictive Auto-Scaling for Energy-Efficient Cloud Data Centers",
    domain: "Cloud Computing • Autonomous Systems • Predictive Scaling",
    badge: "Cloud & Green Computing",
    summary:
      "A lightweight MAPE-K-based (Monitor-Analyze-Plan-Execute over Knowledge) Predictor–Guardian framework combining multivariate workload forecasting with real-time anomalous traffic detection across massive NASA HTTP server logs.",
    metrics: [
      { label: "R² Workload", value: "0.8400" },
      { label: "F1 Detection", value: "0.9955" },
      { label: "Dataset", value: "NASA HTTP" },
      { label: "Framework", value: "MAPE-K" }
    ],
    highlights: [
      "Designed a dual Predictor–Guardian architecture ensuring optimal server resource allocation while guarding against traffic anomalies.",
      "Processed and analyzed large-scale NASA HTTP request datasets for realistic traffic evaluation.",
      "Evaluated Random Forest and Decision Tree ensembles, obtaining R² = 0.8400 for workload prediction and F1 = 0.9955 for anomalous traffic isolation."
    ],
    tags: ["MAPE-K Architecture", "Predictive Scaling", "Random Forest", "Anomalous Traffic Detection", "Cloud Computing"]
  }
];

export const educationData = [
  {
    degree: "Master of Technology (M.Tech)",
    field: "Computer Science and Engineering",
    institution: "International Institute of Information Technology, Naya Raipur (IIIT-NR)",
    period: "2025 – Present",
    score: "CGPA: 7.8 / 10",
    status: "In Progress",
    details:
      "Advanced coursework and research in Machine Learning, Distributed Systems, Deep Learning, Algorithm Design, and AI Systems."
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Data Science",
    institution: "International Institute of Information Technology, Naya Raipur (IIIT-NR)",
    period: "Graduated",
    score: "CGPA: 8.0 / 10",
    status: "Completed",
    details:
      "Rigorous foundations in Data Science, Probability & Statistics, Database Management Systems, Machine Learning, and Computer Vision."
  }
];

export const achievementsData = [
  {
    title: "GATE CSE Qualified",
    subtitle: "National Level Examination in Computer Science & Engineering",
    description:
      "Qualified the Graduate Aptitude Test in Engineering (GATE) in Computer Science & Information Technology, demonstrating strong mastery in core computer science, algorithms, operating systems, and computation theory.",
    icon: "Award"
  },
  {
    title: "Placement Coordinator",
    subtitle: "IIIT Naya Raipur",
    description:
      "Coordinated campus recruitment drives, industry outreach, student preparation workshops, and streamlined communications between university leadership, placement cells, and corporate recruiters.",
    icon: "Users"
  }
];

export const certificationsData = [
  {
    title: "AWS Cloud Fundamentals",
    issuer: "Amazon Web Services",
    icon: "Cloud"
  },
  {
    title: "Python for Data Science",
    issuer: "Professional Certification",
    icon: "FileCode"
  },
  {
    title: "Machine Learning and Deep Learning Certifications",
    issuer: "Specialized AI Track",
    icon: "CheckCircle"
  }
];
