$(document).ready(function(){
    $('.contentwrap') .css({'margin-top': (($('.navbar-fixed-top').height()) + 1 )+'px'});
    $(window).resize(function(){
        $('.contentwrap') .css({'margin-top': (($('.navbar-fixed-top').height()) + 1 )+'px'});
});