export type SkillCategory = "techniques" | "modeles" | "stack" | "domaines";

export interface SkillDef {
  id: string;
  label: string;
  category: SkillCategory;
}

export interface PersonaPreset {
  id: string;
  label: string;
  tagline: string;
  skills: string[];
}

export const SKILL_CATEGORIES: Record<SkillCategory, string> = {
  techniques: "Techniques IA",
  modeles: "Modèles",
  stack: "Stack technique",
  domaines: "Secteurs",
};

export const SKILLS: SkillDef[] = [
  // Techniques IA
  { id: "rag", label: "RAG", category: "techniques" },
  { id: "agents", label: "Agents", category: "techniques" },
  { id: "multi-agent", label: "Multi-agent", category: "techniques" },
  { id: "vocal", label: "Vocal", category: "techniques" },
  { id: "speech-to-text", label: "Speech-to-text", category: "techniques" },
  { id: "semantic-search", label: "Recherche sémantique", category: "techniques" },
  { id: "knowledge-graph", label: "Knowledge graph", category: "techniques" },
  { id: "mcp", label: "MCP", category: "techniques" },
  { id: "embedding", label: "Embeddings", category: "techniques" },
  { id: "ocr", label: "OCR", category: "techniques" },
  { id: "multi-llm", label: "Multi-LLM", category: "techniques" },
  { id: "structured-output", label: "Structured output", category: "techniques" },
  { id: "local-first", label: "Local-first", category: "techniques" },
  { id: "image-processing", label: "Image processing", category: "techniques" },
  { id: "fine-tuning", label: "Fine-tuning", category: "techniques" },
  { id: "computer-vision", label: "Computer vision", category: "techniques" },
  { id: "scraping", label: "Scraping", category: "techniques" },

  // Modèles
  { id: "claude", label: "Claude", category: "modeles" },
  { id: "gpt", label: "GPT", category: "modeles" },
  { id: "mistral", label: "Mistral", category: "modeles" },
  { id: "gemini", label: "Gemini", category: "modeles" },
  { id: "whisper", label: "Whisper", category: "modeles" },
  { id: "deepseek", label: "DeepSeek", category: "modeles" },

  // Stack
  { id: "react", label: "React", category: "stack" },
  { id: "nextjs", label: "Next.js", category: "stack" },
  { id: "typescript", label: "TypeScript", category: "stack" },
  { id: "python", label: "Python", category: "stack" },
  { id: "electron", label: "Electron", category: "stack" },
  { id: "postgresql", label: "PostgreSQL", category: "stack" },
  { id: "maplibre", label: "MapLibre", category: "stack" },
  { id: "fastapi", label: "FastAPI", category: "stack" },
  { id: "nodejs", label: "Node.js", category: "stack" },
  { id: "mobile", label: "Mobile", category: "stack" },

  // Domaines
  { id: "saas-b2b", label: "SaaS B2B", category: "domaines" },
  { id: "metier", label: "App métier", category: "domaines" },
  { id: "multi-tenant", label: "Multi-tenant", category: "domaines" },
  { id: "cartographie", label: "Cartographie", category: "domaines" },
  { id: "devtool", label: "DevTool", category: "domaines" },
  { id: "edtech", label: "EdTech", category: "domaines" },
  { id: "privacy", label: "Privacy", category: "domaines" },
  { id: "content", label: "Content", category: "domaines" },
  { id: "creative", label: "Creative", category: "domaines" },
  { id: "infrastructure-ai", label: "Infra IA", category: "domaines" },
  { id: "maths", label: "Maths", category: "domaines" },
];

export const PERSONA_PRESETS: PersonaPreset[] = [
  {
    id: "ia-gen",
    label: "IA générative",
    tagline: "RAG, agents, multi-LLM",
    skills: ["rag", "agents", "multi-agent", "multi-llm"],
  },
  {
    id: "apps-metier",
    label: "Apps métier",
    tagline: "SaaS B2B, multi-tenant, cartographie",
    skills: ["saas-b2b", "metier", "multi-tenant", "cartographie"],
  },
  {
    id: "voice-audio",
    label: "Voice & audio",
    tagline: "Vocal, temps réel, transcription",
    skills: ["vocal", "speech-to-text", "whisper"],
  },
  {
    id: "cartographie",
    label: "Cartographie",
    tagline: "MapLibre, géo-données, interactif",
    skills: ["cartographie", "maplibre"],
  },
  {
    id: "creative",
    label: "Creative tech",
    tagline: "Viz, art génératif, expérimentation",
    skills: ["creative", "content", "image-processing", "maths"],
  },
];

export const SKILLS_BY_ID: Record<string, SkillDef> = Object.fromEntries(
  SKILLS.map((s) => [s.id, s]),
);

export const SKILLS_BY_CATEGORY: Record<SkillCategory, SkillDef[]> = SKILLS.reduce(
  (acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  },
  {} as Record<SkillCategory, SkillDef[]>,
);
