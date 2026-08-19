---
title: "Gabarit d'article"
description: "Ce fichier montre le rendu de chaque élément de mise en page. Il reste en brouillon, il ne part jamais en ligne."
date: 2026-08-19
tags: ["gabarit"]
draft: true
---

Le premier paragraphe est affiché plus gros que le reste. Il sert d'entrée en
matière : de quoi parle l'article, et pourquoi ça vaut la peine de lire la
suite.

Les paragraphes suivants reprennent la taille normale. Une ligne vide dans le
fichier sépare deux paragraphes. Un retour à la ligne simple ne suffit pas, les
deux lignes seraient collées.

## Un sous-titre découpe l'article

Sous un sous-titre, le texte continue normalement. On peut mettre un mot en
**gras**, un autre en *italique*, et poser un
[lien vers une page](https://fabiencanu.fr/lab) au milieu d'une phrase.

Une liste :

- un premier point
- un deuxième point, qui peut être long et passer sur plusieurs lignes sans
  que ça change quoi que ce soit au rendu
- un troisième

Une liste numérotée :

1. première étape
2. deuxième étape
3. troisième étape

## Citer et montrer du code

> Une citation prend toute la largeur et se détache du texte. Utile pour
> reprendre les mots de quelqu'un.

Un bout de code sur une ligne : `npm run dev`. Et un bloc entier :

```bash
npm run build
npm run preview
```

## Une image

Pour illustrer, déposer le fichier dans `public/images/` puis l'appeler ainsi :

![Description de l'image pour les lecteurs d'écran](/images/pai-graph.gif)

Le trait de séparation :

---

Et la dernière ligne de l'article.

## Un tableau

| Colonne | Ce qu'elle contient |
|---|---|
| Première | du texte |
| Deuxième | un chiffre : 42 |
