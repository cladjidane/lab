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
  poster?: string;
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

export const productionCases: ProductionCase[] = [];

export const projects: Project[] = [
  // ===================== STARS (3) =====================
  {
    slug: "pai",
    name: "PAI",
    descriptionFr:
      "Donner une mémoire à l'IA. Embeddings, recherche sémantique et serveur MCP pour indexer plus de 1500 sessions et le contexte de 50+ projets.",
    about:
      "Les outils IA oublient tout entre deux conversations. Répéter le contexte, réexpliquer les décisions, reperdre du temps. **PAI apporte une mémoire persistante à la relation de travail.**\n\n## Ce que le système mémorise\n\nDécisions passées, contexte projet, préférences de travail, erreurs déjà commises, conventions de code. Chaque session enrichit la base et devient immédiatement interrogeable par la suivante.\n\n## Comment la recherche fonctionne\n\nRecherche sémantique multi-angles avec fusion RRF, résolution d'alias (un projet nommé **aop** devient automatiquement **oignons-roscoff**), filtrage temporel pour retrouver ce qui a été dit **hier**, **la semaine dernière** ou **le mois dernier**.\n\n## État actuel\n\nAprès plus de **1500 sessions** réparties sur **50+ projets** et **12 000 faits** indexés, l'IA ne repart plus de zéro. Elle connaît le rôle de son interlocuteur, l'état d'avancement en cours, les décisions précédentes et leurs motifs.",
    tags: ["AI", "Infrastructure"],
    techStack: ["TypeScript", "Semantic Search", "MCP", "SQLite", "Embedding"],
    tagColor: "cyan",
    tier: 1,
    thumbnail: "/images/pai-graph.gif",
    media: [
      { type: "gif", src: "/images/pai-graph.gif", caption: "1500+ sessions, 50+ projets, un réseau de connaissances qui se construit seul" },
      { type: "screenshot", src: "/images/pai4.png", caption: "Dashboard sessions : 1474 sessions, qualité, santé mémoire, activité" },
      { type: "screenshot", src: "/images/pai3.png", caption: "Efficacité de la mémoire : score 76, couverture 69.9%, heat map des faits" },
      { type: "screenshot", src: "/images/pai2.png", caption: "Gestion des projets : attribution des sessions, détection des orphelins" },
      { type: "screenshot", src: "/images/pai1.png", caption: "Recaps audio : récapitulatifs générés par projet, écoute et scripts" },
    ],
  },
  {
    slug: "jaja",
    name: "Jaja",
    descriptionFr:
      "Un assistant IA qui agit, pas qui cause. Voix bidirectionnelle via Gemini Live, orchestration d'agents spécialisés via MCP, tout en temps réel.",
    about:
      "Les assistants vocaux répondent à des questions. **Jaja exécute des tâches.** Dialogue vocal en façade, agents Claude dispatchés en arrière-plan, compte rendu à la fin.\n\n## Le cockpit\n\nMission control visuel avec les dispatches en cours, la timeline, les coûts en temps réel. Budget configurable par session, reconnexion automatique en cas de coupure, chat texte en parallèle de la voix.\n\n## L'architecture\n\nL'oreille et la voix passent par **Gemini Live** (reconnaissance et synthèse temps réel), les mains sont des agents **Claude** dispatchés en parallèle via l'API et pilotés par MCP. Le contexte long terme vient de la PAI, mais le cockpit reste découplé.\n\n## Pourquoi c'est différent\n\nDemain, Jaja pourrait piloter un autre système que Claude. Le pattern n'est pas **un assistant**, c'est **un poste de pilotage pour n'importe quelle flotte d'agents**.",
    tags: ["AI", "Voice"],
    techStack: ["Electron", "Gemini Live", "Claude API", "WebSocket", "MCP"],
    tagColor: "coral",
    tier: 1,
    thumbnail: "/images/jaja-thumb.webp",
    media: [
      { type: "video", src: "/videos/jaja.mp4", caption: "Jaja en action : dialogue vocal, dispatch d'agents, mission control" },
    ],
  },
  {
    slug: "oignon-roscoff-aop",
    name: "Oignon de Roscoff AOP",
    descriptionFr:
      "Process administratif papier transformé par l'IA. Parcellaire cartographique MapLibre, agent conversationnel Mistral, déclarations réglementaires automatisées. -80% sur la charge de saisie.",
    about:
      "Le Syndicat des Oignons de Roscoff gère une AOP de **100 à 150 producteurs** répartis sur **27 communes du Finistère Nord**. Avant l'application, les déclarations obligatoires se faisaient sur papier, et chaque producteur ressaisissait chaque année des informations qui ne changeaient pas d'un millimètre.\n\n## Ce qui a été numérisé\n\nLes six déclarations réglementaires : identification, parcellaire, intention, récolte, stock, production. Formulaires intelligents avec pré-remplissage, carte cadastrale interactive pour sélectionner les parcelles, génération des PDF au format officiel, validation en temps réel des règles AOP.\n\n## L'agent IA intégré\n\nJanvier 2026 : ajout d'un agent conversationnel directement dans les formulaires. Il assiste les producteurs en **mode guidé** ou en **conversation libre**, avec des flows déterministes pour les étapes critiques, garantissant que les données réglementaires ne dérivent jamais.\n\n## Le résultat\n\n**-80% de temps de saisie**, des déclarations plus fiables, un syndicat qui peut enfin consacrer son temps à son métier. **29 mois de production**, 167 commits, 211 tests automatisés.",
    tags: ["Métier", "AI"],
    techStack: ["React 18", "TypeScript", "MapLibre GL", "Turf.js", "Mistral", "WordPress API"],
    tagColor: "amber",
    tier: 1,
    thumbnail: "/images/oignon-roscoff-thumb.webp",
    media: [
      {
        type: "video",
        src: "/videos/oignons.mp4",
        caption: "IA dans une app métier : exemple de l'AOP Oignon de Roscoff",
      },
    ],
  },
  // ===================== MEDIUM (4) =====================
  {
    slug: "oligae",
    name: "Oligae",
    descriptionFr:
      "SaaS multi-tenant pour ODG agricoles. Hono 4 + React 19 + Drizzle, isolation par base et par Host header. Vingt ans de métier digérés, plateforme assemblée en un mois avec l'IA.",
    about:
      "**Oligae** digitalise le fonctionnement administratif des ODG agricoles (AOP, IGP, Label Rouge) : déclarations producteurs, registres réglementaires, parcellaire cartographique, exports INAO, commissions d'évaluation.\n\n## L'origine\n\nDeux clients historiques de Koality ont fourni la connaissance métier fine et les premières références : le **Syndicat des Oignons de Roscoff** (3 ans de production) et **BioBreizh** (20 ans de production). Vingt ans d'observation d'un métier, cela transforme un cahier des charges.\n\n## Assemblée en un mois\n\nLa plateforme elle-même a été assemblée en un mois avec assistance IA. Ce qui a déclenché un pivot de modèle économique : **tarification à la valeur, pas au coût**. Lorsque le temps de construction s'effondre, facturer au jour devient absurde.\n\n## L'architecture\n\n**Hono 4 + React 19 + PostgreSQL + Drizzle**, multi-tenant par base de données et par Host header. Chaque ODG dispose de son propre sous-domaine, de ses propres données, de son propre branding.\n\n## Le levier réglementaire\n\nÀ partir du **1er janvier 2027**, le registre phytosanitaire numérique devient obligatoire en Europe. Fin mars 2026 : 2 clients en production, 11 tenants démo par famille de filières, CRM opéré avec 130 prospects.",
    tags: ["SaaS", "Multi-tenant"],
    techStack: ["Hono 4", "React 19", "PostgreSQL", "Drizzle", "MapLibre GL v5", "Tailwind v4"],
    tagColor: "coral",
    tier: 1,
    tryUrl: "https://oligae.fr",
    tryLabel: "Voir la plateforme",
    thumbnail: "/images/oligae-thumb.webp",
    media: [
      { type: "video", src: "/videos/oligae.mp4", caption: "Vidéo de présentation du SaaS Oligae" },
    ],
  },
  {
    slug: "uptake",
    name: "Uptake",
    descriptionFr:
      "Apprendre l'anglais à partir d'articles réels. Couche d'abstraction multi-LLM (Anthropic, OpenAI, DeepSeek, Mistral) qui génère lecture, écriture, vocabulaire et grammaire.",
    about:
      "L'apprentissage d'une langue bute sur deux murs : le contenu générique qui ennuie, et l'absence de structure face à un vrai article. **Uptake résout les deux** : l'utilisateur apporte un article qui l'intéresse, l'app le digère et le transforme en session d'apprentissage.\n\n## Les quatre axes\n\nChaque session travaille quatre dimensions en parallèle : **lecture** (compréhension guidée), **écriture** (reformulation et production), **vocabulaire** (extraction contextuelle) et **grammaire** (patterns détectés dans l'article). L'IA orchestre les exercices, l'humain progresse sur du contenu qu'il a choisi.\n\n## Architecture multi-LLM\n\nAbstraction propre au-dessus de **Anthropic, OpenAI, DeepSeek et Mistral**. Chaque tâche route vers le modèle adapté : génération d'exercices, correction, scoring, explications. Changer de provider ne demande qu'une ligne de config.\n\n## Le dossier amont\n\nPrototype lancé en février 2026 après une préparation inhabituelle : **PRD de 30 pages et UX Research de 25 pages** générées en parallèle par une équipe de trois agents. La couche produit a été pensée avant la première ligne de code.\n\n## Le stack\n\n**Next.js 15 App Router, TypeScript, Prisma 7 (adapter pattern), PostgreSQL, Auth.js v5, Tailwind, next-intl**. Tests unitaires en place. App Electron desktop prévue en v2.",
    tags: ["AI", "EdTech"],
    techStack: ["Next.js 15", "TypeScript", "Prisma 7", "PostgreSQL", "Auth.js v5", "Multi-LLM"],
    tagColor: "cyan",
    tier: 1,
    media: [
      { type: "video", src: "/videos/uptake.mp4", caption: "Uptake en action : un article devient une session d'apprentissage structurée" },
    ],
  },
  {
    slug: "karousel",
    name: "Karousel",
    descriptionFr:
      "Faire produire du contenu fiable par l'IA. Le LLM décrit la maquette en JSON structuré, un compilateur Konva rend le pixel. Zéro hallucination visuelle.",
    about:
      "Demander à un LLM de générer du JSON pour des slides, **cela casse une fois sur deux**. Trop rigide pour le modèle, trop fragile pour le rendu.\n\n## La solution\n\nKarousel intercale une **couche de représentation intermédiaire** entre le LLM et le rendu. Le modèle décrit l'intention en langage souple, le compilateur fabrique les slides conformes.\n\n## Pourquoi c'est intéressant\n\nLe même principe s'applique partout où l'on attend de l'IA un contenu structuré **sans bricolage** : présentations, rapports, diagrammes, pages produit. La couche intermédiaire absorbe les approximations du modèle et garantit un rendu déterministe.",
    tags: ["AI", "Content"],
    techStack: ["Next.js", "Konva", "Claude API", "DeepSeek"],
    tagColor: "cyan",
    tier: 1,
    tryUrl: "https://carousel.laboweb.pw",
    tryLabel: "Essayer",
    media: [
      { type: "video", src: "/videos/karousel.mp4", caption: "Génération d'un carousel LinkedIn en temps réel" },
    ],
  },
  {
    slug: "dictaphone",
    name: "Dictaphone",
    descriptionFr:
      "Capturer la connaissance informelle. Whisper local pour la transcription, RAG pour la recherche, structuration par LLM. Tout reste sur la machine.",
    about:
      "Dans la plupart des organisations, le **savoir est dans la tête des gens**. Dans des conversations, des messages vocaux, des notes prises à l'arrache. Rien n'est structuré, rien n'est retrouvable.\n\n## La capture\n\nLa voix est transcrite par **Whisper en local**, sans jamais quitter la machine. Aucun audio ne part dans un cloud, aucune transcription ne passe par une API tierce.\n\n## La structuration\n\nUn **double graphe de connaissances** (LightRAG + Graphiti) organise l'ensemble. Recherche sémantique et recherche par entités cohabitent : la recherche continue de fonctionner même si un moteur tombe.\n\n## La promesse\n\n**Zéro cloud, zéro dépendance.** Le corpus appartient à son propriétaire, les modèles tournent en local, les fichiers vivent sur le disque. Tout ce qui a été dit un jour à voix haute devient interrogeable.",
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
      { type: "screenshot", src: "/images/dictaphone1.png", caption: "Dashboard : pipeline de traitement, services actifs, notes récentes" },
      { type: "screenshot", src: "/images/dictaphone2.png", caption: "Graphe des notes : 142 nœuds, 156 liens, regroupés par mois" },
      { type: "screenshot", src: "/images/dictaphone3.png", caption: "Détail d'une note : audio, transcription brute et version structurée" },
      { type: "screenshot", src: "/images/dictaphone4.png", caption: "Timeline : 28 notes en février, 913 minutes de voix capturées" },
    ],
  },
  // ===================== SMALL (2) =====================
  {
    slug: "skeletonify",
    name: "Skeletonify",
    descriptionFr:
      "Anonymiser des screenshots intelligemment. OCR Tesseract pour repérer le texte, Gemini pour classifier ce qui est sensible, Sharp pour appliquer le masque.",
    about:
      "**Flouter, c'est facile.** Comprendre ce qui est sensible, c'est un problème de langage.\n\n## Le pipeline\n\n**Quatre agents IA orchestrés** analysent le contenu, détectent les données sensibles via OCR bilingue français/anglais, et les remplacent par des **skeleton loaders**.\n\n## Pourquoi skeleton\n\nPas de flou grossier, pas de pixels qui trahissent la forme. Le résultat ressemble à une capture en cours de chargement. **Propre, crédible, partageable** dans une documentation ou un post sans gêne.",
    tags: ["AI", "Privacy"],
    techStack: ["Node.js", "Gemini API", "Tesseract.js", "Sharp"],
    tagColor: "cyan",
    tier: 2,
    media: [
      { type: "video", src: "/videos/skeletonify.mp4", caption: "Quatre agents IA qui anonymisent une capture en temps réel" },
    ],
  },
  {
    slug: "vokable",
    name: "Vokable",
    descriptionFr:
      "Transformer des notes vocales en contenu publiable. Whisper pour transcrire, RAG pour retrouver le ton de l'utilisateur, LLM pour structurer et rédiger.",
    about:
      "Une idée, dictée. **L'IA la transcrit, la structure et la transforme en contenu** publiable : posts LinkedIn, briefs, notes de travail.\n\n## L'intuition\n\nRéduire la **friction entre penser et publier**. Entre le moment où l'idée est claire et celui où elle est écrite et relue, il y a trop d'étapes. Chacune est une occasion de l'abandonner.\n\n## Le prédécesseur\n\nL'ancêtre de **Dictaphone**, avec une approche cloud plutôt que locale. Même obsession, même point de départ : **capturer au moment où l'esprit pense**, laisser la machine faire le reste.",
    tags: ["AI", "Creative"],
    techStack: ["Electron", "React", "OpenAI Whisper", "RAG"],
    tagColor: "coral",
    tier: 2,
    thumbnail: "/images/vokable-thumb.webp",
    media: [
      { type: "video", src: "/videos/vokable.mp4", poster: "/images/vokable-poster.webp", caption: "Vokable : de la note vocale au contenu publiable" },
    ],
  },
  {
    slug: "epicycle-draw",
    name: "Epicycle Draw",
    descriptionFr:
      "Rendre les séries de Fourier intuitives. Une image est extraite en contours, puis redessinée par une cascade de cercles qui tournent, sans lever le crayon.",
    about:
      "Les séries de Fourier sont un concept abstrait : n'importe quelle courbe se décompose en une somme de sinus. **Epicycle Draw transforme ça en spectacle** : une image entre, un tracé sort, dessiné sans lever le crayon par une cascade de cercles rotatifs.\n\n## Le pipeline\n\nDétection de contours par image processing classique (voie LLM testée et abandonnée). Un algorithme de **contour linking** par proximité fusionne plusieurs formes en un tracé continu unique. Douglas-Peucker pour simplifier.\n\n## La contrainte\n\nUne série de Fourier dessine **un seul contour fermé continu**. Toute la difficulté est de plier la géométrie d'entrée à cette règle : fusionner, simplifier, ne jamais lever le crayon virtuel.\n\n## La stack\n\n**Python** backend pour les algos, **Vanilla JS et CSS** front, aucun framework. Bibliothèque de formes générées et mode quiz à deviner.",
    tags: ["Math", "Creative"],
    techStack: ["Python", "Vanilla JS", "Canvas", "Image Processing"],
    tagColor: "cyan",
    tier: 2,
    media: [
      { type: "video", src: "/videos/epicycle-draw.mp4", caption: "Epicycle Draw : une image devient un tracé d'épicycles de Fourier" },
    ],
  },
  {
    slug: "claude-analysis",
    name: "Claude Analysis",
    descriptionFr:
      "Voir ce qu'il y a vraiment dans le contexte de Claude. Capture mitmproxy, viewer React, métriques d'entropie et signal/bruit.",
    about:
      "Les sessions JSONL exposées par Claude Code ne reflètent pas le **contexte réel** envoyé à l'API. Il manque la moitié des tool_results, les skills injectés, le vrai prompt système.\n\n## La capture\n\n**Mitmproxy** intercepte le trafic HTTPS entre Claude Code et l'API Anthropic. Chaque requête est stockée au complet : prompt système, tool definitions, messages, tool_results. Un hook on-ingest déclenche l'analyse dès qu'un exchange est capturé.\n\n## Les métriques\n\nTrois indicateurs quantitatifs : **entropie du prompt système** (sa charge informative), **ratio signal/bruit** des messages, **taux de répétition** outil vers contenu. Un endpoint `/api/overview` agrège le tout en un curl.\n\n## Le constat\n\n**63 % du contexte** d'une session Claude Code est occupé par les tool definitions built-in. C'est inamovible. Le levier est ailleurs : la pertinence des tool_results et le choix des skills injectés.\n\n## Le pivot\n\nLes scores automatiques ne suffisent pas à juger la qualité d'un prompt. L'outil assume une **évaluation manuelle** : afficher, comparer, décider. Pas un dashboard de KPIs, un scalpel.",
    tags: ["AI", "DevTool"],
    techStack: ["React", "Zustand", "FastAPI", "Python", "mitmproxy"],
    tagColor: "amber",
    tier: 2,
    media: [
      { type: "video", src: "/videos/claude-analysis.mp4", caption: "Claude Analysis : disséquer le trafic d'une session Claude Code" },
    ],
  },
];
