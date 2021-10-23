const DishOverview = (container, dishes) => {
  const dish_name = document.createElement("h3");
  dish_name.textContent = dishes[0].name;
  container.appendChild(dish_name);

  const dish_description = document.createElement("p");
  dish_description.textContent = dishes[0].description;
  container.appendChild(dish_description);

  let current = 1;

  const next = () => {
    if (current == dishes.length - 1) current = 0;
    else current++;
    dish_name.textContent = dishes[current].name;
    dish_description.textContent = dishes[current].description;
  };

  const prev = () => {
    if (current == 0) current = dishes.length - 1;
    else current--;
    dish_name.textContent = dishes[current].name;
    dish_description.textContent = dishes[current].description;
  };

  return { next, prev };
};
export default DishOverview;
