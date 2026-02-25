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

(function($) {
  "use strict";

    jQuery(document).ready(function(){
      
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
        $('.mega-menu').each(function(){
            if($(this).children('li').length){
                var ulChildren = $(this).children('li').length;
                $(this).addClass('column-'+ulChildren)
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
        $( window ).on( 'elementor/frontend/init', function() {
            elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
                return scrollTop - 75;
            });
        });

        /* --------------------------------------------------------
            3-2. Category Menu
        --------------------------------------------------------- */

        $('.ltn__category-menu-title').on('click', function(){
            $('.ltn__category-menu-toggle').slideToggle(500);
        });	

        /* Category Menu More Item show */
        $('.ltn__category-menu-more-item-parent').on('click', function(){
            $('.ltn__category-menu-more-item-child').slideToggle();
            $(this).toggleClass('rx-change');

        });

        /* Category Submenu Column Count */
        $('.ltn__category-submenu').each(function(){
            if($(this).children('li').length){
                var ulChildren = $(this).children('li').length;
                $(this).addClass('ltn__category-column-no-'+ulChildren)
            }
        });

        /* Category Menu Responsive */
        function ltn__CategoryMenuToggle(){
            $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').on('click', function(){
            if($(window).width() < 991){
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
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
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
        $('.header-search-1').on('click', function() {
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
        $backgroundImage.each(function() {
            var $this = $(this),
                $bgImage = $this.data('bs-bg');
            $this.css('background-image', 'url('+$bgImage+')');
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
        ltn__active_item.mouseover(function() {
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
        $ltnGalleryFilterMenu.on( 'click', 'button, a', function() {
            var $this = $(this),
                $filterValue = $this.attr('data-filter');
            $ltnGalleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $ltnGalleryActive.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $ltnGalleryActive.each(function(){
            var $this = $(this),
                $galleryFilterItem = '.ltn__gallery-item';
            $this.imagesLoaded( function() {
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
        }).on('afterChange', function(){
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
        }).on('afterChange', function(){
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
        if($('.ltn__brand-logo-active').length){
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
        if($('.ltn__blog-gallery-active').length){
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
        if($('.ltn__instafeed').length){
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
        $( ".slider-range" ).slider({
            range: true,
            min: 50,
            max: 5000,
            values: [ 50, 1500 ],
            slide: function( event, ui ) {
                $( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
        " - $" + $( ".slider-range" ).slider( "values", 1 ) ); 


        /* --------------------------------------------------------
            33. Quantity plus minus
        -------------------------------------------------------- */
        $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
        $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function() {
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
        if($('.ltn__parallax-effect-active').length){
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
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".ltn__header-sticky").removeClass("sticky-active");
        } else {
            $(".ltn__header-sticky").addClass("sticky-active");
        }
    }); 


    $(window).on('load',function(){
        /*-----------------
            preloader
        ------------------*/
        if($('#preloader').length){
            var preLoder = $("#preloader");
            preLoder.fadeOut(1000);

        };


    });


  
    /* --------------------------------------------------------
        Dynamic Services Fetching
    -------------------------------------------------------- */
    /* --------------------------------------------------------
        Dynamic Services Fetching
    -------------------------------------------------------- */
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

            html += `
                <div class="col-xl-3 col-lg-3 col-md-6 col-12">
                    <div class="ltn__service-item-1">
                        <div class="service-item-img">
                            <img src="${service.image || 'img/slider/slider-banner-service-1.jpg'}" alt="${service.title}">
                        </div>
                        <div class="service-item-brief">
                            <h3><a href="service-details.html">${service.title}</a></h3>
                            <p>${service.description}</p>
                            <div class="product-price">
                                ${priceHtml}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        container.html(html);
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
                        <a href="product-details.html"><img src="${product.image || 'img/product/1.png'}" alt="${product.title}"></a>
                        <div class="product-badge">
                            <ul>
                                <li class="sale-badge">${badge}</li>
                            </ul>
                        </div>
                        <div class="product-hover-action">
                            <ul>
                                <li>
                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                        <i class="far fa-eye"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                        <i class="fas fa-shopping-cart"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                        <i class="far fa-heart"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-ratting">
                            <ul>
                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                <li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>
                                <li><a href="#"><i class="far fa-star"></i></a></li>
                            </ul>
                        </div>
                        <h2 class="product-title"><a href="product-details.html">${product.title}</a></h2>
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
        var html = '';
        var r = parseFloat(rating) || 0;
        for (var i = 1; i <= 5; i++) {
            if (i <= Math.floor(r)) {
                html += '<li><a href="#"><i class="fas fa-star"></i></a></li>';
            } else if (i - r < 1 && i - r > 0) {
                html += '<li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>';
            } else {
                html += '<li><a href="#"><i class="far fa-star"></i></a></li>';
            }
        }
        return html;
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
        37. Dynamic Services Fetching (Home page services section)
        Requires: <div id="services-container"></div> in HTML
    ============================================================ */
    async function fetchServices() {
        var container = $('#services-container');
        var loading   = $('#services-loading');
        var error     = $('#services-error');

        if (!container.length) return;

        try {
            var response = await fetch(API_BASE + '/services?type=0');
            if (!response.ok) throw new Error('API Error: ' + response.status);

            var data     = await response.json();
            var services = data.data || (Array.isArray(data) ? data : []);

            renderServices(services);
            loading.addClass('d-none');
            error.addClass('d-none');

        } catch (err) {
            console.error('Error fetching services:', err);
            loading.addClass('d-none');
            error.removeClass('d-none');
        }
    }

    function renderServices(services) {
        var container = $('#services-container');
        var html = '';

        services.forEach(function(service) {
            var price     = parseFloat(service.price || 0);
            var discPrice = parseFloat(service.discount_price || 0);
            var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
            var hasDiscount = discPrice > 0 && discPrice < price;

            var priceHtml = hasDiscount
                ? '<span>₹' + finalPrice.toFixed(2) + '</span> <del>₹' + price.toFixed(2) + '</del>'
                : '<span>₹' + finalPrice.toFixed(2) + '</span>';

            html += `
                <div class="col-xl-3 col-lg-3 col-md-6 col-12">
                    <div class="ltn__service-item-1">
                        <div class="service-item-img">
                            <img src="${service.image || 'img/slider/slider-banner-service-1.jpg'}" alt="${service.title}">
                        </div>
                        <div class="service-item-brief">
                            <h3><a href="service-details.html?id=${service.slug || service.id}">${service.title}</a></h3>
                            <p>${service.description || ''}</p>
                            <div class="product-price">${priceHtml}</div>
                        </div>
                    </div>
                </div>`;
        });

        container.html(html);
    }


    /* ============================================================
        38. Dynamic Products Fetching — Home Page (Tab Slider)
        Requires: #product-category-tabs and #product-tab-content in HTML
    ============================================================ */
    async function fetchProducts() {
        var tabMenu     = $('#product-category-tabs');
        var tabContent  = $('#product-tab-content');
        var loading     = $('#products-loading');
        var tabsLoading = $('#products-tabs-loading');
        var error       = $('#products-error');

        if (!tabMenu.length || !tabContent.length) return;

        try {
            var response = await fetch(API_BASE + '/services?type=1');
            if (!response.ok) throw new Error('API Error: ' + response.status);

            var data     = await response.json();
            var products = data.data || (Array.isArray(data) ? data : []);

            if (products.length === 0) {
                loading.addClass('d-none');
                error.removeClass('d-none').find('p').text('No products found.');
                return;
            }

            // Group by category
            var groupedProducts = products.reduce(function(acc, product) {
                var category = (product.category && typeof product.category === 'object')
                    ? product.category.name
                    : (product.category || 'Other');
                if (!acc[category]) acc[category] = [];
                acc[category].push(product);
                return acc;
            }, {});

            var categories = Object.keys(groupedProducts);
            renderProductTabs(categories);
            renderProductsByCategory(groupedProducts);

            loading.addClass('d-none');
            tabsLoading.addClass('d-none');
            error.addClass('d-none');

            initDynamicProductSliders();

        } catch (err) {
            console.error('Error fetching products:', err);
            loading.addClass('d-none');
            tabsLoading.addClass('d-none');
            error.removeClass('d-none');
        }
    }

    function renderProductTabs(categories) {
        var tabMenu = $('#product-category-tabs');
        var html = '';
        categories.forEach(function(category, index) {
            var isActive    = index === 0 ? 'active show' : '';
            var categoryId  = category.toLowerCase().replace(/\s+/g, '_');
            html += `<a class="${isActive}" data-bs-toggle="tab" href="#tab_${categoryId}">${category}</a>`;
        });
        tabMenu.html(html);
    }

    function renderProductsByCategory(groupedProducts) {
        var tabContent = $('#product-tab-content');
        var html = '';
        Object.entries(groupedProducts).forEach(function([category, products], index) {
            var isActive   = index === 0 ? 'active show' : '';
            var categoryId = category.toLowerCase().replace(/\s+/g, '_');
            html += `
                <div class="tab-pane fade ${isActive}" id="tab_${categoryId}">
                    <div class="ltn__product-tab-content-inner">
                        <div class="row ltn__tab-product-slider-one-active slick-arrow-1">
                            ${products.map(p => renderHomeProductCard(p)).join('')}
                        </div>
                    </div>
                </div>`;
        });
        tabContent.html(html);
    }

    function renderHomeProductCard(product) {
        var price      = parseFloat(product.price || 0);
        var discPrice  = parseFloat(product.discount_price || 0);
        var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
        var hasDiscount = discPrice > 0 && discPrice < price;
        var badge      = getBadgeLabel(price, discPrice) || 'New';
        var identifier = product.slug || product.id;

        var priceHtml = hasDiscount
            ? `<span>₹${finalPrice.toFixed(2)}</span> <del>₹${price.toFixed(2)}</del>`
            : `<span>₹${finalPrice.toFixed(2)}</span>`;

        return `
            <div class="col-lg-12">
                <div class="ltn__product-item ltn__product-item-3 text-center">
                    <div class="product-img">
                        <a href="product-details.html?id=${identifier}">
                            <img src="${product.image || 'img/product/1.png'}" alt="${product.title}">
                        </a>
                        <div class="product-badge"><ul><li class="sale-badge">${badge}</li></ul></div>
                        <div class="product-hover-action">
                            <ul>
                                <li><a href="product-details.html?id=${identifier}" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal"><i class="far fa-eye"></i></a></li>
                                <li><a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal"><i class="fas fa-shopping-cart"></i></a></li>
                                <li><a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal"><i class="far fa-heart"></i></a></li>
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
                { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 992,  settings: { arrows: true, dots: true, slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 768,  settings: { arrows: true, dots: true, slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 580,  settings: { arrows: true, dots: true, slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });
    }


    /* ============================================================
        39. Shop Page Products Fetching (shop.html)
        Requires: #liton_product_grid and #liton_product_list in HTML
        Products auto-populate grid & list view with API data
        Pagination & sorting also handled dynamically
    ============================================================ */
    async function fetchShopProducts(page, sortBy) {
        page   = page   || 1;
        sortBy = sortBy || '';

        var gridContainer = $('#liton_product_grid .ltn__product-grid-view .row');
        var listContainer = $('#liton_product_list .ltn__product-list-view .row');

        if (!gridContainer.length) return;

        // Loading state
        gridContainer.html(`
            <div class="col-12 text-center py-60">
                <div class="spinner-border" role="status" style="width:3rem;height:3rem;border-color:#ff5a00;border-right-color:transparent;"></div>
                <p class="mt-15">Loading products...</p>
            </div>`);
        listContainer.html('');

        try {
            var url = API_BASE + '/services?type=1&page=' + page;
            if (sortBy) url += '&sort=' + sortBy;

            var response = await fetch(url);
            if (!response.ok) throw new Error('API Error: ' + response.status);

            var data       = await response.json();
            var products   = Array.isArray(data.data) ? data.data : [];
            var pagination = data.pagination || {
                total: products.length, totalPages: 1, page: 1,
                hasPrevPage: false, hasNextPage: false
            };

            if (products.length === 0) {
                gridContainer.html('<div class="col-12 text-center py-40"><p>No products found.</p></div>');
                listContainer.html('');
                updateShowingText(pagination, 0);
                return;
            }

            // Render both views
            gridContainer.html(products.map(p => renderShopGridCard(p)).join(''));
            listContainer.html(products.map(p => renderShopListCard(p)).join(''));

            // Pagination & count
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
        var price      = parseFloat(product.price || 0);
        var discPrice  = parseFloat(product.discount_price || 0);
        var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
        var hasDiscount = discPrice > 0 && discPrice < price;
        var badge      = getBadgeLabel(price, discPrice);
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
                                <li><a href="product-details.html?id=${identifier}" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal"><i class="far fa-eye"></i></a></li>
                                <li><a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal"><i class="fas fa-shopping-cart"></i></a></li>
                                <li><a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal"><i class="far fa-heart"></i></a></li>
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
        var price      = parseFloat(product.price || 0);
        var discPrice  = parseFloat(product.discount_price || 0);
        var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
        var hasDiscount = discPrice > 0 && discPrice < price;
        var badge      = getBadgeLabel(price, discPrice);
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
                                <li><a href="product-details.html?id=${identifier}" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal"><i class="far fa-eye"></i></a></li>
                                <li><a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal"><i class="fas fa-shopping-cart"></i></a></li>
                                <li><a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal"><i class="far fa-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    /* -- Shop: Pagination -- */
    function renderShopPagination(pagination, currentPage) {
        var total   = pagination.totalPages || 1;
        var hasPrev = pagination.hasPrevPage;
        var hasNext = pagination.hasNextPage;

        if (total <= 1) { $('.ltn__pagination-area').hide(); return; }

        var html = '<ul>';
        html += `<li><a href="#" class="page-btn" data-page="${currentPage - 1}" ${!hasPrev ? 'style="pointer-events:none;opacity:0.4"' : ''}><i class="fas fa-angle-double-left"></i></a></li>`;

        for (var i = 1; i <= total; i++) {
            if (total > 7 && i > 3 && i < total - 1 && Math.abs(i - currentPage) > 1) {
                if (i === 4) html += '<li><a href="#">...</a></li>';
                continue;
            }
            html += `<li class="${i === currentPage ? 'active' : ''}"><a href="#" class="page-btn" data-page="${i}">${i}</a></li>`;
        }

        html += `<li><a href="#" class="page-btn" data-page="${currentPage + 1}" ${!hasNext ? 'style="pointer-events:none;opacity:0.4"' : ''}><i class="fas fa-angle-double-right"></i></a></li>`;
        html += '</ul>';

        $('.ltn__pagination').html(html);
        $('.ltn__pagination-area').show();
    }

    /* -- Shop: Showing X of Y results -- */
    function updateShowingText(pagination, count) {
        var total = pagination.total || count;
        $('.showing-product-number span').text('Showing ' + count + ' of ' + total + ' results');
    }

    /* -- Shop: Sort dropdown value → API param -- */
    function getSortParam(label) {
        var map = {
            'Sort by popularity'         : 'popularity',
            'Sort by new arrivals'       : 'newest',
            'Sort by price: low to high' : 'price_asc',
            'Sort by price: high to low' : 'price_desc'
        };
        return map[label] || '';
    }

    /* -- Shop: Pagination click -- */
    $(document).on('click', '.page-btn', function(e) {
        e.preventDefault();
        var page = parseInt($(this).data('page'));
        if (!page || page < 1) return;
        var sortLabel = $('.short-by select').val();
        fetchShopProducts(page, getSortParam(sortLabel));
        $('html, body').animate({ scrollTop: $('.ltn__product-area').offset().top - 80 }, 400);
    });

    /* -- Shop: Sort dropdown change -- */
    $(document).on('change', '.short-by select', function() {
        fetchShopProducts(1, getSortParam($(this).val()));
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

            var data    = await response.json();
            var product = data.data || data;

            if (!product || !product.id) throw new Error('Invalid product data.');

            renderProductDetails(product);
            renderProductReviews(product.reviews || [], product.average_rating || 0);
            renderProductFAQs(product.faqs || []);
            renderProductSpecifications(product.specifications || []);
            renderProductIncludes(product.includes || []);

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
        var price      = parseFloat(product.price || 0);
        var discPrice  = parseFloat(product.discount_price || 0);
        var finalPrice = (discPrice > 0 && discPrice < price) ? discPrice : price;
        var hasDiscount = discPrice > 0 && discPrice < price;

        var priceHtml = hasDiscount
            ? `<span>₹${finalPrice.toFixed(2)}</span> <del>₹${price.toFixed(2)}</del>`
            : `<span>₹${finalPrice.toFixed(2)}</span>`;

        $('.modal-product-info .product-price, .shop-details-info .product-price').html(priceHtml);

        // Rating
        var avgRating   = parseFloat(product.average_rating || 0);
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
            product.gallery_images.forEach(function(img) {
                var url = typeof img === 'object' ? (img.url || img.image) : img;
                if (url && !images.includes(url)) images.push(url);
            });
        }

        if (images.length === 0) return;

        // Destroy existing slick before re-init
        if (largeImgContainer.hasClass('slick-initialized')) largeImgContainer.slick('unslick');
        if (smallImgContainer.hasClass('slick-initialized')) smallImgContainer.slick('unslick');

        var largeHtml = '', smallHtml = '';
        images.forEach(function(imgUrl) {
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
        reviews.forEach(function(review) {
            var userName = (review.user && review.user.name) ? review.user.name : (review.name || 'Anonymous');
            var userImg  = (review.user && review.user.avatar) ? review.user.avatar : 'img/testimonial/1.jpg';
            var comment  = review.comment || review.review || '';
            var date     = review.created_at ? new Date(review.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

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
        faqs.forEach(function(faq, index) {
            var collapseId = 'faq_item_' + index;
            var isShow     = index === 0 ? 'show' : '';
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
        specifications.forEach(function(spec) {
            html += `<tr><th>${spec.key || spec.name || ''}</th><td>${spec.value || ''}</td></tr>`;
        });
        html += '</tbody></table>';
        specContainer.html(html);
    }

    function renderProductIncludes(includes) {
        var includesContainer = $('#product-includes-container');
        if (!includesContainer.length || includes.length === 0) return;

        var html = '<ul class="ltn__list-item-2 ltn__list-item-2-before">';
        includes.forEach(function(item) {
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
    window.fetchShopProducts    = fetchShopProducts;
    window.fetchProductDetails  = fetchProductDetails;

(jQuery);


// ─── PRODUCT DETAILS - API FETCH ──────────────────────────────────────────────

function generateStars(rating, maxStars = 5) {
    let starsHtml = "";
    for (let i = 1; i <= maxStars; i++) {
        if (i <= Math.floor(rating)) {
            starsHtml += `<li><a href="#"><i class="fas fa-star"></i></a></li>`;
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            starsHtml += `<li><a href="#"><i class="fas fa-star-half-alt"></i></a></li>`;
        } else {
            starsHtml += `<li><a href="#"><i class="far fa-star"></i></a></li>`;
        }
    }
    return starsHtml;
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
    const images = data.gallery_images?.length > 0 ? data.gallery_images : [data.image];
    const largeImgContainer = document.querySelector(".ltn__shop-details-large-img");
    const smallImgContainer = document.querySelector(".ltn__shop-details-small-img");

    if (largeImgContainer) {
        largeImgContainer.innerHTML = images.map(img => `
            <div class="single-large-img">
                <a href="${img}" data-rel="lightcase:myCollection">
                    <img src="${img}" alt="${data.title}">
                </a>
            </div>`).join("");
    }
    if (smallImgContainer) {
        smallImgContainer.innerHTML = images.map(img => `
            <div class="single-small-img">
                <img src="${img}" alt="${data.title}">
            </div>`).join("");
    }

    // Title
    const titleEl = document.querySelector(".modal-product-info h3");
    if (titleEl) titleEl.textContent = data.title;

    // Price
    const priceContainer = document.querySelector(".product-price");
    if (priceContainer) {
        priceContainer.innerHTML = `
            <span>₹${parseFloat(data.final_price).toFixed(2)}</span>
            ${data.discount_price && data.price !== data.discount_price
                ? `<del>₹${parseFloat(data.price).toFixed(2)}</del>`
                : ""}`;
    }

    // Star Rating
    const rating = parseFloat(data.average_rating) || 0;
    const reviewCount = data.review_count || 0;
    const starsWithCount = generateStars(rating) + `<li class="review-total"><a href="#"> ( ${reviewCount} Reviews )</a></li>`;
    document.querySelectorAll(".product-ratting ul").forEach(ul => {
        ul.innerHTML = starsWithCount;
    });

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
    if (qtyInput) qtyInput.value = data.max_qty || 1;

    // Description Tab
    const descTab = document.querySelector("#liton_tab_details_1_1 .ltn__shop-details-tab-content-inner");
    if (descTab) {
        let html = `<h4 class="title-2">${data.title}</h4><p>${data.description}</p>`;

        if (data.includes?.length > 0) {
            html += `<h5>What's Included</h5><ul>`;
            data.includes.forEach(item => { html += `<li>✔ ${item.title}</li>`; });
            html += `</ul>`;
        }
        if (data.excludes?.length > 0) {
            html += `<h5>Not Included</h5><ul>`;
            data.excludes.forEach(item => { html += `<li>✖ ${item.title}</li>`; });
            html += `</ul>`;
        }
        if (data.specifications?.length > 0) {
            html += `<h5>Specifications</h5><table class="table ltn__table-responsive">`;
            data.specifications.forEach(spec => { html += `<tr><th>${spec.title}</th><td>${spec.value}</td></tr>`; });
            html += `</table>`;
        }
        if (data.additional_info?.length > 0) {
            data.additional_info.forEach(info => { html += `<h5>${info.title}</h5><p>${info.description}</p>`; });
        }
        if (data.faqs?.length > 0) {
            html += `<h5>Frequently Asked Questions</h5>`;
            data.faqs.forEach(faq => { html += `<div class="ltn__faq-item"><strong>Q: ${faq.question}</strong><p>A: ${faq.answer}</p></div>`; });
        }
        descTab.innerHTML = html;
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
}


document.addEventListener("DOMContentLoaded", fetchProductDetails);
// ─────────────────────────────────────────────────────────────────────────────

