
/*================================================
[  Table of contents  ]
================================================

1. Variables
2. Mobile Menu
3. Mega Menu
4. One Page Navigation
5. Toogle Search
6. Current Year Copyright area
7. Background Image
8. wow js init
9. Tooltip
10. Nice Select
11. Default active and hover item active
12. Product Details Page
13. Isotope Gallery Active  ( Gallery / Portfolio )
14. LightCase jQuery Active
15. Slider One Active 
16. Product Slider One
17. Tab Product Slider One
18. Blog Slider One
19. Testimonial Slider - 1
20. Testimonial Slider - 2
21. Testimonial Slider - 3
22. Category Slider
23. Image Slide  - 1 (Screenshot) 
24. Image Slide - 2
25. Image Slide - 3
26. Image Slide - 4 
27. Brand Logo
28. Blog Gallery (Blog Page )
29. Countdown
30. Counter Up
31. Instagram Feed
32. Price Slider
33. Quantity plus minus
34. scrollUp active
35. Parallax active
36. Header menu sticky



======================================
[ End table content ]
======================================*/

(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        /* --------------------------------------------------------
            1. Variables
        --------------------------------------------------------- */
        var $window = $(window),
            $body = $('body');

        /* --------------------------------------------------------
            2. Mobile Menu
        --------------------------------------------------------- */
        /* ---------------------------------
           Utilize Function 
       ----------------------------------- */
        (function () {
            var $ltn__utilizeToggle = $('.ltn__utilize-toggle'),
                $ltn__utilize = $('.ltn__utilize'),
                $ltn__utilizeOverlay = $('.ltn__utilize-overlay'),
                $mobileMenuToggle = $('.mobile-menu-toggle');
            $ltn__utilizeToggle.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $target = $this.attr('href');
                $body.addClass('ltn__utilize-open');
                $($target).addClass('ltn__utilize-open');
                $ltn__utilizeOverlay.fadeIn();
                if ($this.parent().hasClass('mobile-menu-toggle')) {
                    $this.addClass('close');
                }
            });
            $('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
                e.preventDefault();
                $body.removeClass('ltn__utilize-open');
                $ltn__utilize.removeClass('ltn__utilize-open');
                $ltn__utilizeOverlay.fadeOut();
                $mobileMenuToggle.find('a').removeClass('close');
            });
        })();

        /* ------------------------------------
            Utilize Menu
        ----------------------------------- */
        function mobileltn__utilizeMenu() {
            var $ltn__utilizeNav = $('.ltn__utilize-menu, .overlay-menu'),
                $ltn__utilizeNavSubMenu = $ltn__utilizeNav.find('.sub-menu');

            /*Add Toggle Button With Off Canvas Sub Menu*/
            $ltn__utilizeNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

            /*Category Sub Menu Toggle*/
            $ltn__utilizeNav.on('click', 'li a, .menu-expand', function (e) {
                var $this = $(this);
                if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                    e.preventDefault();
                    if ($this.siblings('ul:visible').length) {
                        $this.parent('li').removeClass('active');
                        $this.siblings('ul').slideUp();
                        $this.parent('li').find('li').removeClass('active');
                        $this.parent('li').find('ul:visible').slideUp();
                    } else {
                        $this.parent('li').addClass('active');
                        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                        $this.closest('li').siblings('li').find('ul:visible').slideUp();
                        $this.siblings('ul').slideDown();
                    }
                }
            });
        }
        mobileltn__utilizeMenu();

        /* --------------------------------------------------------
            3. Mega Menu
        --------------------------------------------------------- */
        $('.mega-menu').each(function () {
            if ($(this).children('li').length) {
                var ulChildren = $(this).children('li').length;
                $(this).addClass('column-' + ulChildren)
            }
        });


        /* Remove Attribute( href ) from sub-menu title in mega-menu */
        /*
        $('.mega-menu > li > a').removeAttr('href');
        */


        /* Mega Munu  */
        // $(".mega-menu").parent().css({"position": "inherit"});
        $(".mega-menu").parent().addClass("mega-menu-parent");


        /* Add space for Elementor Menu Anchor link */
        $(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addFilter('frontend/handlers/menu_anchor/scroll_top_distance', function (scrollTop) {
                return scrollTop - 75;
            });
        });

        /* --------------------------------------------------------
            3-2. Category Menu
        --------------------------------------------------------- */

        $('.ltn__category-menu-title').on('click', function () {
            $('.ltn__category-menu-toggle').slideToggle(500);
        });

        /* Category Menu More Item show */
        $('.ltn__category-menu-more-item-parent').on('click', function () {
            $('.ltn__category-menu-more-item-child').slideToggle();
            $(this).toggleClass('rx-change');

        });

        /* Category Submenu Column Count */
        $('.ltn__category-submenu').each(function () {
            if ($(this).children('li').length) {
                var ulChildren = $(this).children('li').length;
                $(this).addClass('ltn__category-column-no-' + ulChildren)
            }
        });

        /* Category Menu Responsive */
        function ltn__CategoryMenuToggle() {
            $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').on('click', function () {
                if ($(window).width() < 991) {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp();
                    }
                    else {
                        element.addClass('open');
                        element.children('ul').slideDown();
                        element.siblings('li').children('ul').slideUp();
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp();
                    }
                }
            });
            $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').append('<span class="expand"></span>');
        }
        ltn__CategoryMenuToggle();


        /* ---------------------------------------------------------
            4. One Page Navigation ( jQuery Easing Plugin )
        --------------------------------------------------------- */
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function () {
            $('a.page-scroll').bind('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });


        /* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
        // Handle click on toggle search button
        $('.header-search-1').on('click', function () {
            $('.header-search-1, .header-search-1-form').toggleClass('search-open');
            return false;
        });


        /* ---------------------------------------------------------
            6. Current Year Copyright area
        --------------------------------------------------------- */
        $(".current-year").text((new Date).getFullYear());


        /* ---------------------------------------------------------
            7. Background Image
        --------------------------------------------------------- */
        var $backgroundImage = $('.bg-image, .bg-image-top');
        $backgroundImage.each(function () {
            var $this = $(this),
                $bgImage = $this.data('bs-bg');
            $this.css('background-image', 'url(' + $bgImage + ')');
        });


        /* ---------------------------------------------------------
            8. wow js init
        --------------------------------------------------------- */
        new WOW().init();


        /* ---------------------------------------------------------
            9. Tooltip
        --------------------------------------------------------- */
        $('[data-toggle="tooltip"]').tooltip();


        /* --------------------------------------------------------
            10. Nice Select
        --------------------------------------------------------- */
        $('select').niceSelect();

        /* ---------------------------------------------------------
            datepicker
        --------------------------------------------------------- */

        $('.ltn__datepicker .input-group.date').datepicker({
            format: 'mm/dd/yyyy',
            /* format: 'mm/dd/yyyy', */
            /* format: 'yyyy/dd/mm', */
        });


        /* --------------------------------------------------------
            11. Default active and hover item active
        --------------------------------------------------------- */
        var ltn__active_item = $('.ltn__feature-item-6, .ltn__our-journey-wrap ul li, .ltn__pricing-plan-item')
        ltn__active_item.mouseover(function () {
            ltn__active_item.removeClass('active');
            $(this).addClass('active');
        });

        /* --------------------------------------------------------
            12. Product Details Page
        --------------------------------------------------------- */
        $('.ltn__shop-details-large-img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.ltn__shop-details-small-img'
        });
        $('.ltn__shop-details-small-img').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.ltn__shop-details-large-img',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            13. Isotope Gallery Active  ( Gallery / Portfolio )
        -------------------------------------------------------- */
        var $ltnGalleryActive = $('.ltn__gallery-active'),
            $ltnGalleryFilterMenu = $('.ltn__gallery-filter-menu');
        /*Filter*/
        $ltnGalleryFilterMenu.on('click', 'button, a', function () {
            var $this = $(this),
                $filterValue = $this.attr('data-filter');
            $ltnGalleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $ltnGalleryActive.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $ltnGalleryActive.each(function () {
            var $this = $(this),
                $galleryFilterItem = '.ltn__gallery-item';
            $this.imagesLoaded(function () {
                $this.isotope({
                    itemSelector: $galleryFilterItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.ltn__gallery-sizer',
                    }
                });
            });
        });

        /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
        $('a[data-rel^=lightcase]').lightcase({
            transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
            swipe: true,
            maxWidth: 1170,
            maxHeight: 600,
        });

        /* --------------------------------------------------------
            15. Slider One Active 
        --------------------------------------------------------- */
        $('.ltn__slide-one-active').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        }).on('afterChange', function () {
            new WOW().init();
        });
        /* --------------------------------------------------------
            15-2. Slider Active 2
        --------------------------------------------------------- */
        $('.ltn__slide-active-2').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        }).on('afterChange', function () {
            new WOW().init();
        });


        /* --------------------------------------------------------
            16. Product Slider One
        --------------------------------------------------------- */
        $('.ltn__product-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            16. Product Slider One
        --------------------------------------------------------- */
        $('.ltn__product-slider-item-four-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            16. Product Slider One
        --------------------------------------------------------- */
        $('.ltn__related-product-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            17. Tab Product Slider One
        --------------------------------------------------------- */
        $('.ltn__tab-product-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        /* --------------------------------------------------------
            17. Small Product Slider One
        --------------------------------------------------------- */
        $('.ltn__small-product-slider-active').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            18. Blog Slider One
        --------------------------------------------------------- */
        $('.ltn__blog-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            19. Testimonial Slider - 1
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-active').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            20. Testimonial Slider - 2
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-2-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: true,
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            21. Testimonial Slider - 3
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-3-active').slick({
            arrows: true,
            centerMode: true,
            centerPadding: '80px',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            22. Category Slider
        --------------------------------------------------------- */
        $('.ltn__category-slider-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            22. Category Slider
        --------------------------------------------------------- */
        $('.ltn__category-slider-active-six').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 3,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            23. Image Slide  - 1 (Screenshot) 
        --------------------------------------------------------- */
        $('.ltn__image-slider-1-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            24. Image Slide - 2
        --------------------------------------------------------- */
        $('.ltn__image-slider-2-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '80px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '50px'
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '50px'
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            25. Image Slide - 3
        --------------------------------------------------------- */
        $('.ltn__image-slider-3-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            26. Image Slide - 4 
        --------------------------------------------------------- */
        $('.ltn__image-slider-4-active').slick({
            rtl: false,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        /* --------------------------------------------------------
            27. Brand Logo
        --------------------------------------------------------- */
        if ($('.ltn__brand-logo-active').length) {
            $('.ltn__brand-logo-active').slick({
                rtl: false,
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        };

        /* --------------------------------------------------------
            28. Blog Gallery (Blog Page )
        --------------------------------------------------------- */
        if ($('.ltn__blog-gallery-active').length) {
            $('.ltn__blog-gallery-active').slick({
                rtl: false,
                arrows: true,
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
            });
        };

        /* --------------------------------------------------------
            29. Countdown
        --------------------------------------------------------- */
        $('[data-countdown]').each(function () {

            var $this = $(this),
                finalDate = $(this).data('countdown');
            if (!$this.hasClass('countdown-full-format')) {
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                });
            } else {
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                });
            }

        });


        /* --------------------------------------------------------
            30. Counter Up
        --------------------------------------------------------- */
        // $('.ltn__counter').counterUp();

        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
        $('.counter').addClass('animated fadeInDownBig');
        $('h3').addClass('animated fadeIn');


        /* --------------------------------------------------------
            31. Instagram Feed
        --------------------------------------------------------- */
        if ($('.ltn__instafeed').length) {
            $.instagramFeed({
                'username': 'envato',
                'container': ".ltn__instafeed",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'styling': false,
                'items': 12,
                "image_size": "600", /* 320 */
            });
            $('.ltn__instafeed').on("DOMNodeInserted", function (e) {
                if (e.target.className == 'instagram_gallery') {
                    $('.ltn__instafeed-slider-2 .' + e.target.className).slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                        nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    })
                    $('.ltn__instafeed-slider-1 .' + e.target.className).slick({
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                        nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                        responsive: [{
                            breakpoint: 119,
                            settings: {
                                slidesToShow: 4
                            }
                        }, {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    });
                }
            });
        };


        /* ---------------------------------------------------------
            32. Price Slider
        --------------------------------------------------------- */
        $(".slider-range").slider({
            range: true,
            min: 50,
            max: 5000,
            values: [50, 1500],
            slide: function (event, ui) {
                $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $(".amount").val("$" + $(".slider-range").slider("values", 0) +
            " - $" + $(".slider-range").slider("values", 1));


        /* --------------------------------------------------------
            33. Quantity plus minus
        -------------------------------------------------------- */
        $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
        $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            }
            else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                }
                else {
                    newVal = 0;
                }
            }
            $button.parent().find("input").val(newVal);
        });


        /* --------------------------------------------------------
            34. scrollUp active
        -------------------------------------------------------- */
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });


        /* --------------------------------------------------------
            35. Parallax active ( About Section  )
        -------------------------------------------------------- */
        /* 
        > 1 page e 2 ta call korle 1 ta kaj kore 
        */
        if ($('.ltn__parallax-effect-active').length) {
            var scene = $('.ltn__parallax-effect-active').get(0);
            var parallaxInstance = new Parallax(scene);
        }


        /* --------------------------------------------------------
            36. Testimonial Slider 4
        -------------------------------------------------------- */
        var ltn__testimonial_quote_slider = $('.ltn__testimonial-slider-4-active');
        ltn__testimonial_quote_slider.slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: true,
            fade: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        });

        /* have to write code for bind it with static images */
        ltn__testimonial_quote_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var liIndex = nextSlide + 1;
            var slideImageliIndex = (slick.slideCount == liIndex) ? liIndex - 1 : liIndex;
            var cart = $('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + slideImageliIndex + '"]').find('.ltn__testimonial-image');
            var imgtodrag = $('.ltn__testimonial-quote-menu li:nth-child(' + liIndex + ')').find("img").eq(0);
            if (imgtodrag) {
                AnimateTestimonialImage(imgtodrag, cart)
            }
        });

        /* have to write code for bind static image to slider accordion to slide index of images */
        $(document).on('click', '.ltn__testimonial-quote-menu li', function (e) {
            var el = $(this);
            var elIndex = el.prevAll().length;
            ltn__testimonial_quote_slider.slick('slickGoTo', elIndex);
            var cart = $('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + elIndex + '"]').find('.ltn__testimonial-image');
            var imgtodrag = el.find("img").eq(0);
            if (imgtodrag) {
                AnimateTestimonialImage(imgtodrag, cart)
            }

        });



        function AnimateTestimonialImage(imgtodrag, cart) {
            var imgclone = imgtodrag.clone().offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            }).css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '130px',
                'width': '130px',
                'z-index': '100'
            }).addClass('quote-animated-image').appendTo($('body')).animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 130,
                'height': 130
            }, 300);


            imgclone.animate({
                'visibility': 'hidden',
                'opacity': '0'
            }, function () {
                $(this).remove()
            });
        }


        /* --------------------------------------------------------
            Newsletter Popup
        -------------------------------------------------------- */
        $('#ltn__newsletter_popup').modal('show');




    });


    /* --------------------------------------------------------
        36. Header menu sticky
    -------------------------------------------------------- */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".ltn__header-sticky").removeClass("sticky-active");
        } else {
            $(".ltn__header-sticky").addClass("sticky-active");
        }
    });


    $(window).on('load', function () {
        /*-----------------
            preloader
        ------------------*/
        if ($('#preloader').length) {
            var preLoder = $("#preloader");
            preLoder.fadeOut(1000);

        };


    });



    /* --------------------------------------------------------
        Dynamic Services Fetching
    -------------------------------------------------------- */
    // const API_BASE_URL = 'http://localhost:3000/api/v1';

    async function fetchServices() {
        const container = $('#services-container');
        const loading = $('#services-loading');
        const error = $('#services-error');

        if (!container.length) return;

        try {
            console.log('Fetching services from: https://jusmoto.blackitechs.in/api/v1/services?type=0');
            const response = await fetch('https://jusmoto.blackitechs.in/api/v1/services?type=0');

            if (!response.ok) {
                console.error(`API Error: ${response.status} ${response.statusText}`);
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            console.log('Services API Plain Response:', data);

            // Robustly extract services array
            const services = data.data || (Array.isArray(data) ? data : []);
            console.log('Extracted Services Array:', services);

            if (services.length === 0) {
                console.warn('No services found in the API response.');
            }

            renderServices(services);
            loading.addClass('d-none');
            error.addClass('d-none');
        } catch (err) {
            console.error('Error fetching services:', err);

            if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
                console.error('CRITICAL: Failed to fetch. Check if the backend server (port 3000) is running AND if CORS is enabled.');
                error.find('p').text('Connection failed. Please check if the API server is running and CORS is enabled.');
            }

            loading.addClass('d-none');
            error.removeClass('d-none');
        }
    }

    function renderServices(services) {
        const container = $('#services-container');
        const layoutStyle = container.data('layout') || 'style-1';
        let html = '';

        services.forEach(service => {
            const currentPrice = service.discountPrice || service.discount_price;
            const originalPrice = service.price || service.original_price;

            let priceHtml = '';
            if (currentPrice && originalPrice) {
                priceHtml = `<span>₹${currentPrice}</span> <del>₹${originalPrice}</del>`;
            } else {
                priceHtml = `<span>₹${currentPrice || originalPrice}</span>`;
            }

            const categoryName = (service.category && typeof service.category === 'object')
                ? service.category.name
                : (service.category || '');

    var totalSlides = services.length;
    var vc          = getVisible(); /* from your existing carousel JS */

    var realHTML  = '';
    var leadHTML  = '';
    var trailHTML = '';

    for (var i = 0; i < services.length; i++) {
        var s             = services[i];
        var num           = (i + 1) < 10 ? '0' + (i + 1) : '' + (i + 1);
        var img           = s.image || 'img/slider/slider-banner-service-1.jpg';
        var desc          = s.description || '';
        if (desc.length > 130) desc = desc.substring(0, 130) + '…';

        var currentPrice  = s.discountPrice || s.discount_price || '';
        var originalPrice = s.price         || s.original_price || '';

        var priceHtml = '';
        if (currentPrice && originalPrice) {
            priceHtml = '<div class="svc-price"><span class="svc-price-now">&#8377;' + currentPrice + '</span>' +
                        '<del class="svc-price-old">&#8377;' + originalPrice + '</del></div>';
        } else if (currentPrice || originalPrice) {
            priceHtml = '<div class="svc-price"><span class="svc-price-now">&#8377;' + (currentPrice || originalPrice) + '</span></div>';
        }

        var card = '<div class="ltn__service-item-1">' +
                       '<div class="svc-img-wrap">' +
                           '<img src="' + img + '" alt="' + s.title + '" loading="lazy">' +
                       '</div>' +
                       '<div class="svc-body">' +
                           '<div class="svc-header">' +
                               '<h3><a href="service_details.html?id=' + s.id + '">' + s.title + '</a></h3>' +
                               '<span class="svc-num">' + num + '</span>' +
                           '</div>' +
                           '<p>' + desc + '</p>' +
                           priceHtml +
                       '</div>' +
                   '</div>';

        realHTML += '<div class="service-carousel-slide">' + card + '</div>';
    }

    /* leading clones = last vc slides */
    for (var l = services.length - vc; l < services.length; l++) {
        var ln  = (l + 1) < 10 ? '0' + (l + 1) : '' + (l + 1);
        var ls  = services[l];
        var li  = ls.image || 'img/slider/slider-banner-service-1.jpg';
        var ld  = ls.description || '';
        if (ld.length > 130) ld = ld.substring(0, 130) + '…';
        var lcp = ls.discountPrice || ls.discount_price || '';
        var lop = ls.price         || ls.original_price || '';
        var lph = '';
        if (lcp && lop) lph = '<div class="svc-price"><span class="svc-price-now">&#8377;' + lcp + '</span><del class="svc-price-old">&#8377;' + lop + '</del></div>';
        else if (lcp || lop) lph = '<div class="svc-price"><span class="svc-price-now">&#8377;' + (lcp || lop) + '</span></div>';
        leadHTML += '<div class="service-carousel-slide clone">' +
                        '<div class="ltn__service-item-1">' +
                            '<div class="svc-img-wrap"><img src="' + li + '" alt="' + ls.title + '" loading="lazy"></div>' +
                            '<div class="svc-body"><div class="svc-header"><h3><a href="service_details.html?id=' + ls.id + '">' + ls.title + '</a></h3><span class="svc-num">' + ln + '</span></div><p>' + ld + '</p>' + lph + '</div>' +
                        '</div>' +
                    '</div>';
    }

    /* trailing clones = first vc slides */
    for (var t = 0; t < vc; t++) {
        var tn  = (t + 1) < 10 ? '0' + (t + 1) : '' + (t + 1);
        var ts  = services[t];
        var ti  = ts.image || 'img/slider/slider-banner-service-1.jpg';
        var td  = ts.description || '';
        if (td.length > 130) td = td.substring(0, 130) + '…';
        var tcp = ts.discountPrice || ts.discount_price || '';
        var top = ts.price         || ts.original_price || '';
        var tph = '';
        if (tcp && top) tph = '<div class="svc-price"><span class="svc-price-now">&#8377;' + tcp + '</span><del class="svc-price-old">&#8377;' + top + '</del></div>';
        else if (tcp || top) tph = '<div class="svc-price"><span class="svc-price-now">&#8377;' + (tcp || top) + '</span></div>';
        trailHTML += '<div class="service-carousel-slide clone">' +
                         '<div class="ltn__service-item-1">' +
                             '<div class="svc-img-wrap"><img src="' + ti + '" alt="' + ts.title + '" loading="lazy"></div>' +
                             '<div class="svc-body"><div class="svc-header"><h3><a href="service_details.html?id=' + ts.id + '">' + ts.title + '</a></h3><span class="svc-num">' + tn + '</span></div><p>' + td + '</p>' + tph + '</div>' +
                         '</div>' +
                     '</div>';
    }

    track.innerHTML = leadHTML + realHTML + trailHTML;

    /* set slide widths in px */
    var vp = document.getElementById('serviceViewport') || track.parentElement;
    var sw = vp.offsetWidth / vc;
    var slides = document.querySelectorAll('.service-carousel-slide');
    for (var x = 0; x < slides.length; x++) {
        slides[x].style.width = sw + 'px';
    }

    /* position at first real slide */
    track.style.transition = 'none';
    track.style.transform  = 'translateX(-' + (vc * sw) + 'px)';

    /* re-init dots and auto if your carousel exposes these */
    if (typeof makeDots   === 'function') makeDots(totalSlides);
    if (typeof startAuto  === 'function') startAuto();
    if (typeof buildDots  === 'function') buildDots(totalSlides);
    if (typeof initSlider === 'function') initSlider();
}

function getVisible() {
    var w = window.innerWidth;
    if (w <= 480) return 1;
    if (w <= 767) return 2;
    return 3;
}



    /* --------------------------------------------------------
        Dynamic Products Fetching (Car Best Deals)
    -------------------------------------------------------- */
    async function fetchProducts() {
        const tabMenu = $('#product-category-tabs');
        const tabContent = $('#product-tab-content');
        const loading = $('#products-loading');
        const tabsLoading = $('#products-tabs-loading');
        const error = $('#products-error');

        if (!tabMenu.length || !tabContent.length) return;

        try {
            console.log('Fetching products from: https://jusmoto.blackitechs.in/api/v1/services?type=1');
            const response = await fetch('https://jusmoto.blackitechs.in/api/v1/services?type=1');

            if (!response.ok) {
                console.error(`API Error: ${response.status} ${response.statusText}`);
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            console.log('Products API Plain Response:', data);

            // Robustly extract products array
            const products = data.data || (Array.isArray(data) ? data : []);
            console.log('Extracted Products Array:', products);

            if (products.length === 0) {
                console.warn('No products found in the API response.');
                loading.addClass('d-none');
                error.removeClass('d-none').find('p').text('No products found.');
                return;
            }

            // Group products by category
            const groupedProducts = products.reduce((acc, product) => {
                // Check if category is an object and extract name, otherwise use category string or 'Other'
                const category = (product.category && typeof product.category === 'object')
                    ? product.category.name
                    : (product.category || 'Other');

                if (!acc[category]) acc[category] = [];
                acc[category].push(product);
                return acc;
            }, {});

            const categories = Object.keys(groupedProducts);

            if (categories.length === 0) {
                loading.addClass('d-none');
                error.removeClass('d-none').find('p').text('No products categories found.');
                return;
            }

            renderProductTabs(categories);
            renderProductsByCategory(groupedProducts);

            loading.addClass('d-none');
            tabsLoading.addClass('d-none');
            error.addClass('d-none');

            // Initialize Slick sliders for dynamic content
            initDynamicProductSliders();

        } catch (err) {
            console.error('Error fetching products:', err);

            if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
                console.error('CRITICAL: Failed to fetch products. Check CORS and server status.');
            }

            loading.addClass('d-none');
            tabsLoading.addClass('d-none');
            error.removeClass('d-none');
        }
    }

    function renderProductTabs(categories) {
        const tabMenu = $('#product-category-tabs');
        let html = '';

        categories.forEach((category, index) => {
            const isActive = index === 0 ? 'active show' : '';
            const categoryId = category.toLowerCase().replace(/\s+/g, '_');
            html += `<a class="${isActive}" data-bs-toggle="tab" href="#tab_${categoryId}">${category}</a>`;
        });

        tabMenu.html(html);
    }

    function renderProductsByCategory(groupedProducts) {
        const tabContent = $('#product-tab-content');
        let html = '';

        Object.entries(groupedProducts).forEach(([category, products], index) => {
            const isActive = index === 0 ? 'active show' : '';
            const categoryId = category.toLowerCase().replace(/\s+/g, '_');

            html += `
                <div class="tab-pane fade ${isActive}" id="tab_${categoryId}">
                    <div class="ltn__product-tab-content-inner">
                        <div class="row ltn__tab-product-slider-one-active slick-arrow-1">
                            ${products.map(product => renderSingleProduct(product)).join('')}
                        </div>
                    </div>
                </div>
            `;
        });

        tabContent.html(html);
    }

    function renderSingleProduct(product) {
        const currentPrice = product.discountPrice || product.discount_price;
        const originalPrice = product.price || product.original_price;
        const badge = product.badge || 'New';
        const identifier = product.slug || product.id;

        let priceHtml = '';
        if (currentPrice && originalPrice) {
            priceHtml = `<span>₹${currentPrice}</span> <del>₹${originalPrice}</del>`;
        } else {
            priceHtml = `<span>₹${currentPrice || originalPrice}</span>`;
        }

        return `
            <div class="col-lg-12">
                <div class="ltn__product-item ltn__product-item-3 text-center">
                    <div class="product-img">
                        <a href="product-details.html?id=${identifier}"><img src="${product.image || 'img/product/1.png'}" alt="${product.title}"></a>
                        <div class="product-badge">
                            <ul>
                                <li class="sale-badge">${badge}</li>
                            </ul>
                        </div>
                        <div class="product-hover-action">
                            <ul>
                            
                                <li>
                                    <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal" data-product-id="${identifier}">
                                        <i class="fas fa-shopping-cart"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal" data-product-id="${identifier}">
                                        <i class="far fa-heart"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-info">
                       
                        <h2 class="product-title"><a href="product-details.html?id=${identifier}">${product.title}</a></h2>
                        <div class="product-price">
                            ${priceHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function initDynamicProductSliders() {
        $('.ltn__tab-product-slider-one-active').not('.slick-initialized').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: true,
                        dots: true,
                        slidesToShow: 1, // Fix: Changed to 1 for mobile for better layout
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // Initialize services and products if containers exist
    if ($('#services-container').length) {
        fetchServices();
    }
    if ($('#product-category-tabs').length) {
        fetchProducts();
    }

})(jQuery);


/* ============================================================
    API BASE URL
============================================================ */
var API_BASE = 'https://jusmoto.blackitechs.in/api/v1';


/* ============================================================
    SHARED HELPER: Generate Star Icons from rating (0-5)
============================================================ */
function generateStarIcons(rating) {
    return '';
}

/* ============================================================
    SHARED HELPER: Calculate discount badge
    e.g. price=6500, discount_price=5800 → "Sale -11%"
============================================================ */
function getBadgeLabel(price, discountPrice) {
    var p = parseFloat(price);
    var d = parseFloat(discountPrice);
    if (!p || !d || d >= p) return null;
    var percent = Math.round(((p - d) / p) * 100);
    return 'Sale -' + percent + '%';
}





/* ============================================================
    39. Shop Page Products Fetching (shop.html)
    Requires: #liton_product_grid and #liton_product_list in HTML
    Products auto-populate grid & list view with API data
    Pagination & sorting also handled dynamically
============================================================ */
async function fetchShopProducts(page, sortBy) {
    page = page || 1;
    sortBy = sortBy || '';

    var gridContainer = $('#liton_product_grid .ltn__product-grid-view .row');
    var listContainer = $('#liton_product_list .ltn__product-list-view .row');

    if (!gridContainer.length) return;

    gridContainer.html(`
        <div class="col-12 text-center py-60">
            <div class="spinner-border" role="status" style="width:3rem;height:3rem;border-color:#ff5a00;border-right-color:transparent;"></div>
            <p class="mt-15">Loading products...</p>
        </div>`);
    listContainer.html('');

    try {
        var url = API_BASE + '/services?type=1&page=' + page;
        var response = await fetch(url);
        if (!response.ok) throw new Error('API Error: ' + response.status);

        var data = await response.json();
        var products = Array.isArray(data.data) ? data.data : [];

        console.log('Pagination from API:', data.pagination); // check this in browser console

        var pagination = data.pagination || {};

        // If API doesn't return pagination, build it manually
        if (!pagination.totalPages) {
            var perPage = 12; // adjust to however many your API returns per page
            var totalCount = pagination.total || products.length;
            pagination = {
                total: totalCount,
                totalPages: Math.ceil(totalCount / perPage) || 1,
                page: page,
                hasPrevPage: page > 1,
                hasNextPage: page < Math.ceil(totalCount / perPage)
            };
        }

        if (products.length === 0) {
            gridContainer.html('<div class="col-12 text-center py-40"><p>No products found.</p></div>');
            listContainer.html('');
            updateShowingText(pagination, 0);
            return;
        }

        // ── CLIENT-SIDE SORTING ──
        if (sortBy === 'price_asc') {
            products.sort(function (a, b) {
                var aPrice = parseFloat(a.discount_price || a.price || 0);
                var bPrice = parseFloat(b.discount_price || b.price || 0);
                return aPrice - bPrice;
            });
        } else if (sortBy === 'price_desc') {
            products.sort(function (a, b) {
                var aPrice = parseFloat(a.discount_price || a.price || 0);
                var bPrice = parseFloat(b.discount_price || b.price || 0);
                return bPrice - aPrice;
            });
        } else if (sortBy === 'newest') {
            products.sort(function (a, b) {
                return new Date(b.created_at || 0) - new Date(a.created_at || 0);
            });
        } else if (sortBy === 'popularity') {
            products.sort(function (a, b) {
                return parseFloat(b.average_rating || 0) - parseFloat(a.average_rating || 0);
            });
        }

        gridContainer.html(products.map(p => renderShopGridCard(p)).join(''));
        listContainer.html(products.map(p => renderShopListCard(p)).join(''));

        renderShopPagination(pagination, page);
        updateShowingText(pagination, products.length);

    } catch (err) {
        console.error('Error fetching shop products:', err);
        gridContainer.html(`
            <div class="col-12 text-center py-40">
                <p class="text-danger">Failed to load products. Please try again.</p>
                <button class="btn theme-btn-1 mt-10" onclick="fetchShopProducts()">Retry</button>
            </div>`);
        listContainer.html('');
    }
}

/* -- Shop: Grid Card -- */
function renderShopGridCard(product) {
    var price = parseFloat(product.price || 0);
    var discPrice = parseFloat(product.discount_price || 0);
    var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
    var hasDiscount = discPrice > 0 && discPrice < price;
    var badge = getBadgeLabel(price, discPrice);
    var identifier = product.slug || product.id;

    var badgeHtml = badge
        ? `<div class="product-badge"><ul><li class="sale-badge">${badge}</li></ul></div>`
        : '';

    var priceHtml = hasDiscount
        ? `<span>₹${finalPrice.toFixed(2)}</span> <del>₹${price.toFixed(2)}</del>`
        : `<span>₹${finalPrice.toFixed(2)}</span>`;

    return `
            <div class="col-xl-3 col-lg-4 col-sm-6 col-6">
                <div class="ltn__product-item ltn__product-item-3 text-center">
                    <div class="product-img">
                        <a href="product-details.html?id=${identifier}">
                            <img src="${product.image || 'img/product/1.png'}" alt="${product.title}">
                        </a>
                        ${badgeHtml}
                        <div class="product-hover-action">
                            <ul>
                               
                                <li><a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal" data-product-id="${identifier}"><i class="fas fa-shopping-cart"></i></a></li>
                                <li><a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal" data-product-id="${identifier}"><i class="far fa-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-ratting">
                            <ul>${generateStarIcons(product.average_rating)}</ul>
                        </div>
                        <h2 class="product-title"><a href="product-details.html?id=${identifier}">${product.title}</a></h2>
                        <div class="product-price">${priceHtml}</div>
                    </div>
                </div>
            </div>`;
}

/* -- Shop: List Card -- */
function renderShopListCard(product) {
    var price = parseFloat(product.price || 0);
    var discPrice = parseFloat(product.discount_price || 0);
    var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
    var hasDiscount = discPrice > 0 && discPrice < price;
    var badge = getBadgeLabel(price, discPrice);
    var identifier = product.slug || product.id;

    var badgeHtml = badge
        ? `<div class="product-badge"><ul><li class="sale-badge">${badge}</li></ul></div>`
        : '';

    var priceHtml = hasDiscount
        ? `<span>₹${finalPrice.toFixed(2)}</span> <del>₹${price.toFixed(2)}</del>`
        : `<span>₹${finalPrice.toFixed(2)}</span>`;

    return `
            <div class="col-lg-12">
                <div class="ltn__product-item ltn__product-item-3">
                    <div class="product-img">
                        <a href="product-details.html?id=${identifier}">
                            <img src="${product.image || 'img/product/1.png'}" alt="${product.title}">
                        </a>
                        ${badgeHtml}
                    </div>
                    <div class="product-info">
                        <h2 class="product-title"><a href="product-details.html?id=${identifier}">${product.title}</a></h2>
                        <div class="product-ratting">
                            <ul>${generateStarIcons(product.average_rating)}</ul>
                        </div>
                        <div class="product-price">${priceHtml}</div>
                        <div class="product-brief"><p>${product.description || ''}</p></div>
                        <div class="product-hover-action">
                            <ul>
                               
                                <li><a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal" data-product-id="${identifier}"><i class="fas fa-shopping-cart"></i></a></li>
                                <li><a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal" data-product-id="${identifier}"><i class="far fa-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
}

/* -- Shop: Pagination -- */
function renderShopPagination(pagination, currentPage) {
    var total = pagination.totalPages || 1;
    var hasPrev = currentPage > 1;
    var hasNext = currentPage < total;

    // Always show pagination area
    $('.ltn__pagination-area').show();

    if (total <= 1) {
        $('.ltn__pagination').html('');
        return;
    }

    var html = '<ul>';
    html += '<li><a href="#" class="page-btn" data-page="' + (currentPage - 1) + '"' + (!hasPrev ? ' style="pointer-events:none;opacity:0.4"' : '') + '><i class="fas fa-angle-double-left"></i></a></li>';

    for (var i = 1; i <= total; i++) {
        if (total > 7 && i > 3 && i < total - 1 && Math.abs(i - currentPage) > 1) {
            if (i === 4) html += '<li><a href="#">...</a></li>';
            continue;
        }
        html += '<li class="' + (i === currentPage ? 'active' : '') + '"><a href="#" class="page-btn" data-page="' + i + '">' + i + '</a></li>';
    }

    html += '<li><a href="#" class="page-btn" data-page="' + (currentPage + 1) + '"' + (!hasNext ? ' style="pointer-events:none;opacity:0.4"' : '') + '><i class="fas fa-angle-double-right"></i></a></li>';
    html += '</ul>';

    $('.ltn__pagination').html(html);
}

/* -- Shop: Showing X of Y results -- */
function updateShowingText(pagination, count) {
    var total = pagination.total || count;
    $('.showing-product-number span').text('Showing ' + count + ' of ' + total + ' results');
}

/* -- Shop: Sort dropdown value → API param -- */
function getSortParam(label) {
    var map = {
        'Sort by popularity': 'popularity',
        'Sort by new arrivals': 'newest',
        'Sort by price: low to high': 'price_asc',
        'Sort by price: high to low': 'price_desc'
    };
    return map[label] || '';
}

/* -- Shop: Pagination click -- */
$(document).on('click', '.page-btn', function (e) {
    e.preventDefault();
    var page = parseInt($(this).data('page'));
    if (!page || page < 1) return;
    var sortLabel = $('.short-by select').val();
    fetchShopProducts(page, getSortParam(sortLabel));
    $('html, body').animate({ scrollTop: $('.ltn__product-area').offset().top - 80 }, 400);
});

/* -- Shop: Sort dropdown change (nice-select compatible) -- */
$(document).on('click', '.short-by .nice-select .option', function () {
    var sortValue = $(this).data('value');
    fetchShopProducts(1, sortValue);
});

/* -- Also keep the regular change handler as fallback -- */
$(document).on('change', '#sort-select', function () {
    fetchShopProducts(1, $(this).val());
});


/* ============================================================
    40. Product Details Page Fetching (product-details.html)
    Reads ?id= or ?slug= from URL and calls /api/v1/services/:id
    Populates: title, price, images, rating, category,
               description, reviews, FAQs, specs, includes
============================================================ */
function getProductIdentifier() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || params.get('slug') || null;
}

async function fetchProductDetails() {
    var identifier = getProductIdentifier();
    if (!identifier) {
        console.error('No product ID/slug in URL.');
        showProductError('Product not found.');
        return;
    }

    showProductLoading(true);

    try {
        var response = await fetch(API_BASE + '/services/' + identifier);
        if (!response.ok) throw new Error('API Error: ' + response.status);

        var data = await response.json();
        var product = data.data || data;

        if (!product || !product.id) throw new Error('Invalid product data.');

        renderProductDetails(product);
        renderProductReviews(product.reviews || [], product.average_rating || 0);
        renderProductFAQs(product.faqs || []);
        renderProductSpecifications(product.specifications || []);
        renderProductIncludes(product.includes || []);

        // ── SET CURRENT PRODUCT FOR CART/WISHLIST ──
        currentProduct = product;

        showProductLoading(false);

    } catch (err) {
        console.error('Error fetching product details:', err);
        showProductLoading(false);
        showProductError('Failed to load product. Please try again.');
    }
}

function renderProductDetails(product) {
    // Title
    $('.ltn__shop-details-inner h3').text(product.title || 'Product');
    $('.ltn__breadcrumb-title').text(product.title || 'Product');

    // Price
    var price = parseFloat(product.price || 0);
    var discPrice = parseFloat(product.discount_price || 0);
    var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
    var hasDiscount = discPrice > 0 && discPrice < price;

    var priceHtml = hasDiscount
        ? `<span>₹${finalPrice.toFixed(2)}</span> <del>₹${price.toFixed(2)}</del>`
        : `<span>₹${finalPrice.toFixed(2)}</span>`;

    $('.modal-product-info .product-price, .shop-details-info .product-price').html(priceHtml);

    // Rating
    var avgRating = parseFloat(product.average_rating || 0);
    var reviewCount = (product.reviews || []).length || product.review_count || 0;
    $('.modal-product-info .product-ratting ul').html(
        generateStarIcons(avgRating) +
        `<li class="review-total"><a href="#"> ( ${reviewCount} Reviews )</a></li>`
    );

    // Category
    var categoryName = (product.category && typeof product.category === 'object')
        ? product.category.name : (product.category || 'General');
    $('.modal-product-info .modal-product-meta span').html(`<a href="#">${categoryName}</a>`);

    // Description
    if (product.description) {
        $('#liton_tab_details_1_1 .ltn__shop-details-tab-content-inner').html(`
                <h4 class="title-2">${product.title}</h4>
                <p>${product.description}</p>`);
    }

    // Images
    renderProductImages(product);
}

function renderProductImages(product) {
    var largeImgContainer = $('.ltn__shop-details-large-img');
    var smallImgContainer = $('.ltn__shop-details-small-img');
    if (!largeImgContainer.length) return;

    var images = [];
    if (product.image) images.push(product.image);
    if (product.gallery_images && Array.isArray(product.gallery_images)) {
        product.gallery_images.forEach(function (img) {
            var url = typeof img === 'object' ? (img.url || img.image) : img;
            if (url && !images.includes(url)) images.push(url);
        });
    }

    if (images.length === 0) return;

    // Destroy existing slick before re-init
    if (largeImgContainer.hasClass('slick-initialized')) largeImgContainer.slick('unslick');
    if (smallImgContainer.hasClass('slick-initialized')) smallImgContainer.slick('unslick');

    var largeHtml = '', smallHtml = '';
    images.forEach(function (imgUrl) {
        largeHtml += `<div class="single-large-img"><a href="${imgUrl}" data-rel="lightcase:myCollection"><img src="${imgUrl}" alt="Product Image"></a></div>`;
        smallHtml += `<div class="single-small-img"><img src="${imgUrl}" alt="Product Image"></div>`;
    });

    largeImgContainer.html(largeHtml);
    smallImgContainer.html(smallHtml);

    // Re-init slick
    largeImgContainer.slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.ltn__shop-details-small-img' });
    smallImgContainer.slick({
        slidesToShow: 4, slidesToScroll: 1, asNavFor: '.ltn__shop-details-large-img',
        dots: false, arrows: true, focusOnSelect: true,
        prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right"></i></a>'
    });

    // Re-init lightcase
    $('a[data-rel^=lightcase]').lightcase({ transition: 'elastic', swipe: true, maxWidth: 1170, maxHeight: 600 });
}

function renderProductReviews(reviews, avgRating) {
    var reviewsTab = $('#liton_tab_details_1_2 .ltn__shop-details-tab-content-inner');
    if (!reviewsTab.length) return;

    reviewsTab.find('.product-ratting ul').first().html(
        generateStarIcons(avgRating) +
        `<li class="review-total"><a href="#"> ( ${reviews.length} Reviews )</a></li>`
    );

    var commentList = reviewsTab.find('.ltn__comment-inner ul');
    if (!commentList.length) return;

    if (reviews.length === 0) {
        commentList.html('<li><p>No reviews yet. Be the first to review!</p></li>');
        return;
    }

    var html = '';
    reviews.forEach(function (review) {
        var userName = (review.user && review.user.name) ? review.user.name : (review.name || 'Anonymous');
        var userImg = (review.user && review.user.avatar) ? review.user.avatar : 'img/testimonial/1.jpg';
        var comment = review.comment || review.review || '';
        var date = review.created_at ? new Date(review.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

        html += `
                <li>
                    <div class="ltn__comment-item clearfix">
                        <div class="ltn__commenter-img"><img src="${userImg}" alt="${userName}"></div>
                        <div class="ltn__commenter-comment">
                            <h6><a href="#">${userName}</a></h6>
                            <div class="product-ratting"><ul>${generateStarIcons(review.rating || 0)}</ul></div>
                            <p>${comment}</p>
                            <span class="ltn__comment-reply-btn">${date}</span>
                        </div>
                    </div>
                </li>`;
    });
    commentList.html(html);
}

function renderProductFAQs(faqs) {
    var faqContainer = $('#product-faqs-container');
    if (!faqContainer.length || faqs.length === 0) return;

    var html = '<div class="ltn__faq-inner ltn__faq-inner-2"><div id="accordion_faqs">';
    faqs.forEach(function (faq, index) {
        var collapseId = 'faq_item_' + index;
        var isShow = index === 0 ? 'show' : '';
        html += `
                <div class="card">
                    <h6 class="${index === 0 ? '' : 'collapsed'} ltn__card-title" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0}">
                        ${faq.question || faq.title || 'FAQ'}
                    </h6>
                    <div id="${collapseId}" class="collapse ${isShow}" data-bs-parent="#accordion_faqs">
                        <div class="card-body"><p>${faq.answer || faq.content || ''}</p></div>
                    </div>
                </div>`;
    });
    html += '</div></div>';
    faqContainer.html(html);
}

function renderProductSpecifications(specifications) {
    var specContainer = $('#product-specifications-container');
    if (!specContainer.length || specifications.length === 0) return;

    var html = '<table class="table"><tbody>';
    specifications.forEach(function (spec) {
        html += `<tr><th>${spec.key || spec.name || ''}</th><td>${spec.value || ''}</td></tr>`;
    });
    html += '</tbody></table>';
    specContainer.html(html);
}

function renderProductIncludes(includes) {
    var includesContainer = $('#product-includes-container');
    if (!includesContainer.length || includes.length === 0) return;

    var html = '<ul class="ltn__list-item-2 ltn__list-item-2-before">';
    includes.forEach(function (item) {
        var text = typeof item === 'object' ? (item.name || item.title || item.text) : item;
        html += `<li><i class="fas fa-check-circle"></i> ${text}</li>`;
    });
    html += '</ul>';
    includesContainer.html(html);
}

function showProductLoading(show) {
    if (show) {
        $('#product-details-loading').removeClass('d-none');
        $('.ltn__shop-details-inner').addClass('d-none');
    } else {
        $('#product-details-loading').addClass('d-none');
        $('.ltn__shop-details-inner').removeClass('d-none');
    }
}

function showProductError(message) {
    $('#product-details-error').removeClass('d-none').find('p').text(message);
    $('.ltn__shop-details-inner').addClass('d-none');
}


/* ============================================================
    Initialize all dynamic sections based on page containers
============================================================ */
// Home page: Services section
if ($('#services-container').length) {
    fetchServices();
}

// Home page: Products tab section
if ($('#product-category-tabs').length) {
    fetchProducts();
}

// Shop listing page
if ($('#liton_product_grid').length) {
    fetchShopProducts(1);
}

// Product details page
if ($('.ltn__shop-details-area').length) {
    fetchProductDetails();
}

// Expose globally for retry buttons / external use
window.fetchShopProducts = fetchShopProducts;
window.fetchProductDetails = fetchProductDetails;

// (jQuery); removed due to syntax error



// ─── PRODUCT DETAILS - API FETCH ──────────────────────────────────────────────

function generateStars(rating, maxStars = 5) {
    return "";
}

async function fetchProductDetails() {

    const params = new URLSearchParams(window.location.search);
    const idOrSlug = params.get("id") || params.get("slug");

    if (!idOrSlug) {
        console.warn("No product id or slug found in URL");
        return;
    }

    try {
        const response = await fetch(`https://jusmoto.blackitechs.in/api/v1/services/${idOrSlug}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const result = await response.json();
        if (!result.success) throw new Error("API returned unsuccessful response");
        populateProductDetails(result.data);
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}

function populateProductDetails(data) {
    // Gallery Images
    renderProductImages(data);

    // Title
    const titleEl = document.querySelector(".modal-product-info h3, .shop-details-info h3");
    if (titleEl) titleEl.textContent = data.title;

    // Price
    const priceContainer = document.querySelector(".product-price");
    if (priceContainer) {
        priceContainer.innerHTML = `
            <span>₹${parseFloat(data.final_price || data.discount_price || data.price).toFixed(2)}</span>
            ${data.discount_price && data.price !== data.discount_price
                ? `<del>₹${parseFloat(data.price).toFixed(2)}</del>`
                : ""}`;
    }

    // Star Rating Removed

    // Category
    const categorySpan = document.querySelector(".modal-product-meta span");
    if (categorySpan && data.category) {
        categorySpan.innerHTML = `<a href="#">${data.category.name}</a>`;
        if (data.subCategory) {
            categorySpan.innerHTML += ` <a href="#">${data.subCategory.name}</a>`;
        }
    }

    // Max Qty
    const qtyInput = document.querySelector(".cart-plus-minus-box");
    if (qtyInput) {
        qtyInput.value = 1;
        qtyInput.setAttribute('max', data.max_qty || 99);
    }


    // Description Tab
    const descTab = document.querySelector("#liton_tab_details_1_1 .ltn__shop-details-tab-content-inner");
    if (descTab) {
        let html = `<h4 class="title-2">${data.title}</h4><p>${data.description}</p>`;

        if (data.includes?.length > 0) {
            html += `<h5 class="mt-30">What's Included</h5><ul class="ltn__list-item-2">`;
            data.includes.forEach(item => { html += `<li><i class="fas fa-check-circle text-success"></i> ${item.title}</li>`; });
            html += `</ul>`;
        }
        if (data.excludes?.length > 0) {
            html += `<h5 class="mt-30 text-danger">Not Included</h5><ul class="ltn__list-item-2">`;
            data.excludes.forEach(item => { html += `<li><i class="fas fa-times-circle text-danger"></i> ${item.title}</li>`; });
            html += `</ul>`;
        }

        // Specifications Table
        if (data.specifications?.length > 0) {
            html += `<h5 class="mt-30">Specifications</h5><div class="table-responsive">
                    <table class="table table-bordered ltn__table-responsive">
                    <tbody>`;
            data.specifications.forEach(spec => { html += `<tr><th style="width: 30%; background: #f9f9f9;">${spec.title}</th><td>${spec.value}</td></tr>`; });
            html += `</tbody></table></div>`;
        }

        // FAQs
        if (data.faqs?.length > 0) {
            html += `<h5 class="mt-40">Frequently Asked Questions</h5>
                    <div class="ltn__faq-inner ltn__faq-inner-2 mt-20">
                        <div id="product_faq_accordion">`;
            data.faqs.forEach((faq, index) => {
                const itemId = `faq-item-${index + 1}`;
                html += `
                    <div class="card">
                        <h6 class="${index === 0 ? '' : 'collapsed'} ltn__card-title" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#${itemId}" 
                            aria-expanded="${index === 0 ? 'true' : 'false'}">
                            ${faq.question}
                        </h6>
                        <div id="${itemId}" class="collapse ${index === 0 ? 'show' : ''}" data-parent="#product_faq_accordion">
                            <div class="card-body">
                                <p>${faq.answer}</p>
                            </div>
                        </div>
                    </div>`;
            });
            html += `</div></div>`;
        }
        descTab.innerHTML = html;
    }

    // Sidebar Dynamic Content
    const sidebarInfoContainer = document.getElementById("sidebar-dynamic-info-container");
    if (sidebarInfoContainer && data.additional_info?.length > 0) {
        let sidebarHtml = "";
        data.additional_info.forEach(info => {
            sidebarHtml += `
                <div class="widget ltn__sidebar-dynamic-widget">
                    <h4 class="ltn__widget-title">${info.title}</h4>
                    <p style="font-size: 15px; line-height: 1.6;">${info.description}</p>
                </div>`;
        });
        sidebarInfoContainer.innerHTML = sidebarHtml;
    }

    // Reviews Tab
    const reviewsContainer = document.querySelector(".ltn__comment-inner ul");
    if (reviewsContainer) {
        if (data.reviews?.length > 0) {
            reviewsContainer.innerHTML = data.reviews.map(review => `
                <li>
                    <div class="ltn__comment-item clearfix">
                        <div class="ltn__commenter-img">
                            <img src="${review.user_image || 'img/testimonial/1.jpg'}" alt="${review.user_name}">
                        </div>
                        <div class="ltn__commenter-comment">
                            <h6><a href="#">${review.user_name}</a></h6>
                            <div class="product-ratting"><ul>${generateStars(review.rating)}</ul></div>
                            <p>${review.comment}</p>
                            <span class="ltn__comment-reply-btn">${new Date(review.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                    </div>
                </li>`).join("");
        } else {
            reviewsContainer.innerHTML = `<li><p>No reviews yet. Be the first to review!</p></li>`;
        }
    }

    // ── SET CURRENT PRODUCT FOR CART/WISHLIST ──
    currentProduct = data;

    // ── FETCH RELATED PRODUCTS ──  ← ADD THIS LINE
    if (data.category_id) {
        fetchRelatedProducts(data.category_id, data.id);
    }

    // ── Sync Cart UI ──
    updateProductCartUI(data);
}



/* ============================================================
    41. Related Products
============================================================ */
function getBadgeLabel(price, discPrice) {
    var p = parseFloat(price || 0);
    var d = parseFloat(discPrice || 0);
    if (d > 0 && d < p) {
        var pct = Math.round(((p - d) / p) * 100);
        return pct + '% Off';
    }
    return 'New';
}

function generateStarIcons(rating) {
    return '';
}

function renderRelatedProductCard(product) {
    var price = parseFloat(product.price || 0);
    var discPrice = parseFloat(product.discount_price || 0);

    // Only treat as discounted if discount_price is LESS than price
    var hasDiscount = discPrice > 0 && discPrice < price;
    var finalPrice = hasDiscount ? discPrice : price;
    var badgeLabel = getBadgeLabel(price, discPrice);
    var identifier = product.slug || product.id;

    var badgeHtml = '<div class="product-badge"><ul><li class="sale-badge">' + badgeLabel + '</li></ul></div>';

    var priceHtml = hasDiscount
        ? '<span>₹' + finalPrice.toFixed(2) + '</span> <del>₹' + price.toFixed(2) + '</del>'
        : '<span>₹' + finalPrice.toFixed(2) + '</span>';

    var imgSrc = (product.image && product.image !== 'null')
        ? product.image
        : 'img/product/1.png';  // fallback image

    return '<div class="col-lg-12">' +
        '<div class="ltn__product-item ltn__product-item-3 text-center">' +
        '<div class="product-img">' +
        '<a href="product-details.html?id=' + identifier + '">' +
        '<img src="' + imgSrc + '" alt="' + product.title + '">' +
        '</a>' +
        badgeHtml +
        '<div class="product-hover-action"><ul>' +

        '<li><a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal" data-product-id="' + identifier + '"><i class="fas fa-shopping-cart"></i></a></li>' +
        '<li><a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal" data-product-id="' + identifier + '"><i class="far fa-heart"></i></a></li>' +
        '</ul></div>' +
        '</div>' +
        '<div class="product-info">' +
        '<div class="product-ratting"><ul>' + generateStarIcons(product.average_rating) + '</ul></div>' +
        '<h2 class="product-title"><a href="product-details.html?id=' + identifier + '">' + product.title + '</a></h2>' +
        '<div class="product-price">' + priceHtml + '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
}

async function fetchRelatedProducts(categoryId, currentId) {
    var container = document.getElementById('related-products-container');
    if (!container || !categoryId) return;

    // Show loading spinner
    container.innerHTML = '<div class="col-12 text-center py-60">' +
        '<div class="spinner-border" role="status" style="width:3rem;height:3rem;border-color:#ff5a00;border-right-color:transparent;"></div>' +
        '<p class="mt-15">Loading related products...</p></div>';

    try {
        var relRes = await fetch(API_BASE + '/services?type=1&category_id=' + categoryId);
        if (!relRes.ok) throw new Error('API Error: ' + relRes.status);

        var relData = await relRes.json();
        var products = Array.isArray(relData.data) ? relData.data : [];

        // Exclude the current product
        products = products.filter(function (p) { return p.id !== currentId; });

        if (products.length === 0) {
            container.innerHTML = '<div class="col-12 text-center py-40"><p>No related products found.</p></div>';
            return;
        }

        // Render up to 6 products
        container.innerHTML = products.slice(0, 6)
            .map(function (p) { return renderRelatedProductCard(p); })
            .join('');

        // Re-init Slick slider
        var $slider = $('.ltn__related-product-slider-one-active');
        if ($slider.hasClass('slick-initialized')) $slider.slick('unslick');

        $slider.slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right"></i></a>',
            responsive: [
                { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 768, settings: { arrows: false, dots: true, slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 580, settings: { arrows: false, dots: true, slidesToShow: 2, slidesToScroll: 1 } }
            ]
        });

    } catch (err) {
        console.error('Error fetching related products:', err);
        container.innerHTML = '<div class="col-12 text-center py-40">' +
            '<p class="text-danger">Failed to load related products.</p>' +
            '<button class="btn theme-btn-1 mt-10" onclick="fetchRelatedProducts(' + categoryId + ',' + currentId + ')">Retry</button>' +
            '</div>';
    }
}

window.fetchRelatedProducts = fetchRelatedProducts;

/* ============================================================
    43. CART, WISHLIST & MINI CART — UNIFIED SYSTEM
    Single storage key: "cart" and "wishlist" everywhere
    item shape: { id, slug, title, price, image, quantity }
============================================================ */

var currentProduct = null;

/* ── Storage ── */
function getCart() { try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch (e) { return []; } }
function saveCart(c) { localStorage.setItem('cart', JSON.stringify(c)); }
function getWishlist() { try { return JSON.parse(localStorage.getItem('wishlist') || '[]'); } catch (e) { return []; } }
function saveWishlist(w) { localStorage.setItem('wishlist', JSON.stringify(w)); }

function addToCart(product, qty) {
    if (!product) return;
    qty = parseInt(qty) || 1;
    var maxQty = parseInt(product.max_qty) || 99;
    var price = parseFloat(product.discount_price || product.final_price || product.price || 0);
    var cart = getCart();
    var existing = cart.find(function (i) { return i.id === product.id; });

    if (existing) {
        var newQty = existing.quantity + qty;
        if (newQty > maxQty) {
            alert('Sorry! Only ' + maxQty + ' units available for "' + product.title + '".');
            existing.quantity = maxQty; // cap at max
        } else {
            existing.quantity = newQty;
        }
    } else {
        if (qty > maxQty) qty = maxQty;
        cart.push({
            id: product.id,
            slug: product.slug || '',
            title: product.title,
            price: price,
            image: product.image || 'img/product/1.png',
            quantity: qty,
            max_qty: maxQty  // store max_qty in cart item
        });
    }

    saveCart(cart);
    loadMiniCart();
    updateCartModal(product);
}

/* ── Add to Wishlist ── */
function addToWishlist(product) {
    if (!product) return;
    var wishlist = getWishlist();
    var already = !!wishlist.find(function (i) { return i.id === product.id; });
    if (!already) {
        wishlist.push({ id: product.id, slug: product.slug || '', title: product.title, price: parseFloat(product.discount_price || product.final_price || product.price || 0), image: product.image || 'img/product/1.png' });
        saveWishlist(wishlist);
        updateWishlistCount();
    }
    updateWishlistModal(product, already);
}

/* ── Update modals ── */
function updateCartModal(product) {
    var identifier = product.slug || product.id;
    $('#add_to_cart_modal .modal-product-img img').attr('src', product.image || 'img/product/1.png');
    $('#add_to_cart_modal .modal-product-info h5 a').text(product.title).attr('href', 'product-details.html?id=' + identifier);
    $('#add_to_cart_modal .modal-product-info .added-cart').html('<i class="fa fa-check-circle"></i> Successfully added to your Cart');
}
function updateWishlistModal(product, alreadyIn) {
    var identifier = product.slug || product.id;
    $('#liton_wishlist_modal .modal-product-img img').attr('src', product.image || 'img/product/1.png');
    $('#liton_wishlist_modal .modal-product-info h5 a').text(product.title).attr('href', 'product-details.html?id=' + identifier);
    $('#liton_wishlist_modal .modal-product-info .added-cart').html(
        alreadyIn ? '<i class="fa fa-info-circle"></i> Already in your Wishlist' : '<i class="fa fa-check-circle"></i> Successfully added to your Wishlist'
    );
}

/* ── Header badge counts ── */
function updateCartUI() {
    var count = getCart().reduce(function (s, i) { return s + i.quantity; }, 0);

    // Desktop Badge
    var el = document.getElementById('cartCount');
    if (el) el.innerText = count;

    // Mobile Header Badge
    var elMobile = document.getElementById('cartCountMobile');
    if (elMobile) elMobile.innerText = count;

    $('.mini-cart-item-count').text(count);

    // Update count in mobile menu/header options if they exist
    var mobileCartBadge = document.querySelector('.ltn__utilize-buttons .fas.fa-shopping-cart + sup');
    if (mobileCartBadge) mobileCartBadge.innerText = count;

    var headerCartBadge = document.querySelector('.mini-cart-icon sup');
    if (headerCartBadge) headerCartBadge.innerText = count;
}
function updateWishlistCount() {
    var count = getWishlist().length;
    $('.mini-wishlist-item-count').text(count);
    var el = document.getElementById('wishlistCount');
    if (el) el.innerText = count;
}

/* ── Mini Cart Sidebar ── */
function loadMiniCart() {
    var cart = getCart();
    var container = document.getElementById('miniCartContainer');
    var subtotalEl = document.querySelector('.mini-cart-sub-total span');
    if (container) {
        container.innerHTML = '';
        var subtotal = 0;
        cart.forEach(function (item, index) {
            subtotal += item.price * item.quantity;
            container.innerHTML +=
                '<div class="mini-cart-item clearfix">' +
                '<div class="mini-cart-img">' +
                '<a href="product-details.html?id=' + (item.slug || item.id) + '"><img src="' + item.image + '" alt="' + item.title + '"></a>' +
                '<span class="mini-cart-item-delete" onclick="removeFromCart(' + index + ')" style="cursor:pointer;"><i class="icon-cancel"></i></span>' +
                '</div>' +
                '<div class="mini-cart-info"><h6>' + item.title + '</h6>' +
                '<span class="mini-cart-quantity">' + item.quantity + ' x ' +
                '<span class="color-red" style="color:var(--ltn__secondary-color); font-weight:700;">₹' + item.price.toFixed(2) + '</span></span>' +
                '</div>' +
                '</div>';
        });
        if (subtotalEl) {
            subtotalEl.innerHTML = '<span class="color-red" style="color:var(--ltn__secondary-color); font-weight:700;">₹' + subtotal.toFixed(2) + '</span>';
        }

        // Update footer buttons if they exist
        var miniCartFooter = container.parentElement.querySelector('.mini-cart-footer');
        if (miniCartFooter) {
            var buttons = miniCartFooter.querySelectorAll('.btn-wrapper a');
            if (buttons.length >= 2) {
                buttons[0].setAttribute('href', 'Product-cart.html');
                buttons[1].setAttribute('href', 'product-checkout.html');
            }
        }
    }
    updateCartUI();
}

/* ── Remove from mini cart ── */
window.removeFromCart = function (index) {
    var cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadMiniCart();
    if (document.getElementById('cartTableBody')) loadCartPage();
}

/* ── Fetch product then add (shop/related/home cards) ── */
async function fetchAndActOnProduct(idOrSlug, action) {
    try {
        var res = await fetch(API_BASE + '/services/' + idOrSlug);
        if (!res.ok) throw new Error('API Error');
        var data = await res.json();
        var product = data.data || data;
        if (action === 'cart') { addToCart(product, 1); }
        else { addToWishlist(product); }
    } catch (err) { console.error('fetchAndActOnProduct error:', err); }
}

/* ── Cart Page ── */
function loadCartPage() {
    var cart = getCart();
    var tableBody = document.getElementById('cartTableBody');
    var cartTotalsSection = document.querySelector('.shoping-cart-total');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    if (cart.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;">🛒 Your cart is empty.</td></tr>';
        if (cartTotalsSection) cartTotalsSection.style.display = 'none';
        return;
    }
    if (cartTotalsSection) cartTotalsSection.style.display = 'block';
    var subtotal = 0;
    cart.forEach(function (item, index) {
        var price = parseFloat(item.price);
        var qty = parseInt(item.quantity);
        var lineTot = price * qty;
        subtotal += lineTot;
        tableBody.insertAdjacentHTML('beforeend',
            '<tr>' +
            '<td class="cart-product-remove" style="vertical-align:middle;">' +
            '<button class="cart-remove-btn" onclick="removeCartItem(' + index + ')" title="Remove item"><i class="fas fa-trash-alt"></i></button>' +
            '</td>' +
            '<td class="cart-product-image" style="vertical-align:middle;">' +
            '<img src="' + item.image + '" alt="' + item.title + '">' +
            '</td>' +
            '<td class="cart-product-info" style="vertical-align:middle;">' +
            '<h4 style="margin:0;font-size:15px;font-weight:600;line-height:1.4;">' + item.title + '</h4>' +
            '</td>' +
            '<td class="cart-product-price" style="vertical-align:middle;">₹' + price.toFixed(2) + '</td>' +
            '<td class="cart-product-quantity" style="vertical-align:middle;">' +
            '<div class="cart-qty-stepper">' +
            '<button class="qty-stepper-btn" onclick="updateQuantity(' + index + ', ' + Math.max(1, qty - 1) + ')" title="Decrease">−</button>' +
            '<input type="number" value="' + qty + '" min="1" class="cart-plus-minus-box" data-index="' + index + '">' +
            '<button class="qty-stepper-btn" onclick="updateQuantity(' + index + ', ' + (qty + 1) + ')" title="Increase">+</button>' +
            '</div>' +
            '</td>' +
            '<td class="cart-product-subtotal" style="vertical-align:middle;">₹' + lineTot.toFixed(2) + '</td>' +
            '</tr>'
        );
    });
    updateCartTotals(subtotal);
}

window.removeCartItem = function (index) {
    var cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCartPage();
    loadMiniCart();
}


window.updateQuantity = function (index, qty) {
    var cart = getCart();
    qty = parseInt(qty);
    if (isNaN(qty) || qty < 1) qty = 1;

    var maxQty = parseInt(cart[index].max_qty) || 99;
    if (qty > maxQty) {
        qty = maxQty;
        alert('Sorry! Only ' + maxQty + ' units available for this product.');
        // Reset the input visually
        var rows = document.querySelectorAll('#cartTableBody tr');
        if (rows[index]) {
            var input = rows[index].querySelector('.cart-plus-minus-box');
            if (input) input.value = maxQty;
        }
    }

    cart[index].quantity = qty;
    saveCart(cart);
    loadCartPage();
    loadMiniCart();
}

function recalculateCartTotal() {
    updateCartTotals(getCart().reduce(function (s, i) { return s + parseFloat(i.price) * parseInt(i.quantity); }, 0));
}

function updateCartTotals(subtotal) {
    var shipping = subtotal > 0 ? 15 : 0;
    var tbody = document.querySelector('.shoping-cart-total tbody');
    if (!tbody) return;
    tbody.innerHTML =
        '<tr><td>Cart Subtotal</td><td>₹' + subtotal.toFixed(2) + '</td></tr>' +
        '<tr><td>Shipping and Handling</td><td>₹' + shipping.toFixed(2) + '</td></tr>' +
        '<tr><td>Vat</td><td>₹0.00</td></tr>' +
        '<tr><td><strong>Order Total</strong></td><td><strong>₹' + (subtotal + shipping).toFixed(2) + '</strong></td></tr>';
}

/* ── Product Details Cart UI Sync ── */
function updateProductCartUI(product) {
    if (!product) return;
    var cart = getCart();
    var item = cart.find(function (i) { return i.id === product.id; });
    var initialState = document.getElementById('cart-state-initial');
    var addedState = document.getElementById('cart-state-added');
    var qtyVal = document.getElementById('current-product-qty');

    if (item) {
        if (initialState) initialState.style.display = 'none';
        if (addedState) addedState.style.display = 'flex';
        if (qtyVal) qtyVal.innerText = item.quantity;
    } else {
        if (initialState) initialState.style.display = 'block';
        if (addedState) addedState.style.display = 'none';
    }
}

window.updateCurrentProductQty = function (delta) {
    if (!currentProduct) return;
    var cart = getCart();
    var index = cart.findIndex(function (i) { return i.id === currentProduct.id; });
    if (index === -1) return;

    var newQty = cart[index].quantity + delta;
    if (newQty <= 0) {
        cart.splice(index, 1);
    } else {
        var maxQty = parseInt(currentProduct.max_qty) || 99;
        if (newQty > maxQty) {
            alert('Sorry! Only ' + maxQty + ' units available.');
            newQty = maxQty;
        }
        cart[index].quantity = newQty;
    }

    saveCart(cart);
    loadMiniCart();
    updateProductCartUI(currentProduct);
};


/* ── Checkout Page ── */
function renderCheckoutSummary() {
    var cart = getCart();
    var $tbody = $('.ltn__checkout-area .ltn__order-overview table tbody, #checkout-product-summary');
    if (!$tbody.length) return;
    if (cart.length === 0) {
        $tbody.html('<tr><td colspan="2">Your cart is empty. <a href="shop.html">Continue Shopping</a></td></tr>');
        return;
    }
    var html = '', subTotal = 0;
    cart.forEach(function (item) {
        var line = item.price * item.quantity;
        subTotal += line;
        html += '<tr><td class="ltn__product-title"><a href="product-details.html?id=' + (item.slug || item.id) + '">' + item.title + '</a> <strong class="product-quantity">× ' + item.quantity + '</strong></td><td class="ltn__product-total">₹' + line.toFixed(2) + '</td></tr>';
    });
    var shipping = subTotal > 0 ? 15 : 0;
    html += '<tr><td><strong>Cart Subtotal</strong></td><td><strong>₹' + subTotal.toFixed(2) + '</strong></td></tr>';
    html += '<tr><td><strong>Shipping</strong></td><td><strong>₹' + shipping.toFixed(2) + '</strong></td></tr>';
    html += '<tr><td><strong>Order Total</strong></td><td><strong>₹' + (subTotal + shipping).toFixed(2) + '</strong></td></tr>';
    $tbody.html(html);
}

/* ── Wishlist Page ── */
/* ── Wishlist Page ── */
function loadWishlistPage() {
    var wishlist = getWishlist();
    var tableBody = document.getElementById('wishlistTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    if (wishlist.length === 0) {
        tableBody.innerHTML =
            '<tr>' +
                '<td colspan="5">' +
                    '<div class="wishlist-empty-wrapper">' +
                        '<div class="wishlist-empty-state">' +
                            '<div class="empty-icon"><i class="far fa-heart"></i></div>' +
                            '<h3>Your Wishlist is Empty</h3>' +
                            '<p>Looks like you haven\'t added anything yet.</p>' +
                            '<a href="products.html" class="theme-btn-1 btn btn-effect-1 mt-3">Continue Shopping</a>' +
                        '</div>' +
                    '</div>' +
                '</td>' +
            '</tr>';
        return;
    }

    wishlist.forEach(function(item, index) {

        tableBody.innerHTML +=
            '<tr>' +

                /* 🔢 Serial Number — hidden on mobile via CSS */
                '<td class="cart-serial">' + (index + 1) + '</td>' +

                /* 🖼 Product Image */
                '<td class="cart-product-image">' +
                    '<a href="product-details.html?id=' + (item.slug || item.id) + '">' +
                        '<img src="' + item.image + '" alt="' + item.title + '" width="70">' +
                    '</a>' +
                '</td>' +

                /* 📦 Product Title */
                '<td class="cart-product-info">' +
                    '<h4>' +
                        '<a href="product-details.html?id=' + (item.slug || item.id) + '">' +
                            item.title +
                        '</a>' +
                    '</h4>' +
                '</td>' +

                /* 💰 Price */
                '<td class="cart-product-price">₹' + item.price.toFixed(2) + '</td>' +

                /* 🗑 Delete + Add to Cart */
                '<td class="cart-product-actions">' +

                    '<a class="submit-button-1" href="#" onclick="moveToCart(' + index + '); return false;">Add to Cart</a>' +

                    '<button onclick="removeFromWishlist(' + index + ')" ' +
                        'style="background:none;border:none;color:#ff3b3b;font-size:18px;cursor:pointer;">' +
                        '<i class="fas fa-trash"></i>' +
                    '</button>' +

                '</td>' +

            '</tr>';
    });
}


function removeFromWishlist(index) {
    var wishlist = getWishlist();
    wishlist.splice(index, 1);
    saveWishlist(wishlist);
    loadWishlistPage();
    updateWishlistCount();
}

window.moveToCart = function (index) {
    var wishlist = getWishlist();
    var product = wishlist[index];
    var cart = getCart();
    var existing = cart.find(function (i) { return i.id === product.id; });
    if (existing) { existing.quantity += 1; }
    else { cart.push({ id: product.id, slug: product.slug || '', title: product.title, price: product.price, image: product.image, quantity: 1 }); }
    saveCart(cart);
    wishlist.splice(index, 1);
    saveWishlist(wishlist);
    loadWishlistPage();
    loadMiniCart();
    updateWishlistCount();
}

/* ── SINGLE DOMContentLoaded for all page inits ── */
document.addEventListener('DOMContentLoaded', function () {
    loadMiniCart();
    updateWishlistCount();
    if (document.getElementById('top-rated-products-list')) fetchTopRatedProducts();
    if (document.getElementById('cartTableBody')) loadCartPage();
    if (document.getElementById('wishlistTableBody')) loadWishlistPage();
    if (document.querySelector('.ltn__checkout-area')) renderCheckoutSummary();

    /* Cart page: quantity input */
    document.addEventListener('input', function (e) {
        if (e.target.classList.contains('cart-plus-minus-box')) {
            var idx = e.target.getAttribute('data-index');
            if (idx !== null) updateQuantity(parseInt(idx), e.target.value);
        }
    });

    /* Cart page: +/- buttons */
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('qtybutton')) {
            setTimeout(function () {
                var input = e.target.parentElement.querySelector('.cart-plus-minus-box');
                if (!input) return;
                var idx = input.getAttribute('data-index');
                if (idx !== null) updateQuantity(parseInt(idx), input.value);
            }, 100);
        }
    });
});

