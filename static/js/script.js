$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	/*$('.slider').slick({
		arrows:true,
		dots:false,
		adaptiveHeight:true,
		slidesToShow:1,
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
	});*/
});

// Main settings

var body = document.querySelector('body');
var headerName = body.querySelector('.header__name');
var links = body.querySelectorAll('.link');
var footer = body.querySelector('.footer');
var back = footer.querySelector('.back');
var footerLinks = footer.querySelectorAll('.footer__link');

body.style.opacity = '1';
if (window.location.href.indexOf('portfolio') > -1) {
	headerName.classList.add('color');
	links.forEach((link) => {
		link.classList.add('color');
	});
	back.style.display = 'block';
	footerLinks.forEach((footerLink) => {
		footerLink.style.display = 'none';
	});
	body.style.background = '#191919 center / cover no-repeat';
};

// Portfolio slider

var mainSlider = document.querySelector('.slider');
var sliderItems = mainSlider.children;
var arrows = document.querySelector('.arrows');
var previous = arrows.querySelector('.prev');
var next = arrows.querySelector('.next');
var images = mainSlider.querySelectorAll('img')

/*var allImages = function(item) {
	var elements = [];
	for (var i = 0; i < item.length; i++) {
		var element = item[i].children;
		elements.push(element);
	}
	return elements;
};*/

var settings = {
	width: 300,
	height: 500,
	margin: 20
};


var leftPosition = function(item, index){
	var leftPoint = (settings.width + settings.margin) * index + 'px';
	return item.style.left = leftPoint;
};


/*var topPosition = function(item, index) {
	var topPoint = (settings.height + settings.margin) * index + 'px';
	return item.style.top = topPoint; 
};*/


for (var i = 0; i < sliderItems.length; i++) {
	leftPosition(sliderItems[i], i);
};


/*for (var j = 0; j < allImages(sliderItems).length; j++) {
	for (var b = 0; b < allImages(sliderItems)[j].length; b++) {
		topPosition(allImages(sliderItems)[j][b], b);
	};	
};
*/

var row = 0;
next.addEventListener('click', function(evt) {
	evt.preventDefault;
	row -= settings.width + settings.margin;
	var goTo = row + 'px';
	mainSlider.style.left = goTo;
	if (-row === (sliderItems.length - 2) * (settings.width + settings.margin)) {
		next.classList.add('disable');
	};
	if (row !== settings.width + settings.margin) {
		previous.classList.remove('disable');
	};
});


previous.addEventListener('click', function(evt) {
	evt.preventDefault;
	row += settings.width + settings.margin;
	var goTo = row + 'px';
	mainSlider.style.left = goTo;
	if (row === settings.width + settings.margin) {
		previous.classList.add('disable');
	};
	if (-row !== ((sliderItems.length - 2) * (settings.width + settings.margin))) {
		next.classList.remove('disable');
	};
});
