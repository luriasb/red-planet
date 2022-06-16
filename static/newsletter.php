<?php
 
if($_POST) {
    $email = "";
    $email_title = "Suscrito al Newsletter";
    $message = 'Deseo suscribirme al Newletter';
    $recipient = "lezamaber@gmail.com";

    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
     
    if(mail($recipient, $email_title, $message, $headers)) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => true]);
    } else {
      header('Content-Type: application/json; charset=utf-8');
      echo json_encode(['success' => false]);
    }
     
} else {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['success' => false]);
}
 
?>