/* ── jQuery click handlers ── */
$(document).ready(function () {
    /* Product Details: Add to Cart */
    $(document).on('click', '.ltn__product-details-menu-2 a[data-bs-target="#add_to_cart_modal"]', function () {
        if (!currentProduct) return;
        var qty = parseInt($('.cart-plus-minus-box').val()) || 1;
        addToCart(currentProduct, qty);
    });
    /* Product Details: Wishlist */
    $(document).on('click', '.ltn__product-details-menu-3 a[data-bs-target="#liton_wishlist_modal"]', function () {
        if (!currentProduct) return;
        addToWishlist(currentProduct);
    });
    /* Shop/Related/Home cards: Add to Cart */
    $(document).on('click', 'a[data-bs-target="#add_to_cart_modal"][data-product-id]', function () {
        var id = $(this).data('product-id');
        if (id) fetchAndActOnProduct(id, 'cart');
    });
    /* Shop/Related/Home cards: Wishlist */
    $(document).on('click', 'a[data-bs-target="#liton_wishlist_modal"][data-product-id]', function () {
        var id = $(this).data('product-id');
        if (id) fetchAndActOnProduct(id, 'wishlist');
    });
});


// ── Star Rating Helper (required by fetchTopRatedProducts) ──
function generateStars(rating) {
    return '<ul></ul>';
}

