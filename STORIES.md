# Stories — Projets Portfolio

Briefs narratifs par projet, construits a partir de la memoire PAI (490+ sessions).
Matiere premiere pour les descriptions du site portfolio.

---

## 1. PAI — Personal AI Infrastructure

PAI est ne d'une frustration simple : a force d'enchainer des centaines de sessions de travail avec Claude, le contexte disparaissait a chaque fermeture de terminal. Il fallait tout reexpliquer, les decisions passees, les choix d'architecture, les bugs deja resolus. La question etait de savoir si on pouvait construire une vraie memoire persistante, par projet, interrogeable a la demande.

L'infrastructure s'est construite autour de Claude comme systeme nerveux central, pas comme outil parmi d'autres. A sa base, un pipeline d'extraction qui analyse chaque session et en tire des faits classes : decisions, anti-patterns, learnings, problemes resolus. Ces faits sont indexes semantiquement et interrogeables via MCP directement depuis Claude Code. Le defi technique le plus penible a ete la coherence des donnees : sessions dupliquees, projets orphelins, session_id mal parses. Un vrai travail d'ingenierie bas niveau pour que la recherche vectorielle retourne des resultats pertinents et non du bruit.

Aujourd'hui la base depasse 490 sessions. Avant d'attaquer un sujet, Claude interroge automatiquement la memoire avec le bon filtre projet. Si le projet SSP a eu un probleme de deploy il y a trois semaines, la reponse arrive en deux secondes avec le contexte exact, sans que Fabien ait a le reexpliquer. Un exemple concret : au moment de travailler sur une conf modulaire, PAI a remonte le "pourquoi" d'un choix d'architecture capte dans un vocal plusieurs semaines plus tot, une chose qui n'aurait jamais tenu dans une note textuelle.

Le "so what" est brutal : PAI transforme Claude d'un assistant stateless en associe qui se souvient. Pas de la philosophie, juste du gain operationnel. Reprendre un projet apres dix jours prend trente secondes au lieu de vingt minutes.

---

## 2. Jaja — Assistant vocal IA

Jaja est ne d'un constat simple : les assistants vocaux grand public (ChatGPT Voice, Siri) reagissent, mais n'agissent pas. Fabien voulait une voix qui dispatch, qui execute, qui donne a voir ce qui se passe dans sa PAI en temps reel.

La brique centrale est Gemini Live, l'API WebSocket bidirectionnel de Google qui permet une conversation vocale native a tres faible latence. Pas de synthese vocale postprocessee : l'audio entre et sort en streaming continu. Le modele utilise est gemini-2.5-flash-native-audio, voix Orus, avec controle manuel du micro pour eviter les coupures intempestives liees au VAD.

Ce qui distingue Jaja de ChatGPT Voice, c'est le dispatch. Quand Jaja recoit une commande complexe, il ne la traite pas lui-meme : il envoie un agent Claude Code autonome pour l'executer en arriere-plan. Budget configurable, notifications vocales a la fin, possibilite de kill si ca derape. Jaja peut interroger la memoire PAI (490+ sessions), acceder aux emails, declencher des workflows, tout en continuant a parler.

Le Mission Control a evolue vers un observateur de l'esprit : timeline live par session des tool calls (memoire, emails, dispatches), drill-down sur chaque appel, suivi en temps reel des agents dispatches (tours, fichiers touches, erreurs), navigation entre sessions.

Exemples concrets de dispatches : recherche memoire croisee avec emails sur un client, refactoring de code lance depuis la voix pendant qu'on continue a parler, verification etat serveur avec rapport vocal.

Etat actuel : v1.1 en production active. Stack React 19 + Vite + Electron 35. Layout 3 colonnes, mode clair/sombre, raccourcis clavier. La v2.0 pivote vers un centre de commande visuel ou l'oscillateur vocal devient un widget compact et le dispatch prend toute la place.

---

## 3. GITTTTE — Croisement de donnees pour la decision

Tout commence par une vraie question personnelle : trouver un gite a acheter en Bretagne interieure pour de la location saisonniere. Face aux bases immobilieres classiques qui n'agregent aucune donnee de contexte, Fabien construit son propre outil. Le principe est simple : croiser des sources heterogenes sur une carte pour faire apparaitre des zones que l'oeil ne pourrait pas voir seul.

