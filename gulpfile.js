var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    inject = require('gulp-inject');


var paths = {
    scripts: ['modules/**/*.module.js','modules/**/*.js']
};

gulp.task('inject', function(){
    return gulp.src('index.html')
        .pipe(inject(gulp.src(paths.scripts, {read:false})))
        .pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['inject', 'browser-sync'], function(){

});