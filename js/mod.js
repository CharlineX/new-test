var jobFairData={};
var jofaiEnterInfoId=1,
	cuurentPage=1,
	pagesize=2, 
	urlHref=window.location.href,
	guid="RuMJ18Oc0kEv39vVlQjhFKNeodYYDujA";
new YMDselect('year1','month1','day1');
// new YMDselect('year1','month1','day1',2017);
// new YMDselect('year1','month1','day1',2017,2);
new YMDselect('year1','month1','day1',2017,2,10);
function turnMoth(month){
	switch (month) {
	case "一月":
		month = "1";
		break
	case "二月":
		month = "2";
		break
	case "三月":
		month = "3";
		break
	case "四月":
		month = "4";
		break
	case "五月":
		month = "5";
		break
	case "六月":
		month = "6";
		break
	case "七月":
		month = "7";
		break
	case "八月":
		month = "8";
		break
	case "九月":
		month = "9";
		break
	case "十月":
		month = "10";
		break
	case "十一月":
		month = "11";
		break
	case "十二月":
		month = "12";
		break
	case "Jan":
		month = "1";
		break	
	case "Feb":
		month = "2";
		break	
	case "Mar":
		month = "3";
		break
	case "Apr":
		month = "4";
		break
	case "May":
		month = "5";
		break	
	case "Jun":
		month = "6";
		break	
	case "June":
		month = "6";
		break
	case "Jul":
		month = "7";
		break
	case "Aug":
		month = "8";
		break	
	case "Sep":
		month = "9";
		break	
	case "Oct":
		month = "10";
		break
	case "Nov":
		month = "11";
		break	
	case "Dec":
		month = "12";
		break
	default:
	}
	return month;
}
function show(num){
	var $qyid=num.jofaiEnterInfoId;$id=num.jofaiId,$date=num.jofaiDate,$start=num.jofaiStartime,$end=num.jofaiEndtime,$type=num.jofaiType,$statu=num.jofaiStatus,$major=num.jofaiMajors,$person=num.jofaiPersons,$location=num.jofaiLocation;
	$location="undefined" ? " " : $location;
	var a=$date.split(",")[0].trim().split(" ")[0].trim(),
		b=$date.split(",")[0].trim().split(" ")[1].trim(),
		c=$date.split(",")[1].trim(),
		d=c+"-"+this.turnMoth(a)+"-"+b,
		e=$start.split(" ")[3].trim(),
		f=$end.split(" ")[3].trim();
	var type = $type ? "宣讲会" : "供需会",
		statu = $statu ? "申请" : "通过";
	var $el=$(".jofai_list");
		$el.append("<ul class=\"el fair jobfair\">"
					+"<li class=\"t1\"><p>"+d+"</p></li>"
					+"<li class=\"t2\"><p>"+e+"</p></li>"
					+"<li class=\"t3\"><p>"+f+"</p></li>"
					+"<li class=\"t4\"><p>"+type+"</p></li>"
					+"<li class=\"t5\"><p>"+statu+"</p></li>"
					+"<li class=\"t6\"><p>"+$major+"</p></li>"
					+"<li class=\"t7\"><p>"+$person+"</p></li>"
					+"<li class=\"t8\"><p>"+$location+"</p></li>"
					+"<input style='display:none' value="+$id+">"
					+"<span style='display:none' class='a' value="+1+"></span>"
					+"<li class=\"t9\" value="+$id+"><p><a>"+"修改"+"</a></p></li>"
					+"</ul>");
}
// 初始数据
function getJofaiInfo(cuurentPage,pagesize){
$.ajax({
		url : 'http://192.168.1.139:8080/SchoolMatesSystem/jofai/getJobfair',
		async : false,
		data : {
			"jofaiEnterInfoId":jofaiEnterInfoId,
		    "cuurentPage":cuurentPage,
		    "pagesize":pagesize,
		    "guid":guid,
		},
		type : 'post',
		success : function(data) {
			var json= JSON.parse(data);
			if (json.code == 200) {
				var list = json.data;
				// console.log(list);
				$(".jofai_list").empty();
				if (list.length > 0) {
					// $('#proExpPreview_id div:first').empty();
					for (var i = 0; i < list.length; i++) {
						jobFairData = list[i];
						
						show(jobFairData);

					}
				}
				//分页代码
				var PageUtils=json.datapage;
				var pagesLi=PageUtils.currentPage;
				var currentNode=$(".jofaipagination li.active a");
				currentNode.html(pagesLi);
				pagesLi=pagesLi+1;
				currentNode.parent().next("li").children(":first").html(pagesLi);
				pagesLi=pagesLi+1;
				currentNode.parent().next("li").next("li").children(":first").html(pagesLi);
				pagesLi=pagesLi+1;
				currentNode.parent().next("li").next("li").next("li").children(":first").html(pagesLi);
				$("#JofaitotalPage").html(PageUtils.totalPage);
			}else if(json.code==404){
				// $("#proExpPreview_id div:first").empty();
				// createPreOEmptyDiv();
				// $("#proExpPreview_id").css("display","block");
			}
		},
		error : function() {
			alert("访问服务器失败！");
		},
	})
}
//跳转页面分页代码
$(".tojumpjofai").click(function (e) {
	var cuurentPage=$(this).text();//获取当前页码
	var TotalPage=$("#JofaitotalPage").text();//获取总页数
	if(cuurentPage>=TotalPage){
		cuurentPage=TotalPage;
	}
	var pagesize=2;
	getJofaiInfo(cuurentPage,pagesize);
	mod();
	e.preventDefault();
})
//下一页分页代码
$("#jofaiNextPage").click(function (e) {
	var cuurentPage=$(".jofaipagination li.active a").text();
	cuurentPage=cuurentPage*1+1;
	var TotalPage=$("#JofaitotalPage").text();//获取总页数
	if(cuurentPage>TotalPage){
		e.preventDefault();
	}else{
		var pagesize=2;
		getJofaiInfo(cuurentPage,pagesize);
		mod();
		e.preventDefault();
	}
})
//上一页分页代码
$("#jofaiLastPage").click(function (e) {
	var cuurentPage=$(".jofaipagination li.active a").text();
	cuurentPage=cuurentPage-1;
	if(cuurentPage<1){
	}else{
		var pagesize=2;
		getJofaiInfo(cuurentPage,pagesize);
		mod();
	}
	e.preventDefault();
})
//输入跳转几页 分页代码
$("#jumpbuttonjofai").click(function (e) {
	var cuurentPage=$("#jumpPageInputJofai").val();
	if(!/^[0-9]*$/.test(cuurentPage)||cuurentPage==""){
        alert("请输入数字");
    }
	var TotalPage=$("#JofaitotalPage").text();//获取总页数
	if(cuurentPage<1||(cuurentPage-1)>TotalPage){
		alert("请输入1至"+TotalPage+"内的数字");
	}else{
		var pagesize=2;
		getJofaiInfo(cuurentPage,pagesize);
		mod();
	}
	e.preventDefault();
})
$("#jobFair").click(function(){
    var cuurentPage=$(".jofaipagination .active a").text();//获取当前页码
	var pagesize=2;
	getJofaiInfo(cuurentPage,pagesize);
	console.log($(".job_fair .jofai_list .t9 p").text());
	mod();
})
function mod(){
	// showTimer('timer1');
	// showTimer('timer2');
	//修改按钮操作
	var $cl=$(".job_fair .jofai_list .t9 p a"),
		$fair=$(".jobfair");
		console.log($cl.html());	
		for(var i=0;i<$cl.length;i++){
			$cl[i].index=i;
			$cl[i].onclick=function(){
			console.log(1230,i);
			var y=this.index,
				// $first=$(".jobfair_mod .first input"),
				$second=$(".jobfair_mod .second input"),
				$third=$(".jobfair_mod .third input"),
				$fourth=$(".jobfair_mod .fourth select option:selected"),
				$fifth=$(".jobfair_mod .fifth input"),
				$sixth=$(".jobfair_mod .sixth input");
				console.log($fourth.text());
			var inne1=$('.job_fair .jofai_list .t1 p')[y].innerText,
				inne2=$('.job_fair .jofai_list .t2 p')[y].innerText,
				inne3=$('.job_fair .jofai_list .t3 p')[y].innerText,
				inne4=$('.job_fair .jofai_list .t4 p')[y].innerText,
				inne6=$('.job_fair .jofai_list .t6 p')[y].innerText,
				inne7=$('.job_fair .jofai_list .t7 p')[y].innerText;
				console.log(inne4,inne1.split("-")[1]);
				console.log($(".jobfair_mod .first .year option:selected").val())
			$(".jobfair_mod .first .year option:selected").html(inne1.split("-")[0]+"年");
			$(".jobfair_mod .first .month option:selected").html(inne1.split("-")[1]+"月");
			$(".jobfair_mod .first .day option:selected").html(inne1.split("-")[2]+"日");
			// $first.attr("value",inne1);
			$second.attr("value",inne2);
			$third.attr("value",inne3);
			$fourth.html(inne4);
			$fifth.attr("value",inne6);
			$sixth.attr("value",inne7);
		}
	}
}
var yy=$(".jobfair_mod .first .year option:selected").text(),
	mm=$(".jobfair_mod .first .month option:selected").text(),
	dd=$(".jobfair_mod .first .day option:selected").text();

