
<?php
if(isset($_POST['submit'])){
$to = "y.vacheslav@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = $from . " оставил сообщение:" . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $from . "\n\n" . $_POST['email'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $from . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='http://soapideas.cc.ua'>Вернуться на сайт.</a>";

}

?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://soapideas.cc.ua");}
window.setTimeout("changeurl();",3000);
</script>