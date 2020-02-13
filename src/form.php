<?php
if(isset($_POST['submit'])) {
$to = "y.vacheslav@gmail.com"; // e-mail, куда будут приходить письма
$from = "kristina@soapideas.cc.ua";
$subject = "Форма отправки сообщений с сайта";
$message = "Получено сообщение для подписки от:" . "\n\n" . $_POST['email'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to ,$subject ,$message , $headers);
	 echo "Сообщение отправлено. Спасибо Вам " . $_POST['email'] . ", мы скоро свяжемся с Вами.";
	 echo "<br /><br /><a href='http://soapideas.cc.ua'>Вернуться на сайт.</a>";
}
?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
	function changeurl(){eval(self.location="http://soapideas.cc.ua");}
	window.setTimeout("changeurl();",3000);
</script>