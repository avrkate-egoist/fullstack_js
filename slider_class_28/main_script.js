// const SLIDE_WIDTH = document.querySelector(".slider-viewport").offsetWidth;
// const playContainer = document.querySelector(".play-container");
// const PLAY_TIMEOUT_SEC = 3;
// const SWIPE_THRESHOLD = 80;

// const imageList = [
//   "images/poster_1.jpg",
//   "images/poster_2.jpg",
//   "images/poster_3.jpg",
//   "images/poster_4.jpg",
//   "images/poster_5.jpg",
// ];

// const leftArrow = document.querySelector(".slider-left");
// const rightArrow = document.querySelector(".slider-right");
// const sliderLine = document.querySelector(".slider-line");

// const dotsContainer = document.querySelector(".dots-container");

// let currentSlide = 0;
// let intervalTimer;
// let dots = [];

// let startX = 0;
// let currentTranslate = 0;
// let isSwiping = false;

// init();

// function init() {
//   createImages();
//   createDots();
//   updateDots(0);
//   initEvents();
// }

// function initEvents() {
//   leftArrow.addEventListener("click", leftClick);
//   rightArrow.addEventListener("click", rightClick);

//   document.body.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowLeft") {
//       leftClick();
//     } else if (event.key === "ArrowRight") {
//       rightClick();
//     }
//   });

//   playContainer.addEventListener("click", () => {
//     if (playContainer.classList.contains("paused")) {
//       play();
//       playContainer.classList.remove("paused");
//     } else {
//       pause();
//       playContainer.classList.add("paused");
//     }
//   });

//   sliderLine.addEventListener("touchstart", touchStartHandler);
//   sliderLine.addEventListener("touchmove", touchMoveHandler);
//   sliderLine.addEventListener("touchend", touchEndHandler);

//   intervalTimer = setInterval(rightClick, PLAY_TIMEOUT_SEC * 1000);
// }

// function createImages() {
//   let generatedHtml = "";
//   imageList.forEach((imgStr) => {
//     generatedHtml = generatedHtml + `<img src="${imgStr}" alt="${imgStr}">`;
//   });

//   generatedHtml =
//     generatedHtml + `<img src="${imageList[0]}" alt="${imageList[0]}">`;
//   sliderLine.innerHTML = generatedHtml;
// }

// function createDots() {
//   imageList.forEach((_, index) => {
//     const dot = document.createElement("span");
//     dot.className = "dot";
//     dot.addEventListener("click", () => {
//       currentSlide = index;
//       moveToSlide(currentSlide);
//       updateDots(currentSlide);
//     });
//     dotsContainer.appendChild(dot);
//     dots.push(dot);
//   });
// }

// function leftClick() {
//   currentSlide = currentSlide - 1;
//   if (currentSlide < 0) {
//     currentSlide = imageList.length;
//     silentMoveToSlide(currentSlide);
//     currentSlide = imageList.length - 1;
//   }
//   moveToSlide(currentSlide);
// }

// function rightClick() {
//   currentSlide = currentSlide + 1;
//   if (currentSlide >= imageList.length) {
//     moveToSlide(currentSlide);
//     setTimeout(() => {
//       currentSlide = 0;
//       silentMoveToSlide(currentSlide);
//       updateDots(currentSlide);
//     }, 500);
//   } else {
//     moveToSlide(currentSlide);
//   }
// }

// function moveToSlide(slide) {
//   console.log("move to slide", slide);
//   sliderLine.style.transform = `translate(${slide * -SLIDE_WIDTH}px)`;
//   updateDots(slide);
// }

// function silentMoveToSlide(slide) {
//   console.log("silent move to slide", slide);
//   sliderLine.classList.remove("slow-switch");
//   sliderLine.style.transform = `translate(${slide * -SLIDE_WIDTH}px)`;
//   sliderLine.offsetHeight;
//   sliderLine.classList.add("slow-switch");
// }

// function play() {
//   if (!intervalTimer) {
//     intervalTimer = setInterval(rightClick, PLAY_TIMEOUT_SEC * 1000);
//     console.log("klicked play");
//   }
// }

// function pause() {
//   if (intervalTimer) {
//     clearInterval(intervalTimer);
//     intervalTimer = null;
//     console.log("klicked pause");
//   }
// }

// function updateDots(slideIndex) {
//   dots.forEach((dot, index) => {
//     dot.classList.toggle("active", index === slideIndex);
//   });
// }

// function touchStartHandler(event) {
//   startX = event.touches[0].clientX;
//   isSwiping = true;
//   pause();
//   sliderLine.classList.remove("slow-switch");
//   currentTranslate = -currentSlide * SLIDE_WIDTH;
// }

// function touchMoveHandler(event) {
//   if (!isSwiping) return;
//   const currentX = event.touches[0].clientX;
//   const diff = currentX - startX;
//   sliderLine.style.transform = `translateX(${currentTranslate + diff}px)`;
// }

// function touchEndHandler(event) {
//   if (!isSwiping) return;
//   isSwiping = false;
//   sliderLine.classList.add("slow-switch");

//   const endX = event.changedTouches[0].clientX;
//   const diff = endX - startX;

//   if (Math.abs(diff) > SWIPE_THRESHOLD) {
//     if (diff < 0) {
//       rightClick();
//     } else {
//       leftClick();
//     }
//   } else {
//     moveToSlide(currentSlide);
//   }
// }
