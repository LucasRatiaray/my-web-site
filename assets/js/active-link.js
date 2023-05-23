/* ************************ */
/* ACTIVE LINK
/* ************************ */
// Sélectionne tous les liens de navigation de la page
const navLinks = document.querySelectorAll('a.nav-link');

// Pour chaque lien de navigation...
navLinks.forEach((link) => {
  // Ajoute un écouteur d'événement "click"
  link.addEventListener('click', (event) => {
    // Empêche le comportement de lien par défaut
    event.preventDefault();
    // Récupère l'ID de la section cible
    const targetId = link.getAttribute('href');
    // Défile vers la section cible
    document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});
  });
});

// Sélectionne toutes les sections de la page avec un ID
const sections = document.querySelectorAll('section[id]');

// Ajoute un écouteur d'événement "scroll" à la fenêtre
window.addEventListener('scroll', () => {
  // Détermine la position verticale actuelle de la fenêtre
  const currentScrollPos = window.scrollY;

  // Pour chaque section de la page...
  sections.forEach((section) => {
    // Récupère la position verticale de la section
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    // Si la fenêtre se trouve actuellement dans la section (même partiellement)...
    if (currentScrollPos >= sectionTop - window.innerHeight/2 && currentScrollPos < sectionBottom - window.innerHeight/2) {
      // Ajoute la classe "active" à la section et à son lien de navigation correspondant
      section.classList.add('active');
      const correspondingNavLink = document.querySelector(`a.nav-link[href="#${section.id}"]`);
      correspondingNavLink.classList.add('active');
    } else {
      // Sinon, supprime la classe "active" de la section et de son lien de navigation correspondant
      section.classList.remove('active');
      const correspondingNavLink = document.querySelector(`a.nav-link[href="#${section.id}"]`);
      correspondingNavLink.classList.remove('active');
    }
  });
});