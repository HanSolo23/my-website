// Main settings

"use strict";
let body = document.querySelector('body');
let header = body.querySelector('.header');
let headerMenu = header.querySelector('.header__menu');
let headerName = header.querySelector('.header__name');
let links = header.querySelectorAll('.link');
let footer = body.querySelector('.footer');
let backgroundContacts = body.querySelector('.backgroundForContacts');
let backFirst = footer.querySelector('.back__first');
let backSecond = footer.querySelector('.back__second');
let backThird = footer.querySelector('.back__third');
let backFourth = footer.querySelector('.back__fourth');
let footerLinks = footer.querySelectorAll('.footer__link');
let footerImgs = footer.querySelectorAll('img');
let allFooterLinks = footer.querySelectorAll('a');

function settings() {
	if (window.location.href.indexOf('portfolio') > -1) {
		displayNone(header);
		displayBlock(backFirst);
		displayNoneForFooterLinks(footerLinks);
		changeBackgroundToBlack(body);
		footer.style.padding = '0px 50px 0px 50px';
	} else if (window.location.href.indexOf('blog') > -1) {
		displayNone(header);
		displayBlock(backFirst);
		displayNoneForFooterLinks(footerLinks);
		changeBackgroundToBlack(body);
	} else if (window.location.href.indexOf('contacts') > -1) {
		displayNone(header);
		displayBlock(backFirst);
		displayNoneForFooterLinks(footerLinks);
		body.style.transform = 'scale(1)';
		backgroundContacts.style.display = 'grid';
		backFirst.style.color = 'white';
	};

	if (!window.location.href.endsWith('portfolio/') && 
		window.location.href.indexOf('portfolio') > -1) {
		displayNone(backFirst);
		displayBlock(backSecond);
	} else if (!window.location.href.endsWith('post/') && 
		window.location.href.indexOf('post') > -1) {
		displayNone(backFirst);
		displayBlock(backThird);
	};

	if (window.location.href.indexOf('upload') > -1) {
		changeBackgroundToWhite(body);
		changeColor(backSecond);
	} else if (window.location.href.indexOf('delete') > -1) {
		changeBackgroundToWhite(body);
		displayNone(backSecond);
	} else if (window.location.href.indexOf('update') > -1) {
		changeBackgroundToWhite(body);
		displayNone(backThird);
		displayBlock(backFourth);
		changeColor(backFourth);
	} else if (window.location.href.indexOf('post/create') > -1) {
		changeBackgroundToWhite(body);
		displayNone(backFirst);
		displayBlock(backThird);
		changeColor(backThird);
	}; 

	function changeBackgroundToWhite(element) {
		element.style.background = 'white center / cover no-repeat';
	};

	function changeBackgroundToBlack(element) {
		element.style.background = 'black center / cover no-repeat';
	};

	function changeColor(element) {
		element.style.color = 'black';
	};

	function displayNone(element) {
		element.style.display = 'none';
	};

	function displayBlock(element) {
		element.style.display = 'inline-block';
	};

	function displayNoneForFooterLinks(elements) {
		elements.forEach(element => element.style.display = 'none');
	};
};

settings()

window.onload = show;

function show() {
	// Portfolio slider

	if (window.location.href.endsWith('portfolio/')) {
		let row = 0;
		let mainSlider = body.querySelector('.slider');
		let sliderItems = body.querySelectorAll('.slider__item');
		let sliderArrows = body.querySelector('.arrows');
		let previousArrow = sliderArrows.querySelector('.prev');
		let nextArrow = sliderArrows.querySelector('.next');
		let containerOfSlider = body.querySelector('.portfolio');
		let itemWidth = containerOfSlider.clientWidth;
		let constant = 3;

		let widthOfImages = [];
		let sumOfWidthOfImages = 0;

		sliderItems.forEach(sliderItem => widthOfImages.push(sliderItem.clientWidth));

		widthOfImages.forEach(i => sumOfWidthOfImages += i);

		nextArrow.addEventListener('click', () => {
			row -= calcMovementDistance();
			movePosition();
			disableArrows();
		});

		previousArrow.addEventListener('click', () => {
			row += calcMovementDistance();
			movePosition();
			disableArrows();
		});

		function calcMovementDistance() {
			return Math.round(itemWidth / constant);
		};

		function movePosition() {
			mainSlider.style.transform = `translateX(${row}px)`;
		};

		function disableArrows() {
			previousArrow.disabled = row === 0;
			nextArrow.disabled = row <= -(sumOfWidthOfImages - itemWidth);
		};

		disableArrows();

	//Settings of animations

		containerOfSlider.style.transform = 'translateX(0px)';
		sliderArrows.style.transform = 'translateY(0px)';
	};

	let preloader = body.querySelector('.preloader');
	preloader.style.display = 'none';

	if (window.location.href.indexOf('portfolio') > -1) {
		moveManyElements(allFooterLinks);
	} else if (window.location.href.indexOf('blog') > -1) {
		moveManyElements(allFooterLinks);
	};

	if (window.location.href.endsWith('blog/')) {
		let blog = body.querySelector('.container__blog');
		let posts = blog.querySelectorAll('.blog');
		moveManyElements(posts);
	} else if (window.location.href.indexOf('blog/post') > -1 && 
		!window.location.href.endsWith('create') && 
		!window.location.href.endsWith('update') && 
		!window.location.href.endsWith('delete')) {
		let post = body.querySelector('.post');
		moveOneElement(post);
	};

	if (window.location.href.indexOf('contacts') > -1) {
		let firstPartOfContactsBackground = body.querySelector('.first__part');
		let secondPartOfContactsBackground = body.querySelector('.second__part');
		let linesWithContacts = body.querySelectorAll('p');
		moveOneElement(firstPartOfContactsBackground);
		moveOneElement(secondPartOfContactsBackground);
		moveManyElements(linesWithContacts);
		moveManyElements(allFooterLinks);
	} else if (window.location.href.endsWith('')) {
		let lastLife = body.querySelector('.last__life');
		let newLife1 = body.querySelector('.new__life_1');
		let newLife2 = body.querySelector('.new__life_2');
		moveOneElement(lastLife);
		moveOneElement(newLife1);
		moveOneElement(newLife2);
		moveOneElement(headerName);
		moveOneElement(headerMenu);
		moveManyElements(footerImgs);
	};

	function moveOneElement(element) {
			element.style.transform = 'scale(1) translate(0px, 0px)';
	};

	function moveManyElements(elements) {
			elements.forEach(element => element.style.transform = 'translate(0px, 0px)');;
	};
};