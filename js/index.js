/**
 * Created by Administrator on 2017/6/16 0016.
 */
$(document).ready(function () {
    var _p = $(".index-select-box-container ul li p");
    var _wapper_li = $(".index-select-box-container ul li");
    //调用滚动方法；
    for( var i = 0;i<_p.length;i++){
        $(_p[i]).bind(scroll_p($(_p[i]),$(_wapper_li[i])));
        // console.log($("#Joblists"));
    }
    // var tab_titles = $(".nav-tabs .tab-title");
    // tab_titles.click(function () {
    //     $(this).bind("click",scroll_p(_p,_wapper_li));
    //     $(this).siblings().unbind("click",scroll_p(_p,_wapper_li));
    //     // console.log($(this)[0]);
    // });
});