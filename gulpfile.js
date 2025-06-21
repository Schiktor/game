const { src, dest, watch, series, parallel} = require("gulp");

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const htmlMin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer')

// Разметка

function sync() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
}


function html() {
    return src("app/*.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(concat("index.min.html"))
    .pipe(dest('public'))
}

// Скрипты

function script() {
    return src("app/main.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

// Стили

function styles() {
    return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat("style.min.css"))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watcher () {
    watch("app/*.html").on('change', browserSync.reload)
    watch('app/*.js', script)
    watch('app/scss/*.scss', styles)
}

exports.html = html
exports.styles = styles
exports.script = script
exports.watcher = watcher
exports.sync = sync

exports.default = parallel(styles, script, sync, watcher)