L'outil ingere 249 000 transactions DVF (Demandes de Valeurs Foncieres) sur 5 ans couvrant les quatre departements bretons, enrichies de donnees OSM pour le contexte local. Les transactions recentes pesent plus dans le calcul (2024=100%, 2021=20%) : le marche evolue, les vieilles ventes bruitent. Chaque commune recoit un score composite pilote par des sliders de ponderation. L'interface affiche une heatmap MapLibre GL JS avec un gradient lisible. En dessous du zoom 14, le mode heatmap synthetise ; au-dessus, il bascule sur des marqueurs individuels.

Le defi technique principal est l'architecture plug-in du moteur de scoring : un registre central permet d'ajouter de nouveaux criteres sans toucher au code existant. Les sliders de ponderation ont ete repenses apres une friction UX precise : les labels relatifs se recalculaient quand on touchait n'importe quel curseur, ce qui perturbait la lecture. La solution : des labels absolus bases sur la position brute du slider.

Ce qui rend GITTTTE generalisable, c'est que le pattern est independant du secteur. N'importe quelle decision qui depend d'un territoire et de plusieurs criteres heterogenes (tourisme, accessibilite, saturation concurrentielle, prix) peut beneficier du meme moteur. Le projet tourne en production a immo.koality.fr.

---

## 4. Map Creator — Memes donnees, autre histoire

Au depart, une question simple : a quoi ressemblerait ce quartier si on le regardait avec les yeux du XIXe siecle ? Les donnees OpenStreetMap sont la, precises, a jour. Mais leur rendu standard ne raconte rien. L'idee de Map Creator est nee de ca : memes donnees, autre regard.

L'outil prend les donnees OSM, genere des fonds de carte en PMTiles (tuiles vectorielles compactes), les stylise via MapLibre avec un systeme de sprites calques sur les conventions cartographiques historiques. Un CNN intervient pour la classification semantique des elements (distinguer route de riviere sur du 96px de contexte), bien que cette etape ait revele une incompatibilite d'echelle avec le routing Dijkstra : les corrections du CNN creaient des corridors de blocage destructeurs pour les ponts. Le georeferencement des cartes anciennes impose sa propre contrainte : les cartes XVIIIe sont symboliques, pas metriques, ce qui necessite une approche par points de controle plutot qu'une projection directe.

L'insight central : les donnees ne sont pas neutres dans leur presentation. Le rendu XIXe applique sur de la donnee moderne ne triche pas sur la geographie, il change la question qu'on pose au territoire. Ce projet dit quelque chose de precis sur la visualisation de donnees : le style n'est pas de la decoration, c'est un cadrage narratif.

Map Creator est aujourd'hui le hub cartographique de plusieurs projets (Histoire de Ville, Game). Il genere les ressources consommees par d'autres outils.

---

## 5. JeoFun — 14 mois, mobile + terrain + IA

JeoFun est ne d'un constat simple : les applications de randonnee racontent peu, ou racontent mal. L'idee initiale, c'est de transformer un trajet physique en experience narrative, ou chaque point d'interet declenche une narration generee par IA adaptee au contexte (lieu, type de parcours, public vise). 14 mois de developpement solo, sans equipe, sans investisseur. La stack couvre trois surfaces : une app React Native (Expo) pour le terrain, une plateforme web pour la creation et la gestion des parcours, et une API qui fait le lien entre les deux.

Cote IA, la mecanique repose sur la generation de contenu a partir de donnees POI reelles. Selon le type de parcours (histoire, touristique/patrimonial, jeu), le modele produit une narration differente sur la meme structure de donnees. Un parcours "histoire" genere un recit immersif, un parcours "touristique" produit un guide contextuel, un parcours "Game" introduit une logique de defi. La generation se fait a la volee, pas en pre-production editoriale.

La premiere reference commerciale valide le concept : une app mobile compagnon de visite commandee par le Departement du Morbihan pour 11 chateaux bretons, avec trois modes (famille, defi, histoire).

En mars 2026, pivot strategique assume. JeoFun n'est plus pense comme un produit grand public ni un SaaS B2B. C'est une vitrine de savoir-faire IA, calibree pour des demonstrations en conference (tourisme, culture, territoires), avec l'objectif de convertir 2-3 clients par an sur du consulting sur-mesure.

---

## 6. Epicycle Draw — Rendre le complexe accessible

