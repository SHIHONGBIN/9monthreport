// 第一页 首页 动画
function AddClassFn0() {
    this.initTime = 0;
    this.divNum = 0;
}
AddClassFn0.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('#page' + this.divNum + ' .reprotLogo img').addClass('fadeInLeft')
    }
    if (initTime == 120) {
        $('#page' + this.divNum + ' .reprotTitle img').addClass('fadeInUp')
    }
    if (initTime == 180) {
        $('#page' + this.divNum + ' .reportSubTitle img').addClass('fadeInUp')
    }
    if (initTime == 190) {
        $('#page' + this.divNum + ' .r-btn img').addClass('fadeInRight')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
}
var a1 = new AddClassFn0();
a1.initFirstPage();
// 第二页 slide 动画
function AddClassFn1() {
    this.initTime = 0;
}
AddClassFn1.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 10) {
        $('#page1 .slidebox1').addClass('fadeIn')
    }
    // if (initTime == 80) {
    //     $('#page1 .keyboard img').addClass('fadeInLeft')
    // }
    // if (initTime == 90) {
    //     $('#page1 .coffee img').addClass('fadeInUp')
    // }
    // if (initTime == 100) {
    //     $('#page1 .jsq img').addClass('fadeInRight')
    // }
    if (initTime == 20) {
        $('.slide1 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide1 .text').addClass('fadeInUp')
    }
    if (initTime == 40) {
        $('.slide1 .plimg1,.slide1 .plimg5').addClass('fadeInUp')
    }
    if (initTime == 50) {
        $('.slide1 .plimg2,.slide1 .plimg6').addClass('fadeInUp')
    }
    if (initTime == 60) {
        $('.slide1 .plimg3,.slide1 .plimg7').addClass('fadeInUp')
    }
    if (initTime == 70) {
        $('.slide1 .plimg4,.slide1 .plimg8').addClass('fadeInUp')
    }
    //nav按钮弹出
    if (initTime == 35) {
        $('#page1 .text li').eq(0).addClass('bounceInUp');
    }
    if (initTime == 40) {
        $('#page1 .text li').eq(1).addClass('bounceInUp');
    }
    if (initTime == 45) {
        $('#page1 .text li').eq(2).addClass('bounceInUp');
    }
    if (initTime == 50) {
        $('#page1 .text li').eq(3).addClass('bounceInUp');
    }
    if (initTime == 55) {
        $('#page1 .text li').eq(4).addClass('bounceInUp');
    }
    if (initTime == 60) {
        $('#page1 .text li').eq(5).addClass('bounceInUp');
    }
    if (initTime == 65) {
        $('#page1 .text li').eq(6).addClass('bounceInUp');
    }
    if (initTime == 70) {
        $('#page1 .text li').eq(7).addClass('bounceInUp');
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
}

// 第三页动画
function AddClassFn2() {
    this.initTime = 0;
}
AddClassFn2.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('.slide2 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide2 .l-flex').addClass('fadeIn')
    }
    if (initTime == 40) {
        $('.slide2 .r-flex').addClass('fadeIn')
    }
    if (initTime == 50) {
        $('.slide2 .plimg1,.slide2 .plimg5').addClass('fadeInUp')
    }
    if (initTime == 60) {
        $('.slide2 .plimg2,.slide2 .plimg6').addClass('fadeInUp')
    }
    if (initTime == 70) {
        $('.slide2 .plimg3,.slide2 .plimg7').addClass('fadeInUp')
    }
    if (initTime == 80) {
        $('.slide2 .plimg4,.slide2 .plimg8').addClass('fadeInUp')
    }
    if (initTime == 90) {
        $('.slide2 .data-p').addClass('fadeInUp')
    }

    window.requestAnimationFrame(this.initFirstPage.bind(this))
}

// 第四页动画
function AddClassFn3() {
    this.initTime = 0;
}
AddClassFn3.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('.slide3 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide3 .l-flex').addClass('fadeIn')
    }
    if (initTime == 40) {
        $('.slide3 .r-flex').addClass('fadeIn')
    }
    if (initTime == 50) {
        $('.slide3 .plimg1,.slide3 .plimg5').addClass('fadeInUp')
    }
    if (initTime == 60) {
        $('.slide3 .plimg2,.slide3 .plimg6').addClass('fadeInUp')
    }
    if (initTime == 70) {
        $('.slide3 .plimg3,.slide3 .plimg7').addClass('fadeInUp')
    }
    if (initTime == 80) {
        $('.slide3 .plimg4,.slide3 .plimg8').addClass('fadeInUp')
    }
    if (initTime == 90) {
        $('.slide3 .data-p').addClass('fadeInUp')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
}
// 第五页动画
function AddClassFn4() {
    this.initTime = 0;
}
AddClassFn4.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('.slide4 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide4 .plimg1,.slide4 .plimg3').addClass('fadeInUp')
    }
    if (initTime == 40) {
        $('.slide4 .plimg2,.slide4 .plimg4').addClass('fadeInUp')
    }
    if (initTime == 50) {
        $('.slide4 .data-p').addClass('fadeInUp')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
}

// 第六页动画
function AddClassFn5() {
    this.initTime = 0;
}
AddClassFn5.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('.slide5 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide5 .plimg1').addClass('fadeInUp')
    }
    if (initTime == 40) {
        $('.slide5 .plimg5').addClass('fadeInUp')
    }
    if (initTime == 50) {
        $('.slide5 .plimg6').addClass('fadeInUp')
    }
    if (initTime == 60) {
        $('.slide5 .plimg7').addClass('fadeInUp')
    }
    if (initTime == 70) {
        $('.slide5 .data-p').addClass('fadeInUp')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
}

