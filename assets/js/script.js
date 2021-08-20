$(document).ready(function () {
//navbar add remove calss
    var header = $(".no-background");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.removeClass('no-background').addClass("topbar-bg");
        } else {
            header.removeClass("topbar-bg").addClass('no-background');
        }
    });



    $(function () {
        $('.scroll-down').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });





});