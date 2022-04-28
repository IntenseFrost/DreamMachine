<?php
    
    include('conexaoBanco.php');


    $data=[

        'nome' => $_POST["n_user"],
        'senha' => $_POST["n_senha"],
    ];

$submit = $pdo->prepare('INSERT INTO login(user, senha) values(:nome, :senha) ');

try{
    $pdo->beginTransaction();
    $submit->execute($data);
    $pdo->commit();
    echo 'Resgistro Salvo com sucesso';
}catch(Exception $e){
    $pdo->rollback();
    throw $e;
}


?>