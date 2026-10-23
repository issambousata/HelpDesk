# HelpDesk — Gestion des demandes de support

Application web interactive permettant de **consulter, ajouter et supprimer des demandes de support informatique**, réalisée en HTML5, CSS3 et JavaScript Vanilla.

> Projet réalisé individuellement pour **Atlas Solutions** (entreprise fictive de services numériques) dans le cadre du brief « Développer les interactions et fonctionnalités dynamiques d'une interface Web ».
> Lancement : 19 octobre 2026 — Rendu : 23 octobre 2026 à 17h00.

---

## Description

Atlas Solutions souhaite centraliser les incidents informatiques signalés par ses collaborateurs. **HelpDesk** répond à ce besoin avec une interface simple qui fonctionne **uniquement dans le navigateur** (aucun backend, aucune base de données, aucune API externe).

Les techniciens peuvent visualiser les demandes et les supprimer lorsqu'elles sont résolues. Les collaborateurs peuvent signaler un nouveau problème grâce à un formulaire validé en JavaScript.

---

## Aperçu

<!-- ### Vue desktop — cartes
![Vue desktop en cartes](screenshots/desktop-cartes.png)

### Vue desktop — tableau (bonus)
![Vue desktop en tableau](screenshots/desktop-tableau.png)

### Formulaire : messages d'erreur
![Erreurs de validation du formulaire](screenshots/formulaire-erreurs.png)

### Formulaire : message de confirmation
![Confirmation après ajout](screenshots/formulaire-confirmation.png)