// ── Fetch & Render Featured (Top Rated) Products ──
async function fetchTopRatedProducts() {
    try {
        var response = await fetch('https://jusmoto.blackitechs.in/api/v1/services?type=1');
        var result = await response.json();
        if (!result.success) return;
        var container = document.getElementById('top-rated-products-list');
        if (!container) return;

        var list = result.data.filter(function (p) { return p.is_featured == 1; });

        container.innerHTML = '';
        list.forEach(function (product) {
            var identifier = product.slug || product.id;
            var imgSrc = product.image || 'img/product/1.png';
            var price = parseFloat(product.price || 0);
            var discPrice = parseFloat(product.discount_price || 0);
            var displayPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
            var hasDiscount = discPrice > 0 && discPrice < price;

            container.innerHTML +=
                '<li><div class="top-rated-product-item clearfix">' +
                '<div class="top-rated-product-img">' +
                '<a href="product-details.html?id=' + identifier + '">' +
                '<img src="' + imgSrc + '" alt="' + product.title + '">' +
                '</a>' +
                '</div>' +
                '<div class="top-rated-product-info">' +
                '<div class="product-ratting">' + generateStars(product.average_rating) + '</div>' +
                '<h6><a href="product-details.html?id=' + identifier + '">' + product.title + '</a></h6>' +
                '<div class="product-price">' +
                '<span>₹' + displayPrice.toFixed(2) + '</span>' +
                (hasDiscount ? '<del>₹' + price.toFixed(2) + '</del>' : '') +
                '</div>' +
                '<div class="product-hover-action">' +
                '<ul>' +
                '<li><a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal" data-product-id="' + identifier + '"><i class="fas fa-shopping-cart"></i></a></li>' +
                '<li><a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal" data-product-id="' + identifier + '"><i class="far fa-heart"></i></a></li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div></li>';
        });
    } catch (err) {
        console.error('Error fetching top rated products:', err);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('top-rated-products-list')) {
        fetchTopRatedProducts();
    }
});

