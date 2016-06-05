$(document).ready(function () {
    /* 代金券展开关闭 */
    $(".xuanze").click(function () {
        //如果是打开状态则关闭
        if($(this).hasClass("open")){
            $(this).removeClass("open").addClass("close");
            $(".djq-list").hide();
        }else{
            $(this).removeClass("close").addClass("open");
            $(".djq-list").show();
        }
    })

    $(".djq-cur").click(function () {
        //如果是打开状态则关闭
        if($(".xuanze").hasClass("open")){
            $(".xuanze").removeClass("open").addClass("close");
            $(".djq-list").hide();
        }else{
            $(".xuanze").removeClass("close").addClass("open");
            $(".djq-list").show();
        }
    })

    /* 代金券选择 */
    $(".djq-list li").click(function () {
        var djqval = $(this).attr("data-value");
        $(".djq-cur").text(djqval+"元代金券");
        $(".djq-val").val(djqval);
        $(".djq-list").find("li").removeClass("cur");
        $(this).addClass("cur");
        $(this).find(".redio").attr("checked",true);
        $(".close-djq").show();

        $(".djq-list").hide();
        $(".xuanze").removeClass("open").addClass("close");
    })

    /* 代金券关闭 */
    $(".close-djq").click(function(){
        $(".djq-list li").find(".redio").attr("checked",false);
        $(".djq-list").hide();
        $(".djq-cur").text("选择代金券");
        $(".xuanze").removeClass("open").addClass("close");
        $(".djq-val").val("");
        $(this).hide();
    })

    //tabs 切换
    $("#pdtab").tabso({
        cntSelect:"#pdcon",
        tabEvent:"click",
        tabStyle:"normal"
    });

    /* 补充资料效果 */
    $(".imgslid").slide({titCell:".hd ul",mainCell:".list ul",autoPage:true,effect:"left",autoPlay:false,vis:2,scroll:1,prevCell:".backward",nextCell:".forward",trigger:"click"});
    $(".fancybox").fancybox({
        "hideOnOverlayClick":true
    });
    $("#j-sliderbox").Slide({
        effect : "scroolLoop",
        autoPlay:false,
        speed : "normal",
        timer : 3000,
        steps:1
    });


})
