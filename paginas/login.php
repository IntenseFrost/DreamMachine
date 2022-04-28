<?php
  
  include('cabecalho1.php');

?>

<title>Login</title>

<?php

  include('cabecalho2.php');

?>

    <div id="areaFormLogin">
        <div id="alerta"></div>
        <form id="formLogin">

            <h1 class="titLogin">LOGIN</h1>

            <label id="id_etiquetaEmail" for="id_user">Email</label><br>
            <input type="email" id="id_user" name="n_user" class="inputLogin" placeholder="Ex: dreammachineltda@gmail.com"><br><br><br>
            

            <label id="id_etiquetaSenha" for="id_senha">Senha</label><br>
            <input type="password" id="id_senha" name="n_senha" class="inputLogin"><br>
           
            <button id="id_btn" class="btnLogin" type="button" onclick="entrar();">Entrar</button>

            <p>Esqueceu sua senha?</p>
            <p>Ainda não é um dos nossos? <br><a href="">click aqui</a> e faça seu cadastro</p>

        </form>
    </div>



<?php

    include('rodape.php');

?>
<script src="../js/Jquery.js"></script>
<script src="../js/login.js"></script>
