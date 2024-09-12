let currentSlide1 = 0;
const slides1 = document.querySelectorAll(".FirstSlider .Slider img");
const totalSlides1 = slides1.length;

function showSlide1() {
  const offset = -currentSlide1 * 400;
  slides1.forEach((slide, index) => {
    slide.style.transform = `translateX(${offset}px)`;
  });
}

function nextSlide1() {
  currentSlide1 = (currentSlide1 + 1) % totalSlides1;
  showSlide1();
  if (currentSlide1 === 0) {
    setTimeout(() => {
      showSlide1();
    }, 500);
  }
}

function prevSlide1() {
  currentSlide1 = (currentSlide1 - 1 + totalSlides1) % totalSlides1;
  showSlide1();
}

showSlide1();

document.querySelector(".next1").addEventListener("click", nextSlide1);
document.querySelector(".prev1").addEventListener("click", prevSlide1);

//second slide
let currentSlide2 = 0;
const slides2 = document.querySelectorAll(".SecondSlider .Slider img");
const totalSlides2 = slides2.length;

function showSlide2() {
  const offset = -currentSlide2 * 80;
  slides2.forEach((slide, index) => {
    slide.style.transform = `translateX(${offset}px)`;
  });
}

function nextSlide2() {
  currentSlide2 = (currentSlide2 + 1) % totalSlides2;
  showSlide2();
  if (currentSlide2 === 1) {
    setTimeout(() => {
      showSlide2();
    }, 100);
  }
}

function prevSlide2() {
  currentSlide2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
  showSlide2();
}

showSlide2();

document.querySelector(".next2").addEventListener("click", nextSlide2);
document.querySelector(".prev2").addEventListener("click", prevSlide2);

//third

let currentSlide3 = 0;
const slides3 = document.querySelectorAll(".ThirdSlider .Slider .Sec");
const totalSlides3 = slides3.length;

function showSlide3() {
  const offset = -currentSlide3 * 250;
  slides3.forEach((slide, index) => {
    slide.style.transform = `translateX(${offset}px)`;
  });
}

function nextSlide3() {
  currentSlide3 = (currentSlide3 + 1) % totalSlides3;
  showSlide3();
  if (currentSlide3 === 1) {
    setTimeout(() => {
      showSlide3();
    }, 100);
  }
}

function prevSlide3() {
  currentSlide3 = (currentSlide3 - 1 + totalSlides3) % totalSlides3;
  showSlide3();
}

showSlide3();

document.querySelector(".next3").addEventListener("click", nextSlide3);
document.querySelector(".prev3").addEventListener("click", prevSlide3);
