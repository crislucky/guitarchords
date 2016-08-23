/**
 * Created by Zack on 2016/8/12.
 */
//轮播图
(function(){
    var oDiv=$(".banner");
    var ul=oDiv.find("ul");
    var ul_li=ul.find("li");
    var imagesBox=$(".bannerBox");
    var bannerImages=$(".bannerBox .imagesBox");
    var width=bannerImages.eq(0).width();
    var ul_number=0;
    var timer=0;
    oDiv.mousemove(function(){
        clearInterval(timer);
    });
    oDiv.mouseout(function(){
        auto();
    });
    ul_li.click(function(){
        if($(this).index()>ul_number){
            for(var i=0;i<$(this).index()-ul_number;i++){
                imagesBox.find(".imagesBox:first").appendTo(imagesBox);
            }
            ul_li.removeClass("active");
            ul_number=$(this).index();
            $(ul_li[ul_number]).addClass("active");
        }
        else if($(this).index()<ul_number){
            for(var i=0;i<ul_number-$(this).index();i++){
                imagesBox.find(".imagesBox:last").prependTo(imagesBox);
            }
            ul_li.removeClass("active");
            ul_number=$(this).index();
            $(ul_li[ul_number]).addClass("active");
        }
    });
    function auto(){
        timer=setInterval(function(){
            imagesBox.find(".imagesBox:first").animate({'margin-left':-width+"px"},"slow",function(){
                imagesBox.find(".imagesBox:first").appendTo(imagesBox);
                imagesBox.find(".imagesBox:last").css("margin-left",0);
                ul_number++;
                if(ul_number==bannerImages.length) ul_number=0;
                ul_li.removeClass("active");
                $(ul_li[ul_number]).addClass("active");
            })
        },3000)
    }
    auto();

    var paihang=$(".paihang h3");
    var paihangLink=$(".paihang h3 a");
    paihangLink.click(function(){
        paihang.removeClass("active");
        $(this).parents().addClass("active");
    })
})();

