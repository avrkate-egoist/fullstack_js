import { Gallery } from "./Gallery.js";

const imageList = [
  "images/poster_1.jpg",
  "images/poster_2.jpg",
  "images/poster_3.jpg",
  "images/poster_4.jpg",
  "images/poster_5.jpg",
];

const imageList2 = [
  "images/poster_1.jpg",
  "images/poster_2.jpg",
  "images/poster_3.jpg",
  "images/poster_4.jpg",
  "images/poster_5.jpg",
];

new Gallery("cats", imageList, { autoplayInterval: 5000, showDots: true });
new Gallery("cats2", imageList2, { autoplayInterval: 2000, showDots: false });
