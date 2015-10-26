function myMessage() {
    console.log('message');
}

function add(x,y) {
    var z = x + y;
    console.log(z);
}

function add2 (x,y) {
    var z = x + y;
    return z;
}

var add2result = add2(2142134,32412214);

function cardFlip(clickedElement) {
    $(clickedElement).hide();
    src = getSrc(clickedElement);
    console.log(src);
}

function getSrc(clickElement) {
    return $(clickElement).prev().find("img").attr('src');
}

var result = add2(add2(5,10), add2(20,30));