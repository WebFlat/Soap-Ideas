var cart = {};

$.getJSON('data/allGoods.json', function(data) {
    var goods = data;//все товары в массивы
    checkCart();
    $('#cart-loading').css('display', 'none');
    showCart();//вывод товара в корзине
    function showCart() {
      var out = '';
      for (var key in cart) {
        out += '<div class="table-cart__item">';
        out += '<span class="table-cart__title table-cart__title--name" id="cart-name">' +goods[key].name+ '</span>';
        out += '<span class="table-cart__title" id="cart-price">' +goods[key].price+ '</span>';
        out += '<span class="table-cart__title" id="cart-count">' +cart[key]+ '</span>';
        out += '<span class="table-cart__title" id="sum">' +cart[key]*goods[key].price+ '</span>';
        out += '<span class="table-cart__title table-cart__title--del delProduct" data-id="'+key+'">X</span>';
        out += '</div>';
      }
      $('#cart').html(out);
      $('.delProduct').on('click', deleteGoods);
      showCartCount();
    }
    function saveCartToLS() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function deleteGoods() {
      var id = $(this).attr('data-id');
      delete cart[id];
      saveCartToLS();//сохраняю корзину в LocalStorage
      showCart();
    }
     
  })

 function checkCart() { //проверка корзины в localStorage
	    if (localStorage.getItem('cart') != null) {
		      cart = JSON.parse(localStorage.getItem('cart'));
	      } 
      }