function myMessage() {
    console.log("This message is made possible by Javascript!");
}

function add (num1, num2) {
    console.log(num1 + num2);
}

function add2 (num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var add2result = add2(13, 8);

function cardFlip(element) {
    $(element).hide();
    src = getSrc(element);
    console.log(src);
}

function getSrc(back) {
    return $(back).prev().find("img").attr("src");
}