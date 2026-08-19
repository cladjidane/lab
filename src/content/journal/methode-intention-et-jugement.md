---
title: "Intention et jugement"
description: "Ma méthode de travail avec des modèles qui produisent seuls la spec, le plan, le code et les contrôles."
date: 2026-08-19
tags: ["Méthode", "IA"]
draft: false
---

Ma méthode de travail avec des modèles capables de produire seuls la spec, le plan, le code et les contrôles. Elle sort d'un projet mené seul du 12 juillet au 18 août 2026, et elle est confrontée à ce cas en fin de page.

Version 0.4, 19 août 2026. Document vivant : cette page change quand la méthode change.

## La question de départ

Est-ce qu'avancer de manière empirique dans le développement logiciel est
aujourd'hui la méthode la plus efficace, face à l'approche classique du PRD et
du cahier des charges.

## Ma réponse

Oui. Pas dans certaines zones, partout.

Un essai ne coûte presque plus rien et rend un résultat réel. Une analyse
coûte du temps humain, la seule ressource restée chère, et elle rend une
hypothèse. Le rapport s'est inversé assez violemment pour qu'il n'y ait plus
d'arbitrage à faire.

Le cahier des charges n'a jamais été une question de sérieux, c'était une
question d'argent : construire coûtait cher, donc se tromper sur le papier
coûtait mille fois moins cher que se tromper dans le code. Ce fait a disparu.

Corollaire important : se demander s'il faut spécifier, c'est déjà spécifier.
La question ne se pose pas. On ne trie pas ce qui mérite une analyse amont, on
cherche seulement comment obtenir un résultat sur chaque sujet.

## Le principe

L'humain n'apporte que deux choses que rien ne peut produire à sa place : ce
qu'il veut, et le verdict sur ce qui sort. Tout le reste se délègue.

Et comme l'humain en fera toujours le moins possible, ces deux gestes doivent
être courts, rares, et impossibles à sauter. Une bonne pratique qui repose sur
la discipline ne tient pas trois semaines. Elle doit être mécanique.

---

## 1. L'intention, critère d'arrêt et non de construction

L'intention n'est pas un préalable. Elle se dépose par le jugement : chaque
fois qu'on dit « non, pas ça », on précise ce qu'on veut. Au départ on ne l'a
pas, on ne l'aura qu'après avoir refusé assez de choses. Prétendre l'écrire
complète au début, c'est encore de la prédiction, et ça contredirait tout le
reste de la méthode.

Ce qu'on écrit au départ est donc une première approximation, une page, vingt
minutes. Sa fonction n'est pas de cadrer, c'est de donner quelque chose contre
quoi rendre le premier verdict.

Mais elle ne disparaît pas, pour une raison étroite et suffisante : le
jugement seul répond « est-ce que ça me plaît », pas « est-ce que ça sert mon
but ». Sans cap posé, on optimise ce qui marche localement, et on peut passer
trois semaines sur un chemin techniquement satisfaisant et hors sujet.

L'intention n'est donc pas un critère de construction. C'est un critère
d'arrêt.

**Rapport de poids.** Dire ce qu'on veut prend vingt minutes une fois. Juger
se fait cent fois par jour pendant des semaines. Le jugement est la quasi
totalité du travail humain, et l'intention en est le garde-fou directionnel.

## 2. Vérifier qu'on s'est compris, avant de lancer

On demande à la machine de reformuler l'intention avec ses mots, et on corrige
les écarts. Puis, avant chaque lancement long, on lui demande ce qu'elle
s'apprête à faire, et on lit.

C'est un accusé de réception. On ne rédige rien, on valide un écart. Ça coûte
deux minutes et ça évite des heures de production dans la mauvaise direction.

## 3. Tout se tente. Deux modes, pas deux méthodes

Il n'y a pas de sujets à spécifier et de sujets à tenter. Il n'y a que des
sujets à tenter, et deux façons d'obtenir le résultat.

**Observer.** Le résultat vient tout seul. On produit, on regarde, on corrige.
Rien à écrire, rien à préparer. C'est la majorité des sujets et c'est là que
la vitesse se gagne.

**Provoquer.** Le sujet ne renvoie rien quand il est cassé. Un paiement, une
règle d'accès, une reprise après incident ne produisent aucune image et aucune
gêne. On ne les spécifie pas, on va cogner dessus pour les faire parler :
payer le mauvais montant, payer deux fois, tuer le process en cours, employer
la carte de test en conditions réelles.

C'est toujours de l'empirique. Au lieu d'attendre le résultat, on va le
chercher.

L'irréversible ne fait pas exception : on ne le spécifie pas, on le casse dans
une copie. Un environnement de test est exactement l'empirique appliqué à ce
qu'on ne peut pas se permettre de rater en vrai.

Le vrai savoir-faire aujourd'hui n'est pas de savoir spécifier. C'est de
savoir provoquer un résultat sur ce qui n'en produit pas spontanément.

## 4. Un changement, un résultat, un regard

