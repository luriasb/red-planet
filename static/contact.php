<?php
 
if($_POST) {
    $contact_name = "";
    $contact_email = "";
    $contact_tel = "";
    $contact_message = "";
    $recipient = "lezamaber@gmail.com";
    $email_title = "Nuevo mensaje del formulario de contacto.";
     
    if(isset($_POST['contact_name'])) {
      $contact_name = filter_var($_POST['contact_name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['contact_email'])) {
        $contact_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['contact_email']);
        $contact_email = filter_var($contact_email, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['contact_tel'])) {
        $contact_tel = filter_var($_POST['contact_tel'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['contact_message'])) {
        $contact_message = htmlspecialchars($_POST['contact_message']);
    }
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $contact_email . "\r\n";

    if(mail($recipient, $email_title, $contact_message, $headers)) {
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