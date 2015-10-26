function myMessage(){
    console.log("This is my first function output in my js_functions prototype.");
}

function add(x,y){
    console.log(x+y);
}

function add2(x,y){
    var total = x + y;
    return total;
}

var add2result = add2(10,10);

function cardFlip(element){
    $(element).hide();
    src = getsrc(element);
    console.log(src);
}

function getsrc(back){
    var front = $(back).siblings();
    var img = front.find("img");
    var src = img.attr("src");
    return src;
}

var result = add2(add2(2,2),add2(3,3));
console.log("The result is "+result);