// 第七页动画
function AddClassFn6() {
    this.initTime = 0;
}
AddClassFn6.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('.slide6 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide6 .plimg1,.slide6 .plimg2').addClass('fadeInUp')
    }
    if (initTime == 40) {
        $('.slide6 .plimg3,.slide6 .plimg3').addClass('fadeInUp')
    }
    if (initTime == 50) {
        $('.slide6 .plimg4,.slide6 .plimg4').addClass('fadeInUp')
    }
    if (initTime == 60) {
        $('.slide6 .plimg6,.slide6 .plimg5').addClass('fadeInUp')
    }
    if (initTime == 70) {
        $('.slide6 .data-p').addClass('fadeInUp')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
}

// 第八页动画
function AddClassFn7() {
    this.initTime = 0;
}
AddClassFn7.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('.slide7 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide7 .plimg1').addClass('fadeInUp')
    }
    if (initTime == 40) {
        $('.slide7 .plimg5').addClass('fadeInUp')
    }
    if (initTime == 50) {
        $('.slide7 .plimg2').addClass('fadeInUp')
    }
    if (initTime == 60) {
        $('.slide7 .plimg3').addClass('fadeInUp')
    }
    if (initTime == 70) {
        $('.slide7 .plimg4').addClass('fadeInUp')
    }
    if (initTime == 80) {
        $('.slide7 .data-p').addClass('fadeInUp')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
}
// 第八页动画
function AddClassFn8() {
    this.initTime = 0;
}
AddClassFn8.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 20) {
        $('.slide8 .title').addClass('fadeInUp')
    }
    if (initTime == 30) {
        $('.slide8 .plimg1').addClass('fadeInUp')
    }
    if (initTime == 40) {
        $('.slide8 .plimg2').addClass('fadeInUp')
    }
    if (initTime == 50) {
        $('.slide8 .plimg3').addClass('fadeInUp')
    }
    if (initTime == 60) {
        $('.slide8 .plimg4').addClass('fadeInUp')
    }
    if (initTime == 70) {
        $('.slide8 .plimg5').addClass('fadeInUp')
    }
    if (initTime == 80) {
        $('.slide8 .plimg6').addClass('fadeInUp')
    }
    if (initTime == 90) {
        $('.slide8 .data-p').addClass('fadeInUp')
    }
    if (initTime == 80) {
        $('#page1 .keyboard img').addClass('fadeInLeft')
    }
    if (initTime == 90) {
        $('#page1 .coffee img').addClass('fadeInUp')
    }
    if (initTime == 100) {
        $('#page1 .jsq img').addClass('fadeInRight')
    }
    if (initTime == 35) {
        $('#page1 .text li').eq(0).addClass('bounceInUp');
    }
    if (initTime == 40) {
        $('#page1 .text li').eq(1).addClass('bounceInUp');
    }
    if (initTime == 45) {
        $('#page1 .text li').eq(2).addClass('bounceInUp');
    }
    if (initTime == 50) {
        $('#page1 .text li').eq(3).addClass('bounceInUp');
    }
    if (initTime == 55) {
        $('#page1 .text li').eq(4).addClass('bounceInUp');
    }
    if (initTime == 60) {
        $('#page1 .text li').eq(5).addClass('bounceInUp');
    }
    if (initTime == 65) {
        $('#page1 .text li').eq(6).addClass('bounceInUp');
    }
    if (initTime == 70) {
        $('#page1 .text li').eq(7).addClass('bounceInUp');
    }

    //nav按钮弹出

    window.requestAnimationFrame(this.initFirstPage.bind(this))
};
//最后一页（主页）
// 第一页 首页 动画
function AddClassFn11() {
    this.initTime = 0;
    this.divNum = 2;
}
AddClassFn11.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 80) {
        $('#page' + this.divNum + ' .keyboard img').addClass('fadeInLeft');
        $('#page' + this.divNum + ' .reprotLogo img').addClass('fadeInLeft')
    }
    if (initTime == 90) {
        $('#page' + this.divNum + ' .coffee img').addClass('fadeInUp');
        $('#page' + this.divNum + ' .f-text img').addClass('fadeInUp')
    }
    if (initTime == 100) {
        $('#page' + this.divNum + ' .pen img').addClass('fadeInUp');
        $('#page' + this.divNum + ' .wxcode img').addClass('fadeInUp')
    }
    if (initTime == 110) {
        $('#page' + this.divNum + ' .jsq img').addClass('fadeInRight')
    }
    if (initTime == 70) {
        $('#page' + this.divNum + ' .body-con img').addClass('fadeIn')
    }
    if (initTime == 90) {
        $('#page' + this.divNum + ' .l-btn img').addClass('fadeIn')
    }
    if (initTime == 120) {
        $('#gotoIndex').addClass('fadeIn')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
};
//键盘等元素 移除效果
function SmallIconFadeOut(n) {
    this.initTime = 0;
    this.divNum = n;
}
SmallIconFadeOut.prototype.initFirstPage = function () {
    this.initTime++;
    var initTime = this.initTime;
    if (initTime == 10) {
        $('#page' + this.divNum + ' .keyboard img').addClass('fadeOutLeft')
    }
    if (initTime == 25) {
        $('#page' + this.divNum + ' .coffee img').addClass('fadeOutDown')
    }
    if (initTime == 30) {
        $('#page' + this.divNum + ' .pen img').addClass('fadeOutDown')
    }
    if (initTime == 45) {
        $('#page' + this.divNum + ' .jsq img').addClass('fadeOutRight')
    }
    window.requestAnimationFrame(this.initFirstPage.bind(this))
};


