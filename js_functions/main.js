function myMessage(){
    console.log("First function baby!");
}
function add(x,y){
    console.log(x+y);
}
function add2(x,y){
    var sum=x+y;
    return sum;
}
var add2result=add2(20,20);

function cardFlip(element_id){
    $(element_id).hide();
    var source=getSrc(element_id);
    console.log(source);
}

function getSrc(back_card) {
   var front_card=$(back_card).siblings();
    var front_img_src=front_card.find("img").attr("src");
    return front_img_src;




}