yy=yy.split("",4).join("");
console.log(mm.split("")[2]==undefined);
console.log(dd.split("")[2]);
var u = mm.split("")[2]===undefined ?  1 : 2;
console.log(u);
mm=mm.split("",u).join("");
console.log(mm);
var x=dd.split("")[2]===undefined ?  1 : 2;
dd=dd.split("",x).join("");
console.log(dd);
//修改值传递(保存键)
$(".job_fair .jofaiSaveButton").click(function(e){
		// location.reload(0);//刷新当前页
		var yy=$(".jobfair_mod .first .year option:selected").text();

		console.log(yy);
		jobFairData.jofaiEnterInfoId=1;
		jobFairData.jofaiId=$(".job_fair .jofai_list input").val();
		var year=$(".jobfair_mod .first .year option:selected").val(),
			month=$(".jobfair_mod .first .month option:selected").val(),
			day=$(".jobfair_mod .first .day option:selected").val();
		console.log(year+"/"+month+"/"+day);
		// jobFairData.jofaiDate=("2017/"+month+"/"+day).trim();
		jobFairData.jofaiDate=year+"/"+month+"/"+day;
		//都改成年月日
		jobFairData.jofaiStartime=$(".job_fair .second input").val();
		jobFairData.jofaiEndtime=$(".job_fair .third input").val();
		jobFairData.jofaiMajors=$(".job_fair .fifth input").val();
		jobFairData.jofaiPersons=$(".job_fair .sixth input").val();
		jobFairData.jofaiType=$(".job_fair .fourth .xuan").val()=="宣讲会" ? 1 :0;
		$.ajax({
			url:"http://192.168.1.139:8080/SchoolMatesSystem/jofai/updateJobfair?guid="+guid,
			async : false,
			data:jobFairData,
			type:'post',
			success: function(data){
				var jsonMap = JSON.parse(data);
					if (jsonMap.code == 200) {
						alert("修改成功");
						// getJofaiInfo(cuurentPage,pagesize);
						// show();
					}

			},
			error : function(){
				alert("访问服务器失败！");
			}
		})
		console.log(jobFairData.jofaiDate,jobFairData.jofaiStartime,jobFairData.jofaiEndtime,jobFairData.jofaiMajors,jobFairData.jofaiDate,jobFairData.jofaiPersons)
  e.preventDefault();
})



