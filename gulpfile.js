var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass')
    wiredep = require('wiredep').stream,
    reload = browserSync.reload;

var paths = {
    scripts: ['modules/**/*.module.js','modules/**/*.js']
};

gulp.task('inject', function(){
    return gulp.src('index.html')
        .pipe(inject(gulp.src(paths.scripts, {read:false})))
        .pipe(gulp.dest('./'));
});

gulp.task('wiredep', function(){
   gulp.src('index.html')
       .pipe(wiredep({
           directory: './lib',
           bowerJson: require('./bower.json')
       }))
       .pipe(gulp.dest('./'));
});

gulp.task('sass', function(){
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets'));
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['sass', 'inject', 'wiredep', 'browser-sync'], function(){
    gulp.watch(paths.scripts, ['inject', reload]);
    gulp.watch('scss/**/*.scss', ['sass', reload]);
});