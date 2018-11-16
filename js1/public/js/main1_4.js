// $("#bt2").click(function(){
//   $(".clear").animate({"left":"-1200px"}, 1000);
// });
// $("#bt3").click(function(){
//   $(".clear").animate({"left":"-2400px"}, 1000);
// });
// $("#bt1").click(function(){
//   $(".clear").animate({"left":"0"}, 1000);
// });

$(".bt").click(function(){
  var tar = $(this).attr("data")+"px";
  $(".banners > ul").stop().animate({"left":tar}, 1000);
});