import "./menu.css";
import food1 from "./assets/food/pexels-jonathan-borba-2878741.jpg";
import food2 from "./assets/food/pexels-julie-aagaard-2097090.jpg";
import food3 from "./assets/food/pexels-pixabay-416471.jpg";
import food4 from "./assets/food/pexels-snapwire-286283.jpg";
import food5 from "./assets/food/pexels-vincent-rivaud-2555240.jpg";
import foods from "./foods.json";
import Slideshow from "./slideshow";
import DishOverview from "./dishOverview";

const menu = () => {
  const main = document.querySelector("main");
  main.classList = "";
  main.classList.add("main-size-2");
  const section1 = document.createElement("section");
  section1.classList.add("cell");

  const dish_image = document.createElement("div");
  const slideshow = Slideshow(
    dish_image,
    [food1, food2, food3, food4, food5],
    0
  );
  section1.appendChild(dish_image);

  const section2 = document.createElement("section");
  section2.classList.add("cell");
  const dish = document.createElement("div");
  const overview = DishOverview(dish, foods);
  section2.appendChild(dish);

  const buttons = document.createElement("div");

  const prev = document.createElement("button");
  prev.textContent = "PREVIOUS";
  prev.addEventListener("click", () => {
    console.log("PREV");
    overview.prev();
    slideshow.prev();
  });
  buttons.appendChild(prev);

  const next = document.createElement("button");
  next.textContent = "NEXT";
  next.addEventListener("click", () => {
    console.log("NEXT");
    overview.next();
    slideshow.next();
  });
  buttons.appendChild(next);
  section2.appendChild(buttons);

  main.appendChild(section1);
  main.appendChild(section2);
};

export { menu };
