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
    notify = require('gulp-notify'),
    fs = require('fs'),
    server = require('./server');


/**
 * Based on: https://gist.github.com/wesbos/52b8fe7e972356e85b43
 */
function handleBuildErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Build Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

/**
 * Based on: https://gist.github.com/wesbos/52b8fe7e972356e85b43
 */
function browserifyBuild(file, watch) {

    // watchify() if watch requested, otherwise run browserify() once
    var bundler = watch ? watchify(browserify(file).ignore('three'), {ignoreWatch: '**/node_modules/**'}) :
        browserify(file).ignore('three');

    function rebundle() {

        gutil.log('Bundle...');

        var hrTime = process.hrtime();
        var t1 = hrTime[0] * 1000 + hrTime[1] / 1000000;

        return bundler
            // Apply Babelify transform to transpile from ES6 to ES5 - TODO set compact to true for production build?
            .transform(babelify.configure({compact: false}))
            // Apply Browserify Shim to allow us to use globals like THREE. Global means it will apply to our dependencies too (e.g. react-three)
            .transform({global: true}, 'browserify-shim')
            .bundle()
            .on('error', handleBuildErrors)
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(gulp.dest('./dist/'))
            .on('end', function () {

                hrTime = process.hrtime();
                var t2 = hrTime[0] * 1000 + hrTime[1] / 1000000;

                gutil.log('Bundle took ' + Math.round(t2 - t1) + ' ms');
            });

    }

    // Listen for an update and run rebundle
    bundler.on('update', function () {
        rebundle();
        gutil.log('Rebundle...');
    });

    // Run it once the first time this is called
    return rebundle();
}

/**
 *  Compile and concatenate the SCSS files into dist/styles.css
 */
gulp.task('compile:sass', function() {

    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist'));

});

gulp.task('compile:js', function() {
    return browserifyBuild('./src/main.js', false);
});

/**
 * Compile JS and SCSS
 */
gulp.task('compile', ['compile:js', 'sass'], function() {
});

/**
 * Sass watch (not to be confused with a sasquatch)
 */
gulp.task('watch:sass', function() {
    return gulp.watch('./styles/*.scss', ['compile:sass']);
});

/**
 * JS watch
 */
gulp.task('watch:js', function() {
    return browserifyBuild('./src/main.js', true);
});

/**
 * Watch for Sass/JS changes
 */
gulp.task('watch', ['watch:sass', 'watch:js'], function() {
});

/**
 * Compile Sass and start watching (this includes JS build), then start the server
 */
gulp.task('serve', ['compile:sass', 'watch'], function() {
    server.start();
});

/**
 * By default, just runs the compile task
 */
gulp.task('default', ['compile'], function() {
});
