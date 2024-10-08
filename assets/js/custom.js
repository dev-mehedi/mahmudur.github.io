/* --Author Info--
  Creator: Md. Mahmudur Rahman
  Version: 1.0
  File Name: custom.js
--Author Info--*/


$(function () {
    "use strict";

    document.onkeydown = function (e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            alert("Lav Nai");
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            alert("Lav Nai");
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            alert("Lav Nai");
            return false;
        }
    }

    // Menu
    $(document).ready(function () {


        $('.toggle_menu').click(function () {
            $(".menu-items").slideToggle('slow');
        });
        // $('.toggle_wrapper').on('click', function() {
        // 	$('.ham_menu').toggleClass('animate');
        // })

    });


    // Preloader
    $(document).ready(function () {
        setTimeout(function () {
            $('body').addClass('loaded');
        });
    });


    // NavBar

    $(document).ready(function () {
        $navOffset = $('#navigation').offset().top;
        $navOffset = 300;

        $(window).scroll(function () {
            $scrolling = $(this).scrollTop();

            if ($scrolling > $navOffset) {
                $("#navigation").addClass('navfixed');
            } else {
                $("#navigation").removeClass('navfixed');
            }
        });
    });


    // Slick

    $(document).ready(function () {
        $(".slider").slick({
            dots: false,
            infinite: true,
            speed: 300,
            pauseOnHover: true,
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            slidesToScroll: 1,
            prevArrow: '.slick-prev',
            nextArrow: '.slick-next',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });


    // Veno Box

    $(document).ready(function () {
        $('.venobox').venobox();
    });


    // Skill Bar
    jQuery(document).ready(function () {

        /*----------------------------------------------------*/
        /*  Animated Progress Bars
        /*----------------------------------------------------*/

        jQuery('.skill .skill-main').each(function () {
            jQuery(this).appear(function () {
                jQuery(this).animate({ opacity: 1, left: "0px" }, 800);
                var b = jQuery(this).find(".skill-bar").attr("data-width");
                jQuery(this).find(".skill-bar").animate({
                    width: b + "%"
                }, 2500, "linear");
            });
        });

    });

    jQuery(this).appear(function () {
        jQuery(this).animate({ opacity: 1, left: "0px" }, 800);
        var b = jQuery(this).find(".skill-bar").attr("data-width");
        jQuery(this).find(".skill-bar").animate({
            width: b + "%"
        }, 2500, "linear");
    });
});   
