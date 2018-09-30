//使用npm install直接安装package.json里面的所有的包
//注意：  md5 只在重新生成dist生产环境的时候才会重新随机添加 在项目中我们多次创建修改文之后会自动添加很多 没关系 重新gulp之后会显示正常的（为什么不能没修改一次就适用MD5呢，因为代码很多的情况下就要调用很多插件，不停的ctrl+s会造成插件的重复加载运行，出现BUG，所以开发环境只是ctrl+s仅仅html加载就行了）  
//图片压缩功能注释了先 因为图片压缩需要很多时间 我们要预览页面修改造成很大麻烦 图片加载不出来 所以注释了 项目告一段落取消注释统一压缩

// 引入 gulp及组件  
var gulp = require('gulp'),                 //基础库  
    notify = require('gulp-notify'),           //通知  
    tinypng = require('gulp-tinypng-compress'); //图片压缩
    sass = require('gulp-sass'),          //sass  
    rename = require('gulp-rename'),           //重命名  
    autoprefixer = require('gulp-autoprefixer'), // 处理css中浏览器兼容的前缀  
    cssminify = require('gulp-clean-css'),          // css的层级压缩合并  
    htmlmin = require('gulp-htmlmin')

    jshint = require('gulp-jshint'),           //js检查 ==> npm install --save-dev jshint gulp-jshint（.jshintrc：https://my.oschina.net/wjj328938669/blog/637433?p=1）  
    uglify = require('gulp-uglify'),          //js压缩  
    concat = require('gulp-concat'),          //合并文件  

    imagemin = require('gulp-imagemin'),       //图片压缩  
    md5 = require('gulp-md5-assets'),         //添加md5 特别是移动项目调试 特别特别是微信 缓存很厉害 添加时间戳都无效有时

    browserSync = require('browser-sync').create(),
    
    fontSpider = require('gulp-font-spider'),

    del = require('del');             //清空文件  


var SRC_DIR = './src/';     // 源文件目录  开发环境
var DIST_DIR = './dist/';   // 文件处理后存放的目录  生产环境
var DIST_FILE = DIST_DIR + '**'; // 目标路径下的所有文件  

var Config = {
    html: {
        src: SRC_DIR + '*.html',
        dist: DIST_DIR
    },
    assets: {
        src: SRC_DIR + 'assets/**/*',            // assets目录：./src/assets  放置一些第三方文件bootstrp什么的
        dist: DIST_DIR + 'assets'                // assets文件build后存放的目录：./dist/assets  
    },
    css: {
        src: SRC_DIR + 'css/**/*.css',           // CSS目录：./src/css/   存放一些normalize相关文件
        dist: DIST_DIR + 'css'                   // CSS文件build后存放的目录：./dist/css  
    },
    html: {
        src: SRC_DIR + 'html/**/*.html',           // html目录：./src/html/  
        dist: DIST_DIR + 'html'                   // html文件build后存放的目录：./dist/html  
    },
    sass: {
        src: SRC_DIR + 'scss/**/*.scss',         // SCSS目录：./src/scss/  自己样式的目录
        dist: DIST_DIR + 'css'                   // SCSS文件生成CSS后存放的目录：./dist/css  
    },
    js: {
        src: SRC_DIR + 'js/**/*.js',             // JS目录：./src/js/  
        dist: DIST_DIR + 'js',                   // JS文件build后存放的目录：./dist/js  
        build_name: 'build.js'                   // 合并后的js的文件名  
    },
    img: {
        src: SRC_DIR + 'images/**/*',            // images目录：./src/images/  
        dist: DIST_DIR + 'images'                // images文件build后存放的目录：./dist/images  
    }
};


/** 
 * HTML处理 
 */
gulp.task('html', function () {
    gulp.src(Config.html.src)
        // .pipe(htmlmin({collapseWhitespace: true}))  //压缩html需要就可以取消注释
        .pipe(gulp.dest(Config.html.dist));
});

/** 
 * assets文件夹下的所有文件处理 
 */
gulp.task('assets', function () {
    gulp.src(Config.assets.src)
        .pipe(gulp.dest(Config.assets.dist));
});

