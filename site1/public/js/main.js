/* 
function pomulsun(x){
    return x * x;
}

alert(pomulsun(4)); */
var n = 0;
function swap(){
    $("#mains > li").css("z-index", 9);
    $("#mains > li").eq(n).css("z-index", 10);
    if(n == 2) n = 0;
    else n++;
    /*     if(n == 0){
        n = 1;
    }
    else if(n == 1){
        n = 2;
    }
    else if(n == 2){
        n = 0;
    } */
}

setInterval(swap, 2000);

$("#navs > :last-child").hover(function(){
    // $(".more_cont").show();
    $(".more_cont").stop().slideDown(200);
}, function(){
    // $(".more_cont").hide();
    $(".more_cont").stop().slideUp(200);
});



