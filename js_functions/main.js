function myMessage() {
    console.log("i heart functions");
}

function add(x, y) {
    console.log(x + y);
}

function add2(x, y) {
    var total = x + y;
    return total;
}
var add2result = add2(10, 36);

function cardFlip(element) {
    $(element).hide();
    src = getSrc(element);
    console.log(src);
}

function getSrc(back){
    return $(back).prev().find("img").attr('src');
}