// Transition fluide pour le changement d'élément de la page (exemple pour une section)
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const targetId = this.getAttribute("href").substring(1); // Récupère l'ID de la section cible
    const targetSection = document.getElementById(targetId);

    // Défilement fluide vers la section cible
    window.scrollTo({
      top: targetSection.offsetTop - 100, // Décalage de 100px pour la navbar fixe
      behavior: "smooth",
    });
  });
});

// Fonction pour détecter les éléments visibles à l'écran
function checkVisibility() {
  // Détection des sections visibles
  document.querySelectorAll("section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      section.classList.add("visible");
    }
  });

  // Détection des éléments de la timeline visibles
  document.querySelectorAll(".timeline li").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      item.classList.add("visible");
    }
  });

  // Détection des éléments de compétences visibles
  document.querySelectorAll(".skills li").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      item.classList.add("visible");
    }
  });

  // Détection des éléments de projets visibles
  document.querySelectorAll(".projects li").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      item.classList.add("visible");
    }
  });
}

// Vérifier la visibilité lors du défilement
window.addEventListener("scroll", checkVisibility);

// Vérifier la visibilité au chargement de la page
window.addEventListener("load", checkVisibility);

// Effet de scroll pour la navbar (devenir transparente et flou)
window.onscroll = function () {
  let nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    // Si l'utilisateur défile plus de 50px
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

// Observer les sections pour ajouter la classe "visible" lorsqu'elles deviennent visibles à l'écran
const options = {
  threshold: 0.2, // Déclenche la visibilité quand 20% de la section est visible
};

// Observer les sections à l'aide de l'IntersectionObserver
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

// Observer chaque section
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
