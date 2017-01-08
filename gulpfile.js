/*
*gulp主文件
*/
'use strict';
//载入gulp任务
var gulp=require('gulp');
var less=require('gulp-less');
//注册一个任务
gulp.task('copy',function function_name (argument) {
	//console.log('hello world');
	gulp.src('src/index.html').pipe(gulp.dest('dist/'));
});
gulp.task('dist',function function_name (argument) {
	console.log('hello world');
	gulp.watch('src/index.html',['copy']);
	gulp.watch('src/*.less',['style']);
});
gulp.task('style',function function_name (argument) {
	//console.log('hello world');
	gulp.src('src/*.less').pipe(less()).pipe(gulp.dest('dist/css/'));
});