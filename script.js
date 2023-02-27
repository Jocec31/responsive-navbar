const button = document.querySelector("button");
const img = document.querySelector("button img");
const navigation = document.querySelector(".navigation");
const main = document.querySelector("main");
let toggle = false;

button.addEventListener("click", (e) => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  toggle = !toggle;
  if (toggle === true) {
    img.src = "./ressources/close.svg";
  } else {
    img.src = "./ressources/menu.svg";
  }
});
