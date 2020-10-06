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
var background = body.querySelector('.background');

var settings = () => {
	if (window.location.href.indexOf('portfolio') > -1) {
		header.style.display = 'none';
		backFirst.style.display = 'inline-block';
		footerLinks.forEach(footerLink => footerLink.style.display = 'none');
		body.style.background = 'black center / cover no-repeat';
		footer.style.padding = '0px 50px 0px 50px';
	} else if (window.location.href.indexOf('blog') > -1) {
		header.style.display = 'none';
		backFirst.style.display = 'inline-block';
		footerLinks.forEach(footerLink => footerLink.style.display = 'none');
		body.style.background = 'black center / cover no-repeat';
	} else if (window.location.href.indexOf('contacts') > -1) {
		header.style.display = 'none';
		backFirst.style.display = 'inline-block';
		body.style.transform = 'scale(1)';
		background.style.display = 'grid';
		backFirst.style.color = 'white';
		footerLinks.forEach(footerLink => footerLink.style.display = 'none');
	};
	if (!window.location.href.endsWith('portfolio/') && window.location.href.indexOf('portfolio') > -1) {
		backFirst.style.display = 'none';
		backSecond.style.display = 'inline-block';
	} else if (!window.location.href.endsWith('post/') && window.location.href.indexOf('post') > -1) {
		backFirst.style.display = 'none';
		backThird.style.display = 'inline-block';
	};
	if (window.location.href.indexOf('upload') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backSecond.style.color = 'black';
	} else if (window.location.href.indexOf('delete') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backSecond.style.display = 'none';
	} else if (window.location.href.indexOf('update') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backThird.style.display = 'none';
		backFourth.style.display = 'inline-block';
		backFourth.style.color = 'black';
	} else if (window.location.href.indexOf('post/create') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backFirst.style.display = 'none';
		backThird.style.display = 'inline-block';
		backThird.style.color = 'black';
	}; 
};

settings()

var backgroundThree = body.querySelector('.background_3');
var backgroundFour = body.querySelector('.background_4');
var paragraphs = body.querySelectorAll('p');


window.onload = show;

function show() {
	var preloader = body.querySelector('.preloader');
	preloader.style.display = 'none';
	if (window.location.href.indexOf('contacts') > -1) {
		paragraphs.forEach(paragraph => paragraph.style.transform = 'translateX(0px)');
		backgroundThree.style.transform = 'translateX(0px)';
		backgroundFour.style.transform = 'translateX(0px)';
	};
	// Portfolio slider
	let row = 0;
	var mainSlider = body.querySelector('.slider');
	var sliderItems = body.querySelectorAll('.slider__item');
	var arrows = body.querySelector('.arrows');
	var previous = arrows.querySelector('.prev');
	var next = arrows.querySelector('.next');
	var container = body.querySelector('.portfolio');
	var itemWidth = container.clientWidth;
	var constant = 3;
	
	var widthOfImages = [];
	var totalWidthOfImages = 0;
	sliderItems.forEach(sliderItem => widthOfImages.push(sliderItem.clientWidth));
	widthOfImages.forEach(i => totalWidthOfImages += i);
	
	var movePosition = () => {
		return Math.round(itemWidth / constant);
	};

	var position = () => {
		mainSlider.style.transform = `translateX(${row}px)`;
	};

	var disableArrows = () => {
		previous.disabled = row === 0;
		next.disabled = row <= -(totalWidthOfImages - itemWidth);
	};

	next.addEventListener('click', () => {
		row -= movePosition();
		position();
		disableArrows();
	});

	previous.addEventListener('click', () => {
		row += movePosition();
		position();
		disableArrows();
	});



	disableArrows();
};















