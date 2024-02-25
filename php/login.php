<?php

$conn = new mysqli("localhost:3307", "root", "", "organizetask");

if ($conn->connect_errno) {
    echo "No hay conexión: (".$conn->connect_errno.")".$conn->connect_error;
}

$email = $_POST['txtemail'];
$pass = $_POST['txtpassword'];

if (isset($_POST['btnlogin'])) {
    // Usar consulta preparada
    $queryuser = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $queryuser->bind_param("s", $email);
    $queryuser->execute();

    $result = $queryuser->get_result();

    if ($result->num_rows == 1) {
        $searchpass = $result->fetch_assoc();

        // Verificar si la contraseña es correcta
        if (password_verify($pass, $searchpass['password'])) {
            echo "<script>window.location='../start.html'</script>";
        } else {
            echo "<script>alert('Incorrect user or password'); window.location='../login.html'</script>";
        }
    } else {
        echo "<script>alert('Incorrect user or password'); window.location='../login.html'</script>";
    }

    $queryuser->close();
}

// Cerrar la conexión
$conn->close();
