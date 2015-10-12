$(function(){
    $('.item img').click(function(e){
        $('.modal-body>img').attr('src', $(this).attr('src'));
        return $(this).attr('src');
    });
});


