<?php
$name = $_POST['name']
$lastname = $_POST['lastname']
$email = $_POST['email']
$password = $_POST['password']

$con = new mysqli("localhost", "root", "form");
if (!$con) {
    echo "There is an issue while connecting the database "
}

$qry = "INSERT INTO `users`(`id`, `name`, `lastname`, `mail`, `password`) VALUES (NULL, "$name", "$lastname", "$mail", "$password")";
?>