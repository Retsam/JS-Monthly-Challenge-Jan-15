var gulp = require('gulp');

var react = require('gulp-react');

gulp.task('js', function () {
    var reactStream = gulp.src('src/*.js')
        .pipe(react());
        
    reactStream.pipe(gulp.dest('dist'));

    reactStream.on('error', console.error.bind(console));
});

gulp.task('watch', ['js'], function () {
    gulp.watch('src/*.js', ['js']);
});

gulp.task('default', ['watch']);