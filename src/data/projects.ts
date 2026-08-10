export type Category =
  | "Websites"
  | "ML"
  | "Vision & Graphics"
  | "Tools"
  | "Algorithms"
  | "Games"
;

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
    tags: ["Python", "ML/AI", "LLM"],
    date: "2025-08-15",
    github: "https://github.com/alexdalat/project-replica",
  },
  {
    slug: "ai-autocomplete",
    title: "AI Autocomplete Extension",
    description:
      "An intelligent autocomplete system for the browser, powered by machine learning.",
    category: "ML",
    tags: ["Python", "Extension", "LLM"],
    date: "2025-10-25",
    github: "https://github.com/alexdalat/ai-autocomplete",
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
    slug: "raytracer-denoiser",
    title: "Raytracer Denoiser",
    description:
      "ML-based denoising of ray traced scenes to replicate high sample counts.",
    category: "ML",
    tags: ["Python", "ML/AI", "Graphics"],
    date: "2023-02-15",
    github: "https://github.com/alexdalat/raytracer-denoiser",
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

  // ─── Games ─────────────────────────────────────────────────────────────
  {
    slug: "web-conquerors",
    title: "Web Conquerors",
    description:
      "A multiplayer real-time strategy game with territory conquest mechanics.",
    category: "Games",
    tags: ["JavaScript", "Web", "Games"],
    date: "2025-12-13",
    github: "https://github.com/alexdalat/conqueror.io",
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
    tags: ["Python", "Automation"],
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
    slug: "validator-v2",
    title: "Validator Bot",
    description:
      "A Discord assistant bot for supporting staff in user marketplace artist verification.",
    category: "Tools",
    tags: ["JavaScript", "Automation"],
    date: "2024-07-06",
    github: "https://github.com/alexdalat/validator-v2",
  },

  // ─── Algorithms ────────────────────────────────────────────────────────
  {
    slug: "see-the-light",
    title: "See the Light",
    description:
      "Processing high-accuracy, high-frequency location data to predict traffic light cycles.",
    category: "Algorithms",
    tags: ["Python"],
    date: "2025-10-05",
  },
  {
    slug: "astar",
    title: "A* Pathfinding",
    description:
      "Browser-integrated informed search algorithm for pathfinding to a global node.",
    category: "Algorithms",
    tags: ["JavaScript", "Simulation"],
    date: "2020-06-12",
    github: "https://alexdalat.github.io/astar/",
  },

  // ─── Vision & Graphics ────────────────────────────────────────────────
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
    github: "https://alexdalat.github.io/path-tracer/",
  },
  {
    slug: "day-tracer",
    title: "Day Tracer",
    description:
      "A path tracer written in a day to demonstrate understanding of the topic.",
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
    slug: "opencv2-practice",
    title: "OpenCV2 Torso Detection",
    description:
      "Real-time upper torso detection via Haar Cascade with OpenCV.",
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
    slug: "galaxyjs",
    title: "Galaxy Simulator",
    description: "An interactive galaxy simulation in the browser.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2020-06-22",
    github: "https://alexdalat.github.io/galaxyjs/",
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
    slug: "swarm",
    title: "Swarm Robotics",
    description:
      "Global robotic organization achieved through local boid interactions.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2020-02-02",
    github: "https://alexdalat.github.io/swarm/",
  },
  {
    slug: "perlin-waves",
    title: "Perlin Waves",
    description:
      "A Perlin noise visualization to please the eye.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Graphics"],
    date: "2021-01-31",
    github: "https://github.com/alexdalat/perlin_waves",
  },
  {
    slug: "jsgravitation",
    title: "JS Gravitation",
    description:
      "Newton's law of universal gravitation with symplectic integration.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2020-05-23",
    github: "https://github.com/alexdalat/jsgravitation",
  },
  {
    slug: "map-generator",
    title: "Biome Map Generator",
    description:
      "A procedural biome world generator using Simplex noise.",
    category: "Vision & Graphics",
    tags: ["JavaScript", "Simulation"],
    date: "2019-06-08",
    github: "https://alexdalat.github.io/map-generator/",
  },

  // ─── Websites ──────────────────────────────────────────────────────────
  {
    slug: "mcpanel",
    title: "MC Panel",
    description:
      "An all-in-one Minecraft server management panel.",
    category: "Websites",
    tags: ["Web", "Games"],
    date: "2020-05-15",
    github: "https://github.com/alexdalat/mcpanel",
  },
  {
    slug: "cafe-chronicles",
    title: "Café Chronicles",
    description: "Discover, rate, and share your perfect local coffee shop.",
    category: "Websites",
    tags: ["JavaScript", "Web"],
    date: "2025-11-13",
    github: "https://cafechronicles.net",
  },
];

export const categories: Category[] = [
  "ML",
  "Websites",
  "Vision & Graphics",
  "Tools",
  "Algorithms",
  "Games",
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
