$(".searchs .hand").click(function(){
	$(".search_catelist").stop().slideToggle(100);
});

$(".menu > ul > li").hover(function(){
	$(".menu_modal").stop().fadeOut(0);
	$(this).children(".menu_modal").stop().fadeIn(100);
}, function(){
	$(".menu_modal").stop().fadeOut(0);
});

/***** 카테고리 Modal0 *****/



$.ajax({
	url:"../json/cate0.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function(data){
	var html = '';	
	for(i=0; i<data.result.length; i++) {
	html = '<ul>'+data.result[i][0]+data.result[i][1]+'</ul>'
	$("#modal0").append(html);
 }
	},
	error: function(xhr, status, error){
	console.log(xhr, status, error);
}
});

function goUrl(n) {
	location.href = sites[n][2];
}
/*
function modalMake0() {
var html = '';
var sites = [];
for(var i=0; i<10; i++) {
	sites[i] = [];
	sites[i][2] = '#';
	sites[i][0] = '<li><img src="../img/main/site'+i+'.jpg" class="img" onclick="goUrl('+i+');"></li>';
	
}
sites[0][1] = '<li>Demo Default</li>';
sites[1][1] = '<li>Demo Decor</li>';
sites[2][1] = '<li>Demo Retail</li>';
sites[3][1] = '<li>Demo Books</li>';
sites[4][1] = '<li>Demo Fashion Color</li>';
sites[5][1] = '<li>Demo Lingerie</li>';
sites[6][1] = '<li>Demo Handmade</li>';
sites[7][1] = '<li>Demo Fashion</div>';
sites[8][1] = '<li>Demo Fashion Flat</li>';
sites[9][1] = '<li>Demo Electronics</li>';

for(i=0; i<sites.length; i++) {
	html = '<ul>'+sites[i][0]+sites[i][1]+'</ul>'
	$("#modal0").append(html);
 }
console.log(sites);
console.log(JSON.stringify(sites));
}
modalMake0(); 
*/


/***** 카테고리 Modal1 *****/

$.ajax({
	url:"../json/cate1.json",
	type: "get",
	dataType: "json",
	data: {},
	success: function(data){
		var cnt = data.result.length;
		var style = 'style="width:'+(100/cnt+'%')+';"';
		var html;
		for(var i=0; i<cnt; i++){
			// console.log(data.result[i].main.title);
			html = '<ul '+style+'>';
			html += '<li class="title">';
			html += '<a href="'+data.result[i].main.link+'">';
			html += data.result[i].main.title;
			html += '</a>';
			html += '<div class="tooltip" style="background:'+data.result[i].main.color+'">';
			html += data.result[i].main.icon;
			html += '<div style="background:'+data.result[i].main.color+'"></div>';
			html += '</div>';
			html += '</li>';
			for(var j=0; j<data.result[i].sub.length; j++) {
				// console.log(data.result[i].sub[j].title);
				html += '<li class="cont">';
				html += '<a href="'+data.result[i].sub[j].link+'">';
				html += data.result[i].sub[j].title;
				html += '</a>';
				html += '<div class="tooltip" style="background:'+data.result[i].sub[j].color+'">';
				html += data.result[i].sub[j].icon;
				html += '<div style="background:'+data.result[i].sub[j].color+'"></div>';
				html += '</div>';
				html += '</li>';
			}
			html += '</ul>';
			$("#modal1").append(html);
		}
	},
	error: function(xhr, status, error){
		console.log(xhr, status, error);
	}
});

