$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu, .header__logo, header input[type="button"]').toggleClass('active');
        $('body').toggleClass('lock');
    });

    let position = 0;
    const slidesToShow = 2.5;
    const slidesToScroll = 1.3;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });


    btnNext.click(function () {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.click(function () {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };

    checkBtns();


    const audio_btn = document.getElementById('audio_btn');
    const audio = document.getElementById('audio');

    audio_btn.addEventListener('click', function() {


        if (audio.paused) {
            audio.play();
            document.getElementById('icon-play').style.display = 'none';
            document.getElementById('icon-pause').style.display = 'inline-block';
        } else {
            audio.pause();
            document.getElementById('icon-play').style.display = 'inline-block';
            document.getElementById('icon-pause').style.display = 'none';
        }

    });

    audio.addEventListener('ended', function() {
        document.getElementById('icon-play').style.display = 'inline-block';
        document.getElementById('icon-pause').style.display = 'none';
    });
});

