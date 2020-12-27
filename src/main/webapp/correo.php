<?php
    $destinatario = 'facueliaslopez@gmail.com'
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje']; 
    $email = $_POST['email'];

    $header = "Enviado desde la pagina de conchesumare";

    $mensajeCompleto = $mensaje . "\nAtentamente: ". $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo <script>alert("Correo enviado exitosamente")</script>
    echo <script> setTimeout(\"location.href='index.html'\",1000) </script>

?>