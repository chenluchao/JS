var gulp = require("gulp");
var imgmin = require("gulp-imagemin");
var cssmin = require("gulp-cssmin");
var concat = require("gulp-concat");
var base64 = require("gulp-base64");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var devserver = require("gulp-devserver");
var sass = require("gulp-sass");

gulp.task("image",function(){
	gulp.src("./src/images/**/*")
		.pipe(imgmin())
		.pipe(gulp.dest('./app/images'));
});

gulp.task("css",function(){
	gulp.src("./src/css/**/*")
		.pipe(sass())
		.pipe(cssmin())
		.pipe(base64())
		.pipe(gulp.dest('./app/css'))
});

gulp.task("javascript",function(){
	gulp.src("./src/js/**/*")
		.pipe(uglify())
		.pipe(gulp.dest("./app/js"))
})

gulp.task("html",function(){
	gulp.src("./src/*.html")
		.pipe(htmlmin())
		.pipe(gulp.dest("./app"))
})

gulp.task("server",["css","image","javascript","html"],function(){
	gulp.src("./app")
		.pipe(devserver({
			livereload:true,
            listdir:false,
            defaultFile:"index.html"
		}))
})

gulp.task("default",["server"],function(){
	gulp.watch("./src/css/**/*",["css"]);
	gulp.watch("./src/js/**/*",["javascript"]);
	gulp.watch("./src/images/**/*",["image"]);
	gulp.watch("./src/*.html",["html"]);
});