export interface ProjectData {
  name: string;
  description: string;
  website: string | null;
  github: string | null;
  image: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'research' | 'systems';
}

export const projects: ProjectData[] = [
  {
    name: "AaRTOS",
    description: "A preemptive RTOS kernel for ARM Cortex-M4 written in C and ARM Assembly. Implements PendSV-driven context switching, SVC-based task startup, 1ms SysTick preemption, round-robin scheduling, priority-aware blocking mutexes, and inter-task message queues on bare-metal STM32F4 hardware.",
    github: "github.com/Aarav-J/aaRTOS",
    website: null,
    image: "aartos.png",
    technologies: ["c", "arm", "stm32"],
    type: "systems"
  },
  {
    name: "Datasheet Parser",
    description: "An electrical component datasheet intelligence platform. Engineers ask natural-language questions over datasheets via citation-backed RAG. A custom parsing pipeline using Modal, Docling, and S3 converts complex datasheets into structured data — pin tables, register maps, electrical specs, and communication protocols.",
    github: "github.com/Aarav-J/datasheet_parse",
    website: null,
    image: "datasheet.png",
    technologies: ["python", "typescript", "nextjs", "openai", "pinecone"],
    type: "web"
  },
  {
    name: "Truth Decay",
    description: "A benchmark for evaluating sycophancy in extended LLM dialogues. Identified a 47% accuracy decline over multi-turn interactions. Co-authored the research paper documenting methodology, experimental pipeline, and findings. Published at the NAACL 2025 Student Research Workshop.",
    github: null,
    website: "arxiv.org/pdf/2503.11656",
    image: "research.png",
    technologies: ["python", "overleaf"],
    type: "research"
  },
  {
    name: "Final Third",
    description: "A full-stack football analytics platform ingesting 3000+ matches and 10M+ game events from StatsBomb Open Data. A Gradient Boosting possession outcome predictor identifies dangerous attacking sequences with 91% precision across 5 leagues. A BiLSTM reads event streams chronologically, catching 94% of shot-producing possessions.",
    github: "github.com/Aarav-J/football-intelligence",
    website: null,
    image: "finalthird.png",
    technologies: ["python", "typescript", "react", "fastapi", "pytorch"],
    type: "web"
  },
  {
    name: "Bridge",
    description: "A hackathon-built platform that combats political echo chambers by pairing users with opposing views for structured, video-based debates. Full-stack: Next.js frontend, Node.js + Socket.IO backend, Supabase auth, WebRTC for video, and GPT-4 for real-time fact-checking.",
    github: "github.com/Aarav-J/Bridge",
    website: "devpost.com/software/bridge-8xjdwu",
    image: "bridge.jpg",
    technologies: ["react", "typescript", "tailwind", "openai", "socket", "node", "supabase"],
    type: "web"
  },
  {
    name: "MarvelOracle",
    description: "A full-stack RAG application that lets you chat with the Marvel Universe using AI. Marvel wiki pages were scraped with Python, embedded into a Pinecone vector database, and served via GPT-4 with context-aware responses.",
    website: "marveloracle.aaravj.xyz",
    github: "github.com/Aarav-J/marveloracle",
    image: "marveloracle.png",
    technologies: ["react", "python", "js", "tailwind", "openai"],
    type: "web"
  },
  {
    name: "AaravSim",
    description: "A full-stack stock market simulator and dashboard. Users simulate trading, view real stock data, manage portfolios, and access market news in a modern web interface. React frontend with a Flask REST API backend.",
    website: "aaravsim.aaravj.xyz",
    github: "github.com/Aarav-J/aaravsim",
    image: "aaravsim.png",
    technologies: ["react", "js", "python", "supabase"],
    type: "web"
  },
  {
    name: "Stronger",
    description: "A comprehensive mobile fitness tracking app for Android and iOS built with React Native. Monitors workouts and progress with goals, detailed analytics, and push notifications.",
    website: null,
    github: "github.com/Aarav-J/strong2.0",
    image: "strong.png",
    technologies: ["react", "js", "python", "expo"],
    type: "mobile"
  },
  {
    name: "AaravType",
    description: "A typing test application for improving speed and accuracy, with customizable tests and detailed analytics to track progress over time.",
    website: "aaravtype.aaravj.xyz",
    github: "github.com/Aarav-J/aaravtypefrontend",
    image: "aaravtype.png",
    technologies: ["react", "js", "tailwind", "node", "mongo"],
    type: "web"
  },
]