/***** 카테고리 2 *****/
$.ajax({
	url:"../json/cate2.json",
	type:"get",
	datatype:"json",
	success: function(data) {
		var html = "";
		var blogs = data.result.blog;
		var posts = data.result.recent;
		//Blog 생성
		for(var i=0; i<blogs.length; i++) {
			html = '<ul>';
			html += '<li class="title">';
			html += '<a href="'+blogs[i].main.link+'">'+blogs[i].main.title+'</a>';
			if(blogs[i].main.icon != ""){
			html += '<div class="tooltip" style="background:'+blogs[i].main.color+'">';
			html += blogs[i].main.icon;
			html += '<div style="background:'+blogs[i].main.color+'"></div>';
		  }
			html += '</li>';
			for(var j=0; j<blogs[i].sub.length; j++) {
				html += '<li class="sub">';
				html += '<a href="'+blogs[i].sub[j].link+'">'+blogs[i].sub[j].title+'</a>';
				if(blogs[i].sub[j].icon != ""){
				html += '<div class="tooltip" style="background:'+blogs[i].sub[j].color+'">';
				html += blogs[i].sub[j].icon;
				html += '<div style="background:'+blogs[i].sub[j].color+'"></div>';
			  }
				html += '</li>';
			}
			html += '</ul>';
			$("#modal2 > .blogs").append(html);
		}
		//Recent 생성
		for(var i=0; i<posts.length; i++) {
			html = '<ul>';
			html += '<li class="post clear" onclick="goPost(\''+posts[i].link+'\');">';
      html += '<img src="'+posts[i].img+'" class="img post_img hover" alt="img">';
      html += '<div>';
      html += '<div class="post_title">'+posts[i].title+'</div>';
      html += '<span class="post_date">'+posts[i].date+'</span>';
      html += '<span class="post_cnt">'+posts[i].comment+'</span>';
      html += '<span class="post_comment">Comment</span>';
      html += '</div>';
      html += '</li>';
			html += '</ul>';
			$("#modal2 > .recents").append(html);
		}
	},
	error: function(xhr, status, error) {
		alert("통신이 원할하지 않습니다.\n잠시후 다시 시도해 주세요.")
		console.log(xhr, status, error);
	}
});


/***** 카테고리 3 *****/
$.ajax({
	url:"../json/cate3.json",
	type:"get",
	datatype:"json",
	success: function(data) {
		var page = data.result.pages;
		var html;
			for(var i=0; i<page.length; i++) {
				html = '<ul>';
				html += '<li class="title">';
				html += '<a href="'+page[i].main.link+'">'+page[i].main.title+'</a>';
				if(page[i].main.icon != ""){
				html += '<div class="tooltip" style="background:'+page[i].main.color+'">';
				html += page[i].main.icon;
				html += '<div style="background:'+page[i].main.color+'"></div>';
				}
				html += '</li>';
				for(var j=0; j<page[i].sub.length; j++) {
					html += '<li class="sub">';
					html += '<a href="'+page[i].sub[j].link+'">'+page[i].sub[j].title+'</a>';
					if(page[i].sub[j].icon != ""){
					html += '<div class="tooltip" style="background:'+page[i].sub[j].color+'">';
					html += page[i].sub[j].icon;
					html += '<div style="background:'+page[i].sub[j].color+'"></div>';
					}
					html += '</li>';
				}
				html += '</ul>';
				$("#modal3").append(html);
			}
		},
	error: function(xhr, status, error){
		alert("통신이 원할하지 않습니다.\n잠시후 다시 시도해 주세요.")
		console.log(xhr, status, error);
		}	
 });




/*

                  <ul>
                    <li class="title"><a href="#">BLOG TYPES</a></li>
                    <li class="sub"><a href="#">Alternative</a></li>
                  </ul>
                  <ul>
                    <li class="title"><a href="#">BLOG TYPES</a></li>
                    <li class="sub"><a href="#">Alternative</a></li>
                  </ul>

                
                  <ul>
                    <li class="post clear" onclick="goPost('#');">
                      <img src="../img/main/blog-11-75x65.jpg" class="img post_img" alt="img">
                      <div>
                        <div class="post_title">A companion for extra sleeping</div>
                        <span class="post_date">july 23, 2016</span>
                        <span class="post_cnt">1</span>
                        <span class="post_comment">Comment</span>
                      </div>
                    </li>
                  </ul>
                </div>
*/


