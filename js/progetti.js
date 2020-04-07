'use strict'
// Definisci il primo indice di slide come 1
let indiceSlide = 1;
// Richiama la funzione mostraSlide e passa il parametro indiceSlide
mostraSlide(indiceSlide);

// Funzione che prende in ingresso l'indice dell'immagine corrente e la mostra, nascondendo le altre immagini
function mostraSlide(n) {
  // Dichiarazione array slides contenente tutti gli elementi presenti nella classe slides
  let slides = document.getElementsByClassName("slides");

  // Se il numero passato per parametro è maggiore della lunghezza dell'array slides allora imposta indiceSlide a 1
  if (n > slides.length) {
    indiceSlide = 1;
  }

  // Se il numero passato per parametro è minore di 1 allora imposta indiceSlide alla lunghezza dell'array slides
  if (n < 1) {
    indiceSlide = slides.length;
  }

  /* Per ogni elemento presente nell'array slide aggiungi la proprietà display = none; alla classe slides per nascondere le
  immagini che non fanno parte della slide corrente */
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Imposta l'elemento presente all'indice corrispondente a indiceSlide come display = block; per mostrarlo a video
  slides[indiceSlide - 1].style.display = "block";
}

// Funzione per passare da un'immagine all'altra
function cambioImmagine(n) {
  // Chiama la funzione mostraSlide passando come parametro il valore di indiceSlide + il numero passato
  mostraSlide(indiceSlide += n);
}
