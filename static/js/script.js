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
var backFirst = footer.querySelector('.back__first');
var backSecond = footer.querySelector('.back__second');
var backThird = footer.querySelector('.back__third');
var footerLinks = footer.querySelectorAll('.footer__link');

body.style.opacity = '1';
if (window.location.href.indexOf('portfolio') > -1) {
	headerName.classList.add('color');
	links.forEach((link) => {
		link.classList.add('color');
	});
	backFirst.style.display = 'block';
	footerLinks.forEach((footerLink) => {
		footerLink.style.display = 'none';
	});
	body.style.background = 'black center / cover no-repeat';
};

var url = window.location.href;

if (!url.endsWith('portfolio/')) {
	backFirst.style.display = 'none';
	backSecond.style.display = 'block';
};

if (window.location.href.indexOf('upload') > -1) {
	body.style.background = 'white center / cover no-repeat';
	backSecond.style.color = 'black';
};

if (window.location.href.indexOf('delete') > -1) {
	body.style.background = 'white center / cover no-repeat';
	backSecond.style.display = 'none';
};

/*if (!url.endsWith('video/') && !url.endsWith('portfolio/')) {
	backFirst.style.display = 'none';
	backThird.style.display = 'block';
};*/

if (window.location.href.indexOf('video') > -1) {
	backSecond.style.display = 'none';
	backFirst.style.display = 'block';
};

if (window.location.href.indexOf('video/upload') > -1) {
	backFirst.style.display = 'none';
	backThird.style.display = 'block';
	backThird.style.color = 'black';
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
