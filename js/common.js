/**
 * Created by OLEG on 28.08.2017.
 */

$(document).ready(function () {

    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 5,
            time: 2000
        });
    }

    function circleInit() {
        if ($('.circle').length) {

            $('.circle-1').circleProgress({
                value: 0.9,
                size: 142,
                thickness: 5,
                startAngle: -Math.PI / 6 * 9,
                emptyFill: '#fff',
                animation: {
                    duration: 1500,
                    easing: 'circleProgressEasing'
                },
                fill: {
                    color: "#ffe600"
                }
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
            });

            $('.circle-2').circleProgress({
                value: 0.96,
                size: 142,
                thickness: 5,
                startAngle: -Math.PI / 6 * 9,
                emptyFill: '#fff',
                animation: {
                    duration: 1500,
                    easing: 'circleProgressEasing'
                },
                fill: {
                    color: "#ffe600"
                }
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(96 * progress) + '<i>%</i>');
            });
            $('.circle-3').circleProgress({
                value: 0.85,
                size: 142,
                thickness: 5,
                startAngle: -Math.PI / 6 * 9,
                emptyFill: '#fff',
                animation: {
                    duration: 1500,
                    easing: 'circleProgressEasing'
                },
                fill: {
                    color: "#ffe600"
                }
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
            });
            $('.circle-4').circleProgress({
                value: 0.94,
                size: 142,
                thickness: 5,
                startAngle: -Math.PI / 6 * 9,
                emptyFill: '#fff',
                animation: {
                    duration: 1500,
                    easing: 'circleProgressEasing'
                },
                fill: {
                    color: "#ffe600"
                }
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(94 * progress) + '<i>%</i>');
            });
        }
    }

    $(window).on('scroll', function() {
        if(isScrolledIntoView('.circle')){
            circleInit();
            $(window).off('scroll');
        }
    });

        function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    if($('.sl-slide').length) {
        $('.sl-slide').slick({
            slidesToShow: 6,
            arrows: true,
            slidesToScroll: 1
        });
    }

    if($('.sl-slide-2').length) {
        $('.sl-slide-2').slick({
            slidesToShow: 3,
            dots:true,
            arrows: false,
            slidesToScroll: 1
        });
    }

});