/** 
 * CSS样式处理 
 */
gulp.task('css', function () {
    return gulp.src(Config.css.src)
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./dist/css/'))
        // .pipe(md5(10, './dist/**/*.html'))    //因为只引用了css 没有引用min.css所以   
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssminify()) //执行压缩  
        .pipe(gulp.dest(Config.css.dist))
        .pipe(md5(10, './dist/**/*.html'))
        .pipe(notify({ message: 'css task complete' }));
});

/**font-Spider
 *  */
gulp.task('fontspider', function() {
    return gulp.src(Config.html.src)
        .pipe(fontSpider());
});

/** 
 * SCSS样式处理 
 */
gulp.task('sass', function () {
    return gulp.src(Config.sass.src)
        .pipe(autoprefixer('last 2 version'))
        .pipe(sass())
        .pipe(gulp.dest(Config.sass.dist))
        .pipe(rename({ suffix: '.min' })) //rename压缩后的文件名  
        .pipe(cssminify()) //执行压缩  
        .pipe(gulp.dest(Config.sass.dist))
        .pipe(md5(10, './dist/**/*.html'))
        .pipe(browserSync.stream())
        .pipe(notify({ message: 'sass task complete' }));
});


/** 
 * js处理 
 */
gulp.task('js',['js-concat'], function () {
    gulp.src(Config.js.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest(Config.js.dist))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(Config.js.dist))
        .pipe(notify({ message: 'js task complete' }));
});
/** 
 * 合并所有js文件并做压缩处理 
 */
gulp.task('js-concat', function () {
    gulp.src(Config.js.src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('common.js'))
        .pipe(gulp.dest(Config.js.dist))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(concat('common.min.js'))
        .pipe(gulp.dest(Config.js.dist))
        .pipe(md5(10, './dist/**/*.html'))
        .pipe(notify({ message: 'js-concat task complete' }));
});

/** 
 * 图片处理 
 */
gulp.task('tinypng', function () {
    return gulp.src(Config.img.src)
    // .pipe(tinypng({
    //     key: 'gksFQK70yUByuhcm5Cqql1Tkh1dkvfCq',
    //     sigFile: Config.img.dist,
    //     log: true
    // }))//  压缩图片最后生产环境再来压缩 不然图片最后才加载会导致css出不来
    .pipe(gulp.dest(Config.img.dist))
    .pipe(notify({ message: 'images task complete' }));
});

/** 
 * 清空图片、样式、js 
 */
gulp.task('clean', function () {
    return del([Config.html.dist, Config.css.dist, Config.js.dist, Config.img.dist, Config.assets.dist]);
});
gulp.task('clean-all', function () {
    return del([Config.html.dist, Config.assets.dist, Config.css.dist, Config.js.dist, Config.img.dist]);
});

/** 
 * 默认任务 清空图片、样式、js并重建 运行语句 gulp 
 */
gulp.task('default', ['clean', 'serve'], function () {
    gulp.start('html', 'assets', 'css', 'tinypng', 'js', 'sass', 'js-concat','fontspider');
});

//创建服务器本地预览网页
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(Config.html.src, ['html']);

    // Watch .css files  
    gulp.watch(Config.css.src, ['css']);

    // Watch .scss files  
    gulp.watch(Config.sass.src, ['sass']);

    // Watch assets files  
    gulp.watch(Config.assets.src, ['assets']);

    // Watch .js files  
    gulp.watch(Config.js.src, ['js']);

    // Watch image files  
    gulp.watch(Config.img.src, ['images']);


    gulp.watch(Config.html.src).on('change', browserSync.reload);

    // Watch .css files  
    gulp.watch(Config.css.src).on('change', browserSync.reload);

    // Watch .scss files  
    gulp.watch(Config.sass.src).on('change', browserSync.reload);

    // Watch assets files  
    gulp.watch(Config.assets.src).on('change', browserSync.reload);

    // Watch .js files  
    gulp.watch(Config.js.src).on('change', browserSync.reload);

    // Watch image files  
    gulp.watch(Config.img.src).on('change', browserSync.reload);
});


// gulp.task('default', ['serve']); 