/* ── Global exports ── */
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.removeFromCart = removeFromCart;
window.removeCartItem = removeCartItem;
window.removeFromWishlist = removeFromWishlist;
window.moveToCart = moveToCart;
window.updateQuantity = updateQuantity;
window.getCart = getCart;
window.getWishlist = getWishlist;
window.loadMiniCart = loadMiniCart;
window.loadCartPage = loadCartPage;
window.loadWishlistPage = loadWishlistPage;
window.renderCheckoutSummary = renderCheckoutSummary;
window.fetchRelatedProducts = fetchRelatedProducts;

/* ================================================================
   SHOP PAGE: SEARCH + CATEGORY FILTER
   Works with your existing fetchShopProducts() in main.js
================================================================ */

var API_PRODUCTS_URL = 'https://jusmoto.blackitechs.in/api/v1/services?type=1';

// ── Shared filter state ──
var shopFilter = {
    search: '',
    category: 'all',  // category id or 'all'
    maxPrice: 10000,
    page: 1,
    sort: ''
};

// ── Store all products locally for client-side filtering ──
var allShopProducts = [];
var shopCategories = {}; // { id: { name, count } }

/* ----------------------------------------------------------------
   INIT: Fetch all products once, build sidebar, render
---------------------------------------------------------------- */
async function initShopPage() {
    showShopLoading(true);

    try {
        var res = await fetch(API_PRODUCTS_URL);
        var json = await res.json();
        allShopProducts = Array.isArray(json.data) ? json.data : [];

        buildCategoryFilter();
        setMaxPrice();
        applyFiltersAndRender();

    } catch (err) {
        console.error('initShopPage error:', err);
        showShopError();
    }
}

