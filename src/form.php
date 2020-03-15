<?php
if(isset($_POST['submit'])) {
$to = "kristinakrajsvitnaa@gmail.com"; // e-mail, куда будут приходить письма
$from = "no-reply@soapideas.ho.ua";
$subject = "Форма отправки сообщений с сайта";
$message = "Получено сообщение для подписки от:" . "\n\n" . $_POST['email'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to ,$subject ,$message , $headers);
	 echo "Сообщение отправлено. Спасибо Вам " . $_POST['email'] . ", подписка добавлена.";
	 echo "<br/><br/><a href='http://soapideas.ho.ua'>Вернуться на сайт.</a>";
}
?>

<!--Переадресация на главную страницу сайта, через 5 секунды-->
<script language="JavaScript" type="text/javascript">
	function changeurl(){eval(self.location="http://soapideas.ho.ua");}
	window.setTimeout("changeurl();",5000);
</script>