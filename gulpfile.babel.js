/* @flow */

import path from 'path';

import glob from 'glob';
import googleWebFonts from 'gulp-google-webfonts';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import inlinesource from 'gulp-inline-source';
import minifyInline from 'gulp-minify-inline';
import Pageres from 'pageres';
import uncss from 'gulp-uncss';

gulp.task('uncss', () => gulp
  .src('./public/styles.css')
  .pipe(
    uncss({
      html: ['public/**/*.html'],
      ignore: [
        '.b--dark-gray',
        '.b--red',
        '.b--white',
        '.bg-dark-gray',
        '.bg-white',
        '.dark-gray',
        '.gray',
        '.red',
        '.white-60',
        '.white',
        /^\.dark-mode .+/,
        /^\.light-mode .+/,
        /^\.wf-active .+/,
      ],
    }),
  )
  .pipe(gulp.dest('./public')));

gulp.task('inlinesource', ['uncss'], () =>
  gulp
    .src('./public/**/*.html')
    .pipe(inlinesource({attribute: 'data-inline'}))
    .pipe(gulp.dest('./public')));

gulp.task('minifyinline', ['inlinesource'], () =>
  gulp
    .src('./public/**/*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest('./public')));

gulp.task('fonts', () => gulp
  .src('./fonts.list')
  .pipe(
    googleWebFonts({
      fontsDir: 'fonts/',
      cssDir: './',
      cssFilename: 'fonts.css',
    }),
  )
  .pipe(gulp.dest('./public')));

gulp.task('pageres', ['minifyinline', 'fonts'], () => {
  glob.sync('public/blog/*/index.html').forEach((file: string) => {
    const pageres = new Pageres({
      crop: true,
      filename: 'post-screenshot',
      delay: 2,
      scale: 2,
      css: (
        `
          .headroom-wrapper { display: none }
          #content { max-width: 48rem }
        `
      ),
      format: 'jpg',
    });

    pageres.src(file, ['1200x630']).dest(path.dirname(file)).run((
      err: ?Error,
    ) => {
      if (err) {
        console.log(err); // eslint-disable-line no-console
      }
    });
  });
});

// we don't actually need to use this
// since images are already compressed with imageoptim
gulp.task('imagemin', () =>
  gulp
    .src('./public/**/*.{jpg,jpeg,png,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest('./public')));

gulp.task('default', ['minifyinline', 'fonts', 'pageres']);