Le jugement est cadencé, et il bloque. On ne lance pas la suite tant que le
résultat précédent n'a pas été regardé.

C'est la règle la plus dure à tenir, parce que la machine va toujours plus
vite que l'œil. Dès qu'on empile deux ou trois changements, on ne sait plus
lequel a produit quoi, et le temps gagné se repaie au double.

Cette règle ne tient que si elle est outillée. Écrite dans un document, elle
sera enfreinte le jour même.

## 5. Contrôles et tests

Un contrôle produit par la machine qui vérifie la conformité à une prédiction
produite par la même machine ne vérifie rien. La boucle est fermée : elle peut
être parfaitement cohérente et complètement fausse.

Un contrôle utile compare à un point fixe extérieur : un résultat déjà validé
par un humain, une référence figée, une mesure du monde réel.

**Un test, ici, est un jugement humain figé et rejoué gratuitement.** C'est ce
qui rend le point 4 tenable dans la durée : le jugement est la ressource rare,
un test est le seul moyen de ne pas rendre deux fois le même verdict.

Conséquences.

Un test dont la valeur attendue n'a jamais été validée par un humain ne vaut
rien. Il mesure la cohérence de la machine avec elle-même.

L'ordre s'inverse par rapport au TDD, en mode observer : on juge d'abord, on
fige ensuite, parce que le verdict ne se prédit pas.

En mode provoquer, l'attaque elle-même devient le test. On garde le geste qui
a fait parler le sujet, et on le rejoue. C'est là que l'effort doit se
concentrer, et dès le premier jour, parce que rien ne viendra le réclamer.

Le test fige, et figer pendant l'exploration est une dépense : on verrouille
une chose qu'on cherche encore. Un test arrive donc quand un sujet cesse de
bouger. On ne peut pas le savoir à l'avance, on le constate : quand on ne
revient plus dessus et qu'on ne change plus rien. Donc on fige tard par
construction, et on rend le gel facile à défaire (date, raison, suppression
sans discussion si le sujet repart).

Règle d'alimentation : chaque panne réellement vécue devient un contrôle. La
couverture est une mesure interne au système, elle optimise la boucle fermée
et ne dit rien du contact avec le réel.

Ce qu'un test ne dit jamais : que le produit est bon. Il dit qu'il n'a pas
changé.

## 6. Ce qui remplace les règles

Une règle écrite ne se déclenche pas au moment où on en aurait besoin. Une
vérification qui refuse de continuer, si.

Tout ce qui compte migre donc du texte vers l'exécutable. Une consigne dans un
document est une intention. Un contrôle qui bloque est une contrainte. Seules
les contraintes survivent au temps et à la fatigue.

## 7. La mémoire du projet, écrite pour le modèle

Ni de l'intention, ni du jugement. Une troisième fonction, qui ne se déduit
pas des deux autres.

Une mémoire tenue en continu (décisions et leur raison, contraintes, pannes
connues) permet de reprendre un projet sans le reconstruire, et permet surtout
au modèle de travailler avec le contexte au lieu de le redécouvrir.

Contrainte : une mémoire non entretenue devient illisible et, pire, mensongère
sur l'état d'avancement. Elle doit distinguer l'état courant du chemin
parcouru, sinon plus personne ne sait la lire.

---

## Ce que ça coûte à l'humain, en tout

Une page d'intention. Un accusé de réception avant chaque lancement long. Un
regard par changement. Une séance d'attaque sur ce qui ne parle pas. Un
contrôle après chaque panne. L'entretien de la mémoire.

Tout ce qui demande davantage sera abandonné en cours de route, quelle que
soit la bonne volonté de départ.

## Ce qui reste du cahier des charges

La coordination entre plusieurs personnes, et le contrat avec un client. Deux
fonctions qui n'ont rien à voir avec la justesse du produit, et qui n'ont pas
bougé. Travaillant seul, je n'en ai aucun besoin.

## La limite que je ne sais pas traiter

Ce qui ne casse qu'avec le temps ou l'échelle. Une architecture qui tient à
cent utilisateurs et pas à cent mille, un modèle de données qui devient
invivable dans deux ans. On ne met pas le temps dans un bac à sable.

## Questions ouvertes

Je ne sais pas si cette méthode est stable, ou si elle décrit l'équilibre du
moment entre ce que le modèle sait faire et ce qu'il reste à l'humain. Si le résidu
de jugement continue de diminuer, le point 4 sautera le premier.

Est-ce que le jugement se délègue, en partie, et à quelle condition.

Le silence est ambigu à tous les étages de cette méthode : une erreur qui ne
se voit pas, une boucle auto-cohérente, une vigilance qui baisse parce que
tout va bien, un sujet stabilisé qui ressemble à un sujet abandonné. Comment
rendre le silence lisible.

---

## Annexe : la version courte, sans jargon

Avant, fabriquer un logiciel coûtait cher et prenait des mois. On réfléchissait
donc longtemps avant de commencer, on écrivait tout, on validait, et ensuite
seulement on construisait. C'était rationnel.

