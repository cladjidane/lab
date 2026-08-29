---
title: "Cinq semaines sans cahier des charges"
description: "J'ai construit un produit complet sans écrire une ligne de spécification. Voici le résultat, les quatre trous découverts à la fin, et la méthode que j'en tire."
date: 2026-08-19
tags: ["Méthode", "IA", "Cartographie"]
draft: false
---

Cet été j'ai monté un moteur de cartographie et son site de vente en cinq
semaines. Aucune spécification écrite, aucun plan. J'ai avancé à l'intuition,
en tentant des choses. Le résultat dépasse ce que j'avais imaginé au départ,
et il a quatre trous sérieux que je n'ai vus qu'à la fin. Les deux viennent de
la même méthode.

## Pourquoi essayer coûte moins cher qu'écrire

Le cahier des charges répond à une question d'argent. Construire coûtait cher
et prenait des mois, donc se tromper sur le papier coûtait mille fois moins
cher que se tromper une fois le code écrit. Écrire avant était rationnel.

Ce calcul a disparu. Construire ne coûte presque plus rien. Aujourd'hui,
essayer revient moins cher que réfléchir à ce qu'on va essayer.

Un essai rend un résultat réel, une analyse rend une hypothèse. Quand on
découvre le métier en même temps qu'on avance, l'essai rapporte une
information que l'analyse ne peut pas produire.

Pour un ancien rédacteur de specs, le corollaire est inconfortable : se
demander s'il faut spécifier, c'est déjà spécifier.

## Le bocage, que je n'aurais jamais spécifié

Un jour, en regardant une carte, je trouve qu'elle est vide. Je le dis, sans
plus de précision. Le modèle propose d'ajouter du bocage : les haies, les
alignements d'arbres qui découpent les parcelles.

Le bocage fait toute la carte aujourd'hui. On devine les chemins sous les
arbres sans qu'ils soient tracés.

Je n'aurais jamais écrit ça dans une spécification de départ. J'aurais décrit
ce que je connaissais, les parcelles cadastrales, les déclarations de cultures,
et je serais encore dessus. Le bocage n'existait pas dans ma tête au moment où
j'aurais rédigé le document. On ne spécifie pas un métier qu'on est en train
d'apprendre.

## Les quatre trous, et leur cause

À la fin du projet, j'ai fait auditer le dépôt sans donner ni mémoire ni
documentation. Quatre problèmes graves sont ressortis, tous sur le chemin du
paiement, aucun sur la cartographie.

Ma première lecture a été la mauvaise. J'en ai conclu qu'il aurait fallu
spécifier la partie sensible. C'est faux.

Ces trous viennent d'autre chose. Je n'ai jamais essayé le paiement. J'ai
itéré sur les cartes parce qu'elles me renvoyaient un résultat à chaque
gravure. Je n'ai rien tenté sur le tunnel de vente parce qu'il ne me renvoyait
rien.

## Deux façons de tenter

Je garde une seule distinction de tout ça, et elle sépare deux façons de
tenter.

Certains sujets renvoient un résultat tout seuls. On produit, on regarde, on
corrige. Une carte moche se voit immédiatement. C'est la majorité des cas, et
ils avancent vite.

D'autres ne renvoient rien quand ils sont cassés. Un paiement, une règle
d'accès ne produisent aucune image et aucune gêne. Rien ne se voit tant qu'un
client n'appelle pas.

Sur ceux-là, je provoque le résultat au lieu de l'attendre. On paie le mauvais
montant, on paie deux fois, on débranche au milieu de la transaction. Ça prend
une demi-journée, sans aucune analyse préalable, et on récupère des faits au
lieu d'hypothèses. L'irréversible se traite pareil, dans une copie.

## L'intention et le jugement

Quelle que soit la puissance de l'outil, je dois faire deux choses : dire ce
que je veux, et dire si le résultat est bon.

L'écart entre les deux est énorme. Dire ce qu'on veut prend vingt minutes, une
fois. Juger se fait cent fois par jour pendant des semaines.

Mon projet le montre dans les deux sens. Sur la carte, aucune intention écrite
et beaucoup de jugement : ça a abouti au-delà de mes attentes. Sur le
paiement, une intention parfaitement claire, vendre des cartes en ligne, et
zéro jugement : ça a donné quatre trous.

L'intention sert quand même à quelque chose. Le jugement seul répond « est-ce
que ça me plaît », pas « est-ce que ça sert mon but ». Sans un cap posé, on
optimise ce qui marche localement. J'ai passé trois semaines sur une chaîne
technique satisfaisante et hors sujet, que j'ai fini par abandonner.
L'intention sert de critère d'arrêt.

## Le temps de jugement

La machine produit plus que ce que je suis capable de regarder. Le temps de
jugement devient la limite du projet, et il ne s'achète pas.

Un test sert à ça. Il enregistre un jugement rendu une fois, pour ne plus
avoir à le rendre. Sans lui, je rejuge éternellement les mêmes choses et je
finis par ne plus rien regarder.

D'où une règle simple sur le moment de l'écrire. Un test fige, et figer un
sujet qu'on cherche encore coûte cher. Il arrive donc quand le sujet cesse de
bouger. Sur un paiement ou une règle d'accès, je l'écris dès le premier jour,
puisque rien d'autre ne viendra le réclamer.

## Le temps et l'échelle

Tout ce qui précède repose sur la possibilité de provoquer un résultat. Ça
marche pour presque tout, sauf quand la casse n'arrive qu'avec le temps ou
l'échelle. Une architecture tient à cent utilisateurs et pas à cent mille. Un
modèle de données devient invivable dans deux ans.

On ne met pas deux ans dans un bac à sable. C'est le seul endroit où je n'ai
pas de réponse par l'essai, et je n'ai pas envie de faire semblant du
contraire.

La méthode que je tire de tout ça est écrite à part, et tenue à jour :
[intention et jugement](/journal/methode-intention-et-jugement).
