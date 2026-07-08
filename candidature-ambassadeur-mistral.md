# Candidature Ambassadeur Mistral — Fabien Canu

## Question

> Avez-vous déjà fait connaître Mistral auparavant, par exemple au sein d'une communauté, dans des articles, des conférences, des vidéos ou par d'autres moyens ?

---

## Réponse (version longue)

Oui, mais je préfère être clair d'emblée : tout ça reste très expérimental. Ce ne sont pas des déploiements massifs, plutôt une pratique quotidienne et quelques projets à petite échelle où j'apprends en faisant, avec Mistral dedans. Honnêtement, ma consommation API est modeste, je suis surtout en phase d'exploration, et je fais aussi tourner du Mistral en local.

**Dans mes usages** : j'ai quelques petits projets où Mistral est branché pour de vrai. Un assistant conversationnel pour une AOP agricole, un dictaphone qui lisse ses transcriptions avec `mistral-small`, un générateur de styles cartographiques, l'étape de clarification de ma mémoire personnelle. Des choses modestes, mais utilisées au quotidien.

**En public** : dès que j'interviens dans un contexte collectif, atelier ou événement, je présente Mistral comme une vraie alternative souveraine. Y compris quand l'événement porte sur Claude, où j'affirme que Mistral est un choix crédible et sérieux. Je fais aussi tourner certaines démos live directement sur l'API Mistral. Et comme Activateur France Num, je vais animer des Café IA pour dirigeants de TPE-PME, un cadre idéal pour cette pédagogie auprès de publics sans entrée technique.

**Ce qui me fait vraiment croire en Mistral**, au-delà de l'usage, c'est une conviction de fond : la puissance brute du modèle compte moins qu'on ne le croit. Ce qui fait la différence, c'est le **harnais** autour, l'outillage, les skills, la mémoire, l'orchestration qui donnent au modèle les moyens d'exceller. Un bon harnais permet à un modèle même modeste de faire des choses remarquables. Je l'explore concrètement avec Mistral Vibe, en le branchant sur ma propre mémoire et en testant comment lui déléguer des petites tâches ciblées, et je regarde de près le format Agent Skills, qui ouvre la voie à des compétences métier portables. C'est du bricolage assumé, et c'est là que je vois le potentiel.

J'ai aussi touché les limites en vrai : un petit modèle local seul peine à tenir, il faut un modèle hébergé correct derrière le harnais. C'est précisément ce que Mistral rend possible, un écosystème souverain où le harnais fait le gros du travail et où le modèle reste accessible et maîtrisable. C'est cette combinaison qui me convainc, un harnais soigné et un modèle européen à portée de main.

---

## Réponse (version courte, pour champ limité)

Oui, à petite échelle et de façon très expérimentale. J'utilise Mistral dans quelques projets réels (assistant conversationnel pour une AOP, dictaphone, cartographie, ma mémoire personnelle) et je fais aussi tourner du Mistral en local. En public, dès que j'interviens en atelier ou en événement, y compris sur Claude, je présente Mistral comme une vraie alternative souveraine, et je vais animer des Café IA France Num pour dirigeants de TPE-PME.

Ce qui me fait croire en Mistral, c'est une conviction de fond : la puissance brute du modèle compte moins que le harnais autour, l'outillage, les skills, la mémoire, l'orchestration. Un bon harnais permet à un modèle modeste de faire des choses remarquables. Je l'explore avec Mistral Vibe et le format Agent Skills. C'est du bricolage assumé, mais c'est là que je vois le potentiel d'un écosystème souverain et accessible.

---

## Aide-mémoire — inventaire factuel (pour préparer un oral / étayer)

**Usages Mistral (API cloud + local Ollama)**
- App AOP Oignons de Roscoff : assistant conversationnel multi-turn sur l'API Mistral.
- Dictaphone : lissage de transcriptions Whisper via `mistral-small` (cloud) et `mistral-small:24b` (local Ollama, version souveraine).
- Map Creator : génération de styles MapLibre en sortie JSON structurée.
- PAI (mémoire perso) : étape « clarify » exclusivement sur Mistral, Claude en fallback.
- Digests / voice-notes : génération locale via `mistral-small:24b`.

**Public / communauté**
- Mistral comme moteur de démos live en conférence (public français, API compatible OpenAI, streaming).
- Positionnement « alternative souveraine » affirmé même dans les événements sur Claude.
- Activateur France Num : Café IA à venir (Brest, Morlaix) pour dirigeants TPE-PME.

**Écosystème dev Mistral**
- Mistral Vibe branché sur la mémoire PAI, tests de délégation de tâches ciblées.
- Skill `/vibe` (délégation de composants isolés) en exploration.
- Format Agent Skills standard ouvert (portabilité des compétences métier).

**Nuances honnêtes assumées**
- Consommation API modeste, phase d'exploration, pas de compte payant.
- Petit modèle local seul insuffisant (tool calls peu fiables) : le harnais + un modèle hébergé correct font la différence.
