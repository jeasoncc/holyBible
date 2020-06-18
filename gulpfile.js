var gulp = require('gulp');
var browserify = require('gulp-browserify');
const watch = require('gulp-watch');
// Basic usage
gulp.task('scripts', async function() {
    // Single entry point to browserify
  await gulp.src('public/script/home/graph.js')
        .pipe(browserify({
          insertGlobals : true,
        }))
        .pipe(gulp.dest('public/script/home/graph2.js'))
})
gulp.task('stream', function () {
    // Endless stream mode
    return watch('public/script/home/graph2.js', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('public/script/home/*.js', async function () {
          console.log("已经更改")
          await gulp.src('public/script/home/graph.js')
                .pipe(browserify({
                  insertGlobals : true,
                }))
                .pipe(gulp.dest('public/script/home/bundle/'))
    });
})

