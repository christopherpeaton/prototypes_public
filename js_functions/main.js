//Feature Set 1.1
function myMessage(){
    console.log("Hi there!");
}
//Feature Set 1.3
function add(x,y){
    var result = x+y;
    console.log(result);
}
//Feature Set 2.1
function add2(x,y){
    var output = x + y;
    return output;
}
var add2result = add2(20,6);

//Feature Set 3
function cardFlip(element){
    $(element).hide();
    src = getSrc(element);
    console.log(src);
}
//Feature Set 4
function getSrc(back){
    return $(back).prev().find("img").attr("src");
}