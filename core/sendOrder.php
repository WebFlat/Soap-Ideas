<?php

//считываем json файл
$json = file_get_contents('../data/allGoods.json');
$json = json_decode($json, true);

//письмо
$message = '';
$message .= '<h1>Заказ в магазине</h1>';
$message .= '<p>Имя заказчика: '.$_POST['name'].'</p>';
$message .= '<p>Фамилия заказчика: '.$_POST['soname'].'</p>';
$message .= '<p>Телефон: '.$_POST['phone'].'</p>';
$message .= '<p>Адрес электронной почты: '.$_POST['email'].'</p>';
$message .= '<p>Город: '. $_POST['city'] .'</p>';
$message .= '<p>Отделение Новой Почты: '.$_POST['numberNP'].'</p>';
$message .= '<p>Адрес: '.$_POST['address'].'</p>';


$cart = $_POST['cart'];
$sum = 0;
foreach ($cart as $id=>$count) {
	$message .= $json[$id]['name'].':  ';
	$message .= $count.'шт ';
	$message .= $count*$json[$id]['price'].'грн';
	$message .= '<br>';
	$sum = $sum + $count*$json[$id]['price'];
}
$message .= 'Итого: '.$sum.'грн <br>';
// print_r($message);

$subject = 'Заказ с магазина "Handmade Soap Ideas"';
$to = 'kristinakrajsvitnaa@gmail.com'.','; // Здесь нужно написать e-mail, куда будут приходить письма
$to .= $_POST['email']; // Здесь нужно написать e-mail, куда будут приходить копия письма
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, $subject, $spectext.$message.'</body></html>', $headers);
if ($m) {
	echo 1;
} else {
	echo 0;
}
