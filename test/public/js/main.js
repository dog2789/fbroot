function section() {
    var html = '';
    var image = [];
    for(var i=1; i<9; i++) {
        image[i] = '<li><img src="../img/p'+i+'.jpg" class="img"></li>';
    }
    
    for(i=0; i<image.length; i++) {
        html = image[i]
        $("#img").append(html);
     }
    }
    section(); 

    function footer() {
        var html = '';
        var foot = []; 
            foot[1] = '<span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>';
            foot[2] = '<span><i class="fa fa-instagram" aria-hidden="true"></i></span>';
            foot[3] = '<span><i class="fa fa-snapchat-square" aria-hidden="true"></i></span>';
            foot[4] = '<span><i class="fa fa-pinterest" aria-hidden="true"></i></span>';
            foot[5] = '<span><i class="fa fa-twitter" aria-hidden="true"></i></span>';
            foot[6] = '<span><i class="fa fa-linkedin" aria-hidden="true"></i></span>';
        for(i=0; i<foot.length; i++) {
            html = foot[i]
            $("#foot").append(html);
        }
    }
    footer();
    
   $(window).scroll(function(){
    var gap = $("html, body").scrollTop();
    if(gap > 150) {
        if(!$(".top-nav").hasClass("dn_bg")) {
            $(".top-nav").css({"top":"-60px"}).addClass("dn_bg");
            $(".top-nav").stop().animate({"top":"0px"}, 500);
        }
    }
    else {
        $(".top-nav").css({"top":"-60px"}).removeClass("dn_bg");
        $(".top-nav").stop().animate({"top":"0px"}, 500);
    }
   });
    

   $(".fa-bars").click(function(){
	$(".navs_sub").stop().slideToggle(100);
});
    