
//Инициализация:
let topSlider = new Swiper('.top-slider', {
	// ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ:
	// Бесконечная прокрутка (скроллбар отключать, мультирядность отключать):
	loop: true,
	// Свободная прокрутка:
	//freeMode: true,
	//Автоматическая прокрутка (пауза, остановить на последнем, отключить при ручном):
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},


	// Автовысота (удобно с разным количеством текста):
	autoHeight: false,

	// Отступ между слайдами:
	//spaceBetween: 20,

	// Количество показанных слайдов (можно дробное число и auto):
	slidesPerView: 1,

	// Количество пролистываемых слайдов:
	//slidesPerGroup: 3,

	// Первый активный слайд по центру:
	centeredSlides: true,

	// Стартовій слайд:
	//initialSlide: 1,

	// Скорость переключения (300 по умолчанию):
	speed: 500,

	// Эффекты переключения: (slide по умолчанию):
	/*
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	*/
	/*
	effect: 'flip',
	flipEffect: {
		slideShadows: true,
		limitRotation: true
	},
	*/

	// в стилях ограничить ширину слайдера 
	//	.slider { width: 500px;}
	/*
		effect: 'cube',
		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowsScale: 0.94
		},
	*/
	/*
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 40,
		stretch: 50,
		slideShadows: true,
	},
	*/

	// Адаптивность:
	//	Ширина экрана:
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	*/

},
);


// пауза автопрокрутки при наведении:
let slider = document.querySelector('.top-slider');
slider.addEventListener('mouseenter', function (e) {
	topSlider.autoplay.stop();
});
slider.addEventListener("mouseleave", function (e) {
	topSlider.params.autoplay.disableOnInteraction = false;
	//topSlider.params.autoplay.delay = 500;
	topSlider.autoplay.start();
});



// ------------------------------------------------------------------------------
let logoSlider = new Swiper('.logo-slider', {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,
},
);

//Инициализация:
let logoSlider2 = new Swiper('.logo-slider2', {
	loop: true,

	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},

	pagination: {
		el: '.logo-slider2__pagination',
		type: 'fraction',
	},

	// Скорость переключения (300 по умолчанию):
	speed: 300,

	// Эффекты переключения: (slide по умолчанию):

	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},

	thumbs: {
		swiper: logoSlider,
	},
	breakpoints: {
		769: {
			autoHeight: false,
		},

	},
},
);






