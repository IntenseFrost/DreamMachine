<?php
$dsn = 'mysql:host=localhost;dbname=teste';
$user = 'root';
$pass= 'vertrigo';

try{

    $pdo = new PDO($dsn, $user, $pass);

    
}  
catch(PDOException $ex)
{
    echo 'ERRo:'.$ex->getMessage();    
}
?>