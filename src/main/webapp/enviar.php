<!DOCTYPE html>
<html>

<head>
  <title>Start Page</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body>
<?php 
$myemail = 'facueliaslopez@gmail.com';
$name = $_POST['nombre'];
$email = $_POST['email'];
$message = $_POST['mensaje'];

$to = $myemail;
$email_subject = "Nuevo mensaje: $subject";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
echo "El mensaje se ha enviado correctamente";
?>


  <header>
<div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 text-center">
        <p class="m-0 pt-1 textoHeader fw-bold"><img src="iconos/cellphone.png" alt="" width="20px" class>1169478162</p>
      </div>
      <div class="col-sm-4 text-center">
        <p class="m-0 pt-1 pb-1 textoHeader fw-bold"><img src="iconos/ubicacion.png" alt="" width="20px">E De San Martin 3224, Valentin Alsina,
          Buenos Aires, Argentina</p>
      </div>
      <div class="col-sm-4 text-center">
        <p class="m-0 pt-1 pb-1 textoHeader fw-bold"><img src="iconos/correo.png" alt="" width="20px"> example@hotmail.com</p>
      </div>

    </div>
</div>
  </header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="cypher.png" alt="" width="50px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse copy"></div>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item flex-fill justify-content-center">
            <a class="nav-link" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Features</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  <form action="enviar.php" method="post">
    <input type="text" name="nombre" id="name" class="nombre" placeholder="NOMBRE">
    <input type="text" name="email" id="subject" class="email" placeholder="EMAIL">
    <textarea type="text" name="mensaje" placeholder="MENSAJE"></textarea>
    <input type="submit" value="ENVIAR">
  </form>
  
</body>

</html>