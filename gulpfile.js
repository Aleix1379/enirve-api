const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

// gulp.task('scripts', () => {
//     const tsResult = tsProject.src()
//         .pipe(tsProject());
//     return tsResult.js.pipe(gulp.dest('dist'));
// });
gulp.task('scripts', () => {
    const result = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return merge([
        result.js
            .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../app' }))
            .pipe(gulp.dest('dist')),
        result.dts
            .pipe(gulp.dest('dist')),
    ]);
});

// gulp.task('watch', ['scripts'], () => {
//     gulp.watch('src/**/*.ts', ['scripts']);
// });

gulp.task('assets', function() {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});

// gulp.task('default', ['watch', 'assets']);
