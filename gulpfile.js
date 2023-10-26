const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  // root SASS file (contains all your includes)
  return (
    gulp
      .src('styles/*.scss')
      // compile SASS to CSS
      .pipe(sass())
      .pipe(gulp.dest('assets'))
  );
});

gulp.task('watch', function () {
  // watch all SASS (.scss) files
  gulp.watch(['styles/**/*.scss'], gulp.series('sass'));
});