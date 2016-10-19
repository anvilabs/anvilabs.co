/* @flow */

import cssnano from 'gulp-cssnano';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import uncss from 'gulp-uncss';

gulp.task('uncss', () => gulp
  .src('./public/styles.css')
  .pipe(uncss({
    html: ['public/**/*.html'],
  }))
  .pipe(cssnano())
  .pipe(gulp.dest('./public')),
);

// we don't actually need to use this
// since images are already compressed with imageoptim
gulp.task('imagemin', () => gulp
  .src('./public/**/*.{jpg,jpeg,png,svg}')
  .pipe(imagemin())
  .pipe(gulp.dest('./public')),
);

gulp.task('default', ['uncss']);
