import { home } from "./home";

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
