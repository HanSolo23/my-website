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
var headerName = body.querySelector('.header__name');
var header = body.querySelector('.header');
var links = body.querySelectorAll('.link');
var footer = body.querySelector('.footer');
var backFirst = footer.querySelector('.back__first');
var backSecond = footer.querySelector('.back__second');
var backThird = footer.querySelector('.back__third');
var backFourth = footer.querySelector('.back__fourth');
var footerLinks = footer.querySelectorAll('.footer__link');

var settings = () => {
	if (window.location.href.indexOf('portfolio') > -1) {
		header.classList.add('display');
		links.forEach((link) => {
			link.classList.add('display');
		});
		backFirst.style.display = 'inline-block';
		footerLinks.forEach(footerLink => footerLink.style.display = 'none');
		body.style.background = 'black center / cover no-repeat';
	} else if (window.location.href.indexOf('blog') > -1) {
		header.style.display = 'none';
		links.forEach(link => link.classList.add('display'));
		backFirst.style.display = 'inline-block';
		footerLinks.forEach(footerLink => footerLink.style.display = 'none');
		body.style.background = 'black center / cover no-repeat';
	};
	if (!window.location.href.endsWith('portfolio/') && window.location.href.indexOf('portfolio') > -1) {
		backFirst.style.display = 'none';
		backSecond.style.display = 'inline-block';
	};
	if (window.location.href.indexOf('upload') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backSecond.style.color = 'black';
	} else if (window.location.href.indexOf('delete') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backSecond.style.display = 'none';
	};
	if (window.location.href.indexOf('video') > -1 && window.location.href.indexOf('portfolio') > -1 && !window.location.href.endsWith('video/')) {
		backFirst.style.display = 'none';
		backSecond.style.display = 'none';
		backThird.style.display = 'inline-block';
	} else if (window.location.href.indexOf('video') > -1) {
		backSecond.style.display = 'none';
		backFirst.style.display = 'inline-block';
	} else if (!window.location.href.endsWith('post/') && window.location.href.indexOf('post') > -1) {
		backFirst.style.display = 'none';
		backFourth.style.display = 'inline-block';
	};
	if (window.location.href.indexOf('video/upload') > -1) {
		backFirst.style.display = 'none';
		backThird.style.display = 'inline-block';
		backThird.style.color = 'black';
	} else if (window.location.href.indexOf('post/create') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backFirst.style.display = 'none';
		backFourth.style.display = 'inline-block';
		backFourth.style.color = 'black';
	}; 
};

settings()

window.onload = () => {
	var preloader = document.querySelector('.preloader');
	preloader.style.display = 'none';
};
// Portfolio slider
let row = 0;
var mainSlider = document.querySelector('.slider');
var sliderItems = mainSlider.querySelectorAll('.slider__item');
var arrows = document.querySelector('.arrows');
var previous = arrows.querySelector('.prev');
var next = arrows.querySelector('.next');
var container = document.querySelector('.portfolio');
var constant = 3;
var itemWidth = container.clientWidth;
var movePosition = Math.round(itemWidth / constant);

var maxWidthOfElement = (items) => {
	var elements = [];
	items.forEach(item => elements.push(item.querySelector('.media__element')));
	elements.forEach(item => item.style.maxWidth = `${itemWidth}px`);
};
maxWidthOfElement(sliderItems);

next.addEventListener('click', () => {
	row -= movePosition;
	position();
	disableArrows();
});

previous.addEventListener('click', () => {
	row += movePosition;
	position();
	disableArrows();
});

var position = () => {
	mainSlider.style.transform = `translateX(${row}px)`;
};

var disableArrows = () => {
	previous.disabled = row === 0;
	next.disabled = row <= -(sliderItems.length - (Math.round((sliderItems.length * movePosition / itemWidth) - constant))) * movePosition;
};

disableArrows();
/*var mainSlider = document.querySelector('.slider');
var sliderItems = mainSlider.querySelectorAll('.slider__item');
var arrows = document.querySelector('.arrows');
var previous = arrows.querySelector('.prev');
var next = arrows.querySelector('.next');
var container = document.querySelector('.portfolio');
var toShow = 3;
var toScroll = 1;
var itemWidth = Math.round(container.clientWidth / toShow);
var movePosition = Math.round(itemWidth * toScroll);

var allImages = function(items) {
	var elements = [];
	items.forEach(item => elements.push(item.querySelector('.media__element')));
	return elements;
};

sliderItems.forEach(sliderItem => sliderItem.style.minWidth = `${itemWidth}px`);

var row = 0;
next.addEventListener('click', function(evt) {
	evt.preventDefault;
	row -= movePosition;
	mainSlider.style.transform = `translateX(${row}px)`;
	(-row === (allImages(sliderItems).length - 5) * movePosition) ? next.classList.add('disable') : next.classList.remove('disable');
	row !== movePosition ? previous.classList.remove('disable') : next.classList.add('disable');
});

previous.addEventListener('click', function(evt) {
	evt.preventDefault;
	row += movePosition;
	mainSlider.style.transform = `translateX(${row}px)`;
	/*row === movePosition ? previous.classList.add('disable') : previous.classList.remove('disable');
	(-row !== (allImages(sliderItems).length - 5) * movePosition) ? next.classList.remove('disable') next.classList.add('disable');
});*/