/* ----------------------------------------------------------------
   BUILD CATEGORY SIDEBAR
---------------------------------------------------------------- */
function buildCategoryFilter() {
    shopCategories = { all: { name: 'All Products', count: allShopProducts.length } };

    allShopProducts.forEach(function (p) {
        if (p.category) {
            var id = p.category.id;
            var name = p.category.name;
            if (!shopCategories[id]) shopCategories[id] = { name: name, count: 0 };
            shopCategories[id].count++;
        }
    });

    var ul = document.getElementById('sidebar-category-list');
    if (!ul) return;

    var html = '<li class="active" data-cat="all" onclick="selectCategory(\'all\', this)">' +
        '<a>All Products <span class="cat-count-badge" id="cat-badge-all">' + shopCategories.all.count + '</span></a></li>';

    Object.entries(shopCategories).forEach(function (entry) {
        var id = entry[0];
        var cat = entry[1];
        if (id === 'all') return;
        html += '<li data-cat="' + id + '" onclick="selectCategory(\'' + id + '\', this)">' +
            '<a>' +
            '<span><i class="fas fa-chevron-right" style="font-size:10px;margin-right:6px;opacity:.5;"></i>' + cat.name + '</span>' +
            '<span class="cat-count-badge">' + cat.count + '</span>' +
            '</a>' +
            '</li>';
    });

    ul.innerHTML = html;
}

