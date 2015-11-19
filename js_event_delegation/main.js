// Answer the questions here:

// - What do you think is going to happen?
//    every time i click a button, it will log the text in the console
// - What happened?
//    nothing
// - Why?
//    because main.js wasnt linked to the html file(worked after i linked it)
//========== Write your code below ===========//
$(document).ready(function(){
    $("#list").on("click","button", function(event) {
        console.log('clicked', $(this).text());
    });

    var li = $("<li>",{
        text: "Delegated Button#5 Handler"
    });
    var button = $("<button>",{
        style: "margin-top:10px"
    });

    (li).append(button),
    $("#list").append(li);
});
