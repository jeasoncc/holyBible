const gulp = require('gulp');
const browserify = require('gulp-browserify');
const livereload = require('gulp-livereload');
const watch = require('gulp-watch');
var notify = require("gulp-notify");
// Basic usage
gulp.task('scripts', async function() {
    // Single entry point to browserify
  await gulp.src('public/script/home/graph.js')
        .pipe(browserify({
          insertGlobals : true,
        }))
        .pipe(gulp.dest('public/script/home/bundle2/'))
})
gulp.task('stream', function () {
    // Endless stream mode
    return watch('public/script/home/graph2.js', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch(['public/script/home/*.js', 'views/**/*'], async function () {
          console.log("已经更改")
          await notify("Hello Gulp!")
          await gulp.src('public/script/home/*.js')
                .pipe(browserify({
                  insertGlobals : true,
                }))
                .pipe(gulp.dest('public/script/home/bundle/'))
                .pipe(livereload({ start: true }))
                .pipe(notify("Hello Gulp!"));

          await gulp.src('views/**/*')
                .pipe(livereload({ start: true }))
    });
})

