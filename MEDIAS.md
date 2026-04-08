# Lab Portfolio - Guide Medias

## Strategie

Pas de video individuelle par projet. A la place :
- **Thumbnails** sur les cartes index (tous les projets)
- **Media detaille** sur les pages tier 1 (screenshots, GIF, split, mockup, diagramme)
- **Section "En production"** avec 3 cas clients anonymises (texte seul, pas de media)

Les medias vont dans `public/images/`. Le site detecte automatiquement leur presence et affiche un fallback ("Media a venir") si le fichier est absent.

## Formats

| Format | Usage | Specs |
|--------|-------|-------|
| `.webp` | Screenshots, diagrammes, mockups, splits | 1280x960 (thumb) ou 1600x1200 (detail), qualite 80 |
| `.gif` | Micro-animations (5-8 sec max) | 800px large max, < 2 Mo, boucle infinie |
| `.mp4` | Videos legacy (epicycle-draw) | 1280x720, dans `public/videos/` |

## Tier 1 - Medias par projet

### PAI (slug: `pai`)

**Message** : L'IA a de la memoire. 490 sessions, elle me connait.

**Thumbnail** (`pai-thumb.webp`)
- Type : diagramme / data viz
- Contenu : reseau de noeuds colores par projet, clusters visibles, 490 points
- Piste : generer avec D3.js ou Excalidraw puis export image

**Detail** :
1. `pai-graph.webp` (diagram) - "490 sessions, 15 projets, un reseau de connaissances qui se construit tout seul"
2. `pai-search.webp` (screenshot) - "Recherche multi-angles : le meme sujet vu sous 4 angles differents"
   - Contenu : capture d'un terminal avec `memory_constellation` qui retourne des resultats avec scores et angles

---

### Jaja (slug: `jaja`)

**Message** : Un assistant IA qui agit, pas qui cause.

**Thumbnail** (`jaja-thumb.webp`)
- Type : screenshot
- Contenu : le layout 3 colonnes avec un dispatch actif et l'oscillateur vocal

**Detail** :
1. `jaja-mission-control.webp` (screenshot) - "Mission control : dispatches en cours, timeline, couts"
   - Contenu : la vue mission control avec des taches en cours, la timeline des tool calls
2. `jaja-voice.webp` (screenshot) - "L'oscillateur vocal et le chat en temps reel"
   - Contenu : l'oscillateur anime + le chat avec une conversation

**Comment capturer** : lancer Jaja (`~/.pai/jaja/`), lui parler pour declencher un dispatch, screenshot pendant que ca tourne.

---

### GITTTTE (slug: `gitttte`)

**Message** : Croiser des donnees pour decider.

**Thumbnail** (`gitttte-thumb.webp`)
- Type : screenshot
- Contenu : la carte avec une heatmap bien contrastee (rouge/vert) et les sliders visibles a gauche

**Detail** :
1. `gitttte-heatmap.webp` (screenshot) - "La heatmap et les sliders de ponderation"
   - Contenu : vue large de la carte centree sur une zone interessante (ex: cotes bretonnes)
2. `gitttte-slider.gif` (gif) - "Un slider bouge, la carte reagit"
   - Contenu : 5 sec, un slider qui bouge et la heatmap qui se recalcule
   - Source : filmer sur immo.koality.fr, convertir avec ffmpeg

**Comment capturer** : ouvrir immo.koality.fr, zoomer sur une zone avec du contraste, screenshot + screen recording du slider.

---

### Map Creator (slug: `map-creator`)

**Message** : Les memes donnees, une autre histoire.

**Thumbnail** (`map-creator-thumb.webp`)
- Type : split image
- Contenu : cote a cote, la meme zone en rendu moderne (OSM) vs rendu XIXe. L'image parle toute seule.

**Detail** :
1. `map-creator-split.webp` (split) - "A gauche la carte moderne, a droite le rendu XIXe. Memes donnees."
   - Contenu : version plus large du split, centree sur une zone reconnaissable (Brest ou village breton)

**Comment capturer** : lancer Map Creator (`___PROJETS_26/___MAP-CREATOR`, `npm run dev`), capturer les deux vues separement, assembler en split avec ImageMagick : `convert +append modern.webp xixe.webp split.webp`

---

### JeoFun (slug: `jeofun`)

**Message** : 14 mois, mobile + terrain + IA.

**Thumbnail** (`jeofun-thumb.webp`)
- Type : mockup telephone
- Contenu : ecran du parcours geolocaise dans un cadre iPhone

**Detail** :
1. `jeofun-mobile.webp` (mockup) - "Le parcours geolocaise sur mobile : carte, etapes, narration IA"
   - Contenu : screenshot Expo sur simulateur, dans un cadre device
   - Piste : utiliser mockuphone.com ou un template Figma
2. `jeofun-admin.webp` (screenshot) - "Le back-office de creation de parcours"
   - Contenu : l'interface Next.js d'admin avec un parcours ouvert

