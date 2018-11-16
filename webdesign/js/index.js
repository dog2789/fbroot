var n2 = 1;
(function slideAni(){
	$(".ban-img").delay(2000).animate({"left":-(n2*100)+"%"}, 1000, function(){
		if(n2 == 3) {
		   n2 = 0;
		   $(this).css({"left":0});
		}
        n2++;
        slideAni();
	});
})();

$(".tog1").hover(function(){
	$(".tog1 > .gnb1").stop().slideToggle(500);
});


$(".tog2").hover(function(){
	$(".tog2 > .gnb1").stop().slideToggle(500);
});