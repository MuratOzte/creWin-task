$('.menu').click(function () {
    $('.line1, .line2, .line3').toggleClass('active');
});

$('.recently-prev-button').click(function () {
    $('.recent-items').animate(
        {
            scrollLeft: '-=360',
        },
        'slow'
    );
});
$('.recently-next-button').click(function () {
    $('.recent-items').animate(
        {
            scrollLeft: '+=360',
        },
        'slow'
    );
});

const width = $('.top-categories-cards').width();
$('.categories-prev-button').click(function () {
    $('.top-categories-cards').animate(
        {
            scrollLeft: '-=' + width / 1.2,
        },
        'slow'
    );
});
$('.categories-next-button').click(function () {
    $('.top-categories-cards').animate(
        {
            scrollLeft: '+=' + width / 1.2,
        },
        'slow'
    );
});

$(document).ready(function () {
    var prevScrollpos = window.scrollY;
    var scrollThreshold = 10; // Eşik değeri

    $(window).scroll(function () {
        var currentScrollPos = window.scrollY;

        if (prevScrollpos > currentScrollPos) {
            $('nav').css('top', '0');
            $('nav').css('box-shadow', '0 0 10px 0 rgba(0, 0, 0, 0.2)');
        } else {
            $('nav').css('top', '-100px');
        }

        if (currentScrollPos <= scrollThreshold) {
            $('nav').css('box-shadow', 'none');
        }

        prevScrollpos = currentScrollPos;
    });
});
