import img1 from "./pexels-burak-kebapci-735869.jpg";
import img2 from "./pexels-elevate-1267320.jpg";
import img3 from "./pexels-victoria-borodinova-3745525.jpg";
import img4 from "./pexels-vincent-rivaud-2555240.jpg";

const images = [img1, img2, img3, img4];
let current = 0;
function start(slideshow) {
  const slide = new Image();
  slide.src = images[current];
  slide.alt = "slideshow";
  slideshow.appendChild(slide);
  setTimeout(() => next(slide), 2000);
}

function next(slide) {
  if (current == images.length - 1) current = 0;
  else current++;
  slide.src = images[current];
  setTimeout(() => next(slide), 5000);
}

export default { start };
