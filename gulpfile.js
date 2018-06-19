var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran-gfw');
var minifyjs = require('gulp-js-minify');
var svgmin = require('gulp-svgmin');

const workboxBuild = require('workbox-build');

gulp.task('service-worker', () => {
  return workboxBuild.generateSW({
    globDirectory: 'public',
    globPatterns: [
      '**\/*.{html,json,js,css,jpg,png,jpeg,svg,gif,mp4,ico,woff,tff}',
    ],
    swDest: 'build/sw.js',
  });
});

gulp.task('service-worker-mp4', () => {
  return workboxBuild.generateSW({
    globDirectory: 'public',
    globPatterns: [
      'public/_resources/vid/ucsd-home.mp4',
    ],
    swDest: 'build/sw.js',
  });
});

gulp.task('scripts', function() {
    gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('minjs'));
});

gulp.task('styles', function() {
    console.log('run styles');
});

// Compress svg
gulp.task('svg', function () {
  return gulp.src('public/sites/all/themes/ucd_one/images/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest('public/sites/all/themes/ucd_one/images'));
});

// Compress images
gulp.task('image', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});

gulp.task('progressive', function () {
    return gulp.src('img/*.jpg')
        .pipe(jpegtran({ progressive: true })())
        .pipe(gulp.dest('img')); 
});

gulp.task('minify-js', function(){
  gulp.src('public/sites/default/files/js/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('public/sites/default/files/js'));
});

// Compress images
gulp.task('compress', () =>
	gulp.src('public/sites/all/themes/ucd_one/images/icons/*.svg')
        .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{removeViewBox: true}]
        }))
		.pipe(gulp.dest('public/sites/all/themes/ucd_one/images/icons'))
);

gulp.task('css', function() {
  return gulp.src('public/sites/default/files/css/*.css')
    .pipe(purify(['public/sites/default/files/js/*.js', 'index.html']))
    .pipe(gulp.dest('purifiedcss'));
});

var checkCSS = require( 'gulp-check-unused-css' );
gulp.task('checkcss', function() { 
return gulp
    .src([ 'public/sites/default/files/css/*.css', '*.html' ])
    .pipe( checkCSS() );
});

var uncss = require('gulp-uncss');
gulp.task('ridcss', function () {
    return gulp.src('public/sites/default/files/css/*.css')
        .pipe(uncss({
            html: ['public/index.html']
        }))
        .pipe(gulp.dest('uncss'));
});