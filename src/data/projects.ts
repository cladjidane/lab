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
      "**Oligae** digitalise le fonctionnement administratif des ODG agricoles (AOP, IGP, Label Rouge) : déclarations producteurs, registres réglementaires, parcellaire cartographique, exports INAO, commissions d'évaluation.\n\n## L'origine\n\nDeux clients historiques de Koality ont fourni la connaissance métier fine et les premières références : le **Syndicat des Oignons de Roscoff** (3 ans de production) et **BioBreizh** (20 ans de production). Vingt ans à observer un métier, ça change un cahier des charges.\n\n## Assemblée en un mois\n\nLa plateforme elle-même a été assemblée en un mois avec assistance IA. Le modèle économique a suivi : la **tarification se fait à la valeur livrée**. Lorsque le temps de construction s'effondre, facturer au jour devient absurde.\n\n## L'architecture\n\n**Hono 4 + React 19 + PostgreSQL + Drizzle**, multi-tenant par base de données et par Host header. Chaque ODG dispose de son propre sous-domaine, de ses propres données, de son propre branding.\n\n## Le levier réglementaire\n\nÀ partir du **1er janvier 2027**, le registre phytosanitaire numérique devient obligatoire en Europe. Fin mars 2026 : 11 tenants démo par famille de filières, CRM opéré avec 130 prospects.",
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
    hidden: true,
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
    hidden: true,
  },
  {
    slug: "programme-ton-agent",
    name: "Programme ton agent",
    descriptionFr:
      "Un serious game pour comprendre l'agentique en la manipulant. On compose un agent IA carte par carte (modèle, mémoire, outils, garde-fous), on le lâche sur une vraie demande, et on ressent dans le portefeuille pourquoi un agent qui en fait trop coûte cher pour rien.",
    about:
      "Un schéma au mur, on hoche la tête, trois minutes plus tard c'est oublié. **Programme ton agent fait construire l'agent** : on le compose, on le lance sur une demande réelle, et on en vit les conséquences dans le portefeuille.\n\n## La méthode AAA\n\nAcculturation, Arbitrage, Action. D'abord comprendre de quoi on parle, ensuite trancher des choix concrets et en subir les conséquences, enfin agir et manipuler. C'est le moment où ça rentre.\n\n## La boucle de jeu\n\nOn compose l'agent carte par carte : un modèle (le léger doute et retente, le lourd tranche du premier coup mais coûte plus), une consigne, une mémoire, des outils, des garde-fous. Puis on le lâche sur une demande client. Sa boucle d'appels se déroule à l'écran, le harnais à gauche, le modèle à droite. Le contexte grossit à chaque tour, et chaque tour coûte. Le défi : la bonne réponse, au meilleur prix.\n\n## Les effets qu'on ressent en jouant\n\nLe contexte est renvoyé en entier au modèle à chaque appel : plus il enfle, plus ça coûte. La mémoire qui persiste entre les manches paye quand elle est propre et empoisonne quand elle est périmée. Un outil bavard appelé souvent devient un gouffre à tokens. Le retry, la compaction et l'hallucination deviennent des lignes sur le compteur.\n\n## Sous le capot\n\n**Le moteur est déterministe et séparé de la vue.** Toute la logique de coût, de mémoire et de retries vit dans un moteur TypeScript pur, vérifié par des tests qui rejouent une simulation chiffrée : le jeu optimal réussit en autonomie sous le budget, le jeu négligent crame tout. La vue Svelte ne fait qu'animer l'état produit. Neuf missions jouables, du débutant en une manche à l'agent cumulatif sur plusieurs manches.\n\n## L'usage\n\nConstruit pour la formation (formateur certifié Qualiopi), les talks, et bientôt les Kafés IA. Jouable gratuitement en ligne.",
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
      "**Flouter une capture est facile.** Repérer ce qui est sensible demande de comprendre le texte.\n\n## Le pipeline\n\n**Quatre agents IA orchestrés** analysent le contenu, détectent les données sensibles via OCR bilingue français/anglais, et les remplacent par des **skeleton loaders**.\n\n## Pourquoi skeleton\n\nLe résultat ressemble à une capture en cours de chargement, sans flou grossier ni pixels qui laissent deviner la forme. On peut le mettre **dans une documentation ou un post** sans gêne.",
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
    hidden: true,
  },
  {
    slug: "epicycle-draw",
    name: "Epicycle Draw",
    descriptionFr:
      "Les maths cachées derrière n'importe quel dessin. Une image se redessine sous les yeux, sans lever le crayon, par une cascade de cercles qui tournent les uns sur les autres.",
    about:
      "Les séries de Fourier sont un concept abstrait : n'importe quelle courbe se décompose en une somme de sinus. **Epicycle Draw le montre à l'écran** : une image entre, un tracé sort, dessiné sans lever le crayon par une cascade de cercles rotatifs.\n\n## Le pipeline\n\nDétection de contours par image processing classique (voie LLM testée et abandonnée). Un algorithme de **contour linking** par proximité fusionne plusieurs formes en un tracé continu unique. Douglas-Peucker pour simplifier.\n\n## La contrainte\n\nUne série de Fourier dessine **un seul contour fermé continu**. Toute la difficulté est de plier la géométrie d'entrée à cette règle : fusionner, simplifier, ne jamais lever le crayon virtuel.\n\n## La stack\n\n**Python** backend pour les algos, **Vanilla JS et CSS** front, aucun framework. Bibliothèque de formes générées et mode quiz à deviner.",
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
      "Map Creator cherche à relever automatiquement les routes et les rivières dessinées sur les cartes anciennes, pour en faire des données géographiques. Les essais portent d'abord sur la carte de Bretagne de 1850.",
    about:
      "Le réseau routier de 1850 est dessiné sur les cartes de l'époque, sous forme d'image. Pour s'en servir sur une carte numérique, il faut relever chaque route à la main. Map Creator cherche à faire ce relevé automatiquement, pour les routes et les rivières, et à en tirer des données géographiques. La carte de Bretagne de 1850 sert de premier terrain.\n\n## Les premiers essais\n\nEn février 2026, plusieurs approches par calcul se sont succédé : seuillage de l'image, soustraction des rivières d'OpenStreetMap, effacement du texte, puis plus court chemin d'une ville à l'autre. Toutes ont été abandonnées. Sur la gravure, le texte, les hachures du relief et les routes se croisent sans cesse, et aucune règle écrite à la main ne les sépare proprement.\n\n## Apprendre à reconnaître les routes\n\nLe projet est passé ensuite à des modèles d'analyse d'image, entraînés sur des routes et des rivières peintes à la main par-dessus le scan : U-Net, puis DINOv2 et DINOv3. Le modèle range chaque pixel dans une classe : route nationale, route secondaire, chemin, eau, hachures du relief ou fond. Sur la carte entière, les erreurs restent visibles. Le modèle trace par exemple des chemins dans le blason de la Bretagne.\n\n## Les essais d'août 2026\n\nFRAx4, un modèle public entraîné sur la carte d'état-major, retrouve 79 à 81 % des routes peintes sans aucun entraînement sur la carte de 1850. La mesure porte sur six carrés choisis parmi les mieux peints, et l'eau échoue. Le calage de la carte sur 39 villes laisse un écart moyen proche d'un kilomètre, loin des 100 mètres visés. Un modèle entraîné sur dix cartes neuves gravées par l'Atelier des cartes dans le style de 1850 retrouve 45 % des routes, contre 79 % pour le modèle entraîné sur la peinture à la main.\n\n## Où en est le projet\n\nDINOv3 et FRAx4 font jeu égal sur les routes, et aucun des deux n'est meilleur partout. Les villes ne sont pas encore détectées. Trois autres cartes, de Normandie, de Charente et de Saône-et-Loire, attendent leurs routes peintes à la main. Le générateur d'affiches de l'Atelier des cartes est né dans ce projet en juillet 2026, avant de devenir un projet à part.",
    tags: ["Cartographie", "Computer Vision"],
    techStack: ["Python", "PyTorch", "DINOv3", "FRAx4", "U-Net", "SAM2", "GeoJSON", "MapLibre GL"],
    skills: ["computer-vision", "image-processing", "fine-tuning", "python", "maplibre", "cartographie"],
    tagColor: "amber",
    tier: 1,
    thumbnail: "/images/map-creator-detection.webp",
    media: [
      { type: "screenshot", src: "/images/map-creator-carte.webp", caption: "Carte entière, février 2026. Les traits violets du blason sont des chemins inventés par le modèle." },
      { type: "screenshot", src: "/images/map-creator-zoom.webp", caption: "Pontivy, Josselin et Vannes, mars 2026 : les tracés détectés sur la carte passée en gris." },
      { type: "screenshot", src: "/images/map-creator-comparaison.webp", caption: "Saint-Brieuc, août 2026 : la carte, les routes vues par le modèle, les routes de l'état-major." },
      { type: "screenshot", src: "/images/map-creator-calage.webp", caption: "La carte calée sur OpenStreetMap par 39 villes, août 2026. L'écart moyen approche un kilomètre." },
      { type: "screenshot", src: "/images/map-creator-trace.webp", caption: "Tracé entre des points cliqués, août 2026. La méthode confondait la route et les traits voisins." },
    ],
    hidden: true,
  },
  {
    slug: "atelier-des-cartes",
    name: "Atelier des cartes",
    descriptionFr:
      "Atelier des cartes est un moteur qui grave des cartes dans des styles anciens, à partir de la géographie d'aujourd'hui. Il a un écran de réglage, et il est pensé pour qu'un agent IA puisse faire toutes les actions que l'utilisateur fait à la souris.",
    about:
      "Un fond de carte numérique se règle avec des couleurs, des épaisseurs de trait et des polices. Une carte gravée ancienne se dessine : hachures du relief, haies du bocage, maisons, clochers, lavis de couleur. Atelier des cartes compose ce second type de carte à partir de la géographie d'aujourd'hui. Il sert à concevoir des fonds de carte très graphiques, avec des réglages proches de Mapbox Studio et une liberté de dessin proche de Photoshop ou d'Illustrator.\n\n## Le moteur\n\nLes données viennent d'OpenStreetMap et de l'IGN : routes, rivières, haies, parcelles, bâtiments, relief. Un style range les couches de la carte et leurs réglages de dessin. Quatre styles sont gravables aujourd'hui : Cassini au XVIIIe siècle, état-major vers 1840, carte de France des années 1930 et type 1912. Le moteur compose l'image pixel par pixel, jusqu'à 300 DPI pour l'impression.\n\n## Un moteur piloté par un agent\n\nL'outil de fabrication de cartes, ouvert le 12 août 2026, montre les sources à droite, les couches à gauche et la carte au milieu. On y coche des tracés, on règle la couleur, le motif et la brosse de chaque couche, on cadre, puis on grave la zone. Le même moteur se commande aussi sans écran. Une seule commande reçoit une opération nommée et ses paramètres en JSON, et rend un rapport en JSON : lister les styles, les sources et les couches que le moteur connaît, lire et écrire les réglages d'un style, cadrer une zone, vérifier une carte, la graver. Un agent IA qui lit ces rapports peut donc faire toutes les actions que l'utilisateur fait à la souris. Depuis le 19 septembre 2026, cette commande est l'interface principale du moteur, et l'écran sert d'essai.\n\n## L'IA dans le projet\n\nLa première version a été écrite avec Claude en cinq semaines, du 12 juillet au 18 août 2026. Les dessins des phares, des maisons, des clochers et des cultures sont générés par Gemini, guidé par des brosses de graveur libres de droits. Le bocage, qui fait aujourd'hui toute la carte, vient d'une proposition du modèle. Le jugement du rendu reste humain, à l'œil, sur la carte gravée.\n\n## La boutique et la suite\n\nLe moteur alimente une boutique en ligne, L'encre des vents, où l'on compose sa carte et commande un tirage sur papier d'art. Une exposition à Lesneven a présenté les premières affiches encadrées en août 2026. Depuis le 19 septembre 2026, le modèle des couches est en refonte : chaque réglage doit dire s'il se règle à l'écran, dans le fichier du style ou dans le code. Le projet est né dans Map Creator, dont il a été extrait le 12 juillet 2026.",
    tags: ["Cartographie", "Moteur piloté par agent"],
    techStack: ["Python", "Pillow", "OpenStreetMap", "IGN BD TOPO", "React 19", "MapLibre GL", "Gemini", "Claude"],
    skills: ["cartographie", "maplibre", "python", "agents", "claude", "gemini", "react", "creative"],
    tagColor: "coral",
    tier: 1,
    tryUrl: "https://encre-des-vents.fr",
    tryLabel: "Voir la boutique L'encre des vents",
    thumbnail: "/images/atelier-des-cartes-etat-major.webp",
    media: [
      { type: "screenshot", src: "/images/atelier-des-cartes-etat-major.webp", caption: "Kernilis gravé en style état-major 1840, à partir des données d'aujourd'hui." },
      { type: "screenshot", src: "/images/atelier-des-cartes-cassini.webp", caption: "Le même Kernilis en style Cassini, burin et lavis du XVIIIe siècle." },
      { type: "screenshot", src: "/images/atelier-des-cartes-carte-de-france.webp", caption: "Le même Kernilis en style carte de France des années 1930." },
      { type: "screenshot", src: "/images/atelier-des-cartes-outil.webp", caption: "L'écran de réglage : les couches à gauche, les sources à droite, Kernilis en style Cassini au milieu." },
      { type: "screenshot", src: "/images/atelier-des-cartes-landerneau.webp", caption: "Le centre de Landerneau gravé à l'échelle des rues, septembre 2026." },
      { type: "screenshot", src: "/images/atelier-des-cartes-affiche.webp", caption: "Affiche « Les Ker du Nord-Finistère », avec son cartouche et sa table des lieux." },
    ],
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
  // ===================== AJOUTS DE NOVEMBRE 2026 =====================
  {
    slug: "cassini",
    name: "Cassini",
    descriptionFr:
      "Un jeu sur la vraie carte de Cassini du Finistère. Le joueur et un rival joué par l'ordinateur tracent à tour de rôle des lignes entre les clochers, et le joueur qui ferme un triangle le gagne.",
    about:
      "Au XVIIIe siècle, les ingénieurs de Cassini montaient dans les clochers pour mesurer la France en triangles. L'exposition « La carte de France de Cassini », aux Archives nationales jusqu'au 1er février 2027, montre ce travail. **Cassini** en fait un jeu gratuit, sans compte, sur ordinateur et sur téléphone.\n\n## La règle\n\nLe joueur et un rival joué par l'ordinateur relèvent la même feuille de la carte. À tour de rôle, chacun trace une ligne entre deux clochers. Le joueur qui trace le dernier côté d'un triangle le gagne. Six triangles cachent une carte inspirée d'un fait réel, qui donne un avantage ou un contretemps. La partie commence à Brest, puis on choisit ses feuilles suivantes sur la carte du Finistère. Le jeu simplifie le vrai travail des ingénieurs, et la page « Le projet » le dit.\n\n## Mesurer avant de choisir\n\nChaque règle a été essayée sur des parties simulées avant d'être retenue. Le rival a quatre niveaux, et il se trompe dans 40 %, 25 %, 12 % puis 0 % de ses tours. Sur 600 parties simulées entre deux bons joueurs, chacun gagne entre 45 et 55 % des parties. Avant chaque mise en ligne, des contrôles automatiques avec Playwright jouent une partie de référence.\n\n## La carte et les images\n\nLe fond est la carte de Cassini reconstituée en 2025 par les Archives nationales et l'IGN, à partir de la numérisation de la BnF. Les villages et le trait de côte viennent d'OpenStreetMap. Les illustrations et les aquarelles des cartes à jouer sont générées par IA, et la page Crédits le dit. Le jeu a été développé avec Claude, en HTML, CSS et JavaScript sans framework.\n\n## Où en est le jeu\n\nLa première version est en ligne depuis le 27 octobre 2026. Le 5 novembre au matin, le compteur avait enregistré 176 parties commencées et 144 finies, parties d'essai comprises. Le jeu reste une version d'essai : 11 feuilles sur 23 sont jouables depuis le 12 novembre 2026.",
    tags: ["Jeu", "Patrimoine"],
    techStack: ["JavaScript", "MapLibre GL", "Driver.js", "esbuild", "Playwright", "PHP", "IGN Géoplateforme"],
    skills: ["cartographie", "maplibre", "creative", "claude", "edtech"],
    tagColor: "cyan",
    tier: 1,
    tryUrl: "https://cassini-game.jeofun.fr",
    tryLabel: "Jouer à Cassini",
    thumbnail: "/images/cassini-carte.webp",
    media: [
      { type: "video", src: "/videos/cassini.mp4", poster: "/images/cassini-poster.webp", caption: "La règle expliquée sur la carte autour de Brest, puis une partie face au rival." },
      { type: "screenshot", src: "/images/cassini-carte.webp", caption: "La carte du Finistère découpée en feuilles, comme la carte de Cassini. Les feuilles dorées sont jouables." },
      { type: "screenshot", src: "/images/cassini-feuille.webp", caption: "La feuille de Lesneven : les clochers, les lignes possibles et la valeur de chaque triangle." },
    ],
  },
  {
    slug: "chateau-de-carman",
    name: "Château de Carman",
    descriptionFr:
      "Une enquête sur un château disparu de Kernilis, dans le Finistère. Les textes anciens, le cadastre de 1830 et le relief LiDAR de l'IGN situent le château, et une scène 3D le restitue.",
    about:
      "Le château de Carman, à Kernilis, a disparu. Un panneau sur place le situe sur le promontoire au-dessus du moulin, mais sa place exacte restait à trouver. **L'enquête** croise les textes anciens, le cadastre, le relief et les photos aériennes pour répondre à cette question.\n\n## Les sources\n\nL'enquête s'appuie sur Cambry, qui décrit le site en 1794, sur Fréminville en 1835 et 1836, sur une lithographie de 1846, et sur le plan cadastral de Kernilis terminé en septembre 1830. Dans le registre du cadastre, daté du 7 février 1831, deux parcelles s'appellent « Castel », château en breton. Huit dalles du LiDAR HD de l'IGN donnent le relief du sol nu à 50 cm, et un fossé d'environ 3 m de profondeur y apparaît.\n\n## La restitution 3D\n\nUne scène 3D en three.js permet de survoler le site restitué et de s'y promener à pied. Le château est un carré de 30 m de côté, dans la fourchette de 30 à 40 m donnée par Kernévez en 1997. Les 1 835 arbres de la scène sont placés d'après le LiDAR. Les arbres et les bâtiments sont modelés dans Blender.\n\n## Le partage du travail\n\nClaude a téléchargé les données, cherché dans les archives, écrit les scripts et la scène, et tenu le journal de l'enquête. Les décisions sont restées humaines : le plan de 1830 a été calé à la main sur 11 points, avec un écart moyen de 10,7 m, et la direction de l'enquête a été corrigée 13 fois en deux jours, les 26 et 27 septembre 2026.\n\n## Les limites\n\nLa restitution reste une hypothèse. La herse, les toits coniques des tours ou la position de la grosse tour n'ont aucune source propre à Carman. Le projet n'est pas en ligne.",
    tags: ["Patrimoine", "3D"],
    techStack: ["Python", "three.js", "Blender", "Leaflet", "LiDAR HD IGN", "BD TOPO"],
    skills: ["cartographie", "python", "creative", "claude", "image-processing"],
    tagColor: "amber",
    tier: 2,
    thumbnail: "/images/carman-restitution.webp",
    media: [
      { type: "video", src: "/videos/carman.mp4", poster: "/images/carman-restitution.webp", caption: "Le panneau sur place, la gravure de 1846, le relief LiDAR, puis la restitution 3D du château." },
      { type: "screenshot", src: "/images/carman-restitution.webp", caption: "Le château restitué sur son promontoire, au-dessus du moulin. Rendu Blender du 27 septembre 2026." },
      { type: "screenshot", src: "/images/patrimoine-carman.webp", caption: "La scène 3D, où l'on survole le site et où l'on se promène à pied." },
      { type: "screenshot", src: "/images/carman-lidar.webp", caption: "Le relief LiDAR du promontoire : en rouge les bosses, en bleu les creux." },
    ],
    hidden: true,
  },
  {
    slug: "bataille-de-brest",
    name: "La bataille de Brest",
    descriptionFr:
      "Le récit de 1944 sur une carte animée, des plages de Normandie jusqu'à Brest. La carte avance avec le texte, et les photos d'archives sont posées à leur place.",
    about:
      "Un récit d'histoire en ligne se lit d'habitude comme un article, avec une carte figée en illustration. **La bataille de Brest** fait avancer la carte avec le texte. À chaque section, la carte se déplace, et les lignes de progression et les fonds anciens s'allument quand le récit en parle.\n\n## Le récit\n\nDouze chapitres vont de l'opération Cobra et des plages de Normandie jusqu'à la reddition de Brest, le 19 septembre 1944, puis à la ville rasée et à l'après-guerre. Les textes viennent de Wikipédia. Les photos d'archives viennent de l'US Army, dont une partie est conservée aux Archives de Brest, et de Wikimedia Commons.\n\n## Les fonds anciens\n\nLe plan d'état-major américain de 1944 et une vue aérienne de l'IGN de 1946 se superposent au fond de carte. Le récit est pensé pour une borne tactile dans un musée, et il se consulte aussi en ligne.\n\n## Le contexte\n\nLa première version date de 2022, en React, Redux et Mapbox GL JS, avec les textes servis par un WordPress. En août 2026, la carte ne s'affichait plus. Claude a trouvé la cause, une clé Mapbox limitée à l'adresse du site, et le récit est revenu en ligne le 31 août 2026. Il a ensuite été refait dans le moteur de récits de l'Atelier des cartes, et cette nouvelle version n'est pas encore en ligne.",
    tags: ["Patrimoine", "Cartographie"],
    techStack: ["React", "Redux", "Mapbox GL JS", "WordPress"],
    skills: ["cartographie", "react", "content", "creative"],
    tagColor: "coral",
    tier: 2,
    tryUrl: "https://brest44.jeofun.fr",
    tryLabel: "Voir le récit",
    thumbnail: "/images/brest-44-plan.webp",
    media: [
      { type: "video", src: "/videos/bataille-de-brest.mp4", poster: "/images/brest-44-plan.webp", caption: "Les dix chapitres du récit en ligne, de l'opération Cobra à l'après-guerre." },
      { type: "screenshot", src: "/images/brest-44-plan.webp", caption: "Le plan américain de 1944, incliné, avec les photos d'archives posées dans les rues de Brest." },
      { type: "screenshot", src: "/images/brest-44-ouverture.webp", caption: "L'ouverture du récit." },
      { type: "screenshot", src: "/images/patrimoine-bataille-brest.webp", caption: "Le récit sur une borne tactile." },
    ],
    hidden: true,
  },
  {
    slug: "charabia",
    name: "Le CharabIA",
    descriptionFr:
      "Un dictionnaire humoristique du jargon de l'IA. Chaque mot a une définition ironique en une phrase, puis l'explication technique exacte.",
    about:
      "Agentique, RAG, fine-tuning : le jargon de l'IA arrive en réunion sans explication. **Le CharabIA** en fait un dictionnaire, dans la tradition du Dictionnaire du Diable d'Ambrose Bierce. Chaque mot a une définition ironique en une phrase, puis un bloc « Le vrai truc » qui donne l'explication technique exacte, sans ironie.\n\n## Le narrateur\n\nLe site est signé Charab, une IA qui traduit aux humains le jargon des autres IA. Les définitions ont été écrites par une IA, et le site le dit en pied de page. Les mots sont rangés par famille : en réunion, ses défauts, sous le capot, ça fait peur, tout neuf.\n\n## Le traducteur\n\nLe traducteur surligne le jargon d'un texte collé, par exemple un post LinkedIn. Il le traduit en français ordinaire et calcule un score de charabia. Tout se passe dans le navigateur, et rien ne part sur un serveur.\n\n## La fabrication\n\nLe site est statique, en Astro, avec 11,3 ko de JavaScript. Le contenu tient dans un seul fichier, contrôlé à chaque construction : le site ne se construit pas si une fiche enfreint une des dix règles d'écriture. Une image de partage est générée pour chaque mot. Le dictionnaire est en ligne depuis fin juillet 2026, avec 58 mots publiés.",
    tags: ["Vulgarisation", "Contenu"],
    techStack: ["Astro", "satori", "resvg", "Matomo"],
    skills: ["content", "creative", "edtech"],
    tagColor: "coral",
    tier: 2,
    tryUrl: "https://charabia.fabiencanu.fr",
    tryLabel: "Ouvrir le dictionnaire",
    thumbnail: "/images/charabia-accueil.webp",
    media: [
      { type: "screenshot", src: "/images/charabia-accueil.webp", caption: "La liste des mots à gauche, le mot du jour à droite, avec sa définition et « Le vrai truc »." },
      { type: "screenshot", src: "/images/charabia-traducteur.webp", caption: "L'image de partage du traducteur de charabia." },
    ],
    hidden: true,
  },
  {
    slug: "scanner-de-livres",
    name: "Scanner de livres",
    descriptionFr:
      "Des livres anciens sur les mines de Lorraine, sans version numérique, deviennent un texte qu'une IA peut interroger. Un iPhone photographie les pages, Claude lit le texte, et chaque réponse cite le livre et la page.",
    about:
      "Une vingtaine de livres sur les mines du bassin houiller de Lorraine n'existent qu'en papier. Beaucoup ont été publiés par les Houillères pour leur communication, parfois sans ISBN, et ils sont rares. **Le scanner de livres** les transforme en texte qu'une IA peut interroger, avec le livre et le numéro de page de chaque passage.\n\n## La prise de vue\n\nL'iPhone est posé sur un pied. L'application prend une photo toute seule toutes les 2 à 30 secondes, pendant qu'on tourne les pages à la main. Claude remplit la fiche du livre à partir d'une photo de la couverture ou de la page de titre.\n\n## La lecture des pages\n\nLes photos passent sur le Mac par iCloud Drive. Une application Mac découpe chaque photo en pages, les redresse et les numérote. Claude lit ensuite chaque page et la découpe en blocs : titre, paragraphe, légende, encadré, note, description d'image. Haiku lit d'abord, puis Sonnet relit les pages illustrées ou incertaines. La lecture coûte de 0,002 à 0,027 dollar par page. La lecture du texte par Apple a été retirée le 14 novembre 2026 : avec ou sans elle, Sonnet trouvait les mêmes mots, et elle coûtait environ 8 % de plus.\n\n## Interroger les livres\n\nLe texte va dans une base SQLite qui combine une recherche par mots et une recherche par le sens. Sur 30 questions tirées des projets, cette recherche trouve une bonne page dans les dix premiers résultats pour 27 questions. La recherche par mots seule n'en trouve qu'une. Un connecteur MCP donne à Claude six outils en lecture seule : lister les livres, chercher, lire la table des matières, une page, un passage ou l'image d'une page.\n\n## Où en est le projet\n\nLe projet a démarré le 13 novembre 2026. Trois livres sont lus, soit 528 pages. Le corpus n'est pas public, parce que les livres sont protégés par le droit d'auteur. Il sert à préparer des jeux et des récits sur l'histoire de la région.",
    tags: ["Corpus", "Mobile"],
    techStack: ["Swift", "SwiftUI", "AVFoundation", "Claude API", "Python", "SQLite FTS5", "bge-m3", "FastMCP"],
    skills: ["ocr", "rag", "semantic-search", "embedding", "mcp", "claude", "mobile", "python"],
    tagColor: "amber",
    tier: 1,
    thumbnail: "/images/scanner-de-livres-prise-de-vue.webp",
    media: [
      { type: "screenshot", src: "/images/scanner-de-livres-prise-de-vue.webp", caption: "La prise de vue : l'iPhone au-dessus du livre photographie la page, et on tourne les pages à la main." },
      { type: "screenshot", src: "/images/scanner-de-livres-thumb.webp", caption: "L'icône de l'application iPhone." },
    ],
  },
  {
    slug: "inspi",
    name: "INSPI",
    descriptionFr:
      "Une bibliothèque d'inspiration design reliée à Claude. Un clic dans Chrome garde un site qui plaît, avec ses polices et ses couleurs, et Claude ouvre la fiche quand on la cite par son numéro.",
    about:
      "Pour montrer à une IA le style visuel voulu, on décrit un site avec des mots, ou on colle une capture dans chaque conversation. **INSPI** range ces références une fois pour toutes, et Claude les lit quand on les cite.\n\n## La capture\n\nSur un site qui plaît, un clic sur l'extension Chrome, ou le raccourci Alt+Maj+I, envoie la capture de l'écran visible, de la page entière ou une vidéo de 10, 20 ou 30 secondes. L'extension relève aussi les polices et les couleurs de la page, et propose des mots clés en anglais à partir d'un mot français. La capture de la page entière recolle jusqu'à 25 écrans.\n\n## La galerie et le connecteur\n\nChaque référence devient une fiche numérotée : X01, X02, X03. Une galerie en ligne range les fiches. Le même serveur Python sert la galerie, l'extension et un connecteur MCP. Dans une conversation, il suffit d'écrire « dans l'esprit d'INSPI X23 » : Claude ouvre la fiche, voit les captures, les polices et les couleurs, et s'en sert pour proposer un design.\n\n## Où en est le projet\n\nINSPI est en ligne depuis le 6 novembre 2026, pour un usage personnel. La galerie est protégée par un mot de passe, parce que les fiches montrent le travail d'autres designers. Aucune IA n'intervient au moment de la capture. La proposition des mots clés par Claude est prévue.",
    tags: ["Design", "MCP"],
    techStack: ["JavaScript", "Chrome Manifest V3", "Python", "Starlette", "FastMCP"],
    skills: ["mcp", "claude", "python", "devtool", "creative"],
    tagColor: "cyan",
    tier: 2,
    thumbnail: "/images/inspi-poster.webp",
    media: [
      { type: "video", src: "/videos/inspi.mp4", poster: "/images/inspi-poster.webp", caption: "La page du Lab capturée avec l'extension, puis sa fiche X12 dans la galerie, avec ses couleurs et ses polices, et les autres fiches." },
    ],
  },
  {
    slug: "faulquemont",
    name: "Faulquemont",
    descriptionFr:
      "La mine de charbon de Faulquemont, en Moselle, vue d'avion de 1930 à aujourd'hui. On compare deux époques avec une barre qu'on fait glisser, et les photos d'archive suivent la partie de la carte qu'on regarde.",
    about:
      "La mine de Faulquemont a produit du charbon de 1936 à 1974, et le paysage a changé depuis. Pour le voir, il faut d'habitude ouvrir plusieurs sites de l'IGN, retrouver les bonnes années et comparer les images à l'œil. **Voyage dans le temps**, le site de Faulquemont, réunit ces images au même endroit, pour un public qui n'a pas l'habitude des cartes en ligne, par exemple un ancien mineur.\n\n## Comparer deux époques\n\nOn choisit une année de chaque côté de l'écran, puis on fait glisser la barre du milieu pour passer de l'une à l'autre. Le mode « Une époque à la fois » montre les années une par une. La frise compte vingt époques de photos aériennes, et les cartes de Cassini, de l'état-major et de 1955 sont aussi proposées.\n\n## Les photos d'archive\n\nUne bande « Photos de cet endroit » montre les photos qui couvrent la partie de la carte visible à l'écran. Une photo s'ouvre en grand, avec une carte à côté, tournée dans le sens de la photo. Les plans de l'« Atlas des sites miniers du bassin houiller de Lorraine 1830-2006 » se posent aussi sur la carte, avec le nom des bâtiments : le lavoir, les puits, les vestiaires.\n\n## Caler les vieilles photos\n\nPour onze des vingt époques, l'IGN ne fournit que les photos d'origine prises d'avion. Des scripts Python cherchent les mêmes détails dans la photo ancienne et dans une photo déjà calée, avec SIFT puis les modèles DISK et LightGlue, et reposent l'image sur le relief. Pour 1972, l'écart médian avec la photo actuelle est passé de 18,3 m à 3,5 m. Les photos de 1963 n'ont pas pu être calées : elles ont toutes été prises sous la neige.\n\n## Le contexte\n\nLe projet a commencé le 14 novembre 2026, et le site est en ligne depuis le 15 novembre. Il a été construit par un agent Claude qui travaillait seul, à partir d'une consigne écrite. Le site lui-même n'utilise aucun modèle de langage. Les Archives de la Moselle ont confirmé le 20 novembre que l'atlas peut être diffusé.",
    tags: ["Patrimoine", "Cartographie"],
    techStack: ["JavaScript", "Leaflet", "MapLibre GL", "OpenSeadragon", "Python", "OpenCV", "LightGlue", "IGN Géoplateforme"],
    skills: ["cartographie", "maplibre", "python", "computer-vision", "image-processing", "claude"],
    tagColor: "amber",
    tier: 1,
    tryUrl: "https://faulquemont.jeofun.fr",
    tryLabel: "Voir le site",
    thumbnail: "/images/faulquemont-thumb.webp",
    media: [
      { type: "video", src: "/videos/faulquemont.mp4", poster: "/images/faulquemont-poster.webp", caption: "Le carreau de Faulquemont de 1948 à aujourd'hui." },
      { type: "screenshot", src: "/images/faulquemont-comparer.webp", caption: "La barre du milieu sépare les photos de 1965-1980 et celles d'aujourd'hui." },
      { type: "screenshot", src: "/images/faulquemont-plan.webp", caption: "Le plan du carreau tiré de l'atlas, posé sur la photo de 1955, avec le nom des bâtiments." },
      { type: "screenshot", src: "/images/faulquemont-photo.webp", caption: "Une photo de l'atlas ouverte en grand : le carreau vu d'avion, en couleurs." },
    ],
    hidden: true,
  },
  {
    slug: "atlas-mines",
    name: "Atlas des mines",
    descriptionFr:
      "Les plans imprimés d'un atlas des mines de Lorraine, posés au bon endroit sur les cartes d'aujourd'hui. Un script retrouve seul le quadrillage de chaque plan, et le calage tombe à quelques dizaines de centimètres.",
    about:
      "L'« Atlas des sites miniers du bassin houiller de Lorraine 1830-2006 », publié par Charbonnages de France en 2006, montre les carreaux des mines sur des plans imprimés. Sur papier, on ne voit pas l'état actuel de ces terrains. **La carte de l'atlas** pose ces plans scannés sur des fonds actuels et anciens, au bon endroit.\n\n## Retrouver le quadrillage\n\nChaque plan porte un quadrillage en coordonnées Lambert, une ligne tous les 100 m, souvent penché sur la page. Un script Python retrouve ce quadrillage avec OpenCV : il détecte les lignes droites, puis garde celles qui forment un réseau régulier, même penché à 45°. Les coordonnées écrites dans la marge se lisent à la main, et deux lignes par direction suffisent. Un second script retire les marges et les photos collées sur le plan, convertit les coordonnées et découpe le plan en tuiles.\n\n## La précision\n\nCinq plans sont calés, à Forbach, Faulquemont et Folschviller. L'écart moyen du calage va de 0,07 m pour le carreau de Faulquemont à 0,39 m pour le site de Folschviller.\n\n## La carte\n\nUne page Leaflet affiche les fonds de l'IGN, du BRGM et d'OpenStreetMap. Un panneau permet de choisir les fonds, de comparer deux époques avec une barre et de régler le relief LiDAR sous le plan. L'adresse de la page garde la vue choisie. Cette carte, construite le 14 novembre 2026, est le point de départ du site Voyage dans le temps de Faulquemont, qui reprend les plans du carreau. La carte de l'atlas n'est pas en ligne.",
    tags: ["Patrimoine", "Cartographie"],
    techStack: ["Python", "OpenCV", "pyproj", "Leaflet", "IGN", "BRGM"],
    skills: ["cartographie", "python", "image-processing", "computer-vision"],
    tagColor: "amber",
    tier: 2,
    thumbnail: "/images/atlas-mines-quadrillage.webp",
    media: [
      { type: "screenshot", src: "/images/atlas-mines-quadrillage.webp", caption: "Page 166 de l'atlas : le quadrillage retrouvé par le script, en rouge et en bleu." },
      { type: "screenshot", src: "/images/faulquemont-plan.webp", caption: "Le plan du carreau calé sur la photo de 1955, repris dans le site de Faulquemont." },
    ],
    hidden: true,
  },
];
