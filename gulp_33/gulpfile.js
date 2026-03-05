const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const { src, watch, task, dest } = gulp;
const cssnano = require("cssnano");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");

const postCssPlugins = [cssnano({ preset: "default" })];

function minScss() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./assets/"));
}

function syncInit() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

async function sync() {
  browserSync.reload();
}

function watchFiles() {
  minScss();
  syncInit();
  watch("./src/**/*.scss", minScss);
  watch("./src/**/*.scss", sync);
  watch("./*.html", sync);
  // watch("./assets/js/**/*.js", sync);
}

task("scss", minScss);
task("watch", watchFiles);
