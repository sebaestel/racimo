$(document).ready(function(){
    function header () {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > 200) {
            $('header').addClass('small')
        } else {
            $('header').removeClass('small')
        }
    }
    header ()
    $(window).scroll(function(){
        header ()
    });
})