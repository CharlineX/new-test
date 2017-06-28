/**
 * Created by Administrator on 2017/6/5 0005.
 */
//职位列表和职位详情页切换显示
var job_list_ul_modify = $(".job_list_ul_modify");
var job_preview = $(".job_preview");
var job_detail = $(".job_detail");
job_list_ul_modify.click(function () {
    job_preview.css("display","none");
    job_detail.css("display","block");
})
