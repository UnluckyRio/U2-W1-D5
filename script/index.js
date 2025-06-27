const navBar = document.querySelector("header");
const button = document.querySelector("nav button");
document.addEventListener("scroll", function () {
  if (window.scrollY > 475) {
    navBar.style.backgroundColor = "white";
    button.style.backgroundColor = "green";
    navBar.style.transition = "0.5s";
  } else {
    navBar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
});

// Animazione per le M dell'SVG che scompaiono e riappaiono randomicamente
function animateMSvg() {
  // Seleziona tutti i gruppi g che contengono le M nell'SVG
  const mGroups = document.querySelectorAll('svg g[opacity="0"]');

  // Numero massimo di M visibili contemporaneamente - aumentato per maggiore visibilità
  const maxVisibleM = 8; // Aumentato da 3 a 8 per rendere l'animazione più visibile
  let currentlyVisible = 0;

  // Funzione per ottenere un numero casuale tra min e max
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Funzione per animare una singola M
  function animateSingleM() {
    if (mGroups.length === 0) return;

    // Controlla se possiamo mostrare più M
    if (currentlyVisible >= maxVisibleM) return;

    // Seleziona una M casuale tra quelle nascoste
    const hiddenM = Array.from(mGroups).filter(
      (m) => m.style.opacity === "0" || !m.style.opacity
    );
    if (hiddenM.length === 0) return;

    const randomIndex = getRandomNumber(0, hiddenM.length - 1);
    const randomM = hiddenM[randomIndex];

    // Mostra la M (opacity = 1)
    randomM.style.opacity = "1";
    randomM.style.transition = "opacity 0.3s ease-in-out";
    currentlyVisible++;

    // Dopo un tempo casuale, nascondi la M - ridotto il tempo per animazione più dinamica
    const hideDelay = getRandomNumber(800, 2000); // Ridotto da 1000-3000ms a 800-2000ms
    setTimeout(() => {
      randomM.style.opacity = "0";
      currentlyVisible--;
    }, hideDelay);
  }

  // Avvia l'animazione con intervalli casuali - ridotto l'intervallo per più frequenza
  function startAnimation() {
    const interval = getRandomNumber(150, 400); // Ridotto da 200-600ms a 150-400ms
    setTimeout(() => {
      animateSingleM();
      startAnimation(); // Richiama ricorsivamente per continuare l'animazione
    }, interval);
  }

  // Avvia l'animazione
  startAnimation();
}

// Avvia l'animazione quando la pagina è caricata
document.addEventListener("DOMContentLoaded", function () {
  // Piccolo delay per assicurarsi che l'SVG sia completamente caricato
  setTimeout(animateMSvg, 1000);
});