/*
var cates2 = [{
	main: {
		title:"BLOG TYPES",
		icon: "",
		link: "#"
	},
	sub:[
		{title:"Alternative", icon:"", link:"#"},
	  {title:"Small images", icon:"", link:"#"},
	  {title:"Blog chess", icon:"", link:"#"},
	  {title:"Masonry grid", icon:"FEATURE", color:"red", link:"#"},
	  {title:"Infinit scrolling", icon:"", link:"#"},
	  {title:"With background", icon:"", link:"#"},
	  {title:"Blog flat", icon:"", link:"#"},
	  {title:"Default flat", icon:"", link:"#"},
	  {title:"Blog mask", icon:"NEW",color:"orange", link:"#"}]
},{
	main: {
		title:"SINGLE POSTS",
		icon:"EXAMPLES",
		color:"green",
		link:"#"
	},
	sub:[
		{title:"Post example #1", icon:"", link:"#"},
	  {title:"Post example #2", icon:"", link:"#"},
	  {title:"Post example #3", icon:"", link:"#"},
	  {title:"Post example #4", icon:"", link:"#"},
	  {title:"Post example #5", icon:"", link:"#"},
	  {title:"Post example #6", icon:"", link:"#"},
	  {title:"Post example #7", icon:"", link:"#"},
	  {title:"Post example #8", icon:"", link:"#"},
		{title:"Post example #9", icon:"", link:"#"}]
}];
console.log(cates2);
console.log(JSON.stringify(cates2));

function modalMake2() {
	var html = '';
	var wid = 40/cates2.length + "%";
	for(var i=0; i<cates2.length; i++) {
		html ='<ul style="width:'+wid+'">';
		html +='<li class="title"><a href="'+cates2[i].main.link+'">'+cates2[i].main.title+'</a>';
		if(cates2[i].main.icon != "") {
			html += '<div class="tooltip" style="background:'+cates2[i].main.color+'">';
			html += cates2[i].main.icon;
			html += '<div style="background:'+cates2[i].main.color+'"></div>'
			html += '</div>';
		}
		html +='</li>';
		for(var j=0; j<cates2[i].sub.length; j++){
			html += '<li class="cont">';
			html += '<a href="'+cates2[i].sub[j].link+'">'+cates2[i].sub[j].title+'</a>';
			if(cates2[i].sub[j].icon != "") {
				html += '<div class="tooltip" style="background:'+cates2[i].sub[j].color+'">';
				html += cates2[i].sub[j].icon;
				html += '<div style="background:'+cates2[i].sub[j].color+'"></div>';
				html += '</div>';
			}
			html += '</li>';
		} 
		html+='</ul>';
		$("#modal2").append(html);
	}
	$("#modal2 .tooltip")
}
modalMake2();
*/


/*

	console.log(cates);
	console.log(JSON.stringify(cates));

function modalMake1() {
	var html = '';
	var wid = 100/cates.length + "%";
	for(var i=0; i<cates.length; i++) {
		html ='<ul style="width:'+wid+'">';
		html +='<li class="title"><a href="'+cates[i].main.link+'">'+cates[i].main.title+'</a>';
		if(cates[i].main.icon != "") {
			html += '<div class="tooltip" style="background:'+cates[i].main.color+'">';
			html += cates[i].main.icon;
			html += '<div style="background:'+cates[i].main.color+'"></div>'
			html += '</div>';
		}
		html +='</li>';
		for(var j=0; j<cates[i].sub.length; j++){
			html += '<li class="cont">';
			html += '<a href="'+cates[i].sub[j].link+'">'+cates[i].sub[j].title+'</a>';
			if(cates[i].sub[j].icon != "") {
				html += '<div class="tooltip" style="background:'+cates[i].sub[j].color+'">';
				html += cates[i].sub[j].icon;
				html += '<div style="background:'+cates[i].sub[j].color+'"></div>';
				html += '</div>';
			}
			html += '</li>';
		} 
		html+='</ul>';
		$("#modal1").append(html);
	}
	$("#modal1 .tooltip")
}
modalMake1();
*/




