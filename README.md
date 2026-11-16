# Mon parcours · positionnement BTS SIO

Outil de positionnement par compétences et de parcours adaptatif au rythme de chaque étudiant, pour le BTS1 et le BTS2, semestre 1 ou semestre 2.

**Lancer l'outil : https://ggaillard.github.io/BTS-positionnement-parcours/**

## Liens directs par classe

La classe et le semestre sont déjà choisis à l'ouverture (l'étudiant peut encore les changer).

| Classe | Lien |
|---|---|
| BTS1 · Semestre 1 | https://ggaillard.github.io/BTS-positionnement-parcours/#bts1-s1 |
| BTS1 · Semestre 2 | https://ggaillard.github.io/BTS-positionnement-parcours/#bts1-s2 |
| BTS2 · Semestre 1 | https://ggaillard.github.io/BTS-positionnement-parcours/#bts2-s1 |
| BTS2 · Semestre 2 | https://ggaillard.github.io/BTS-positionnement-parcours/#bts2-s2 |

## Les compétences de chaque profil

| Profil | Compétences (4 niveaux chacune) |
|---|---|
| BTS1 · S1 | Web et applications · Données · DevOps (Git, CI/CD, conteneurs) · Sécurité et conformité |
| BTS1 · S2 | Algorithmique · HTML/CSS · SQL · Git · POO |
| BTS2 · S1 | POO et C# / .NET · Modélisation (Merise, UML) · Framework MVC (Laravel) · Sécurité applicative |
| BTS2 · S2 | API REST · Tests et qualité · Mise en production · IA en entreprise |

## Ce que fait l'outil
- Positionnement adaptatif : la difficulté monte tant que l'étudiant réussit et s'arrête au premier « je ne sais pas ».
- Parcours et planning calés sur le nombre d'heures par semaine que l'étudiant indique ; « Faire le point » repose la question avec une autre variante.
- Chaque semestre garde son propre positionnement : passer du S1 au S2 n'efface rien.
- Page « Comment je travaille » : réflexion personnelle, jamais notée ni partagée.
- Partage volontaire : l'étudiant voit exactement ce qu'il transmet (nom, classe et semestre, niveaux, date) sous forme de code `PARC2:…`.
- Vue enseignant : les codes de toutes les classes se collent ensemble ; répartition par compétence et groupes de besoin par classe, sans score global ni classement.

## Ce qu'il ne fait pas
- Il ne classe pas, ne décide d'aucune admission, note ou affectation.
- Il ne mesure ni personnalité, ni émotions, ni « potentiel ».
- Aucune donnée n'est envoyée : tout reste dans le navigateur de l'étudiant (localStorage).

## Adapter les questions
Tout est dans `profils.js` : un bloc par profil (classe + semestre), avec ses compétences, ses questions (variante `a` pour le positionnement, `b` pour le point d'étape ; la bonne réponse est toujours la première option, l'ordre est mélangé à l'affichage) et les activités proposées par niveau.
