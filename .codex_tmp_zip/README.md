# PNLink User Engagement Dashboard

Dashboard local en HTML/CSS/JavaScript pour analyser un export Excel PNLink des utilisateurs.

## Ouvrir le dashboard

1. Dézipper le dossier.
2. Ouvrir `index.html` dans un navigateur moderne.
3. Cliquer sur **Choose file / Choisir un fichier**.
4. Sélectionner un export Excel `.xlsx` ou `.xls`, par exemple `users_export.xlsx`.

Le dashboard lit la première feuille Excel et met automatiquement à jour les KPI, filtres, graphiques, tableaux, détails utilisateurs et exports disponibles.

## Notes design

- Palette limitée aux couleurs PN demandées : `#213c83`, `#ff7940`, `#00b3ff`, `#1a3069`, `#d96736`, `#2b2b2b`.
- Aucun dégradé n'est utilisé.
- Les titres utilisent `Oswald` si la police est disponible sur le poste, avec fallback système.
- Le menu de gauche est généré dynamiquement après import et se met à jour quand les filtres changent. Un clic sur un item scrolle automatiquement vers la section correspondante.

## Fichiers principaux

- `index.html` : structure du dashboard, sidebar et zone d'import Excel.
- `assets/css/styles.css` : design admin sobre avec la palette PN stricte.
- `assets/js/app.js` : logique existante de lecture Excel, calculs, filtres, graphiques, détails, exports et navigation dynamique.
- `assets/vendor/` : dépendances locales SheetJS et Chart.js.
- `assets/logo.png` : logo utilisé dans la sidebar.
