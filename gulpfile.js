const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

function concatJS() {
  return gulp.src([
    './public/lib/redux.min.js',
    './public/src/core.js',
  ])
   .pipe(concat('jstate.js'))
  //  .pipe(uglify())
   .pipe(gulp.dest('./public/dist/'));
}
gulp.task(concatJS);

function watchJS() {
  return gulp.watch('./public/src/*.js', function(event) {
    return concatJS();
  });
}
gulp.task(watchJS);

gulp.task('default', gulp.series(concatJS, watchJS));