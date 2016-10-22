/* @flow */

import path from 'path';

/* eslint-disable import/no-extraneous-dependencies */
import cssnano from 'gulp-cssnano';
import glob from 'glob';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import Pageres from 'pageres';
import uncss from 'gulp-uncss';
/* eslint-enable import/no-extraneous-dependencies */

gulp.task('uncss', () => gulp
  .src('./public/styles.css')
  .pipe(uncss({
    html: ['public/**/*.html'],
  }))
  .pipe(cssnano())
  .pipe(gulp.dest('./public')),
);

gulp.task('pageres', () => {
  glob
    .sync('public/blog/*/index.html')
    .forEach((file: string) => {
      const pageres = new Pageres({
        crop: true,
        filename: 'screenshot-<%= size %>',
        delay: 2,
        css: '.headroom-wrapper { display: none }',
        format: 'jpg',
      });

      pageres
        .src(file, ['1200x630', '600x315'])
        .dest(path.dirname(file))
        .run((err: ?Error) => {
          if (err) {
            console.log(err); // eslint-disable-line no-console
          }
        });
    });
});

// we don't actually need to use this
// since images are already compressed with imageoptim
gulp.task('imagemin', () => gulp
  .src('./public/**/*.{jpg,jpeg,png,svg}')
  .pipe(imagemin())
  .pipe(gulp.dest('./public')),
);

gulp.task('default', ['uncss', 'pageres']);
