var _ = require('lodash'),
    gulp = require('gulp'),
    buffer = require('vinyl-buffer'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    fs = require('fs'),
    server = require('./server');


/**
 * Thanks rootical. Based on: https://gist.github.com/rootical/d700ea0d89bbfc362fc5
 */
function browserifyBuild(watch) {

    var bundler;

    if( watch ) {

        bundler = watchify(browserify('./src/main.js',
            _.assign(watchify.args, {
                debug: true
            })).ignore('three')); // This means THREE.js won't be included in the bundle - we're pulling in via separate script tag

        bundler.on('update', function() {
            bundle();
        });

    } else {

        bundler = browserify('./src/main.js', {
            debug: true
        }).ignore('three'); // This means THREE.js won't be included in the bundle - we're pulling in via separate script tag

    }

    bundler.on('error', function(error) {
        gutil.log('Browserify error', error);
    });

    function bundle() {

        gutil.log('Bundle...');

        var hrTime = process.hrtime();
        var t1 = hrTime[0] * 1000 + hrTime[1] / 1000000;

        bundler
            // Apply Babelify transform to transpile from ES6 to ES5 - TODO set compact to true for production build?
            .transform(babelify.configure({compact: false}))
            // Apply Browserify Shim to allow us to use globals like THREE. Global means it will apply to our dependencies too (e.g. react-three)
            .transform({global: true}, 'browserify-shim')
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist'));

        hrTime = process.hrtime();
        var t2 = hrTime[0] * 1000 + hrTime[1] / 1000000;

        gutil.log('Bundle took ' + Math.round(t2-t1) + ' ms');

    }

    return bundle();
}

/**
 *  Compile and concatenate the SCSS files into dist/styles.css
 */
gulp.task('sass', function() {

    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist'));

});

gulp.task('browserify', function() {
    return browserifyBuild(false);
});

/**
 * Browserify watch
 */
gulp.task('browserify-watch', function() {
    return browserifyBuild(true);
});

/**
 * Compile JS and SCSS
 */
gulp.task('compile', ['browserify', 'sass'], function() {
});

/**
 * Compile and watch for changes
 */
gulp.task('watch', ['compile','browserify-watch'], function() {
    gulp.watch('./styles/*.scss', ['sass']);
});

/**
 * Compile and start watching, then start the server
 */
gulp.task('serve', ['watch'], function() {
    server.start();
});

/**
 * By default, runs the compile task
 */
gulp.task('default', ['compile'], function() {
});
