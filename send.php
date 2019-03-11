<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this webhost. 
Contact your hosting provider regarding PHP configuration for your site.
*/
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
	if ($_REQUEST["phone"]!="")

{
	$to = 'zakaz@santa-video.in.ua';
	$to1 = 'santapo4ta@gmail.com';
	$subject = 'Заявка с сайта ' . htmlentities($_SERVER["SERVER_NAME"],ENT_COMPAT,'UTF-8');
	
	$message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/><title>' . htmlentities($subject,ENT_COMPAT,'UTF-8') . '</title></head>';
	$message .= '<body style="background-color: #ffffff; color: #000000; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: 18px; font-family: helvetica, arial, verdana, sans-serif;">';
	$message .= '<h2 style="background-color: #eeeeee;">Новая заявка с сайта ' . htmlentities($_SERVER["SERVER_NAME"],ENT_COMPAT,'UTF-8') . '</h2><table cellspacing="0" cellpadding="0" width="100%" style="background-color: #ffffff;">'; 
    
	$message .= '<tr><td valign="top" style="background-color: #ffffff;"><b>Имя:</b></td><td>' . htmlentities($_REQUEST["name"],ENT_COMPAT,'UTF-8') . '</td></tr>';
	$message .= '<tr><td valign="top" style="background-color: #f1f1f1;"><b>Телефон:</b></td><td style="background-color: #f1f1f1;">' . htmlentities($_REQUEST["phone"],ENT_COMPAT,'UTF-8') . '</td></tr>';
	$message .= '<tr><td valign="top" style="background-color: #ffffff;"><b>E-mail:</b></td><td>' . htmlentities($_REQUEST["email"],ENT_COMPAT,'UTF-8') . '</td></tr>';
	$message .= '<tr><td valign="top" style="background-color: #f1f1f1;"><b>Город:</b></td><td style="background-color: #f1f1f1;">' . htmlentities($_REQUEST["gorod"],ENT_COMPAT,'UTF-8') . '</td></tr>';
	$message .= '<tr><td valign="top" style="background-color: #ffffff;"><b>Серия:</b></td><td>' . htmlentities($_REQUEST["pol"],ENT_COMPAT,'UTF-8') . '</td></tr>';
	$message .= '<tr><td valign="top" style="background-color: #ffffff;"><b>Код скидки:</b></td><td>' . htmlentities($_REQUEST["promo"],ENT_COMPAT,'UTF-8') . '</td></tr>';


	$message .= '</table><br/><br/>';
	$message .= '<div style="background-color: #eeeeee; font-size: 10px; line-height: 11px;">Форма прислана с сайта: ' . htmlentities($_SERVER["SERVER_NAME"],ENT_COMPAT,'UTF-8') . '</div>';
	$message .= '<div style="background-color: #eeeeee; font-size: 10px; line-height: 11px;">Visitor IP address: ' . htmlentities($_SERVER["REMOTE_ADDR"],ENT_COMPAT,'UTF-8') . '</div>';
	$message .= '</body></html>';
	$message = cleanupMessage($message);
	
	$formEmail = cleanupEmail($_REQUEST['Email']);
	$headers = 'From:  ' . $formEmail . "\r\n" . 'Reply-To: ' . $formEmail .  "\r\n" .'X-Mailer: random with PHP/' . phpversion() . "\r\n" . 'Content-type: text/html; charset=utf-8' . "\r\n";
	
	$sent = @mail($to, $subject, $message, $headers);
	$sent1 = @mail($to1, $subject, $message, $headers);
	
   /*$headers = 'From:  '.$to."\r\n".'Reply-To: '.$to."\r\n" .'X-Mailer: random with PHP/'.phpversion()."\r\n".'charset=utf-8'."\r\n";
   mail($formEmail, 
        'Спасибо за заявку на сайте ' . $_SERVER["SERVER_NAME"], 
        "Здравствуйте.  Ваша заявка на новогоднее именное видео поздравление получена. Срок обработки и выполнения заказа 1-3 дня. Спасибо за заказ.", 
        $headers);
        */
	if($sent){}
	else {
		echo '{"MusePHPFormResponse": { "success": false,"error": "Failed to send email"}}';
	}
}
}

function cleanupEmail($email)
{
	$email = htmlentities($email,ENT_COMPAT,'UTF-8');
	$email = preg_replace('=((<CR>|<LF>|0x0A/%0A|0x0D/%0D|\\n|\\r)\S).*=i', null, $email);
	return $email;
}

function cleanupMessage($message)
{
	$message = wordwrap($message, 70, "\r\n");
	return $message;
}
?>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="content-type" content="text/html" />
	<meta name="author" content="Silence / REPT" />
  <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
	<title>Спасибо за заказ!</title>
</head>

<body>
 <div style="text-align: center; display: block; position: absolute; bottom: 0%; left: 0%; width: 100%; top:  48%;">
  <span id="info" style="font-size: 28px; vertical-align: middle;">
    Спасибо за заказ!<br />
    <span style="color: silver;">через 5 секунд вы будете перемещены на главную</span>
    <script>setTimeout(function(){location.replace(".");}, 5000);</script>
    <!--?php  header('Refresh:5; URL=index.htm' ); ?-->
  </span>
 </div>
</body>
</html>