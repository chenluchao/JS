var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
// var cssmin = require('gulp-cssmin');
// var concat = require("gulp-concat");
// var base64 = require('gulp-base64');
// var uglify = require("gulp-uglify");

gulp.task("image",function(){
    gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});

// gulp.task("css",function(){
//     gulp.src(["./src/css/reset.css","./src/css/swiper.min.css","./src/css/index.css"])
//         .pipe(base64())
//         .pipe(cssmin())
//         .pipe(gulp.dest('./dist/css'));
// });

// gulp.task("javascript",function(){
//     gulp.src("./src/js/**/*")
//         .pipe(uglify())
//         .pipe(gulp.dest("./dist/js"))
// });

// gulp.task("html",["image","css","javascript"],function(){
//     gulp.src("./src/*.html")
//         .pipe(gulp.dest('./dist'));
// })
gulp.task("default",["image"]);