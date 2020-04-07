'use strict';
// Definizione della media query della nav
let nav = window.matchMedia("(max-width: 600px)");

// Definizione funzione per apertura della nav sul click dell'utente
function aperturaNav(nav) {
  // Se la grandezza dello schermo corrisponde a nav
  if (nav.matches) {
    // Imposta la grandezza di nav al 100% della pagina
    document.getElementById("nav").style.width = "100%";
  /* Altrimenti imposta la grandezza di nav a 250px e il margine
     del contenuto della pagina a 250px */
  } else {
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
}

// Definizione funzione per chiusura della nav sul click dell'utente
function chiusuraNav() {
  /* Nascondi nav impostandone la grandezza a 0 e togliendo i margini
  al contenuto principale della pagina */
  document.getElementById("nav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
