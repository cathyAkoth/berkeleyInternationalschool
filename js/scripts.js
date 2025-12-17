/* ================= MOBILE MENU ================= */
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

toggle.onclick = () => {
  nav.classList.toggle("open");
};

/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".hero-dots span");
let current = 0;

// set initial slide color
setSlideColor(slides[current]);

function setSlideColor(slide) {
  const color = slide.dataset.color;
  const h1 = slide.querySelector(".hero-text h1");
  if (h1) h1.style.color = color;
}

setInterval(() => {
  // remove active states
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  // move to next slide
  current = (current + 1) % slides.length;

  // add active states
  slides[current].classList.add("active");
  dots[current].classList.add("active");

  // apply unique color to THIS slide
  setSlideColor(slides[current]);

}, 6000);

/* ================= SCROLL ANIMATIONS ================= */
const reveals = document.querySelectorAll(".reveal");

function onScroll(){
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 120){
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);

