/* ************************ */
/* SCROLLBAR
/* ************************ */
var body = document.querySelector('body');
var timeout = null;

function hideScrollbar() {
  clearTimeout(timeout);
  body.classList.remove('no-scroll');
}

function showScrollbar() {
  clearTimeout(timeout);
  if (!isSafari()) {
    body.classList.add('no-scroll');
    body.classList.remove('safari-scrollbar');
  } else {
    body.classList.remove('no-scroll');
    body.classList.add('safari-scrollbar');
  }
  timeout = setTimeout(hideScrollbar, 800);
}

function handleScroll() {
  showScrollbar();
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('mousemove', showScrollbar);
window.addEventListener('wheel', handleScroll, { passive: true });

// Vérifier si l'utilisateur utilise Safari
function isSafari() {
  var userAgent = navigator.userAgent;
  return userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1;
}

// Vérifier si l'utilisateur utilise Safari
function isSafari() {
  var userAgent = navigator.userAgent;
  return userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1;
}
/* ************************ */
/* HEADER SCROLL
/* ************************ */
// Sélectionnez l'élément #dock-nav
const dockNav = document.querySelector("#dock-nav");

// Ajoutez un gestionnaire d'événements "scroll" à la fenêtre
window.addEventListener("scroll", () => {
  // Vérifiez si la page est défilée vers le bas
  if (window.scrollY > 0) {
    // Ajoutez la classe "header-scroll" à l'élément #dock-nav
    dockNav.classList.add("header-scroll");
  } else {
    // Sinon, retirez la classe "header-scroll"
    dockNav.classList.remove("header-scroll");
  }
});