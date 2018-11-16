$(".gnb1").hover(function(){
    $(".side1").stop().slideToggle(500);
});

$(".gnb2").hover(function(){
    $(".side2").stop().slideToggle(500);
});

$(".gnb3").hover(function(){
    $(".side3").stop().slideToggle(500);
});

$(".gnb4").hover(function(){
    $(".side4").stop().slideToggle(500);
});

var n = 1;
(function slideAni(){
	$(".banner").delay(2000).animate({"left":-(n*100)+"%"}, 1000, function(){
		if(n == 4) {
		   n = 0;
		   $(this).css({"left":0});
		}
        n++;
        slideAni();
	});
})();










