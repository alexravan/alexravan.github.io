var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
// var data = require('gulp-data');

// gulp.task('default', function() {
//   // place code for your default task here
// });

gulp.task('default', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});