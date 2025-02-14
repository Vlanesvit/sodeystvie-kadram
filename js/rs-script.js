/* ====================================
Проверка поддержки webp, добавление класса webp или no-webp для HTML
==================================== */
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
isWebp()

/* ====================================
Проверка мобильного браузера
==================================== */
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add('touch');
}
addTouchClass()

/* ====================================
Добавление loaded для HTML после полной загрузки страницы
==================================== */
function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 0);
	});
}
addLoadedClass()

/* ====================================
Инициализация галереи
==================================== */
Fancybox.bind("[data-fancybox]", {
	// Отключение возврата картинки к блоку
	hideClass: false, // Убирает стандартную анимацию
	dragToClose: false, // Отключает перетаскивание для закрытия

	Thumbs: {
		type: 'classic',
	},
});

/* ====================================
Табы
==================================== */
/*
Для родителя табов пишем атрибут data-tabs
Для родителя заголовков табов пишем атрибут data-tabs-titles
Для родителя блоков табов пишем атрибут data-tabs-body
Для родителя блоков табов можно указать data-tabs-hash, это втключит добавление хеша

Если нужно чтобы табы открывались с анимацией 
добавляем к data-tabs data-tabs-animate
По умолчанию, скорость анимации 500ms, 
указать свою скорость можно так: data-tabs-animate="1000"

Если нужно чтобы табы превращались в "спойлеры", на неком размере экранов, пишем параметры ширины.
Например: data-tabs="992" - табы будут превращаться в спойлеры на экранах меньше или равно 992px
*/
function tabs() {
	const tabs = document.querySelectorAll('[data-tabs]');
	let tabsActiveHash = [];

	// Получаем хэш из URL
	const hash = getHash();
	if (hash && hash.startsWith('tab-')) {
		tabsActiveHash = hash.replace('tab-', '').split('-');
	}

	if (tabs.length > 0) {
		resetTabs();
		handleHashChange();

		// Отслеживание изменения хэша
		window.addEventListener('hashchange', handleHashChange);

		tabs.forEach((tabsBlock, index) => {
			tabsBlock.classList.add('_tab-init');
			tabsBlock.setAttribute('data-tabs-index', index);
			tabsBlock.addEventListener("click", setTabsAction);
			initTabs(tabsBlock);
		});
	}

	// Инициализация медиа-запросов
	let mdQueriesArray = dataMediaQueries(tabs, "tabs");
	if (mdQueriesArray && mdQueriesArray.length) {
		mdQueriesArray.forEach(mdQueriesItem => {
			mdQueriesItem.matchMedia.addEventListener("change", () => {
				setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
			setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
		});
	}

	// Сброс вкладок
	function resetTabs() {
		document.querySelectorAll('._tab-active').forEach(el => el.classList.remove('_tab-active'));
	}

	// Функция обработки изменения хэша
	function handleHashChange() {
		const hash = getHash();
		if (hash && hash.startsWith('tab-')) {
			tabsActiveHash = hash.replace('tab-', '').split('-');
			const tabsBlockIndex = tabsActiveHash[0];
			const tabsTabIndex = tabsActiveHash[1];

			const tabsBlock = document.querySelector(`[data-tabs-index="${tabsBlockIndex}"]`);
			if (tabsBlock) {
				const tabTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
				const tabItems = tabsBlock.querySelectorAll('[data-tabs-item]');

				if (tabTitles[tabsTabIndex] && tabItems[tabsTabIndex]) {
					tabsBlock.querySelectorAll('._tab-active').forEach(el => el.classList.remove('_tab-active'));
					tabItems[tabsTabIndex].querySelectorAll('._tab-active').forEach(el => el.classList.remove('_tab-active'));
					tabTitles[tabsTabIndex].classList.add('_tab-active');
					tabItems[tabsTabIndex].classList.add('_tab-active');
					// Плавный скролл к верху блока табов
					tabsBlock.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}
		}
	}

	// Инициализация табов
	function initTabs(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles] button');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

		if (tabsTitles.length > 0 && tabsContent.length > 0) {
			tabsContent.forEach((content, index) => {
				if (tabsTitles[index]) {
					tabsTitles[index].setAttribute('data-tabs-title', '');
					content.setAttribute('data-tabs-item', '');

					// Если хэш блока не совпадает, добавляем активный класс
					if (!tabsActiveHashBlock && index === 0) {
						tabsTitles[index].classList.add('_tab-active');
						content.classList.add('_tab-active');
					}

					if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
						tabsTitles[index].classList.add('_tab-active');
						content.classList.add('_tab-active');
					}
				}
			});
		}
	}

	// Расстановка заголовков по медиа-запросам
	function setTitlePosition(tabsMediaArray, matchMedia) {
		tabsMediaArray.forEach(tabsMediaItem => {
			const tabsTitles = tabsMediaItem.item.querySelector('[data-tabs-titles]');
			const tabsContent = tabsMediaItem.item.querySelector('[data-tabs-body]');
			const tabTitles = Array.from(tabsMediaItem.item.querySelectorAll('[data-tabs-title]'));
			const tabItems = Array.from(tabsMediaItem.item.querySelectorAll('[data-tabs-item]'));

			if (matchMedia.matches) {
				tabItems.forEach((content, index) => {
					tabsContent.append(tabTitles[index]);
					tabsContent.append(content);
					tabsMediaItem.item.classList.add('_tab-spoller');
				});
			} else {
				tabTitles.forEach((title, index) => {
					tabsTitles.append(title);
					tabsMediaItem.item.classList.remove('_tab-spoller');
				});
			}
		});
	}

	// Обновление состояния табов
	function setTabsStatus(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

		tabsContent.forEach((content, index) => {
			if (tabsTitles[index].classList.contains('_tab-active')) {
				content.classList.add('_tab-active');
				setHash(`tab-${tabsBlockIndex}-${index}`);
			} else {
				tabsTitles[index].classList.remove('_tab-active')
				content.classList.remove('_tab-active');
			}
		});
	}

	// Обработка кликов по заголовкам табов
	function setTabsAction(e) {
		const tabTitle = e.target.closest('[data-tabs-title]');
		if (tabTitle) {
			const tabsBlock = tabTitle.closest('[data-tabs]');
			if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelector('._slide')) {
				tabsBlock.querySelectorAll('[data-tabs-title]._tab-active').forEach(item => item.classList.remove('_tab-active'));
				tabTitle.classList.add('_tab-active');
				setTabsStatus(tabsBlock);
			}
			e.preventDefault();
			AOS.refresh()
		}
	}
}
if (document.querySelector('[data-tabs]')) {
	tabs()
}