**Comment capturer** : lancer l'app Expo (`___PROJETS_25/_jeofun25_app`), ouvrir un parcours existant, screenshot simulateur + back-office web.

---

### Epicycle Draw (slug: `epicycle-draw`)

**Message** : Rendre le complexe accessible.

**Thumbnail** (`epicycle-draw-thumb.gif`)
- Type : GIF anime
- Contenu : les cercles qui reconstruisent un dessin simple (etoile, coeur), 5-8 sec, boucle

**Detail** :
1. `epicycle-draw-hero.gif` (gif) - "Les cercles reconstruisent le dessin trait par trait"
   - Contenu : version plus grande / plus longue du meme GIF

**Comment produire** : extraire du fichier video existant (`public/videos/epicycle-draw.mp4`) :
```bash
# Thumb (petite, pour la carte)
ffmpeg -i public/videos/epicycle-draw.mp4 -ss 5 -t 6 -vf "scale=800:-1" -r 15 public/images/epicycle-draw-thumb.gif

# Hero (plus grande, pour la page detail)
ffmpeg -i public/videos/epicycle-draw.mp4 -ss 5 -t 8 -vf "scale=1200:-1" -r 15 public/images/epicycle-draw-hero.gif
```

---

### Dictaphone (slug: `dictaphone`)

**Message** : Capturer le savoir informel, tout en local.

**Thumbnail** (`dictaphone-thumb.webp`)
- Type : screenshot compose
- Contenu : split vertical, a gauche la waveform/micro actif, a droite le texte structure qui en sort

**Detail** :
1. `dictaphone-split.webp` (screenshot) - "A gauche la voix, a droite le savoir structure"
   - Contenu : idem thumb mais en plus grand, avec plus de texte visible

**Comment capturer** : lancer le Dictaphone (`___PROJETS_26/___DICTAPHONE`), enregistrer quelque chose, screenshot pendant la transcription. Assembler en split si l'UI n'est pas deja en 2 panneaux.

---

## Tier 2 - Thumbnails simples

Un screenshot par projet, format 16:9, dans `public/images/{slug}-thumb.webp`.
Montrer l'ecran principal de chaque app, rien de plus.

| Slug | Chemin projet | Commande | Ce qu'il faut capturer |
|------|--------------|----------|----------------------|
| karousel | `___PROJETS_25/___LINKEDIN-CAROUSEL` | `npm run dev` | Un carousel genere, bien rempli |
| hubtools | `___PROJETS_25/___HUB` | `npm run dev` (port 4987) | Le dashboard avec les outils |
| gif-generator | `___PROJETS_25/___HUB` | idem (route /tools/gif) | L'interface drop + preview |
| skeletonify | `___PROJETS_26/___skeletonify` | CLI Node.js | Terminal avant/apres (screenshot + resultat) |
| kdoc | `___LABOS_25/___TOOLS/kdoc` | voir README | L'interface Electron avec une recherche |
| claude-traffic-viewer | `___PROJETS_26/___Claude_Code_Snif/claude-traffic-viewer` | voir README | Le dashboard avec du trafic |
| prya | `___PROJETS_26/___prya-project-manager` | `npm run dev` | Le kanban avec des taches |
| prya-native | `___LABOS_25/___IA/_tools/prya-native` | `npm run dev` | Le chat avec une action en cours |
| vokable | `___PROJETS_25/___vokable` | Electron | L'interface de transcription |
| code-spotlight | `___PROJETS_25/___Code-Spotlight/cs` | `npm run dev` | Du code mis en scene avec le spotlight |
| context-collective | `___PROJETS_25/___Context-Collective/context-collective-landing` | `npm run dev` | La landing page |
| cityquest | `___PROJETS_25/_cityquest_cursor` | Expo | L'ecran mobile avec un quiz |

## Workflow de production

### Session screenshots (~1h)

1. Ouvrir chaque projet un par un
2. Capturer avec Cmd+Shift+5 (zone selectionnee)
3. Convertir en WebP : `cwebp -q 80 input.png -o public/images/{slug}-thumb.webp`
4. Verifier le rendu sur le site (`npm run dev`)

### Session GIF tier 1 (~30 min)

1. GITTTTE : filmer 10 sec du slider sur immo.koality.fr
2. Epicycle : extraire de la video existante (commandes ffmpeg ci-dessus)
3. Convertir : `ffmpeg -i recording.mov -vf "scale=800:-1" -r 15 output.gif`
4. Optimiser : `gifsicle -O3 --lossy=80 input.gif -o output.gif`

### Compositions tier 1 (~30 min)

- **Map Creator split** : deux screenshots assembles avec ImageMagick
- **JeoFun mockup** : screenshot simulateur + cadre device
- **Dictaphone split** : deux panneaux assembles
- **PAI diagramme** : a creer (Excalidraw, D3.js, ou illustration)

## Projets deja en ligne (capturer depuis le navigateur)

- **Epicycle Draw** : epicycle.laboweb.pw
- **GITTTTE** : immo.koality.fr
- **Karousel** : carousel.laboweb.pw
