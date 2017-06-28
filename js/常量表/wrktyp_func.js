$("#jobType0").focus(function(){
	wrktyp_getoption();
});
$("#expJobType").focus(function(){
	wrktyp_getoption();
});
function wrktyp_getoption(){
	var output='';
	output+='<option value="'+0+'">'+"-请选择工作类型-"+'</option>';
	for(var i in Wrktyp_a){
		output+='<option value="'+i+'">'+ Wrktyp_a[i] +'</option>';
	}
	$("#jobType0").html(output);
	$("#expJobType").html(output);
}