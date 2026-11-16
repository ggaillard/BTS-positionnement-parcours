/* =====================================================================
   PROFILS DE POSITIONNEMENT — à adapter par l'enseignant
   Un profil = une classe + un semestre. Chaque compétence a 4 niveaux.
   Pour chaque niveau :
     a   : question du positionnement
     b   : question du point d'étape (autre variante, même difficulté)
     act : activités pour atteindre ce niveau
   La BONNE RÉPONSE est toujours la PREMIÈRE option (l'ordre est mélangé à l'affichage).
   pre : compétence conseillée avant celle-ci {id, niv}.
   ===================================================================== */
window.PROFILS = {

/* ------------------------------------------------------------------ */
'bts1-s1': { classe: 'BTS1', semestre: 'S1',
 titre: 'BTS1 · Semestre 1',
 sous: 'Du code au service : web, données, DevOps, sécurité',
 comps: [
 {id:'web', nom:'Web et applications', niv:[
  {a:{q:'Dans le modèle client-serveur, qui envoie la requête ?',o:['Le client (le navigateur)','Le serveur','Le routeur','La base de données']},
   b:{q:'Que renvoie un serveur web quand la page demandée n\'existe pas ?',o:['Le code 404','Le code 200','Le code 500','Le code 301']},
   act:['Le modèle client-serveur : requête, réponse, codes HTTP','Ouvrir l\'onglet Réseau (F12) et lire une requête']},
  {a:{q:'Quel protocole sécurise les échanges entre le navigateur et le serveur ?',o:['HTTPS','HTTP','FTP','SMTP']},
   b:{q:'Une API REST échange le plus souvent ses données au format…',o:['JSON','DOCX','MP3','EXE']},
   act:['HTTPS et certificats','API REST et format JSON']},
  {a:{q:'Pour qu\'un chat affiche instantanément les messages des autres, sans recharger la page, on utilise…',o:['Une connexion WebSocket','Un rechargement de la page toutes les secondes','Un formulaire POST','Un cookie']},
   b:{q:'Dans une API REST, quelle méthode HTTP sert à créer une ressource ?',o:['POST','GET','DELETE','HEAD']},
   act:['AJAX et WebSocket : du statique au temps réel','Méthodes HTTP et opérations CRUD']},
  {a:{q:'Une PWA (Progressive Web App) se distingue d\'un site classique parce qu\'elle…',o:['Peut s\'installer et fonctionner hors ligne grâce à un service worker','Est forcément écrite en Java','Ne fonctionne que sur ordinateur','N\'utilise pas HTML']},
   b:{q:'GET /api/livres/42 renvoie le code 401. Qu\'est-ce que cela signifie ?',o:['L\'appelant n\'est pas authentifié','Le livre 42 n\'existe pas','Le serveur a planté','La requête a réussi']},
   act:['PWA, responsive, mobile-first','Les familles de codes HTTP : 2xx, 3xx, 4xx, 5xx']}
 ]},
 {id:'data', nom:'Données', niv:[
  {a:{q:'Dans une base relationnelle, les données sont rangées dans…',o:['Des tables (lignes et colonnes)','Des fichiers texte libres','Des images','Des dossiers']},
   b:{q:'Quel langage sert à interroger une base relationnelle ?',o:['SQL','HTML','CSS','Uniquement Python']},
   act:['Base relationnelle : tables, lignes, colonnes','Premières requêtes SELECT … WHERE']},
  {a:{q:'Une clé primaire sert à…',o:['Identifier chaque ligne de façon unique','Trier les colonnes','Chiffrer la table','Relier deux serveurs']},
   b:{q:'Une base NoSQL orientée documents stocke typiquement…',o:['Des documents de type JSON','Uniquement des nombres','Des tables avec jointures obligatoires','Des pages HTML']},
   act:['Clés primaires et clés étrangères','SQL ou NoSQL : quand choisir quoi']},
  {a:{q:'Quelle différence entre un entrepôt de données et un lac de données ?',o:['L\'entrepôt stocke des données structurées et préparées, le lac des données brutes de tous formats','Le lac est toujours plus petit','L\'entrepôt ne contient que des images','Aucune différence']},
   b:{q:'ETL signifie…',o:['Extraire, Transformer, Charger','Envoyer, Tester, Livrer','Écrire, Trier, Lire','Exporter, Traduire, Lancer']},
   act:['Entrepôt, lac, lakehouse','Pipelines ETL / ELT']},
  {a:{q:'Un tableau de bord affiche un chiffre d\'affaires faux parce que des ventes sont comptées deux fois. Quelle dimension de la qualité des données est en cause ?',o:['L\'unicité','La fraîcheur','La disponibilité','La confidentialité']},
   b:{q:'Une base « vectorielle » permet surtout de…',o:['Chercher des contenus proches par le sens','Stocker des vidéos','Remplacer SQL pour la comptabilité','Chiffrer les mots de passe']},
   act:['Qualité des données : exactitude, complétude, unicité, fraîcheur','Bases vectorielles et recherche par le sens']}
 ]},
 {id:'devops', nom:'DevOps : Git, CI/CD, conteneurs', niv:[
  {a:{q:'Git sert avant tout à…',o:['Garder l\'historique des modifications du code','Héberger un site web','Compiler le code','Sauvegarder la base de données']},
   b:{q:'Quelle commande enregistre les modifications indexées dans l\'historique ?',o:['git commit -m "message"','git save','git push','git add']},
   act:['Pourquoi versionner : historique, retour en arrière','Créer un dépôt et faire ses premiers commits']},
  {a:{q:'Comment envoyer ses commits vers le dépôt distant (GitHub) ?',o:['git push','git pull','git fetch','git send']},
   b:{q:'La culture DevOps cherche principalement à…',o:['Rapprocher développement et exploitation pour livrer vite et sans casse','Supprimer les tests','Remplacer les développeurs par des scripts','Interdire les mises en production']},
   act:['Dépôt distant : clone, push, pull','Culture DevOps : le cycle de vie du code']},
  {a:{q:'L\'intégration continue (CI), c\'est…',o:['Construire et tester automatiquement le code à chaque modification poussée','Écrire le code à plusieurs en même temps','Livrer une fois par an','Documenter le code']},
   b:{q:'Un conteneur Docker résout surtout le problème…',o:['« Ça marche sur mon poste » : l\'application emporte son environnement','De la lenteur du réseau','Des mots de passe oubliés','Du manque de mémoire']},
   act:['Intégration continue avec GitHub Actions','Conteneurs : Dockerfile, image, conteneur']},
  {a:{q:'Dans un pipeline CI/CD, un test échoue après un push. Que doit-il se passer ?',o:['Le pipeline s\'arrête et la livraison est bloquée','On livre quand même','Le test est supprimé automatiquement','Le code est fusionné sur main']},
   b:{q:'Quelle différence entre une image et un conteneur Docker ?',o:['L\'image est le modèle figé, le conteneur une instance qui s\'exécute','C\'est la même chose','Le conteneur est le modèle, l\'image l\'instance','L\'image ne sert qu\'aux sites web']},
   act:['Lire et réparer un pipeline qui échoue','Images, conteneurs, docker compose']}
 ]},
 {id:'secu', nom:'Sécurité et conformité', niv:[
  {a:{q:'Un mot de passe solide est avant tout…',o:['Long et unique pour chaque service','Court et facile à retenir','Le même partout','Votre date de naissance']},
   b:{q:'L\'hameçonnage (phishing) consiste à…',o:['Tromper quelqu\'un pour lui soutirer des identifiants ou une action','Chiffrer un disque','Saturer un serveur','Copier un logiciel']},
   act:['Hygiène numérique : mots de passe, double authentification, phishing']},
  {a:{q:'Quelle différence entre une vulnérabilité et une menace ?',o:['La vulnérabilité est une faiblesse, la menace ce qui peut l\'exploiter','Aucune','La menace est une faiblesse du code','La vulnérabilité est un virus']},
   b:{q:'Le RGPD protège…',o:['Les données personnelles des personnes','Les brevets des entreprises','Uniquement les mots de passe','Le code source']},
   act:['Vulnérabilité, menace, risque','RGPD : données personnelles, droits, obligations']},
  {a:{q:'Une injection SQL est possible quand…',o:['L\'application insère directement la saisie de l\'utilisateur dans la requête','La base est trop grosse','Le site est en HTTPS','On utilise un ORM']},
   b:{q:'Le Top 10 de l\'OWASP, c\'est…',o:['La liste des risques de sécurité les plus critiques des applications web','Un classement des langages','Une norme de qualité du code','Un antivirus']},
   act:['OWASP Top 10 : injection, XSS, contrôle d\'accès…','Cartographier les vulnérabilités d\'une application']},
  {a:{q:'Comment doit-on stocker les mots de passe des utilisateurs ?',o:['Hachés avec un algorithme lent et salé (bcrypt, Argon2)','En clair, pour pouvoir les renvoyer','Chiffrés avec une clé écrite dans le code','Encodés en base64']},
   b:{q:'Selon l\'AI Act, un système d\'IA qui décide de l\'admission d\'étudiants est…',o:['À haut risque, soumis à de fortes obligations','Interdit dans tous les cas','Sans aucune obligation','À risque minimal']},
   act:['Remédiation : authentification, hachage, sessions','Conformité : RGPD, AI Act, NIS 2']}
 ]}
]},

/* ------------------------------------------------------------------ */
'bts1-s2': { classe: 'BTS1', semestre: 'S2',
 titre: 'BTS1 · Semestre 2',
 sous: 'Fondamentaux du développement : algorithmique, web, SQL, Git, POO',
 comps: [
 {id:'algo', nom:'Algorithmique', niv:[
  {a:{q:'Après <code>x = 3 ; x = x + 2</code>, que vaut x ?',o:['5','3','2','32']},b:{q:'Après <code>a = 10 ; b = a ; a = 4</code>, que vaut b ?',o:['10','4','14','0']},act:['Variables et affectation : exercices 1 à 5','Tracer à la main l\'état des variables ligne par ligne']},
  {a:{q:'Combien de fois « ok » s\'affiche-t-il ?<pre>pour i de 1 à 4 : afficher "ok"</pre>',o:['4','3','5','1']},b:{q:'Avec n = 10, qu\'affiche :<pre>si n > 10 alors afficher "A" sinon afficher "B"</pre>',o:['B','A','rien','A puis B']},act:['Conditions : si / sinon, opérateurs de comparaison','Boucles pour : compter, répéter']},
  {a:{q:'Que vaut s à la fin ?<pre>s = 0\npour i de 1 à 3 : s = s + i</pre>',o:['6','3','5','0']},b:{q:'Que vaut n à la fin ?<pre>n = 0\ntant que n < 10 : n = n + 3</pre>',o:['12','9','10','3']},act:['Accumulateurs et compteurs','Boucle tant que : condition d\'arrêt, boucle infinie']},
  {a:{q:'Pour chercher le maximum d\'un tableau, quelle valeur initiale de max est toujours sûre ?',o:['Le premier élément du tableau','0','-1','La longueur du tableau']},b:{q:'Recherche par dichotomie dans un tableau trié de 1 000 éléments : combien de comparaisons au plus, environ ?',o:['10','100','500','1 000']},act:['Fonctions : paramètres, valeur de retour','Algorithmes classiques sur tableaux : maximum, recherche, tri']}
 ]},
 {id:'web', nom:'HTML / CSS', niv:[
  {a:{q:'Quelle balise crée un lien hypertexte ?',o:['&lt;a&gt;','&lt;link&gt;','&lt;href&gt;','&lt;url&gt;']},b:{q:'Quelle balise donne le titre principal visible dans la page ?',o:['&lt;h1&gt;','&lt;title&gt;','&lt;head&gt;','&lt;header&gt;']},act:['Structure d\'une page : head, body, titres, paragraphes, liens','Valider sa page avec le validateur du W3C']},
  {a:{q:'Quel attribut donne le texte alternatif d\'une image ?',o:['alt','title','src','desc']},b:{q:'Quel sélecteur CSS vise l\'élément d\'id « menu » ?',o:['#menu','.menu','menu','*menu']},act:['Images, listes, tableaux, accessibilité (alt)','Sélecteurs CSS : balise, classe, id']},
  {a:{q:'<code>p { color: red } .note { color: blue }</code> : de quelle couleur est <code>&lt;p class="note"&gt;</code> ?',o:['Bleu','Rouge','Noir','Violet']},b:{q:'Quelle déclaration, posée sur le parent, aligne ses enfants en ligne ?',o:['display: flex','float: left','position: flex','align: row']},act:['Cascade et spécificité','Flexbox : alignement et répartition']},
  {a:{q:'Pour changer la mise en page sous 600 px de large, on utilise…',o:['@media (max-width: 600px)','@screen 600','@viewport','width: 600px !important']},b:{q:'Quel champ convient le mieux à une adresse e-mail (validation native, clavier mobile adapté) ?',o:['&lt;input type="email"&gt;','&lt;input type="text"&gt;','&lt;textarea&gt;','&lt;input type="mail"&gt;']},act:['Responsive : media queries, unités relatives','Formulaires : types de champs, validation']}
 ]},
 {id:'sql', nom:'SQL', niv:[
  {a:{q:'Quelle requête lit toutes les colonnes de la table client ?',o:['SELECT * FROM client;','GET * FROM client;','SELECT client;','READ client;']},b:{q:'Quelle clause filtre les lignes d\'un SELECT ?',o:['WHERE','FILTER','HAVING','ORDER BY']},act:['SELECT, FROM, WHERE sur une table','Opérateurs : =, &lt;, LIKE, AND, OR']},
  {a:{q:'Comment trier les résultats par nom alphabétique ?',o:['ORDER BY nom','SORT BY nom','GROUP BY nom','ORDER nom']},b:{q:'Comment compter les lignes de la table commande ?',o:['SELECT COUNT(*) FROM commande;','SELECT SUM(*) FROM commande;','SELECT TOTAL(commande);','SELECT NUMBER FROM commande;']},act:['ORDER BY, LIMIT, DISTINCT','Fonctions d\'agrégat : COUNT, SUM, AVG']},
  {a:{q:'Afficher chaque commande avec le nom de son client (commande.client_id → client.id) :',o:['… FROM commande JOIN client ON client.id = commande.client_id','… FROM commande UNION client','… FROM commande WHERE client = commande','… FROM commande GROUP BY client']},b:{q:'Obtenir le nombre de commandes par client :',o:['SELECT client_id, COUNT(*) FROM commande GROUP BY client_id;','SELECT client_id, COUNT(*) FROM commande ORDER BY client_id;','SELECT DISTINCT client_id FROM commande;','SELECT client_id FROM commande HAVING COUNT;']},act:['Jointures internes','GROUP BY et HAVING']},
  {a:{q:'Lister les clients qui n\'ont jamais commandé :',o:['LEFT JOIN commande … WHERE commande.id IS NULL','INNER JOIN commande … WHERE commande.id = NULL','JOIN commande … WHERE commande.id = 0','SELECT * FROM client EXCEPT client']},b:{q:'Pourquoi utiliser des requêtes préparées ?',o:['Pour empêcher l\'injection SQL en séparant le code et les données','Pour accélérer l\'affichage de la page','Pour chiffrer la base','Pour éviter les doublons']},act:['Jointures externes, sous-requêtes','Requêtes préparées et injection SQL']}
 ]},
 {id:'git', nom:'Git', niv:[
  {a:{q:'Quelle commande montre les fichiers modifiés depuis le dernier commit ?',o:['git status','git commit','git push','git init']},b:{q:'Quelle commande enregistre les modifications indexées dans l\'historique ?',o:['git commit -m "message"','git save','git push','git add']},act:['Créer un dépôt, status, commit','Écrire un bon message de commit']},
  {a:{q:'Comment ajouter un fichier à l\'index (zone de préparation) ?',o:['git add fichier','git commit fichier','git index fichier','git push fichier']},b:{q:'Comment envoyer ses commits vers le dépôt distant ?',o:['git push','git pull','git fetch','git send']},act:['add, commit, log : le cycle complet','Dépôt distant : clone, push, pull']},
  {a:{q:'Comment créer une branche et basculer dessus ?',o:['git switch -c ma-branche','git branch --go ma-branche','git checkout ma-branche (sur une branche qui n\'existe pas encore)','git merge ma-branche']},b:{q:'Comment récupérer et intégrer les modifications distantes de la branche courante ?',o:['git pull','git push','git clone','git status']},act:['Branches : créer, basculer, fusionner','Travailler à plusieurs sur un même dépôt']},
  {a:{q:'Git signale un conflit de fusion. Que faites-vous ?',o:['J\'édite les zones marquées &lt;&lt;&lt;&lt;&lt;&lt;&lt;, puis git add et git commit','Je supprime le dépôt local et je reclone','git push --force','J\'attends que Git le résolve']},b:{q:'Comment annuler un commit déjà poussé et partagé, sans réécrire l\'historique ?',o:['git revert &lt;commit&gt;','git reset --hard &lt;commit&gt;','git commit --amend','git rebase -i']},act:['Résoudre un conflit','Annuler proprement : revert, restore']}
 ]},
 {id:'poo', nom:'POO', pre:{id:'algo',niv:2}, niv:[
  {a:{q:'Une classe, c\'est…',o:['Un modèle à partir duquel on crée des objets','Un objet particulier','Une variable globale','Une fonction']},b:{q:'Créer un objet à partir d\'une classe s\'appelle…',o:['Instancier','Hériter','Encapsuler','Compiler']},act:['Classe, objet, attribut, méthode','Écrire et instancier sa première classe']},
  {a:{q:'Déclarer un attribut private sert à…',o:['Empêcher l\'accès direct depuis l\'extérieur de la classe','Accélérer le programme','Le partager entre toutes les instances','Le rendre constant']},b:{q:'Quelle méthode est appelée automatiquement à la création d\'un objet ?',o:['Le constructeur','Le destructeur','Un accesseur (getter)','main']},act:['Encapsulation : private, accesseurs','Constructeurs']},
  {a:{q:'<code>class Chien extends Animal</code> signifie…',o:['Chien hérite de Animal','Animal hérite de Chien','Chien contient un attribut Animal','Les deux classes sont identiques']},b:{q:'Quel mot-clé rend un attribut commun à toutes les instances ?',o:['static','private','abstract','new']},act:['Héritage, redéfinition de méthode','Membres statiques']},
  {a:{q:'Une interface sert à…',o:['Définir un contrat de méthodes que des classes s\'engagent à implémenter','Stocker des données','Créer une instance','Remplacer l\'héritage dans tous les cas']},b:{q:'Le polymorphisme permet…',o:['D\'appeler la même méthode sur des objets de classes différentes, chacun avec son comportement','D\'avoir plusieurs constructeurs, uniquement','De copier un objet','De cacher les attributs']},act:['Classes abstraites et interfaces','Polymorphisme']}
 ]}
]},

/* ------------------------------------------------------------------ */
'bts2-s1': { classe: 'BTS2', semestre: 'S1',
 titre: 'BTS2 · Semestre 1',
 sous: 'C# / .NET, modélisation, framework MVC, sécurité applicative',
 comps: [
 {id:'csharp', nom:'POO et C# / .NET', niv:[
  {a:{q:'En C#, que fait <code>var p = new Playlist();</code> ?',o:['Il crée une instance de la classe Playlist','Il déclare une classe','Il supprime une playlist','Il hérite de Playlist']},
   b:{q:'La propriété <code>public string Titre { get; set; }</code> permet…',o:['De lire et modifier Titre depuis l\'extérieur, via des accesseurs','De rendre Titre constant','De cacher Titre','D\'appeler une méthode Titre']},
   act:['Classes, objets, propriétés en C#','Constructeurs et instanciation']},
  {a:{q:'<code>List&lt;Morceau&gt;</code> est…',o:['Une collection générique typée qui ne contient que des Morceau','Un tableau de taille fixe','Une classe abstraite','Un dictionnaire']},
   b:{q:'Pourquoi déclarer un champ private et l\'exposer par une propriété ?',o:['Pour contrôler l\'accès et valider les valeurs (encapsulation)','Pour accélérer le programme','Pour le partager entre toutes les instances','Parce que le compilateur l\'impose']},
   act:['Collections génériques : List, Dictionary','Encapsulation et validation dans les propriétés']},
  {a:{q:'Une interface <code>IExportable</code> avec une méthode <code>Exporter()</code> impose…',o:['Que chaque classe qui l\'implémente fournisse sa méthode Exporter()','Que la classe hérite d\'Exportable','Que la méthode soit statique','Rien du tout']},
   b:{q:'Que renvoie <code>morceaux.Where(m =&gt; m.Duree &gt; 180).Count()</code> ?',o:['Le nombre de morceaux de plus de 180 s','La liste des morceaux de plus de 180 s','La durée totale','Le premier morceau de plus de 180 s']},
   act:['Interfaces et héritage en C#','LINQ : Where, Select, OrderBy, Count']},
  {a:{q:'Une méthode <code>async Task&lt;List&lt;Morceau&gt;&gt; ChargerAsync()</code> sert à…',o:['Charger sans bloquer le programme pendant l\'attente (réseau, disque)','Charger obligatoirement sur plusieurs cœurs','Charger toutes les playlists en parallèle','Éviter les exceptions']},
   b:{q:'L\'injection de dépendances consiste à…',o:['Fournir à une classe les objets dont elle a besoin au lieu qu\'elle les crée elle-même','Injecter du SQL','Copier une classe dans une autre','Charger une DLL au démarrage']},
   act:['Programmation asynchrone : async / await','Injection de dépendances et tests']}
 ]},
 {id:'model', nom:'Modélisation (Merise, UML)', niv:[
  {a:{q:'Dans un MCD, une entité représente…',o:['Un ensemble d\'objets de même nature (ex. Client)','Une requête SQL','Un écran de l\'application','Une valeur unique']},
   b:{q:'Dans un diagramme de classes UML, une classe contient…',o:['Un nom, des attributs et des méthodes','Uniquement des tables','Des écrans','Des requêtes']},
   act:['Recueil du besoin : repérer entités et propriétés','Lire un diagramme de classes simple']},
  {a:{q:'Client (1,n) — passe — (1,1) Commande : une commande est passée par…',o:['Un et un seul client','Plusieurs clients','Aucun ou plusieurs clients','On ne peut pas savoir']},
   b:{q:'L\'identifiant d\'une entité sert à…',o:['Distinguer chaque occurrence de façon unique','Trier les entités','Relier deux MCD','Calculer un total']},
   act:['Associations et cardinalités','Identifiants et règles de gestion']},
  {a:{q:'Une association (0,n)—(0,n) entre Étudiant et Cours devient, en relationnel…',o:['Une table d\'association avec deux clés étrangères','Une colonne dans Étudiant','Une colonne dans Cours','Rien du tout']},
   b:{q:'En UML, une flèche à triangle vide de Chien vers Animal signifie…',o:['Chien hérite d\'Animal','Animal hérite de Chien','Chien contient des Animal','Chien utilise Animal une fois']},
   act:['Passage du MCD au modèle relationnel','Héritage et associations en UML']},
  {a:{q:'Une donnée portée par une association (ex. la note d\'un étudiant dans un cours) se traduit…',o:['Par un attribut de la table d\'association','Par un attribut de la table Étudiant','Par un attribut de la table Cours','Par une nouvelle base']},
   b:{q:'Dans une composition UML…',o:['La partie n\'existe pas sans le tout','La partie survit au tout','Il n\'y a pas de lien entre les classes','Les deux classes sont identiques']},
   act:['Associations porteuses, Merise 2 (héritage, contraintes)','Composition, agrégation, classes d\'association']}
 ]},
 {id:'mvc', nom:'Framework MVC (Laravel)', pre:{id:'csharp',niv:1}, niv:[
  {a:{q:'Dans MVC, le contrôleur…',o:['Reçoit la requête, prépare les données et choisit la vue','Affiche le HTML','Stocke les données sur disque','Est la base de données']},
   b:{q:'Dans Laravel, où déclare-t-on les URL de l\'application web ?',o:['routes/web.php','config/app.php','public/index.html','database/seeders']},
   act:['Le flux MVC : URL → route → contrôleur → vue','Routes, contrôleurs et vues Blade']},
  {a:{q:'Une migration Laravel sert à…',o:['Décrire et versionner la structure de la base','Migrer le site vers un autre serveur','Copier les données d\'une base à l\'autre','Mettre à jour Laravel']},
   b:{q:'Dans une vue Blade, <code>{{ $livre-&gt;titre }}</code>…',o:['Affiche le titre en échappant le HTML','Exécute du PHP sans rien afficher','Affiche le titre sans échappement','Commente la ligne']},
   act:['Migrations et seeders','Blade : affichage, boucles, composants']},
  {a:{q:'<code>Livre::where(\'dispo\', true)-&gt;get()</code> est…',o:['Une requête Eloquent qui renvoie les livres disponibles','Une requête SQL brute','Une suppression','Une migration']},
   b:{q:'« Un auteur a plusieurs livres » s\'écrit dans le modèle Auteur avec…',o:['hasMany(Livre::class)','belongsTo(Livre::class)','hasOne(Livre::class)','manyToMany()']},
   act:['Eloquent : requêtes et scopes','Relations Eloquent : hasMany, belongsTo, belongsToMany']},
  {a:{q:'Pourquoi valider la requête (<code>$request-&gt;validate([...])</code>) avant d\'enregistrer ?',o:['Pour refuser côté serveur les données incorrectes, même si le formulaire est contourné','Pour accélérer l\'enregistrement','Parce que la base l\'exige','Pour remplacer le jeton CSRF']},
   b:{q:'Un contrôleur « resource » regroupe…',o:['Les 7 actions CRUD standard (index, create, store, show, edit, update, destroy)','Uniquement l\'affichage','Les migrations','Les tests']},
   act:['CRUD complet avec un contrôleur resource','Validation et messages d\'erreur']}
 ]},
 {id:'secuapp', nom:'Sécurité applicative', niv:[
  {a:{q:'L\'authentification sert à…',o:['Vérifier l\'identité de l\'utilisateur','Vérifier ses droits','Chiffrer la base','Accélérer la connexion']},
   b:{q:'L\'autorisation sert à…',o:['Vérifier ce qu\'un utilisateur identifié a le droit de faire','Vérifier son mot de passe','Créer son compte','Le déconnecter']},
   act:['Authentification et autorisation','Sessions et cookies']},
  {a:{q:'Le jeton CSRF d\'un formulaire protège contre…',o:['L\'envoi d\'une requête à l\'insu de l\'utilisateur depuis un autre site','L\'injection SQL','La force brute sur le mot de passe','Les virus']},
   b:{q:'Un middleware auth posé sur une route…',o:['Bloque l\'accès aux visiteurs non connectés','Chiffre la page','Accélère la route','Journalise les erreurs']},
   act:['CSRF et protection des formulaires','Middlewares et rôles']},
  {a:{q:'Afficher une saisie utilisateur sans l\'échapper expose à…',o:['Une faille XSS (script injecté dans la page)','Une injection SQL','Un déni de service','Un CSRF']},
   b:{q:'En changeant l\'URL /commandes/15 en /commandes/16, un utilisateur voit la commande d\'un autre. Quel est le défaut ?',o:['Un contrôle d\'accès manquant sur la ressource','Une injection SQL','Un mot de passe faible','L\'absence de HTTPS']},
   act:['XSS et échappement','Contrôle d\'accès : policies, propriétaire de la ressource']},
  {a:{q:'Pour limiter les attaques par force brute sur la connexion, on…',o:['Limite le nombre de tentatives et on peut ajouter la double authentification','Affiche un message d\'erreur détaillé','Désactive HTTPS','Stocke les mots de passe en clair']},
   b:{q:'Où ranger la clé d\'API d\'un service tiers dans une application Laravel ?',o:['Dans le fichier .env, jamais versionné','Dans le code du contrôleur','Dans la vue Blade','Dans le README']},
   act:['Limitation de débit, MFA','Gestion des secrets : .env, variables d\'environnement']}
 ]}
]},

/* ------------------------------------------------------------------ */
'bts2-s2': { classe: 'BTS2', semestre: 'S2',
 titre: 'BTS2 · Semestre 2',
 sous: 'API, tests et qualité, mise en production, IA en entreprise',
 comps: [
 {id:'api', nom:'API REST', niv:[
  {a:{q:'Une API REST permet…',o:['À des applications d\'échanger des données via HTTP','D\'afficher uniquement des pages HTML','De compiler du code','De remplacer une base de données']},
   b:{q:'Quelle méthode HTTP sert à lire une ressource ?',o:['GET','POST','PUT','DELETE']},
   act:['Principes REST : ressources, méthodes, JSON','Tester une API avec un client HTTP']},
  {a:{q:'Quel code HTTP renvoyer après la création réussie d\'une ressource ?',o:['201 Created','200 OK','404 Not Found','500 Internal Server Error']},
   b:{q:'Quelle URL respecte les conventions REST pour le livre 42 ?',o:['/api/livres/42','/api/getLivre?id=42','/api/livre_lire_42','/api/livres/supprimer/42']},
   act:['Codes de réponse et conventions d\'URL','Routes d\'API et contrôleurs d\'API']},
  {a:{q:'Où se trouve l\'identité de l\'appelant dans une requête d\'API ?',o:['Dans l\'en-tête Authorization: Bearer &lt;jeton&gt;','Obligatoirement dans un cookie de session','Dans l\'URL, ?user=12','Dans le corps JSON, champ role']},
   b:{q:'Pourquoi une API Resource plutôt que renvoyer directement le modèle ?',o:['Pour choisir les champs exposés et garder un contrat stable','Pour aller plus vite','Parce que le modèle ne sait pas produire du JSON','Pour éviter le CSRF']},
   act:['Authentification par jeton (Sanctum)','API Resources : le contrat de l\'API']},
  {a:{q:'Une liste paginée renvoie data, links et meta. Que contient meta ?',o:['La page courante, le total, la taille de page','Les éléments de la page','Les liens vers les autres pages','Les erreurs de validation']},
   b:{q:'Pourquoi versionner une API (/api/v1/…) ?',o:['Pour la faire évoluer sans casser les clients existants','Pour la sécuriser','Pour la rendre plus rapide','Parce que HTTP l\'exige']},
   act:['Pagination, filtres, tri','Versionnement et documentation (OpenAPI)']}
 ]},
 {id:'tests', nom:'Tests et qualité', niv:[
  {a:{q:'Un test unitaire vérifie…',o:['Une petite unité de code isolée (une méthode, une classe)','L\'application entière en production','La vitesse du réseau','Le design']},
   b:{q:'Un test au vert signifie…',o:['Que le comportement vérifié est celui attendu','Que le code n\'a aucun bug','Que le code est rapide','Que le code est documenté']},
   act:['Écrire et lancer ses premiers tests','Lire le résultat d\'une suite de tests']},
  {a:{q:'Dans un test, « Arrange, Act, Assert » signifie…',o:['Préparer, exécuter, vérifier','Écrire, compiler, livrer','Analyser, agir, archiver','Tester, corriger, recommencer']},
   b:{q:'Un test de fonctionnalité (feature test) vérifie…',o:['Une requête HTTP complète et sa réponse','Une seule méthode isolée','La mise en page CSS','Le temps de compilation']},
   act:['Structure d\'un test : AAA','Tests de fonctionnalité sur les routes']},
  {a:{q:'La couverture de code mesure…',o:['La part du code exécutée par les tests','Le nombre de bugs','La qualité des noms de variables','La vitesse des tests']},
   b:{q:'Une Quality Gate SonarCloud qui échoue doit…',o:['Bloquer la fusion tant que les problèmes ne sont pas traités','Être ignorée','Supprimer la branche','Déployer quand même']},
   act:['Couverture de code','Analyse statique et Quality Gate']},
  {a:{q:'Pour tester une classe qui appelle une API externe, on…',o:['Remplace l\'API par un double de test (mock, fake)','Appelle la vraie API à chaque test','Ne la teste pas','Teste en production']},
   b:{q:'Le TDD consiste à…',o:['Écrire d\'abord le test qui échoue, puis le code qui le fait passer','Écrire les tests à la fin du projet','Tester uniquement à la main','Laisser l\'IA écrire les tests après coup']},
   act:['Doubles de test : mock, fake, stub','TDD : rouge, vert, refactor']}
 ]},
 {id:'prod', nom:'Mise en production', niv:[
  {a:{q:'Mettre en production, c\'est…',o:['Rendre l\'application accessible aux vrais utilisateurs','Écrire le code','Tester sur son poste','Créer la base de données en local']},
   b:{q:'Pourquoi le fichier .env n\'est-il jamais versionné ?',o:['Il contient des secrets (mots de passe, clés)','Il est trop gros','Git ne lit pas ce format','Il est généré automatiquement']},
   act:['Environnements : développement, recette, production','Secrets et configuration']},
  {a:{q:'Le déploiement continu (CD), c\'est…',o:['Livrer automatiquement en production une fois le code validé par la CI','Développer sans pause','Déployer à la main chaque soir','Sauvegarder la base']},
   b:{q:'En production, le mode debug de l\'application doit être…',o:['Désactivé, pour ne pas afficher d\'informations internes','Activé pour aider les utilisateurs','Supprimé du code','Activé seulement le week-end']},
   act:['Pipeline CI/CD jusqu\'à la production','Configuration de production : debug, cache, logs']},
  {a:{q:'<code>docker compose up</code> sert à…',o:['Démarrer ensemble les services décrits (application, base…)','Compiler le code','Pousser l\'image sur GitHub','Supprimer les conteneurs']},
   b:{q:'La supervision d\'une application en production sert à…',o:['Détecter pannes et dégradations, idéalement avant les utilisateurs','Écrire les tests','Accélérer le code','Remplacer les sauvegardes']},
   act:['Conteneuriser une application avec sa base','Supervision, alertes, journaux']},
  {a:{q:'Un déploiement casse la production. Quelle stratégie permet de revenir vite en arrière ?',o:['Redéployer la version précédente (rollback)','Corriger directement sur le serveur','Attendre le prochain sprint','Supprimer la base']},
   b:{q:'Une sauvegarde n\'est fiable que si…',o:['On a déjà testé sa restauration','Elle est sur le même disque','Elle est faite une fois par an','Elle est chiffrée, rien d\'autre']},
   act:['Retour arrière et déploiements sans coupure','Sauvegarde, restauration, continuité d\'activité (PCA)']}
 ]},
 {id:'ia', nom:'IA en entreprise', niv:[
  {a:{q:'Un grand modèle de langage (LLM) génère du texte en…',o:['Prédisant la suite la plus probable à partir de son entraînement','Consultant une base de faits vérifiés','Copiant Wikipédia','Exécutant du SQL']},
   b:{q:'Une « hallucination » d\'un modèle d\'IA, c\'est…',o:['Une réponse fausse présentée avec assurance','Un bug d\'affichage','Une réponse trop lente','Un refus de répondre']},
   act:['Comment fonctionne un LLM, et ses limites','Vérifier une réponse d\'IA']},
  {a:{q:'Un prompt efficace précise…',o:['Le rôle, le contexte, la tâche et le format attendu','Uniquement la question, en un mot','Le nom du modèle','Rien : l\'IA devine']},
   b:{q:'Faire tourner un petit modèle en local (ex. avec Ollama) permet surtout…',o:['De garder les données sur sa machine','D\'avoir les meilleures réponses possibles','De ne jamais se tromper','De se passer de mémoire']},
   act:['Écrire un prompt structuré','Modèles locaux et souveraineté des données']},
  {a:{q:'Le RAG (génération augmentée par recherche) consiste à…',o:['Retrouver des documents pertinents et les fournir au modèle pour qu\'il réponde à partir d\'eux','Réentraîner le modèle chaque jour','Traduire les questions','Générer des images']},
   b:{q:'Pour mesurer la qualité d\'un tri de tickets fait par une IA, on…',o:['Compare ses réponses à des tickets déjà étiquetés et on calcule des indicateurs','Demande à l\'IA si elle est sûre','Regarde trois exemples','Mesure seulement le temps de réponse']},
   act:['RAG : découper, indexer, retrouver, répondre','Mesurer une IA : jeu de test, précision, rappel']},
  {a:{q:'Un agent IA se distingue d\'un simple chatbot parce qu\'il…',o:['Enchaîne des actions en appelant des outils (API, fichiers…) pour atteindre un but','Répond plus poliment','N\'utilise pas de modèle de langage','Fonctionne sans données']},
   b:{q:'Une injection de prompt, c\'est…',o:['Un contenu malveillant (document, page) qui détourne les instructions du modèle','Une erreur de syntaxe dans le prompt','Un prompt trop long','Un moyen d\'accélérer le modèle']},
   act:['Agents et outils : concevoir, piloter','Sécuriser une IA : injection de prompt, données, AI Act']}
 ]}
]}
};
