// console.log($(".pages").eq(2).attr("id"));

/*
eq(여러개 순서에 맞춰서)
attr(태그를 가져오는것)

for(var i=0; i<$(".pages").length; i++) {
	hei[i] = $(".pages").eq(i).height();
}
$(".pages").each(function(i){
	hei[i] = $(this).height();
});
for(var i=0, sum=0; i<$(".pages").length; i++) {
		sum += hei[i];
		if(sum > top){
		console.log(i);
	  }
	  hei[i] = $(this).height(); //각 페이지의 높이를 변수에 넣는다.
*/
var hei = [];
var offTop = [];
var scTop = 0;
var now = 0;

$(window).scroll(function(){
	scTop = $(this).scrollTop(); //현재문서의 스크롤 된 값을 찾는다.
	$(".pages").each(function(i){
		offTop[i] = $(this).offset().top; // 부모로부터 떨어진 거리(top)
		if(scTop >= offTop[i]) 	now = i; //{이 안에 한줄만 들어가면 생략가능}
	});
	console.log(now);
});

/*
1. var <- 변수를 선언할때
2. function <- 함수를 선언할때
3. 대입문
  var a = 10; //a 값이 10
  var b - a;  //b 값이 10
4. 비교문
  a == b
5. 조건문
  var a = 10;
  var b = 20;
  if (a == b){
	  참
  }
  else (a == b){
	  거짓
  }

  //다중조건문
  if(조건1){
	조건1이 참이면 실행
  }
  else if(조건2) {
	조건2가 참이면 실행
  }
  else if(조건3) {
	조건3이 참이면 실행
  }
  else{
	그 외에 실행
  }
6. 반복문
  for(초기값; 비교문; 증가값) {
	  반복문....
  }
  //1~10까지 더하는 예제
  for(var i=1; sum=0; i<=100; i++) {
	  sum += i
  }
  console.log(sum); //5050
*/



/*
$(".pages").each(function(i){
	hei[i] = $(this).height();
});
*/



