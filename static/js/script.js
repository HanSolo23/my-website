// Burger menu settings

var headerBurger = document.querySelector('.header__burger');
var headerMenu = document.querySelector('.header__menu');
var body = document.querySelector('body');

headerBurger.addEventListener('click', function() {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
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
var container = document.querySelector('.portfolio');

var constant = 3;
var itemWidth = container.clientWidth;
var movePosition = Math.round(itemWidth / constant);

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

var row = 0;
next.addEventListener('click', function(evt) {
	evt.preventDefault;
	row -= movePosition;
	mainSlider.style.transform = `translateX(${row}px)`;
	if (-row === (allImages(sliderItems).length - 5) * movePosition) {
		next.classList.add('disable');
	};
	if (row !== movePosition) {
		previous.classList.remove('disable');
	};
});


previous.addEventListener('click', function(evt) {
	evt.preventDefault;
	row += movePosition;
	mainSlider.style.transform = `translateX(${row}px)`;
	if (row === movePosition) {
		previous.classList.add('disable');
	};
	if (-row !== (allImages(sliderItems).length - 5) * movePosition) {
		next.classList.remove('disable');
	};
});
