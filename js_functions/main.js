function myMessage() {
    console.log("I am not a function virgin");
}


function add(x,y) {
    var sum = x + y;
    console.log(sum);
}

function add2(x,y) {
    var total = x + y;
    return total;
}

var add2result = add2(3,7);

function cardFlip(element) {
    $(element).hide();
    var src = getSrc(element);
    console.log(src);
}

function getSrc(back) {
    return $(back).prev().find("img").attr("src");
}