/* ----------------------------------------------------------------
   SET PRICE RANGE MAX FROM DATA
---------------------------------------------------------------- */
function setMaxPrice() {
    var maxP = Math.max.apply(null, allShopProducts.map(function (p) {
        return parseFloat(p.discount_price || p.price || 0);
    }));
    var rounded = Math.ceil((maxP || 10000) / 1000) * 1000;

    var range = document.getElementById('sidebarPriceRange');
    var label = document.getElementById('sidebarPriceLabel');
    if (range) { range.max = rounded; range.value = rounded; }
    if (label) label.textContent = 'Up to ₹' + rounded.toLocaleString('en-IN');
    shopFilter.maxPrice = rounded;
}

/* ----------------------------------------------------------------
   CATEGORY SELECT
---------------------------------------------------------------- */
window.selectCategory = function (catId, el) {
    document.querySelectorAll('#sidebar-category-list li').forEach(function (li) {
        li.classList.remove('active');
    });
    el.classList.add('active');
    shopFilter.category = catId;
    shopFilter.page = 1;
    applyFiltersAndRender();
    updateActiveFiltersUI();
};

/* ----------------------------------------------------------------
   SEARCH
---------------------------------------------------------------- */
function doShopSearch() {
    var val = document.getElementById('shopSearchInput').value.trim();
    shopFilter.search = val;
    shopFilter.page = 1;

    var clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) clearBtn.style.display = val ? 'inline-block' : 'none';

    applyFiltersAndRender();
    updateActiveFiltersUI();
}

