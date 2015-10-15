function myMessage() {
    console.log("hello")
}

function add(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}

function add2(num1, num2) {
    var sum = num1 + num2;
    return(sum);
}
var add2result = add2(10, 36);

function getSrc(back) {
    return $(back).prev().find("img").attr("src");
}

function cardFlip(ele) {
    $(ele).hide();
    src = getSrc(ele);
    console.log(src);
}
