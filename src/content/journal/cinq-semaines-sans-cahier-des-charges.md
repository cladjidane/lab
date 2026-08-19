---
title: "Cinq semaines sans cahier des charges"
description: "J'ai construit un produit complet sans écrire une ligne de spécification. Ce que ça a donné, où ça a cassé, et ce que j'en retiens sur la façon de travailler aujourd'hui."
date: 2026-08-19
tags: ["Méthode", "IA", "Cartographie"]
draft: true
---

Cet été j'ai monté un moteur de cartographie et son site de vente en cinq
semaines. Aucune spécification écrite, aucun cahier des charges, aucun plan.
J'ai avancé à l'intuition, en tentant des choses. Le résultat dépasse ce que
j'avais imaginé au départ, et il a aussi quatre trous sérieux que je n'ai vus
qu'à la fin. Les deux viennent de la même méthode, et c'est ça qui
m'intéresse.

## Pourquoi l'empirique gagne aujourd'hui

Le cahier des charges n'a jamais été une question de sérieux professionnel.
C'était une question d'argent. Construire coûtait cher et prenait des mois,
donc se tromper sur le papier coûtait mille fois moins cher que se tromper une
fois le code écrit. Écrire avant était rationnel.

Ce fait a disparu. Construire ne coûte presque plus rien. Aujourd'hui, essayer
revient moins cher que réfléchir à ce qu'on va essayer.

Et l'écart n'est pas seulement financier. Un essai rend un résultat réel. Une
analyse rend une hypothèse. Quand on découvre le métier en même temps qu'on
avance, l'essai gagne à tous les coups, parce qu'il rapporte une information
que l'analyse ne peut pas produire.

Le corollaire est inconfortable pour un ancien rédacteur de specs : se
demander s'il faut spécifier, c'est déjà spécifier. La question ne devrait
plus se poser.

## Ce que l'empirique a trouvé et qu'une spec aurait tué

Un jour, en regardant une carte, je trouve qu'elle est vide. Je le dis, sans
plus de précision. Le modèle propose d'ajouter du bocage : les haies, les
alignements d'arbres qui découpent les parcelles.

C'est ce qui fait toute la carte aujourd'hui. On devine les chemins sous les
arbres sans qu'ils soient tracés. Le rendu est là.

Une spécification écrite au départ ne serait jamais allée là. J'aurais décrit
ce que je connaissais, les parcelles cadastrales, les déclarations de cultures,
et je serais encore en train de me battre avec. Le bocage n'existait pas dans
ma tête au moment où j'aurais écrit le document.

On ne spécifie pas un métier qu'on est en train d'apprendre.

## Ce qui a cassé, et le vrai diagnostic

À la fin du projet, j'ai fait auditer le dépôt par un regard neuf, sans
mémoire ni documentation. Quatre problèmes graves sont ressortis. Les quatre
sur le chemin du paiement. Aucun sur la cartographie.

Ma première lecture a été la mauvaise. J'en ai conclu qu'il aurait fallu
spécifier la partie sensible. C'est faux.

Ces trous ne viennent pas de la méthode empirique. Ils viennent du fait que je
n'ai jamais essayé le paiement. J'ai itéré sur les cartes parce qu'elles me
renvoyaient un résultat à chaque gravure. Je n'ai rien tenté sur le tunnel de
vente parce qu'il ne me renvoyait rien. L'empirique n'a pas échoué là-bas, il
n'y est jamais allé.

## Observer, ou provoquer

C'est la seule distinction que je garde de tout ça, et elle ne sépare pas ce
qu'il faut spécifier de ce qu'il faut tenter. Elle sépare deux façons de
tenter.

Il y a ce qui vous renvoie un résultat tout seul. On produit, on regarde, on
corrige. Une carte moche se voit immédiatement. C'est la majorité des sujets
et c'est là que la vitesse se gagne.

Et il y a ce qui ne renvoie rien quand c'est cassé. Un paiement, une règle
d'accès, une reprise après incident ne produisent aucune image et aucune gêne.
Tout a l'air normal jusqu'au jour où ça ne l'est plus.

La réponse n'est pas d'écrire un document. C'est d'aller cogner dessus pour le
faire parler. Payer le mauvais montant. Payer deux fois. Débrancher au milieu
de la transaction. Une demi-journée, aucune analyse préalable, et on récupère
des faits au lieu d'hypothèses.

C'est toujours de l'empirique. Simplement, au lieu d'attendre le résultat, on
va le chercher. Et l'irréversible ne fait pas exception : on ne le spécifie
pas, on le casse dans une copie.

## Ce qui ne se délègue pas

Deux choses seulement, quelle que soit la puissance de l'outil : dire ce qu'on
veut, et dire si le résultat est bon.

Et entre les deux, l'écart est énorme. Dire ce qu'on veut prend vingt minutes,
une fois. Juger se fait cent fois par jour pendant des semaines. Tout le temps
humain est là.

Mon projet le montre dans les deux sens. Sur la carte, aucune intention écrite
et beaucoup de jugement : ça a abouti au-delà de mes attentes. Sur le
paiement, une intention parfaitement claire, vendre des cartes en ligne, et
zéro jugement : quatre trous. L'intention n'a rien sauvé.

Ce qui ne veut pas dire qu'elle ne sert à rien. Le jugement seul répond « est-ce
que ça me plaît », pas « est-ce que ça sert mon but ». Sans un cap posé, on
optimise ce qui marche localement. J'ai passé trois semaines sur une chaîne
technique satisfaisante et hors sujet, que j'ai fini par abandonner. L'intention
n'est pas un critère de construction, c'est un critère d'arrêt.

## Le problème nouveau

La machine produit plus que ce que je suis capable de regarder. Le temps de
jugement devient la vraie limite du projet, et il ne s'achète pas.

C'est à ça que sert un test, dans ce monde-là. Ce n'est pas un exercice de
qualité, c'est un jugement rendu une fois et qu'on n'aura plus à rendre. Le
seul moyen de ne pas rejuger éternellement les mêmes choses, et donc de tenir
la cadence sans finir par ne plus rien regarder.

Ce qui donne une règle simple sur le moment d'écrire un test. Il fige, et
figer une chose qu'on cherche encore coûte cher. Donc il arrive quand un sujet
cesse de bouger, et pas avant. Sauf sur ce qui ne parle jamais, où il faut
l'écrire dès le premier jour, puisque rien ne viendra le réclamer.

## Ce que je ne sais pas résoudre

Tout ce qui précède repose sur la possibilité de provoquer un résultat. Ça
marche pour presque tout. Pas pour ce qui ne casse qu'avec le temps ou
l'échelle : une architecture qui tient à cent utilisateurs et pas à cent
mille, un modèle de données qui devient invivable dans deux ans.

On ne met pas deux ans dans un bac à sable. C'est le seul endroit où je n'ai
pas de réponse par l'essai, et je n'ai pas envie de faire semblant du
contraire.
