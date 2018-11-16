$(window).resize(function(){
	$(".slides").height($(".slide").height());
}).trigger("resize");

/***** Normal *****/
var n1 = 1;
var interval1;
var stn = 0;
var cnt = 6;
$("#slides1").find(".slide").each(function(){
	var name = $(this).data("name");
	var html = '<span class="w3-bar-item w3-button" onclick="paging1(this);">●</span>';
	$(this).parent().next().find(".pager").append(html);
});
interval1 = setInterval(slide1, 3000);
function slide1() {
	$("#slides1").parent().find(".pager").find("span").removeClass("w3-text-red")
	$("#slides1").parent().find(".pager").find("span").eq(n1).addClass("w3-text-red")
	$("#slides1").stop().animate({"left":-(n1*100)+"%"}, 500, function(){
		if(n1 == 5) n1 = -1;
		n1++;
	});
}
function paging1(obj) {
	n1 = $(obj).index();
	clearInterval(interval1);
	slide1();
	interval1 = setInterval(slide1, 3000);
}
$("#slides1").hover(function(){
	clearInterval(interval1);
}, function(){
	interval1 = setInterval(slide1, 3000);
});

/***** 2 *****/
var n2 = 1;
var interval2;
$("#slides2").find(".slide").each(function(){
	var name = $(this).data("name");
	var html = '<span class="w3-bar-item w3-button w3-white" onclick="paging2(this);">'+name+'</span>';
	$(this).parent().next().find(".pager").append(html);
});
interval2 = setInterval(slide2, 3000);
function slide2() {
	$("#slides2").stop().animate({"left":-(n2*100)+"%"}, 1000, function(){
		if(n2 == 5) n2 = -1;
		n2++;
	});
}
function paging2(obj) {
	n2 = $(obj).index();
	clearInterval(interval2);
	slide2();
	interval2 = setInterval(slide2, 3000);
}
$("#slides2").hover(function(){
	clearInterval(interval2);
}, function(){
	interval2 = setInterval(slide2, 3000);
});




/***** Infinite *****/
/*
var n2 = 1;
(function slide2(){
	$("#slides2").delay(2500).animate({"left":-(n2*100)+"%"}, 1000, function(){
		if(n2 == 6) {
			n2 = 0;
			$(this).css({"left":0});
		}
		n2++;
		slide2();
	});
})();
*/
/***** Pingpong *****/
/*
var n3 = 1;
var chk = 1;
(function slide3() {
	$("#slides3").delay(1500).animate({"left":-(n3*100)+"%"}, 700, function(){
		if(n3 == 0) chk = 1;
		else if(n3 == 5) chk = -1;
		n3 += chk;
		slide3();
	});
})();
*/
/***** FadeInOut *****/
/*
var n4 = 0;
var depth = 1;
(function slide4(){
	$("#slides4 .slide").eq(n4).css({"display":"none","z-index":depth++}).delay(2000).fadeIn(1000, function(){
		if(n4 == 5) n4 = -1;
		n4++;
		slide4();
	});
})();
*/
/***** Vertical Infinite *****/
/*
var n5 = 1;
(function slide5(){
	var hei = $("#slides5 .slide").height();
	$("#slides5").delay(2500).animate({"top":-(n5*hei)+"px"}, 1000, function(){
		if(n5 == 6) {
			n5 = 0;
			$(this).css({"top":0});
		}
		n5++;
		slide5();
	});
})();
*/