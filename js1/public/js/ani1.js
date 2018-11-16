/*  
(function bannerInit(){
    var cnt = $(".ban").length;
    var pager = [];
    $(".ban").each(function(i){
        var name = $(this).data("name");
        var link = $(this).data("link");
        pager[i] = '<a herf="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
    });
    pager.forEach(function(item){
        $(".pager").append(item);
    });
}); 

(function (){
    
})(); */



/* (function banFadeInOut() {
    $(".ban").each(function(){
        var html = '<a herf="'+$(this).data('link')+'" class="w3-bar-item w3-button">'+$(this).data('name')+'</a>';
        $(".pager").append(html);
    });
    $(".pager > a").click(function(){
        clearInterval(interval);
        stn = $(this).index();
        banAni();
        interval = setInterval(banAni, 2000);
    });
    var cnt = $(".ban").length;
    var dep = 1;
    var stn = 0;
    var interval = setInterval(banAni, 2000);
    function banAni() {
        $(".ban").eq(stn).css({"z-index":dep++, "opacity":0});
        $(".ban").eq(stn).stop().animate({"opacity":1}, 1000);
        $(".pager > a").removeClass("w3-red");
        $(".pager > a").eq(stn).addClass("w3-red");
        if(stn == cnt-1) stn = 0;//
        else stn++;
    }
    $(".ban_wrap").hover(function(){
        clearInterval(interval);
    }, function(){
        interval = setInterval(banAni, 2000);
    });
})(); */


(function banFadeInOut(){
    $(".ban").each(function(){
        var html = '<a href="'+$(this).data('link')+'" class="w3-bar-item w3-button">'+$(this).data('name')+'</a>';
        $(".pager").append(html);
    });
    $(".pager > a").click(function(){
        clearInterval(interval);
        stn = $(this).index();
        banAni();
        interval = setInterval(banAni, 2000);
    });
    var cnt = $(".ban").length;
    var dep = 1;
    var stn = 0;
    var interval = setInterval(banAni, 2000);
    function banAni(){
        $(".ban").eq(stn).css({"z-index":dep++, "opacity":0});
        $(".ban").eq(stn).stop().animate({"opacity":1}, 1000);
        $(".pager > a").removeClass("w3-red");
        $(".pager > a").eq(stn).addClass("w3-red");
        if(stn == cnt-1) stn = 0;
        else stn++
    }
    $(".ban_wrap").hover(function(){
        clearInterval(interval);
    }, function(){
        interval = setInterval(banAni, 2000);
    });
})();










