$("#expIndustry1").focus(function(){
	if($("#expIndustry1").val()==""||$("#expIndustry1").val()==null){
		var i=1000000000000;
		expIndustry1(i);
	}
});
$("#expIndustry1").change(function(){
	var i=$("#expIndustry1").val();
	$("#expIndustry2").val(0);
	$("#expIndustry2").change();
		if(i==0){
			expIndustry2(0);
		}else{
			expIndustry2(i);
		}
});
function expIndustry1(i){
	var s1=industry[i];
	var output='';
	output+='<option value="'+0+'">'+"-请选择一级行业-"+'</option>';
	for(var i in s1){
		output+='<option value="'+i+'">'+ s1[i] +'</option>';
	}
	$("#expIndustry1").html(output);
}
function expIndustry2(i){
	var s1=industry[i];
	var output='';
	output+='<option value="'+0+'">'+"-请选择二级行业-"+'</option>';
	for(var i in s1){
		output+='<option value="'+i+'">'+ s1[i] +'</option>';
	}
	$("#expIndustry2").html(output);
}
/*--------------------------------------------------------------*/
$("#expfunction1").focus(function(){
	if($("#expfunction1").val()==""||$("#expfunction1").val()==null){
		var i=1000000000000;
		expfunction1(i);
	}
});
$("#expfunction1").change(function(){
	var i=$("#expfunction1").val();
	    $("#expfunction2").val(0);
	    $("#expfunction2").change();
	    $("#expfunction3").val(0);
	    $("#expfunction3").change();
	    $("#expfunction4").val(0);
	    $("#expfunction4").css("display","none");
		if(i==0){
			expfunction2(0);
		}else{
			expfunction2(i);
		}
});
$("#expfunction2").change(function(){
	var i=$("#expfunction2").val();
	$("#expfunction4").val(0);
	$("#expfunction3").val(0);
	$("#expfunction3").change();
		if(i==0){
			expfunction3(0);
		}else{
			expfunction3(i);
		}
});
$("#expfunction3").change(function(){
	var i=$("#expfunction3").val();
	$("#expfunction4").val(0);
		if(i==0){
			expfunction4(0);
		}else{
			expfunction4(i);
		}
});
function expfunction1(i){
	var s1=industry[i];
	var output='';
	output+='<option value="'+0+'">'+"-请选择一级行业-"+'</option>';
	for(var i in s1){
		output+='<option value="'+i+'">'+ s1[i] +'</option>';
	}
	$("#expfunction1").html(output);
}
function expfunction2(i){
	var s1=industry[i];
	var output='';
	output+='<option value="'+0+'">'+"-请选择二级行业-"+'</option>';
	for(var i in s1){
		output+='<option value="'+i+'">'+ s1[i] +'</option>';
	}
	$("#expfunction2").html(output);
}
function expfunction3(i){
	var s1=industry[i];
	var output='';
	output+='<option value="'+0+'">'+"-请选择职能-"+'</option>';
	for(var i in s1){
		output+='<option value="'+i+'">'+ s1[i] +'</option>';
	}
	$("#expfunction3").html(output);
}
function expfunction4(i){
    var s1=industry[i];
    if(s1!=null){
	      var output='';
	      output+='<option value="'+0+'">'+"-请选择职能-"+'</option>';
	      for(var i in s1){
		  output+='<option value="'+i+'">'+ s1[i] +'</option>';
	    }
	   $("#expfunction4").html(output);
	   $("#expfunction4").css('display', 'block');
       }else{
	   $("#expfunction4").css('display', 'none');
    }
}
/*--------------------------------------------------------------*/
    $("#eptJobIndustry1").focus(function(){
    	if($("#eptJobIndustry1").val()==""||$("#eptJobIndustry1").val()==null){
    		var i=1000000000000;
    		eptJobIndustry1(i);
    	}
    	
    });
    $("#eptJobIndustry1").change(function(){
    	var i=$("#eptJobIndustry1").val();
    	$("#eptJobIndustry2").val(0);
    	$("#eptJobIndustry2").change();
    		if(i==0){
    			eptJobIndustry2(0);
    		}else{
    			eptJobIndustry2(i);
    		}
    });
    function eptJobIndustry1(i){
    	var s1=industry[i];
    	var output='';
    	output+='<option value="'+0+'">'+"-请选择一级行业-"+'</option>';
    	for(var i in s1){
    		output+='<option value="'+i+'">'+ s1[i] +'</option>';
    	}
    	$("#eptJobIndustry1").html(output);
    }
    function eptJobIndustry2(i){
    	var s1=industry[i];
    	var output='';
    	output+='<option value="'+0+'">'+"-请选择二级行业-"+'</option>';
    	for(var i in s1){
    		output+='<option value="'+i+'">'+ s1[i] +'</option>';
    	}
    	$("#eptJobIndustry2").html(output);
    }
    /*--------------------------------------------------------------*/
    $("#eptJobfunction1").focus(function(){
    	if($("#eptJobfunction1").val()==""||$("#eptJobfunction1").val()==null){
    		var i=1000000000000;
    		eptJobfunction1(i);
    	}
    });
    $("#eptJobfunction1").change(function(){
    	var i=$("#eptJobfunction1").val();
    	    $("#eptJobfunction2").val(0);
    	    $("#eptJobfunction2").change();
    	    $("#eptJobfunction3").val(0);
    	    $("#eptJobfunction3").change();
    	    $("#eptJobfunction4").val(0);
    	    $("#eptJobfunction4").css("display","none");
    		if(i==0){
    			eptJobfunction2(0);
    		}else{
    			eptJobfunction2(i);
    		}
    });
    $("#eptJobfunction2").change(function(){
    	var i=$("#eptJobfunction2").val();
    	$("#eptJobfunction3").val(0);
    	$("#eptJobfunction4").val(0);
    	$("#eptJobfunction3").change();
    		if(i==0){
    			eptJobfunction3(0);
    		}else{
    			eptJobfunction3(i);
    		}
    });
    $("#eptJobfunction3").change(function(){
    	var i=$("#eptJobfunction3").val();
    	$("#eptJobfunction4").val(0);
    		if(i==0){
    			eptJobfunction4(0);
    		}else{
    			eptJobfunction4(i);
    		}
    });
    function eptJobfunction1(i){
    	var s1=industry[i];
    	var output='';
    	output+='<option value="'+0+'">'+"-请选择一级行业-"+'</option>';
    	for(var i in s1){
    		output+='<option value="'+i+'">'+ s1[i] +'</option>';
    	}
    	$("#eptJobfunction1").html(output);
    }
    function eptJobfunction2(i){
    	var s1=industry[i];
    	var output='';
    	output+='<option value="'+0+'">'+"-请选择二级行业-"+'</option>';
    	for(var i in s1){
    		output+='<option value="'+i+'">'+ s1[i] +'</option>';
    	}
    	$("#eptJobfunction2").html(output);
    }
    function eptJobfunction3(i){
    	var s1=industry[i];
    	var output='';
    	output+='<option value="'+0+'">'+"-请选择职能-"+'</option>';
    	for(var i in s1){
    		output+='<option value="'+i+'">'+ s1[i] +'</option>';
    	}
    	$("#eptJobfunction3").html(output);
    }
    function eptJobfunction4(i){
        var s1=industry[i];
        if(s1!=null){
    	      var output='';
    	      output+='<option value="'+0+'">'+"-请选择职能-"+'</option>';
    	      for(var i in s1){
    		  output+='<option value="'+i+'">'+ s1[i] +'</option>';
    	    }
    	   $("#eptJobfunction4").html(output);
    	   $("#eptJobfunction4").css('display', 'block');
           }else{
    	   $("#eptJobfunction4").css('display', 'none');
        }
    }