window.clearShopSearch = function () {
    document.getElementById('shopSearchInput').value = '';
    shopFilter.search = '';
    document.getElementById('searchClearBtn').style.display = 'none';
    applyFiltersAndRender();
    updateActiveFiltersUI();
};

window.clearAllFilters = function () {
    // Reset state
    shopFilter.search = '';
    shopFilter.category = 'all';
    shopFilter.page = 1;

    // Reset UI
    document.getElementById('shopSearchInput').value = '';
    document.getElementById('searchClearBtn').style.display = 'none';

    // Reset category list
    document.querySelectorAll('#sidebar-category-list li').forEach(function (li) {
        li.classList.toggle('active', li.dataset.cat === 'all');
    });

    // Reset price
    var range = document.getElementById('sidebarPriceRange');
    if (range) {
        shopFilter.maxPrice = parseInt(range.max);
        range.value = range.max;
        document.getElementById('sidebarPriceLabel').textContent =
            'Up to ₹' + shopFilter.maxPrice.toLocaleString('en-IN');
    }

    applyFiltersAndRender();
    updateActiveFiltersUI();
};

/* ----------------------------------------------------------------
   FILTER + SORT + PAGINATE → RENDER
---------------------------------------------------------------- */
function applyFiltersAndRender() {
    var list = allShopProducts.slice(); // copy

    // 1. Category
    if (shopFilter.category !== 'all') {
        list = list.filter(function (p) {
            return p.category && String(p.category.id) === String(shopFilter.category);
        });
    }

    // 2. Search
    var q = shopFilter.search.toLowerCase();
    if (q) {
        list = list.filter(function (p) {
            return (p.title && p.title.toLowerCase().includes(q)) ||
                (p.description && p.description.toLowerCase().includes(q)) ||
                (p.category && p.category.name && p.category.name.toLowerCase().includes(q));
        });
    }

    // 3. Price
    list = list.filter(function (p) {
        var price = parseFloat(p.discount_price || p.price || 0);
        return price <= shopFilter.maxPrice;
    });

    // 4. Sort
    var sort = shopFilter.sort;
    if (sort === 'price_asc') {
        list.sort(function (a, b) {
            return parseFloat(a.discount_price || a.price || 0) - parseFloat(b.discount_price || b.price || 0);
        });
    } else if (sort === 'price_desc') {
        list.sort(function (a, b) {
            return parseFloat(b.discount_price || b.price || 0) - parseFloat(a.discount_price || a.price || 0);
        });
    } else if (sort === 'newest') {
        list.sort(function (a, b) { return new Date(b.created_at || 0) - new Date(a.created_at || 0); });
    } else if (sort === 'popularity') {
        list.sort(function (a, b) { return parseFloat(b.average_rating || 0) - parseFloat(a.average_rating || 0); });
    }

    // 5. Paginate
    var perPage = 12;
    var totalCount = list.length;
    var totalPages = Math.max(1, Math.ceil(totalCount / perPage));
    if (shopFilter.page > totalPages) shopFilter.page = 1;

    var start = (shopFilter.page - 1) * perPage;
    var paged = list.slice(start, start + perPage);

    // 6. Render
    renderFilteredProducts(paged, q);
    renderShopPaginationFiltered(totalPages, shopFilter.page);
    updateShowingText({ total: totalCount, totalPages: totalPages, page: shopFilter.page }, paged.length);
    showShopLoading(false);
}

