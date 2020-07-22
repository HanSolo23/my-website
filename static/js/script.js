$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:2,
		slidesToScroll:2,
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
	$('body').css('opacity', '1');
	if(window.location.href.indexOf('portfolio') > -1) {
		$('.header__name,.link').addClass('color');
	};
});
