var oLi=$(".company_navs_wrap li a"),
	oCh=$(".itemCont");
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