# WebRéférences

Un répertoire statique de sites et d'outils, construit avec Astro. Les ressources sont des fichiers Markdown et la recherche fonctionne directement dans le navigateur, sans serveur applicatif.

## Démarrer

```sh
npm install
npm run dev
```

Pour générer le site statique dans `dist/` :

```sh
npm run build
npm run preview
```

## Ajouter une ressource

Créez un fichier `.md` dans `src/content/resources/`, par exemple :

```yaml
---
title: Nom du site
description: Une courte description de la ressource.
url: https://example.com/
category: Productivité
tags: [Organisation, Notes]
featured: false
---
```

Les catégories sont créées automatiquement à partir des fiches. `tags` sert à la recherche et `featured: true` permet de mettre une ressource dans la sélection de l'accueil (trois maximum, par ordre alphabétique). Relancez le build après chaque modification. Les liens proposés sont des exemples à personnaliser.

Pour un déploiement dans un sous-dossier, définissez `SITE_BASE` (par exemple `/webref/`) lors du build. `SITE_URL` peut contenir l'URL publique du site. Les icônes de sites sont chargées depuis le service de favicons de Google ; les initiales restent visibles sans connexion.

## Affichage mobile

Les styles ciblent d'abord les petits écrans : header compact, onglets Applications/Vidéos, filtres sur plusieurs lignes et cartes sur une colonne. Les contrôles tactiles disposent d'une hauteur minimale de 44 px. Les grilles s'enrichissent à partir de 640 px ; à partir de 860 px, la navigation principale remplace les onglets mobiles. Les catégories et les textes longs peuvent revenir à la ligne.

## Lecture des vidéos

Les fiches de `src/content/videos/` acceptent les liens YouTube `youtu.be`, `watch?v=`, `embed/` et `shorts/`. Le bouton « Lire sur le site » ouvre un lecteur YouTube dans une fenêtre intégrée ; le lecteur est chargé au clic et arrêté à la fermeture. Le lien externe reste disponible séparément.

La fenêtre du lecteur adapte ses dimensions à la largeur et à la hauteur disponibles, en portrait comme en paysage. Sur mobile, son en-tête est compact et le bouton de fermeture reste accessible.

Pour tester la lecture, utilisez l'adresse HTTP fournie par `npm run dev` ou `npm run preview` dans un navigateur compatible avec les codecs vidéo YouTube. L'ouverture directe du fichier HTML et certains navigateurs intégrés à VS Code peuvent empêcher la lecture.