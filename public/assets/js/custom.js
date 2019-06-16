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

    // 2. Bootstrap slider pause time
    // $('.carousel').carousel({
    //     interval: 6000, // Slider Pause time
    //     pause: "hover"
    // });


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

    // 5. Update Header Style + Scroll to Top
    // function headerStyle() {
	// 	if($header.length){
	// 		var windowpos = $window.scrollTop();
	// 		if (windowpos >= 200) {
	// 			$header.addClass('fixed-header');
	// 		} else {
	// 			$header.removeClass('fixed-header');
	// 		}
	// 	}
	// }

	// $window.on('scroll', function() {
	// 	headerStyle();
	// });

	// 7. Layer slider settings
	// $('#slider').layerSlider({
	// 	sliderVersion: '6.0.0',
	// 	type: 'fullwidth',
	// 	responsiveUnder: 0,
	// 	layersContainer: 1200,
	// 	maxRatio: 1,
	// 	parallaxScrollReverse: true,
	// 	hideUnder: 0,
	// 	hideOver: 100000,
	// 	skin: 'outline',
	// 	showBarTimer: true,
	// 	thumbnailNavigation: 'disabled',
	// 	allowRestartOnResize: true,
	// 	skinsPath: 'skins/',
	// 	height: 800
	// });

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

    // 15. Use for Accordion Box
    if ($('.according_area').length) {
        $('.according_title').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).addClass('active');
            } else {
                $('.according_title').removeClass('active');
                $('.according_details').slideUp(300);
                $(this).addClass('active');
                $(this).next('.according_details').slideDown(300);
            }
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
	//  function jumptotop(){
	// 	var $scrollsize = $window.scrollTop();
	// 	if($scrollsize > 300){
	// 		$('.scroll-to-top').fadeIn(1000);
	// 	}
	// 	else {
	// 		$('.scroll-to-top').fadeOut(1000);
	// 	}
	//  }

    // 25. When document is Scrollig, do
    // $window.on('scroll', function () {
	// 	jumptotop();
    //     headerStyle();
    //     factCounter();
    // });

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
