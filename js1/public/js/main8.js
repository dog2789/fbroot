/***** 배열 *****/

var arr = [];
arr[0] = "A";
arr[1] = "B";

var arr1 = new Array();
arr1[0] = [];
arr1[0][0] = "A";
arr1[0][1] = "a";

var arr2 = ["A", "B", "C"];
arr2[3] = "D";
arr2.push("E");
console.log(arr2);

var arr3 = {
  electronic:[{
    name:"TV",
    brand:"Samsung",
    color:"Black",
    position:"Living Room",
    year: 2015
  },{
    name:"SmartPhone",
    brand:"Apple",
    color:"Black",
    position:"My Hand",
    year: 2017
  }],
  funiture:[],
  etc:[]
}
console.log(arr3.electronic[1].name);

var members = [];
for(var i=0; i<10; i++) {
  members[i] = [];
}
members[0][0] = "홍길동";
members[0][1] = "24";
members[0][2] = "M";
members[0][3] = "010-2222-3333";
members[0][4] = "서울 종로구 233";


/***** 객체 개념 *****/

var man = [];
man[0] = {
  name: "홍길동",
  age: 24,
  gender: "M",
  tel: "010-2222-3333",
  addr: "서울 종로구 233"
};
man[1] = {
  name: "홍길순",
  age: 26,
  gender: "F",
  tel: "010-4444-3333",
  addr: "서울 종로구 556"
};
man[2] = {
  name: "홍길만",
  age: 19,
  gender: "M",
  tel: "010-5555-6666",
  addr: "서울 종로구 777",
  run : function(speed){
    alert(this.name+"은 "+speed+"속도로 뜁니다.");
  }
};

console.log(man[0].age); //Getter
man[0].age = 25;         //Setter
console.log(man[0].age);

console.log(man[1]);
console.log(man[1].addr);
man[2].money = 10000;
console.log(man[2]);
man[2].run(5);

man[3] = {};
man[3].name = "홍길이";
man[3].age = 28;
man[3].gender = "F";
man[3].height = 175;

console.log(man[3]);

