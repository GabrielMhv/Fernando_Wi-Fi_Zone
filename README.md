# FERNANDO & FILS SERVICES - Portail WiFi

Bienvenue sur le portail WiFi de FERNANDO & FILS SERVICES.

## Description

Ce projet propose une page de connexion moderne et sécurisée pour l'accès à un réseau WiFi public. Il met en avant les services numériques et administratifs proposés par FERNANDO & FILS SERVICES, ainsi que les différents forfaits WiFi disponibles.

## Fonctionnalités principales
- Page de connexion WiFi avec authentification sécurisée (MD5 challenge)
- Présentation des forfaits WiFi (3h, 24h, 3 jours, 7 jours, 1 mois)
- Mise en avant des services :
  - Services de bureau (impression, photocopie, etc.)
  - Création graphique
  - E-Services administratifs
  - Fournitures de bureau
  - Formation & maintenance informatique
  - Installation et optimisation réseau
- Liens d'appel direct pour obtenir un ticket de connexion
- Design responsive et moderne

## Fichiers principaux
- `login.html` : page principale du portail de connexion
- `login.css` : styles personnalisés pour la page (à placer dans le même dossier)
- `md5.js` : bibliothèque JavaScript pour le chiffrement du mot de passe (fourni par le système Hotspot)
- `logo.png` : logo de l'entreprise (optionnel)

## Installation
1. Placez les fichiers `login.html`, `login.css`, `md5.js` et `logo.png` dans le dossier de votre portail Hotspot (ex : Mikrotik, CoovaChilli, etc.).
2. Assurez-vous que le portail captive pointe vers `login.html`.
3. Personnalisez les numéros de téléphone ou les forfaits si besoin dans le fichier HTML.

## Utilisation
- Les utilisateurs accèdent à la page de connexion via le réseau WiFi.
- Ils saisissent leur nom d'utilisateur et mot de passe pour se connecter.
- En cas de besoin, ils peuvent appeler directement les numéros affichés pour obtenir un ticket.

## Personnalisation
- Modifiez les couleurs, textes ou services directement dans `login.html` pour adapter à vos besoins.
- Les styles sont principalement dans `login.css` et dans les balises `<style>` de la page.

## Support
Pour toute question ou demande de personnalisation, contactez FERNANDO & FILS SERVICES aux numéros indiqués sur la page.

---
© 2025 FERNANDO & FILS SERVICES. Tous droits réservés. 
