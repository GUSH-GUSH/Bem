//Получение объектов
var body = document.querySelector('body');
var banner = document.querySelector('.banner');
var header = document.querySelector('.header');
var menu = document.querySelector('.header .menu');
var burger_btn = document.querySelector('.burger');
var wrapper = document.querySelector(".wrapper");

//Вспомогательные переменные
var startWidth;
var isOpening = false;
var burgerShowWidth = 520;
var headerHeight = header.clientHeight;

console.log (headerHeight);
//Клик по бургеру
burger_btn.onclick = burger;

//Функция бургера
function burger() {
	if (isOpening == false){
		//Стартовая ширина страницы, до открытия
		//бургера (фикс полосы прокрутки)
		startWidth = body.clientWidth;

		//Добавление класса active
		body.classList.add('active');
		header.classList.add('active');
		menu.classList.add('active');

		// console.log(body.clientWidth);
		// console.log(body.clientWidth-startWidth);
		
		//Фикс полосы прокрутки
		scrollWidth = body.clientWidth - startWidth;

		body.style.paddingRight = scrollWidth + "px";
		header.style.paddingRight = scrollWidth + "px";
		menu.style.paddingLeft = 0;
		
		//Переключение положения бургера
		isOpening = true;
	}else {
		//Удаление класса active
		body.classList.remove('active');
		header.classList.remove('active');
		menu.classList.remove('active');

		//Фикс полосы прокрутки
		body.style.paddingRight = 0;
		header.style.paddingRight = 0;
		menu.style.paddingLeft = scrollWidth + "px";

		//Переключение положения бургера
		isOpening = false;
	}
}

window.onresize = function () {
	//console.log(window.innerWidth);

	//Фикс полосы прокрутки и закрытие баннера при resize
	if(isOpening == true){
		if(window.innerWidth > burgerShowWidth)
			burger ();
	}

	//Отступ баннера от хедера
	headerHeight = header.clientHeight;
	if(window.innerWidth <= burgerShowWidth){
		banner.style.marginTop = headerHeight+'px';
		banner.style.flexBasis = "calc(100vh - " + headerHeight + "px)";
	}else {
		banner.style.marginTop = 0;
		banner.style.flexBasis = "100vh";
	}
}


//Отступ баннера от хедера
if(window.innerWidth <= burgerShowWidth){
	banner.style.marginTop = headerHeight+'px';
	banner.style.flexBasis = "calc(100vh - " + headerHeight + "px)";
}

