const Slideshow = (container, images, timeout) => {
  let current = 0;
  const slide = new Image();
  slide.src = images[current];
  slide.alt = "slideshow";
  container.appendChild(slide);
  if (timeout != 0) setTimeout(() => next(), timeout);

  function next(val) {
    if (current == images.length - 1) current = 0;
    else current++;
    slide.src = images[current];
    if (timeout != 0) setTimeout(() => prev(), timeout);
  }

  function prev(val) {
    if (current == 0) current = images.length;
    else current--;
    slide.src = images[current];
    if (timeout != 0) setTimeout(() => next(), timeout);
  }

  return {
    next,
    prev,
  };
};

export default Slideshow;
