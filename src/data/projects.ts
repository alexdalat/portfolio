export type Category =
  | "ML"
  | "Games"
  | "Tools"
  | "Algorithms"
  | "Finance"
  | "Extensions & Bots"
  | "Vision & Graphics"
  | "Websites";

export type SubCategory = "RL" | null;

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: Category;
  subCategory?: SubCategory;
  tags: string[];
  date: string; // ISO date string
  github?: string;
  url?: string;
  image?: string;
}

export const projects: Project[] = [
  // ─── ML ────────────────────────────────────────────────────────────────
  {
    slug: "project-replica",
    title: "Project Replica",
    description:
      "Fine-tune an LLM on personal data to replicate writing style and thinking patterns.",
    category: "ML",
    tags: ["Python", "ML/AI"],
    date: "2025-08-15",
    github: "https://github.com/alexdalat/project-replica",
  },
  {
    slug: "ai-autocomplete",
    title: "AI Autocomplete",
    description:
      "An intelligent autocomplete system powered by machine learning.",
    category: "ML",
    tags: ["Python", "ML/AI"],
    date: "2025-10-25",
    github: "https://github.com/alexdalat/ai-autocomplete",
  },
  {
    slug: "digit-classifier-pytorch",
    title: "Digit Classifier (PyTorch)",
    description:
      "Handwritten digit classification using PyTorch neural networks.",
    category: "ML",
    tags: ["Python", "ML/AI"],
    date: "2023-01-31",
    github: "https://github.com/alexdalat/digit-classifier-pytorch",
  },
  {
    slug: "digit-classifier",
    title: "Digit Classifier",
    description:
      "Handwritten digit classification model trained on MNIST dataset.",
    category: "ML",
    tags: ["Python", "ML/AI"],
    date: "2022-12-28",
    github: "https://github.com/alexdalat/digit-classifier",
  },
  {
    slug: "digit-denoiser",
    title: "Digit Denoiser",
    description: "Auto-encoder for denoising MNIST digits.",
    category: "ML",
    tags: ["Python", "ML/AI"],
    date: "2023-01-31",
    github: "https://github.com/alexdalat/digit-denoiser",
  },
  {
    slug: "neural-network-visual",
    title: "Neural Network Visualizer",
    description:
      "Interactive visualization of a neural network with mathematical explanation and proof.",
    category: "ML",
    tags: ["JavaScript", "ML/AI", "Data"],
    date: "2022-10-25",
    github: "https://github.com/alexdalat/neural-network-visual",
  },
  {
    slug: "traffic-signs-v1",
    title: "Traffic Sign Detection",
    description:
      "TensorFlow model to detect traffic signs for autonomous vehicle path planning.",
    category: "ML",
    tags: ["Python", "ML/AI", "Computer Vision"],
    date: "2022-11-30",
    github: "https://github.com/alexdalat/traffic-signs-v1",
  },
  {
    slug: "yolov3-impl",
    title: "YOLOv3 Implementation",
    description:
      "Real-time object detection using YOLOv3 for autonomous vehicle path mapping.",
    category: "ML",
    tags: ["Python", "ML/AI", "Computer Vision"],
    date: "2022-11-30",
    github: "https://github.com/alexdalat/yolov3-impl",
  },
  {
    slug: "raytracer-denoiser",
    title: "Raytracer Denoiser",
    description:
      "ML-based denoising of ray traced scenes to replicate high sample counts.",
    category: "ML",
    tags: ["Python", "ML/AI", "Graphics"],
    date: "2023-02-15",
    github: "https://github.com/alexdalat/raytracer-denoiser",
  },
  {
    slug: "metrics-tracker",
    title: "Metrics Tracker",
    description:
      "A versatile Python module for logging and visualizing metrics over time.",
    category: "Tools",
    tags: ["Python", "Data"],
    date: "2024-06-14",
    github: "https://github.com/alexdalat/MetricsTracker",
  },

  // ─── ML > RL ───────────────────────────────────────────────────────────
  {
    slug: "cartpole-dqn-parallel",
    title: "CartPole DQN (Parallel)",
    description:
      "Parallelized Deep Q-Network training for the CartPole environment.",
    category: "ML",
    subCategory: "RL",
    tags: ["Python", "RL"],
    date: "2024-07-10",
    github: "https://github.com/alexdalat/cartpole-dqn-parallel",
  },
  {
    slug: "dqn-tests",
    title: "DQN Experiments",
    description:
      "A collection of Jupyter notebooks exploring Deep Q-Network architectures.",
    category: "ML",
    subCategory: "RL",
    tags: ["Python", "RL"],
    date: "2024-07-25",
    github: "https://github.com/alexdalat/dqn-tests",
  },
  {
    slug: "rl-gridworld",
    title: "RL Gridworld",
    description:
      "Reinforcement learning agent trained on a gridworld environment.",
    category: "ML",
    subCategory: "RL",
    tags: ["Python", "RL"],
    date: "2025-05-09",
    github: "https://github.com/alexdalat/rl-gridworld",
  },

  // ─── Games ─────────────────────────────────────────────────────────────
  {
    slug: "conqueror-io",
    title: "Conqueror.io",
    description:
      "A multiplayer real-time strategy game with territory conquest mechanics.",
    category: "Games",
    tags: ["JavaScript", "Web", "Gaming"],
    date: "2025-12-13",
    github: "https://github.com/alexdalat/conqueror.io",
  },
  {
    slug: "karuta-auto",
    title: "Karuta Auto",
    description:
      "Automated Karuta client using computer vision to identify and claim high-value cards.",
    category: "Games",
    tags: ["Python", "Computer Vision", "Automation"],
    date: "2021-09-08",
    github: "https://github.com/alexdalat/karuta-auto",
  },
  {
    slug: "conversation-game",
    title: "Conversation Game",
    description:
      "An interactive conversation-based game experience.",
    category: "Games",
    tags: ["Python", "ML/AI", "Gaming"],
    date: "2025-05-07",
  },

  // ─── Tools ─────────────────────────────────────────────────────────────
  {
    slug: "perfanno-vscode",
    title: "PerfAnno VSCode",
    description:
      "A VSCode extension to annotate source code buffers with performance profiling data from perf.",
    category: "Tools",
    tags: ["JavaScript", "Extension"],
    date: "2024-05-30",
    github: "https://github.com/alexdalat/perfanno-vscode",
  },
  {
    slug: "notion-schedule",
    title: "Notion Schedule",
    description:
      "Automatically parses and imports schedules (e.g., from syllabi) into a Notion Assignments database.",
    category: "Tools",
    tags: ["Python", "API", "Automation"],
    date: "2023-08-30",
    github: "https://github.com/alexdalat/notion-schedule",
  },
  {
    slug: "ios-virtual-loc",
    title: "iOS Virtual Location",
    description:
      "Change the GPS location of an iOS 18 device on demand.",
    category: "Tools",
    tags: ["Python", "Automation"],
    date: "2024-10-28",
    github: "https://github.com/alexdalat/ios-virtual-loc",
  },
  {
    slug: "loc-tracker",
    title: "Location Tracker",
    description:
      "High-accuracy location data tracking and processing system.",
    category: "Tools",
    tags: ["Python", "Data"],
    date: "2025-09-27",
  },
  {
    slug: "video-journal-app",
    title: "Video Journal App",
    description:
      "A personal video journaling application for recording and organizing entries.",
    category: "Tools",
    tags: ["Python", "Web"],
    date: "2025-10-09",
  },
  {
    slug: "pdf-pentest",
    title: "PDF Pentest",
    description:
      "PDF pentesting toolkit for security analysis and vulnerability assessment.",
    category: "Tools",
    tags: ["Python", "Security"],
    date: "2025-10-09",
  },
  {
    slug: "eecs281-makefile",
    title: "EECS281 Makefile",
    description:
      "Custom Makefile with automatic CAEN performance data collection for C++ projects.",
    category: "Tools",
    tags: ["C++", "Automation"],
    date: "2024-06-24",
    github: "https://github.com/alexdalat/EECS281-Makefile",
  },
  {
    slug: "ticketmaster-events",
    title: "Ticketmaster Events",
    description:
      "Event discovery and tracking tool using the Ticketmaster API.",
    category: "Tools",
    tags: ["JavaScript", "API", "Web"],
    date: "2024-12-07",
  },

  // ─── Algorithms ────────────────────────────────────────────────────────
  {
    slug: "i-see-the-light",
    title: "I See the Light",
    description:
      "Processing high-accuracy, high-frequency location data to predict traffic light cycles.",
    category: "Algorithms",
    tags: ["Python", "Data"],
    date: "2025-10-05",
    github: "https://github.com/alexdalat/i-see-the-light",
  },
  {
    slug: "astar",
    title: "A* Pathfinding",
    description:
      "Browser-integrated informed search algorithm for pathfinding to a global node.",
    category: "Algorithms",
    tags: ["JavaScript", "Simulation"],
    date: "2020-06-12",
    github: "https://github.com/alexdalat/astar",
  },

  // ─── Finance ───────────────────────────────────────────────────────────
  {
    slug: "sports-arb-finder",
    title: "Sports Arbitrage Finder",
    description:
      "Automated system for detecting and analyzing sports betting arbitrage opportunities.",
    category: "Finance",
    tags: ["Python", "Trading", "Automation"],
    date: "2025-04-10",
    github: "https://github.com/alexdalat/sports-arb-finder",
  },
  {
    slug: "qlib-sentiment-analysis",
    title: "QLib Sentiment Analysis",
    description:
      "Quantitative trading strategy enhanced with NLP-based sentiment analysis.",
    category: "Finance",
    tags: ["Python", "Trading", "ML/AI"],
    date: "2025-12-04",
    github: "https://github.com/alexdalat/qlib-sentiment-analysis-zh",
  },
  {
    slug: "qlib-rl-trading",
    title: "QLib RL Trading",
    description:
      "Reinforcement learning-based trading strategies using QLib and live broker integration.",
    category: "Finance",
    tags: ["Python", "Trading", "RL"],
    date: "2025-08-03",
  },
  {
    slug: "first-aio",
    title: "GPU AIO Bot",
    description:
      "Automated purchasing bot built to combat scalper bots during the COVID GPU shortage crisis.",
    category: "Finance",
    tags: ["Python", "Automation"],
    date: "2021-09-08",
    github: "https://github.com/alexdalat/first-aio",
  },

  // ─── Extensions & Bots ────────────────────────────────────────────────
  {
    slug: "validator-v2",
    title: "Validator Bot v2",
    description:
      "An all-inclusive Discord assistant bot for supporting staff in user validation workflows.",
    category: "Extensions & Bots",
    tags: ["JavaScript", "Discord", "Automation"],
    date: "2024-07-06",
    github: "https://github.com/alexdalat/validator-v2",
  },
  {
    slug: "validator",
    title: "Validator Bot",
    description:
      "Discord bot centralized towards supporting staff at validating users.",
    category: "Extensions & Bots",
    tags: ["JavaScript", "Discord", "Automation"],
    date: "2020-08-20",
    github: "https://github.com/alexdalat/validator",
  },
  {
    slug: "msu-grades-ext",
    title: "MSU Grades Extension",
    description:
      "Browser extension for viewing MSU grade distributions.",
    category: "Extensions & Bots",
    tags: ["JavaScript", "Extension"],
    date: "2023-03-21",
    github: "https://github.com/alexdalat/msu-grades-ext",
  },
  {
    slug: "bedbotbug",
    title: "BedBotBug",
    description:
      "A Hypixel BedWars resource calculator bot for Discord.",
    category: "Extensions & Bots",
    tags: ["JavaScript", "Discord", "Gaming"],
    date: "2018-12-16",
    github: "https://github.com/alexdalat/BedBotBug",
  },
  {
    slug: "counter-bot",
    title: "Counter Bot",
    description: "A Discord bot that counts and tracks things.",
    category: "Extensions & Bots",
    tags: ["JavaScript", "Discord"],
    date: "2018-12-16",
    github: "https://github.com/alexdalat/Counter-Bot",
  },
  {
    slug: "founders-api",
    title: "Founders API",
    description:
      "An API connected to the Founders server hosting panel with companion JS library.",
    category: "Extensions & Bots",
    tags: ["JavaScript", "API"],
    date: "2019-09-14",
    github: "https://github.com/alexdalat/founders-api",
  },
  {
    slug: "ahk-scripts",
    title: "AHK Scripts",
    description:
      "Useful AutoHotkey auto-clicking scripts for AFKing in games.",
    category: "Extensions & Bots",
    tags: ["Automation"],
    date: "2021-09-08",
    github: "https://github.com/alexdalat/AHK-scripts",
  },

  // ─── Vision & Graphics ────────────────────────────────────────────────
  {
    slug: "cuda-tracer",
    title: "CUDA Path Tracer",
    description:
      "A path tracer that computes and renders entirely on the GPU using CUDA.",
    category: "Vision & Graphics",
    tags: ["C++", "Graphics"],
    date: "2020-04-18",
    github: "https://github.com/alexdalat/cudaTracer",
  },
  {
    slug: "pathtracer-cmake",
    title: "Path Tracer (C++)",
    description:
      "A C++ path tracer with CMake build system and advanced rendering features.",
    category: "Vision & Graphics",
    tags: ["C++", "Graphics"],
    date: "2020-12-25",
    github: "https://github.com/alexdalat/pathtracer-cmake",
  },
  {
    slug: "path-tracer-js",
    title: "Path Tracer (JS)",
    description: "A path tracer implemented in JavaScript for the browser.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics"],
    date: "2020-01-12",
    github: "https://github.com/alexdalat/path-tracer",
  },
  {
    slug: "day-tracer",
    title: "Day Tracer",
    description:
      "A path tracer written in a couple hours to demonstrate understanding of the topic.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics"],
    date: "2021-11-23",
    github: "https://github.com/alexdalat/day-tracer",
  },
  {
    slug: "atrous",
    title: "À-Trous Denoiser",
    description:
      "An à-trous based denoising filter built for a personal path tracer.",
    category: "Vision & Graphics",
    tags: ["C++", "Graphics"],
    date: "2021-01-15",
    github: "https://github.com/alexdalat/atrous",
  },
  {
    slug: "contour-js",
    title: "Contour.js",
    description:
      "Contour high-contrast images using a simple, interactive webpage.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics"],
    date: "2021-11-23",
    github: "https://github.com/alexdalat/contour-js",
  },
  {
    slug: "opencv2-practice",
    title: "OpenCV2 Torso Detection",
    description:
      "Real-time upper torso detection using a webcam with OpenCV.",
    category: "Vision & Graphics",
    tags: ["Python", "Computer Vision"],
    date: "2021-11-23",
    github: "https://github.com/alexdalat/OpenCV2-Practice2",
  },
  {
    slug: "opengl-terrain",
    title: "OpenGL Terrain",
    description: "GPU-accelerated procedural terrain generation using OpenGL.",
    category: "Vision & Graphics",
    tags: ["C++", "Graphics", "Simulation"],
    date: "2020-05-18",
    github: "https://github.com/alexdalat/OpenGLTerrain",
  },
  {
    slug: "webgl-terrain",
    title: "WebGL Terrain",
    description:
      "Block-based terrain generation rendered in the browser using WebGL.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics", "Simulation"],
    date: "2020-05-12",
    github: "https://github.com/alexdalat/WebGLTerrain",
  },
  {
    slug: "raycaster",
    title: "Raycaster",
    description: "A simple ray-caster rendered using HTML5 canvas.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics"],
    date: "2019-06-08",
    github: "https://github.com/alexdalat/raycaster",
  },
  {
    slug: "galaxyjs",
    title: "Galaxy Simulator",
    description: "An interactive galaxy simulation in the browser.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2020-06-22",
    github: "https://github.com/alexdalat/galaxyjs",
  },
  {
    slug: "glgrav",
    title: "3D Gravity Simulation",
    description: "N-body gravity simulation rendered in a 3D environment.",
    category: "Vision & Graphics",
    tags: ["C++", "Graphics", "Simulation"],
    date: "2020-05-27",
    github: "https://github.com/alexdalat/glGrav",
  },
  {
    slug: "flock",
    title: "Flock Simulator",
    description:
      "A boid-based flock simulation demonstrating emergent behavior.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2020-02-01",
    github: "https://github.com/alexdalat/flock",
  },
  {
    slug: "swarm",
    title: "Swarm Robotics",
    description:
      "Global robotic organization achieved through local boid interactions.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2020-02-02",
    github: "https://github.com/alexdalat/swarm",
  },
  {
    slug: "perlin-waves",
    title: "Perlin Waves",
    description:
      "A mesmerizing Perlin noise visualization intended to please the eye.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics"],
    date: "2021-01-31",
    github: "https://github.com/alexdalat/perlin_waves",
  },
  {
    slug: "threejs",
    title: "Three.js Experiments",
    description: "First experiments with Three.js and 3D in the browser.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics"],
    date: "2019-06-08",
    github: "https://github.com/alexdalat/threejs",
  },
  {
    slug: "jsgravitation",
    title: "JS Gravitation",
    description:
      "Newton's law of universal gravitation visualized using symplectic integration.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2020-05-23",
    github: "https://github.com/alexdalat/jsgravitation",
  },
  {
    slug: "gol-py",
    title: "Game of Life",
    description: "Conway's Game of Life implementation in Python.",
    category: "Vision & Graphics",
    tags: ["Python", "Simulation"],
    date: "2021-03-20",
    github: "https://github.com/alexdalat/gol_py",
  },
  {
    slug: "map-generator",
    title: "Biome Map Generator",
    description:
      "A procedural biome world generator using Simplex noise.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2019-06-08",
    github: "https://github.com/alexdalat/map-generator",
  },

  // ─── Websites ──────────────────────────────────────────────────────────
  {
    slug: "msugrades",
    title: "MSU Grades",
    description:
      "A website for exploring MSU course grade distributions.",
    category: "Websites",
    tags: ["JavaScript", "Web", "Data"],
    date: "2023-03-12",
    github: "https://github.com/alexdalat/msugrades",
  },
  {
    slug: "hytalehub",
    title: "HytaleHub",
    description:
      "A community website for a server of the Hytale game.",
    category: "Websites",
    tags: ["JavaScript", "Web"],
    date: "2021-06-24",
    github: "https://github.com/alexdalat/hytalehub",
  },
  {
    slug: "chat-rooms",
    title: "Chat Rooms",
    description: "A bare, simple real-time chat room application.",
    category: "Websites",
    tags: ["JavaScript", "Web"],
    date: "2019-06-08",
    github: "https://github.com/alexdalat/chat-rooms",
  },
  {
    slug: "mcpanel",
    title: "MC Panel",
    description:
      "An all-in-one PHP Minecraft server management panel.",
    category: "Websites",
    tags: ["Web", "Gaming"],
    date: "2020-05-15",
    github: "https://github.com/alexdalat/mcpanel",
  },
  {
    slug: "cafe-network",
    title: "Café Network",
    description: "A café-themed web networking application.",
    category: "Websites",
    tags: ["JavaScript", "Web"],
    date: "2025-11-13",
  },
  {
    slug: "xeladarocks",
    title: "Personal Website v1",
    description: "First personal portfolio website.",
    category: "Websites",
    tags: ["JavaScript", "Web"],
    date: "2020-05-13",
    github: "https://github.com/alexdalat/xeladarocks.github.io",
  },
  {
    slug: "madein",
    title: "Made In",
    description: "A web project exploring origins and creation.",
    category: "Websites",
    tags: ["JavaScript", "Web"],
    date: "2023-08-26",
    github: "https://github.com/alexdalat/madein",
  },
];

export const categories: Category[] = [
  "ML",
  "Games",
  "Tools",
  "Algorithms",
  "Finance",
  "Extensions & Bots",
  "Vision & Graphics",
  "Websites",
];

export function getProjectsByCategory(cat: Category): Project[] {
  return projects.filter((p) => p.category === cat);
}

export interface TagWithCount {
  tag: string;
  count: number;
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getAllTagsWithCounts(): TagWithCount[] {
  const counts = new Map<string, number>();
  projects.forEach((p) =>
    p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1))
  );
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
