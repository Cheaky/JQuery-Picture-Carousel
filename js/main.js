/**
 * Created by Eloosen on 2016/11/23.
 */

$(document).ready(function () {

    //$(".slideShow").slideShow();

    $("#slide1").slideShow();
    $("#slide2").slideShow({
        "autoPlay": false
    });

    $("#slide3").slideShow({
        "autoPlayTime": 1000
    });

    $("#slide4").slideShow({
        "autoPlay": false,
        "evenType": "mouseover"
    });




    /*
    var slideShow = $(".slideShow"),
        ul = slideShow.find("ul"),
        nav = slideShow.find(".nav span"),
        oneWidth = ul.find("li").eq(0).width(),
        timer = null,    //定时器
        iNow = 0;

    slideShow.hover(function () {
        clearInterval(timer);    //鼠标移入的时候，清除定时器，不再自动播放
    },autoPlay);                 //auto，鼠标移开的时候，绑定定时器，恢复自动播放

    nav.on("click",function () {
        var me = $(this),
            index = me.index();
        iNow = index;

        ul.animate({
            "left": -oneWidth * iNow
        })

        nav.removeClass("active");
        me.addClass("active");
    });

    autoPlay();   //初始化时，自动播放

    //绑定定时器，自动播放
    function autoPlay() {
        timer = setInterval(function () {
            iNow++;
            if(iNow > nav.length-1){
                iNow = 0;
            }
            nav.eq(iNow).trigger("click");
        },2000);    //时间间隔：2s
    }
    */

});