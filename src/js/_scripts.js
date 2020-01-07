$(document).ready(function(){
	'use strict';


	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		smartSpeed: 1000
	});
});