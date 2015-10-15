/*
    Functions
 */

//Creates a console log, no param
function myMessage(){
    console.log("Use the console log, not alerts");
}

//Addition with 2 params
function add(num1, num2){
    var sum = num1 + num2;
    console.log(sum);
}

//Addition with 2 params, returns sum
function add2(num1, num2){
    var sum = num1 + num2;
    return sum;
}

//Hide clicked element, 1 param, returns result of getSrc()
function cardFlip(element){
    $(element).hide();
    var source = getSrc(element);
    console.log(source);
}

/* Finds the previous sibling,finds it's image tag, looks at the image source
 * returns the source, 1 param */
function getSrc(element){
    var source = $(element).prev().find("img").attr("src");
    return source;
}

/*
    Variables
 */

var add2Return = add2(50, 37);
