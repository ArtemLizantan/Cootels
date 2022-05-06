// GETROOM

$(document).ready(function () {
    $('.getroom__title__getroomtitle').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


// SLIDER

$(document).ready(function () {
    $('.slider').slick ({
        arrows: false,
        dots: true
    });
});

// burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});