var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var rename = require("gulp-rename");
var cssnano = require('gulp-cssnano');
var plumber = require('gulp-plumber');

const scssFiles = ['./static/scss/**/*.scss'];
const scssMain = ['./static/scss/main.scss'];
const pathStyleDest = './static/css';


function styleBuildWithSourcemap () {
  return gulp
    .src(scssMain)
    .pipe(plumber({errorHandler: notify.onError("Style Build Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename({suffix: ".min"}))
    .pipe(autoprefixer('last 4 version'))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .on('error', onError)
    .pipe(gulp.dest(pathStyleDest));
}

function styleBuild () {
  return gulp
    .src(scssMain)
    .pipe(plumber({errorHandler: notify.onError("Style Build Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(rename({suffix: ".min"}))
    .pipe(autoprefixer('last 4 version'))
    .pipe(cssnano())
    .on('error', onError)
    .pipe(gulp.dest(pathStyleDest));
}

function onError(error) {
    console.log(error.toString());
    this.emit('end');
}

const build = gulp.series(styleBuild),
      build_with_sourcemap = gulp.series(styleBuildWithSourcemap);
exports.build = build;
exports.build_with_sourcemap = build_with_sourcemap;