Epicycle Draw est ne d'une frustration : les series de Fourier sont enseignees comme une formule abstraite, alors qu'elles decrivent quelque chose de concret et de visuellement saisissant. L'idee de depart etait simple, rendre ce concept physique. Quand on dessine une forme a main levee, on peut la decomposer en une superposition de cercles rotatifs, chacun tournant a une frequence differente, chacun ajoutant une couche de precision. C'est exactement ce que fait la Transformee de Fourier Discrete (DFT) : elle prend une serie de points dans le temps, extrait les composantes frequentielles, et les restitue sous forme d'epicycles emboites qui, tous ensemble, retracent le dessin original.

L'interface est construite en JavaScript avec Canvas et p5.js. L'utilisateur dessine une forme a main levee, le pipeline calcule la DFT, et l'animation demarre : les cercles s'enchainent, chacun perche sur le precedent, et leur pointe dessine progressivement le contour d'origine. Plus on ajoute de cercles (de composantes), plus la reconstruction est fidele.

La bascule vers le jeu est venue naturellement. En mode multijoueur, une forme commence a etre revelee avec seulement 3 cercles, floue, ambigue, et le joueur a 5 secondes pour deviner ce qu'elle represente. Chaque seconde, de nouveaux cercles s'ajoutent, la forme se precise.

Le vrai defi technique a ete la gestion des contours multiples : une forme complexe genere plusieurs contours distincts, or la DFT n'accepte qu'un trace continu. La solution adoptee, relier les contours par proximite pour former un unique chemin ferme, illustre une contrainte mathematique fondamentale (les epicycles suivent "sans jamais lever le crayon").

Le projet est accessible en ligne sur epicycle.laboweb.pw.

---

## 7. Dictaphone — Capturer le savoir informel, tout en local

Dictaphone est ne d'un probleme banal mais couteux : dans les entreprises, l'essentiel du savoir ne s'ecrit jamais. Les decisions de couloir, les intuitions apres une reunion, les connections entre sujets, tout ca disparait ou reste dans la tete d'une seule personne. L'idee : capturer cette connaissance informelle en voix, sans friction, puis la rendre retrouvable.

Le precedent direct s'appelait Vokable : une app Electron/React/TypeScript qui utilisait Whisper et avait accumule 41 notes indexees. Mais Vokable passait par des APIs cloud (GPT-4 pour le smoothing des transcriptions), ecrasait le texte brut lors de la reformulation, et restait une app desktop classique. Dictaphone repart de cette base en corrigeant chaque defaut.

Techniquement, le coeur est mlx-whisper, optimise Apple Silicon, 100% en local. Un fallback faster-whisper existe si besoin. La transcription produit deux versions separees : le brut d'abord, le smooth ensuite, sans jamais ecraser l'original. L'architecture backend est Python FastAPI avec 14 endpoints et 10 outils MCP. Pour la recherche, un double graphe de connaissances : LightRAG (semantique, pour retrouver par theme) et Graphiti (temporel, pour naviguer dans la chronologie des reflexions).

Le 100% local n'est pas un detail technique, c'est le pitch. Des reflexions professionnelles sensibles, des decisions non encore actees, des briefs informels, personne ne veut que ca parte dans un datacenter. Le traitement reste sur la machine, les donnees aussi.

Dictaphone est egalement connecte a la PAI : les notes vocales alimentent directement le graphe de memoire, aux cotes des sessions de code.

---

# Tier 2

---

## 8. Karousel — Representation intermediaire pour contenu IA

Karousel est un generateur de carousels LinkedIn. L'insight technique central est celui de la representation intermediaire (IR) : le LLM ne genere pas du HTML/CSS directement. Il retourne un JSON schema force (via structured outputs), et un "compilateur" cote app compose le rendu visuel a partir de ce JSON. Cette architecture garantit des outputs propres et une maitrise totale du design. Claude reste dans sa zone (logique, contenu), le renderer reste dans la sienne (mise en page).

L'origine est double : tester les capacites des LLMs en generation de contenu structure, et se faire connaitre sur LinkedIn a travers des projets vitrine. Le principe de la representation intermediaire s'applique partout ou on veut de l'IA qui produit du contenu structure sans bricolage.

Etat actuel : projet experimental, accessible sur carousel.laboweb.pw. Classe dans la categorie "vitrine de competences", pas produit final.

---

## 9. HubTools — Outils du quotidien, tout en local

