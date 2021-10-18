const home = () => {
  const main = document.querySelector("main");
  const section1 = document.createElement("section");
  const content1 = document.createElement("div");
  content1.classList.add("content", "cell");
  content1.innerHTML = `<img src="../src/opening-hours.png" alt="" />`;
  section1.appendChild(content1);

  const section2 = document.createElement("section");
  const content2 = document.createElement("div");
  content2.classList.add("content", "cell");
  content2.innerHTML = `            <p>
              <h1>Philosophy</h1>
              Our goal is to deliver the best meal for our customers. We belive
              that every human being has a right to a delicious coffee paired
              with chocolate cake every day.
            </p>
            <br />
            <br />
            <hr size="5px" color="#f4decb" />
            <p>
              You can find us at 
              <h3>
              550 Plumb Branch Drive
Bronx, NY 10451
              </h3>
              <img src="../src/external-content.duckduckgo.com.png" style="width: 50%;">
            </p>
    `;
  section2.appendChild(content2);

  const section3 = document.createElement("section");
  section3.classList.add("media");
  section3.innerHTML = `<img
            id="slideshow"
            class="cell"
            src="../src/pexels-victoria-borodinova-3745525.jpg"
            alt=""
          />`;

  main.appendChild(section1);
  main.appendChild(section2);
  main.appendChild(section3);
};

export { home };