### État vide
![Message affiché quand il n'y a aucune demande](screenshots/etat-vide.png)

### Vue mobile
<p align="center">
  <img src="screenshots/mobile.png" alt="Vue mobile" width="280">
  &nbsp;&nbsp;
  <img src="screenshots/tablette.png" alt="Vue tablette" width="380">
</p> -->

---

## ✨ Fonctionnalités

### Fonctionnalités obligatoires
- [x] **Interface responsive** : en-tête, formulaire, liste des demandes et compteur
- [x] **Affichage dynamique** des demandes (titre, catégorie, priorité) généré depuis un tableau JavaScript
- [x] **Données de départ** : au moins 3 demandes fictives chargées au démarrage
- [x] **Ajout d'une demande** avec validation (champs obligatoires, espaces seuls refusés), message d'erreur, message de confirmation et réinitialisation du formulaire
- [x] **Suppression d'une demande** avec confirmation préalable et possibilité d'annuler
- [x] **Compteur dynamique** actualisé après chaque ajout ou suppression
- [x] **État vide** : message adapté lorsqu'aucune demande n'existe
- [x] **Priorités identifiables visuellement** (couleurs différentes pour Basse, Normale et Haute)


## 🧰 Technologies utilisées

| Technologie | Utilisation |
|---|---|
| **HTML5** | Structure sémantique (`header`, `main`, `section`, `form`, `footer`…) |
| **CSS3** | Mise en forme, Flexbox, CSS Grid, Media Queries, variables CSS |
| **JavaScript (Vanilla)** | Données, DOM, événements, validation |
| **Git / GitHub** | Versionnement et hébergement du code |
| **Jira** | Suivi des user stories et des tâches |
| *(optionnel)* Google Fonts / icônes | Typographie et icônes |

> ❌ Aucun framework JavaScript, aucun backend, aucune base de données, aucune API externe.

---

## 📁 Structure des fichiers

```
helpdesk/
├── index.html          # Structure de la page
├── css/
│   └── style.css       # Styles et responsive
├── js/
│   └── script.js       # Données, affichage, événements, validation
├── assets 
│    └── images         # Captures d'écran utilisées dans ce README
└── README.md           # Documentation du projet
```

---

## 🚀 Lancer l'application

Aucune installation n'est nécessaire.

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/issambousata/HelpDesk.git
   cd HelpDesk
   ```
2. **Ouvrir l'application**
   - Double-clique sur `index.html`, **ou**
   - Utilise l'extension **Live Server** de VS Code (clic droit sur `index.html` → *Open with Live Server*).

---

## 🧩 Utilisation

1. **Consulter** : les demandes existantes s'affichent automatiquement, avec leur titre, leur catégorie et leur priorité.
2. **Ajouter** : remplir les 4 champs du formulaire (titre, description, catégorie, priorité) puis cliquer sur **Ajouter**. Si un champ est vide ou ne contient que des espaces, un message d'erreur s'affiche.
3. **Supprimer** : cliquer sur **Supprimer** sur une demande, puis confirmer. Si l'on annule, la demande est conservée.
4. **Suivre** : le compteur en haut de la liste indique en temps réel le nombre total de demandes.

---

## 🗃️ Structure des données

Chaque demande est un objet stocké dans un tableau :

```js
{
  id: 1,                       // identifiant unique
  titre: "Écran qui clignote", // texte
  description: "L'écran du poste 12 clignote depuis ce matin.",
  categorie: "Matériel",       // Matériel | Logiciel | Réseau
  priorite: "Haute"            // Basse | Normale | Haute
}
```

---

## ⚙️ Fonctions JavaScript principales

> Adapte les noms à ceux de ton `script.js`.

| Fonction | Rôle |
|---|---|
| `afficherDemandes()` | Génère les cartes (ou lignes du tableau) à partir du tableau |
| `creerCarteDemande(demande)` | Crée l'élément HTML d'une demande |
| `mettreAJourCompteur()` | Met à jour le nombre total de demandes |
| `afficherEtatVide()` | Affiche le message quand la liste est vide |
| `validerFormulaire(donnees)` | Vérifie les champs et retourne les erreurs éventuelles |
| `ajouterDemande(donnees)` | Ajoute une demande valide au tableau |
| `supprimerDemande(id)` | Supprime la demande correspondante après confirmation |
| `afficherMessage(texte, type)` | Affiche un message d'erreur ou de confirmation |

---

## ✅ Règles de validation du formulaire

- Tous les champs sont **obligatoires**.
- Un champ contenant **uniquement des espaces** est refusé (`.trim()`).
- Une catégorie et une priorité doivent être sélectionnées.
- En cas de succès : la demande est ajoutée, l'affichage est actualisé, un message de confirmation apparaît et le formulaire est réinitialisé.

---

## 📱 Responsive et accessibilité

- Mise en page adaptée **mobile, tablette et desktop** (Flexbox, Grid, Media Queries).
- Aucun défilement horizontal involontaire sur mobile.
- Balises sémantiques et **labels associés** à chaque champ du formulaire.
- Boutons réalisés avec des éléments `<button>` adaptés.
- Structure de la page compréhensible même sans CSS.

---

## 📋 User stories

| ID | En tant que… | Je souhaite… | Statut |
|---|---|---|---|
| US-01 | Technicien | Consulter les demandes pour identifier les problèmes signalés | ✅ |
| US-02 | Collaborateur | Créer une demande pour signaler un problème | ✅ |
| US-03 | Technicien | Supprimer une demande devenue inutile | ✅ |
| US-04 | Technicien | Consulter le nombre total de demandes | ✅ |

---

## 🔄 Gestion de projet

### Git / GitHub
- Commits réguliers avec des messages explicites, par exemple :
  - `feat: ajout du formulaire de création de demande`
  - `feat: affichage dynamique des demandes depuis le tableau`
  - `feat: suppression avec confirmation`
  - `style: mise en page responsive`
  - `docs: mise à jour du README`

### Jira
- Tableau organisé avec les **user stories** (US-01 à US-04) et leurs **tâches techniques**.
- Suivi de l'avancement : *À faire* → *En cours* → *Terminé*.
- 🔗 Lien du tableau Jira : `<à compléter>`

---

## 🧪 Tests effectués

- [x] Affichage des 3 demandes de départ
- [x] Ajout d'une demande valide
- [x] Refus des champs vides
- [x] Refus des champs contenant uniquement des espaces
- [x] Message de confirmation et réinitialisation du formulaire
- [x] Suppression avec confirmation
- [x] Annulation de la suppression (la demande est conservée)
- [x] Suppression de la bonne demande uniquement
- [x] Compteur exact après chaque ajout / suppression
- [x] Message d'état vide quand il n'y a plus aucune demande
- [x] Responsive vérifié (mobile, tablette, desktop)
- [x] Aucune erreur dans la console du navigateur

---

## 🔮 Améliorations possibles

- Modification d'une demande existante
- Statut de la demande (Ouverte / En cours / Résolue)
- Tri par priorité ou par date
- Mode sombre

---

## 👤 Auteur

**<BOUSSATA ISSAM>** — Développeur web en formation
📧 <bousataissam575@gmail.com> · 🐙 [GitHub](https://github.com/issambousata>)

---

*Projet pédagogique — Atlas Solutions est une entreprise fictive.*
