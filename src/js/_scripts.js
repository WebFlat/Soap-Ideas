$(document).ready(function(){
	'use strict';


	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		smartSpeed: 1000
	});

	$('.reviews__cards').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		smartSpeed: 800
	});


});