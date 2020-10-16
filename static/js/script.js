// Main settings
"use strict";

let body = document.querySelector('body');
let header = body.querySelector('.header');
let footer = body.querySelector('.footer');
let backgroundContacts = body.querySelector('.backgroundForContacts');
let sliderArrows = body.querySelector('.arrows');
let blog = body.querySelector('.container__blog');

let cssProperties = {
	preloader: body.querySelector('.preloader'),
	headerMenu: header.querySelector('.header__menu'),
	headerName: header.querySelector('.header__name'),
	backFirst: footer.querySelector('.back__first'),
	backSecond: footer.querySelector('.back__second'),
	backThird: footer.querySelector('.back__third'),
	backFourth: footer.querySelector('.back__fourth'),
	footerLinks: footer.querySelectorAll('.footer__link'),
	footerImgs: footer.querySelectorAll('img'),
	allFooterLinks: footer.querySelectorAll('a'),
	lastLife: body.querySelector('.last__life'),
	newLife1: body.querySelector('.new__life_1'),
	newLife2: body.querySelector('.new__life_2'),
	mainSlider: body.querySelector('.slider'),
	sliderItems: body.querySelectorAll('.slider__item'),
	previousArrow: sliderArrows?.querySelector('.prev'),
	nextArrow: sliderArrows?.querySelector('.next'),
	containerOfSlider: body.querySelector('.portfolio'),
	posts: blog?.querySelectorAll('.blog'),
	post: body.querySelector('.post'),
	firstPartOfContactsBackground: backgroundContacts.querySelector('.first__part'),
	secondPartOfContactsBackground: backgroundContacts.querySelector('.second__part'),
	linesWithContacts: body.querySelectorAll('p'),
};

function settings() {
	if (window.location.href.indexOf('portfolio') > -1) {
		displayNone(header);
		displayBlock(cssProperties.backFirst);
		displayNoneForFooterLinks(cssProperties.footerLinks);
		changeBackgroundToBlack(body);
		footer.style.padding = '0px 50px 0px 50px';
	} else if (window.location.href.indexOf('blog') > -1) {
		displayNone(header);
		displayBlock(cssProperties.backFirst);
		displayNoneForFooterLinks(cssProperties.footerLinks);
		changeBackgroundToBlack(body);
	} else if (window.location.href.indexOf('contacts') > -1) {
		displayNone(header);
		displayBlock(cssProperties.backFirst);
		displayNoneForFooterLinks(cssProperties.footerLinks);
		body.style.transform = 'scale(1)';
		backgroundContacts.style.display = 'grid';
		cssProperties.backFirst.style.color = 'white';
	};

	if (!window.location.href.endsWith('portfolio/') && 
		window.location.href.indexOf('portfolio') > -1) {
		displayNone(cssProperties.backFirst);
		displayBlock(cssProperties.backSecond);
	} else if (!window.location.href.endsWith('post/') && 
		window.location.href.indexOf('post') > -1) {
		displayNone(cssProperties.backFirst);
		displayBlock(cssProperties.backThird);
	};

	if (window.location.href.indexOf('upload') > -1) {
		changeBackgroundToWhite(body);
		changeColor(cssProperties.backSecond);
	} else if (window.location.href.indexOf('delete') > -1) {
		changeBackgroundToWhite(body);
		displayNone(cssProperties.backSecond);
	} else if (window.location.href.indexOf('update') > -1) {
		changeBackgroundToWhite(body);
		displayNone(cssProperties.backThird);
		displayBlock(cssProperties.backFourth);
		changeColor(cssProperties.backFourth);
	} else if (window.location.href.indexOf('post/create') > -1) {
		changeBackgroundToWhite(body);
		displayNone(cssProperties.backFirst);
		displayBlock(cssProperties.backThird);
		changeColor(cssProperties.backThird);
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
	/*Portfolio slider must be in show(), 
	because widths of images are incorrect if page don't load completely.*/

	let row = 0;
	let itemWidth = cssProperties.containerOfSlider?.clientWidth;
	let constant = 3;
	let widthOfImages = [];
	let sumOfWidthOfImages = 0;

	cssProperties.sliderItems.forEach(sliderItem => widthOfImages.push(sliderItem.clientWidth));
	widthOfImages.forEach(i => sumOfWidthOfImages += i);
	
	if (cssProperties.nextArrow != undefined && cssProperties.previousArrow != undefined) {
		cssProperties.nextArrow.addEventListener('click', () => {
			row -= calcMovementDistance();
			movePosition();
			disableArrows();
		});

		cssProperties.previousArrow.addEventListener('click', () => {
			row += calcMovementDistance();
			movePosition();
			disableArrows();
		});
		function disableArrows() {
			cssProperties.previousArrow.disabled = row === 0;
			cssProperties.nextArrow.disabled = row <= -(sumOfWidthOfImages - itemWidth);
		};

		disableArrows();
	};

	function calcMovementDistance() {
		return Math.round(itemWidth / constant);
	};

	function movePosition() {
		cssProperties.mainSlider.style.transform = `translateX(${row}px)`;
	};

	/*Settings of animations. 
	Code for animations must be in show(), because it doesn't work 
	if page don't load completely.*/

	cssProperties.preloader.style.display = 'none';

	// Animations of main page
	moveOneElement(cssProperties.headerName);
	moveOneElement(cssProperties.headerMenu);
	moveOneElement(cssProperties.lastLife);
	moveOneElement(cssProperties.newLife1);
	moveOneElement(cssProperties.newLife2);
	moveManyElements(cssProperties.allFooterLinks);
	moveManyElements(cssProperties.footerImgs);
	// Animations of portfolio page
	moveOneElement(cssProperties.containerOfSlider);
	moveOneElement(sliderArrows);
	// Animations of blog page
	moveManyElements(cssProperties.posts);
	moveOneElement(cssProperties.post);
	// Animations of contacts page
	moveOneElement(cssProperties.firstPartOfContactsBackground);
	moveOneElement(cssProperties.secondPartOfContactsBackground);
	moveManyElements(cssProperties.linesWithContacts);

	function moveOneElement(element) {
		if (element != null) {
			element.style.transform = 'translate(0px, 0px)';
		};
	};

	function moveManyElements(elements) {
		if (elements != undefined) {
			elements.forEach(element => element.style.transform = 'translate(0px, 0px)');
		};
	};
};

/*Animations of buttons in footer and header was realized by pseudo-class hover, 
but some of them was broken by move animations and pseudo-class hover doesn't work.
So this animations are working with mouseover and mouseout*/

animationOfButton(cssProperties.backFirst);
animationOfButton(cssProperties.backSecond);
animationOfButton(cssProperties.backThird);
animationOfButton(cssProperties.backFourth);
animationOfButton(cssProperties.headerName);
animationOfButtons(cssProperties.footerImgs);

function animationOfButton(element) {
	element.addEventListener("mouseover" , function(event) {
		event.target.style.transform = 'scale(1.05)';
		event.target.style.transition = 'all 1s ease';
	});
	element.addEventListener("mouseout" , function(event) {
		event.target.style.transform = 'scale(1)';
		event.target.style.transition = 'all 1s ease';
	});
};
function animationOfButtons(elements) {
	elements.forEach(element => {
		element.addEventListener("mouseover" , function(event) {
			event.target.style.transform = 'translateY(5px)';
			event.target.style.transition = 'all 1s ease';
		});
		element.addEventListener("mouseout" , function(event) {
			event.target.style.transform = 'translateY(0px)';
			event.target.style.transition = 'all 1s ease';
		});
	});
};