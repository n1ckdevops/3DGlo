const removeDots = () => {
  const dotContainer = document.querySelector(".portfolio-dots");
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dotContainer.removeChild(dot));
};

const addDots = () => {
  const dotContainer = document.querySelector(".portfolio-dots");
  const slides = document.querySelectorAll(".portfolio-item");

  slides.forEach((slide, index) => {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("dot-active");
    }
    dotContainer.appendChild(dot);
  });
};

const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClasses) => {
    elems[index].classList.remove(strClasses);
  };

  const nextSlide = (elems, index, strClasses) => {
    elems[index].classList.add(strClasses);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(2000);
      }
    },
    true
  );

  removeDots();
  addDots();
  const dots = document.querySelectorAll(".dot");
  startSlide(2000);
};

export default slider;
