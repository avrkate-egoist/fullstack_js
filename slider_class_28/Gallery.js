const PLAY_TIMEOUT_SEC = 3;
const SWIPE_THRESHOLD = 80;

export class Gallery {
  imageList = [];

  currentSlide = 0;
  intervalTimer;
  dots = [];

  startX = 0;
  currentTranslate = 0;
  isSwiping = false;

  constructor(sliderId, imageList) {
    if (!sliderId) {
      throw new Error("First parameter must be slider id");
    }

    if (!Array.isArray(imageList) || imageList.length === 0) {
      throw new Error("Second parameter: add images.");
    }

    this.imageList = imageList;
    this.slider = document.getElementById(sliderId);
    this.createHtmlStructure();
    this.getElementsFromPage(sliderId);
    this.slideWidth = this.slider.querySelector(".slider-viewport").offsetWidth;

    this.init();
  }
  init() {
    this.createImages();
    this.createDots();
    this.updateDots(0);

    this.initEvents();
  }

  initEvents() {
    this.leftArrow.addEventListener("click", () => this.leftClick());
    this.rightArrow.addEventListener("click", () => this.rightClick());

    this.slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") this.leftClick();
      if (event.key === "ArrowRight") this.rightClick();
    });

    this.playContainer.addEventListener("click", () => {
      if (this.playContainer.classList.contains("paused")) {
        this.play();
        this.playContainer.classList.remove("paused");
      } else {
        this.pause();
        this.playContainer.classList.add("paused");
      }
    });

    this.touchStartHandler = this.touchStartHandler.bind(this);
    this.touchMoveHandler = this.touchMoveHandler.bind(this);
    this.touchEndHandler = this.touchEndHandler.bind(this);

    this.sliderLine.addEventListener("touchstart", this.touchStartHandler);
    this.sliderLine.addEventListener("touchmove", this.touchMoveHandler);
    this.sliderLine.addEventListener("touchend", this.touchEndHandler);

    this.intervalTimer = setInterval(
      () => this.rightClick(),
      PLAY_TIMEOUT_SEC * 1000,
    );
  }

  createHtmlStructure() {
    this.slider.classList.add("slider");
    this.slider.setAttribute("tabindex", "0");
    this.slider.innerHTML = `
    <div class="slider-viewport">
      <div class="slider-line slow-switch"></div>
    </div>
    <div class="slider-nav slider-left">⭅</div>
    <div class="slider-nav slider-right">⭆</div>
    <div class="dots-container"></div>
    <div class="play-container">
      <div class="play-btn"></div>
      <div class="pause-btn"></div>
    </div>
  `;
  }

  getElementsFromPage(sliderId) {
    this.slider = document.getElementById(sliderId);

    this.leftArrow = this.slider.querySelector(".slider-left");
    this.rightArrow = this.slider.querySelector(".slider-right");
    this.sliderLine = this.slider.querySelector(".slider-line");
    this.dotsContainer = this.slider.querySelector(".dots-container");
    this.playContainer = this.slider.querySelector(".play-container");
  }

  createImages() {
    let generatedHtml = "";
    this.imageList.forEach((imgStr) => {
      generatedHtml = generatedHtml + `<img src="${imgStr}" alt="${imgStr}">`;
    });

    generatedHtml =
      generatedHtml +
      `<img src="${this.imageList[0]}" alt="${this.imageList[0]}">`;
    this.sliderLine.innerHTML = generatedHtml;
  }

  createDots() {
    this.imageList.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.addEventListener("click", () => {
        this.currentSlide = index;
        this.moveToSlide(this.currentSlide);
        this.updateDots(this.currentSlide);
      });
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    });
  }

  updateDots(slideIndex) {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideIndex);
    });
  }

  moveToSlide(slide) {
    console.log("move to slide", slide);
    this.sliderLine.style.transform = `translate(${slide * -this.slideWidth}px)`;
    this.updateDots(slide);
  }

  silentMoveToSlide(slide) {
    console.log("silent move to slide", slide);
    this.sliderLine.classList.remove("slow-switch");
    this.sliderLine.style.transform = `translate(${slide * -this.slideWidth}px)`;
    this.sliderLine.offsetHeight;
    this.sliderLine.classList.add("slow-switch");
  }

  leftClick() {
    this.currentSlide = this.currentSlide - 1;
    if (this.currentSlide < 0) {
      this.currentSlide = this.imageList.length;
      this.silentMoveToSlide(this.currentSlide);
      this.currentSlide = this.imageList.length - 1;
    }
    this.moveToSlide(this.currentSlide);
  }

  rightClick() {
    this.currentSlide = this.currentSlide + 1;
    if (this.currentSlide >= this.imageList.length) {
      this.moveToSlide(this.currentSlide);

      setTimeout(() => {
        this.currentSlide = 0;
        this.silentMoveToSlide(this.currentSlide);
        this.updateDots(this.currentSlide);
      }, 500);
    } else {
      this.moveToSlide(this.currentSlide);
    }
  }

  play() {
    if (!this.intervalTimer) {
      this.intervalTimer = setInterval(
        () => this.rightClick(),
        PLAY_TIMEOUT_SEC * 1000,
      );
      console.log("clicked play");
    }
  }

  pause() {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
      this.intervalTimer = null;
      console.log("clicked pause");
    }
  }

  touchStartHandler(event) {
    this.startX = event.touches[0].clientX;
    this.isSwiping = true;
    this.pause();
    this.sliderLine.classList.remove("slow-switch");
    this.currentTranslate = -this.currentSlide * this.slideWidth;
  }

  touchMoveHandler(event) {
    if (!this.isSwiping) return;
    const currentX = event.touches[0].clientX;
    const diff = currentX - this.startX;
    this.sliderLine.style.transform = `translateX(${this.currentTranslate + diff}px)`;
  }

  touchEndHandler(event) {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    this.sliderLine.classList.add("slow-switch");

    const endX = event.changedTouches[0].clientX;
    const diff = endX - this.startX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff < 0) {
        this.rightClick();
      } else {
        this.leftClick();
      }
    } else {
      this.moveToSlide(this.currentSlide);
    }
  }
}
