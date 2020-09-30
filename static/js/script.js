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
var footerLinks = footer.querySelectorAll('.footer__link');

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
		body.style.background = 'black center / cover no-repeat';
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
	} else if (window.location.href.indexOf('post/create') > -1) {
		body.style.background = 'white center / cover no-repeat';
		backFirst.style.display = 'none';
		backThird.style.display = 'inline-block';
		backThird.style.color = 'black';
	}; 
};

settings()

var contactsOne = body.querySelector('.contacts_1');
var contactsThree = body.querySelector('.contacts_3');
var paragraphs = body.querySelectorAll('p');


window.onload = show;

function show() {
	var preloader = body.querySelector('.preloader');
	preloader.style.display = 'none';
	if (window.location.href.indexOf('contacts') > -1) {
		paragraphs.forEach(paragraph => paragraph.style.transform = 'translateX(0px)');
		contactsOne.style.transform = 'translateX(0px)';
		contactsThree.style.transform = 'translateX(0px)';
	};
	let row = 0;
	var mainSlider = body.querySelector('.slider');
	var sliderItems = body.querySelectorAll('.slider__item');
	var arrows = body.querySelector('.arrows');
	var previous = arrows.querySelector('.prev');
	var next = arrows.querySelector('.next');
	var container = body.querySelector('.portfolio');
	var itemWidth = container.clientWidth;
	var constant = 3;
	console.log(sliderItems.length);
	console.log(itemWidth);
	var bla = [];
	var blaBla = 0;
	sliderItems.forEach(sliderItem => bla.push(sliderItem.clientWidth));
	bla.forEach(i => blaBla += i);
	console.log(bla);
	console.log(blaBla);
	var movePosition = () => {
		return Math.round(itemWidth / constant);
	};

	var position = () => {
		mainSlider.style.transform = `translateX(${row}px)`;
	};

	var disableArrows = () => {
		previous.disabled = row === 0;
		next.disabled = row <= -(blaBla - (sliderItems[0].clientWidth + sliderItems[1].clientWidth + sliderItems[2].clientWidth));
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

// Portfolio slider













