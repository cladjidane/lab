# Écrire un article

Un article = un fichier `.md` dans ce dossier. Le nom du fichier devient
l'adresse de la page : `retour-sur-jaja.md` donne `/journal/retour-sur-jaja`.

Chaque fichier commence par un bloc d'informations entre deux lignes de trois
tirets, puis le texte de l'article en dessous.

```
---
title: "Le titre affiché en haut de la page"
description: "Une ou deux phrases. Elles apparaissent dans la liste des articles, dans Google et sur LinkedIn quand le lien est partagé."
date: 2026-08-19
tags: ["IA", "Jaja"]
draft: true
---

Le texte commence ici.
```

## Les champs

| Champ | Obligatoire | À quoi ça sert |
|---|---|---|
| `title` | oui | Le titre de l'article |
| `description` | oui | Le résumé affiché dans la liste et lors d'un partage |
| `date` | oui | Format `2026-08-19`. C'est elle qui classe les articles |
| `tags` | non | Les mots-clés affichés sous le titre |
| `project` | non | Le slug d'un projet du lab (`pai`, `jaja`, `gitttte`). Ajoute un lien vers sa fiche en bas de l'article |
| `cover` | non | Une image d'en-tête, par exemple `/images/mon-article.webp` (le fichier va dans `public/images/`) |
| `coverAlt` | non | La description de l'image pour les lecteurs d'écran |
| `draft` | non | `true` garde l'article invisible en ligne |

## Brouillons

Un article avec `draft: true` s'affiche en local avec `npm run dev`, il
n'apparaît pas sur le site en ligne. Pour publier, enlever la ligne ou la
passer à `false`, puis commiter.

## Le texte

`## Un sous-titre` pour découper. `**mot**` pour mettre en gras, `*mot*` pour
l'italique, `[texte](https://adresse)` pour un lien. Une ligne vide sépare deux
paragraphes.

Le premier paragraphe est affiché plus gros que les autres, c'est l'entrée en
matière.

Le fichier `gabarit.md` montre tous les éléments de mise en page avec leur
rendu. Il est en brouillon, il ne part jamais en ligne.
