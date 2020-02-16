var cart = {}; //корзина
$(document).ready(function() {
	'use strict';
	
	loadGoodsWoman();
	loadGoodsMan();
	loadGoodsTop();
	loadGoodsHoliday();
	loadGoodsPerfume();
	loadGoodsBouquet();
	loadGoodsBeauty();
	loadGoodsBaby();
	loadAllGoods();
	checkCart();
	showCartCount();


	//Показ выбранной галереи
	$('.showGallery').on('click', function() {
		$('.gallery-grid').removeClass('show');
		if ($(this).hasClass('womanShow')) {
			$('#woman-collection').addClass('show');
		}
		if ($(this).hasClass('manShow')) {
			$('#man-collection').addClass('show');
		}
		if ($(this).hasClass('holidayShow')) {
			$('#holiday-collection').addClass('show');
		}
		if ($(this).hasClass('beautyShow')) {
			$('#beauty-collection').addClass('show');
		}
		if ($(this).hasClass('babyShow')) {
			$('#baby-collection').addClass('show');
		}
		if ($(this).hasClass('bouquetShow')) {
			$('#bouquet-collection').addClass('show');
		}
		if ($(this).hasClass('perfumeShow')) {
			$('#perfume-collection').addClass('show');
		}
	});

	$('#btn-all').on('click', function() {
		$('.gallery-grid').removeClass('show');
		$('#allGoods').addClass('show');
	});

});

function addGalleryGrid(loc, section) {
	$.getJSON(loc, function(data) {
		var html = '';
		for (var card in data) {
     	html += '<div class="card__item">';
		html += '<div class="card__img-wrap"><img src="'+data[card]['img']+ '" alt="soap" class="card__img"></div>';
		html += '<div class="card__body">';
		html += '<h3 class="card__title">' +data[card]['name']+ '</h3>';
		html += '<span class="card__price-value">' +data[card]['price']+ '</span>';
		html += '<span class="card__currency"> грн</span>';
		html += '<svg class="item-cart" data-id="'+card+'" data-name="'+data[card]['name']+'" data-price="'+data[card]['price']+'" enable-background="new 0 0 511.343 511.343" viewBox="0 0 511.343 511.343">';
		html +='<path d="m490.334 106.668h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468c12.825 142.882-20.321-226.415 24.153 269.089 1.714 19.394 12.193 40.439 30.245 54.739-32.547 41.564-2.809 102.839 50.134 102.839 43.942 0 74.935-43.826 59.866-85.334h114.936c-15.05 41.455 15.876 85.334 59.866 85.334 35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.234-6.71-26.093-20.374-26.093zm-341.334 341.337c-11.946 0-21.666-9.72-21.666-21.667s9.72-21.667 21.666-21.667c11.947 0 21.667 9.72 21.667 21.667s-9.72 21.667-21.667 21.667zm234.667 0c-11.947 0-21.667-9.72-21.667-21.667s9.72-21.667 21.667-21.667 21.667 9.72 21.667 21.667-9.72 21.667-21.667 21.667zm47.366-169.726-323.397 19.005-13.34-148.617h369.142z"></path>';
		html += '</svg>';
		html += '</div>';
		html += '</div>';	
		};
		$(section).html(html);
		$('svg.item-cart').on('click', addToCart);
	});
}


//создаем динамическую галерею 
function loadGoodsWoman() {
	addGalleryGrid('data/goods-woman.json', '.goodsWoman');
}
function loadGoodsMan() {
	addGalleryGrid('data/goods-man.json', '.goodsMan');
}
function loadGoodsTop() {
	addGalleryGrid('data/goods-top.json', '.goodsTop');
}	
function loadGoodsHoliday() {
	addGalleryGrid('data/goods-holiday.json', '.goodsHoliday');
}	
function loadGoodsBaby() {
	addGalleryGrid('data/goods-baby.json', '.goodsBaby');
}	
function loadGoodsBeauty() {
	addGalleryGrid('data/goods-beauty.json', '.goodsBeauty');
}	
function loadGoodsBouquet() {
	addGalleryGrid('data/goods-bouquet.json', '.goodsBouquet');
}
function loadGoodsPerfume() {
	addGalleryGrid('data/goods-perfume.json', '.goodsPerfume');
}
function loadAllGoods() {
	addGalleryGrid('data/allGoods.json', '.goodsAll');
}	

function addToCart() {
	//Выделяем активированую кнопку корзины
	var current = $(this).addClass('active-cart');
	//добавляем товар в корзину при клике
	var art = $(this).attr('data-id');
	// if (cart[art]!=undefined) {
	// 	cart[art]++;
	// } else {
		cart[art] = 1;
	localStorage.setItem('cart', JSON.stringify(cart));
	showCartCount();
};


function checkCart() {
	//проверка корзины в localStorage
	if (localStorage.getItem('cart') != null) {
		cart = JSON.parse(localStorage.getItem('cart'));
	}
}


//Выводим количество в визуалтный индекс корзины в хедере
function showCartCount() {
	//счетчик корзины
	var numberCount = 0;
	 for (var count in cart) {
		numberCount += parseInt(cart[count]);
	 };
	 $('#total-cart-count').text(numberCount);
}

