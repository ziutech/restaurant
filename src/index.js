import "./style.css";
import { home } from "./home";
import { menu } from "./menu";

function clear() {
  const main = document.querySelector("main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

document.getElementById("home").addEventListener("click", () => {
  clear();
  home();
});
home();

document.getElementById("menu").addEventListener("click", () => {
  clear();
  menu();
});
