(function ($) {

    'use strict';

    //Cache jQuery Selector
    var $window = $(window),
        $carousel = $('.carousel'), 
        $dropdown  = $('.dropdown-toggle'),	
        $header = $('#header'),
        $projectimg = $('.project-images'), 
        $our_doctors = $('.our_member'), 
        $our_doctors_2 = $('.doctor'), 
        $photo_gallery = $('.photo_galery'),
        $image_slider = $('.image_slider'), 
        $client = $('.testimonials-carousel'), 
        $srv_slide = $('.service-slider'), 
        $feedback_side = $('.testimonial_2'), 
        $projectnav = $('.project-thumbnail'), 
        $brand = $('.partner-slider'), 
        $contact = $('#contact-form'), 
        $landdrop = $('.lan-drop'),
		$client = $('.clients')



    // jQuery Settings Table List
	$(document).keydown(function(event){
		if(event.keyCode==123 || event.ctrlKey && event.shiftKey && event.keyCode==73){
			return false;
		}
	});



    // 1. Remove Loader
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(500).fadeOut(500);
            $('body').removeClass('page-load');
        }
    }


    // 2. Bootstrap slider pause time
    $('.carousel').carousel({
        interval: 6000, // Slider Pause time
        pause: "hover"
    });


    // 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile	
	$('#bs-example-navbar-collapse-1').each(function() {
		$dropdown.on('click', function(){
			if($window.width() < 992){
				if($(this).parent('.dropdown').hasClass('visible')){
					$(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
					$(this).parent('.dropdown').removeClass('visible');
				}
				else{
					$(this).parent('.dropdown').children('.dropdown-menu').stop(true, true).slideDown(300);
					$(this).parent('.dropdown').addClass('visible');
				}
			}
		});
		
		$window.on('resize', function(){
			if($window.width() > 991){
				$('.dropdown-menu').removeAttr('style');
				$('.dropdown ').removeClass('visible');
			}
		});
		
	});

    // 4. Auto active class adding with navigation
    $window.on('load', function () {
        var current = location.pathname;
        var $path = current.substring(current.lastIndexOf('/') + 1);
        $('.navbar-nav li a').each(function (e) {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($path == $this.attr('href')) {
                $this.parent('li').addClass('active');
            } else if ($path == '') {
                $('.navbar-nav li.first').addClass('active');
            }
        })
    })


    // 4. language dropdown
    $('.top_right').each(function () {
        $landdrop.on('show.bs.lan-drop', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        });

        $landdrop.on('hide.bs.lan-drop', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });
    });



    // 5. Update Header Style + Scroll to Top
    function headerStyle() {
		if($header.length){
			var windowpos = $window.scrollTop();
			if (windowpos >= 200) {
				$header.addClass('fixed-header');
			} else {
				$header.removeClass('fixed-header');
			}
		}
	}
	
	$window.on('scroll', function() {
		headerStyle();
	});

    // 6. Single project slider click + Show large image in top box
    $projectimg.each(function () {
        $(this).on('click', '.item a', function (event) {
            event.preventDefault();
            $(this).parents('.project-images').find(".item a").removeClass('onlive');
            $(this).addClass('onlive');
            $(this).parents('.project-images').find(".slide-project img").attr("src", $(this).attr("href"));
        });
    });

	
	// 7. Layer slider settings
			
	$('#slider').layerSlider({
		sliderVersion: '6.0.0',
		type: 'fullwidth',
		responsiveUnder: 0,
		layersContainer: 1200,
		maxRatio: 1,
		parallaxScrollReverse: true,
		hideUnder: 0,
		hideOver: 100000,
		skin: 'outline',
		showBarTimer: true,
		thumbnailNavigation: 'disabled',
		allowRestartOnResize: true,
		skinsPath: 'skins/',
		height: 800
	});
	
	$('#slider2').layerSlider({
		sliderVersion: '6.0.0',
		type: 'fullwidth',
		responsiveUnder: 1,
		layersContainer: 1200,
		maxRatio: 1,
		parallaxScrollReverse: true,
		hideUnder: 0,
		hideOver: 100000,
		skin: 'v6',
		allowRestartOnResize: true,
		skinsPath: '../../layerslider/skins/',
		height: 800
	});
	
	$('#slider3').layerSlider({
		sliderVersion: '6.0.0',
		type: 'fullwidth',
		responsiveUnder: 0,
		layersContainer: 1200,
		maxRatio: 1,
		parallaxScrollReverse: true,
		hideUnder: 0,
		hideOver: 100000,
		skin: 'outline',
		showBarTimer: true,
		thumbnailNavigation: 'disabled',
		allowRestartOnResize: true,
		skinsPath: 'skins/',
		height: 840
	});
	
	$('#slider4').layerSlider({
		sliderVersion: '6.0.0',
		type: 'fullwidth',
		responsiveUnder: 0,
		layersContainer: 1200,
		maxRatio: 1,
		parallaxScrollReverse: true,
		hideUnder: 0,
		hideOver: 100000,
		skin: 'outline',
		showBarTimer: true,
		thumbnailNavigation: 'disabled',
		allowRestartOnResize: true,
		skinsPath: 'skins/',
		height: 840
	});
	
	$('#slider5').layerSlider({
		sliderVersion: '6.0.0',
		type: 'fullwidth',
		responsiveUnder: 0,
		layersContainer: 1200,
		maxRatio: 1,
		parallaxScrollReverse: true,
		hideUnder: 0,
		hideOver: 100000,
		skin: 'outline',
		showBarTimer: true,
		thumbnailNavigation: 'disabled',
		allowRestartOnResize: true,
		skinsPath: 'skins/',
		height: 750
	});
	
	$('#slider6').layerSlider({
		sliderVersion: '6.0.0',
		type: 'fullwidth',
		responsiveUnder: 0,
		layersContainer: 1200,
		maxRatio: 1,
		parallaxScrollReverse: true,
		hideUnder: 0,
		hideOver: 100000,
		skin: 'outline',
		showBarTimer: true,
		thumbnailNavigation: 'disabled',
		allowRestartOnResize: true,
		skinsPath: 'skins/',
		height: 750
	});


    // 8. Revolution Slider
    if ($('.revolution-slider .tp-banner').length) {

        jQuery('.revolution-slider .tp-banner').show().revolution({

            delay: 10000,
            startwidth: 1200,
            startheight: 720,
            hideThumbs: 600,

            thumbWidth: 80,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullet",
            navigationArrows: "0",
            navigationStyle: "preview4",

            touchenabled: "on",
            onHoverStop: "off",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "off",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",

            spinner: "spinner4",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",

            autoHeight: "off",
            forceFullWidth: "on",

            hideThumbsOnMobile: "on",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "on",
            hideArrowsOnMobile: "on",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "",
            fullScreenOffsetContainer: ""
        });


}

    // 9. Our Doctor Carousel HealthLine
    if ($our_doctors.length) {
        $our_doctors.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplayHoverPause: false,
            smartSpeed: 300,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    };
	
    // 9. Our Doctor Carousel HealthLine
    if ($our_doctors_2.length) {
        $our_doctors_2.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplayHoverPause: false,
            smartSpeed: 300,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // 10. Our Gallery Carousel for index-2 HealthLine
    if ($photo_gallery.length) {
        $photo_gallery.owlCarousel({
            loop: true,
            nav: false,
			dots: false,
            autoplayHoverPause: false,
            smartSpeed: 300,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // 11. Image Slider Uniland
    if ($image_slider.length) {
        $image_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
			dots: true,
            autoplayHoverPause: true,
            smartSpeed: 300,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }




    // 12. Testimonials Carousel Slider Home Uniland
    if ($client.length) {
        $client.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 700,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                760: {
                    items: 1
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }



    // 13. Testimonials Carousel in sidebar small
    if ($feedback_side.length) {
        $feedback_side.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
			dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 700,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                760: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }



    // 14. Our Partner Logos Slider Auto
    if ($brand.length) {
        $brand.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: 4000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }


    // 15. Use for Accordion Box
    if ($('.according_area').length) {
        $('.according_title').on('click', function () {


            if ($(this).hasClass('active')) {
                $(this).addClass('active');
            }

            //if ($(this).next('.according_details').is(':visible')){
            //				$(this).removeClass('active');
            //			}
            else {
                $('.according_title').removeClass('active');
                $('.according_details').slideUp(300);
                $(this).addClass('active');
                $(this).next('.according_details').slideDown(300);
            }
        });
    }


    // 16. Fact Counter For Achivement Counting
    function factCounter() {
        if ($('.fact-counter').length) {
            $('.funfact.animated, .count.animated').each(function () {

                var $t = $(this),
                    n = $t.find(".counting").attr("data-stop"),
                    r = parseInt($t.find(".counting").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".counting").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".counting").text(this.countNum);
                        }
                    });
                }

                //set skill building height


                var size = $(this).children('.progress-bar').attr('aria-valuenow');
                $(this).children('.progress-bar').css('width', size + '%');


            });
        }
    }
	



    // 17. LightBox / Fancybox
    if ($('.img_view').length) {
        $('.img_view').fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }


    // 18. Sortable Masonary with Filters
    function enableMasonry() {
        if ($('.sortable-masonry').length) {

            var winDow = $(window);
            // Needed variables
            var $container = $('.sortable-masonry .items-container');
            var $filter = $('.sortable-masonry .filter-btns');

            $container.isotope({
                filter: '*',
                masonry: {
                    columnWidth: 1
                },
                animationOptions: {
                    duration: 1000,
                    easing: 'linear'
                }
            });


            // Isotope Filter 
            $filter.find('li').on('click', function () {
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 1000,
                            easing: 'linear',
                            queue: false
                        }
                    });
                } catch (err) {

                }
                return false;
            });


            winDow.bind('resize', function () {
                var selector = $filter.find('li.active').attr('data-filter');

                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'linear',
                        queue: false
                    }
                });
            });


            var filterItemA = $('.sortable-masonry .filter-btns li');

            filterItemA.on('click', function () {
                var $this = $(this);
                if (!$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });
        }
    }

    enableMasonry();


    // 20. Date Picker
    if ($('.datepicker').length) {
        $(".datepicker").datepicker();
    }


    // 21. Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var HeaderHeight = $('.header-lower').height();
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top - HeaderHeight
            }, 1000);

        });
    }


    // 22. Click Search Icon and Open Search Field	
    var $srcicon = $('.hvr-src a'),
        $srcfield = $('#search');
    $srcicon.on('click', function (event) {
        event.preventDefault();
        $srcfield.addClass('visible');
        event.stopPropagation();
    });

    $('.src-close').on('click', function () {
        $srcfield.removeClass('visible');
    });

    $srcfield.on('click', function (event) {
        event.stopPropagation();
    });

    $window.on('click', function (e) {
        $srcfield.removeClass('visible');
    });

    // 23. Contact Form Validation
    if ($contact.length) {
        $contact.validate({ //#contact-form contact form id
            rules: {
                firstname: {
                    required: true // Field name here
                },
                lastname: {
                    required: true // Field name here
                },
                email: {
                    required: true, // Field name here
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },

            messages: {
                firstname: "Please enter your First Name", //Write here your error message that you want to show in contact form
                lastname: "Please enter your Last Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
                message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            submitHandler: function (form) {
                $('#send').attr({
                    'disabled': 'true',
                    'value': 'Sending...'
                });
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 5000);
                        form.reset();
                    },
                    error: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 5000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

        });
    }
	

    // 24. Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
	
	// 25. Scroll to a Specific Div
	if($('.scroll-btn').length){
		$(".scroll-btn").on('click', function(e) {
			e.preventDefault();
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({scrollTop: $(target).offset().top }, 1000);
		});
	}
	
	// 29. Acive scroll top button
	 function jumptotop(){
		var $scrollsize = $window.scrollTop();
		if($scrollsize > 300){
			$('.scroll-to-top').fadeIn(1000);
		}
		else {
			$('.scroll-to-top').fadeOut(1000);
		}
	 }

    // 25. When document is Scrollig, do
    $window.on('scroll', function () {
		jumptotop();
        headerStyle();
        factCounter();
    });


    // 26. When document is loading, do

    $window.on('load', function () {
        handlePreloader();
        enableMasonry();
    });


	// 24. Gallery With Filters List
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	// 33. Put slider space for nav not in mini screen
	 if(document.querySelector('.nav-on-top') !== null) {
		var get_height = jQuery('.nav-on-top').height();
			if(get_height > 0 && $window.width() > 991){
			jQuery('body').css('padding-top', get_height);
		}
		$window.on('resize', function(){
			if($window.width() < 991){
				jQuery('body').css('padding-top', '0');
			}
			else {
				jQuery('body').css('padding-top', get_height);
			}
		});
	 }

	

})(window.jQuery);
