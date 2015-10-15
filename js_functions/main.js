//feature set 1 and 2
function myMessage(){
    console.log("my message function works.");
}

function add(x,y){
    var total = x + y;
    console.log(total);
}

function add2(x,y){
    var total = x + y;
    return total;
}

var add2result = add2(100,200);

//feature set 3
function cardFlip(element){
    $(element).hide();
    back_img_src = getSrc(element);
    console.log(back_img_src);
}

//feature set 4
function getSrc(back){
    return $(back).prev().find("img").attr("src");
}