Aujourd'hui fabriquer ne coûte presque plus rien. Essayer est devenu moins
cher que réfléchir à ce qu'on va essayer. Donc on essaie, on regarde, on
corrige, on recommence. Et ça va plus vite et plus loin que l'ancienne méthode.

Ça marche tant qu'on voit le résultat. Une carte moche, ça se voit.

Certaines choses ne montrent rien. Un paiement mal branché ne prévient pas.
Tout a l'air normal, jusqu'au jour où ça ne l'est plus.

La solution n'est pas de revenir à l'ancienne méthode et de tout écrire à
l'avance. C'est d'aller taper dessus exprès pour les faire parler. Payer le
mauvais montant, payer deux fois, débrancher au milieu.

Deux choses ne se délèguent jamais : dire ce qu'on veut, et dire si c'est bon.

Et un problème nouveau : la machine produit plus que ce qu'on peut regarder.
Le temps qu'on passe à juger devient la vraie limite du projet.

---

## Confrontation au réel

### Cas 1 : L'encre des vents (ex Atelier des Cartes), 12 juillet au 18 août 2026

Le récit de ces cinq semaines est [ici](/journal/cinq-semaines-sans-cahier-des-charges).

Projet solo, sans client, 38 jours, 496 commits, produit en production. Je n'ai
suivi aucune méthode sur le moment, j'ai avancé de façon empirique.

**Le résultat valide la thèse.** Un moteur de cartographie et un site de vente
montés en cinq semaines sans une ligne de spécification, avec un niveau de
détail au-delà de ce que j'avais imaginé au départ. Le
bocage, qui fait aujourd'hui toute la carte, a été trouvé en regardant une
carte vide, pas en le prévoyant. Une spécification écrite au départ ne serait
jamais allée là.

**Point 1 absent, et ça se paie en direction.** Pas d'intention écrite, donc
pas de critère pour dire non. Trois constructions abandonnées après coup :
le tuilage, le rendu vectoriel du trait de côte, la chaîne de plaques. Ce que j'ai dit du
tuilage sur le moment : « c'était cohérent, mais ce n'était pas ce sur quoi
j'allais être redirigé après ».

**Point 3, mode provoquer jamais employé.** Un audit tardif trouve quatre
trous graves, tous les quatre sur le chemin de l'argent, aucun sur la
cartographie. La cause n'est pas l'absence de spécification, c'est que le
tunnel de paiement n'a jamais été attaqué. La carto renvoyait un résultat à
chaque gravure, le paiement ne renvoyait rien, et personne n'est allé le
chercher. Une demi-journée d'attaque aurait rendu les quatre faits.

**Points 4, 5 et 6 réinventés seuls, après une panne.** Le 4 le 27 juillet
(quatre changements empilés avant tout regard, 148 gravures lancées non
vérifiées). Le 6 le même jour, sous forme d'un script qui refuse de graver.
Le 5 le 16 août, sous forme de témoins comparés au pixel à une référence figée
validée à l'œil, et de cinq contrôles tirés de pannes vécues.

**Sur les tests.** 35 jours sans aucun test automatique. Correct sur la
cartographie, qui bougeait en permanence et se jugeait à l'œil : figer plus
tôt aurait coûté. Fautif sur le paiement, qui n'a jamais bougé et n'a jamais
parlé.

**Point 7 découvert par ce cas.** Le wiki tenu pour le modèle ne figurait pas
dans la méthode. Son défaut d'entretien est mesurable : 64 chantiers marqués
actifs alors qu'une partie est close, index qui ment sur l'état d'avancement.

**Ce que le cas ne prouve pas.** Un seul projet, un seul opérateur, sans
client et sans équipe. Les fonctions de coordination et de contrat n'ont
jamais été sollicitées. Rien ne peut être conclu ici sur un projet à
plusieurs.

---

## Journal des versions

- **0.1, 19 août 2026** : première pose. Six points issus de la réflexion
  prédire contre mesurer, plus un septième (la mémoire) après confrontation au
  cas Encre des vents.
- **0.2, 19 août 2026** : place des tests. Le test défini comme un jugement
  humain figé, donc comme l'amplificateur qui rend le point 4 tenable.
- **0.3, 19 août 2026** : correction de fond après relecture. L'ancien
  point 2 (trier ce qui mérite une spécification) était une spécification
  déguisée : supprimé. Remplacé par observer contre provoquer, deux modes d'un
  même empirisme. La position devient franche : l'empirique est la méthode la
  plus efficace, partout. Les trous du paiement sont relus non comme un échec
  de l'empirique mais comme un endroit où il n'est jamais allé. L'ancien point
  3 (spec continue) devient un accusé de réception. Ajout de la version courte
  sans jargon.
- **0.4, 19 août 2026** : point 1 corrigé. La part de jugement est plus
  importante que celle de ce qu'on veut. L'intention n'est
  plus un préalable mais un sédiment du jugement, et sa fonction devient un
  critère d'arrêt et non de construction. Rapport de poids explicité.
