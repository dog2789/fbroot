/*
for(초기값; 조건; 증가값) {
    실행문(조건이 참이면 반복)
}
i++ => i = i + 1
i += 5 => i = i + 5
str += "A" => str = str + "A" 
*/
/*
var sum = 0;
for(var i=1, sum=0; i<=10; i++) {
    sum += i;
}
console.log(i, sum);
*/

/***** 구구단 만들기 *****/
$("table").addClass("w3-table w3-centered w3-border w3-bordered"); //addClass -> 클래스를 주기
$("table").css({"max-width":"1200px", "margin":"100px auto"})
$("thead").append('<th>구분</th>')
for(i=2; i<=9; i++) {
    $("thead").append('<th class="w3-center">'+i+'단</th>');
}
var str;
for(i=1; i<=9; i++) {
    str = '<tr>';
    str += '<td class="w3-center">'+i+'</td>'; 
    for(j=2; j<=9; j++) {
     str += '<td class="w3-center">'+j+'x'+i+'='+j*i+'</td>';
    }
    str += '</tr>';
    $("tbody").append(str);
}