// ------------------------------------------------------------------------------
//Инициализация:
let portfolioSlider = new Swiper('.portfolio__slider', {
	// ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ:

	// Направление:
	//direction: 'vertical',

	// Бесконечная прокрутка (скроллбар отключать, мультирядность отключать):
	loop: true,

	// Количество дублирующих слайдов:
	//loopedSlides: 0,

	// Свободная прокрутка:
	//freeMode: true,

	//Автоматическая прокрутка (пауза, остановить на последнем, отключить при ручном):
	/*autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},*/

	/* ЕСЛИ нужна pagination (точки):
	HTML:
	<div class="swiper-pagination"></div>
	
	pagination: {
		el: '.swiper-pagination',

		// ИЛИ bullets
		type: 'bullets',
		clickable: true,
		//dynamic bullets
		dynamicBullets: true,
		//custom bullets
		renderBullet: function (index, className) {
			return `<span class="${className}">${index + 1}</span>`;
		},*/

	/* ИЛИ fractions		
	type: 'fraction',
	// Кастомные:
	renderFraction: function (currentClass, totalClass) {
	return `Photo <span class="${currentClass}""></span> from <span class="${totalClass}"></span>`;
	},
	*/
	/* ИЛИ пргрессбар:
	type: 'progressbar',
},
*/



	/* Если нужен скроллбар (и в HTML 
	<div class="swiper-scrollbar"></div>)
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	*/
	// Курсор-рука:
	grabCursor: true,

	// Переключение на слайдб по которому клик:
	slideToClickedSlide: true,

	//Добавление адреса в адресной строке слайду:
	//hashNavigation: {
	//	watchState: true,
	//},

	// Пееключение стрелками:
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	// Прокрутка колесиком:
	mousewheel: {
		eventsTarget: ".portfolio__slider"
	},

	// Автовысота (удобно с разным количеством текста):
	//autoHeight: true,

	// Отступ между слайдами:
	spaceBetween: 0,

	// Количество показанных слайдов (можно дробное число и auto):
	slidesPerView: 1.1,

	// Количество пролистываемых слайдов:
	//slidesPerGroup: 3,

	// Первый активный слайд по центру:
	//centeredSlides: true,

	// Стартовій слайд:
	//initialSlide: 1,

	/*---------------------------------------------------------
		Мультирядность (обязательно отключить автовысоту,       |
		Количество показанных слайдов 2 или больше,             |
		В стилях:
		.slider {
			height: 700px;
			.swiper-slide {
				height: calc((100% - 30px) / 2);
				overflow: hidden;
			}
		}
	----------------------------------------------------------:
	SlidesPerColumn: 2,
	*/

	// Скорость переключения (300 по умолчанию):
	//speed: 1000,

	// Эффекты переключения: (slide по умолчанию):
	/*
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	*/
	/*
	effect: 'flip',
	flipEffect: {
		slideShadows: true,
		limitRotation: true
	},
	*/

	// в стилях ограничить ширину слайдера 
	//	.slider { width: 500px;}
	/*
		effect: 'cube',
		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowsScale: 0.94
		},
	*/
	/*
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 40,
		stretch: 50,
		slideShadows: true,
	},
	*/

	// Адаптивность:
	//	Ширина экрана:

	breakpoints: {
		420: {
			slidesPerView: 2.1,
		},
		769: {
			slidesPerView: 3.1,
		},

	},


},
);



//------------------------------------------------------------------------------



// ------------------------------------------------------------------------------
//Инициализация:


let reviewsSlider = new Swiper('.reviews__slider', {
	// ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ:

	// Направление:
	//direction: 'vertical',

	// Бесконечная прокрутка (скроллбар отключать, мультирядность отключать):
	loop: true,

	// Количество дублирующих слайдов:
	//loopedSlides: 0,

	// Свободная прокрутка:
	//freeMode: true,

	//Автоматическая прокрутка (пауза, остановить на последнем, отключить при ручном):
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},

	/* ЕСЛИ нужна pagination (точки):
	HTML:
	<div class="swiper-pagination"></div>
	
	pagination: {
		el: '.swiper-pagination',

		// ИЛИ bullets
		type: 'bullets',
		clickable: true,
		//dynamic bullets
		dynamicBullets: true,
		//custom bullets
		renderBullet: function (index, className) {
			return `<span class="${className}">${index + 1}</span>`;
		},*/

	/* ИЛИ fractions		
	type: 'fraction',
	// Кастомные:
	renderFraction: function (currentClass, totalClass) {
	return `Photo <span class="${currentClass}""></span> from <span class="${totalClass}"></span>`;
	},
	*/
	/* ИЛИ пргрессбар:
	type: 'progressbar',
},
*/

	/* Навигационные кнопки-стрелки
	HTML:
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
	*/
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},


	// Пееключение стрелками:
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	// Прокрутка колесиком:
	//mousewheel: {
	//	eventsTarget: ".reviews__slider"
	//},

	// Автовысота (удобно с разным количеством текста):
	autoHeight: true,

	// Отступ между слайдами:
	//spaceBetween: 20,

	// Количество показанных слайдов (можно дробное число и auto):
	slidesPerView: 1,

	// Адаптивность:
	//	Ширина экрана:

	breakpoints: {
		593: {
			slidesPerView: 2,
		},
		769: {
			slidesPerView: 3,
		},

	},


},
);