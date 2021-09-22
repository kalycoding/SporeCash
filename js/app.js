const menu = document.querySelector('.menu-btn');

menu.addEventListener('click', () => {
    document.querySelector('.right-menu').classList.toggle('show');
});

$(function () {
    $('.menu-btn').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.right-menu').toggleClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
    });
});

//   Smooth Scrolling
$('#navbar a, footer a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top,
            },
            800
        );
    }
});
