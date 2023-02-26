const button = document.querySelector("button");
const burger = document.querySelector("button img");
const menuLeft = document.querySelector(".menu");
const sections = document.querySelector(".sections");
const main = document.querySelector("main");
const header = document.querySelector("header");
let toggle = false;

button.addEventListener("click", (e) => {
  console.log("click");
  toggle = !toggle;
  if (toggle === true) {
    burger.src = "./ressources/close.svg";
    menuLeft.style.transform = "translateX(0)";
    sections.style.transform = "translateX(200px)";
  } else {
    burger.src = "./ressources/menu.svg";
    menuLeft.style.transform = "translateX(-100%)";
    sections.style.transform = "translateX(0)";
  }
});

// détecter les resize de window pour faire disparaître le menu latéral ouvert
// en petit écran et qui persiste si j'aggrandis la fenêtre
window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    menuLeft.style.transform = "translateX(-100%)";
    burger.src = "./ressources/menu.svg";
    menuLeft.style.transform = "translateX(-100%)";
    sections.style.transform = "translateX(0)";
    toggle = false;
  }
});

window.addEventListener("orientationchange", (e) => {
  //   e.preventDefault();
  main.style.maxWidth = "100%";
  header.style.maxWidth = "100%";
});
