<?php 
if(isset($_POST['submit'])){
    $to = "y.vacheslav@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = "kristina@soapideas.cc.ua"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net
    $name = $_POST['name'];
    $subject = "Форма отправки сообщений с сайта";
    $message = "Имя посетителя: ". $name . "  | Адрес электронной почты: "  . $_POST['email'] . "  | Телефон: " . $_POST['phone'] . "  | Комментарий: " . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
	
    mail($to,$subject,$message,$headers);
   	 echo "Сообщение отправлено. Спасибо Вам " . $name . ", мы скоро ответим Вам.";
	echo "<br /><br /><a href='http://soapideas.cc.ua'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://dist");}
window.setTimeout("changeurl();",3000);
</script>