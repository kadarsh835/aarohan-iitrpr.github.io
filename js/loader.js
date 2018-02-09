$(document).ready(function() {
    $('#navbar').hide();
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#navbar').show();
    }, 2000);
});