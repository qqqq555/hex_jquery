$(document).ready(function(){
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('.dropdown-open').slideToggle();
        $('.fa').toggleClass('fa-angle-down fa-angle-up');
    });
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
      })
});