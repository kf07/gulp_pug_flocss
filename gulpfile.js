// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const cmq = require('gulp-combine-media-queries');
const csscomb = require('gulp-csscomb');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const htmlbeautify = require('gulp-html-beautify');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sassGlob = require("gulp-sass-glob");
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");


// beautifiy_option
const beautify_options = {
    'indent_with_tabs': true
};

gulp.task('html', () => {
    return gulp.src('dist/**/*.html')
        .pipe(htmlbeautify(beautify_options))
        .pipe(gulp.dest('dist/'))
});

//pug
gulp.task('pug', () => {
    return gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('imagemin', () => {
    return gulp.src('src/img/*')
        .pipe(plumber())
        .pipe(imagemin([
            pngquant({quality: '65-85', speed: 1}),
            mozjpeg({quality: 85}),
            imagemin.svgo(),
            imagemin.gifsicle()
        ]))
        .pipe(gulp.dest('./dist/assets/img/'))
});

gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err.messageFormatted);
                this.emit('end');
            }
        }))
        .pipe(sassGlob())
        // Sassのコンパイルを実行
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(cmq())
        .pipe(csscomb())
        .pipe(postcss([
            autoprefixer({
                // IEは11以上、Androidは4.4以上
                // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
                browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
                cascade: false
            })
        ]))
        .pipe(gulp.dest('./dist/assets/css'))
});


//babel
gulp.task('babel', () => {
    return gulp.src('src/es6/script.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist/assets/js'));
});


//browser-sync
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});

//css-min
gulp.task('minify-css', () => {
    return gulp.src('dist/assets/css/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/assets/css/'));
});

//js-min
gulp.task("minify-js", () => {
    return gulp.src("dist/assets/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/assets/js/"));
});

//html-min
gulp.task('minify-html', () => {
    return gulp.src('dist/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('bs-reload', () => {
    browserSync.reload();
});


// default
gulp.task('default', ['browser-sync'], () => {
    gulp.watch('src/pug/**/*.pug', ['pug']);
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['babel']);
    gulp.watch('dist/**/*.html', ['html']);
    gulp.watch('dist/**/*.html', ['bs-reload']);
    gulp.watch('dist/**/*.js', ['bs-reload']);
    gulp.watch('dist/**/*.css', ['bs-reload']);
});
