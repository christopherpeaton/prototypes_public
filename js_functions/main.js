function myMessage(){
    console.log("This is my first function! Hurray!");
}


function add(x, y){
    var sum = x + y;
    return total;
}
var add2result = add2(10, 36);


function add2(x, y){
    var sum = x + y;
    return sum;
}

//feature 3
function cardFlip(element){
    $(element).hide();
    var backSrc = getSrc(element);
    console.log(backSrc);
}

//feature 4
function getSrc(back){
    return $(back).prev().find("img").attr("src");
}