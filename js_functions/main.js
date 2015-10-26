// Feature Set 1.1 //
function myMessage() {
    console.log("Success!");
}

// Feature Set 1.3 //
function add(x, y){
    var sum = x + y;
    console.log(sum);
}

// Feature Set 2.1 //
function add2(a, b){
    var total = a + b;
    return total;
}
var add2result = add2(10,15)

// Feature Set 3.1 //
function cardFlip(z){
    $(z).hide();
    src = getSrc(z);
    console.log(src);
}



// Feature Set 4 - Find the image attribute/card source//
function getSrc(back){
    var front = $(back).prev();
    var img = front.find("img");
    var src = img.attr("src");
    return src;
}

// or shorter version

function getSrc(back) {
    return $(back).prev().find("img").attr("src");
} //

// Typical Math - var result = add2(add2(5, 10), add2(20, 30)); //