var gulp = require('gulp'),
	react = require('gulp-react');

gulp.task('js', function () {
    return gulp.src('jsx/app.jsx')
        .pipe(react())
        .pipe(gulp.dest('app/js/'));
});

gulp.task('watcher',function(){
  gulp.watch('jsx/*.jsx', ['css']);
});

gulp.task('default', ['watcher', 'js']);
