$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
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
	body.style.background = 'black center / cover no-repeat';
};

// Portfolio slider

var mainSlider = document.querySelector('.slider');
var sliderItems = mainSlider.children;
var arrows = document.querySelector('.arrows');
var previous = arrows.querySelector('.prev');
var next = arrows.querySelector('.next');
var images = mainSlider.querySelectorAll('img');
var container = document.querySelector('.portfolio');

var slidesToScroll = 3;
var itemWidth = Math.round(container.clientWidth);
var movePosition = itemWidth / slidesToScroll;

var allImages = function(item) {
	var elements = [];
	for (var i = 0; i < item.length; i++) {
		var element = item[i].querySelector('img');
		elements.push(element);
	}
	return elements;
};

var items = allImages(sliderItems);
items.forEach((item) => {
	item.style.maxWidth = `${itemWidth}px`;
});

var settings = {
	width: 300,
	height: 500,
	margin: 20
};

var row = 0;
next.addEventListener('click', function(evt) {
	evt.preventDefault;
	row -= movePosition;
	mainSlider.style.transform = `translateX(${row}px)`;
	if (-row === (sliderItems.length - 2) * (settings.width + settings.margin)) {
		next.classList.add('disable');
	};
	if (row !== settings.width + settings.margin) {
		previous.classList.remove('disable');
	};
});


previous.addEventListener('click', function(evt) {
	evt.preventDefault;
	row += movePosition;
	mainSlider.style.transform = `translateX(${row}px)`;
	if (row === settings.width + settings.margin) {
		previous.classList.add('disable');
	};
	if (-row !== ((sliderItems.length - 2) * (settings.width + settings.margin))) {
		next.classList.remove('disable');
	};
});
