const data1 = [
    {
        year: 1322,
        bids: 29,
        origin: 'China',
    },
];

const recentlyAddeds = [
    {
        image: 'assets/recently-added/chair.svg',
        title: 'Data1',
        description: 'Year 1992 | Weapons',
        price: '$ 895.50',
        bids: '12 bids so far',
        date: 'Bidding closes in 12 Days',
    },
    {
        image: 'assets/recently-added/table.svg',
        title: 'Data2',
        description: 'Year 1078 | Weapons',
        price: '$ 759',
        bids: '14 bids so far',
        date: 'Bidding closes in 12 Days',
    },
    {
        image: 'assets/recently-added/skull.svg',
        title: 'Data3',
        description: 'Year 1256 | Weapons',
        price: '$ 895.50',
        bids: '16 bids so far',
        date: 'Bidding closes in 12 Days',
    },
];

$(document).ready(function () {
    for (let i = 0; i < data1.length; i++) {
        const item = data1[i];
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                $(`#${key}`).text(item[key]);
            }
        }
    }
    for (let i = 0; i < recentlyAddeds.length; i++) {
        const item = recentlyAddeds[i];
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                if (key === 'image') {
                    $(`#${key}${i + 1}`).attr('src', item[key]);
                    continue;
                }
                $(`#${key}${i + 1}`).text(item[key]);
            }
        }
    }
});

$('.menu').click(function () {
    $('.line1, .line2, .line3').toggleClass('active');
});

$('.prev-button').click(function () {
    $('.recent-items').animate(
        {
            scrollLeft: '-=360',
        },
        'slow'
    );
});
$('.next-button').click(function () {
    $('.recent-items').animate(
        {
            scrollLeft: '+=360',
        },
        'slow'
    );
});

$(document).ready(function () {
    var prevScrollpos = window.pageYOffset;

    $(window).scroll(function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            // Yukarı scroll edildiğinde nav bar geri gelecek
            $('nav').css('top', '0');
        } else {
            // Aşağı scroll edildiğinde nav bar kaybolacak
            $('nav').css('top', '-100px'); // Top değerini değiştirebilirsiniz
        }

        prevScrollpos = currentScrollPos;
    });
});