//创建
var addJobFair={},
	$one=$(".jobfair_add .one input"),
	$two=$(".jobfair_add .two input"),
	$three=$(".jobfair_add .three input"),
	$four=$(".jobfair_add .four input"),
	$five=$(".jobfair_add .five input"),
	$six=$(".jobfair_add .six select"),
	$seven=$(".jobfair_add .seven input"),
	$a=$(".jobfair_add .one .year option:selected").val(),
	$b=$(".jobfair_add .one .month option:selected").val(),
	$c=$(".jobfair_add .one .day option:selected").val();
	console.log($a+"/"+$b+"/"+$c);
$(".jobfair_add .add").click(function(){
	addJobFair.jofaiEnterInfoId=1;
	addJobFair.jofaiDate=$a+"/"+$b+"/"+$c;
	addJobFair.jofaiStartime=$two.val();
	addJobFair.jofaiEndtime=$three.val();
	addJobFair.jofaiMajors=$four.val();
	addJobFair.jofaiPersons=$five.val();
	addJobFair.jofaiType=$six.val()=="宣讲会" ? 1 :0;
	addJobFair.jofairStatus=$seven.val()=="申请" ? 0 : 1;
$.ajax({
	url:"http://192.168.1.139:8080/SchoolMatesSystem/jofai/savejofai?guid="+guid,
	type:"post",
	dataType:"JSON",
	data:addJobFair,
	success: function(data){
				var jsonMap = JSON.parse(data);
					if (jsonMap.code == 200) {
						alert("成功");
			}
	},
	error : function(){
		alert("访问服务器失败！");
	}
})
})	


// function getJofaiInfo(cuurentPage,pagesize){
// 	$.ajax({
// 	url:"http://192.168.1.139:8080/SchoolMatesSystem/jofai/getJobfair",
// 	type:"post",
// 	dataType:"JSON",
// 	data:{
// 		"jofaiEnterInfoId":jofaiEnterInfoId,
// 	    "cuurentPage":cuurentPage,
// 	    "pagesize":pagesize,
// 	    "guid":guid,
// 	}
// }).done(function(data){
// 	console.log(data);
// })
// }
$.ajax({
		url : 'http://192.168.1.139:8080/SchoolMatesSystem/jofai/getJobfair',
		async : false,
		data : {
			"jofaiEnterInfoId":jofaiEnterInfoId,
		    "cuurentPage":cuurentPage,
		    "pagesize":pagesize,
		    "guid":guid,
		},
		type : 'post',
		success : function(data) {
			var json= JSON.parse(data);
			if (json.code == 200) {
				var list = json.data;
				console.log(list);
				$(".jofai_list").empty();
				if (list.length > 0) {
					for (var i = 0; i < list.length; i++) {
						jobFairData = list[i];
						show(jobFairData);
					}
				}
				
			}else if(json.code==404){
				// $("#proExpPreview_id div:first").empty();
				// createPreOEmptyDiv();
				// $("#proExpPreview_id").css("display","block");
			}
		},
		error : function() {
			alert("访问服务器失败！");
		},
	})