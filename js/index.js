/**
 * Created by Administrator on 16-4-29.
 */

/* 焦点图 */
$('.flexslider').flexslider({
    directionNav: false,
    controlNav: true,
    animationSpeed: 600
});

/* 新闻tab切换 */
$(".tabmenu li").mousemove(function(){
    $(".tabmenu li").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".xwdt .item").hide();
    $(".xwdt .item").eq(index).show();
})