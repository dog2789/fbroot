var depth = 10;

$(".bt").click(function(){
  var n = $(this).attr("data");
  $(".banners li").eq(n).hide();
  $(".banners li").eq(n).css({"z-index":depth++});
  $(".banners li").eq(n).fadeIn(500);
});