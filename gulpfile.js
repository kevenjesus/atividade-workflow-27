var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


/*
 * Variaveis
 */
// Fonte Sass
var scssFiles = './source/scss/**/*.scss';


// Destino CSS 
var cssDest = './dist/css';

// Destino Index - MINHA LINHA
var indexDest = './dist';


// Opcoes para desenvolvedor
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Opcoes para producao
var sassProdOptions = {
  outputStyle: 'compressed'
}


/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassdev']);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'watch']);

