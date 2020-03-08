<?php 
if(isset($_POST['submit'])){
    $to = "y.vacheslav@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = "kristina@soapideas.cc.ua"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net
    $name = $_POST['name'];
	$soname = $_POST['soname'];
	$tel = $_POST['phone'];
	$email = $_POST['email'];
	$city = $_POST['city'];
	$post = $_POST['numberNP'];
    $subject = "Форма заказа с сайта";
    $message = "Имя посетителя: ". $name ." <br /> | Фамилия посетителя: ". $soname .  "<br />  | Адрес электронной почты: "  . $_POST['email'] . "<br />  | Телефон: " . $_POST['phone'] . "<br/>  | Город: " . $_POST['city'] . "<br /> | Отделение Новой Почты: " .$_POST['numberNP'];
    $message2 = "Ваш заказ: " "<br/> Имя посетителя: ". $name . "<br /> | Фамилия посетителя: ". $soname .  "<br />  | Адрес электронной почты: "  . $_POST['email'] . "<br />  | Телефон: " . $_POST['phone'] . "<br/>  | Город: " . $_POST['city'] . "<br /> | Отделение Новой Почты: " .$_POST['numberNP'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
	
    mail($to,$subject,$message,$headers);
	mail($email,$subject,$message2,$headers2);
   	 echo "Заказ отправлен. Спасибо Вам " . $name . ", мы скоро свяжемся с Вами.";
	echo "<br /><br /><a href='http://soapideas.cc.ua'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://soapideas.cc.ua");}
window.setTimeout("changeurl();",3000);
</script>