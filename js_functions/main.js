function myMessage() {
    console.log('We out here tryna function')
}

function add(num1, num2) {
    var add = num1 + num2;
    console.log(add);
}

function add2(num1, num2) {
    var addDeuce = num1 + num2;
    return addDeuce;
}
var add2result = add2(44,43);

function cardFlip(element) {
    $(element).hide();
    src = getSrc(element);
    console.log(src);
}

function getSrc(back) {
    return $(back).prev().find("img").attr("src");
}