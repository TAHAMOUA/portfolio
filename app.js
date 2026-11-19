"use strict";
const projects = [
  {
    "slug": "snapbook",
    "name": "SnapBook",
    "repo": "SNAPBOOK",
    "summary": "Réservation de photographes.",
    "stack": [
      "Laravel",
      "Blade",
      "MySQL",
      "Docker"
    ],
    "description": "Une plateforme qui relie clients et photographes : recherche, profils, services, disponibilités, réservations et avis. Un espace administrateur permet de valider les profils et de gérer la plateforme.",
    "images": [
      [
        "assets/snapbook-search.png",
        "Recherche de photographes"
      ],
      [
        "assets/snapbook-admin.png",
        "Tableau de bord administrateur"
      ]
    ]
  },
  {
    "slug": "cinevia",
    "name": "Cinevia",
    "repo": "Cinevia",
    "summary": "Catalogue de films, recherche et favoris.",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "description": "Une interface de découverte de films avec recherche par titre, filtres de genre, fiches détaillées et sélection de favoris.",
    "images": [
      [
        "assets/cinevia-films.png",
        "Catalogue de films"
      ],
      [
        "assets/cinevia-home.png",
        "Page d’accueil"
      ]
    ]
  },
  {
    "slug": "coride",
    "name": "CoRide",
    "repo": "CoRide",
    "summary": "Covoiturage domicile-travail entre employés.",
    "stack": [
      "Laravel",
      "Blade",
      "MySQL"
    ],
    "description": "Une application pour organiser les trajets récurrents entre collègues et réserver une place. Le projet intègre une évaluation de compatibilité par IA. Réalisé en binôme ; mes contributions comprennent les modèles, migrations, relations, seeders, le service et l’agent IA.",
    "note": "Projet en binôme",
    "images": [
      [
        "assets/coride-trip.jpg",
        "Détail d’un trajet et réservation"
      ]
    ]
  },
  {
    "slug": "nabd",
    "name": "Nabd Al-Madina / SmartSignal",
    "repo": "Nabd-Al-Madina",
    "summary": "API de signalements citoyens.",
    "stack": [
      "Laravel",
      "Sanctum",
      "MySQL",
      "API REST"
    ],
    "description": "Une API de gestion de signalements urbains avec photos, statuts, incidents et départements. Le code intègre l’analyse des signalements par IA et la recherche de doublons. Projet académique en équipe."
  },
  {
    "slug": "devjobs",
    "name": "DevJobs API",
    "repo": "DevJobs-API",
    "summary": "Offres d’emploi et candidatures.",
    "stack": [
      "Laravel",
      "Sanctum",
      "MySQL",
      "API REST"
    ],
    "description": "Une API pour gérer les entreprises, les offres, les compétences et les candidatures. Authentification par jetons, accès selon les rôles et contrôle des candidatures déjà envoyées."
  },
  {
    "slug": "creno",
    "name": "Creno",
    "repo": "Creno",
    "summary": "Rendez-vous et créneaux.",
    "stack": [
      "Laravel",
      "MySQL",
      "PHPUnit"
    ],
    "description": "Une application de prise de rendez-vous avec gestion des créneaux, réservation et annulation. Les règles métier contrôlent les créneaux passés, déjà réservés et les chevauchements. Le dépôt comprend des tests unitaires et fonctionnels."
  },
  {
    "slug": "foodiez",
    "name": "Foodiez",
    "repo": "Foodiez",
    "summary": "Commandes de restaurant.",
    "stack": [
      "JavaScript",
      "Tailwind CSS",
      "JSON Server"
    ],
    "description": "Un tableau de bord de commandes avec création, recherche, filtres et changements de statut. Les données sont enregistrées via une API locale JSON Server."
  },
  {
    "slug": "grimoire",
    "name": "Grimoire",
    "repo": "Grimoire",
    "summary": "Projets de recherche et notifications.",
    "stack": [
      "Laravel",
      "MySQL",
      "Queues"
    ],
    "description": "Gestion de projets de recherche académique avec membres, rôles, avancement et archivage. Des événements, listeners et jobs permettent les notifications asynchrones et la génération de rapports de clôture."
  },
  {
    "slug": "agrigest",
    "name": "AgriGest",
    "repo": "AgriGest",
    "summary": "Parcelles agricoles.",
    "stack": [
      "Laravel",
      "Blade",
      "MySQL",
      "Docker"
    ],
    "description": "Gestion de parcelles agricoles : création, modification, consultation et suppression, avec recherche par nom ou culture et filtrage par statut."
  },
  {
    "slug": "fitconnect",
    "name": "FitConnect",
    "repo": "FitConnectt",
    "summary": "Adhérents, abonnements et séances.",
    "stack": [
      "PHP",
      "PDO",
      "MySQL"
    ],
    "description": "Gestion de salles de sport, adhérents, abonnements et séances. Architecture en couches avec entités, repositories, services et contrôleurs ; contrôle des abonnements actifs et validation des séances."
  },
  {
    "slug": "liremonde",
    "name": "LireMonde",
    "repo": "LireMonde",
    "summary": "Bibliothèque personnelle.",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JSON Server"
    ],
    "description": "Une bibliothèque en ligne avec recherche par titre, filtres par genre, liste « À lire » et interface d’administration pour ajouter, modifier et supprimer les livres."
  },
  {
    "slug": "github-finder",
    "name": "GitHub Finder",
    "repo": "GitHub-Finder",
    "summary": "Profils et favoris.",
    "stack": [
      "JavaScript",
      "GitHub API",
      "localStorage"
    ],
    "description": "Recherche de profils GitHub, affichage des informations et des dépôts, gestion de favoris enregistrés dans le navigateur."
  },
  {
    "slug": "schoolmanager",
    "name": "SchoolManager",
    "repo": "SchoolManager",
    "summary": "Gestion scolaire.",
    "stack": [
      "PHP",
      "PDO",
      "MySQL"
    ],
    "description": "Gestion des élèves, classes, enseignants, matières, inscriptions et affectations, avec un tableau de bord récapitulatif."
  },
  {
    "slug": "hotel",
    "name": "Hotel Management",
    "repo": "Hotel-Management",
    "summary": "Base de données SQL.",
    "stack": [
      "MySQL",
      "SQL",
      "Modélisation"
    ],
    "description": "Un projet de modélisation relationnelle pour un hôtel : clients, catégories de chambres, chambres, réservations, paiements et séjours. Le dépôt contient le script SQL et la documentation."
  },
  {
    "slug": "nexto",
    "name": "Nexto",
    "repo": "projet-nexto",
    "summary": "Prototype HTML/CSS de file d’attente.",
    "stack": [
      "HTML",
      "CSS"
    ],
    "description": "Prototype d’interface de gestion de files d’attente : accueil, prise de ticket, liste d’attente et écrans d’administration. Il s’agit d’un prototype front-end, sans backend temps réel dans ce dépôt."
  },
  {
    "slug": "tecnolo",
    "name": "TecNolo",
    "repo": "TecNolo",
    "summary": "Mini-wiki technologique.",
    "stack": [
      "HTML",
      "CSS"
    ],
    "description": "Un site pédagogique de présentation des technologies web, avec page d’accueil, liste d’articles et pages de détail."
  },
  {
    "slug": "zayfbs",
    "name": "ZayFBS",
    "repo": "zayfbs",
    "summary": "Catalogue et panier JavaScript.",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "description": "Un site de présentation et de catalogue d’huiles d’olive avec panier côté navigateur et gestion des quantités. Le dépôt ne constitue pas une solution de paiement en ligne."
  }
];
const gallery = document.getElementById("gallery");
const title = document.getElementById("gallery-title");
const description = document.getElementById("gallery-description");
const image = document.getElementById("gallery-image");
const caption = document.getElementById("gallery-caption");
const count = document.getElementById("gallery-count");
const previous = document.getElementById("gallery-previous");
const next = document.getElementById("gallery-next");
let active = null;
let index = 0;
let opener = null;
function renderCapture() {
  const capture = active.images[index];
  image.src = capture[0];
  image.alt = active.name + " — " + capture[1];
  document.getElementById("gallery-original").href = capture[0];
  caption.textContent = capture[1];
  count.textContent = (index + 1) + " / " + active.images.length;
  previous.disabled = index === 0;
  next.disabled = index === active.images.length - 1;
}
document.querySelectorAll("[data-gallery]").forEach(button => {
  button.addEventListener("click", () => {
    const project = projects.find(p => p.slug === button.dataset.gallery);
    if (!project || !project.images || !project.images.length) return;
    active = project; index = 0; opener = button;
    title.textContent = project.name;
    description.textContent = project.description;
    renderCapture();
    gallery.showModal();
    document.body.classList.add("gallery-open");
  });
});
document.getElementById("gallery-close").addEventListener("click", () => gallery.close());
previous.addEventListener("click", () => { if(index > 0) { index--; renderCapture(); } });
next.addEventListener("click", () => { if(index < active.images.length - 1) { index++; renderCapture(); } });
gallery.addEventListener("keydown", event => {
  if(event.key === "ArrowLeft" && index > 0) {event.preventDefault();index--;renderCapture();}
  if(event.key === "ArrowRight" && index < active.images.length - 1) {event.preventDefault();index++;renderCapture();}
});
gallery.addEventListener("click", event => {
  if(event.target !== gallery) return;
  const rect = gallery.getBoundingClientRect();
  if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) gallery.close();
});
gallery.addEventListener("close", () => {
  document.body.classList.remove("gallery-open");
  if(opener) opener.focus();
});
