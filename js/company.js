var aLi=$("header li a"),
	aCh=$(".choose");
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onclick=function(){
		for(var i=0;i<aLi.length;i++){
			$(aLi[i]).removeClass("active");
			aCh[i].style.display="none";
		}
		$(this).addClass("active");
		aCh[this.index].style.display="block";
	}
}
// console.log(1230);