/* ====================================
Добавить картинкам draggable="false"
==================================== */
const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
	imgs[i].setAttribute('draggable', false);
}

//========================================================================================================================================================
// Обработа медиа запросов из атрибутов 
function dataMediaQueries(array, dataSetValue) {
	// Получение объектов с медиа запросами
	const media = Array.from(array).filter(function (item, index, self) {
		if (item.dataset[dataSetValue]) {
			return item.dataset[dataSetValue].split(",")[0];
		}
	});
	// Инициализация объектов с медиа запросами
	if (media.length) {
		const breakpointsArray = [];
		media.forEach(item => {
			const params = item.dataset[dataSetValue];
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});
		// Получаем уникальные брейкпоинты
		let mdQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mdQueries = uniqArray(mdQueries);
		const mdQueriesArray = [];

		if (mdQueries.length) {
			// Работаем с каждым брейкпоинтом
			mdQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const itemsArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				mdQueriesArray.push({
					itemsArray,
					matchMedia
				})
			});
			return mdQueriesArray;
		}
	}
}

// Уникализация массива
function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}

//========================================================================================================================================================
// Вспомогательные модули блокировки прокрутки
let bodyLockStatus = true;
let bodyLockToggle = (delay = 300) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
let bodyUnlock = (delay = 300) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
let bodyLock = (delay = 300) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			// el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}

//========================================================================================================================================================
// Вспомогательные модули плавного раскрытия и закрытия объекта
let _slideUp = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

// Получение хеша в адресе сайта
function getHash() {
	if (location.hash) { return location.hash.replace('#', ''); }
}
// Указание хеша в адресе сайта
function setHash(hash) {
	hash = hash ? `#${hash}` : window.location.href.split('#')[0];
	history.pushState('', '', hash);
}
