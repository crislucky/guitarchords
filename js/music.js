/**
 * Created by Zack on 2016/8/13.
 */
(function(){
    function clickStyle(selector){
        selector.click(function(){
            selector.removeClass("active");
            $(this).addClass("active");
        });
    }
    clickStyle($(".music .character a"));
    clickStyle($(".music .country a"));
})();