var cates = [{
  main: {
    title: "SHOP PAGES", 
    icon: "", 
    link: "#"},
  sub:[{
    title:"Filters area",
    icon:"",
    link:"#"
  },{
    title:"Hidden sidebar",
    icon:"HOT",
    link:"#"
  },{
    title:"No page heading",
    icon:"",
    link:"#"
  },{
    title:"Small categories menu",
    icon:"",
    link:"#"
  },{
    title:"Masonry grid",
    icon:"",
    link:"#"
  },{
    title:"Products list view",
    icon:"",
    link:"#"
  },{
    title:"With background",
    icon:"",
    link:"#"
  },{
    title:"Category description",
    icon:"",
    link:"#"
  },{
    title:"Only categories",
    icon:"",
    link:"#"
  },{
    title:"Header overlap",
    icon:"",
    link:"#"
  },{
    title:"Default shop",
    icon:"",
    link:"#"
  }]
},{
  main: {
    title: "PRODUCT HOVERSEFFECTS", 
    icon: "EFFECTS", 
    link: "#"},
  sub:[{
    title:"Summary on hover",
    icon:"",
    link:"#"
  },{
    title:"Icons on hover",
    icon:"",
    link:"#"
  },{
    title:"Icons & Add to cart",
    icon:"",
    link:"#"
  },{
    title:"Full info on image",
    icon:"",
    link:"#"
  },{
    title:"All info on hover",
    icon:"",
    link:"#"
  },{
    title:"Button on image",
    icon:"",
    link:"#"
  },{
    title:"Standard button",
    icon:"",
    link:"#"
  },{
    title:"Quick shop",
    icon:"",
    link:"#"
  },{
    title:"Tiled hover",
    icon:"",
    link:"#"
  },{
    title:"Categories hover #1",
    icon:"",
    link:"#"
  },{
    title:"Categories hover #2",
    icon:"",
    link:"#"
  }]
},{
  main: {
    title: "PRODUCT PAGESUNLIMITED", 
    icon: "UNLIMITED", 
    link: "#"},
  sub:[
    {title:"Default", icon:"", link:"#"},
    {title:"Centered", icon:"", link:"#"},
    {title:"Sticky description", icon:"", link:"#"},
    {title:"With shadow", icon:"", link:"#"},
    {title:"With background", icon:"", link:"#"},
    {title:"Accordion tabsNEW", icon:"", link:"#"},
    {title:"Accordion in content", icon:"", link:"#"},
    {title:"Sticky add to cart", icon:"", link:"#"},
    {title:"With sidebar", icon:"", link:"#"},
    {title:"Extra content #1", icon:"", link:"#"},
    {title:"Extra content #2", icon:"", link:"#"}
  ]
},{
  main: {
    title: "PRODUCT IMAGES", 
    icon: "", 
    link: "#"},
  sub:[
    {title:"Default", icon:"", link:"#"},
    {title:"Centered", icon:"", link:"#"},
    {title:"Sticky description", icon:"", link:"#"},
    {title:"With shadow", icon:"", link:"#"},
    {title:"With background", icon:"", link:"#"},
    {title:"Accordion tabsNEW", icon:"", link:"#"},
    {title:"Accordion in content", icon:"", link:"#"},
    {title:"Sticky add to cart", icon:"", link:"#"},
    {title:"With sidebar", icon:"", link:"#"},
    {title:"Extra content #1", icon:"", link:"#"},
    {title:"Extra content #2", icon:"", link:"#"}
  ]
},{
  main: {
    title: "WOOCOMMERCE", 
    icon: "", 
    link: "#"},
  sub:[
    {title:"Simple product", icon:"", link:"#"},
    {title:"Variable product", icon:"", link:"#"},
    {title:"External product", icon:"", link:"#"},
    {title:"Grouped product", icon:"", link:"#"},
    {title:"Shopping Cart", icon:"", link:"#"},
    {title:"Checkout", icon:"", link:"#"},
    {title:"My account", icon:"", link:"#"},
    {title:"Wishlist", icon:"", link:"#"},
    {title:"Track order", icon:"", link:"#"},
    {title:"Custom 404 page #1", icon:"", link:"#"},
    {title:"Custom 404 page #2", icon:"", link:"#"}
  ]
},{
  main: {
    title: "FEATURESBEST", 
    icon: "BEST", 
    link: "#"},
  sub:[
    {title:"360° product viewer", icon:"", link:"#"},
    {title:"With video", icon:"", link:"#"},
    {title:"With instagram", icon:"", link:"#"},
    {title:"With countdown timer", icon:"", link:"#"},
    {title:"Product presentation", icon:"", link:"#"},
    {title:"Variations swatches", icon:"", link:"#"},
    {title:"Infinit scrollingNEW", icon:"", link:"#"},
    {title:"Load more button", icon:"", link:"#"},
    {title:"Catalog mode", icon:"", link:"#"},
    {title:"Cookies law info", icon:"", link:"#"},
    {title:"Parallax scrolling", icon:"", link:"#"}
  ]
}]

console.log(cates);

/***** 객체 응용 *****/

var Man = (function(){
  //생성자 (Constructor)
  function Man() {

  }
}());

/***** 함수의 즉각실행 *****/

/*
function abc() {
  alert("test");
};
abc();

(function abc1() {
  alert("hello");
}());


SHOP PAGES
Filters area
Hidden sidebarHOT
No page heading
Small categories menu
Masonry grid
Products list view
With background
Category description
Only categories
Header overlap
Default shop

PRODUCT HOVERSEFFECTS
Summary on hover
Icons on hover
Icons & Add to cart
Full info on image
All info on hover
Button on image
Standard button
Quick shop
Tiled hover
Categories hover #1
Categories hover #2

PRODUCT PAGESUNLIMITED
Default
Centered
Sticky description
With shadow
With background
Accordion tabsNEW
Accordion in content
Sticky add to cart
With sidebar
Extra content #1
Extra content #2

PRODUCT IMAGES
Thumbnails left
Thumbnails bottom
Sticky images
One column
Two columns
Combined grid
Images full-width
Zoom image
Images size - small
Images size - large
Without thumbnails

WOOCOMMERCE
Simple product
Variable product
External product
Grouped product
Shopping Cart
Checkout
My account
Wishlist
Track order
Custom 404 page #1
Custom 404 page #2

FEATURESBEST
360° product viewer
With video
With instagram
With countdown timer
Product presentation
Variations swatches
Infinit scrollingNEW
Load more button
Catalog mode
Cookies law info
Parallax scrolling
*/








