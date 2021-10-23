import Slideshow from "./slideshow";
import hours from "./assets/opening-hours.png";
import smile from "./assets/external-content.duckduckgo.com.png";

import img1 from "./assets/pexels-burak-kebapci-735869.jpg";
import img2 from "./assets/pexels-elevate-1267320.jpg";
import img3 from "./assets/pexels-victoria-borodinova-3745525.jpg";
import img4 from "./assets/pexels-vincent-rivaud-2555240.jpg";

import "./home.css";

const home = () => {
  const main = document.querySelector("main");
  main.classList = "";
  main.classList.add("main-size-3");
  const section1 = document.createElement("section");
  const content1 = document.createElement("div");
  content1.classList.add("content", "cell");
  const opening_hours = new Image();
  opening_hours.src = hours;
  content1.appendChild(opening_hours);
  section1.appendChild(content1);

  const section2 = document.createElement("section");
  const content2 = document.createElement("div");
  content2.classList.add("content", "cell");

  const p1 = document.createElement("p");
  p1.innerHTML = `
              <h1>Philosophy</h1>
              Our goal is to deliver the best meal for our customers. We belive
              that every human being has a right to a delicious coffee paired
              with chocolate cake every day.
              <br/>
              <br/>
  `;
  content2.appendChild(p1);
  const hr = document.createElement("hr");
  hr.size = "5px";
  hr.color = "#f4decb";
  content2.appendChild(hr);

  const p2 = document.createElement("p");
  p2.textContent = "You can find us at";
  const h3 = document.createElement("h3");
  h3.innerHTML = `550 Plumb Branch Drive <br/> Bronx, NY 10451`;
  const smile_img = new Image();
  smile_img.src = smile;
  smile_img.style.width = "50%";
  p2.appendChild(h3);
  p2.appendChild(smile_img);

  content2.appendChild(p2);
  section2.appendChild(content2);

  const section3 = document.createElement("section");
  const slides = document.createElement("div");
  slides.id = "slideshow";
  slides.classList.add("cell");
  const slideshow = Slideshow(slides, [img1, img2, img3, img4], 5000);
  section3.appendChild(slides);

  main.appendChild(section1);
  main.appendChild(section2);
  main.appendChild(section3);
};

export { home };
