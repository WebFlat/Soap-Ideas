var cart = {};



    function showCart() {
      var out;
      if ($.isEmptyObject(cart)) {
        //cart empty
        $('#order').addClass('disabledX');
        $('.table-cart__items').css('color', 'transparent');
        out += '<img src="./img/loading.gif" alt="loading" id="cart-loading" class="loading-img">';
        $('#cart').html(out);
        showCartCount();
        $('.checkout').css('display', 'none');
      } else {
        $('#order').removeClass('disabledX').css('visibility', 'visible');
        $.getJSON('data/allGoods.json', function(data) {
          var goods = data;//все товары в массивы
          out = '';
          for (var key in cart) {
            out += '<div class="table-cart__item">';
            out += '<div class="table-cart__title table-cart__title--name">';
            out += '<div class="table-cart__img-wrap">';
            out += '<img src="'+goods[key].img+'" class="table-cart__img" id="cart-img">';
            out += '</div>';
            out += '<span class="table-cart__title table-cart__name bold" id="cart-name">' +goods[key].name+ '</span>';
            out += '</div>';
            out += '<span class="table-cart__title bold" id="cart-price">' +goods[key].price+ '</span>';
            out += '<div class="table-cart__title table-cart__title--quantity bold">';
            out += '<span class="table-cart__sing minus bold" data-art="'+key+'">-</span>';
            out += '<span class="table-cart__count" id="cart-count">' +cart[key]+ '</span>';
            out += '<span class="table-cart__sing plus bold" data-art="'+key+'">+</span>';
            out += '</div>';
            out += '<span class="table-cart__title sum bold" id="sum">' +cart[key]*goods[key].price+ '</span>';
            out += '<span class="table-cart__title table-cart__title--del delProduct" data-id="'+key+'" title="DELETE">X</span>';
            out += '</div>';
          };
        $('#cart').html(out);
        $('.plus').on('click', plusGoods);
        $('.minus').on('click', minusGoods);
        $('.delProduct').on('click', deleteGoods);
        showCartCount();
        showSum();
        $('#order').on('click', showSendform);//вывод формы подтверждения заказа
      });
    }
  };

    function saveCartToLS() {
      localStorage.setItem('cart', JSON.stringify(cart));
    };



    function showSum() {
      var arrQuantity = [];
          $('.sum').each(function(i) {
            arrQuantity[i] = parseInt($(this).text());
          });
          if (arrQuantity == null) {
              $('#total-sum').text('0');
            } else {
              function arrQuantitySum(array) {
                var sum = 0;
                for (var c = 0; c < array.length; c++) {
                 sum += array[c];
                }
                $('#total-sum').text(sum);
              }
            arrQuantitySum(arrQuantity);
            }
    };


    //удаляем товар из корзины
    function deleteGoods() {
      var id = $(this).attr('data-id');
      delete cart[id];
      saveCartToLS();//сохраняю корзину в LocalStorage
      showCart();
      showSum();
    };

    //уменьшаем количество на 1
    function minusGoods() {
      var articul = $(this).attr('data-art');
       if (cart[articul] > 1) cart[articul]--;
       else delete cart[articul];
      showCart();
      showSum();
      saveCartToLS();//сохраняю корзину в LocalStorage
    };

    //увеличиваем количество на 1
    function plusGoods() {
      var articul = $(this).attr('data-art');
      cart[articul]++;
      showCart();
      showSum();
      saveCartToLS();//сохраняю корзину в LocalStorage
    }


    

 function checkCart() { //проверка корзины в localStorage
	  if (localStorage.getItem('cart') != null) {
		  cart = JSON.parse(localStorage.getItem('cart'));
      showCart();
	  } 
  };

//кнопка оформить заказ
  function showSendform() {
    if ($('cart') != null) {
      $('.checkout__form').removeClass('disabledY');
      $('.checkout').css('height', 'auto');
    } else {
      $('.checkout__form').addClass('disabledY');
    }
  }

//отправка заказа
function sendCheckout() {
      var name = $('#name').val();
      var soname = $('#soname').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      var city = $('#city').val();
      var numberNP = $('#numberNP').val();
      var address = $('#address').val();
        if (name!='' && soname!='' && phone!='' && email!='' && city!='' && numberNP!='' && address!='') {
          $.post(
              "core/sendOrder.php",
            {
              "name": name,
              "soname": soname,
              "phone": phone,
              "email": email,
              "city": city,
              "numberNP": numberNP,
              "address": address,
              "cart": cart
            },
            function(data) {
              if (data==1) {
                alert('Заказ успешно отправлен. В ближайшее время с Вами свяжется наш менеджер. Спасибо за ваш заказ!');
                cart = {};
                saveCartToLS();
                showCart();
                showSum();
              } else {
                alert('Повторите заказ!');
              }
            }
          );
        } else {
          alert('Введите все данные для отправки');
        }
      }

 $(document).ready(function () {
   checkCart();
   $('#sendCheckout').on('click', sendCheckout);//отправка заказа
});



  