/* ----------------------------------------------------------------
   RENDER PRODUCTS (reuses your existing helper functions)
---------------------------------------------------------------- */
function renderFilteredProducts(products, searchQuery) {
    // Use the correct container IDs from your HTML
    var gridContainer = document.querySelector('#liton_product_grid .ltn__product-grid-view .row');
    var listContainer = document.querySelector('#liton_product_list .ltn__product-list-view .row');

    if (!gridContainer) {
        // fallback to direct row ids
        gridContainer = document.getElementById('grid-product-row');
        listContainer = document.getElementById('list-product-row');
    }

    if (!gridContainer) return;

    if (products.length === 0) {
        var noResultsHtml = '<div class="col-12 no-products-found">' +
            '<i class="fas fa-search-minus"></i>' +
            '<h5>No products found</h5>' +
            '<p>Try adjusting your search term or selecting a different category.</p>' +
            '<button class="btn theme-btn-1 mt-10" onclick="clearAllFilters()">Clear Filters</button>' +
            '</div>';
        gridContainer.innerHTML = noResultsHtml;
        if (listContainer) listContainer.innerHTML = noResultsHtml;
        return;
    }

    // Use your existing renderShopGridCard / renderShopListCard if available
    if (typeof renderShopGridCard === 'function') {
        var gridHtml = products.map(function (p) {
            return highlightProductCard(renderShopGridCard(p), searchQuery);
        }).join('');
        var listHtml = products.map(function (p) {
            return highlightProductCard(renderShopListCard(p), searchQuery);
        }).join('');
        gridContainer.innerHTML = gridHtml;
        if (listContainer) listContainer.innerHTML = listHtml;
    }
}

/* ── Highlight search query in rendered card HTML ── */
function highlightProductCard(html, query) {
    if (!query) return html;
    // Only highlight inside product-title tags
    return html.replace(/(<h2 class="product-title">[\s\S]*?<\/h2>)/g, function (match) {
        var re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        return match.replace(re, '<mark style="background:rgba(255,90,0,.15);color:#ff5a00;border-radius:3px;padding:0 2px;">$1</mark>');
    });
}

/* ----------------------------------------------------------------
   PAGINATION (filtered version)
---------------------------------------------------------------- */
function renderShopPaginationFiltered(totalPages, currentPage) {
    var hasPrev = currentPage > 1;
    var hasNext = currentPage < totalPages;

    if (totalPages <= 1) {
        document.querySelector('.ltn__pagination').innerHTML = '';
        return;
    }

    var html = '<ul>';
    html += '<li><a href="#" class="filter-page-btn" data-page="' + (currentPage - 1) + '"' +
        (!hasPrev ? ' style="pointer-events:none;opacity:.4"' : '') + '><i class="fas fa-angle-double-left"></i></a></li>';

    for (var i = 1; i <= totalPages; i++) {
        if (totalPages > 7 && i > 3 && i < totalPages - 1 && Math.abs(i - currentPage) > 1) {
            if (i === 4) html += '<li><a href="#">...</a></li>';
            continue;
        }
        html += '<li class="' + (i === currentPage ? 'active' : '') + '">' +
            '<a href="#" class="filter-page-btn" data-page="' + i + '">' + i + '</a></li>';
    }

    html += '<li><a href="#" class="filter-page-btn" data-page="' + (currentPage + 1) + '"' +
        (!hasNext ? ' style="pointer-events:none;opacity:.4"' : '') + '><i class="fas fa-angle-double-right"></i></a></li>';
    html += '</ul>';

    document.querySelector('.ltn__pagination').innerHTML = html;
}

/* ----------------------------------------------------------------
   ACTIVE FILTERS INDICATOR
---------------------------------------------------------------- */
function updateActiveFiltersUI() {
    var widget = document.getElementById('activeFiltersWidget');
    var list = document.getElementById('activeFiltersList');
    if (!widget || !list) return;

    var chips = '';

    if (shopFilter.search) {
        chips += '<span class="active-filter-chip">Search: "' + shopFilter.search + '" ' +
            '<button onclick="clearShopSearch()"><i class="fas fa-times"></i></button></span>';
    }

    if (shopFilter.category !== 'all' && shopCategories[shopFilter.category]) {
        chips += '<span class="active-filter-chip">Category: ' + shopCategories[shopFilter.category].name + ' ' +
            '<button onclick="selectCategory(\'all\', document.querySelector(\'[data-cat=\\\"all\\\"]\')); updateActiveFiltersUI();"><i class="fas fa-times"></i></button></span>';
    }

    widget.style.display = chips ? 'block' : 'none';
    list.innerHTML = chips;
}

/* ----------------------------------------------------------------
   LOADING / ERROR STATES
---------------------------------------------------------------- */
function showShopLoading(show) {
    var gridContainer = document.querySelector('#liton_product_grid .ltn__product-grid-view .row') ||
        document.getElementById('grid-product-row');
    if (!gridContainer) return;
    if (show) {
        gridContainer.innerHTML = '<div class="col-12 text-center py-60">' +
            '<div class="spinner-border" role="status" style="width:3rem;height:3rem;border-color:#ff5a00;border-right-color:transparent;"></div>' +
            '<p class="mt-15">Loading products…</p></div>';
    }
}

function showShopError() {
    var gridContainer = document.querySelector('#liton_product_grid .ltn__product-grid-view .row') ||
        document.getElementById('grid-product-row');
    if (gridContainer) {
        gridContainer.innerHTML = '<div class="col-12 text-center py-40">' +
            '<p class="text-danger">Failed to load products. Please try again.</p>' +
            '<button class="btn theme-btn-1 mt-10" onclick="initShopPage()">Retry</button></div>';
    }
}

/* ----------------------------------------------------------------
   EVENT LISTENERS
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    // Initial UI load
    if (typeof loadMiniCart === 'function') loadMiniCart();
    if (typeof updateWishlistCount === 'function') updateWishlistCount();

    // Search: button click
    var searchBtn = document.getElementById('shopSearchBtn');
    if (searchBtn) searchBtn.addEventListener('click', doShopSearch);

    // Search: Enter key
    var searchInput = document.getElementById('shopSearchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') { doShopSearch(); return; }
            // Live search (debounced 350ms)
            clearTimeout(window._shopSearchDebounce);
            window._shopSearchDebounce = setTimeout(doShopSearch, 350);
        });
    }

    // Price range
    var priceRange = document.getElementById('sidebarPriceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function () {
            shopFilter.maxPrice = parseInt(this.value);
            var label = document.getElementById('sidebarPriceLabel');
            if (label) label.textContent = 'Up to ₹' + shopFilter.maxPrice.toLocaleString('en-IN');
            clearTimeout(window._priceDebounce);
            window._priceDebounce = setTimeout(function () {
                shopFilter.page = 1;
                applyFiltersAndRender();
                updateActiveFiltersUI();
            }, 300);
        });
    }

    // Sort select (nice-select: option click)
    $(document).on('click', '.short-by .nice-select .option', function () {
        shopFilter.sort = $(this).data('value');
        shopFilter.page = 1;
        applyFiltersAndRender();
    });

    // Sort select (native fallback)
    $(document).on('change', '#sort-select', function () {
        shopFilter.sort = $(this).val();
        shopFilter.page = 1;
        applyFiltersAndRender();
    });

    // Filtered pagination clicks
    $(document).on('click', '.filter-page-btn', function (e) {
        e.preventDefault();
        var page = parseInt($(this).data('page'));
        if (!page || page < 1) return;
        shopFilter.page = page;
        applyFiltersAndRender();
        $('html, body').animate({ scrollTop: $('.ltn__product-area').offset().top - 80 }, 400);
    });

    // Start
    if (document.getElementById('sidebar-category-list')) {
        initShopPage();
    }

    /* ── Global click listener for any button with data-product-id (shop/home/related) ── */
    $(document).on('click', '[data-product-id]', function (e) {
        var id = $(this).data('product-id');
        var isWishlist = $(this).attr('title') === 'Wishlist' || $(this).find('.fa-heart').length > 0;
        if (id) {
            if (typeof fetchAndActOnProduct === 'function') {
                fetchAndActOnProduct(id, isWishlist ? 'wishlist' : 'cart');
            }
        }
    });

    // Dynamic Add to Cart Button (Product Details)
    $(document).on('click', '.ltn__add-to-cart-btn-dynamic', function (e) {
        e.preventDefault();
        if (typeof currentProduct !== 'undefined' && currentProduct) {
            addToCart(currentProduct, 1);
            updateProductCartUI(currentProduct);
        }
    });

});


