#  Site de Réservation d'Hôtels - Frontend

##  Description

Application web moderne pour la réservation d'hôtels, développée avec **React**, **TypeScript**, **Vite** et **Tailwind CSS**.  
Le projet est organisé selon une architecture modulaire avec une séparation claire des responsabilités.

---

##  Fonctionnalités principales

- Page d'accueil dynamique avec sections Hero et Features
- Tableau de bord utilisateur avec sidebar et widgets statistiques
- Design responsive et accessible mobile-first
- Composants réutilisables et typés avec TypeScript
- Utilisation des icônes **Lucide React**

---

## Capture d'écran de la page d’accueil

![Page d'accueil](./src/assets/accuiel.png)

---

## 🛠️ Technologies utilisées

### Outils & Frameworks

- **React** – Librairie pour interfaces interactives  
- **TypeScript** – Langage avec typage statique  
- **Vite** – Bundler rapide moderne  
- **Tailwind CSS** – Framework CSS utilitaire  

### Design & UI

- **Lucide React** – Icônes SVG modernes  
- **Landingfolio** – Exemples de landing pages  
- **Tuk.dev** – Composants Tailwind CSS  
- **TailwindReady** – UI kits gratuits  

---

## 🚀 Installation & lancement

1. **Cloner le projet**

```bash
git clone https://github.com/moustaphachogardinga/hotel-reservation.git

 2.Accéder au dossier
cd hotel-reservation
 3.Installer les dépendances
npm install
 4.Lancer le serveur de développement
npm run dev
- L’application démarre sans erreur à http://localhost:5173
## Structure du projet

src/
├── assets/               # Images, logos
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── accuiel.png       # Capture d’écran
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   └── Sidebar.tsx
├── layouts/
│   ├── MainLayout.tsx
│   └── SidebarLayout.tsx
├── pages/
│   └── Dashboard.tsx
├── App.tsx
└── main.tsx
