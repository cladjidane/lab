// Shared data: the exact taxonomy from the current modal.
const TAG_GROUPS = [
  {
    id: 'domaines',
    title: 'Domaines',
    tags: ['IA générative', 'Apps métier', 'Voice & audio', 'Cartographie', 'Creative tech'],
  },
  {
    id: 'techniques',
    title: 'Techniques IA',
    tags: [
      'RAG', 'Agents', 'Multi-agent', 'Vocal', 'Speech-to-text', 'Recherche sémantique',
      'Knowledge graph', 'MCP', 'Embeddings', 'OCR', 'Multi-LLM', 'Structured output', 'Local-first',
      'Image processing', 'Fine-tuning', 'Computer vision', 'Scraping',
    ],
  },
  {
    id: 'modeles',
    title: 'Modèles',
    tags: ['Claude', 'GPT', 'Mistral', 'Gemini', 'Whisper', 'DeepSeek'],
  },
  {
    id: 'stack',
    title: 'Stack technique',
    tags: ['React', 'Next.js', 'TypeScript', 'Python', 'Electron', 'PostgreSQL', 'MapLibre', 'FastAPI', 'Node.js', 'Mobile'],
  },
  {
    id: 'secteurs',
    title: 'Secteurs',
    tags: ['SaaS B2B', 'App métier', 'Multi-tenant', 'Cartographie', 'DevTool', 'EdTech', 'Privacy', 'Content', 'Creative', 'Infra IA', 'Maths'],
  },
];

window.TAG_GROUPS = TAG_GROUPS;
