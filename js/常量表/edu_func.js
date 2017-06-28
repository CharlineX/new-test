$(".diplomas").focus(function(){
	edu_getoption();
});

function edu_getoption(){
	var output='';
	output+='<option value="'+0+'">'+"-请选择学历-"+'</option>';
	for(var i in edu_a){
		output+='<option value="'+i+'">'+ edu_a[i] +'</option>';
	}
	$(".diplomas").html(output);
}