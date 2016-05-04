var browserSync = require('browser-sync').create();
var gulp        = require('gulp');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["**/*.html", "**/*.js", "**/*.css"]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
