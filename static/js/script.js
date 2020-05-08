$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:500,
		easing:'ease',
		draggable:false,
		touchThreshold: 10,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:2,
				}

			},{
				breakpoint: 601,
				settings: {
					slidesToShow:1,
				}
			}
		]
	});
	$('.second__slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:500,
		easing:'ease',
		draggable:false,
		touchThreshold: 10,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:2,
				}

			},{
				breakpoint: 601,
				settings: {
					slidesToShow:1,
				}
			}
		]
	});
});
