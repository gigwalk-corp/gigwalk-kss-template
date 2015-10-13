import gulp from 'gulp';
import sass from 'gulp-sass';

export function scssTask() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));
}

export function watchScss() {
    return gulp.watch('scss/*.scss', ['scss']);
}

gulp.task('watch', ['watch:scss']);
gulp.task('watch:scss', watchScss);
gulp.task('scss', scssTask);
gulp.task('default', ['sass']);
