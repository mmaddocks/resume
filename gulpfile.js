'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');

// Gulp task for sass
gulp.task('sass', function () {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ cascade: false }))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('./'))

	.pipe(gulp.dest('./dist/css/'))
});

// Gulp task to move images to /dist
gulp.task('images', function() {
  return gulp.src(['./src/images/**'])
    .pipe(gulp.dest('./dist/images'));
});

// Gulp task to move js to /dist
gulp.task('js', function() {
  return gulp.src(['./src/main.js'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
	gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
