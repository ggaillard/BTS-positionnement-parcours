# Mon parcours · positionnement BTS SIO

Outil de positionnement par compétences (bloc 1 « Développement ») et de parcours adaptatif au rythme de chaque étudiant.

**Lancer l'outil : https://ggaillard.github.io/BTS-positionnement-parcours/**

## Ce que fait l'outil
- Positionnement adaptatif sur 5 compétences (algorithmique, HTML/CSS, SQL, Git, POO), 4 niveaux chacune : la difficulté monte tant que l'étudiant réussit et s'arrête au premier « je ne sais pas ».
- Parcours et planning calés sur le nombre d'heures par semaine que l'étudiant indique ; « Faire le point » repose la question avec une autre variante.
- Page « Comment je travaille » : réflexion personnelle, jamais notée ni partagée.
- Partage volontaire : l'étudiant voit exactement ce qu'il transmet (nom, niveaux, date) sous forme de code.
- Vue enseignant : répartition par compétence et groupes de besoin, sans score global ni classement.

## Ce qu'il ne fait pas
- Il ne classe pas, ne décide d'aucune admission, note ou affectation.
- Il ne mesure ni personnalité, ni émotions, ni « potentiel ».
- Aucune donnée n'est envoyée : tout reste dans le navigateur de l'étudiant (localStorage).

## Adapter les questions
Le bloc `CONFIGURATION` en haut du script de `index.html` contient les compétences, les questions (variante `a` pour le positionnement, `b` pour le point d'étape ; la bonne réponse est toujours la première option, l'ordre est mélangé à l'affichage) et les activités proposées par niveau.
