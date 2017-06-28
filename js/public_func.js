/**
 * Created by Administrator on 2017/6/17 0017.
 */
/**
 * 当列表中的内容长度超出li的宽度时，使用此方法让内容滚动显示，注意li内要使用p，且p的display为inline-block
 * @param p 包裹文字内容的标签，是一个$对象
 * @param wapper_li 包裹p的li，也是一个$对象。
 */
function scroll_p (p,wapper_li) {
    var a = 0;
    var b;
    if(p[0].offsetWidth > wapper_li[0].offsetWidth){
        setTimeout(f,1000);
    }
    function f() {
        a--;
        b = a+"px";
        p.css("left", b);
        setTimeout(f, 60);
        if (p.css("right") == p.width() + "px") {
            a = 0;
        }
    }
}