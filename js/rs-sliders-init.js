/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-product__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-product__slider');
		sliderBlocks.forEach(sliderBlock => {
			const pagination = sliderBlock.querySelector('.rs-product__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-product__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-product__button-prev');
			const navigation = sliderBlock.querySelector('.rs-product__navigation');

			const sliderSwiper = new Swiper(sliderBlock, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'progressbar'
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.2,
						spaceBetween: 16,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-document__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-document__slider');
		sliderBlocks.forEach(sliderBlock => {
			const pagination = sliderBlock.querySelector('.rs-document__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-document__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-document__button-prev');
			const navigation = sliderBlock.querySelector('.rs-document__navigation');

			const sliderSwiper = new Swiper(sliderBlock, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'progressbar'
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.2,
						spaceBetween: 16,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-partners__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-partners__slider');
		sliderBlocks.forEach(sliderBlock => {
			const pagination = sliderBlock.querySelector('.rs-partners__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-partners__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-partners__button-prev');
			const navigation = sliderBlock.querySelector('.rs-partners__navigation');

			const sliderSwiper = new Swiper(sliderBlock, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'progressbar'
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					539.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					767.98: {
						slidesPerView: 6,
						spaceBetween: 30,
					},
					991.98: {
						slidesPerView: 6,
						spaceBetween: 50,
					},
					1169.98: {
						slidesPerView: 8,
						spaceBetween: 50,
					},
					1439.98: {
						slidesPerView: 8,
						spaceBetween: 107,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-news__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-news__slider');
		sliderBlocks.forEach(sliderBlock => {
			const pagination = sliderBlock.querySelector('.rs-news__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-news__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-news__button-prev');
			const navigation = sliderBlock.querySelector('.rs-news__navigation');

			const sliderSwiper = new Swiper(sliderBlock, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'progressbar'
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.2,
						spaceBetween: 16,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				},
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});