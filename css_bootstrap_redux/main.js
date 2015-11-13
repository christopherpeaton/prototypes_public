/**
 * Created by christophereaton on 11/13/15.
 */
$("#pop").on("click", function() {
    console.log("clicked");
    $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});