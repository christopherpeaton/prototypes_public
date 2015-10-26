function myMessage() {
    console.log("This is the 1st function!");
}
function add(x, y) {
    var x = 10;
    var y = 12;
    console.log(x + y);
}
function add2(x, y) {
    var total = x + y;
    return total;
}
var add2result = add2(22, 15);

function cardFlip(element) {
    $(element).hide();
    src = getSrc(element);
    console.log(src);
}
function getSrc(back) {
    var front = $(back).prev();
    var img = front.find("img");
    var src = img.attr("src");
    return src;
}
var result = add2(add2(5, 10), add2(20, 30));
console.log(result);