HubTools est une collection d'outils regroupes sous une seule interface locale. L'idee de depart a emerge autour d'un GIF Generator, puis le projet a ete recadre : plutot qu'un outil unique avec des features, c'est un HUB ou chaque outil est autonome et independant.

Les outils bundled : GIF Generator (conversion video/gif en client-side via FFmpeg WASM, sans serveur), Skeletonify (generation de captures d'ecran anonymisees), et VideoGen (prevu en v2.0). Tout tourne en local, pas de serveur, pas de dependance externe, les donnees ne quittent pas la machine.

---

## 10. GIF Generator — Conversion video/GIF sans serveur

L'origine est simple : quand on cherche a faire un GIF a partir d'une video en ligne, on tombe systematiquement sur des outils qui uploadent le fichier sur un serveur tiers, imposent une limite de taille, et font passer la video dans un pipeline opaque.

Cote technique, tout se passe dans le navigateur via FFmpeg WASM. FFmpeg est compile en WebAssembly et execute directement dans le thread du navigateur (ou un Web Worker dedie), sans aucun aller-retour serveur. L'utilisateur importe sa video, selectionne les segments via un editeur de timeline, et FFmpeg WASM encode le GIF localement, frame par frame. Zero upload, zero backend, zero dependance reseau apres le chargement initial de la page.

---

## 11. Skeletonify — Anonymisation intelligente par agents IA

Skeletonify remplace les donnees sensibles dans des captures d'ecran par des skeleton loaders, pas du flou. L'idee centrale est de generer une representation intermediaire de l'interface : ni flou, ni pixelisation, mais un skeleton coherent avec l'UI originale.

Pipeline a 4 agents : un premier agent de vision analyse le screenshot et segmente les zones par type (texte, image, tableau, formulaire). Un second agent OCR identifie les donnees sensibles textuelles. Un troisieme agent reconstruit les zones en composants skeleton (barres grises, blocs, cercles) en respectant les proportions. Un quatrieme agent de controle verifie la coherence visuelle du resultat.

Pourquoi skeleton plutot que flou : le flou trahit la structure originale et reste partiellement lisible. Le skeleton remplace, il ne cache pas. Le resultat est propre, professionnel, et ressemble a un etat de chargement legitime.

Statut : projet R&D 2025, archive. Valeur principale : montee en competence sur les pipelines multi-agents visuels.

---

## 12. K-Doc — Memoire de projet cherchable

K-Doc est un projet Electron developpe en 2025, concu pour gerer localement des notes Markdown accumulees pendant le developpement de projets. Il est ne du constat que les notes generees en session deviennent vite des masses de documentation obsolete, sans navigation historique ni acces associatif.

Le diagnostic de fevrier 2026 est severe : K-Doc se comporte trop comme Apple Notes, les documents sont classes en liste plate par titre, sans graph, sans navigation temporelle, sans interfaces visuelles. La triple interface (CLI, GUI Electron, serveur MCP pour les agents IA) reste son ambition distinctive.

Statut : classe parmi les projets recherche/apprentissage 2025 archives. Son heritage conceptuel alimente la PAI et le Dictaphone qui le remplacent dans la roadmap 2026.

---

## 13. Claude Traffic Viewer — Comprendre ce que font les IA sous le capot

Origine : une recherche sur la degradation du contexte dans les sessions Claude Code. Pour comprendre ce que les AI CLIs envoient vraiment a l'API, Fabien a construit un proxy d'interception maison.

Le fonctionnement : mitmproxy tourne en local sur le port 18890 et intercepte tout le trafic HTTPS vers api.anthropic.com. Claude Code est lance avec deux variables d'environnement qui forcent le passage par le proxy. Les requetes capturees transitent vers un backend FastAPI, qui alimente en temps reel un dashboard React style DevTools.

Ce que ca revele : le payload JSON complet de chaque echange, avec les champs system, messages et tools. Concretement, on voit le prompt systeme injecte par Claude Code, les tools declares, l'historique de conversation tel qu'il est soumis a l'API. En avril 2026, le scope a ete elargi a tout le trafic Anthropic via un proxy transparent avec resolution DNS dynamique.

---

## 14. Prya (Koality PM) — Gestion de projet automatisee par agents

Prya est un projet interne de Koality, ne au constat que la gestion de projets derivait systematiquement : les urgences business ecrasaient les projets creatifs, les PRDs posaient le cadre sans garantir une execution propre.

Le systeme s'articule autour d'une API REST et d'une skill Claude qui permet d'interagir avec projets, taches et entites directement depuis la PAI. L'axe le plus ambitieux est un pipeline CRM agentique en 3 etapes : verify (identification de l'entreprise via l'API gouvernementale), deep_research (scraping + analyse du site web), puis fiche_generation (synthese en une fiche prospect certifiee).

Principe directeur non-negociable : les agents enrichissent la connaissance, l'humain decide et contacte. L'envoi d'email automatique a ete explicitement rejete, la genese du projet etant precisement une boulette d'email.

---

## 15. Prya Native — Assistant IA agentique

Prya Native est un assistant IA integre dans une interface web metier, terrain d'experimentation pour l'IA agentique appliquee au contexte client.

La difference fondamentale avec un chatbot : Prya ne repond pas, il agit. L'architecture repose sur des "skills" qui fonctionnent comme des briques d'execution independantes. Quand l'utilisateur formule une intention, l'assistant selectionne la skill appropriee et l'execute de facon agentique, que ce soit "Declarer une annonce", "Deposer un bon de livraison" ou toute autre action metier. Ce pattern action + selection de skill est directement transposable a n'importe quelle app metier.

Le chaining est assure par MCP qui orchestre les dependances entre skills. Cote providers, logique multi-backend : Claude comme orchestrateur principal, Mistral et Ollama pour les taches moins complexes ou en local, avec un routing par tache pour optimiser cout et performance.

---

## 16. Vokable — De la voix au contenu publiable

Vokable est ne d'un constat simple : entre une idee qui emerge et un post LinkedIn publie, il y a trop d'etapes. L'objectif etait de dicter une note vocale, laisser l'app transcrire et reformuler, puis avoir un contenu quasi-pret a diffuser.

Stack Electron + React + TypeScript + Tailwind, avec Whisper API OpenAI pour la transcription et un post-processing GPT-4o-mini optionnel pour lisser le texte. Le projet avait atteint ~70% avec 41 notes indexees quand les travaux sur Dictaphone ont commence.

Le principal enseignement : Vokable ecrasait le raw Whisper avec la reformulation GPT, rendant l'information originale irrecuperable. Il supprimait aussi les hesitations et le style oral, produisant un texte propre mais desincarne. Dictaphone a corrige les deux defauts : double stockage (raw + smooth independants), et reformulation qui preserve la voix.

L'arc est clair : Vokable cherchait a reduire le frottement entre penser et publier par la voie cloud. Dictaphone reprend la meme ambition mais en local 100%.

---

## 17. Code Spotlight — Presenter du code proprement

Montrer du code a quelqu'un, c'est souvent douloureux : une fenetre de terminal trop petite, un IDE encombre, des couleurs illisibles sur un videoprojecteur. Code Spotlight est ne de ce constat. L'outil permet de presenter des extraits de code avec un systeme de "spotlight" : on pointe une zone, on la met en evidence, on guide le regard. Chaque extrait est un artefact autonome, partage via son URL propre.

Les workspaces permettent d'organiser plusieurs spotlights en sessions de presentation. L'IA generative entre en jeu pour produire des explications contextuelles ou generer des extraits cibles. Les exports d'images permettent d'integrer les spotlights directement dans des slides.

Statut : fonctionnel et abouti, archive. Fabien a conclu que le besoin ne justifiait plus l'investissement de distribution.

---

## 18. Context Collective — Communaute de builders IA

Les meetups et evenements ouverts attirent surtout des gens en recherche d'emploi ou en veille, pas des gens qui construisent. Context Collective est une communaute pour les builders IA : des gens qui experimentent, deploient, testent en conditions reelles. Pas une niche observatoire, un cercle actif.

Etat actuel : landing page (Next.js, blog MDX, evenements via Luma). Context Collective est porteur officiel du projet Battle IA. Les CTAs et emails ont migre vers contact@context-collective.org.

---

## 19. CityQuest — Gamification d'exploration urbaine

CityQuest est un prototype mobile React Native/Expo de quiz geolocalisé. Tu marches dans une ville, ton telephone te pose une question sur ce que tu vois. Tu debloques des parcours, des mini-jeux, tu progresses.

Conceptuellement proche de JeoFun, mais avec un angle gamification pure : progression, defis, deblocage. Le moteur POI et la mecanique de quiz geolocalise sont partages avec l'ecosysteme JeoFun/Geofen. Prototype, pas de vocation commerciale autonome.
