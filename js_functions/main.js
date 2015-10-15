//Feature Set 1.2 - Build your first function
function myMessage() {
    console.log("Feature Set 1.1 Message");
}
//Feature Set 1.3 - Building a function with parameters
function add(x, y) {
    var z = x + y;
    console.log(z);
}
//Feature Set 2.1 - return to add
function add2(x, y) {
    var z = x + y;
    return z;
}
var add2result = add2(20, 40);
//Function Inception (Advanced Topic)
var result = add2(add2(20, 2), add2(38, 14));

//Feature Set 4 - Find the src
function getSrc(cardBack) {
    var cardFront = $(cardBack).prev();
    var pic = cardFront.find("img");
    var picSource = pic.attr("src");
    return picSource;
}
//Feature Set 3.1 - cardFlip Function
function cardFlip(e) {
    $(e).hide();
    picSource = getSrc(e);
    console.log(picSource);
}