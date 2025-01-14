// ===============================
// Transition fluide pour les liens
// ===============================

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const targetId = this.getAttribute("href").substring(1); // Récupère l'ID de la section cible
    const targetSection = document.getElementById(targetId);

    // Vérifie si la section cible existe
    if (targetSection) {
      // Défilement fluide vers la section cible
      window.scrollTo({
        top: targetSection.offsetTop - 100, // Décalage pour la navbar fixe
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// Fonction de détection de visibilité des éléments
// ===============================

function detectVisibility(selector, visibleClass = "visible") {
  document.querySelectorAll(selector).forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      item.classList.add(visibleClass);
    } else {
      item.classList.remove(visibleClass); // Optionnel, pour retirer la classe si elle n'est plus visible
    }
  });
}

// ===============================
// Fonction de gestion du défilement
// ===============================

function onScroll() {
  detectVisibility("section"); // Détecte les sections visibles
  detectVisibility(".timeline li"); // Détecte les éléments de la timeline
  detectVisibility(".skills li"); // Détecte les compétences
  detectVisibility(".projects li"); // Détecte les projets
}

// ===============================
// Effet de défilement pour la navbar
// ===============================

function handleNavbarScroll() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled"); // Ajoute la classe "scrolled" si on défile vers le bas
  } else {
    nav.classList.remove("scrolled"); // Retire la classe "scrolled" si on est en haut de la page
  }
}

// ===============================
// Utilisation de l'IntersectionObserver
// ===============================

// Paramètres de l'observateur
const observerOptions = {
  threshold: 0.2, // Déclenche la visibilité quand 20% de l'élément est visible
};

// Création de l'observateur pour chaque section
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Ajoute la classe "visible" si la section est visible
    } else {
      entry.target.classList.remove("visible"); // Retire la classe "visible" si la section n'est plus visible
    }
  });
}, observerOptions);

// Observer chaque section de la page
document.querySelectorAll("section").forEach((section) => {
  sectionObserver.observe(section); // Surveille chaque section pour la visibilité
});

// ===============================
// Gestion des événements de défilement et chargement
// ===============================

// Détecte le défilement pour appliquer les effets de visibilité et de navbar
window.addEventListener("scroll", () => {
  onScroll();
  handleNavbarScroll();
});

// Vérification initiale au chargement de la page
window.addEventListener("load", () => {
  onScroll();
  handleNavbarScroll();
});
