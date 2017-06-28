/**
 * Created by Administrator on 2017/6/12 0012.
 */
var establish_enter_btn = $(".establish_enter_btn");
var apply_join_enter_btn = $(".apply_join_enter_btn");
var modal_reset_btn = $(".modal_reset_btn");
var establish_enter_div = $(".establish_enter");
var apply_join_enter_div = $(".apply_join_enter");
var login_modal = $("#loginModal");
establish_enter_btn.click(function () {
    establish_enter_div.css("display","block");
    apply_join_enter_div.css("display","none");
    login_modal.modal("toggle");
});
apply_join_enter_btn.click(function () {
    establish_enter_div.css("display","none");
    apply_join_enter_div.css("display","block");
    login_modal.modal("toggle");
});
