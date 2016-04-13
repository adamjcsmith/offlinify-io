var gulp = require('gulp');

/* Image */
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

/* CSS */
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sassOptions = { errLogToConsole: true, outputStyle: 'compressed' };
var sassInput = ['static/bower_components/**/dist/*.css', '!static/bower_components/**/dist/*.min.css', 'static/**/*.scss'];
var sassOutput = 'static/css';

gulp.task('sass', function() {
  return gulp.src(sassInput)
    //.pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    //.pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(sassOutput))
    .pipe(sassdoc())
    .resume();
});

gulp.task('imagemin', function() {
  return gulp
    .src('static/src_images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('static/images'));
});

gulp.task('default', ['sass', 'imagemin']);
