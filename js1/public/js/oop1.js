/* var Car = (function(){
    // Constructor (생성자)
    function Car(_parent, _color, _w, _h) {
        this.parent = _parent;
        this.color = _color;
        this.wid = _w;
        this.hei = _h;
        // this.obj = this.parent.append('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>');
        this.obj = $('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>').appendTo(this.parent);
    }
    Car.prototype.drive = function(_speed, _tar){
        this.obj.click(function(){
            $(this).animate({"margin-left":_tar+"px"}, _speed);
        });
    };
    return Car;
}());

// new Car (부모를 jQuery로 넣어주세요, 색상을 넣어주세요, width, height)
var myCar = new Car($(".wrap"), "#f00", 100, 100);
var myCar2 = new Car($(".wrap"), "#00f", 200, 200);
myCar.drive(1000, 1000);
myCar2.drive(5000, 500); */


/* var myCar = new Car("무르시엘라고");

var otherCar = new Car("알수없음"); */

var Box = (function(){
    function Box(_data) {
        this.obj = _data;
        this.create();
    };
    Box.prototype.create = function(){
        var style = 'style="position:relative; text-align:center;';
        if(this.obj.width) style += 'width:'+this.obj.width+'px;';
        if(this.obj.height) style += 'height:'+this.obj.height+'px;';
        if(this.obj.bgColor) style += 'background-color:'+this.obj.bgColor+';';
        if(this.obj.borderWidth) style += 'border-width:'+this.obj.borderWidth+'px;';
        if(this.obj.borderStyle) style += 'border-style:'+this.obj.borderStyle+';';
        if(this.obj.borderColor) style += 'border-color:'+this.obj.borderColor+';';
        if(this.obj.fontSize) style += 'font-size:'+this.obj.fontSize+';';
        style += '"';
        var html = '<div style="padding:20px;">';
        html += '<button class="w3-button w3-red bt_move">이동</button>';
        html += '<button class="w3-button w3-blue bt_reset">초기화</button>';
        html += '</div>';
        this.obj.bts = $(html).appendTo($(this.obj.parent));
        html = '<div '+style+'>';
        if(this.obj.name) html += this.obj.name;
        html += '</div>';
        this.obj.box = $(html).appendTo($(this.obj.parent));
    };
    Box.prototype.init = function(_target, _speed){
        var box = this.obj.box;
        $(".bt_move", $(this.obj.bts)).click(box, function(){
            box.stop().animate({"left":_target+"px"}, _speed);
        });
        $(".bt_reset", $(this.obj.bts)).click(box, function(){
            box.stop().animate({"left":"0px"}, _speed);
        });
    };
    return Box;
}());

var bus = new Box({
    parent: ".wrap",
    name: "1500",
    bgColor: "green",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#666",
    width: 200,
    height: 80
});

bus.init(1720, 3000);

var bus2 = new Box({
    parent: ".wrap",
    name: "마을버스",
    bgColor: "#0f0",
    borderWidth:2,
    borderStyle: "solid",
    borderColor: "#ccc",
    width: 100,
    height: 30,
    fontSize: "8px"
});
bus2.init(1820, 8000);













