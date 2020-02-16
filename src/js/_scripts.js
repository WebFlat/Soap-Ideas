$('document').ready(function(){
	'use strict';

//Slider******************************************************************
	$('.slides').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		smartSpeed: 1000,
		responsiveClass: true,
		responsive : {
    		0 : {
				nav: false,
				dots: true,
    		},
			690 : {
				nav: true,
				dots: false,
			}
		}
	});

	$('.reviews__cards').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayHoverPause: true,
		smartSpeed: 800
	});



//Animation*****************************************************************
	jQuery.fn.extend({
		onAppearanceAddClass: function(class_to_add) {
		var $window = $( window ),
			window_height = $window.height(),
			array_of_$elements = [];
		this.each(function(i,el) {
		array_of_$elements.push($( el ));
    })
    scrollHandler();
		if (array_of_$elements.length) {
      $window.on('resize', resizeHandler).on('resize', scrollHandler).on('scroll', scrollHandler);
    }
    function resizeHandler() {
      window_height = $window.height();
    }
    function watchProcessedElements(array_of_indexes) {
    	var l, i;
      for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
        array_of_$elements.splice(array_of_indexes[i], 1);
      }
      if (!array_of_$elements.length) {
        $window.off('resize', resizeHandler).off('scroll', scrollHandler).off('resize', scrollHandler);
      }
    }
    function scrollHandler() {
      var i, l, processed = [];
      for ( l = array_of_$elements.length, i = 0; i < l; ++i ) {
        if ($window.scrollTop() + window_height > array_of_$elements[i].offset().top) {
          array_of_$elements[i].addClass(class_to_add);
          processed.push(i); 
        }
      }
      if (processed.length) {
        watchProcessedElements(processed);
      }
    }
    	return this;
 	 }
	});

$('.popular__item--2,.popular__item--3, .offer__item--5, .about-card__item--3, .about__item--2, .footer__gallery, .data-mail').onAppearanceAddClass('animated fadeInRight fast');

$('.offer__item--4, .offer__item--6, .offer__item--7, .popular__item--5, .popular__item--4, .reviews__title-wrap, .popular__title-wrap .offer__item--1, .offer__item--2, .footer__mail, .form-feedback__main').onAppearanceAddClass('fadeInUp animated slow');
$('.descriptionProduct__text').onAppearanceAddClass('fadeInUp animated slow');
$('.offer__item--3, .about-card__item--1, .popular__item--1, .about__item--1,  .footer__info, .data-tel').onAppearanceAddClass('animated fadeInLeft fast');


var myArray = $('.slide__title');
for (var i = 0; i < myArray.length; i++) {
	$(myArray[i]).addClass('fadeInLeft infinite slower');
};
var myArray2 = $('.slide');
function addAnimated() {
	for (var j = 0; j < myArray2.length; j++) {
		console.log(myArray2.length);
		if ($('.owl-item').hasClass('active')) {
			$('.slide__title').addClass('animated');
			}
		};
	};
addAnimated();



//Отслеживание перемещения и появление кнопки вверх*********************
    var g_top = 0;
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.btn-top__wrap').css('transform', 'translateY(0)');
		} else if ($(this).scrollTop() < 1000) {
				$('.btn-top__wrap').css('transform', 'translateY(100%)').css('visibility', 'visible');	
		};
		if ($(this).scrollTop() > 0) {
				$('.header').addClass('fixedHeader');
		} else if ($(this).scrollTop() < 20) {
				$('.header').removeClass('fixedHeader');
		};
	});
//Бургер*******************************************************************
	$('#burger').click(function(e) {
		e.preventDefault();
		$('.burger__line').toggleClass('rotate');
		$('.header__nav').toggleClass('show');
		$('body').toggleClass('overflow');
	});


//Активные вкладки меню**********************************************
	try{
		var el=document.getElementsByClassName('header__link');
		var url=document.location.href;//палим текущий урл
			for(var i=0;i<el.length; i++){
				if (url==el[i].href){
					el[i].className += ' current-tab';
				};
			};
	}
	catch(e){};




//Галерея***************************************************************
	// baguetteBox.run('.cards');


});





