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

    if ($('.circle').length) {

        $('.circle-1').circleProgress({
            value: 0.9,
            size: 142,
            thickness: 5,
            startAngle: -Math.PI / 6 * 9,
            emptyFill: '#fff',
            animation: {
                duration: 3000,
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
                duration: 3000,
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
                duration: 3000,
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
                duration: 3000,
                easing: 'circleProgressEasing'
            },
            fill: {
                color: "#ffe600"
            }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(94 * progress) + '<i>%</i>');
        });
    }



});

