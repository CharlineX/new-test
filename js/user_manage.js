/**
 * Created by Administrator on 2017/6/19 0019.
 */
$(document).ready(function () {
   // 需要的信息有
    // 姓名：enterName
   // 职位：enterPosition
   // 性别：enterGenger
   // 用户类型：enterType 1：成员 2：管理员 3：未审核 4：已删除

    //第一步，拿到三个列表的盒子
    //未审批用户
    var un_exam_user_child = $("#un_exam_user_child");
    var examing_user_child = $("#examing_user_child");
    var enter_user_child = $("#enter_user_child");
    var enter_user = {
        enterName:"",
        enterPosition:"",

    }
   $.ajax({
       type:"post",
       dataType:"JSON",
       url:"http://192.168.1.139:8080/SchoolMatesSystem/enteruser/getEnteruserEnter",
       data:{"enterEnterInfoId":1,"enterType":1,"guid":"RuMJ18Oc0kEv39vVlQjhFKNeodYYDujA"},
       success:function (data) {
           if(data.code!=200){
               console.log(data.code+"页面错误");
               console.log(data.message);
           }
           else{
               console.log(data.data);
           }
       },
       error:function () {
           alert("连接服务器失败！");
       }
   })
});
// {"}