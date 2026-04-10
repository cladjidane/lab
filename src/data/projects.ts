export type MediaType =
  | "screenshot"
  | "gif"
  | "video"
  | "split"
  | "mockup"
  | "diagram";

export interface ProjectMedia {
  type: MediaType;
  src: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  descriptionFr: string;
  about: string;
  tags: string[];
  techStack: string[];
  tagColor: "cyan" | "amber" | "coral";
  tier: 1 | 2;
  tryUrl?: string;
  tryLabel?: string;
  githubUrl?: string;
  thumbnail?: string;
  media?: ProjectMedia[];
}

export interface ProductionCase {
  title: string;
  description: string;
  result: string;
  techStack: string[];
}

export const productionCases: ProductionCase[] = [
  {
    title: "Filiere AOP agricole",
    description:
      "Un syndicat de producteurs gerait ses declarations sur papier. Application web complete avec agent IA conversationnel integre. Les producteurs declarent, l'agent les assiste.",
    result:
      "Temps de saisie divise par 5. En production depuis 3 ans, agent IA depuis janvier 2026.",
    techStack: ["Next.js", "Prisma", "Mistral", "PostgreSQL"],
  },
  {
    title: "Prospection commerciale SaaS",
    description:
      "Un funnel complet pilote par IA : CRM email, landing personnalisee par prospect, tenant de demo auto-provisionne en 1.6 seconde avec SSL wildcard.",
    result:
      "76 contacts qualifies, zero intervention manuelle entre l'envoi et la demo.",
    techStack: ["Astro", "Express", "SQLite", "OVH API"],
  },
  {
    title: "Cooperative bio, 20 ans de donnees",
    description:
      "Systeme de bons de livraison en production depuis 20 ans, migre vers un socle commun multi-filieres. Premiere instance d'une plateforme pensee pour accueillir d'autres organisations agricoles.",
    result: "Socle mutualisable valide sur deux filieres pilotes.",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

export const projects: Project[] = [
  // ===================== TIER 1 =====================
  {
    slug: "pai",
    name: "PAI",
    descriptionFr:
      "Donner une memoire a l'IA. 490 sessions, le contexte de 15 projets, et un systeme qui apprend a travailler avec moi.",
    about:
      "Les outils IA oublient tout entre deux conversations. J'ai construit une infrastructure qui retient : decisions passees, contexte projet, preferences, erreurs deja commises. Recherche semantique multi-angles, resolution d'alias, filtrage temporel. Chaque session enrichit le systeme. Au bout de 490 sessions, l'IA ne repart plus de zero.",
    tags: ["AI", "Infrastructure"],
    techStack: ["TypeScript", "Semantic Search", "MCP", "SQLite", "Embedding"],
    tagColor: "coral",
    tier: 1,
    thumbnail: "/images/pai-graph.gif",
    media: [
      { type: "gif", src: "/images/pai-graph.gif", caption: "490 sessions, 15 projets, un reseau de connaissances qui se construit tout seul" },
    ],
  },
  {
    slug: "jaja",
    name: "Jaja",
    descriptionFr:
      "Un assistant IA qui agit, pas qui cause. Il parle, il ecoute, il dispatch des agents, il rend compte.",
    about:
      "Les assistants vocaux repondent a des questions. Jaja execute des taches. Tu lui parles, il dispatch des agents Claude en arriere-plan, surveille l'avancement, te notifie quand c'est fait. Mission control visuel, budget configurable, reconnexion automatique. Il s'appuie sur la PAI pour le contexte, mais le cockpit est decouple : demain il pourrait piloter un autre systeme.",
    tags: ["AI", "Voice"],
    techStack: ["Electron", "Gemini Live", "Claude API", "WebSocket", "MCP"],
    tagColor: "cyan",
    tier: 1,
    thumbnail: "/images/jaja-thumb.webp",
    media: [
      { type: "screenshot", src: "/images/jaja-mission-control.webp", caption: "Mission control : dispatches en cours, timeline, couts" },
      { type: "screenshot", src: "/images/jaja-voice.webp", caption: "L'oscillateur vocal et le chat en temps reel" },
    ],
  },
  {
    slug: "gitttte",
    name: "GITTTTE",
    descriptionFr:
      "Croiser des donnees eparpillees pour prendre de meilleures decisions. Transactions, tourisme, demographie, tout sur une carte.",
    about:
      "Je cherchais ou investir dans un gite. Les donnees existaient, eparpillees dans des fichiers publics que personne ne croise. J'ai tout mis sur une carte avec des curseurs pour ponderer les criteres. Tu bouges un slider, la heatmap change. Ca marche pour l'immobilier, mais le principe s'applique a n'importe quel sujet ou les donnees sont la sans que personne ne les regarde ensemble.",
    tags: ["Maps", "Data"],
    techStack: ["Next.js 16", "Leaflet", "SQLite", "Recharts", "Radix UI"],
    tagColor: "cyan",
    tier: 1,
    tryUrl: "https://immo.koality.fr",
    tryLabel: "Explorer",
    thumbnail: "/images/gitttte-thumb.webp",
    media: [
      { type: "screenshot", src: "/images/gitttte-heatmap.webp", caption: "La heatmap et les sliders de ponderation" },
      { type: "gif", src: "/images/gitttte-slider.gif", caption: "Un slider bouge, la carte reagit" },
    ],
  },
  {
    slug: "map-creator",
    name: "Map Creator",
    descriptionFr:
      "Visualiser des donnees autrement. Les memes donnees geographiques rendues comme une carte du XIXe racontent une toute autre histoire.",
    about:
      "Je voulais voir ma ville sur une carte d'Etat-Major du XIXe. Les donnees OSM sont les memes, mais le rendu change tout. Villages proceduraux, routes stylisees, un CNN pour classifier les elements historiques. Le sujet c'est pas la cartographie, c'est ce qui se passe quand on presente les memes donnees differemment.",
    tags: ["Maps", "AI"],
    techStack: ["React", "MapLibre", "Overpass API", "MobileNetV2", "Vite"],
    tagColor: "amber",
    tier: 1,
    thumbnail: "/images/map-creator-thumb.webp",
    media: [
      { type: "split", src: "/images/map-creator-split.webp", caption: "A gauche la carte moderne, a droite le rendu XIXe. Memes donnees." },
    ],
  },
  {
    slug: "jeofun",
    name: "JeoFun",
    descriptionFr:
      "Rendre un contenu vivant sur le terrain. L'IA genere la narration, le GPS declenche l'experience. 14 mois de dev en solo.",
    about:
      "Le contenu existe souvent deja, textes, infos, histoires, mais il reste plat. Ici l'IA le transforme en parcours de balade geolocalisees avec narration, quiz et etapes. Tourisme, formation, evenementiel, le meme principe : contextualiser l'info dans l'espace. Mon plus gros projet perso, construit de bout en bout.",
    tags: ["AI", "Mobile"],
    techStack: ["Next.js 15", "Prisma", "Expo", "Claude API"],
    tagColor: "coral",
    tier: 1,
    thumbnail: "/images/jeofun-thumb.webp",
    media: [
      { type: "mockup", src: "/images/jeofun-mobile.webp", caption: "Le parcours geolocaise sur mobile : carte, etapes, narration IA" },
      { type: "screenshot", src: "/images/jeofun-admin.webp", caption: "Le back-office de creation de parcours" },
    ],
  },
  {
    slug: "epicycle-draw",
    name: "Epicycle Draw",
    descriptionFr:
      "Rendre un concept complexe accessible. Les series de Fourier, personne ne comprend. Avec le bon format, tout le monde dessine et devine.",
    about:
      "Les series de Fourier, c'est abstrait. J'ai voulu voir si on pouvait les rendre intuitives sans simplifier la math. Tu dessines a main levee, l'algorithme decompose ton trait en cercles, et ils le reconstruisent sous tes yeux. C'est devenu un jeu de devinettes multijoueur avec des workspaces.",
    tags: ["Math", "Game"],
    techStack: ["Canvas API", "DFT", "p5.js", "FastAPI", "SQLite"],
    tagColor: "amber",
    tier: 1,
    tryUrl: "https://epicycle.laboweb.pw",
    tryLabel: "Essayer",
    thumbnail: "/images/epicycle-draw-hero.gif",
    media: [
      { type: "video", src: "/videos/epicycle-draw.mp4", caption: "Les cercles reconstruisent le dessin trait par trait" },
    ],
  },
  {
    slug: "dictaphone",
    name: "Dictaphone",
    descriptionFr:
      "Capturer la connaissance informelle. Tu parles, c'est transcrit, structure et retrouvable. Tout reste en local.",
    about:
      "Dans toutes les boites, le savoir est dans la tete des gens, dans des conversations, des messages vocaux. Rien n'est structure. Ici, Whisper transcrit en local, un double graphe de connaissances organise le tout, et la recherche fonctionne toujours meme si un moteur tombe. Zero cloud, zero dependance.",
    tags: ["AI", "Local"],
    techStack: [
      "Python",
      "FastAPI",
      "Whisper",
      "LightRAG",
      "Graphiti",
      "SQLite",
    ],
    tagColor: "coral",
    tier: 1,
    thumbnail: "/images/dictaphone-thumb.webp",
    media: [
      { type: "screenshot", src: "/images/dictaphone-split.webp", caption: "A gauche la voix, a droite le savoir structure" },
    ],
  },
  // ===================== TIER 2 =====================
  {
    slug: "karousel",
    name: "Karousel",
    descriptionFr:
      "Faire produire du contenu fiable par l'IA. Le LLM generait des slides bancales. J'ai repense l'architecture pour que ca marche vraiment.",
    about:
      "Demander a un LLM de generer du JSON pour des slides, ca casse une fois sur deux. J'ai intercale une couche de representation intermediaire entre le LLM et le rendu. Le modele decrit l'intention, le compilateur fabrique les slides. Le meme principe s'applique partout ou on veut de l'IA qui produit du contenu structure sans bricolage.",
    tags: ["AI", "Content"],
    techStack: ["Next.js", "Konva", "Claude API", "DeepSeek"],
    tagColor: "cyan",
    tier: 2,
    tryUrl: "https://carousel.laboweb.pw",
    tryLabel: "Essayer",
    media: [
      { type: "video", src: "/videos/karousel.mp4", caption: "Generation d'un carousel LinkedIn en temps reel" },
    ],
  },
  {
    slug: "gif-generator",
    name: "GIF Generator",
    descriptionFr:
      "Convertir une video en GIF sans rien installer et sans uploader nulle part. Tout tourne dans le navigateur.",
    about:
      "Tu drop une video, tu ajustes les parametres, tu recuperes un GIF optimise. Tout se passe dans le navigateur avec ffmpeg.wasm. Rien ne part sur un serveur. C'est bete, mais c'est le genre de truc qu'on cherche 10 minutes a chaque fois.",
    tags: ["Tools", "Media"],
    techStack: ["ffmpeg.wasm", "React", "Web Workers"],
    tagColor: "cyan",
    tier: 2,
    thumbnail: "/images/gif-generator-thumb.webp",
  },
  {
    slug: "skeletonify",
    name: "Skeletonify",
    descriptionFr:
      "Anonymiser des screenshots intelligemment. L'IA comprend ce qui est sensible, pas juste ou flouter.",
    about:
      "Flouter c'est facile. Comprendre ce qui est sensible, c'est un probleme de langage. 4 agents IA orchestres analysent le contenu, detectent les donnees sensibles via OCR bilingue, et les remplacent par des skeleton loaders. Le resultat est propre, pas juste floute.",
    tags: ["AI", "Privacy"],
    techStack: ["Node.js", "Gemini API", "Tesseract.js", "Sharp"],
    tagColor: "cyan",
    tier: 2,
    media: [
      { type: "video", src: "/videos/skeletonify.mp4", caption: "4 agents IA qui anonymisent une capture en temps reel" },
    ],
  },
  {
    slug: "kdoc",
    name: "K-Doc",
    descriptionFr:
      "Donner de la memoire a ses projets. Tu stockes le contexte, tu le retrouves. CLI, GUI, serveur MCP.",
    about:
      "Sur un projet long, le contexte se perd. Les decisions, les raisons, les trucs qu'on a essayes. K-Doc indexe tout ca en vectoriel et le rend cherchable. CLI pour les devs, GUI Electron pour les autres, serveur MCP pour les agents IA.",
    tags: ["AI", "Productivity"],
    techStack: ["Electron", "Vector DB", "MCP", "TypeScript"],
    tagColor: "amber",
    tier: 2,
    thumbnail: "/images/kdoc-thumb.webp",
  },
  {
    slug: "claude-traffic-viewer",
    name: "Claude Traffic Viewer",
    descriptionFr:
      "Comprendre ce que font les IA sous le capot. Intercepter et analyser le trafic entre les CLI IA et leurs API.",
    about:
      "Claude Code, Gemini CLI, Codex CLI, on les utilise sans voir ce qu'ils envoient. Ce proxy intercepte tout et l'affiche dans un dashboard temps reel. System prompts, outils appeles, tendances de session. Pour comprendre comment ces outils fonctionnent vraiment.",
    tags: ["AI", "DevTools"],
    techStack: ["mitmproxy", "React", "WebSocket", "Python"],
    tagColor: "cyan",
    tier: 2,
    media: [
      { type: "video", src: "/videos/claude-traffic-viewer.mp4", caption: "Le dashboard en temps reel : chaque requete API interceptee et analysee" },
    ],
  },
  {
    slug: "prya",
    name: "Prya (Koality PM)",
    descriptionFr:
      "Automatiser la gestion de projet avec des agents IA. Un email arrive, une tache se cree, le kanban se met a jour.",
    about:
      "Les outils de gestion de projet, tout le monde les remplit a la main. Ici des agents IA parsent les emails, creent les taches, mettent a jour le kanban. Utilise en interne chez Koality pour voir jusqu'ou on peut automatiser sans perdre le controle.",
    tags: ["AI", "Productivity"],
    techStack: ["Next.js", "Bun", "Prisma", "Claude API"],
    tagColor: "amber",
    tier: 2,
    thumbnail: "/images/prya-thumb.webp",
  },
  {
    slug: "vokable",
    name: "Vokable",
    descriptionFr:
      "Transformer des notes vocales en contenu publiable. Tu parles, l'IA structure et redige.",
    about:
      "Tu as une idee, tu la dictes, l'IA la transcrit, la structure et la transforme en contenu (posts LinkedIn, briefs, notes). Le predecesseur de Dictaphone, avec une approche cloud. L'idee de depart : reduire la friction entre penser et publier.",
    tags: ["AI", "Creative"],
    techStack: ["Electron", "React", "OpenAI Whisper", "RAG"],
    tagColor: "coral",
    tier: 2,
    thumbnail: "/images/vokable-thumb.webp",
  },
  {
    slug: "code-spotlight",
    name: "Code Spotlight",
    descriptionFr:
      "Presenter du code de facon lisible. Spotlight interactif, generation IA, workspaces pour organiser ses demos.",
    about:
      "Montrer du code a quelqu'un, c'est souvent un ecran partage avec un IDE ouvert. Code Spotlight met en scene le code avec un spotlight interactif, de la generation IA pour les explications, des workspaces et des themes. Pour les demos, les formations, les presentations.",
    tags: ["DevTools", "Presentation"],
    techStack: ["Next.js", "Prisma", "Markdown", "NextAuth"],
    tagColor: "amber",
    tier: 2,
    thumbnail: "/images/code-spotlight-thumb.webp",
  },
];
