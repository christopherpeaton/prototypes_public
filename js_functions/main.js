function myMessage(){
    console.log('this is the first message');
}

function add (x, y) {
   var total = (x + y);
    console.log(total);
}

function add2(x, y){
    var total = (x, y);
    return total;
}

var add2result = add2(10, 36);

function cardFlip(element){
    $(element).hide();
    var src = getSrc(element);
    console.log(src);
}

function getSrc(back){
    return $(back).prev().find("img").attr("src");
}

