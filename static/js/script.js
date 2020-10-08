// Main settings
var body = document.querySelector('body');
var headerMenu = document.querySelector('.header__menu');
var headerName = body.querySelector('.header__name');
var header = body.querySelector('.header');
var links = body.querySelectorAll('.link');
var footer = body.querySelector('.footer');
var backgroundContacts = body.querySelector('.background');
var backFirst = footer.querySelector('.back__first');
var backSecond = footer.querySelector('.back__second');
var backThird = footer.querySelector('.back__third');
var backFourth = footer.querySelector('.back__fourth');
var footerLinks = footer.querySelectorAll('.footer__link');
var footerImgs = footer.querySelectorAll('img');
var allFooterLinks = footer.querySelectorAll('a');
function settings() {
	function background(element) {
		element.style.background = 'white center / cover no-repeat';
	};
	function backgroundBlack(element) {
		element.style.background = 'black center / cover no-repeat';
	};
	function color(element) {
		element.style.color = 'black';
	};
	function displayNone(element) {
		element.style.display = 'none';
	};
	function displayBlock(element) {
		element.style.display = 'inline-block';
	};
	function displaysNone(elements) {
		elements.forEach(element => element.style.display = 'none');
	};
	if (window.location.href.indexOf('portfolio') > -1) {
		displayNone(header);
		displayBlock(backFirst);
		displaysNone(footerLinks);
		backgroundBlack(body);
		footer.style.padding = '0px 50px 0px 50px';
	} else if (window.location.href.indexOf('blog') > -1) {
		displayNone(header);
		displayBlock(backFirst);
		displaysNone(footerLinks);
		backgroundBlack(body);
	} else if (window.location.href.indexOf('contacts') > -1) {
		displayNone(header);
		displayBlock(backFirst);
		displaysNone(footerLinks);
		body.style.transform = 'scale(1)';
		backgroundContacts.style.display = 'grid';
		backFirst.style.color = 'white';
	};
	if (!window.location.href.endsWith('portfolio/') && window.location.href.indexOf('portfolio') > -1) {
		displayNone(backFirst);
		displayBlock(backSecond);
	} else if (!window.location.href.endsWith('post/') && window.location.href.indexOf('post') > -1) {
		displayNone(backFirst);
		displayBlock(backThird);
	};
	if (window.location.href.indexOf('upload') > -1) {
		background(body);
		color(backSecond);
	} else if (window.location.href.indexOf('delete') > -1) {
		background(body);
		displayNone(backSecond);
	} else if (window.location.href.indexOf('update') > -1) {
		background(body);
		displayNone(backThird);
		displayBlock(backFourth);
		color(backFourth);
	} else if (window.location.href.indexOf('post/create') > -1) {
		background(body);
		displayNone(backFirst);
		displayBlock(backThird);
		color(backThird);
	}; 
};
settings()
window.onload = show;
function show() {
	// Portfolio slider
	if (window.location.href.endsWith('portfolio/')) {
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
	//Settings of animations
		container.style.transform = 'translateX(0px)';
		arrows.style.transform = 'translateY(0px)';
	};
	function transformOne(element) {
			element.style.transform = 'scale(1) translate(0px, 0px)';
	};
	function transformTwo(elements) {
			elements.forEach(element => element.style.transform = 'translate(0px, 0px)');;
	};
	if (window.location.href.indexOf('portfolio') > -1) {
		transformTwo(allFooterLinks);
	} else if (window.location.href.indexOf('blog') > -1) {
		transformTwo(allFooterLinks);
	};
	if (window.location.href.endsWith('blog/')) {
		var blog = body.querySelector('.container__blog');
		var posts = blog.querySelectorAll('.blog');
		transformTwo(posts);
	} else if (window.location.href.indexOf('blog/post') > -1 && !window.location.href.endsWith('create') && !window.location.href.endsWith('update') && !window.location.href.endsWith('delete')) {
		var post = body.querySelector('.post');
		transformOne(post);
	};
	var preloader = body.querySelector('.preloader');
	preloader.style.display = 'none';
	if (window.location.href.indexOf('contacts') > -1) {
		var backgroundThree = body.querySelector('.background_3');
		var backgroundFour = body.querySelector('.background_4');
		var paragraphs = body.querySelectorAll('p');
		transformOne(backgroundThree);
		transformOne(backgroundFour);
		transformTwo(paragraphs);
		transformTwo(allFooterLinks);
	} else if (window.location.href.endsWith('')) {
		var lastLife = body.querySelector('.last__life');
		var newLife1 = body.querySelector('.new__life_1');
		var newLife2 = body.querySelector('.new__life_2');
		transformOne(lastLife);
		transformOne(newLife1);
		transformOne(newLife2);
		transformOne(headerName);
		transformOne(headerMenu);
		transformTwo(footerImgs);
	};
};