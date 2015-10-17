/**
 * Created by Cliff on 10/16/2015.
 */
$(document).ready(function() {
    //playground 1 code

    var h1 = $("<h1>").text('I am a heading');
    $('#playground1').append(h1);

    var p = $("<p>").text('This is an awesome paragraph');
    $('#playground1').append(p);

    var p_style = $("<p>").css('color', 'red').text('This has red text');
    $('#playground1').append(p_style);

    //playground 2 code

    var div = $("<div>").addClass('awesome_class').text('Here is some awesome div text');
    $('#playground2').append(div);

    var div2 = $("<div>").addClass('awesome_class').text('Here are MORE awesome div text');
    $('#playground2').append(div2);

    var div3 = $("<div>").addClass('awesome_class').text('Here is EVEN MORE awesome div text');
    $('#playground2').append(div3);

    //playground 3 code

    var ul = $("<ul>").addClass('neato');
    var li_1 = $("<li>").text('Link 1');
    var li_2 = $("<li>").text('Link 2');
    var li_3 = $("<li>").text('Link 3');
    $('#playground3').append(ul);
    $('#playground3').append(li_1);
    $('#playground3').append(li_2);
    $('#playground3').append(li_3);
}