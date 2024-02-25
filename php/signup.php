<?php

$conn = new mysqli("localhost:3307", "root", "", "organizetask");

if ($conn->connect_errno) {
    echo "No hay conexión: (".$conn->connect_errno.")".$conn->connect_error;
}

$name = $_POST['txtname'];
$email = $_POST['txtemail'];
$pass = $_POST['txtpassword'];

// Verificar la longitud de la contraseña y requisitos adicionales
if (strlen($pass) < 8 || !preg_match("/[A-Z]/", $pass) || !preg_match("/[0-9]/", $pass)) {
    echo "<script>alert('La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número'); window.location='../index.html'</script>";
    exit(); // Detener la ejecución del script si la contraseña no cumple con los requisitos
}

if (isset($_POST['btnsignup'])) {
    $pass_strong = password_hash($pass, PASSWORD_DEFAULT);

    // Usar consulta preparada
    $querysignup = $conn->prepare("INSERT INTO users(name, email, password) VALUES (?, ?, ?)");
    $querysignup->bind_param("sss", $name, $email, $pass_strong);

    if ($querysignup->execute()) {
        echo "<script>alert('Registered user: $name'); window.location='../login.html'</script>";
    } else {
        echo "Error: ".$querysignup->error;
    }

    $querysignup->close();
}

// Cerrar la conexión
$conn->close();
