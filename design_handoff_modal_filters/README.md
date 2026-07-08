# Handoff : Modal « Vos centres d'intérêt »

## Overview

Cette modal remplace l'actuelle modal de filtres du lab (site monlab). Elle permet au visiteur de composer sa vue du lab en sélectionnant des sujets (domaines, techniques IA, modèles, stack technique, secteurs). Les projets qui matchent remontent, les autres s'effacent.

L'objectif du redesign était de la rendre **légère et accueillante malgré le nombre important de filtres** (~49 tags, 5 catégories). L'ancienne version empilait toutes les pills en vrac. La nouvelle version regroupe par catégorie avec des labels discrets, garde un ton éditorial calme aligné avec la grille du lab (noir/crème, Instrument Serif + Inter Tight + JetBrains Mono).

## About the design files

Les fichiers de ce bundle sont des **maquettes HTML de référence** — un prototype React (via Babel standalone) qui montre le look et le comportement attendus. Ce **n'est pas** du code de production à copier tel quel.

La mission côté implémentation : **recréer cette maquette dans le codebase cible du lab** (a priori Astro + React, d'après la capture `localhost:4321`) avec les patterns et composants déjà en place. Si aucune convention n'existe encore pour les modales, filtres, pills — choisir celles qui s'intègrent le mieux au reste du site.

## Fidelity

**High-fidelity.** Couleurs, typographies, espacements, rayons, transitions sont définis précisément. Le développeur peut (et doit) reproduire au pixel près, en branchant sur le système de tokens existant le cas échéant.

## Layout

### Structure globale

Modal centrée avec overlay sombre.

- **Overlay** : `rgba(30,26,22,.55)` par-dessus l'arrière-plan flouté (ou un simple `backdrop-filter: blur(8px)` sur le vrai contenu du lab derrière)
- **Card** : `width: min(760px, calc(100vw - 64px))`, `height: min(640px, calc(100vh - 64px))`, `border-radius: 10px`, `background: #F3EEE4`
- **Shadow** : `0 1px 2px rgba(0,0,0,.08), 0 30px 80px rgba(0,0,0,.35), 0 10px 30px rgba(0,0,0,.20)`
- Fermeture au clic sur l'overlay, au clic sur le bouton ×, ou touche Esc

### Trois zones verticales (flex column)

1. **Header** (padding `36px 40px 0`)
   - Eyebrow mono `Le lab, à votre main`
   - Titre serif `Qu'est-ce qui vous amène ?` (le mot `amène ?` est en italic et en `nowrap`)
   - Sous-titre `Composez votre vue du lab. Les projets qui correspondent ressortent, les autres s'effacent.`
   - Bouton fermer rond 36×36 en haut à droite

2. **Corps scrollable** (padding `32px 40px 28px`, `flex: 1`, `overflow-y: auto`)
   - 5 groupes l'un sous l'autre, `margin-top: 28px` entre groupes (sauf le premier : 6px)
   - Chaque groupe : en-tête (label mono + séparateur + compteur `n/total`) puis rangée flex-wrap de pills

3. **Footer** (padding `16px 40px 22px`, `border-top: 1px solid rgba(26,22,19,.08)`)
   - `Réinitialiser` à gauche (lien souligné discret)
   - `X sélectionnés` à droite (mono, petit)

## Components

### 1. Eyebrow (label petite capitale mono)

Utilisé pour le kicker du header et pour les labels de groupe.

- Font: `"JetBrains Mono", monospace`
- Size: 10px (header) · 9.5px (groupes)
- `letter-spacing: 2px` · `text-transform: uppercase`
- Color: `#8B7E6A`

### 2. Titre display

- Font: `"Instrument Serif", serif`
- Size: 44px (configurable — entre 32 et 60 via le panneau Tweaks)
- `line-height: 1.02` · `letter-spacing: -0.5px` · `font-weight: 400`
- Color: `#1A1613`
- Le fragment `amène ?` wrappé dans `<em>` avec `font-style: italic; white-space: nowrap`

### 3. Sous-titre

- Font: `"Inter Tight", system-ui, sans-serif`
- Size: 14.5px · `line-height: 1.5`
- Color: `#5C5346`
- `max-width: 460px`

### 4. Bouton fermer

- 36×36 rond, `border: 1px solid rgba(26,22,19,.14)`, `background: transparent`
- Icône croix 11×11, `stroke-width: 1.4`, `stroke: currentColor`
- Hover : `background: rgba(26,22,19,.04)`

### 5. En-tête de groupe

Ligne flex avec trois éléments :

- Label mono (voir Eyebrow) · `white-space: nowrap`
- Séparateur `flex: 1; height: 1px; background: rgba(26,22,19,.08)`
- Compteur mono 10px, color `#B5AA95`, `font-variant-numeric: tabular-nums`, format `X/Y`

`margin-bottom: 12px` sous cette ligne.

### 6. Pills (chip sélectionnable) — STYLE RETENU : "accent"

C'est le composant central. Plusieurs styles ont été prototypés via Tweaks ; **le style retenu est `accent` avec `pillRadius: 999` (full pill)**.

Base commune :
- `padding: 7px 14px`
- `border-radius: 999px`
- `font-size: 13px` · `font-weight: 450` · `font-family: "Inter Tight"`
- `white-space: nowrap` · `cursor: pointer`
- `transition: all .15s`
- Flex-wrap container : `display: flex; flex-wrap: wrap; gap: 6px`

État **non-sélectionné** :
- `border: 1px solid rgba(26,22,19,.14)`
- `background: transparent`
- `color: #1A1613`

État **sélectionné** (style `accent`) :
- `border: 1px solid oklch(0.55 0.11 240)`
- `background: oklch(0.55 0.11 240)` — bleu poudré qui reprend l'accent de la grille du lab
- `color: #F3EEE4`

État **hover** (non-sélectionné) :
- `border-color: rgba(26,22,19,.3)`
- `background: rgba(26,22,19,.03)`

### 7. Bouton "Réinitialiser"

- Link-style, pas de bordure ni fond
- `color: #8B7E6A` · `font-size: 13px` · `border-bottom: 1px solid rgba(139,126,106,.4)`
- Au clic : vide la sélection

### 8. Compteur footer

- `font-family: "JetBrains Mono"`
- `font-size: 11px`
- `color: #8B7E6A`
- Texte : `{n} sélectionné{n > 1 ? 's' : ''}`

## Données — les 5 groupes de tags

```js
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
```

À câbler sur la source de vérité existante côté back (frontmatter Astro / CMS / JSON), en gardant les libellés exacts affichés.

## Interactions & behavior

### Sélection

- **Multi-sélection** sur tous les tags, toutes catégories confondues
- **Logique OR partout** : un projet remonte s'il matche **au moins un** tag sélectionné, peu importe la catégorie (inclusif, pas de AND entre catégories)
- Clic sur un pill : toggle on/off
- Clic sur "Réinitialiser" : vide totalement la sélection

### Compteurs live

- En-tête de chaque groupe : `X/Y` où X = nombre de tags sélectionnés dans ce groupe, Y = total du groupe
- Footer : `N sélectionné(s)` total toutes catégories

### Animations / transitions

- Tags : `transition: all .15s` (background, border, color)
- Pas d'animation d'entrée/sortie demandée ; si besoin, fade + scale subtil sur la modal : `opacity 0→1`, `transform: scale(.98)→scale(1)`, 180ms cubic-bezier(.2,.7,.3,1)

### Ouverture / fermeture

- Bouton d'entrée depuis le header du lab (`"Vos centres d'intérêt"` d'après la capture)
- Fermeture : bouton ×, clic hors card, touche Esc
- La sélection peut être persistée (localStorage `lab.interests`) pour que l'utilisateur la retrouve s'il revient

### Effet sur la grille du lab (hors scope de cette modal, mais à brancher)

Le sous-titre annonce : *"Les projets qui correspondent ressortent, les autres s'effacent"*. L'implémentation côté grille n'est pas dans ce handoff mais la modal doit exposer :
- `selectedTags: Set<string>` (état)
- `onChange(selected)` callback

## Design tokens

### Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `--lab-ivory` | `#F3EEE4` | Fond de la modal, texte sur accent |
| `--lab-ink` | `#1A1613` | Texte principal, pill sélectionné en style inverse |
| `--lab-ink-70` | `#5C5346` | Sous-titre, texte secondaire |
| `--lab-ink-50` | `#8B7E6A` | Eyebrow, labels mono, "Réinitialiser" |
| `--lab-ink-30` | `#B5AA95` | Compteur de groupe |
| `--lab-line` | `rgba(26,22,19,.08)` | Séparateurs, border footer |
| `--lab-line-strong` | `rgba(26,22,19,.14)` | Border pill au repos, bouton fermer |
| `--lab-accent` | `oklch(0.55 0.11 240)` | Pill sélectionné (bleu poudré) |
| `--lab-overlay` | `rgba(30,26,22,.55)` | Overlay de la modal |

### Typographies

| Usage | Famille | Taille | Poids | Tracking | Line-height |
|---|---|---|---|---|---|
| Titre | Instrument Serif | 44px | 400 | -0.5px | 1.02 |
| Sous-titre | Inter Tight | 14.5px | 400 | 0 | 1.5 |
| Pill | Inter Tight | 13px | 450 | 0 | 1 |
| Eyebrow header | JetBrains Mono | 10px | 500 | 2px, uppercase | 1 |
| Label groupe | JetBrains Mono | 9.5px | 500 | 2px, uppercase | 1 |
| Compteur groupe | JetBrains Mono | 10px | 400 | 0, tabular-nums | 1 |
| Compteur footer | JetBrains Mono | 11px | 400 | 0.5px | 1 |

Google Fonts à importer :
```
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;450;500;600&family=JetBrains+Mono:wght@400;500&display=swap
```

Si le lab a déjà défini Instrument Serif / Inter Tight / JetBrains Mono localement, brancher dessus plutôt.

### Espacements

Scale utilisée (px) : 4 · 6 · 10 · 12 · 14 · 16 · 22 · 28 · 32 · 36 · 40 · 48

Points clés :
- Padding card : `36px 40px 0` (header), `32px 40px 28px` (corps), `16px 40px 22px` (footer)
- Gap entre pills : `6px`
- Gap entre groupes : `28px` (première entrée : `6px`)
- `margin-bottom` sous en-tête de groupe : `12px`

### Rayons

- Card modal : `10px`
- Pills : `999px` (full pill)
- Bouton fermer : `50%` (rond)

### Shadows

Modal card :
```
0 1px 2px rgba(0,0,0,.08),
0 30px 80px rgba(0,0,0,.35),
0 10px 30px rgba(0,0,0,.20)
```

## Accessibilité

- Chaque pill est un `<button>` avec `aria-pressed={isSelected}`
- Le conteneur de pills dans un groupe = `role="group"` avec `aria-labelledby` pointant sur le label du groupe
- Bouton fermer : `aria-label="Fermer"`
- Trap focus dans la modal ouverte ; restore focus au déclencheur à la fermeture
- Esc ferme la modal

## State management

```ts
type InterestState = {
  selected: Set<string>;     // tags sélectionnés, toute catégorie confondue
  toggle: (tag: string) => void;
  reset: () => void;
};

// Persistance légère
localStorage.setItem('lab.interests', JSON.stringify([...selected]));
```

## Assets

Aucun asset binaire. Deux SVG inline :
- Croix du bouton fermer : `<path d="M1 1l9 9M10 1L1 10" />` sur un viewBox 11×11, stroke 1.4
- Rien d'autre (pas d'illustration, pas d'icônes de catégories)

## Fichiers de référence

Dans ce bundle :

- `Modal Centres d'intérêt.html` — prototype React complet, autonome. L'implémentation cible est le composant `V1Editorial` dans ce fichier.
- `tags.jsx` — la taxonomie (5 groupes, ~49 tags) à réutiliser telle quelle.
- `README.md` — ce document.

## Notes

- Les valeurs `titleSize`, `pillRadius`, `selectedStyle`, `density`, `showCounts`, `showSubtitle` exposées dans le prototype via le panneau Tweaks sont des paramètres d'exploration ; seuls les valeurs finalisées comptent : `titleSize: 44`, `pillRadius: 999`, `selectedStyle: "accent"`, `density: "comfortable"`, `showCounts: true`, `showSubtitle: true`. Inutile d'exposer ces variables dans le code de prod.
- Le backdrop du prototype est simulé (gradients radiaux). En prod, utiliser un `backdrop-filter: blur(8px)` sur le vrai contenu de la page + un voile `rgba(30,26,22,.55)`.
- Les libellés `Techniques IA`, `Stack technique`, `Secteurs`, etc. sont utilisés comme titres de section dans la modal mais ne sont **pas** des filtres en eux-mêmes — ils servent uniquement à structurer visuellement.
