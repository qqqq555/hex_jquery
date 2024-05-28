$(document).ready(function(){
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('.dropdown-open').slideToggle();
        $('.fa').toggleClass('fa-angle-down fa-angle-up');
    });
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.go-to-top').fadeIn();
        } else {
            $('.go-to-top').fadeOut();
        }
    });
    $('.go-to-top a').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000); 
    });
});