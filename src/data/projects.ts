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
  skills: string[];
  tagColor: "cyan" | "amber" | "coral";
  tier: 1 | 2;
  tryUrl?: string;
  tryLabel?: string;
  githubUrl?: string;
  thumbnail?: string;
  media?: ProjectMedia[];
  /**
   * Quand true, le projet n'est pas rendu dans le bento par défaut.
   * Il est injecté dynamiquement par le SkillsFilter dans les cases
   * libérées quand un filtre actif matche ses skills.
   */
  hidden?: boolean;
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
      "Une mémoire pour l'IA. Les décisions, le contexte des projets et les habitudes de travail sont retenus d'une session à l'autre, au lieu de devoir tout réexpliquer à chaque fois.",
    about:
      "Les outils IA oublient tout entre deux conversations. Répéter le contexte, réexpliquer les décisions, reperdre du temps. **PAI apporte une mémoire persistante à la relation de travail.**\n\n## Le contenu de la mémoire\n\nDécisions passées, contexte projet, préférences de travail, erreurs déjà commises, conventions de code. Chaque session enrichit la base et devient immédiatement interrogeable par la suivante.\n\n## Comment la recherche fonctionne\n\nRecherche sémantique multi-angles avec fusion RRF, résolution d'alias (un projet nommé **aop** devient automatiquement **oignons-roscoff**), filtrage temporel pour retrouver ce qui a été dit hier, la semaine dernière ou le mois dernier.\n\n## État actuel\n\nAprès plus de **1500 sessions** réparties sur **50+ projets** et **12 000 faits** indexés, l'IA ne repart plus de zéro. Elle connaît le rôle de son interlocuteur, l'état d'avancement en cours, les décisions précédentes et leurs motifs.",
    tags: ["AI", "Infrastructure"],
    techStack: ["TypeScript", "Semantic Search", "MCP", "SQLite", "Embedding"],
    skills: ["semantic-search", "embedding", "mcp", "multi-llm", "typescript", "infrastructure-ai", "devtool"],
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
      "Un assistant vocal qui exécute des tâches. On parle normalement, plusieurs IA exécutent des tâches en parallèle en arrière-plan, et rendent compte à la fin.",
    about:
      "Les assistants vocaux répondent à des questions. **Jaja exécute des tâches.** Dialogue vocal en façade, agents Claude dispatchés en arrière-plan, compte rendu à la fin.\n\n## Le cockpit\n\nMission control visuel avec les dispatches en cours, la timeline, les coûts en temps réel. Budget configurable par session, reconnexion automatique en cas de coupure, chat texte en parallèle de la voix.\n\n## L'architecture\n\nL'oreille et la voix passent par **Gemini Live** (reconnaissance et synthèse temps réel), les mains sont des agents **Claude** dispatchés en parallèle via l'API et pilotés par MCP. Le contexte long terme vient de la PAI, mais le cockpit reste découplé.\n\n## La suite\n\nDemain, Jaja pourrait piloter un autre système que Claude. Le pattern décrit **un poste de pilotage pour n'importe quelle flotte d'agents**.",
    tags: ["AI", "Voice"],
    techStack: ["Electron", "Gemini Live", "Claude API", "WebSocket", "MCP"],
    skills: ["agents", "multi-agent", "vocal", "mcp", "claude", "gemini", "electron", "infrastructure-ai"],
    tagColor: "coral",
    tier: 1,
    thumbnail: "/images/jaja-thumb.webp",
    media: [
      { type: "video", src: "/videos/jaja.mp4", poster: "/images/jaja-poster.webp", caption: "Jaja en action : dialogue vocal, dispatch d'agents, mission control" },
    ],
  },
  {
    slug: "oignon-roscoff-aop",
    name: "Oignon de Roscoff AOP",
    descriptionFr:
      "La paperasse de 150 producteurs d'oignons, numérisée. Six déclarations obligatoires, une carte des parcelles, un assistant qui guide à la saisie. 80% de temps administratif en moins.",
    about:
      "Le Syndicat des Oignons de Roscoff gère une AOP de **100 à 150 producteurs** répartis sur **27 communes du Finistère Nord**. Avant l'application, les déclarations obligatoires se faisaient sur papier, et chaque producteur ressaisissait chaque année des informations qui ne changeaient pas d'un millimètre.\n\n## Les déclarations numérisées\n\nLes six déclarations réglementaires : identification, parcellaire, intention, récolte, stock, production. Formulaires intelligents avec pré-remplissage, carte cadastrale interactive pour sélectionner les parcelles, génération des PDF au format officiel, validation en temps réel des règles AOP.\n\n## L'agent IA intégré\n\nJanvier 2026 : ajout d'un agent conversationnel directement dans les formulaires. Il assiste les producteurs en **mode guidé** ou en **conversation libre**, avec des flows déterministes pour les étapes critiques, garantissant que les données réglementaires ne dérivent jamais.\n\n## Le résultat\n\n**-80% de temps de saisie**, des déclarations plus fiables, un syndicat qui peut enfin consacrer son temps à son métier. **29 mois de production**, 167 commits, 211 tests automatisés.",
    tags: ["Métier", "AI"],
    techStack: ["React 18", "TypeScript", "MapLibre GL", "Turf.js", "Mistral", "WordPress API"],
    skills: ["agents", "structured-output", "mistral", "react", "typescript", "maplibre", "saas-b2b", "metier", "cartographie"],
    tagColor: "amber",
    tier: 1,
    thumbnail: "/images/oignon-roscoff-thumb.webp",
    media: [
      {
        type: "video",
        src: "/videos/oignons.mp4",
        poster: "/images/oignons-poster.webp",
        caption: "IA dans une app métier : exemple de l'AOP Oignon de Roscoff",
      },
    ],
  },
  // ===================== MEDIUM (4) =====================
  {
    slug: "oligae",
    name: "Oligae",
    descriptionFr:
      "La plateforme des filières agricoles (AOP, IGP, Label Rouge). Déclarations, parcellaire, commissions : tout le métier d'un syndicat dans un seul outil. Vingt ans de terrain, assemblés en un mois avec l'IA.",
    about:
      "**Oligae** digitalise le fonctionnement administratif des ODG agricoles (AOP, IGP, Label Rouge) : déclarations producteurs, registres réglementaires, parcellaire cartographique, exports INAO, commissions d'évaluation.\n\n## L'origine\n\nDeux clients historiques de Koality ont fourni la connaissance métier fine et les premières références : le **Syndicat des Oignons de Roscoff** (3 ans de production) et **BioBreizh** (20 ans de production). Vingt ans d'observation d'un métier changent la nature d'un cahier des charges.\n\n## Assemblée en un mois\n\nLa plateforme elle-même a été assemblée en un mois avec assistance IA. Le modèle économique a suivi : la **tarification se fait à la valeur livrée**. Lorsque le temps de construction s'effondre, facturer au jour devient absurde.\n\n## L'architecture\n\n**Hono 4 + React 19 + PostgreSQL + Drizzle**, multi-tenant par base de données et par Host header. Chaque ODG dispose de son propre sous-domaine, de ses propres données, de son propre branding.\n\n## Le levier réglementaire\n\nÀ partir du **1er janvier 2027**, le registre phytosanitaire numérique devient obligatoire en Europe. Fin mars 2026 : 2 clients en production, 11 tenants démo par famille de filières, CRM opéré avec 130 prospects.",
    tags: ["SaaS", "Multi-tenant"],
    techStack: ["Hono 4", "React 19", "PostgreSQL", "Drizzle", "MapLibre GL v5", "Tailwind v4"],
    skills: ["react", "typescript", "postgresql", "maplibre", "saas-b2b", "multi-tenant", "metier", "cartographie"],
    tagColor: "coral",
    tier: 1,
    tryUrl: "https://oligae.fr",
    tryLabel: "Voir la plateforme",
    thumbnail: "/images/oligae-thumb.webp",
    media: [
      { type: "video", src: "/videos/oligae.mp4", poster: "/images/oligae-poster.webp", caption: "Vidéo de présentation du SaaS Oligae" },
    ],
  },
  {
    slug: "uptake",
    name: "Uptake",
    descriptionFr:
      "Apprendre l'anglais sur les articles qu'on lit déjà. On colle un lien, l'app le transforme en session sur mesure : lecture, écriture, vocabulaire, grammaire.",
    about:
      "L'apprentissage d'une langue bute sur deux murs : le contenu générique qui ennuie, et l'absence de structure face à un article de presse. **Uptake résout les deux** : l'utilisateur apporte un article qui l'intéresse, l'app le digère et le transforme en session d'apprentissage.\n\n## Les quatre axes\n\nChaque session travaille quatre dimensions en parallèle : **lecture** (compréhension guidée), **écriture** (reformulation et production), **vocabulaire** (extraction contextuelle) et **grammaire** (patterns détectés dans l'article). L'IA orchestre les exercices, l'humain progresse sur du contenu qu'il a choisi.\n\n## Architecture multi-LLM\n\nAbstraction propre au-dessus de **Anthropic, OpenAI, DeepSeek et Mistral**. Chaque tâche route vers le modèle adapté : génération d'exercices, correction, scoring, explications. Changer de provider ne demande qu'une ligne de config.\n\n## Le dossier amont\n\nPrototype lancé en février 2026 après une préparation inhabituelle : **PRD de 30 pages et UX Research de 25 pages** générées en parallèle par une équipe de trois agents. La couche produit a été pensée avant la première ligne de code.\n\n## Le stack\n\n**Next.js 15 App Router, TypeScript, Prisma 7 (adapter pattern), PostgreSQL, Auth.js v5, Tailwind, next-intl**. Tests unitaires en place. App Electron desktop prévue en v2.",
    tags: ["AI", "EdTech"],
    techStack: ["Next.js 15", "TypeScript", "Prisma 7", "PostgreSQL", "Auth.js v5", "Multi-LLM"],
    skills: ["multi-llm", "structured-output", "claude", "gpt", "mistral", "deepseek", "nextjs", "typescript", "postgresql", "edtech"],
    tagColor: "cyan",
    tier: 1,
    media: [
      { type: "video", src: "/videos/uptake.mp4", poster: "/images/uptake-poster.webp", caption: "Uptake en action : un article devient une session d'apprentissage structurée" },
    ],
  },
  {
    slug: "karousel",
    name: "Karousel",
    descriptionFr:
      "Demander à l'IA de produire une maquette propre, à tous les coups. Un traducteur fiable entre la description du modèle et le rendu affiché à l'écran.",
    about:
      "Demander à un LLM de générer du JSON pour des slides, **cela casse une fois sur deux**. Le format est trop rigide pour le modèle et trop fragile pour le rendu.\n\n## La solution\n\nKarousel intercale une **couche de représentation intermédiaire** entre le LLM et le rendu. Le modèle décrit l'intention en langage souple, le compilateur fabrique les slides conformes.\n\n## Le principe réutilisable\n\nLe même principe s'applique partout où l'on attend de l'IA un contenu structuré **sans bricolage** : présentations, rapports, diagrammes, pages produit. La couche intermédiaire absorbe les approximations du modèle et garantit un rendu déterministe.",
    tags: ["AI", "Content"],
    techStack: ["Next.js", "Konva", "Claude API", "DeepSeek"],
    skills: ["structured-output", "multi-llm", "claude", "deepseek", "nextjs", "content", "creative"],
    tagColor: "cyan",
    tier: 1,
    tryUrl: "https://carousel.laboweb.pw",
    tryLabel: "Essayer",
    media: [
      { type: "video", src: "/videos/karousel.mp4", poster: "/images/karousel-poster.webp", caption: "Génération d'un carousel LinkedIn en temps réel" },
    ],
  },
  {
    slug: "dictaphone",
    name: "Dictaphone",
    descriptionFr:
      "Le savoir qui vit dans les conversations, rendu retrouvable. On parle, tout est transcrit, organisé et interrogeable. Aucun son ne quitte la machine.",
    about:
      "Dans la plupart des organisations, le **savoir est dans la tête des gens**. Dans des conversations, des messages vocaux, des notes prises à l'arrache. Rien n'est structuré, rien n'est retrouvable.\n\n## La capture\n\nLa voix est transcrite par **Whisper en local**, sans jamais quitter la machine. Aucun audio ne part dans un cloud, aucune transcription ne passe par une API tierce.\n\n## La structuration\n\nUn **double graphe de connaissances** (LightRAG + Graphiti) organise l'ensemble. Recherche sémantique et recherche par entités cohabitent : la recherche continue de fonctionner même si un moteur tombe.\n\n## En local\n\n**Zéro cloud, zéro dépendance.** Le corpus appartient à son propriétaire, les modèles tournent en local, les fichiers vivent sur le disque. Chaque phrase dite à voix haute devient interrogeable.",
    tags: ["AI", "Local"],
    techStack: [
      "Python",
      "FastAPI",
      "Whisper",
      "LightRAG",
      "Graphiti",
      "SQLite",
    ],
    skills: ["rag", "knowledge-graph", "speech-to-text", "local-first", "semantic-search", "whisper", "python", "fastapi", "privacy"],
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
  {
    slug: "programme-ton-agent",
    name: "Programme ton agent",
    descriptionFr:
      "Un serious game pour comprendre l'agentique en la manipulant. On compose un agent IA carte par carte (modèle, mémoire, outils, garde-fous), on le lâche sur une vraie demande, et on ressent dans le portefeuille pourquoi un agent qui en fait trop coûte cher pour rien.",
    about:
      "Un schéma au mur, on hoche la tête, trois minutes plus tard c'est oublié. **Programme ton agent fait construire l'agent** : on le compose, on le lance sur une demande réelle, et on en vit les conséquences dans le portefeuille.\n\n## La méthode AAA\n\nAcculturation, Arbitrage, Action. D'abord comprendre de quoi on parle, ensuite trancher des choix concrets et en subir les conséquences, enfin agir et manipuler. C'est le moment où ça rentre.\n\n## La boucle de jeu\n\nOn compose l'agent carte par carte : un modèle (le léger doute et retente, le lourd tranche du premier coup mais coûte plus), une consigne, une mémoire, des outils, des garde-fous. Puis on le lâche sur une demande client. Sa boucle d'appels se déroule à l'écran, le harnais à gauche, le modèle à droite. Le contexte grossit à chaque tour, et chaque tour coûte. Le défi : la bonne réponse, au meilleur prix.\n\n## Les effets qu'on ressent en jouant\n\nLe contexte est renvoyé en entier au modèle à chaque appel : plus il enfle, plus ça coûte. La mémoire qui persiste entre les manches paye quand elle est propre et empoisonne quand elle est périmée. Un outil bavard appelé souvent devient un gouffre à tokens. Le retry, la compaction et l'hallucination apparaissent comme des lignes sur le compteur.\n\n## Sous le capot\n\n**Le moteur est déterministe et séparé de la vue.** Toute la logique de coût, de mémoire et de retries vit dans un moteur TypeScript pur, vérifié par des tests qui rejouent une simulation chiffrée : le jeu optimal réussit en autonomie sous le budget, le jeu négligent crame tout. La vue Svelte ne fait qu'animer l'état produit. Neuf missions jouables, du débutant en une manche à l'agent cumulatif sur plusieurs manches.\n\n## L'usage\n\nConstruit pour la formation (formateur certifié Qualiopi), les talks, et bientôt les Kafés IA. Jouable gratuitement en ligne.",
    tags: ["Serious game", "Pédagogie"],
    techStack: ["Svelte 5", "TypeScript", "Vite", "Vitest"],
    skills: ["agents", "typescript", "creative", "content", "edtech"],
    tagColor: "coral",
    tier: 1,
    tryUrl: "https://programme-ton-agent.vercel.app",
    tryLabel: "Jouer",
    media: [
      { type: "video", src: "/videos/programme-ton-agent.mp4", poster: "/images/programme-ton-agent-poster.webp", caption: "Une partie : on compose l'agent, on le lâche, le compteur de coût grimpe" },
      { type: "screenshot", src: "/images/programme-ton-agent-build.webp", caption: "Construction : brancher les outils, chaque carte rejoint le contexte et pèse" },
      { type: "screenshot", src: "/images/programme-ton-agent-verdict.webp", caption: "Le verdict : juste et autonome, mais payé plus cher que nécessaire" },
    ],
  },
  // ===================== SMALL (2) =====================
  {
    slug: "skeletonify",
    name: "Skeletonify",
    descriptionFr:
      "Anonymiser une capture d'écran proprement. L'IA repère ce qui est sensible et le remplace par des blocs gris crédibles, plutôt qu'un flou qui trahit la forme.",
    about:
      "**Flouter une capture est facile.** Repérer ce qui est sensible demande de comprendre le texte.\n\n## Le pipeline\n\n**Quatre agents IA orchestrés** analysent le contenu, détectent les données sensibles via OCR bilingue français/anglais, et les remplacent par des **skeleton loaders**.\n\n## Pourquoi skeleton\n\nLe résultat ressemble à une capture en cours de chargement, sans flou grossier ni pixels qui laissent deviner la forme. Il se glisse **dans une documentation ou un post** sans gêne.",
    tags: ["AI", "Privacy"],
    techStack: ["Node.js", "Gemini API", "Tesseract.js", "Sharp"],
    skills: ["agents", "multi-agent", "ocr", "gemini", "nodejs", "privacy", "image-processing"],
    tagColor: "cyan",
    tier: 2,
    media: [
      { type: "video", src: "/videos/skeletonify.mp4", poster: "/images/skeletonify-poster.webp", caption: "Quatre agents IA qui anonymisent une capture en temps réel" },
    ],
  },
  {
    slug: "vokable",
    name: "Vokable",
    descriptionFr:
      "Penser à voix haute, publier juste après. La note vocale devient post, brief ou note structurée, dans le ton de celui qui l'a dictée.",
    about:
      "Une idée, dictée. **L'IA la transcrit, la structure et la transforme en contenu** publiable : posts LinkedIn, briefs, notes de travail.\n\n## L'intuition\n\nRéduire la **friction entre penser et publier**. Entre le moment où l'idée est claire et celui où elle est écrite et relue, il y a trop d'étapes. Chacune est une occasion de l'abandonner.\n\n## Le prédécesseur\n\nL'ancêtre de **Dictaphone**, avec une approche cloud plutôt que locale. Même obsession, même point de départ : **capturer au moment où l'esprit pense**, laisser la machine faire le reste.",
    tags: ["AI", "Creative"],
    techStack: ["Electron", "React", "OpenAI Whisper", "RAG"],
    skills: ["speech-to-text", "rag", "whisper", "gpt", "electron", "react", "creative", "content"],
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
      "Les maths cachées derrière n'importe quel dessin. Une image se redessine sous les yeux, sans lever le crayon, par une cascade de cercles qui tournent les uns sur les autres.",
    about:
      "Les séries de Fourier sont un concept abstrait : n'importe quelle courbe se décompose en une somme de sinus. **Epicycle Draw le donne à voir** : une image entre, un tracé sort, dessiné sans lever le crayon par une cascade de cercles rotatifs.\n\n## Le pipeline\n\nDétection de contours par image processing classique (voie LLM testée et abandonnée). Un algorithme de **contour linking** par proximité fusionne plusieurs formes en un tracé continu unique. Douglas-Peucker pour simplifier.\n\n## La contrainte\n\nUne série de Fourier dessine **un seul contour fermé continu**. Toute la difficulté est de plier la géométrie d'entrée à cette règle : fusionner, simplifier, ne jamais lever le crayon virtuel.\n\n## La stack\n\n**Python** backend pour les algos, **Vanilla JS et CSS** front, aucun framework. Bibliothèque de formes générées et mode quiz à deviner.",
    tags: ["Math", "Creative"],
    techStack: ["Python", "Vanilla JS", "Canvas", "Image Processing"],
    skills: ["image-processing", "python", "creative", "maths"],
    tagColor: "cyan",
    tier: 2,
    media: [
      { type: "video", src: "/videos/epicycle-draw.mp4", poster: "/images/epicycle-draw-poster.webp", caption: "Epicycle Draw : une image devient un tracé d'épicycles de Fourier" },
    ],
  },
  {
    slug: "map-creator",
    name: "Map Creator",
    descriptionFr:
      "Les mêmes données géographiques, racontées autrement. Un pipeline de vision par ordinateur vectorise des cartes du XIXe siècle pour produire des fonds modernes aux esthétiques anciennes.",
    about:
      "Les cartes OpenStreetMap racontent toutes la même histoire : lignes propres, typographies uniformes, palette standard. **Map Creator propose un autre récit** en vectorisant des cartes anciennes pour produire des fonds modernes habités d'une autre esthétique.\n\n## Le pipeline vision\n\nExtraction d'embeddings visuels via **DINOv2** (après pivot depuis DINOv3, gated sur HuggingFace), détection de texte par **EasyOCR** avec heatmap pixel-level, vectorisation en **PMTiles** et sprites sur mesure. Chaque nouvelle carte source devient une couche exploitable dans MapLibre.\n\n## Le fine-tuning\n\nPlutôt qu'un réentraînement complet, un **fine-tuning par style** : quelques heures de GPU suffisent à adapter le modèle à une nouvelle esthétique cartographique. La boucle génération, rendu, correction tourne en continu.\n\n## Le pivot\n\nLe potentiel dépasse les cartes anciennes. **Créer des fonds modernes personnalisés** pour des apps métier (AOP, tourisme, immobilier) reste le territoire à explorer.",
    tags: ["Cartographie", "Computer Vision"],
    techStack: ["Python", "DINOv2", "EasyOCR", "PMTiles", "MapLibre GL", "PyTorch"],
    skills: ["fine-tuning", "computer-vision", "image-processing", "maplibre", "python", "cartographie", "creative"],
    tagColor: "amber",
    tier: 1,
    hidden: true,
  },
  {
    slug: "jeofun",
    name: "JeoFun",
    descriptionFr:
      "Marcher, écouter une histoire qui se déroule au rythme des pas. Une app mobile qui active la narration d'un lieu quand on approche, et un back-office pour créer les parcours sans coder.",
    about:
      "Un parcours géolocalisé, c'est un fichier GPX plus un guide. **JeoFun y ajoute la narration IA** : à chaque étape, le téléphone déclenche une voix qui raconte ce que le marcheur a sous les yeux, adaptée à son rythme et à son angle d'arrivée.\n\n## L'architecture double\n\n**App mobile Expo** (React Native) côté marcheur, **back-office Next.js** côté créateur de parcours. L'auth est optionnelle côté marcheur : balader et écouter ne demande aucun compte, proposer ses propres parcours en demande un.\n\n## Les données\n\nImport direct des couches **WFS GeoBretagne** (PDIPR, sentiers balisés), gestion des MultiLineString comme parcours réels, seed de parcours de démonstration pour tester. Le back-office permet un CRUD POI complet par parcours.\n\n## Le contexte\n\nProjet solo, 14 mois de développement, ancêtres mobiles en React Native plus anciens. Le ton, le rythme des narrations et l'intégration GPS forment le cœur du produit.",
    tags: ["Mobile", "Cartographie"],
    techStack: ["React Native", "Expo", "Next.js", "PostgreSQL", "Prisma", "MapLibre"],
    skills: ["mobile", "maplibre", "nextjs", "postgresql", "cartographie", "content", "creative"],
    tagColor: "cyan",
    tier: 1,
    hidden: true,
  },
  {
    slug: "gitttte",
    name: "GITTTTE",
    descriptionFr:
      "Acheter un gîte en Bretagne intérieure sans s'y perdre. Une carte où chaque commune s'éclaire selon les critères de l'acheteur, et qui se recalcule dès qu'on bouge un curseur.",
    about:
      "Chercher un bien immobilier en zone rurale, c'est arbitrer entre dix critères que les moteurs de recherche ne croisent pas. **GITTTTE fait ce croisement visuel** : une heatmap communale qui réagit aux pondérations de l'acheteur.\n\n## Les critères\n\nDistance aux plages, densité touristique, prix médian, accessibilité, équipements, démographie. Chaque critère est un slider. La heatmap se recalcule en temps réel, les communes les mieux placées ressortent.\n\n## La stack carto\n\n**MapLibre GL JS** avec heatmap adaptative au zoom (radius et blur variables), fond gris neutre pour que les contrastes ressortent. Les données communales proviennent de scrapings ciblés et d'open data INSEE.\n\n## L'origine\n\nOutil construit pour une décision d'investissement personnelle : trouver le bon gîte en Bretagne intérieure. Sorti du cadre perso, le pattern sert toute app métier qui a besoin de croiser des critères géographiques pondérés.",
    tags: ["Cartographie", "Data"],
    techStack: ["MapLibre GL", "TypeScript", "React", "Open Data INSEE", "Heatmap"],
    skills: ["maplibre", "typescript", "react", "cartographie", "scraping"],
    tagColor: "amber",
    tier: 2,
    tryUrl: "https://immo.koality.fr",
    tryLabel: "Explorer la carte",
    hidden: true,
  },
  {
    slug: "prya",
    name: "Prya",
    descriptionFr:
      "Un assistant IA qui génère ses propres interfaces métier. On décrit ce qu'on veut gérer, il fabrique le kanban, les formulaires, les vues. Le project manager devient terrain d'expérimentation.",
    about:
      "Les project managers classiques proposent un kanban, des tags, et puis basta. **Prya renverse le problème** : l'interface métier est générée à la demande par un assistant IA, sur la base de compétences composables.\n\n## Les compétences\n\nL'architecture repose sur des briques réutilisables : **compétences** qui décrivent comment afficher, filtrer, trier, éditer un type d'objet. L'IA les compose en interface quand l'utilisateur décrit un besoin. Un kanban des tâches devient un Gantt projet en changeant d'angle, sans reconfiguration.\n\n## Le double rôle\n\nPrya est à la fois l'outil du quotidien pour piloter ses projets et le **terrain d'expérimentation sur l'intégration IA dans une app métier**. Les patterns qui émergent dans Prya remontent ensuite dans Oligae et les apps clients.\n\n## L'ancêtre, le successeur\n\nDeux versions coexistent : la version web historique, et **Prya Native** (React Native / Expo) qui teste les mêmes compétences en contexte mobile. Le projet sert aussi de fondation à la skill `koality-pm` (accès API direct par Claude Code).",
    tags: ["AI", "Metier"],
    techStack: ["Next.js", "PostgreSQL", "Claude API", "TypeScript", "React Native"],
    skills: ["agents", "structured-output", "claude", "nextjs", "mobile", "postgresql", "typescript", "metier", "devtool"],
    tagColor: "coral",
    tier: 2,
    hidden: true,
  },
  {
    slug: "linkedin-lab",
    name: "LinkedIn Lab",
    descriptionFr:
      "Un scraper Playwright et une analyse qualitative Claude, séparés proprement. Le scraper ramène les faits, l'IA qualifie le ton et les hooks. Deux responsabilités, deux passes.",
    about:
      "Les outils d'analyse LinkedIn mélangent tout : scraping, scoring, recommandations, tout dans le même blob. **LinkedIn Lab sépare les deux passes** : une passe factuelle pure, une passe interprétative confiée à Claude.\n\n## La passe factuelle\n\n**Playwright** avec profil persistant (session gardée localement, pas besoin de relogin). Scraping `navigate_page` par profil, dédoublonnage, export en CSV. Le scraper ne produit ni inférence ni jugement, seulement des données brutes.\n\n## La passe qualitative\n\nUne fois le dataset constitué, **Claude l'analyse séparément** : détection de ton, typologie des hooks, comparaison inter-posts. Le scraper ne fait plus ces jugements en interne, pour une raison simple : ils changent plus vite que le DOM de LinkedIn.\n\n## Les chiffres\n\n**147 contacts dédupliqués** via Sales Navigator, analyse de posts sur des datasets allant de 50 à 500 items. L'outil a servi à préparer une campagne Oligae et à alimenter les réflexions positionnement.",
    tags: ["DevTool", "Automation"],
    techStack: ["Node.js", "Express", "Playwright", "Claude API", "TypeScript"],
    skills: ["scraping", "claude", "nodejs", "typescript", "devtool", "content"],
    tagColor: "cyan",
    tier: 2,
    hidden: true,
  },
  {
    slug: "gif-generator",
    name: "GIF Generator",
    descriptionFr:
      "Convertir une vidéo en GIF sans jamais uploader le fichier. FFmpeg tourne dans le navigateur, rien ne quitte la machine, et l'éditeur de timeline découpe propre.",
    about:
      "Convertir une vidéo en GIF, ça paraît trivial. Les outils en ligne demandent d'uploader un fichier de plusieurs dizaines de mégas vers un serveur inconnu, pour une opération que le navigateur sait faire depuis 2020.\n\n## L'architecture\n\n**FFmpeg WASM** côté client. Le traitement vidéo tourne intégralement dans l'onglet, aucun backend, aucune trace serveur. Le fichier source ne quitte jamais la machine de l'utilisateur.\n\n## L'éditeur de timeline\n\nSélection visuelle des segments, coupe des parties non retenues, export direct. L'utilisateur voit le résultat avant de lancer la conversion.\n\n## La place dans le HUB\n\nPremier outil d'une collection plus large (le HUB), qui regroupe des micro-outils média tous alignés sur la même promesse : **ça tourne ici, pas ailleurs**. VideoGen suivra.",
    tags: ["Tools", "Local"],
    techStack: ["React", "FFmpeg WASM", "TypeScript", "Vite"],
    skills: ["local-first", "privacy", "react", "typescript", "creative", "devtool"],
    tagColor: "coral",
    tier: 2,
    hidden: true,
  },
  {
    slug: "code-spotlight",
    name: "Code Spotlight",
    descriptionFr:
      "Présenter du code sans screenshot moche. Un système de spotlights qui mettent en scène les lignes qui comptent, avec export propre pour glisser dans une slide ou un article.",
    about:
      "Montrer du code dans une présentation, c'est soit une capture illisible, soit un copier-coller qui perd la mise en forme. **Code Spotlight résout le problème** avec des spotlights animés : la zone qu'on veut montrer s'allume, le reste reste contextuel.\n\n## Le format\n\nChaque spotlight est un segment de code plus une annotation. Plusieurs spotlights forment un snippet, qui se partage par URL. L'export en image haute définition colle le résultat dans une slide PowerPoint ou un article Medium sans perte.\n\n## Les deux modes de partage\n\nPar URL du **spotlight** lui-même (pour montrer un point précis), ou par URL du **snippet** complet (pour laisser naviguer entre les spotlights). Le choix change selon qu'on veut pointer ou raconter.\n\n## Le contexte\n\nConstruit pour les conférences et les articles. Chaque talk sur l'IA appliquée demande des passages de code qui ne peuvent pas rester des captures brutes.",
    tags: ["Creative", "DevTool"],
    techStack: ["React", "Monaco Editor", "TypeScript", "Canvas"],
    skills: ["react", "typescript", "creative", "content", "devtool"],
    tagColor: "cyan",
    tier: 2,
    hidden: true,
  },
  {
    slug: "claude-analysis",
    name: "Claude Analysis",
    descriptionFr:
      "Ouvrir le capot d'un assistant IA. L'outil montre ce qui part à chaque requête, et quelle part de l'espace sert au contenu utile.",
    about:
      "Les sessions JSONL exposées par Claude Code ne reflètent pas le **contexte réel** envoyé à l'API. Il manque la moitié des tool_results, les skills injectés, le vrai prompt système.\n\n## La capture\n\n**Mitmproxy** intercepte le trafic HTTPS entre Claude Code et l'API Anthropic. Chaque requête est stockée au complet : prompt système, tool definitions, messages, tool_results. Un hook on-ingest déclenche l'analyse dès qu'un exchange est capturé.\n\n## Les métriques\n\nTrois indicateurs quantitatifs : **entropie du prompt système** (sa charge informative), **ratio signal/bruit** des messages, **taux de répétition** outil vers contenu. Un endpoint `/api/overview` agrège le tout en un curl.\n\n## Le constat\n\n**63 % du contexte** d'une session Claude Code est occupé par les tool definitions built-in. C'est inamovible. Le levier est ailleurs : la pertinence des tool_results et le choix des skills injectés.\n\n## Le pivot\n\nLes scores automatiques ne suffisent pas à juger la qualité d'un prompt. L'outil assume une **évaluation manuelle** : afficher, comparer, décider. Il sert à examiner une session en détail.",
    tags: ["AI", "DevTool"],
    techStack: ["React", "Zustand", "FastAPI", "Python", "mitmproxy"],
    skills: ["react", "python", "fastapi", "devtool", "infrastructure-ai", "claude"],
    tagColor: "amber",
    tier: 2,
    media: [
      { type: "video", src: "/videos/claude-analysis.mp4", poster: "/images/claude-analysis-poster.webp", caption: "Claude Analysis : disséquer le trafic d'une session Claude Code" },
    ],
  },
  {
    slug: "privacy-filter",
    name: "Privacy Filter",
    descriptionFr:
      "Empêcher qu'un assistant IA envoie le contenu de ses propres mails dans le cloud. Un classifieur PII en local s'intercale entre Claude Code et l'API, masque les noms, emails, téléphones avant l'envoi.",
    about:
      "OpenAI a publié `openai/privacy-filter`, un classifieur de tokens à **1.5 milliards de paramètres** sous Apache 2.0 qui détecte les données personnelles dans un texte. Le modèle tourne en local. Le lab le branche entre Claude Code et l'API Anthropic, via mitmproxy.\n\n## La zone protégée\n\nQuand un agent fouille des mails, des fiches CRM ou la mémoire long terme, le volume de données personnelles qui remonte est imprévisible : signatures, copies cachées, pièces jointes, threads voisins. **Le filtre porte sur ce contenu découvert en cours de route.** La requête initiale de l'utilisateur part telle quelle. Avant d'arriver chez Anthropic, chaque entité (personne, email, téléphone, adresse, IBAN, SIRET) est remplacée par un placeholder stable. **Marc Dupont** reste **PERSON_001** sur toute la session : Claude raisonne sur l'identité opaque sans perdre le fil.\n\n## L'architecture\n\nUn service **FastAPI** charge le modèle une fois et expose `POST /filter`. Un **mitmproxy** intercepte les requêtes vers `api.anthropic.com/v1/messages` avec deux addons en cascade : le premier réécrit, le second capture pour l'UI temps réel du sniffer Claude Analysis. Un wrapper `k --anon --sniff --tools` lance les trois services en une commande.\n\n## Résultats mesurés et angles morts\n\nSur une session réelle de recherche de mails : **9 appels filtrés, 235 entités masquées, 0 nom ni adresse partis chez Anthropic**. Le français business est très bien couvert malgré la note **principalement anglais** du model card. En revanche, un prénom tapé en minuscules au fil de l'eau (`je suis fabien`) échappe au modèle. Et les clés API au format `sk-ant-api03-XXXXXXX` ne sont pas reconnues comme secrets.\n\n## Les limites\n\nLa brique sémantique couvre la base : noms, contacts, comptes, adresses. **Elle ne suffit pas seule comme couche de conformité.** Il faut y empiler une regex sur les patterns syntaxiques fixes, un dictionnaire métier sur les noms d'entreprises, et un humain dans la boucle sur les contenus sensibles.",
    tags: ["AI", "Privacy"],
    techStack: ["Python", "FastAPI", "mitmproxy", "Transformers", "OpenAI Privacy Filter"],
    skills: ["python", "fastapi", "devtool", "infrastructure-ai", "claude", "privacy", "local-first"],
    tagColor: "coral",
    tier: 2,
  },
];
