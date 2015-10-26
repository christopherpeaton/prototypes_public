function myMessage() {
    console.log("hooray for functions");
}
function add(x,y) {
    console.log(x + y);
}
function add2(x,y) {
    var total = x + y;
    return total;
}
var add2result = add2(10,40)

function cardFlip(element) {
    $(element).hide();
    src = getSrc("ele");
    console.log(src);
}
function getSrc(back) {
    return $(back).previous().find("img").attr("src");
}